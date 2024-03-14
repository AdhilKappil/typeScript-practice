// Define a base class for bank account
class BankAccount{

    protected balance : number;

    constructor (initialBalance:number){
        this.balance = initialBalance
    }

   // Method to deposit money into the account
    deposit(amount:number):void{
        this.balance += amount
        console.log(`${amount} credited : New balance is ${this.balance}`);
        
    }


    // Method to withdraw money from the account
    withdraw(amount:number){
        if(amount <= this.balance){
            this.balance -= amount
            console.log(`${amount} debited : New balance is ${this.balance}`);
            
        }else{
            console.log('Insufficient balance');
            
        }
    }


    // Method to get the current balance
    getBalance():number{
        return this.balance
    }
}


// Define a subclass for SavingsAccount, inheriting from BankAccount
class SavingsAcoount extends BankAccount{

    private interestRate : number

    constructor(initialBalance:number, interestRate:number){
        super(initialBalance)
        this.interestRate = interestRate
    }

    // Method to apply interest to the savings account balance
    applyIntrest(){
        let intrest = this.balance * (this.interestRate / 100)
        this.balance += intrest
        console.log(`${intrest} intrest added : New balance is ${this.balance}`);
        
    }
}


// Define a subclass for checking account, inheriting from BankAccount for daily transactions
class CheckingAccount extends BankAccount{

    private overdraftLimit : number;

    constructor (initialBalance:number,overdraftLimit:number){
        super(initialBalance)
        this.overdraftLimit = overdraftLimit;
    }

    // Method to withdraw money from the checking account, with overdraft
    withdraw(amount: number): void {
        const availableBalance = this.balance + this.overdraftLimit
        if(amount <= availableBalance){
            this.balance -= amount
            console.log(`${amount} debited : New balance is ${this.balance}`);
            
        }else{
            console.log("Exceeded overdraft limit");
        }
    }
}


const savingsAccount = new SavingsAcoount(1000,10)
const checkingAccount = new CheckingAccount(500, 200)

console.log(`Savings Account Balance: ${savingsAccount.getBalance()}`);
console.log(`Cheking Account Balance: ${checkingAccount.getBalance()}`);

savingsAccount.deposit(500);
savingsAccount.applyIntrest();
console.log(`Savings Account Balance: ${savingsAccount.getBalance()}`);

checkingAccount.withdraw(300);
console.log(`Checking Account Balance: ${checkingAccount.getBalance()}`);

checkingAccount.withdraw(800);
console.log(`Checking Account Balance: ${checkingAccount.getBalance()}`);
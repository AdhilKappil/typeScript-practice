// named type or custom type

type StatusType = 'pending' | 'completed' | 'failed' | ''

let currentStatus : StatusType = ''

// from api call
const response = 'pending'

if(response === 'pending'){
    currentStatus = 'pending'
}else if(response === 'complted'){
    currentStatus = 'completed'
}else{
    currentStatus = 'failed'
}

// named typed using enum it will assign default value (pendig = 0, complted = 1 or we can start with any value)
enum StatusType1  {
    Pending,
    Complted,
    Failed
}

// we can provid like this for exact status
// enum StatusType1  {
//     Pending = 'panding',
//     Complted = 'completed',
//     Failed = 'failed'
// }

function getStatus(orderId:string, status:StatusType1){
    console.log(orderId+'='+status);
    
}
getStatus('1234', StatusType1.Complted)
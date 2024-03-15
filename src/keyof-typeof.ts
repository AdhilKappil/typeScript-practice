
const StatusType = {
    Pending : 'panding',
    Complted : 'completed',
    Failed : 'failed'
}as const // now no one can change the value

function getStatus1(orderId:number,status:keyof typeof StatusType){
    // StatusType[status] = 'solving'
    console.log(orderId +' : '+StatusType[status]);
}

getStatus1(1234,'Complted')
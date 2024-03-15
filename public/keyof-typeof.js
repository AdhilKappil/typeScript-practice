"use strict";
const StatusType = {
    Pending: 'panding',
    Complted: 'completed',
    Failed: 'failed'
}; // now no one can change the value
function getStatus1(orderId, status) {
    // StatusType[status] = 'solving'
    console.log(orderId + ' : ' + StatusType[status]);
}
getStatus1(1234, 'Complted');

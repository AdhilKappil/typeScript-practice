"use strict";
const StatusType = {
    Pending: 'panding',
    Complted: 'completed',
    Failed: 'failed'
}; // now one can change the value
function getStatus(orderId, status) {
    // StatusType[status] = 'solving'
    console.log(orderId + ' : ' + StatusType[status]);
}
getStatus(1234, 'Complted');

"use strict";
// named type or custom type
Object.defineProperty(exports, "__esModule", { value: true });
let currentStatus = '';
// from api call
const response = 'pending';
if (response === 'pending') {
    currentStatus = 'pending';
}
else if (response === 'complted') {
    currentStatus = 'completed';
}
else {
    currentStatus = 'failed';
}
// named typed using enum it will assign default value (pendig = 0, complted = 1 or we can start with any value)
var StatusType1;
(function (StatusType1) {
    StatusType1[StatusType1["Pending"] = 0] = "Pending";
    StatusType1[StatusType1["Complted"] = 1] = "Complted";
    StatusType1[StatusType1["Failed"] = 2] = "Failed";
})(StatusType1 || (StatusType1 = {}));
// we can provid like this for exact status
// enum StatusType1  {
//     Pending = 'panding',
//     Complted = 'completed',
//     Failed = 'failed'
// }
function getStatus(orderId, status) {
    console.log(orderId + '=' + status);
}
getStatus('1234', StatusType1.Complted);

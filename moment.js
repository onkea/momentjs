var moment = require('moment');

var fulldate = moment().format('MMMM Do YYYY, h:mm:ss a');
var fullday = moment().format('dddd');
var monthdayyear = moment().format("MMM Do YY");
var fullyear = moment().format('YYYY [escaped] YYYY');
var defaultdate = moment().format();

console.log('full date: ' + fulldate);
console.log('full day: ' + fullday);
console.log('month day year: ' + monthdayyear);
console.log('full year: ' + fullyear);
console.log('default date: ' + defaultdate);

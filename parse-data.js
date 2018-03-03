const moment = require('moment');

// require three args: json file, start date, and end date
if (
  process.argv[2] === undefined ||
  process.argv[3] === undefined ||
  process.argv[4] === undefined) {
    console.log('Error: invalid arguments');
    console.log('usage: node parse-data.js <habitdata.json> <startDate (mm/dd)> <endDate (mm/dd)> to get habit count for dates inclusive');
    process.exit(1);
};
// import the json file
const habitData = require('./' + process.argv[2]);

// for each habit, return a count of successes between the start and end date, inclusive
const startDate = moment(process.argv[3]);
const endDate = moment(process.argv[4]).endOf('day');
console.log('================');
console.log('start date: ' + startDate.format("dddd, MMMM Do YYYY"));
console.log('end date: ' + endDate.format("dddd, MMMM Do YYYY"));
console.log('================');
// count number of occurrences within start and end dates, inclusive
console.log('Completions within start and end dates, inclusive:')
console.log('-------------------')
habitData.forEach(function(habitObj) {
  const completions = []
  habitObj.completed.forEach(function(date) {
    const completionDate = moment(date)
    if (completionDate.isBetween(startDate, endDate, null, [])) {
      completions.push(moment(date))
    }
  })
  console.log(`${habitObj.name}: ${completions.length}`)
});

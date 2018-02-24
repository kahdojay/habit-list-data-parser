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
const startDate = new Date(process.argv[3]);
const endDate = new Date(process.argv[4]);
console.log('================');
console.log('start date: ' + startDate.getMonth() + '/' + startDate.getDate());
console.log('end date: ' + endDate.getMonth() + '/' + endDate.getDate());
console.log('================');
// count number of occurrences within start and end dates, inclusive
console.log('Completions within start and end dates, inclusive:')
console.log('-------------------')
habitData.forEach(function(habitObj) {
  let completions = []
  habitObj.completed.forEach(function(date) {
    let completionDate = new Date(date).getUTCDate()
    if (completionDate >= new Date(startDate.getUTCDate()) && completionDate <= new Date(endDate.getUTCDate())) {
      completions.push(completionDate)
    }
  })
  console.log(`${habitObj.name}: ${completions.length}`)
});

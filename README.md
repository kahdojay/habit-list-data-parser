# habit-list-data-parser
Basic CLI Utility to parse JSON data from the [Habit List mobile app](https://habitlist.com/)

Usage:

- Use the Habit List app to track your habits
- Export your data into a habitdata.json file
- Run on the command line from the project directory:

```
node parse-data.js <path/to/habitdata.json> <startDate (mm/dd/yy)>
<endDate (mm/dd/yy)> #habit success count for dates inclusive
```

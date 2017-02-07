# sussol-utilities
Utility code used across sussol repositories, in four different categories

## Installation
```npm install --save sussol-utilities```

### Authentication
Re-exports the three methods from [authentication-utilities](https://github.com/sussol/authentication-utilities)

### Scheduling
Provides the ability to schedule functions after an interval, and maintains handles on any scheduled functions so they can be canceled  
An instance of Scheduler provides two methods:
*```schedule(callback, interval)``` - Schedules the ```callback``` function to be executed after ```interval``` milliseconds
*```clearAll()``` - Cancels any scheduled functions that have not been executed. Should be called for safety before the Scheduler instance goes out of scope

```
import { Scheduler } from 'sussol-utilities';

function exampleScheduling() {
  const permanentScheduler = new Scheduler();
  const temporaryScheduler = new Scheduler();
  temporaryScheduler.schedule(() => {console.log('Welcome')}, 0);  // Say 'Welcome' immediately but asynchronously
  permanentScheduler.schedule(() => {console.log('Hello')}, 1000); // Say 'Hello' after 1000 milliseconds
  temporaryScheduler.schedule(() => {console.log('World')}, 2500); // Say 'World' after 2500 milliseconds
  temporaryScheduler.clearAll();
}
```

### Formatting
Exports three methods for formatting strings
*```formatDate(date, format)``` - Returns the date object passed in as a string in either the format dd/mm/yyyy or dd.mm.yyyy depending on whether 'slashes' or 'dots' is passed in as the ```format``` argument (defaults to slashes)
*```formatDateAndTime(date, format)``` - As above, but with the time appended to the end in the format defined [by the locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString)
*```truncateString(string, maxLength)``` - Returns the string chopped off at ```maxLength```, with ```...``` replacing the last three characters if it overflowed

### Parsing
Converts strings to other objects, so far just positive integers
*```parsePositiveInteger(string)``` - Returns the integer represented by the given string, or 0 if it is negative or not a number

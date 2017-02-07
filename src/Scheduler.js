/**
 * Sustainable Solutions (NZ) Ltd. 2016
 */

/**
* A Scheduler provides the ability to schedule functions after an interval, and maintains handles on
* any scheduled functions so they can be canceled
*/
export class Scheduler {
  constructor() {
    this.intervalIds = [];
  }

  /**
  * Schedules the callback function to be executed after interval milliseconds
  * @param {function} onInterval The function to be executed after a delay
  * @param {integer}  interval   The number of milliseconds before the function should be called
  */
  schedule(onInterval, interval) {
    const intervalId = setInterval(onInterval, interval);
    this.intervalIds = [...this.intervalIds, intervalId];
  }

  /**
  * Cancels any scheduled functions that have not been executed. Should be called for safety before
  * the Scheduler instance goes out of scope
  */
  clearAll() {
    for (const intervalId of this.intervalIds) {
      clearInterval(intervalId);
    }
    this.intervalIds = [];
  }
}

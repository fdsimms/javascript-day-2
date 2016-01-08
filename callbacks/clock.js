function Clock () {
  var date = new Date;
  this.seconds = date.getSeconds();
  this.minutes = date.getMinutes();
  this.hours = date.getHours();

  this.printTime();
  // 3. Call printTime.

  setInterval(this._tick.bind(this), 1000);
  // 4. Schedule the tick at 1 second intervals.
}

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  var time = this.hours + ":" + this.minutes + ":" + this.seconds;
  // Use console.log to print it.
  console.log(time);
};

Clock.prototype._tick = function () {
  // 1. Increment the time by one second.
  this.seconds++

  if (this.seconds == 60) {
    this.seconds = 00;
    this.minutes++;
  }
  if (this.minutes == 60) {
    this.minutes = 00;
    this.hours++;
  }
  if (this.hours == 13) {
    this.hours = 0;
  }

  // 2. Call printTime.
  this.printTime.bind(this)();
};

var clock = new Clock();

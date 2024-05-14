#! /usr/bin/env node
var chalk = require('chalk');
var dat = new Date();
var hour = dat.getHours();
// current minutes
var minute = dat.getMinutes();
// current seconds
var second = dat.getSeconds();
console.log(chalk.green("\n", "Current Time: ", hour + ":" + minute + ":" + second));
console.log(chalk.bgMagenta("\n", "Countdown in seconds.....", "\n"));
var i = 0;
function countdown() {
    i++;
    var t = second - i;
    if (t >= 0) {
        console.log(chalk.green(hour) + ':' + chalk.yellow(minute) + ':' + chalk.cyan((t)));
    }
    if (t < 0) {
        clearInterval(h);
    }
}
var h = setInterval(countdown, 1000);

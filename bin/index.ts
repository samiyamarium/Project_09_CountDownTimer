#! /usr/bin/env node
const chalk=require('chalk')
let dat = new Date();
let hour = dat.getHours();

// current minutes
let minute = dat.getMinutes();

// current seconds
let second = dat.getSeconds();
console.log(chalk.green("\n","Current Time: ", hour + ":" + minute + ":" + second));
console.log(chalk.bgMagenta("\n","Countdown in seconds.....", "\n"))

let i = 0;
function countdown() {
  i++;
  let t=second-i
  if(t>=0){
  console.log(chalk.green(hour)+ ':' + chalk.yellow(minute) +':'+ chalk.cyan((t)));}
if(t<0){
    clearInterval(h)
}}
 
let h=setInterval(countdown, 1000);



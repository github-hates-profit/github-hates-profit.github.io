
import { CountUp } from './countUp.js';

const lossPerSecond = 0.00608828006
const startDate = new Date(2020, 5, 15, 0, 0, 0, 0)

function calculateCurrentLoss(lossPerSec) {
  const currentDate = new Date()
  const secondsOfLoss = ( currentDate.getTime() - startDate.getTime() ) / 1000;
  return secondsOfLoss * lossPerSec
}


window.onload = function() {
  const currentLoss = calculateCurrentLoss(lossPerSecond)
  const options = {
      decimalPlaces: 2,
    };
  var countUp = new CountUp('number', currentLoss, options);
  countUp.start();

  setInterval(function(){ 
    const currentLoss = calculateCurrentLoss(lossPerSecond)
    countUp.update(currentLoss);
  }, 1000);
}
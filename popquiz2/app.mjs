import Garage from './garage.mjs';

const myGarage = new Garage(false, 'ABC123');

myGarage.enterGarage(); // logs "Car with ABC123 plat number can park here"
myGarage.leaveGarage(); // logs "Car with ABC123 plat number is leaving the garage"
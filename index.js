// Code your solution in this file!


const returnFirstTwoDrivers = function (array) {
  return array.slice(0,2)
}

const returnLastTwoDrivers = function (array) {
  return array.slice(-2)
}

// function selectingDrivers(selection) {
//   let array = [returnFirstTwoDrivers, returnLastTwoDrivers]
//   return array[selection]()
// }
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function (multiplier) {
  return function (value) {
    return value * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (array, func){
  return func(array)
}

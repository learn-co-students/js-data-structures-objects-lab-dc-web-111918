// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  // updates `driver` with the given `key` and `value` (it is destructive) and
  // returns the entire updated driver
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver,key) {
  const newObj = Object.assign({}, driver)
  delete newObj[key];
  return newObj;

}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}

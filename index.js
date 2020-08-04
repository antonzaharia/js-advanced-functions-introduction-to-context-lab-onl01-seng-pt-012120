// Your code here
function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour : arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
};
function createEmployeeRecords(records) {
  r = records.map(function(record){
    return createEmployeeRecord(record);
  })
}

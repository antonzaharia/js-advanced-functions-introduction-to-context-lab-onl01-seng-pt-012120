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
  let recordArray = records.map(function(record){
    createEmployeeRecord(record);
    console.log(record);
  })
}

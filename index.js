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
  let recordsArray = [];
  records.forEach(function(record){
    recordsArray.push(createEmployeeRecord(record));
  });
  return recordsArray;
}

function createTimeInEvent(record, dateTime) {
  let hour = dateTime.split(" ")[1];
  let date = dateTime.split(" ")[0];
  record.timeInEvents.push({
    type: "TimeIn",
    hour: hour,
    date: date
  })
  return record;
}

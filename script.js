"use strict"
// Task 1
var arr = [1,2,3,4,5,6,7,8,9,10];
var taskOneOutput = document.getElementById('new');

taskOneOutput.innerHTML = arr;

// Task 2
var form = document.getElementById('form-task-2');

function changeArrElement() {
	var indexInput = form.indexInput.value;
	var arrValue = form.arrValue.value;
	
	if (indexInput >= 0 && indexInput < 10) {
		arr[indexInput] = arrValue;
		taskOneOutput.innerHTML = arr;
	} else {
		alert('wrong index');
	}
}
// Task 3
function popArray () {
  arr.pop();
  taskOneOutput.innerHTML = arr;
}

// Task 4
function shiftArray () {
 arr.shift();
 taskOneOutput.innerHTML = arr;
}
// Task 5
function pushArray () {
  arr.push("2");
  taskOneOutput.innerHTML = arr;
}
// Task 6
function unshiftArray () {
   var arrValue = form.arrValue.value;
   arr.unshift(arrValue);
   taskOneOutput.innerHTML = arr;
 }

let crossNumber = document.querySelectorAll(".cross");
let inputChecked = document.querySelectorAll(".input-check");
let count = 0;

let updateTaskNumber = (number) => {
  document.getElementById("number").innerHTML = number;
};

document.getElementById("todo-input").addEventListener("change", () => {
  crossNumber = document.querySelectorAll(".cross");
  taskNumber = document.getElementById("number").innerHTML;

  inputChecked = document.querySelectorAll(".input-check");
  console.log(taskNumber);
});

const taskList = document.querySelector("#check-list"); // Common ancestor element

taskList.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("cross") &&
    event.target.parentElement.classList.contains("check")
  ) {
    event.target.parentElement.remove();
    taskNumber -= 1;
    updateTaskNumber(taskNumber);
  }
});

document.getElementById("clear").addEventListener("click", () => {
  clear();
});

let clear = () => {
  inputChecked.forEach((element) => {
    if (element.checked) {
      count++;
      element.parentNode.remove();
      decreaseCount(count);
      count = 0;
    }
  });
};

let decreaseCount = (count) => {
  taskNumber = taskNumber - count;
  updateTaskNumber(taskNumber);
};

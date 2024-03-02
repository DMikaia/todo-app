let optionList = document.querySelectorAll("#options span");
let inputCheckBox = document.querySelectorAll(".input-check");

document.getElementById("todo-input").addEventListener("change", () => {
  inputCheckBox = document.querySelectorAll(".input-check");
});

optionList.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.classList.add("active-options");

    filterTask(index);

    removeLastActive(index);
  });
});

let removeLastActive = (index) => {
  for (let i = 0; i < optionList.length; i++) {
    if (i !== index && optionList[index].classList.contains("active-options")) {
      optionList[i].classList.remove("active-options");
    }
  }
};

let filterTask = (id) => {
  switch (id) {
    case 0:
      inputCheckBox.forEach((element) => {
        if (element.parentElement.style.display === "none") {
          element.parentElement.style.display = "flex";
        }
      });
      break;
    case 1:
      inputCheckBox.forEach((element) => {
        if (!element.checked) {
          element.parentElement.style.display = "flex";
        } else {
          element.parentElement.style.display = "none";
        }
      });
      break;
    case 2:
      inputCheckBox.forEach((element) => {
        if (element.checked) {
          element.parentElement.style.display = "flex";
        } else {
          element.parentElement.style.display = "none";
        }
      });
      break;
    default:
      break;
  }
};

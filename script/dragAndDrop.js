let dragableTask;

let listSorter = document.getElementById("check-list");

let siblings = [...listSorter.querySelectorAll(".check:not(.dragging)")];

let draggingItem = listSorter.querySelector(".draggable");

dragableTask = document.querySelectorAll(".check");

const initSortableList = (e) => {
  draggingItem = listSorter.querySelector(".draggable");

  siblings = [...listSorter.querySelectorAll(".check:not(.dragging)")];

  let nextSiblings = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  console.log(draggingItem);

  listSorter.insertBefore(draggingItem, nextSiblings);
};

document.getElementById("todo-input").addEventListener("change", () => {
  dragableTask = document.querySelectorAll(".check");

  listSorter = document.getElementById("check-list");
  siblings = [...listSorter.querySelectorAll(".check:not(.dragging)")];
  draggingItem = listSorter.querySelector(".draggable");

  listSorter.addEventListener("dragover", initSortableList);
  addEventToTask();
});

listSorter.addEventListener("dragover", initSortableList);

let addEventToTask = () => {
  dragableTask.forEach((task) => {
    task.addEventListener("dragstart", () => {
      task.classList.add("draggable");
    });

    task.addEventListener("dragend", () => {
      task.classList.remove("draggable");
    });
  });
};

addEventToTask();

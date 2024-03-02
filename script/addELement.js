let checListParent = document.getElementById("check-list");

let todoInput = document.getElementById("todo-input");

todoInput.value = "";

let taskNumber = document.querySelectorAll(".check").length;

todoInput.addEventListener("change", () => {
  taskNumber = document.querySelectorAll(".check").length;

  if (todoInput.value.trim() !== "") {
    let taskDescription = todoInput.value;

    taskNumber++;

    let newdiv = document.createElement("div");
    newdiv.classList.add("check");
    newdiv.id = "check-" + taskNumber;
    newdiv.draggable = true;

    newdiv.innerHTML +=
      '<input class="input-check" type="checkbox" id="' + taskNumber + '" />';
    newdiv.innerHTML +=
      '<label for="' + taskNumber + '">' + taskDescription + "</label>";
    newdiv.innerHTML += '<img class="cross" src="images/icon-cross.svg" />';

    document.getElementById("number").innerHTML = taskNumber;

    todoInput.value = "";

    checListParent.appendChild(newdiv);
  }
});

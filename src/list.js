import { add } from "date-fns";
import { todo } from "./todo.js";

class List {
  constructor() {
    this.list = [];
  }

  add(todo) {
    this.list.push(todo);
  }

  remove(todo) {
    this.list = this.list.filter((item) => item !== todo);
  }

  get() {
    return this.list;
  }

  sort() {
    this.list.sort((a, b) => {
      return b.priority - a.priority;
    });
  }
}

export { List };

//render functions are for the structure
function renderInbox() {
  // Code to render the inbox content
  const div = document.createElement("div");
  div.id = "inbox-tab";

  const title = document.createElement("h1");
  title.textContent = "Inbox";
  div.appendChild(title);

  const inputForm = document.createElement("form");
  inputForm.id = "input-form";

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title";
  inputForm.appendChild(titleLabel);

  //////CONTINUE HERE
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = "Eating tasks like a boss";
  inputForm.appendChild(inputField); //add input form to the input field

  //Add the due date field
  const dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Due Date:";
  inputForm.appendChild(dueDateLabel);

  const dueDateField = document.createElement("input");
  dueDateField.type = "date";
  inputForm.appendChild(dueDateField);

  //Add the description field
  // Description field
  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description:";
  inputForm.appendChild(descriptionLabel);

  const descriptionField = document.createElement("textarea");
  descriptionField.placeholder = "Description of the task";
  inputForm.appendChild(descriptionField);

  //Add the piroity field
  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority:";
  inputForm.appendChild(priorityLabel);

  const priorityField = document.createElement("select");
  const lowOption = document.createElement("option");
  lowOption.value = "low";
  lowOption.textContent = "Low";
  priorityField.appendChild(lowOption);

  const mediumOption = document.createElement("option");
  mediumOption.value = "medium";
  mediumOption.textContent = "Medium";
  priorityField.appendChild(mediumOption);

  const highOption = document.createElement("option");
  highOption.value = "high";
  highOption.textContent = "High";
  priorityField.appendChild(highOption);
  inputForm.appendChild(priorityField);

  //Add the notes field
  const notesLabel = document.createElement("label");
  notesLabel.textContent = "Notes:";
  inputForm.appendChild(notesLabel);

  const notesField = document.createElement("textarea");
  notesField.placeholder = "Additional notes";
  inputForm.appendChild(notesField);

  //Add the checklist field
  // Checklist field
  //   const checklistLabel = document.createElement("label");
  //   checklistLabel.textContent = "Checklist:";
  //   inputForm.appendChild(checklistLabel);

  //   const checklistField = document.createElement("input");
  //   checklistField.type = "text";
  //   checklistField.placeholder = "Checklist item";
  //   inputForm.appendChild(checklistField);

  const submitTodo = document.createElement("button");
  submitTodo.type = "text";
  submitTodo.textContent = "Be a Boss";
  inputForm.appendChild(submitTodo); //Add button to the form

  div.appendChild(inputForm); //Add the form (with input and button) to the input field

  const todoList = document.createElement("ul");
  todoList.id = "todo-list";
  div.appendChild(todoList);

  return div;
}

function renderToday() {
  // Code to render the today content
  const div = document.createElement("div");
  div.id = "today-tab";

  const title = document.createElement("h1");
  title.textContent = "Today";
  div.appendChild(title);

  const inputForm = document.createElement("form");
  inputForm.id = "input-form";

  //Add the input fields
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = "Eating tasks like a boss";
  inputForm.appendChild(inputField); //add input form to the input field

  const submitTodo = document.createElement("button");
  submitTodo.type = "text";
  submitTodo.textContent = "Be a Boss";
  inputForm.appendChild(submitTodo); //Add button to the form

  div.appendChild(inputForm); //Add the form (with input and button) to the input field

  const todoList = document.createElement("ul");
  todoList.id = "todo-list";
  div.appendChild(todoList);

  return div;
}

function renderUpcoming() {
  // Code to render the upcoming content
  const div = document.createElement("div");
  div.id = "upcoming-tab";

  const title = document.createElement("h1");
  title.textContent = "Upcoming";
  div.appendChild(title);

  const inputForm = document.createElement("form");
  inputForm.id = "input-form";

  //Add the input fields
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = "Eating tasks like a boss";
  inputForm.appendChild(inputField); //add input form to the input field

  const submitTodo = document.createElement("button");
  submitTodo.type = "text";
  submitTodo.textContent = "Be a Boss";
  inputForm.appendChild(submitTodo); //Add button to the form

  div.appendChild(inputForm); //Add the form (with input and button) to the input field

  const todoList = document.createElement("ul");
  todoList.id = "todo-list";
  div.appendChild(todoList);

  return div;
}

function renderCompleted() {
  // Code to render the completed content
  const div = document.createElement("div");
  div.id = "completed-tab";

  const title = document.createElement("h1");
  title.textContent = "Completed";
  div.appendChild(title);

  const inputForm = document.createElement("form");
  inputForm.id = "input-form";

  //Add the input fields
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = "Eating tasks like a boss";
  inputForm.appendChild(inputField); //add input form to the input field

  const submitTodo = document.createElement("button");
  submitTodo.type = "text";
  submitTodo.textContent = "Be a Boss";
  inputForm.appendChild(submitTodo); //Add button to the form

  div.appendChild(inputForm); //Add the form (with input and button) to the input field

  const todoList = document.createElement("ul");
  todoList.id = "todo-list";
  div.appendChild(todoList);

  return div;
}

export { renderInbox, renderToday, renderUpcoming, renderCompleted };

// //populate function for the populating todo items
// function populateInbox(inboxList) {
//   //getting the container where we want to display the todo items from the renderInbox function
//   const todoListContainer = document.getElementById("todo-list");

//   //clearing the container before populating it
//   todoListContainer.innerHTML = "";

//   //looping through the list of todo items
//   inboxList.get().forEach((todo) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = todo.getTitle(); //Display the title, customize this to show any property

//     //Add event listener to each todo item
//     listItem.addEventListener("click", () => {
//       //TODO: Implement the logic
//       //Implement the logic for handling the click event, e.g. marking as completed or editing it
//       //You can call functions in the todo class to update the todo item
//     });

//     //Append the list item to the todo list container
//     todoListContainer.appendChild(listItem);
//   });

//Now the populate function as a generic function for all list types
function populateList(todoList, filterCriteria, containerId) {
  const mainContainer = document.getElementById(containerId);
  const todoListContainer = mainContainer.querySelector("#todo-list");
  todoListContainer.innerHTML = "";

  //Use the filterCriteria function to determine which times to display
  todoList
    .get()
    .filter(filterCriteria)
    .forEach((todo) => {
      const listItem = document.createElement("li");
      //Use a template string to combine multiple properties of the todo
      listItem.innerHTML = `
      <strong>Title:</strong> ${todo.getTitle()}<br>
      <strong>Due Date:</strong> ${todo.getDueDate()}<br>
      <strong>Priority:</strong> ${todo.getPriority()}
    `;

      listItem.addEventListener("click", () => {
        //TODO: Implement the logic
        //Implement the logic for handling the click event, e.g. marking as completed or editing it
        //You can call functions in the todo class to update the todo item
      });
      todoListContainer.appendChild(listItem);
    });
}

export { populateList };

function isInbox(todo) {
  //if it is not part of any other list, it is part of the inbox
  return !isCompleted(todo) && !isForToday(todo) && !isUpcoming(todo);
}

function isForToday(todo) {
  const today = new Date();
  const dueDate = todo.getRawDueDate(); //Using the raw date for comparison
  return (
    dueDate.getDate() === today.getDate() &&
    dueDate.getMonth() === today.getMonth() &&
    dueDate.getFullYear() === today.getFullYear()
  );
}

function isCompleted(todo) {
  return todo.completed;
}

function isUpcoming(todo) {
  const today = new Date();
  return todo.getRawDueDate > today;
}

export { isInbox, isForToday, isCompleted, isUpcoming };

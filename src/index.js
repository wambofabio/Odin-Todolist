//DOM Manipulation with JS
import { List } from "./list.js";
import { Todo } from "./todo.js";
import {
  renderInbox,
  renderToday,
  renderUpcoming,
  renderCompleted,
  //populateInbox,
  populateList,
  isCompleted,
  isForToday,
  isUpcoming,
  isInbox,
} from "./list.js";
import { format } from "date-fns";

//initialize the todo list
const todoListManager = new List();

//Mock Data
// This is just for testing purposes
const testTodo1 = new Todo(
  "Test Task 1",
  "Description",
  new Date(),
  1,
  "",
  [],
  false
);
const testTodo2 = new Todo(
  "Test Task 2",
  "Description",
  new Date(),
  2,
  "",
  [],
  true
);
todoListManager.add(testTodo1);
todoListManager.add(testTodo2);

//Add the status of "active" to the current visible tab
function activeTab(tabElement) {
  //First remove all "active" classes from all tabs
  const tabs = document.querySelectorAll(".static-list");
  tabs.forEach((tab) => tab.classList.remove("active"));
  //Add the "active" class to the current tab
  tabElement.classList.add("active");
}

//Function to show the nav bar by making it a block element
function showTabNavigation() {
  const sidebar = document.getElementById("sidebar");
  const navList = sidebar.querySelector("ul");

  //Display the navigation elements
  navList.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  //Get the DOM elements
  const app = document.getElementById("app");
  const inbox = document.getElementById("inbox");
  const today = document.getElementById("today");
  const upcoming = document.getElementById("upcoming");
  const completed = document.getElementById("completed");

  function loadTabContent(createTabFunction) {
    content.innerHTML = "";
    const tabContent = createTabFunction();
    content.appendChild(tabContent);
  }

  //DRY Principle- Don't Repeat Yourself (Aggregate the functions in one)
  function createTabClickHandler(
    tabElement,
    renderFunction,
    todoList,
    filterCriteria,
    containerId
  ) {
    return function handleTabClick() {
      //Load the tab content
      loadTabContent(renderFunction);

      //Activate the clicked tab
      activeTab(tabElement);

      //Show the Tab Navigation
      showTabNavigation();

      //Populate List
      populateList(todoList, filterCriteria, containerId);
    };
  }

  //Create the Respective Tabs
  inbox.addEventListener("click", function () {
    const handler = createTabClickHandler(
      inbox,
      renderInbox,
      todoListManager,
      isInbox,
      "content"
    );
    handler();
  });

  today.addEventListener("click", function () {
    const handler = createTabClickHandler(
      today,
      renderToday,
      todoListManager,
      isForToday,
      "content"
    );
    handler();
  });
  upcoming.addEventListener("click", function () {
    const handler = createTabClickHandler(
      upcoming,
      renderUpcoming,
      todoListManager,
      isUpcoming,
      "content"
    );
    handler();
  });
  completed.addEventListener("click", function () {
    const handler = createTabClickHandler(
      completed,
      renderCompleted,
      todoListManager,
      isCompleted,
      "content"
    );
    handler();
  });

  createTabClickHandler(
    inbox,
    renderInbox,
    todoListManager,
    isInbox,
    "content"
  )();
});

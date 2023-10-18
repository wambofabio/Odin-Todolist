import { format } from "date-fns";

//Properties: title, description, dueDate, priority, notes, checklist, completed

//Create a Todo Class
class Todo {
  constructor(
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
    completed
  ) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._notes = notes;
    this._checklist = checklist; //Array of checklist items, sub-tasks
    this._completed = completed;
  }

  //Setters for updating the todo parameters
  setTitle(title) {
    this._title = title;
  }
  setDescription(description) {
    this._description = description;
  }
  setDueDate(dueDate) {
    this._dueDate = dueDate;
  }
  setPriority(priority) {
    this._priority = priority;
  }
  setNotes(notes) {
    this._notes = notes;
  }
  setChecklist(checklist) {
    this._checklist = checklist;
  }
  setCompleted(completed) {
    this._completed = completed;
  }

  //Getters for getting the todo parameters
  getTitle() {
    return this._title;
  }
  getDescription() {
    return this._description;
  }
  getDueDate() {
    return format(this._dueDate, "dd/MM/yyyy");
  }
  getPriority() {
    return this._priority;
  }
  getNotes() {
    return this._notes;
  }
  getChecklist() {
    return this._checklist;
  }
  getCompleted() {
    return this._completed;
  }
  getRawDueDate() {
    return this._dueDate;
  }
}

export { Todo };

//Notes: Updating nodes/priority etc would be additional functions that would be added to the class

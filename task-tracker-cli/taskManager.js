const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(__dirname + "/tasks.json");

const date = new Date();
const time = `${date.getHours()}hrs and ${date.getMinutes()} minutes past midnight.`;

//List all tasks.
function list() {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("No file to list your tasks\n", err);
    }

    console.log(data);
  });
}

//Add a new task
function add(taskDescription) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      let dataMessage = {
        id: 1,
        description: taskDescription,
        status: "todo",
        createdAt: time,
        updatedAt: time,
      };
      let taskData = [dataMessage];

      fs.writeFile(filePath, JSON.stringify(taskData), (err) => {
        if (err) throw err;
        console.log("Task successfully added.");
      });
    } else {
      let allTasks = JSON.parse(data);

      let taskToAdd = {
        id: allTasks.length + 1,
        description: taskDescription,
        status: "todo",
        createdAt: time,
        updatedAt: time,
      };

      allTasks.push(taskToAdd);

      fs.writeFile(filePath, JSON.stringify(allTasks), (err) => {
        if (err) throw err;
        console.log("Task successfully added.");
      });
    }
  });
}

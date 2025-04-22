const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(__dirname + "/tasks.json");

const date = new Date();
const time = `${date.getHours()}hrs and ${date.getMinutes()} minutes past midnight.`;

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

//Update a task
function update(taskID, taskDescription) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {
      let allData = JSON.parse(data);
      allData[taskID - 1].description = taskDescription;
      allData[taskID - 1].updatedAt = time;

      fs.writeFile(filePath, JSON.stringify(allData), (err) => {
        if (err) throw err;
        console.log("Task successfully updated.");
      });
    }
  });
}

//Delete a task
function deleteTask(taskID) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {
      let allData = JSON.parse(data);

      if (taskID > allData.length) {
        console.log("No task with such ID");
      } else {
        allData.splice(taskID - 1, 1);

        //updating task IDs
        for (let i = 0; i < allData.length; i++) {
          allData[i].id = i + 1;
        }

        fs.writeFile(filePath, JSON.stringify(allData), (err) => {
          if (err) {
            throw err;
          } else {
            console.log("Deleting task . . . \nTask successfully deleted.");
          }

          if (allData.length === 0) {
            fs.unlink(filePath, (err) => {
              if (err) throw err;
              console.log(
                "All tasks deleted. \nDeleting file ... ... ... \nFile successfully deleted."
              );
            });
          }
        });
      }
    }
  });
}

//List all tasks.
function list() {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("No file to list your tasks\n", err);
    } else {
      console.log("id    Task");

      let allData = JSON.parse(data);

      let i = 0;
      while (i < allData.length) {
        console.log(`${allData[i].id}    ${allData[i].description}`);
        i += 1;
      }
    }
  });
}

//Making a task as done.
function markDone(taskID) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log("No file to mark your task. \n", err);
    } else {
      let allData = JSON.parse(data);

      if (taskID > allData.length) {
        console.log("No task with such ID");
      }
      allData[taskID - 1].status = "Done";

      fs.writeFile(filePath, JSON.stringify(allData), (err) => {
        if (err) throw err;
        console.log("Task successfully marked done.");
      });
    }
  });
}

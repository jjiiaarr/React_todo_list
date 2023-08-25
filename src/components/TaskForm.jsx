import React, { useState } from "react";
import Tag from "./Tag";

import "./TaskForm.css";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  //   const [task, setTask] = useState("");
  //   const [status, setStatus] = useState("todo");

  //   const handleTaskChange = (e) => {
  //     setTask(e.target.value);
  //   };
  //   const handleStatusChange = (e) => {
  //     setStatus(e.target.value);
  //   };
  //   console.log(task, status);
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          type="text"
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>

          <div>
            <select
              name="status"
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </div>
          <button type="submit" className="task_submit">
            + Add Task
          </button>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;

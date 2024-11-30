import React from 'react';

function App() {
  const [todoArray, setTodoArray] = React.useState([]);

  function addTask(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const taskDescription = formData.get('todoInfo');
    const priority = formData.get('color');
    const completion = formData.get('completion');
    const FormInfo = {
      taskDescription,
      priority,
      completion,
    };
    setTodoArray((prev) => [...prev, FormInfo]);
  }

  const todoArrayList = todoArray.map((task, index) => (
    <p key={index}>
      <strong>Task:</strong> {task.taskDescription} <br />
      <strong>Priority:</strong> {task.priority} <br />
      <strong>Completion:</strong> {task.completion}
    </p>
  ));

  return (
    <>
      <form onSubmit={addTask}>
        <textarea name="todoInfo" id="todoInfo" defaultValue="Write a Todo here"></textarea>
        <p>Priority List:</p>
        <label>
          <input type="radio" name="color" id="important" value="important" />
          Important
        </label>
        <label>
          <input type="radio" name="color" id="later" value="later" />
          Can be done later
        </label>
        <br />

        <p>Finished?</p>
        <label>
          <input type="radio" name="completion" id="finished" value="finished" />
          Done
        </label>
        <label>
          <input type="radio" name="completion" id="not_finished" value="not finished" />
          Not Done
        </label>
        <br />
        <button type="submit">Add Task</button>
      </form>

      <h3>Your Tasks are shown below:</h3>
      <h5>{todoArrayList}</h5>
    </>
  );
}

export default App;

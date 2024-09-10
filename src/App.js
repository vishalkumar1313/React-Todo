import { useState } from "react";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(task, desc);
    setMainTask([...mainTask, { task, desc }]);
    // console.log(mainTask);
    setTask("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    const copyTask = [...mainTask];
    console.log(copyTask)
    copyTask.splice(i, 1);
    setMainTask(copyTask);

  };

  let renderTask = <h2>No Task available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i}>
          <div className="left">
          <h3>{t.task}</h3>  <p>{t.desc}</p>
            </div> 
            <button onClick={()=>deleteHandler(i)}>Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <div className="main">
      <h1>Vishal's To do List</h1>
    
    <form onSubmit={submitHandler}>
      <input
        onChange={(e) => setTask(e.target.value)}
        value={task}
        type="text"
        placeholder="Enter task here"
      />
      <br />
      <input
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
        type="text"
        placeholder="Enter description here"
      />
      <br />
      <button>Add task</button>
    </form>
    <div className="showtask">
      <ul>{renderTask}</ul>
    </div>
      </div>
    </>
  );
};

export default App;

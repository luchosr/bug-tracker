import React, { useState } from "react";
import "./App.css";
import { IBug } from "./IBug";

function App() {
  const [newBugDescription, setNewBugDescription] = useState<string>("");
  const [newBugPriority, setNewBugPriority] = useState<string>("Medium");
  const [bugList, setBugList] = useState<IBug[]>([]);

  const addBug = () => {};
  const deleteBug = () => {};

  return (
    <div>
      <h1>🐞 Bug Tracker</h1>
      <form onSubmit={addBug}>
        <label htmlFor="newBugDescription">New bug Description:</label>
        <input
          type="text"
          id="newBugDescription"
          value={newBugDescription}
          onChange={(event) => setNewBugDescription(event.target.value)}
        />
        <label htmlFor="newBugPriority">New Bug Priority</label>
        <select
          id="newBugPriority"
          value={newBugPriority}
          onChange={(event) => setNewBugPriority(event.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="Hight">Hight</option>
        </select>
      </form>
    </div>
  );
}

export default App;

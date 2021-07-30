import React, { FormEvent, useState } from "react";
import "./App.css";
import { BugPriority, IBug } from "./IBug";
import { v4 as uuid } from "uuid";
import BugListTable from "./BugListTable";

function App() {
  const [newBugDescription, setNewBugDescription] = useState<string>("");
  const [newBugPriority, setNewBugPriority] = useState<string>("Medium");
  const [bugList, setBugList] = useState<IBug[]>([]);

  const addBug = (event: FormEvent) => {
    event.preventDefault();
    const newBug: IBug = {
      id: uuid(),
      description: newBugDescription,
      priority: newBugPriority as BugPriority,
    };

    setBugList([...bugList, newBug]);
  };

  const deleteBug = (id: string) => {
    const bugs = bugList.filter((bug) => bug.id !== id);
    setBugList(bugs);
  };

  return (
    <div className="app">
      <h1>🐞 Bug Tracker</h1>
      <BugListTable
        bugs={bugList}
        onDeleteBug={(id: string) => deleteBug(id)}
      />
      <form className="add-new-bug-form" onSubmit={addBug}>
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
        <button type="submit"> Add New Bug</button>
      </form>
    </div>
  );
}

export default App;

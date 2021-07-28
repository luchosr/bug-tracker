import React, { useState } from "react";
import "./App.css";
import { IBug } from "./IBug";

function App() {
  const [debugDescription, setDebugDescription] = useState<string>("");
  const [newBugPriority, setNewBugPriority] = useState<string>("Medium");
  const [bugList, setBugList] = useState<IBug[]>([]);

  const addBug = () => {};
  const deleteBug = () => {};

  return (
    <div>
      <h1>🐞 Bug Tracker</h1>
      <form onSubmit={addBug}>
        <label htmlFor="newBugDescription"></label>
      </form>
    </div>
  );
}

export default App;

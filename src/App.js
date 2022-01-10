import React, { useState } from "react";
import "./App.css";
import Categories from "./categories";
import items from "./data";
import Menu from "./menu";

function App() {
  const [info, setinfo] = useState(items);
  return (
    <div className="App">
      <h1>foods</h1>
      <Categories category={info} />
      <Menu items={items} category={info} setinfo={setinfo} />
    </div>
  );
}

export default App;

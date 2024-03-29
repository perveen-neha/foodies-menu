import React, { useState } from "react";
import "./App.css";
import Categories from "./categories";
import items from "./data";
import Menu from "./menu";

// const allcategories= ['all', ...(new Set )]
const allCategories = [ 'all', ...new Set(items.map((item)=> item.category))]


function App() {
  const [info, setInfo] = useState(items);
  const [Categoriies, setCategories] = useState(allCategories)
  

  return (
    <div className="App">
      <h1>foods</h1>
      <Categories items={items} setInfo={setInfo} Categoriies={Categoriies} />
      <Menu items={info}  />
    </div>
  );
}

export default App;

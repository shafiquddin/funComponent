import React, { useCallback, useMemo, useState } from "react";
import Button from "./components/UI/Button";
import "./App.css";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  console.log("app running");
  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  return (
    <div className="app">
      <DemoList title={listTitle}  items={useMemo(()=>[1, 6, 15, 8, 10],[])} />
      <Button onClick={changeTitleHandler}>Toggle paragraph</Button>
    </div>
  );
}

export default App;

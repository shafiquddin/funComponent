import React, { useMemo } from "react";
import classes from "./DemoList.module.css";

const DemoList = (props) => {
  console.log("DemoList is Running");
  const { items } = props;
  const list = useMemo(() => {
    console.log("item is sorted");
    return items.sort((a, b) => a - b);
  }, [items]);

  return (
    <div className={classes.list}>
      <h1>{props.title}</h1>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default React.memo(DemoList);

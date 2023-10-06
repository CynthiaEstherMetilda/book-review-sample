import "./ExpenseItem.css";
import Expensedate from "./Expensedate";
import Card from "./Card";
import { useState } from "react";

function ExpenseItem({props}) {

  const [title,setTitle]=useState(props.title);
  const clickHandler=()=>
  {
    setTitle('Updated');
  }
  return (
    <Card className='expense-item'>
      <Expensedate date={props.date} />        
        <div className='expense-item__description'><h2>{title}</h2></div>
        <div className='expense-item__price'>INR{props.amount}</div>
      <button onClick={clickHandler}>Click Me</button>
    </Card>
  );
}
export default ExpenseItem;

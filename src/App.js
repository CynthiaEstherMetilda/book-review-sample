import './App.css';
import './Expenses.css';
import Expenses from './components/Expenses';
import Card from './components/Card';
import NewExpense from './components/NewExpense/NewExpense';
// import MyForm from './components/MyForm';
import { useState } from 'react';
function App() {
  const DUMMY_EXPENSES=[
    {
      id:'e1',
      title:'toilet-paper',
      amount:300,
      date:new Date(2021,2,28)
    },
    {
      id:'e2',
      title:'Sooji',
      amount:45,
      date:new Date(2021,3,2)
    },
    {
      id:'e3',
      title:'Wheat',
      amount:150,
      date:new Date(2021,5,30)
    },
    {
      id:'e4',
      title:'Dettol',
      amount:200,
      date:new Date(2021,8,15)
    },
  ];
const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseHandler=expense =>
  {
    console.log('in func');
    console.log(expense);
    setExpenses((prevExpenses)=>
    {
      return[expense, ...prevExpenses];
    });
    console.log("updated Expenses");
    console.log(expenses.length);
  };
  return (
    <Card className='expenses'>
       <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    
    </Card>
    // <>
  // <h1>Hello</h1>
  
  //   </>
  );
}

export default App;

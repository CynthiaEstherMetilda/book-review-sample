import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense({onAddExpense})
{
    return(
<div className='new-expense'>
<ExpenseForm onAddExpense={onAddExpense} />
</div>
    );
}

export default NewExpense;
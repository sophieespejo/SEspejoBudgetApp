import { saveBudgetToLocalStorage, saveCurrentBalanceToLocalStorage } from "./localStorage.js";
import {updateCurentBalanceOnDom} from "./creatingElements.js"



function subtractExpensesFromBudget(expenseAmount, whatever)
{
    let balance = whatever - expenseAmount;
    expenseAmountTxt.textContent = "";
    expenseTypeTxt.textContent = "";
    currentBalanceTxt.textContent = balance;
    // saveBudgetToLocalStorage(parseInt(balance));
    saveCurrentBalanceToLocalStorage(parseInt(balance));
}

function updateRemovedExpenseFromBudget(expenseAmount, balance)
{
    let newBalance = parseInt(expenseAmount) + parseInt(balance);
    updateCurentBalanceOnDom(newBalance);
}

export {subtractExpensesFromBudget, updateRemovedExpenseFromBudget}
import {resetAllLocalStorage, saveBudgetToLocalStorage, removeExpenseFromLocalStorage, saveToLocalStorage, GetLocalStorage, budgetStorage, expensesAmount, expensesType, saveExpenseAmountToLocalStorage, saveExpenseTypeToLocalStorage, remainingBalance} from "./localStorage.js";
import {displayBeginningBudget, displayExpenses, injectBeginningBudgetHere} from "./creatingElements.js"
import {subtractExpensesFromBudget} from "./calculation.js";

let inputBeginningBalanceTxt = document.getElementById('inputBeginningBalanceTxt'),
    confirmBudgetBtn = document.getElementById('confirmBudgetBtn'),
    expenseAmountTxt = document.getElementById('expenseAmountTxt'),
    expenseTypeTxt = document.getElementById('expenseTypeTxt'),
    subtractExpensesBtn = document.getElementById('subtractExpensesBtn'),
    beginningBalanceTxt = document.getElementById('beginningBalanceTxt'),
    injectExpensesHere = document.getElementById('injectExpensesHere'),
    currentBalanceTxt = document.getElementById('currentBalanceTxt'),
    resetBtn = document.getElementById('resetBtn');

confirmBudgetBtn.addEventListener('click', function(e){
    console.log('Beginning Budget: ' + inputBeginningBalanceTxt.value);
    if(parseInt(inputBeginningBalanceTxt.value))
    {
        injectBeginningBudgetHere.innerHTML= "";
        saveBudgetToLocalStorage(parseInt(inputBeginningBalanceTxt.value));
        displayBeginningBudget(inputBeginningBalanceTxt.value);
    }
    else{
        //change the way alert shows
        alert("error")
    }
})

subtractExpensesBtn.addEventListener('click', function(e){
    //add check to see if beginning budget is set
    debugger
    console.log(remainingBalance);
    if(remainingBalance.length == 0)
    {
        subtractExpensesFromBudget(expenseAmountTxt.value, budgetStorage);
    }
    else{
        subtractExpensesFromBudget(expenseAmountTxt.value, remainingBalance);
    }
    displayExpenses(expenseAmountTxt.value, expenseTypeTxt.value);
    saveExpenseAmountToLocalStorage(parseInt(expenseAmountTxt.value));
    saveExpenseTypeToLocalStorage(expenseTypeTxt.value);
})

//localStorage.clear()

// resetBtn.addEventListener('click', resetAllLocalStorage());

GetLocalStorage();
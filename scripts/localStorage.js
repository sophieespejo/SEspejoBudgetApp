import {displayBeginningBudget, updateCurrentExpensesOnDom, updateCurentBalanceOnDom} from "./creatingElements.js"

let budgetStorage =[];
let expensesAmount = [];
let expensesType = [];
let remainingBalance = [];

//check local storage for best scores, set bestScoreArray
function GetLocalStorage()
{
    let localStorageData1 = localStorage.getItem('ExpensesAmount');
    let localStorageData2 = localStorage.getItem('Budget');
    let localStorageData3 = localStorage.getItem('ExpensesType');
    let localStorageData4 = localStorage.getItem('FinalBalance');
    if(localStorage.getItem('ExpensesAmount') || localStorage.getItem('Budget') || localStorage.getItem('ExpensesType') || localStorage.getItem('FinalBalance'))
    {
        expensesAmount = JSON.parse(localStorageData1);
        budgetStorage = JSON.parse(localStorageData2);
        expensesType = JSON.parse(localStorageData3);
        remainingBalance = JSON.parse(localStorageData4);
    }
    else{
        saveToLocalStorage();
    }
    displayBeginningBudget(budgetStorage);
    updateCurrentExpensesOnDom(expensesAmount, expensesType);
    updateCurentBalanceOnDom(remainingBalance);
    return {budgetStorage, expensesType, expensesAmount, remainingBalance};
}

function saveBudgetToLocalStorage(budget)
{
    budgetStorage.splice(0,1);
    budgetStorage.push(budget);
    localStorage.setItem('Budget', JSON.stringify(budgetStorage));
}

function saveCurrentBalanceToLocalStorage(balance)
{
    remainingBalance.splice(0,1);
    remainingBalance.push(balance);
    localStorage.setItem('FinalBalance', JSON.stringify(remainingBalance));
}

function saveExpenseAmountToLocalStorage(expenseAmountFromDom)
{
    expensesAmount.push(expenseAmountFromDom);
    localStorage.setItem('ExpensesAmount', JSON.stringify(expensesAmount));
}

function saveExpenseTypeToLocalStorage(expenseTypeFromDom)
{
    expensesType.push(expenseTypeFromDom);
    localStorage.setItem('ExpensesType', JSON.stringify(expensesType));
}


function saveToLocalStorage()
{
    localStorage.setItem('ExpensesAmount', JSON.stringify(expensesAmount));
    localStorage.setItem('ExpensesType', JSON.stringify(expensesType));
    localStorage.setItem('Budget', JSON.stringify(budgetStorage));
    localStorage.setItem('FinalBalance', JSON.stringify(remainingBalance));
    return {expensesAmount, expensesType, budgetStorage, remainingBalance};
}

function removeExpenseFromLocalStorage(expensesAmountFromDom, expensesTypeFromDom){
    //find index of city name in favorites array
    let expenseAmountIndex = expensesAmount.indexOf(expensesAmountFromDom);
    // console.log("city index:"+ cityIndex);
    //found city name in array favorites
    expensesAmount.splice(expenseAmountIndex, 1);
    expensesType.splice(expenseAmountIndex, 1);
    //updates local storage
    saveToLocalStorage();
    return {expensesAmount, expensesType, budgetStorage, remainingBalance};
}

function resetAllLocalStorage(){
    //find index of city name in favorites array
    // budgetStorage = 0;
    // expensesAmount = [];
    // expensesType = [];
    //updates local storage
    // // saveToLocalStorage();
    // return {expensesAmount, expensesType, budgetStorage};
   //localStorage.clear()
}


export {resetAllLocalStorage, saveBudgetToLocalStorage, removeExpenseFromLocalStorage, saveToLocalStorage, GetLocalStorage, saveExpenseAmountToLocalStorage, saveExpenseTypeToLocalStorage, saveCurrentBalanceToLocalStorage, remainingBalance, budgetStorage, expensesAmount, expensesType};


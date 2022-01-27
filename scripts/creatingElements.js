import {removeExpenseFromLocalStorage, remainingBalance} from "./localStorage.js";
import {updateRemovedExpenseFromBudget} from "./calculation.js";


let injectBeginningBudgetHere = document.getElementById('injectBeginningBudgetHere'),
injectBalanceHere = document.getElementById('injectBalanceHere'),
injectHere = document.getElementById('injectHere');


function displayExpenses(amount, type)
{
    //create tableRow
    let outerDiv = document.createElement('div');
    outerDiv.className = "row justify-content-center rowBg"
    let firstCol = document.createElement('div');
    firstCol.className = "col-5";
    let typeP = document.createElement('p');
    typeP.textContent = type;
    firstCol.append(typeP);
    outerDiv.append(firstCol);
    let secondCol = document.createElement('dic');
    secondCol.className = "col-5";
    let secondColP = document.createElement('p');
    secondColP.textContent = "-$";
    let secondColSpan = document.createElement('span');
    secondColSpan.textContent = amount;
    secondColP.append(secondColSpan);
    secondCol.append(secondColP);
    outerDiv.append(secondCol);
    let thirdCol = document.createElement('div');
    thirdCol.className = "col-2";
    let trashIcon = document.createElement('i');
    trashIcon.className = "fas fa-trash-alt";
    trashIcon.addEventListener('click', function(e){
        this.parentNode.parentNode.remove();
        removeExpenseFromLocalStorage(amount, type);
        updateRemovedExpenseFromBudget(amount, remainingBalance);
    })
    thirdCol.append(trashIcon);
    outerDiv.append(thirdCol);
    injectHere.append(outerDiv);
}

function displayBeginningBudget(budget)
{
    //create p tag
    let p = document.createElement('p');
    p.className = "";
    p.textContent = "Beginning Balance: $";
    //create span
    let span = document.createElement('span');
    span.id = "beginningBalanceTxt";
    span.textContent = budget;
    //append span to p
    p.append(span);
    injectBeginningBudgetHere.append(p);
}

function updateCurrentExpensesOnDom(expensesAmount, expensesType)
{
    for(let i = 0; i < expensesAmount.length; i++)
    {
        displayExpenses(expensesAmount[i], expensesType[i]);
    }
}

function updateCurentBalanceOnDom(balance)
{
    injectBalanceHere.innerHTML = "";
    let div = document.createElement('div');
    if(balance < 0)
    {
        div.className = "row mt-3 beginningBalanceTxt red"
    }
    else{
        div.className = "row mt-3 beginningBalanceTxt";
    }
    let p = document.createElement('p');
    p.textContent = "Current Balance: $";
    let span = document.createElement('span');
    span.id = "currentBalanceTxt";
    span.textContent = balance;
    p.append(span);
    div.append(p);
    injectBalanceHere.append(div);
}

export {displayBeginningBudget, updateCurentBalanceOnDom, displayExpenses, injectBeginningBudgetHere, updateCurrentExpensesOnDom, }
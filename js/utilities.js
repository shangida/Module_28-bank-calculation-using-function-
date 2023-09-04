function getFiledAmountById(getInputFiledById){
    const inputFied = document.getElementById(getInputFiledById);
    const inputValue = parseFloat(inputFied.value);
    
    inputFied.value = ""
    return inputValue;

}

function getTotalPreviousBalance(getPreviousBalanceElementById){
    const totalPreviousBalanceElement = document.getElementById(getPreviousBalanceElementById);
    const totalPreviousBalance = parseFloat(totalPreviousBalanceElement.innerText);
    return totalPreviousBalance;
}

function setTextById(elementId, newValue){
    const element = document.getElementById(elementId)
    element.innerText = newValue;
    
}
 

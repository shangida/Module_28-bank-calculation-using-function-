
//deposit btn work strats
document.getElementById("deposit_btn").addEventListener("click", function(){
    
    const newDepositAmount = getFiledAmountById("deposit_flied");

    if(isNaN(newDepositAmount)){
        alert("Please check your amount");
        return;
    }

    const previousDepositAmount = getTotalPreviousBalance("deposit_total")
    
    const totalDepositAmont = previousDepositAmount + newDepositAmount;
    

    setTextById("deposit_total", totalDepositAmont);

    const previusBalanceAmount = getTotalPreviousBalance("total_balance");
    
    const curentBalanceAmount = previusBalanceAmount +  newDepositAmount;

    setTextById("total_balance", curentBalanceAmount);

});
//ends


//withdraw btn work strats
document.getElementById("withdraw_btn").addEventListener("click", function(){
    
    const newWithdrawAmount = getFiledAmountById("withdraw_flied");

    if(isNaN(newWithdrawAmount)){
        alert("Please check your amount");
        return;
    }
    
    const previousWithdrawAmount = getTotalPreviousBalance("total_withdraw");

    if(newWithdrawAmount > previousWithdrawAmount){
        alert("bank a eto taka nai");
        return;
    }

    const curentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;

    setTextById("total_withdraw", curentWithdrawAmount);

    const previosBalanceAmount = getTotalPreviousBalance("total_balance");
    
    const curentBalanceAmount = previosBalanceAmount - newWithdrawAmount;

    setTextById("total_balance", curentBalanceAmount);
})
//ends






/* 
deposit work add
document.getElementById("deposit_btn").addEventListener("click", function(){

    const depositFlied = document.getElementById("deposit_flied");
    const newDepositAmount = parseFloat(depositFlied.value);

    depositFlied.value = ""

    if(isNaN(newDepositAmount)){
        alert("please enter a valid deosit amount");
        return;
    }

    const totalDeposit = document.getElementById("deposit_total");
    const previousDepositAmount = parseFloat(totalDeposit.innerText);

    const curentAmount = previousDepositAmount + newDepositAmount;

    totalDeposit.innerText = curentAmount;

    const previousBalanceElement =document.getElementById("total_balance");
    const previosBalance = parseFloat(previousBalanceElement.innerText);

    const totalCurentBalance = previosBalance + newDepositAmount;

    previousBalanceElement.innerText = totalCurentBalance;

});
ends

withdraw btn work strats
document.getElementById("withdraw_btn").addEventListener("click", function(){
    
    const withdrawFlied = document.getElementById("withdraw_flied");
    const newWithdrawAmount = parseFloat(withdrawFlied.value);

    withdrawFlied.value = ""

    if(isNaN(newWithdrawAmount)){
        alert("please enter a valid withdraw amount");
        return;
    }

    const previousWithdrawElement = document.getElementById("total_withdraw");
    const previousWithdrawAmount = parseFloat(previousWithdrawElement.innerText);

    const curentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;

    previousWithdrawElement.innerText = curentWithdrawAmount;

    const previousBalanceElement = document.getElementById("total_balance");
    const previosBalance = parseFloat(previousBalanceElement.innerText);

    const curentBalance = previosBalance - newWithdrawAmount;

    previousBalanceElement.innerText = curentBalance;
})



 */
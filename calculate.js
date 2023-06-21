document.getElementById('calculate-btn'),addEventListener('click' , function(){
    const foodstring =  document.getElementById('food')
    const foodAmount =  parseInt(foodstring.value)

    const rentString = document.getElementById('rent')
    const rentAmount = parseInt(rentString.value)

    const clotheString = document.getElementById('clothes')
    const clotheAmonunt = parseInt(clotheString.value)

    const expenseString = document.getElementById('expense')
    expenseString.innerText = foodAmount + rentAmount + clotheAmonunt

    const expenseAmount = parseInt(expenseString.innerText) 

    const incomeString = document.getElementById('income')
    const incomeAmount  = parseInt(incomeString.value)

    const balanceString  = document.getElementById('balance')
     
    balanceString.innerText = incomeAmount - expenseAmount
    

    const remainingString = document.getElementById('remaining')
    remainingString.innerText = incomeAmount - expenseAmount

})

document.getElementById('save').addEventListener('click' ,  function(){
    const savingString  = document.getElementById('savings')
    const savingAmount = parseInt(savingString.value)

    const incomeString = document.getElementById('income')
    const incomeAmount  = parseInt(incomeString.value)

    const totalSaving = (savingAmount/100) * incomeAmount

    const balanceString  = document.getElementById('balance')
    const balanceAmount = balanceString.innerText

    if(totalSaving<balanceAmount){
        
    const saveString = document.getElementById('total-saving-amount')
    saveString.innerText = totalSaving

    const expenseString = document.getElementById('expense')
    const expenseAmount = parseInt(expenseString.innerText)

    const remainingString = document.getElementById('remaining')
    remainingString.innerText = incomeAmount - (totalSaving + expenseAmount )
    }
    
    else{
        alert('Your have not sufficient balance ')
    }

   
})
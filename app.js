
function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if(isIncreasing == true){
        caseNumber = parseInt(caseNumber) + 1; 
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
         // up case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59

}

document.getElementById('case-plus').addEventListener('click', function(){
    
    updateCaseNumber(true)
    
   /*  const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;   */

})

document.getElementById('case-mines').addEventListener('click', function(){
    
    updateCaseNumber(false)

//    /*  const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//     caseInput.value = parseInt(caseNumber) - 1; 

}) 






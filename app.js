
// function updateCaseNumber(product, price, isIncreasing){
//     const caseInput = document.getElementById(product +'-number');
//     let caseNumber = caseInput.value;
//     if(isIncreasing == true){
//         caseNumber = parseInt(caseNumber) + 1; 
//     }
//     else if(caseNumber > 0){
//         caseNumber = parseInt(caseNumber) - 1;
//     }
//     caseInput.value = caseNumber;
//          // up case total
//     const caseTotal = document.getElementById(product +'-total');
//     caseTotal.innerText = caseNumber * price;
// }

//         //  pohne increas decrease events

// document.getElementById('phone-plus').addEventListener('click', function(){
//     updateCaseNumber('case', 1219, true)
// })

// // document.getElementById('phone-minus').addEventListener('click', function(){
//     // updateCaseNumber('case', 59, false);
// // })

//         //  handle case increase decrease event 

// document.getElementById('case-plus').addEventListener('click', function(){
    
//     updateCaseNumber('case', 59,  true)
//    /*  const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//     caseInput.value = parseInt(caseNumber) + 1;   */

// })

// document.getElementById('case-minus').addEventListener('click', function(){
    
//     updateCaseNumber('case', 59, false);
 
// //    /*  const caseInput = document.getElementById('case-number');
// //     const caseNumber = caseInput.value;
// //     caseInput.value = parseInt(caseNumber) - 1; 

// }) 









function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    console.log(productNumber)
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1; 
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
         // up  total
    const productTotal = document.getElementById(product +'-total');
    productTotal.innerText = productNumber * price;
    // calculate  total
    calculateTotal();

}

function getInputValue(product){
    const productInput =  document.getElementById(product +'-number');
    const productNember = parseInt(productInput.value);
    return productNember
}

function calculateTotal(){
    //   const phoneInput =  document.getElementById('phone-number');
    //   const phoneNember = parseInt(phoneInput.value);
      const phoneTotale = getInputValue('phone') * 1219;
      const caseTotale = getInputValue('case') * 59;
      const subTotale = phoneTotale + caseTotale ;
      const tax = subTotale / 10 ;
      const totalPrice = subTotale + tax;
         //   update on the html
     document.getElementById('sub-total').innerText = subTotale;
     document.getElementById('tax-amount').innerText = tax;
     document.getElementById('total-price').innerText = totalPrice;
}

        //  pohne increas decrease events

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true) 

})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219,  false);
})

        //  handle case increase decrease event 

document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true)
   
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
 
}) 

const basicSalary = document.querySelector('.salary-input');
const monthlyBenefits = document.querySelector('.benefit-input');
const form = document.querySelector('.form');

let monthlySalary = 0;
let totalBenefits = 0;

let NHIF = 0;
let NSSF = 0;
let PAYEE = 0;
let monthlyGross = 0;
let monthlyNet = 0;
let annualGross = 0;
let annualNet = 0;
let totalMonthlyDeductions = 0;

form.addEventListener('submit', function(){
  monthlySalary = parseInt(basicSalary.value,10);
  totalBenefits = parseInt(monthlyBenefits.value,10);



  monthlyGross = monthlySalary + totalBenefits;
  PAYEE = calculatePayee(annualGross);
  NHIF = calculateNHIF(monthlyGross);
  NSSF = calculateNSSF(monthlyGross);
  totalMonthlyDeductions = totalDeductions(PAYEE/12,NHIF,NSSF);
  monthlyNet = monthlyGross-totalMonthlyDeductions;
  annualNet = monthlyNet * 12;

  alert(
    'PAYEE is: ' +
    PAYEE/12 + 
    '\n' + 
    'NSSF is :' +
     NSSF +
     '\n' +
     'NHIF is:' +
     NHIF +
     '\n' +
     'monthlyGross is:' +
     monthlyGross +
     '\n' +
     'monthlyNet is:' +
     monthlyNet +
     '\n' +
     'annualGross is:'  +
     annualGross +
     '\n' +
     'annualNet is:' +
     annualNet

    )
  
})


 function calculatePayee(annualGross){
    if(annualGross <= 288000){
        return annualGross * 0.1
    }else if (annualGross >= 288000 && annualGross < 388000 ){
        return annualGross * 0.25
    }else{
        return annualGross * 0.3
    }
}

function calculateNSSF(monthlyGross){
    let payNssf = monthlyGross * 0.07;

   if(payNssf <= 18000 ){
    return payNssf
   }else{
    payNssf = 18000
   }

}

function totalDeductions(PAYEE , NHIF, NSSF){
   return PAYEE + NHIF + NSSF;
};

 function calculateNHIF(monthlyGross){
    if(monthlyGross <= 5999){
        return 150
    }else if(monthlyGross >= 6000 && monthlyGross <= 7999){
        return 300
    } else if (monthlyGross >= 8000 && monthlyGross <= 11999) {
        return 400
    } else if (monthlyGross >= 12000 && monthlyGross <= 14999) {
        return 500
    
    } else if (monthlyGross >= 15000 && monthlyGross <= 19999) {
        return 600
}else{
    return null
}
}



const form = document.querySelector('.form');
const input = document.querySelector('.input');
 form.addEventListener('submit',() => {Studentgrade(parseInt(input.value))})

function Studentgrade(grades){
let marks = 23;
if ( marks < 0 || marks > 100 || isNaN(marks)){
  alert("Invalid input!");
}
else if(marks > 79){
     alert ("A");
}
else if(marks >= 60){
    alert("B");
}
else if( marks >= 49){
    alert("C");
}
else if(marks >= 40){
    alert("D");
}
else{
    alert("E");
}
}




   








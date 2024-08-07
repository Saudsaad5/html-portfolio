function isLeap(year) {
      
var result ="";

if (year % 4 === 0 && year & 100 === 0){
    result = "Not leap year.";
}else if (year % 400 === 0){
    result = "Leap year.";
}else if (year % 4 === 0){
     result = "Leap year.";
}else{
     result = "Not leap year.";
}

return(result);   
}

var x = isLeap(2400);
console.log(x);

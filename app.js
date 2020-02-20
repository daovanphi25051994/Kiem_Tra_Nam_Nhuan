let year = parseInt(prompt("enter a year : "));
let message = "";
if(year % 4 == 0){
    if(year % 100 == 0){
        if (year % 400 == 0){
            message = " a leap year";
        }
        else {
            message = " not a leap year"
        }
    }
    else {
        message = " a leap year";
    }
}
else {
    message = " not a leap year"
}
alert(year+message);
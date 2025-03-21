function validateValues(no1,no2,operation) {
  if(isNaN(no1)){
    return("no1 is invalid number");
  }else if(isNaN(no2)){
    return("no2 is invalid number");
  }else
   return operation(no1,no2);
    
}
function sum(n1,n2) {
    return(n1+n2)
}
function mul(n1,n2) {
    return(n1*n2)
}

var result=validateValues(100,200,sum)
alert(result)
var result=validateValues(100,200,mul)
alert(result)


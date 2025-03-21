function func(){
    var ar=confirm("You want to print?")
    print()
}

function fun(){
    var ar=confirm("You want to print?")
    if(ar){
    print()
    }
}

//location=Using this property we can redirect to current page into another page.
function func1(){
    location="http://google.com"
    }

//open()=Using this property we can redirect to One page into another page.
function func2(){
    window.open("http://amazon.com","_self")
    window.open("http://google.com","_blank")
    window.open("http://fb.com","_blank")
}   

//setTimeout()=Using this function we can call another function after specified time.
function fun1(){
    alert("Happy Birthday")
}
setTimeout("fun1()",5000);//5000 means 5000ms=5sec

//setInterval()=Using this function we can call another function for every regular intervals of time.
function fun2(){
    alert("Thank You...")
}
setInterval("fun2()",3000);

//clearInterval()=To stop the functionality of setInterval.
function fun3(){
    alert("Most Welcome....")
}
var stop=setInterval("fun3()",3000);


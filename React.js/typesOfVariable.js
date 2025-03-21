//Local variable=Variable declaration inside the function comes under the local variable.
//Local Variables of we can not access from another function.
function fun1(){
    var x=100
    alert(x)
}
function fun2() {
    alert("Fun2 Executes...")  
}
fun1()
fun2()

//Global variable=Variable outside the function.we can access this variable from any other function.
var y=200;
function fun3(){
    alert(y);
}
function fun4() {
    alert("Fun4 Executes...")
    alert(y)
}
fun3()
fun4()

//Block scope variable=Variable inside the block comes under this concept.
//We cannot access the variable from out side the block.
//Block scope variables we can declare using let keyword.(var=function scope & let=Block scope)
function fun5() {
    {var a=500
     let b=600
    }
    {alert(a)
     alert(b)
    }
}
fun5()

//example
for(let i=1;i<=3;i++){
    alert(i)
}

//Lexical Scope=It is outer scope variable of inner function.
function outerFun(){
    var c=800;
    function innerFun() {
        alert("Inner Function Executed...")
        alert(c)
    }
    innerFun()
} 
outerFun()


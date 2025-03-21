//Anonymous Function=If we create a function without any name comes under the anonymous function.
var fun=function(){
    alert("From Anonymous Function");
}
alert(fun);
fun();

//example
setTimeout(function(){
    alert("Execute...")
},4000)

//Call back function=If we pass a function as the argument of another function we can use this concept.
function fun1(ref) {
    alert("function1 exec...");
    ref();   
}
function fun2() {
    alert("function2 exec...");  
}
function fun3() {
    alert("function3 exec...");   
}
fun1(fun2);
fun1(fun3);

//nested function=A function inside Another function comes under.
function func1(){
    alert("Func1 Executed...");
    function func2(){
        alert("Func2 Executed...");     
    }
    func2()
}
func1()

//or for return the function.

function func3(){
    alert("Func3 Executed...");
    return function func4(){
        alert("Func4 Executed...");     
    }
}
var res=func3()
res()

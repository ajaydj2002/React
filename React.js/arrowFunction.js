//Arrow Function=It is the short format of a function.We can use arrow functions to place nested functions inside the class.
fun=()=>{
    alert("Function Executed")
}
fun() 

//map()
var arr=[10,20,30,40,50]
var res=arr.map((x)=>{
    return x*10
})
alert(res);

//ex.anonymous function
setTimeout(function(){
    alert("Hii")
},3000)

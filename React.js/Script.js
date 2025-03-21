//********ARRAY CONCEPTS********//

var arr=[10,20,30,40,50]
alert(arr);


var num = ["Java","CSS","HTML",100,200,300]
alert(num);

//length=Using This property we can get total number of element.
alert(arr.length);
alert(num.length);

//push() Method=To add an element at the end of an Array and returns value total number of elements.
arr.push(60)  
alert(arr);

num.push("JavaScript")
alert(num);

//pop() Method=To Removes last element of an Array and returns value of that elements.
var a=arr.pop()
alert(arr);
alert(a)

var b = num.pop()
alert(num);
alert(b);

//shift() Method=To remove first element of an Array and returns value of that elements.
var a = arr.shift()
alert(arr);
alert(a);

var b = num.shift()
alert(num);
alert(b);

//unshift() Method=To add the  element to begining of an Array and returns total number of elements.
var a = arr.unshift(1000)
alert(arr);
alert(a);

var b = num.unshift("AWS")
alert(num);
alert(b);

//slice Method=To get some part of Array.
alert(arr);
alert(arr.slice(1,4));

alert(num);
alert(num.slice(1,5));





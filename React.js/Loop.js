let  arr=[10,20,30,40,50]
var std=["Ajay","Ram","Pavan","Ritesh","Suraj","Rohan"]

//for..in loop=To run a loop through the elements of Array and get index of every element.
for(var x in arr){
    alert(x);
}

//for..of loop=same as for..in loop but hold value of elements.
for(var x of arr){
    alert(x);
}

//forEach loop=It is combination of for..in and for..of to run a loop through the element of an Array.
//We can also execute a function for every element.
std.forEach((x,y) => {
    alert(x);
    alert(y);
}); 

//map()=Same as forEach loop but returns all the values.
var S = arr.map((x,y) => {
    alert(x);
    alert(y);
    return x+y;
}); 
alert(S);

//filter()=Runs a loop through the elements of Array and returns truth values.
var X = arr.filter((x,y) => {
    return x > 30; 
}); 
alert(X);


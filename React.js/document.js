//document=Using this object we can work with current document.

//document.write()=Using this function we can write some content on current document.
window.document.write("Hallo India");

//document.createElement()=Using this function we can create ont element in current document.
//document.body.appendChild()=TO append an element as child element of current document.
function fun(){
    var con=document.createElement("Input")
    con.type="file"
    document.body.appendChild(con)

    var con1=document.createElement("div")
    con1.innerText="Welcome"
    document.body.appendChild(con1)

    var con2=document.createElement("img")
    con2.src="Laptop.jpg"
    document.body.appendChild(con2) 
}

//document.getElementById()=Using this function we can get an element from the current document based on id of the element.
function fun1(){
    var txt=document.getElementById("t")
    txt.value="Enter Here"
    alert(txt.value)
}

//document.title()=To get/set title to current document.
function fun2(){
    document.title="MySite";
    alert(document.title)
    
}
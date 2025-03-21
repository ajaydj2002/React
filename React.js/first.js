function fun(ch){
   var txt1=document.getElementById("n1").value;
   var txt2=document.getElementById("n2").value;
   if (ch=='a')
   document.getElementById("n3").value=parseInt(txt1) + parseInt(txt2);
   else if(ch=='b')
   document.getElementById("n3").value=parseInt(txt1) - parseInt(txt2);
   else if(ch=='c')
    document.getElementById("n3").value=parseInt(txt1) * parseInt(txt2);
   else if(ch=='d')
    document.getElementById("n3").value=parseInt(txt1) / parseInt(txt2);
   
}

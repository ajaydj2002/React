function fun(){
    var dt=new Date();
    document.getElementById("div1").innerText=dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()
}
var s=setInterval("fun()",1000);

function stop(){
    clearInterval(s);
}



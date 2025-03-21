//Object=It is a combination of properties and methods.
var std={
    Username:"Laxman",
    City:"Pune",
    Age:21,
}
alert(std);
alert(std.Username);

var obj=[{Uname:"Ajay",City:"Pune"},{Uname:"Akash",City:"Daund"}]
alert(obj);
alert(obj[0].Uname);
alert(obj[1].Uname);
alert(obj[0].City);
alert(obj[1].City);

var obj={uname:"Ram",wife:"Sita",child:["son1","son2"]}
alert(obj);
alert(obj.child[0]);
alert(obj.child[1]);


var obj={uname:"Aditya",
    wifes:[{name:"Nikita",child:{son:["N1","N2"]}
},{
    name:"Pratiksha",child:{son:["P1","P2"]}
}]
}
alert(obj);
alert(obj.wifes[0].name);
alert(obj.wifes[1].name);
alert(obj.wifes[1].child.son[1]);

var cmp={Company:[{loc:"Hyd",prog:["hp1","hp2"],ad:["ad1","ad2"]
},{
   loc:"Pune",prog:["p1","p2"],hr:["h1","h2"]
}]
}
alert(cmp);
alert(cmp.Company[0].loc[0].prog[1]);


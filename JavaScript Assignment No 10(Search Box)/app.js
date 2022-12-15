var std1 ={
    name:"Sarfaraz Mehmood",
    Age:12,
    Class:6,
    Address:"House # R10,Rawalpindi",
    Rollno:"45421"
}
var std2 ={
    name:"Liaquat Ali",
    Age:13,
    Class:7,
    Address:"House #F20,karachi",
    Rollno:"45422"
}
var std3 ={
    name:"Ali Ahmed",
    Age:11,
    Class:6,
    Address:"House # G-330,Hyderabad",
    Rollno:"45423"
}
var std4 ={
    name:"Aamir Ali Shah",
    Age:14,
    Class:8,
    Address:"House # R940,karachi",
    Rollno:"454233a"
}
var std5 ={
    name:"Abdullah Khan",
    Age:16,
    Class:10,
    Address:"House # 50,Lahore",
    Rollno:"ab1005"
}
var std6 ={
    name:"Haris",
    Age:9,
    Class:4,
    Address:"House # 60,karachi",
    Rollno:"ab1006"
}
var std7 ={
    name:"Hoorain",
    Age:17,
    Class:11,
    Address:"House # e-129,Lahore",
    Rollno:"ab1007"
}
var std8 ={
    name:"Meraj",
    Age:19,
    Class:13,
    Address:"House # 80,karachi",
    Rollno:"34222"
}
var std9 ={
    name:"Wahaj",
    Age:19,
    Class:13,
    Address:"House # 90,karachi",
    Rollno:"26235"
}
var std10 ={
    name:"Maaz Khan",
    Age:18,
    Class:12,
    Address:"House # 100,karachi",
    Rollno:"12323ca"
}
var arr=[std1,std2,std3,std4,std5,std6,std7,std8,std9,std10];
function search(){
    var a=document.getElementById('sea'); 
    var b = a.value;
    var g=false;
    if (b==""){
        var div=document.getElementById("app");
        var Enter_name=document.createTextNode("   Please enter Roll no.");
        div.appendChild(Enter_name);
    }else{
        for (i=0; i<arr.length; i++){
            if (b==arr[i].Rollno){
                console.log(arr[i].Rollno);
                var div=document.getElementById("app");
                var s=arr[i].name;
                var t=arr[i].Age;
                var u=arr[i].Class;
                var v=arr[i].Address;
                var w=arr[i].Rollno;

                var info=document.createTextNode("Name : "+s);
                var info2=document.createTextNode("Age : "+t);
                var info3=document.createTextNode("Class : "+u);
                var info4=document.createTextNode("Address : "+v);
                var info5=document.createTextNode("Roll no. "+w);

                var p1=document.createElement('p');
                var p2=document.createElement('p');
                var p3=document.createElement('p');
                var p4=document.createElement('p');
                var p5=document.createElement('p');

                p1.appendChild(info);
                p2.appendChild(info2);
                p3.appendChild(info3);
                p4.appendChild(info4);
                p5.appendChild(info5);

                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);
                div.appendChild(p4);
                div.appendChild(p5);

                g=true;

            }
        }
        if(g==true){
        }
        else{
            var div=document.getElementById("app");
            var Notpre=document.createTextNode("   No Student Found");
            div.appendChild(Notpre);
        }
    }
    
    var b = a.value="";
}


    
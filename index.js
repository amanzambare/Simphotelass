let servers=[];
let tasks=[];
var addServer=document.getElementById("addServer");
var addTask=document.getElementById("addTask");
var myProgress=document.getElementById("myProgress");
var ip=document.getElementById("inp");
var j;
var count =0;
addServer.addEventListener("click",  clickServer);
function clickServer(){
 count++;
  if (count>10){
    alert("You can enter upto 10 servers");
    return;
  }
 addTask.addEventListener("click", myclick);

 }
function myclick(){
 j=ip.value;

var t=[];
for (let l=0;l<j;l++){
   t.push(l);
}
   for (let i of t){
   let new1=document.createElement("div");
   new1.setAttribute("class","myBar");
  new1.setAttribute("id",i);
   //new1.innerHTML="10%"; 
   myProgress.appendChild(new1);
  move(new1);
 }
};
function  move(new1) {
 console.log(new1.id);
var cnt = 0;
var id =  setInterval(function frame(){
if (cnt >= 100) {
clearInterval(id);
} else {
console.log("here");
cnt++;
new1.style.width = cnt+"%" ;
new1.innerHTML = "loading"+cnt  + "%";
}}, 230);
}
function removebar(){
       addServer.removeEventListener("mouseover",clickServer);
     

};
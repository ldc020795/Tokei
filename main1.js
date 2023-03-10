
n=new Date();
if(n.getTimezoneOffset()==0)t=n.getTime()+(7*60*60*1000);
else t=n.getTime();
n.setTime(t);
var dn=new Array("日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日");
y=n.getFullYear();
m=n.getMonth()+1;
d=n.getDay();
document.write(dn[d]+", "+y+"/"+(m<10?"0":"")+m+"/"+(n.getDate()<10?"0":"")+n.getDate());
var myVar=setInterval(
function(){myTimer()},1000); 
function myTimer(){
var d=new Date();
var t=d.toLocaleTimeString(); 
document.getElementById("n").innerHTML=t;
}

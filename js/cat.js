console.log("the value is");

var cat=document.getElementById("cat");
var cat1=document.getElementById("cat1");
var cattext=document.getElementById("cattext");
var catarray=["kiki","muimui","agnes"];
var cat1name=document.getElementById("cat1name");
var cat2name=document.getElementById("cat2name");

cat1name.innerText=catarray[0];
cat2name.innerText=catarray[1];
let click=0;
cat.addEventListener('click',function(){
	click=click+1;
console.log("no of clicks"+click);
cattext.value=click;
});
cat1.addEventListener('click',function(){
	click=click+1;
console.log("no of clicks"+click);
cattext.value=click;
});

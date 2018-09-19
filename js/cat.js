var cat=document.getElementById("cat");
var cattext=document.getElementById("cattext");

let click=0;
cat.addEventListener('click',function(){
	click=click+1;
console.log("no of clicks"+click);
cattext.value=click;
});

var catarray=["kiki","muimui","agnes","shelby","cassie"];
var catimages=["images/cat.jpg","images/cat1.jpg","images/cat2.jpg","images/cat3.jpg","images/cat4.jpg"];

var elem=document.getElementById("container");
var imageelement=document.getElementById("containerimage");
for(let i=0;i<catarray.length;i++)
{

for(let j=0;j<catimages.length;j++){

if(i===j){
	var name=catarray[i];
var para = document.createElement("p");
var node = document.createTextNode(name);
para.appendChild(node);
imageelement.appendChild(para);
var span=document.createElement("span");
var nodespan = document.createTextNode("     ");
span.appendChild(nodespan);
imageelement.appendChild(span);
var src=catimages[j];
console.log(src);
var img=document.createElement("img");
img.setAttribute("src", src);

img.setAttribute("width", "300");
img.setAttribute("alt", "cats");
img.id="imgcat"+j;
console.log(img.id);
imageelement.appendChild(img);

var text=document.createElement("input");
text.type=text;
text.id="cat"+j;
text.value=0;
console.log(text.id);
imageelement.appendChild(text);

var imgid=document.getElementById("j");
var textid=document.getElementById(text.id);



}
}
}
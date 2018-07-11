// function getfile(file,callback){
//   var xhr=new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function(){
//     if(xhr.readyState === 4 && xhr.status =="200"){
//     callback(xhr.responseText);
//   }
// };
// xhr.send(null);
// }
// getfile("data.json",function(text){
//   var data=JSON.parse(text);
//   console.log(data);
// })
function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then (response=>{
    if(response.ok){
      resolve(response.json());
    }
    else {
      reject(new Error('error'));
    }
  })
})
}
var newFile=loadJSON("data.json");
newFile.then(data=>{
console.log(data);
career(data.career);
education(data.education);
})

var childtwo=document.querySelector(".childtwo");

function career(careerObj){
var careerHeading=document.createElement("h2");
careerHeading.textContent="Career Objective";
childtwo.appendChild(careerHeading);
var hr=document.createElement("hr");
childtwo.appendChild(hr);
var careerP=document.createElement("p");
careerP.textContent=careerObj.info;
childtwo.appendChild(careerP);
var hr=document.createElement("hr");
childtwo.appendChild(hr);
}
function education(edu){
  var educationHeading=document.createElement("h2");
  educationHeading.textContent="Education";
  childtwo.appendChild(educationHeading);
  var hr=document.createElement("hr");
  childtwo.appendChild(hr);
  for(var i=0;i<edu.length;i++)
  {
    eduH3=document.createElement("h3");
    eduH3.textContent=edu[i].degree;
    childtwo.appendChild(eduH3);
  var eduUl=document.createElement("ul");
  var eduLi=document.createElement("li");
  eduLi.textContent=edu[i].institute;
  eduUl.appendChild(eduLi);
  childtwo.appendChild(eduUl);
  var eduUi=document.createElement("ui");
  var eduLi=document.createElement("li");
  eduLi.textContent=edu[i].data;
  eduUi.appendChild(eduLi);
  childtwo.appendChild(eduUi);

}
}

// -----------------------------------------home page----------------------------------
var slide = document.getElementById('slide');
var container = document.getElementsByClassName('container')
window.onmousemove = function(e){
  var x = e.clientX;
  slide.style.left = x/1.2 + 'px';
}
// ---------------------------------------------------------------------------
// ------------------------------Recent Projects----------------------------------
// ----------------------------------------------------------------------------------
function fade(event){
	var element = event.currentTarget;
	if (element.className === "rec-proj1-container") {
    document.querySelector(".rec-proj1-container ion-icon").style.opacity = 1;
    document.querySelector(".rec-proj2-container").style.opacity = 0.5;
    document.querySelector(".rec-proj3-container").style.opacity = 0.5;
  }
  else if (element.className === "rec-proj2-container"){
    document.querySelector(".rec-proj2-container ion-icon").style.opacity = 1;
    document.querySelector(".rec-proj1-container").style.opacity = 0.5;
    document.querySelector(".rec-proj3-container").style.opacity = 0.5;
  }
  else if(element.className === "rec-proj3-container"){
    document.querySelector(".rec-proj3-container ion-icon").style.opacity = 1;
    document.querySelector(".rec-proj1-container").style.opacity = 0.5;
    document.querySelector(".rec-proj2-container").style.opacity = 0.5;
  }
};
function fadein(event){
	var element = event.currentTarget;
	if (element.className === "rec-proj1-container") {
    document.querySelector(".rec-proj1-container ion-icon").style.opacity = 0;
    document.querySelector(".rec-proj2-container").style.opacity = 1;
    document.querySelector(".rec-proj3-container").style.opacity = 1;
  }
  else if (element.className === "rec-proj2-container"){
    document.querySelector(".rec-proj2-container ion-icon").style.opacity = 0;
    document.querySelector(".rec-proj1-container").style.opacity = 1;
    document.querySelector(".rec-proj3-container").style.opacity = 1;
  }
  else if(element.className === "rec-proj3-container"){
    document.querySelector(".rec-proj3-container ion-icon").style.opacity = 0;
    document.querySelector(".rec-proj1-container").style.opacity = 1;
    document.querySelector(".rec-proj2-container").style.opacity = 1;
  }
};
// --------------------------------------------------------------------------------
// Project card flip method------------------------------------------------------>
// ------------------------------------------------------------------------------------
function flip(event){
	var element = event.currentTarget;
	if (element.className === "flip-card") {
    if(element.style.transform == "rotateX(180deg)") {
      element.style.transform = "rotateX(0deg)";
    }
    else {
      element.style.transform = "rotateX(180deg)";
    }
  }
};
// ---------------------------------------------------------------------------------
// copt text to clipboard--------------------------------------------------------->
// -------------------------------------------------------------------------------------
const myEmail= document.querySelector('.email');
const emailIcon = document.querySelector('.hello'); 

emailIcon.onclick = function(){
  //select the text
  myEmail.select();
  //copy the text
  document.execCommand("copy");
  alert(`Copied the text: ${myEmail.value}`);
}











alert("Warning: Please don't take it seriously just for fun")
function f1(){   
    /*=============value receive starts===========*/
   let firstName = document.getElementById("first").value;
   let secondName = document.getElementById("second").value;
   let print = document.getElementById("text");
   let math = Math.random();
   math = Math.floor(math*101);
   let final = `${firstName} 💝 ${secondName} : ${math}% `;
   print.innerHTML =final;
       /*=======value receive ends========*/
       if(firstName=="" || secondName==""){
           print.innerHTML=("Inter vaild value");
       }
       /*======= condition starts =========*/
   let command = document.getElementById("ptag");
 if(math<=100 && math>=90){
    command.innerHTML= ("Excellan 💖");
 }
else if(math< 90 && math>=80) {
   command.innerHTML= ("best ❣");
 }
else if(math <80 && math>= 60) {
    command.innerHTML= ("good 🤗");
}
else if(math<60 && math<=40){
    command.innerHTML= ("Not bad 😇");
}
else if (math<=25 && math>=20 ) 
{command.innerHTML = ("Ohf! 😴");
 }
 else{command.innerHTML=("Very few 💔")}
/*===================== conditin ends============*/
if(firstName=="" || secondName==""){
    command.innerHTML=("Inter vaild value");
}
/*================= right images condition starts=====*/

let image = document.getElementById("pic");

if(math<=100 && math>=80){
    image.src=("balloon.png");
    }
else if(math<70 && math>=50){
             image.src=("love.png");
          }
  else if(math<50 && math>=36 ){
            image.src=("broken-heart.png");
         }
         

    else{image.src=("sad.png");}
/*============== ritht images conditions ends======*/
/*================= left images condition starts=====*/

let images = document.getElementById("pic1");

if(math<=100 && math>=80){
    images.src=("balloon.png");
    }
else if(math<70 && math>=50){
             images.src=("love.png");
          }
  else if(math<50 && math>=36 ){
            images.src=("broken-heart.png");
         }
         

    else{images.src=("sad.png");}
/*============== left images conditions ends======*/
}
document.getElementById("button").addEventListener('click',f1);


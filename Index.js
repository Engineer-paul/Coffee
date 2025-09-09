var sideMenu = document.getElementById("side-menu");
function showSidemenu(){
  sideMenu.classList.toggle("show")
  /*var text = document.getElementById("imageText")
  if(text.style.display==="none"){
    text.style.display = "inline"
  }else{
    text.style.display = "none"
  }*/
}
/* script for order section switching*/

var select = document.getElementById('selectCup')
var diplayRegion = document.getElementById('displayRegion')
var textarea = document.getElementById('textarea')
var main = document.getElementById('mainSection')
var minorSection = document.getElementById("finalPurchasePriceCheck")
var img = document.getElementById("img")
var cupValue = document.getElementById('cupValue')
var cupValue2 = document.getElementById("cupValue2")
var unitPrice = document.getElementById("unitPrice")
var order = document.getElementById('order')
// declaration for inputs in the order section
      var input1 = document.getElementById("input1")
      var input2 = document.getElementById("input2")
      var input3 = document.getElementById("input3")
      var input4 = document.getElementById("input4")
      
function getPrice(){
  let input1venue = document.getElementById('input1venue')
  var input11 = input1.value
        var input22 = input2.value
        var input33 = input3.value
        var input44 = input4.value
        
      //adding name to image of purchase
      input1venue.innerHTML=' '+input11+" ";
        if((input11==""||input22=="")||(input33==""||input44=="")){
          alert("fill all the form")
        }
if ((select.value==2 && textarea.value != "")&&input44!=""){
  let multiplier = textarea.value
    let display = multiplier * 200
   displayRegion.innerHTML="<b>"+" "+display+"<b>"
   main.style.display = 'none'
   minorSection.style.display = "block"
   cupValue.innerHTML ="<b>"+" "+multiplier+"</b>"
   cupValue2.innerHTML ="<b>"+" "+multiplier+"</b>"
   img.src = "images/coffee1.jpg"
   unitPrice.innerHTML = " "+200+" "
   order.style.display = "block"
  }
else if ((select.value==3 && textarea.value != "")&&input44!=""){
  let multiplier = textarea.value
    let display = multiplier * 500
   displayRegion.innerHTML="<b>"+" "+display+"<b>"
   main.style.display = 'none'
   minorSection.style.display = "block"
   cupValue.innerHTML ="<b>"+" "+multiplier+"</b>"
   cupValue2.innerHTML ="<b>"+" "+multiplier+"</b>"
   img.src = "images/coffee2.jpg"
   unitPrice.innerHTML =" "+500+" "
   order.style.display = "block"
  }
else if ((select.value==4 && textarea.value != "")&&input44!=""){
  let multiplier = textarea.value
    let display = multiplier * 1000
   displayRegion.innerHTML="<b>"+" "+display+"<b>"
   main.style.display = 'none'
   minorSection.style.display = "block"
   cupValue.innerHTML ="<b>"+" "+multiplier+"</b>"
   cupValue2.innerHTML ="<b>"+" "+multiplier+"</b>"
   img.src = "images/coffee3.jpg"
   unitPrice.innerHTML = " "+1000+" "
   order.style.display = "block"
  }
else if ((select.value==5 && textarea.value != "")&&input44!=""){
  let multiplier = textarea.value
    let display = multiplier * 2000
   displayRegion.innerHTML="<b>"+" "+display+"<b>"
   main.style.display = 'none'
   minorSection.style.display = "block"
   cupValue.innerHTML ="<b>"+" "+multiplier+"</b>"
   cupValue2.innerHTML ="<b>"+" "+multiplier+"</b>"
   img.src = "images/coffee4.jpg"
   unitPrice.innerHTML = " "+2000+" "
   order.style.display = "block"
  }
/*else if (select.value==""){
  alert("select the cup size of your choice")
  }*/
  
  
}
//displayRegion.innerHTML = 200
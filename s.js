window.onload = Main;
function Main() {
let dlpdf = document.getElementById("button1");
let dl1pdf = document.getElementById("button2");
dlpdf.addEventListener("click", k1);
dl1pdf.addEventListener("click", k2);
}

function k1(){
  open( "緊急時行動マニュアル見開き.pdf" ) ;
}

function k2(){
  open( "緊急時行動マニュアル.pdf" ) ;
}

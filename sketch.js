var myImg;
var myImg2;
var myImag3;
var myImag4;
var myImag5;
var myImag6;
var myImag7;
var myImag8;
var myImag9;
var myImag10;
var myImag11;
var myImag12;
var myImag13;
var myImag14;
var myImag15;
var myImag16;
var myImag17;
var myImag18;
var myImag19;
var myImag20;
var myImag21;
var myImag22;
var myImag23;
var myImag24;
var myImag25;
var myImag26;
var myImag27;
var myImag28;
var myImag29;
var myImag30;
var myImag31;
var myImag32;

function preload(){
  myImage = loadImage("./foto/okok.png");
  myImage2 = loadImage("./foto/henri.png")
  myImage3 = loadImage("./foto/alcide.png")
  myImage4 = loadImage("./foto/giuseppe.png")
  myImage5 = loadImage("./foto/furler.png")
  myImage6 = loadImage("./foto/shuman.png")
  myImage7 = loadImage("./foto/furler2.png")
  myImage8 = loadImage("./foto/gaetano.png")
  myImage9 = loadImage("./foto/duviesart.png")
  myImage10 = loadImage("./foto/victor.png")
  myImage11 = loadImage("./foto/poher.png")
  myImage12 = loadImage("./foto/scelba.png")
  myImage13 = loadImage("./foto/walter.png")
  myImage14 = loadImage("./foto/cornelis.png")
  myImage15 = loadImage("./foto/spenale.png")
  myImage16 = loadImage("./foto/colombo.png")
  myImage17 = loadImage("./foto/veil.png")
  myImage18 = loadImage("./foto/pierre.png")
  myImage19 = loadImage("./foto/piet.png")
  myImage20 = loadImage("./foto/plumb.png")
  myImage21 = loadImage("./foto/crespo.png")
  myImage22 = loadImage("./foto/egon.png")
  myImage23 = loadImage("./foto/klaus.png")
  myImage24 = loadImage("./foto/robles.png")
  myImage25 = loadImage("./foto/nicole.png")
  myImage26 = loadImage("./foto/cox.png")
  myImage27 = loadImage("./foto/borrel.png")
  myImage28 = loadImage("./foto/hans.png")
  myImage29 = loadImage("./foto/buzek.png")
  myImage30 = loadImage("./foto/martin.png")
  myImage31 = loadImage("./foto/martin2.png")
  myImage32 = loadImage("./foto/tajani.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);


}
function draw() {
  background(152,163,162)
  image(myImage, 0,0, image.width, image.height);
//henri
  if ((mouseX > windowWidth / 10) && (mouseX < windowWidth / 5) && (mouseY > windowHeight/5.3)&& (mouseY < windowHeight/2)) {
     image(myImage2, 0, 0, windowWidth, windowHeight);
    }
   // alcide
    if ((mouseX > windowWidth / 5.3) && (mouseX < windowWidth / 4) && (mouseY > windowHeight/5.3) && (mouseY < windowHeight/2)) {
     image(myImage3, 0, 0, windowWidth, windowHeight);
   }
   // giuseppe
   if ((mouseX > windowWidth / 3.5) && (mouseX < windowWidth / 2.8)&&(mouseY > windowHeight/5.3)&& (mouseY < windowHeight/2)) {
     image(myImage4, 0, 0, windowWidth, windowHeight);
   }
   // furler
   if ((mouseX > windowWidth / 2.6) && (mouseX < windowWidth / 2)&&(mouseY > windowHeight/5.3)&& (mouseY < windowHeight/2)) {
     image(myImage5, 0, 0, windowWidth, windowHeight);
   }
   // shuman
   if ((mouseX > windowWidth / 1.99) && (mouseX < windowWidth / 1.8)&&(mouseY > windowHeight/5.3)&& (mouseY < windowHeight/2)) {
      image(myImage6, 0, 0, windowWidth, windowHeight);
    }
    // furler 2
    if ((mouseX > windowWidth / 1.7) && (mouseX < windowWidth / 1.5)&&(mouseY > windowHeight/5.3)&& (mouseY < windowHeight/2)) {
      image(myImage7, 0, 0, windowWidth, windowHeight);
    }
    // gaetano
    if ((mouseX > windowWidth / 1.4) && (mouseX < windowWidth / 1.2)&&(mouseY > windowHeight/5.3)&& (mouseY < windowHeight/2)) {
      image(myImage8, 0, 0, windowWidth, windowHeight);
    }
    //du
    if ((mouseX > windowWidth / 1.2) && (mouseX < windowWidth / 0.99)&&(mouseY > windowHeight/5.3)&& (mouseY < windowHeight/2)) {
      image(myImage9, 0, 0, windowWidth, windowHeight);
    }
    //victor
    if ((mouseX > windowWidth / 10) && (mouseX < windowWidth / 5)&&(mouseY > windowHeight/1.9)&& (mouseY < windowHeight/1.6)) {
      image(myImage10, 0, 0, windowWidth, windowHeight);
    }
    //poher
    if ((mouseX > windowWidth / 5.3) && (mouseX < windowWidth / 4)&&(mouseY > windowHeight/1.9)&& (mouseY < windowHeight/1.6)) {
      image(myImage11, 0, 0, windowWidth, windowHeight);
    }
    //scelba
    if ((mouseX > windowWidth / 3.5) && (mouseX < windowWidth / 2.8)&&(mouseY > windowHeight/1.9)&& (mouseY < windowHeight/1.6)) {
      image(myImage12, 0, 0, windowWidth, windowHeight);
    }
    //walter
    if ((mouseX > windowWidth / 2.6) && (mouseX < windowWidth / 2)&&(mouseY > windowHeight/1.9)&& (mouseY < windowHeight/1.6)) {
      image(myImage13, 0, 0, windowWidth, windowHeight);
    }
    //cornelis
    if ((mouseX > windowWidth / 1.99) && (mouseX < windowWidth / 1.8)&&(mouseY > windowHeight/1.9)&& (mouseY < windowHeight/1.6)) {
      image(myImage14, 0, 0, windowWidth, windowHeight);
    }
    //spenale
    if ((mouseX > windowWidth / 1.7) && (mouseX < windowWidth / 1.5)&&(mouseY > windowHeight/1.9)&& (mouseY < windowHeight/1.6)) {
      image(myImage15, 0, 0, windowWidth, windowHeight);
    }
    //colombo
    if ((mouseX > windowWidth / 1.4) && (mouseX < windowWidth / 1.2)&&(mouseY > windowHeight/1.9)&& (mouseY < windowHeight/1.6)) {
      image(myImage16, 0, 0, windowWidth, windowHeight);
    }
    //veil
    if ((mouseX > windowWidth / 1.2) && (mouseX < windowWidth / 0.99)&&(mouseY > windowHeight/1.9)&& (mouseY < windowHeight/1.6)) {
      image(myImage17, 0, 0, windowWidth, windowHeight);
    }
    //pierre
    if ((mouseX > windowWidth / 10) && (mouseX < windowWidth / 5)&&(mouseY > windowHeight/1.4)&& (mouseY < windowHeight/1.2)) {
      image(myImage18, 0, 0, windowWidth, windowHeight);
    }
    //piet
    if ((mouseX > windowWidth / 5.3) && (mouseX < windowWidth / 4)&&(mouseY > windowHeight/1.4)&& (mouseY < windowHeight/1.2)) {
      image(myImage19, 0, 0, windowWidth, windowHeight);
    }
    //plumb
    if ((mouseX > windowWidth / 3.5) && (mouseX < windowWidth / 2.8)&&(mouseY > windowHeight/1.4)&& (mouseY < windowHeight/1.2)) {
      image(myImage20, 0, 0, windowWidth, windowHeight);
    }
    //crespo
    if ((mouseX > windowWidth / 2.6) && (mouseX < windowWidth / 2)&&(mouseY > windowHeight/1.4)&& (mouseY < windowHeight/1.2)) {
      image(myImage21, 0, 0, windowWidth, windowHeight);
    }
    //egon
    if ((mouseX > windowWidth / 1.99) && (mouseX < windowWidth / 1.8)&&(mouseY > windowHeight/1.4)&& (mouseY < windowHeight/1.2)) {
      image(myImage22, 0, 0, windowWidth, windowHeight);
    }
    //klaus
    if ((mouseX > windowWidth / 1.7) && (mouseX < windowWidth / 1.5)&&(mouseY > windowHeight/1.4)&& (mouseY < windowHeight/1.2)) {
      image(myImage23, 0, 0, windowWidth, windowHeight);
    }
    //robles
    if ((mouseX > windowWidth / 1.4) && (mouseX < windowWidth / 1.2)&&(mouseY > windowHeight/1.4)&& (mouseY < windowHeight/1.2)) {
      image(myImage24, 0, 0, windowWidth, windowHeight);
    }
    //nicole
    if ((mouseX > windowWidth / 1.2) && (mouseX < windowWidth / 0.99)&&(mouseY > windowHeight/1.4)&& (mouseY < windowHeight/1.2)) {
      image(myImage25, 0, 0, windowWidth, windowHeight);
    }
    //cox
    if ((mouseX > windowWidth / 10) && (mouseX < windowWidth / 5)&&(mouseY > windowHeight/1.1)&& (mouseY < windowHeight/1)) {
      image(myImage26, 0, 0, windowWidth, windowHeight);
    }
    //borrel
    if ((mouseX > windowWidth / 5.3) && (mouseX < windowWidth / 4)&&(mouseY > windowHeight/1.1)&& (mouseY < windowHeight/1)) {
      image(myImage27, 0, 0, windowWidth, windowHeight);
    }
    //hans
    if ((mouseX > windowWidth / 3.5) && (mouseX < windowWidth / 2.8)&&(mouseY > windowHeight/1.1)&& (mouseY < windowHeight/1)) {
      image(myImage28, 0, 0, windowWidth, windowHeight);
    }
    //buzek
    if ((mouseX > windowWidth / 2.6) && (mouseX < windowWidth / 2)&&(mouseY > windowHeight/1.1)&& (mouseY < windowHeight/1)) {
      image(myImage29, 0, 0, windowWidth, windowHeight);
    }
    //martin
    if ((mouseX > windowWidth / 1.99) && (mouseX < windowWidth / 1.8)&&(mouseY > windowHeight/1.1)&& (mouseY < windowHeight/1)) {
      image(myImage30, 0, 0, windowWidth, windowHeight);
    }
    //martin2
    if ((mouseX > windowWidth / 1.7) && (mouseX < windowWidth / 1.5)&&(mouseY > windowHeight/1.1)&& (mouseY < windowHeight/1)) {
      image(myImage31, 0, 0, windowWidth, windowHeight);
    }
    //tajani
    if ((mouseX > windowWidth / 1.4) && (mouseX < windowWidth / 1.2)&&(mouseY > windowHeight/1.1)&& (mouseY < windowHeight/1)) {
      image(myImage32, 0, 0, windowWidth, windowHeight);
    }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

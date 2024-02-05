function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(0, 0, 255);
  // add your drawing code here ...
  ellipse(200,100,75)
  strokeWeight(1)
  ellipse(200,100,63)
  strokeWeight(2)
  fill (0, 163, 108)
  ellipse(170, 65, 30)
  ellipse(230, 135, 30)
  ellipse(230, 65, 30)
  ellipse(170, 135, 30)
  ellipse(200, 50, 40, 50)
  triangle (195, 135, 205, 135, 200, 150)
  arc(200, 40, 20, 20, PI, TWO_PI) //mouth
  ellipse(190, 50, 3) //eyes
  ellipse(210, 50, 3)
  strokeWeight(1)
  line(198, 45, 198, 43)
  line(202, 45, 202, 43)
  strokeWeight(2)
  arc(185, 90, 15, 15, TWO_PI, PI) //scutes
  arc(215, 100, 15, 15, TWO_PI, PI)
  arc(195,110, 15, 15, TWO_PI, PI)
}
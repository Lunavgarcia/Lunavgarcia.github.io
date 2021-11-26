let eyeMotion = 0
let pageNum = 1; //declare a variable to hold current page number (current state)
let numPages = 6; //declare a variable to hold total number of pages (states)
function setup() {
  createCanvas(400, 400);
  console.log(pageNum); //during setup, print current page (zero)
  noStroke() 
}

function draw() {
  
  //display different color depends the page.
if (pageNum == 1) { background(255, 204, 0) }
     
  else if (pageNum == 2){
    background('#fae')
  }
  else if (pageNum == 3){
    background('rgba(100%,0%,100%,0.5)');
  }
  else if (pageNum == 4){
    background('rgba(0,255,0, 0.25)')
  }
  else if (pageNum == 5){
    background(255,255,0);
  }
  else if (pageNum == 6){
    background(255, 204, 100);
  }
{//add your self portrait on the top of the background
  
  eyeMotion = map(mouseX,0,400,-5,5,1)
  //print mouse x and y coords to the console separated by a comma
  //using the plus sign between different datatypes does not add, but instead concatenates. 
  console.log(mouseX + "," + mouseY);
  
  
  fill(255,255,255) //color of the frame
  square(100,100,200,20)//create the frame
  
  fill(255,100,250) //color of the dress 
  triangle(200,250,350,385,50,385)//draw the dress
  
  fill(255,230,0)//hair color 
  ellipse(250,150,100,120)//back section
  
  fill(255,240,0)//hair color 
  ellipse(250,200,100,120)
  
  
  fill(255,220,180);//define a skin color 
  ellipse(width/2, height/2, 100, 150); //draw a face. 
  
  fill(255,245,0)//hair color 
  ellipse(200,120,120,100)//hair front side
  
  fill(255)//set fill to white for the eyes
  ellipse(180,180,25,15)//draw left eyeball 
  ellipse(220,180,25,15)//draw right eyeball
  
  fill(20,0,255)//set the color of the iris 
  ellipse(180 + eyeMotion,180,10)//draw left iris eyeball 
  ellipse(220 + eyeMotion,180,10)//draw right iris eyeball
  
  fill(0)
  ellipse(180 + eyeMotion,180,5)//draw left pupil eyeball 
  ellipse(220 + eyeMotion,180,5)//draw right pupil eyeball
  
  fill(0,0,0)//color eyebrow
  rect(165,160, 25, 5)//position of lefteyebrow
  
  fill(0,0,0)//color eyebrow2
  rect(210,165, 25, 5)//position of righteyebrow
  
  fill(255)
  arc(200, 240, 40, 40, 0, PI + QUARTER_PI, CHORD);
  
  fill(255,150,130)
  triangle(190, 220, 200, 180, 210, 220)
  
  fill(255,220,180)//hand color 
  rect(150,300,30,15)//hand position
  fill(255,220,180)//right hand color 
  rect(220,300,30,15)//hand position
    }
}

//mousePressed() function function when I click with the mouse 
function mousePressed() {
  //if the numerical value of the current page is less than the total number of pages, we can increment the pageNum variable's value and move to the next page
  if (pageNum < numPages){
    pageNum++;
  }
  
  //otherwise, reset to first page
  else{
    pageNum = 1;
  }
}
let circles = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255, 0, 255)
  noFill()
}

function draw() {
  clear()
  background(0)
  
  circles = circles.filter(x => x.radius < 500)
  circles.forEach(x => x.radius += 1)
  circles.forEach(x => circle(x.x, x.y, x.radius))
}

function mouseClicked() {
 
  circles.push({
    x: mouseX,
    y: mouseY,
    radius: 0.1
  })
}

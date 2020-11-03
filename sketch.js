// renaming everything
const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies

function setup() {
  createCanvas(400,400);
  // made everything
  engine = Engine.create()
  world = engine.world;
  // made a variables for the properties
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,380,400,40,options)
  World.add(world,ground)

  var ball_options = {
    // bounceOff in physics
    restitution: 1
  }
  var ball2_options = {
    // bounceOff in physics
    restitution: 0.5
  }
  ball = Bodies.circle(150,50,20, ball_options);
  World.add(world,ball)

  ball2 = Bodies.circle(250,50,20, ball2_options);
  World.add(world,ball2)
}

function draw() {
  background("blue"); 
  Engine.update(engine)
  // based on center - 
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,20);
  ellipse(ball2.position.x, ball2.position.y,20);
  rectMode(CENTER) 
  fill("green");
  rect(ground.position.x,ground.position.y,400,40)
}
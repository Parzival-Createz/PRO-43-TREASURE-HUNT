const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop = [];
var boy;

function preload() {

}

function setup() {
    var canvas = createCanvas(400, 500);
    engine = Engine.create();
    world = engine.world;

    for (var i = 0; i < 100; i++) {
        drop.push(new Drops(random(0, 400), random(0, 500)));
    }

    boy = new Umbrella(200, 335, 80);
}

function draw() {
    background("black");
    Engine.update(engine);

    for (var i = 0; i < 100; i++) {
        drop[i].display();
        drop[i].update();
    }
    boy.display();
}


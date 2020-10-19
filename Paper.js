class paper {

    constructor(x, y) {

      var options = {

          'friction':0.5,
          'density':1.2,
          'restitution':0.3

      }


      this.body = Bodies.circle(x, y, 30, options);

      this.radius = 30;

      World.add(world, this.body);


    }
    display(){


      var pos =this.body.position;


      push();

      translate(pos.x, pos.y);

      ellipseMode(RADIUS);

      fill("red");   

      ellipse(0, 0, this.radius, this.radius);

      pop();

    }
  }
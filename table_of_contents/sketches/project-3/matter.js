const createParticles = temperature => {
    // Create an engine and renderer
    const engine = Matter.Engine.create();
    const render = Matter.Render.create({
      element: document.getElementById('container'),
      engine: engine
    });
  
    // Create circles as Matter.js bodies
    const circles = [9000];
    const numCircles = temperature * 3;
    const containerWidth = document.getElementById('container').offsetWidth;
    const containerHeight = document.getElementById('container').offsetHeight;
    for (let i = 0; i < numCircles; i++) {
      const circle = Matter.Bodies.circle(
        Math.random() * containerWidth,
        Math.random() * containerHeight,
        10,
        {
          restitution: 0.5,
          friction: 0.1,
          frictionAir: 0.05,
          render: {
            fillStyle: '#ffffff',
            strokeStyle: '#000000',
            lineWidth: 1
          }
        }
      );
      circles.push(circle);
    }
  
    // Add the circles to the engine
    Matter.World.add(engine.world, circles);
  
    // Start the engine and renderer
    Matter.Engine.run(engine);
    Matter.Render.run(render);
  }
  
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const controlButton = document.getElementById('controlButton');

// Define game objects
// const ball = {
//   x: canvas.width / 2,
//   y: canvas.height / 2,
//   radius: 10,
//   velocityX: 5,
//   velocityY: 5,
//   speed: 7,
//   color: '#DAA520'
// };

const com1 = {
  x: 20,
  y: (canvas.height - 100) / 2,
  width: 10,
  height: 100,
  color: '#DAA520',
  score: 0
};

const com2 = {
  x: canvas.width - 30,
  y: (canvas.height - 100) / 2,
  width: 10,
  height: 100,
  color: '#DAA520',
  score: 0
};

let userControl = false;



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Code for circle ball

// // Draw the game objects
// function drawRect(x, y, w, h, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, w, h);
// }

// function drawCircle(x, y, r, color) {
//   ctx.fillStyle = color;
//   ctx.beginPath();
//   ctx.arc(x, y, r, 0, Math.PI * 2, false);
//   ctx.closePath();
//   ctx.fill();
// }

// function drawSquare(x, y, size, color) {
//     ctx.fillStyle = color;
//     ctx.fillRect(x - size / 2, y - size / 2, size, size);
//   }

// function drawText(text, x, y, color) {
//   ctx.fillStyle = color;
//   ctx.font = "75px 'VT323', monospace";
//   ctx.fillText(text, x, y);
// }

// // Control the user paddle
// canvas.addEventListener('mousemove', movePaddle);

// function movePaddle(evt) {
//   if (userControl) {
//     let rect = canvas.getBoundingClientRect();
//     com1.y = evt.clientY - rect.top - com1.height / 2;
//   }
// }

// // Reset the ball
// function resetBall() {
//   ball.x = canvas.width / 2;
//   ball.y = canvas.height / 2;
//   ball.velocityX = -ball.velocityX;
//   ball.speed = 7;
// }

// // Update game logic
// function update() {
//   ball.x += ball.velocityX;
//   ball.y += ball.velocityY;

//   if (!userControl) {
//     // Simple AI to control the com1 paddle
//     let computerLevel = 0.1;
//     com1.y += (ball.y - (com1.y + com1.height / 2)) * computerLevel;
//   }

//   // Simple AI to control the com2 paddle
//   com2.y += (ball.y - (com2.y + com2.height / 2)) * 0.1;

//   if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
//     ball.velocityY = -ball.velocityY;
//   }

//   let player = (ball.x < canvas.width / 2) ? com1 : com2;

//   if (collision(ball, player)) {
//     let collidePoint = ball.y - (player.y + player.height / 2);
//     collidePoint = collidePoint / (player.height / 2);

//     let angleRad = collidePoint * Math.PI / 4;

//     let direction = (ball.x < canvas.width / 2) ? 1 : -1;
//     ball.velocityX = direction * ball.speed * Math.cos(angleRad);
//     ball.velocityY = ball.speed * Math.sin(angleRad);

//     ball.speed += 0.2;
//   }

//   if (ball.x - ball.radius < 0) {
//     com2.score++;
//     resetBall();
//   } else if (ball.x + ball.radius > canvas.width) {
//     com1.score++;
//     resetBall();
//   }
// }

// // Detect collision between ball and paddle
// function collision(b, p) {
//   p.top = p.y;
//   p.bottom = p.y + p.height;
//   p.left = p.x;
//   p.right = p.x + p.width;

//   b.top = b.y - b.radius;
//   b.bottom = b.y + b.radius;
//   b.left = b.x - b.radius;
//   b.right = b.x + b.radius;

//   return p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top;
// }

// // Render the game
// function render() {
//   drawRect(0, 0, canvas.width, canvas.height, '#2e2e2e');
//   drawText(com1.score, canvas.width / 4, canvas.height / 5, '#DAA520');
//   drawText(com2.score, 3 * canvas.width / 4, canvas.height / 5, '#DAA520');
//   drawRect(com1.x, com1.y, com1.width, com1.height, com1.color);
//   drawRect(com2.x, com2.y, com2.width, com2.height, com2.color);
//   drawCircle(ball.x, ball.y, ball.radius, ball.color);
// }

// // Game loop
// function gameLoop() {
//   update();
//   render();
// }

// // Start the game
// const framePerSecond = 50;
// setInterval(gameLoop, 1000 / framePerSecond);

// // Event listener for the control button
// controlButton.addEventListener('click', function() {
//   userControl = !userControl;
//   controlButton.textContent = userControl ? 'Release Control' : 'Take Control';
// });




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Code for square ball

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 20,
    velocityX: 5,
    velocityY: 5,
    speed: 7,
    color: '#DAA520'
  };

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }
  
  function drawSquare(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x - size / 2, y - size / 2, size, size);
  }
  
  function drawText(text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = "75px 'VT323', monospace";
    ctx.fillText(text, x, y);
  }
  
  // Control the user paddle
  canvas.addEventListener('mousemove', movePaddle);
  
  function movePaddle(evt) {
    if (userControl) {
      let rect = canvas.getBoundingClientRect();
      com1.y = evt.clientY - rect.top - com1.height / 2;
    }
  }
  
  // Reset the ball
  function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.velocityX = -ball.velocityX;
    ball.speed = 7;
  }
  
  // Update game logic
  function update() {
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
  
    if (!userControl) {
      // Simple AI to control the com1 paddle
      let computerLevel = 0.1;
      com1.y += (ball.y - (com1.y + com1.height / 2)) * computerLevel;
    }
  
    // Simple AI to control the com2 paddle
    com2.y += (ball.y - (com2.y + com2.height / 2)) * 0.1;
  
    if (ball.y + ball.size / 2 > canvas.height || ball.y - ball.size / 2 < 0) {
      ball.velocityY = -ball.velocityY;
    }
  
    let player = (ball.x < canvas.width / 2) ? com1 : com2;
  
    if (collision(ball, player)) {
      let collidePoint = ball.y - (player.y + player.height / 2);
      collidePoint = collidePoint / (player.height / 2);
  
      let angleRad = collidePoint * Math.PI / 4;
  
      let direction = (ball.x < canvas.width / 2) ? 1 : -1;
      ball.velocityX = direction * ball.speed * Math.cos(angleRad);
      ball.velocityY = ball.speed * Math.sin(angleRad);
  
      ball.speed += 0.2;
    }
  
    if (ball.x - ball.size / 2 < 0) {
      com2.score++;
      resetBall();
    } else if (ball.x + ball.size / 2 > canvas.width) {
      com1.score++;
      resetBall();
    }
  }
  
  // Detect collision between ball and paddle
  function collision(b, p) {
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;
  
    b.top = b.y - b.size / 2;
    b.bottom = b.y + b.size / 2;
    b.left = b.x - b.size / 2;
    b.right = b.x + b.size / 2;
  
    return p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top;
  }
  
  // Render the game
  function render() {
    drawRect(0, 0, canvas.width, canvas.height, '#2e2e2e');
    drawText(com1.score, canvas.width / 4, canvas.height / 5, '#DAA520');
    drawText(com2.score, 3 * canvas.width / 4, canvas.height / 5, '#DAA520');
    drawRect(com1.x, com1.y, com1.width, com1.height, com1.color);
    drawRect(com2.x, com2.y, com2.width, com2.height, com2.color);
    drawSquare(ball.x, ball.y, ball.size, ball.color);
  }
  
  // Game loop
  function gameLoop() {
    update();
    render();
  }
  
  // Start the game
  const framePerSecond = 50;
  setInterval(gameLoop, 1000 / framePerSecond);
  
  // Event listener for the control button
  controlButton.addEventListener('click', function() {
    userControl = !userControl;
    controlButton.textContent = userControl ? 'Release Control' : 'Take Control';
  });
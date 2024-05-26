const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Player object
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    speed: 5,
    radius: 20
};

// Event listeners for player movement
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
            player.y -= player.speed;
            break;
        case 'ArrowDown':
            player.y += player.speed;
            break;
        case 'ArrowLeft':
            player.x -= player.speed;
            break;
        case 'ArrowRight':
            player.x += player.speed;
            break;
    }
});

// Main game loop
function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();

    // Request next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

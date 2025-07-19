// Simple JavaScript to add interactivity
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const heading = document.querySelector('h1');
    
    // Add a click event to change the heading text
    container.addEventListener('click', function() {
        heading.textContent = '你好，世界！';
        setTimeout(() => {
            heading.textContent = 'Hello World!';
        }, 2000);
    });
});
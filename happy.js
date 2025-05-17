window.addEventListener('DOMContentLoaded', () => {
    const line = document.getElementById('line');
  
    window.addEventListener('mousemove', () => {
      if (line && (line.style.width === '0px' || line.style.width === '')) {
        line.style.width = '100%';
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const sky = document.querySelector('.sky');
  
    // Create 100 stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
  
      // Random size (1px to 4px)
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
  
      
      const colors = ['#FFD700', '#FF69B4', '#87CEFA', '#ADFF2F', '#FF4500', '#FFFFFF'];
      star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
  
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 3}s`;
  
      sky.appendChild(star);
    }
  
    // Comet generator
    setInterval(() => {
      const comet = document.createElement('div');
      comet.classList.add('comet');
      comet.style.top = `${Math.random() * 50}vh`;
      comet.style.left = `-200px`;
  
      sky.appendChild(comet);
  
      setTimeout(() => {
        comet.remove();
      }, 5000);
    }, 7000);
  });
  
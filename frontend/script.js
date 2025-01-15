// preloader
setTimeout(() => 
    { 
        const preloader = document.getElementById('preloader'); 
        preloader.style.opacity = '0'; 
        setTimeout(() => { preloader.style.display = 'none'; }, 1000);
    }, 300);

// audio player
function setupPlayer(playerId) {
    const audio = document.getElementById(`audio${playerId}`);
    const playPauseBtn = document.getElementById(`playPause${playerId}`);
    const progressBar = document.getElementById(`progress${playerId}`);
    
    playPauseBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playPauseBtn.classList.remove('fa-play');
        playPauseBtn.classList.add('fa-pause');
      } else {
        audio.pause();
        playPauseBtn.classList.remove('fa-pause');
        playPauseBtn.classList.add('fa-play');
      }
    });  

    audio.addEventListener('timeupdate', () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progress}%`;
    });
}
setupPlayer(1);
setupPlayer(2);
setupPlayer(3);
setupPlayer(4);


// NUMBER ANIMATION
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000; // Speeding up the interval even further

valueDisplays.forEach((valueDisplay, index) => {
  let startValue = 0;
  // Change the values directly for quicker numbers
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue); // Make the animation faster

  // Set up intersection observer to trigger the animation when the section is in view
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue.toLocaleString(); // Format with commas
          if (startValue == endValue) {
            clearInterval(counter);

            // Add appropriate suffix based on index
            if (index === 0) {
              valueDisplay.textContent = "+" + endValue + "M"; // Example: +21M
            } else if (index === 1) {
              valueDisplay.textContent = "+" + endValue + "K"; // Example: +184K
            } else {
              valueDisplay.textContent = endValue.toLocaleString(); // Plain number
            }
          }
        }, duration);
        observer.unobserve(entry.target); // Stop observing after animation starts
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is in view

  // Start observing the target section
  observer.observe(valueDisplay);
});





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
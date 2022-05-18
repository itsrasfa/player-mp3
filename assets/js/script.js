let musics = [
  {
    title: 'Sunset Dream',
    artist: 'Cheel',
    src: './assets/music/Sunset Dream - Cheel.mp3',
    img: './assets/imgs/3.jpg'
  },
  {
    title: 'Christmas Tree',
    artist: 'Jingle Punks',
    src: './assets/music/O Christmas Tree (Instrumental) - Jingle Punks.mp3',
    img: './assets/imgs/2.jpg'
  },
  {
    title: 'Blue Dream',
    artist: 'Cheel',
    src: './assets/music/Blue Dream - Cheel.mp3',
    img: './assets/imgs/1.jpg'
  }
]

let music = document.querySelector('audio');

const btnPlay = document.querySelector('.play');
const btnPause = document.querySelector('.pause');
const heart = document.querySelector('.heart');

let musicImg = document.querySelector('img');
let = musicName = document.querySelector('h2');
let musicArtist = document.querySelector('.desc p');

let musicDuration = document.querySelector('#end')
function duration() {
  musicDuration.innerHTML = secondsMin(Math.floor(music.duration));
}

// events
btnPlay.addEventListener('click', playMusic);

btnPause.addEventListener('click', stopMusic);

music.addEventListener('timeupdate', updateBar);

heart.addEventListener('click', favMusic);

document.querySelector('.previous').addEventListener('click', () => {
  duration();
  indexMusic--;
  if (indexMusic < 0) {
    indexMusic = musics.length - 1;
  }
  updateMusic(indexMusic);
});

document.querySelector('.next').addEventListener('click', () => {
  duration();
  indexMusic++
  if (indexMusic > 2) {
    indexMusic = 0;
  }
  updateMusic(indexMusic);
});

// functions

let indexMusic = 0;
function updateMusic(index) {
  music.setAttribute('src', musics[index].src);
  musicName.textContent = musics[index].title;
  musicArtist.textContent = musics[index].artist;
  musicImg.src = musics[index].img;
  stopMusic();
}

function playMusic() {
  music.play();
  btnPause.classList.add('ativo');
  btnPlay.classList.add('remove');
}

function stopMusic() {
  music.pause();
  btnPause.classList.remove('ativo');
  btnPlay.classList.remove('remove');
}

function updateBar() {
  let bar = document.querySelector('progress');
  bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
  let numberUpdate = document.querySelector('#start');
  numberUpdate.textContent = secondsMin(Math.floor(music.currentTime));
}

function secondsMin(seconds) {
  let minutesField = Math.floor(seconds / 60);
  let secondsField = seconds % 60;
  return `0${minutesField}:${secondsField}`
}

function favMusic() {
  heart.classList.toggle('fav')
}

updateMusic(indexMusic);



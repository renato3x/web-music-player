const tracks = [
  {
    title: 'About You',
    author: 'Ascence',
    thumb: '../public/img/about_you.jpg',
    audio: '../public/audio/about_you.mp3'
  },
  {
    title: 'Ark',
    author: 'ship Wrek & Zookeepers',
    thumb: '../public/img/ark.jpg',
    audio: '../public/audio/ark.mp3'
  },
  {
    title: 'Ride',
    author: 'Clarx',
    thumb: '../public/img/ride.jpg',
    audio: '../public/audio/ride.mp3'
  }
]

const musicPlayer = new MusicPlayer(
  document.querySelector('.music-thumb'),
  document.querySelector('.music-title'),
  document.querySelector('.author'),
  document.querySelector('#progress-bar'),
  document.querySelector('#music-state'),
  document.querySelector('#previous'),
  document.querySelector('#next'),
  document.querySelector('#audio'),
  tracks
)

window.addEventListener('load', musicPlayer.start)
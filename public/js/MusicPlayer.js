class MusicPlayer {
  constructor(
    imageThumbnail = HTMLImageElement.prototype,
    musicTitle = HTMLParagraphElement.prototype,
    musicAuthor = HTMLSpanElement.prototype,
    progressBar = HTMLInputElement.prototype,
    audioStateButton = HTMLButtonElement.prototype,
    nextButton = HTMLButtonElement.prototype,
    previousButton = HTMLButtonElement.prototype,
    audioElement = HTMLAudioElement.prototype,
    tracklist = [{
      title: '',
      author: '',
      thumb: '',
      audio: ''
    }]
  ) {
    this.imageThumbnail = imageThumbnail
    this.musicTitle = musicTitle
    this.musicAuthor = musicAuthor
    this.progressBar = progressBar
    this.audioStateButton = audioStateButton
    this.nextButton = nextButton
    this.previousButton = previousButton
    this.audioElement = audioElement
    this.tracklist = tracklist
    this.tracklistIndex = 0
  }

  start() {
    this.setTrack()

    this.audioStateButton.addEventListener('click', () => {
      this.setAudioState()
    })
  }

  setTrack(index = 0) {
    const trackData = this.tracklist[index]

    this.imageThumbnail.src = trackData.thumb
    this.imageThumbnail.alt = trackData.title
    this.imageThumbnail.title = `${trackData.author} - ${trackData.title}`

    this.musicTitle.innerHTML = trackData.title
    this.musicAuthor.innerHTML = trackData.author
    this.audioElement.src = trackData.audio

    this.audioElement.load()
  }

  incrementsTrackListIndex() {
    this.tracklistIndex++

    if (this.tracklistIndex > this.tracklist.length - 1) {
      this.tracklistIndex = 0
    }
  }

  decrementsTrackListIndex() {
    this.tracklistIndex--

    if (this.tracklistIndex > 0) {
      this.tracklistIndex = this.tracklist.length - 1
    }
  }

  setAudioState() {
    const icon = this.audioStateButton.firstElementChild

    if (this.audioElement.paused) {
      this.audioElement.play()

      icon.classList = 'fas fa-pause'
    } else {
      this.audioElement.pause()

      icon.classList = 'fas fa-play'
    }
  }
}

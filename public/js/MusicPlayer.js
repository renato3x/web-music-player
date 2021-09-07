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

    this.nextButton.addEventListener('click', () => {
      this.next()
    })

    this.previousButton.addEventListener('click', () => {
      this.previous()
    })

    this.audioElement.addEventListener('timeupdate', () => {
      const { currentTime, duration } = this.audioElement

      if (currentTime == 0) {
        this.progressBar.value = 0
      } else if (currentTime == duration) {
        this.next()
      } else {
        this.progressBar.value = ((100 * currentTime / duration) / 100).toFixed(2)
      }
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

    if (this.tracklistIndex < 0) {
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

  next() {
    const icon = this.audioStateButton.firstElementChild

    this.incrementsTrackListIndex()
    this.setTrack(this.tracklistIndex)
    this.audioElement.autoplay = true

    icon.classList = 'fas fa-pause'
  }

  previous() {
    if (this.audioElement.currentTime > 3) {
      this.audioElement.currentTime = 0
    } else {
      const icon = this.audioStateButton.firstElementChild
  
      this.decrementsTrackListIndex()
      this.setTrack(this.tracklistIndex)
      this.audioElement.autoplay = true
  
      icon.classList = 'fas fa-pause'
    }
  }
}

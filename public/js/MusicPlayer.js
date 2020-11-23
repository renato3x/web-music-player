class MusicPlayer {
  constructor(
    thumb,
    title,
    author,
    progressBar,
    stateButton,
    previousButton,
    nextButton,
    audio,
    playlist,
  ) {
    this.thumb = thumb
    this.title = title
    this.author = author
    this.progressBar = progressBar
    this.stateButton = stateButton
    this.previousButton = previousButton
    this.nextButton = nextButton
    this.audio = audio
    this.playlist = playlist
    this.atualIndex = 0
  }
}

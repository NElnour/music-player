import songs from '../assets/jsons/songs.json'

/**
 * AUDIO PLAYBACK
 */

/**
 * EXPORT METHODS
 */
let audio
export const playlist = songs.playlist;

export const playAudio = (song, volume) => {
    audio = new Audio(song.url)
    audio.play()
    audio.volume = volume
}
export const pauseAudio = () => {
    audio.pause()
}
export const unpauseAudio = () => {
    audio.play()
}
export const adjustVolume = (intensity) => {
    audio.volume = intensity
}
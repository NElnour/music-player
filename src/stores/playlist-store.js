import songs from '../assets/jsons/songs.json'
import {
    writable
} from 'svelte/store';

/**
 * AUDIO PLAYBACK
 */

/**
 * EXPORT METHODS
 */
export let playlist = songs.playlist;
export const currentSong = writable(playlist);
let audio

currentSong.subscribe(songs => {
    playlist = songs
})

export const playAudio = (song, volume) => {
    audio = new Audio(song.url)
    audio.play()
    audio.volume = volume
}
export const pauseAudio = () => {
    if (audio) {
        audio.pause()
    }
}
export const unpauseAudio = () => {
    if (audio) {
        audio.play()
    }
}
export const adjustVolume = (intensity) => {
    if (audio) {
        audio.volume = intensity
    }
}
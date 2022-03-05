import songs from '@/assets/jsons/songs.json'
import {
    writable
} from 'svelte/store';

import song3 from '@/assets/music/El_Poteto_-_Huh....mp3'
import song2 from '@/assets/music/Jubel_-_Dancing_In_The_Moonlight_feat_NEIMY.mp3'
import song4 from '@/assets/music/La_Repeticion_-_Sunset_Cafe.mp3'
import song5 from '@/assets/music/Lonely_Piano_-_lockdown_blues.mp3'
import song1 from '@/assets/music/Shaun Martin - Yellow Jacket.mp3'

/**
 * AUDIO PLAYBACK
 */

/**
 * EXPORT METHODS
 */
const urls = [song1, song2, song3, song4, song5]
for (let index = 0; index < songs.playlist.length; index++) {
    songs.playlist[index].url = urls[index]
    
}
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
<script>
  import SongDetails from "./lib/SongDetails.svelte";
  import ControlBar from "./lib/ControlBar.svelte";
  import PlayStatus from "./lib/PlayStatus.svelte";
  import VolumeControl from "./lib/VolumeControl.svelte";
  import {
    playlist,
    playAudio,
    pauseAudio,
    unpauseAudio,
    adjustVolume,
  } from "./stores/playlist-store";
  import Attribution from "./lib/Attribution.svelte";
  import Playlist from "./lib/Playlist.svelte";

  let i = 0;
  let playingNow = playlist[i];
  let status;
  let playbackController;
  let volumeController;
  let volume;

  const shufflePlayQueue = (e) => {
    let delta = e.detail.advance;
    if (!volume) {
      volume = volumeController.getVolume();
    }

    if (i === 0 && delta < 0) {
      i = playlist.length + delta;
    } else if (i >= 0 && delta > 0) {
      i = (i + delta) % playlist.length;
    } else if (i > 0 && delta < 0) {
      i += delta;
    }
    playbackController.resetPlayback(true);
    pauseAudio();
    status.stop();
    status.reset();
    playingNow = playlist[i];
    status.start(playingNow);
    playAudio(playingNow, volume);
  };

  const playPause = (e) => {
    volume = volumeController.getVolume();
    if (status.playedSoFar() == "00:00") {
      e.detail.state == "play" ? status.start() : status.pause();
      e.detail.state == "play" ? playAudio(playingNow, volume) : pauseAudio();
    } else {
      e.detail.state == "play" ? status.unpause() : status.pause();
      e.detail.state == "play" ? unpauseAudio() : pauseAudio();
    }
  };

  const setVolume = (e) => {
    let newVal = e.detail.volume;
    adjustVolume(newVal);
  };
</script>

<Attribution />
<div id="background" />

<div id="main">
  <main>
    <SongDetails title={playingNow.title} artist={playingNow.artist} />
    <VolumeControl on:volume={setVolume} bind:this={volumeController} />
    <span>
      <PlayStatus
        total={playingNow.duration}
        bind:this={status}
        on:playback={shufflePlayQueue}
      />
      <!-- <RepeatControl on:repeat={updatePlayback} /> -->
      <ControlBar
        on:playback={shufflePlayQueue}
        on:state={playPause}
        bind:this={playbackController}
      />
    </span>
  </main>

  <Playlist {playingNow} />
</div>

<style>
  :root {
    font-family: "Montserrat", sans-serif;
    --button-style: 10px 10px 15px 4px rgba(20, 12, 27, 0.9),
      -3px -3px 15px 1px #648c8d, inset 1px 1px 3px rgba(255, 255, 255, 0.4);
    --label-style: 0;
    --label-color: #403641;
    --button-color: #232628;
    --accent-dim: #5da2a2;
    --accent: #4beafe;
    --accent-soft: #4be9feaf;
    --grey: #b5b5b5;
  }

  #main {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 10%;
    padding-left: 10%;
  }

  #background {
    position: absolute;
    top: 50%;
    left: 32%;
    transform: translate(-50%, -50%);
    z-index: 0;
    width: 650px;
    height: 650px;
    background: rgb(28, 29, 33);
    border-radius: 50%;
    box-shadow: inset -10px -10px 10px rgb(30, 23, 41),
      inset 10px 10px 20px rgb(37, 66, 66),
      inset 3px 3px 5px rgba(255, 255, 255, 0.6);
  }

  main {
    position: relative;
    z-index: 1;
    /* background-color: #525358; */
    background: hsla(207, 5%, 43%, 1);

    background: linear-gradient(
      315deg,
      hsla(207, 5%, 43%, 1) 0%,
      hsla(282, 9%, 22%, 1) 76%,
      hsla(300, 17%, 14%, 1) 100%
    );

    background: -moz-linear-gradient(
      315deg,
      hsla(207, 5%, 43%, 1) 0%,
      hsla(282, 9%, 22%, 1) 76%,
      hsla(300, 17%, 14%, 1) 100%
    );

    background: -webkit-linear-gradient(
      315deg,
      hsla(207, 5%, 43%, 1) 0%,
      hsla(282, 9%, 22%, 1) 76%,
      hsla(300, 17%, 14%, 1) 100%
    );

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 435px;
    height: 885px;
    margin: 1% 0;
    gap: 40px;

    border-radius: 30px;

    box-shadow: 30px 30px 50px rgba(0, 0, 0, 0.8),
      inset 10px 10px 30px rgba(255, 255, 255, 0.3),
      inset -1px -1px 50px #291d29;
  }

  span {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap: 100px;
    width: 100%;
    margin-top: 100px;
  }

  @media (min-width: 480px) {
  }
</style>

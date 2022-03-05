<script>
    import { playlist, currentSong } from "../stores/playlist-store";
    import Song from "./Song.svelte";
    import scroller from "../assets/scroll-down.gif";

    let songs = playlist;
    export let playingNow;
    currentSong.subscribe((playlist) => {
        songs = playlist
    });
</script>

<div id="container">
    <div id="header">
        <img src={scroller} alt="" aria-hidden="true" />
        <span id="holes">
            <div class="hole" />
            <div class="hole" />
        </span>
        <dl>Playlist</dl>
    </div>
    <div id="full">
        {#each songs as song, i}
            <span class={playingNow !== song ? "inactive" : ""}>
                <!-- {i + 1} -->
                <Song {song} show={playingNow !== song ? "inactive" : ""} />
            </span>
        {/each}
    </div>
</div>

<style>
    #container {
        display: flex;
        flex-direction: column;
        z-index: 1;
        transition: all 0.6s;
    }

    #header {
        position: relative;
        margin: 0;
        display: flex;
        flex-direction: row;

        align-items: center;
        color: var(--accent-soft);
        height: 100px;
        gap: 20px;
    }

    #holes {
        width: 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .hole {
        width: 10px;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background-color: rgb(8, 8, 9);
        box-shadow: 10px 10px 15px 4px rgba(20, 12, 27, 0.9),
            -1px -1px 4px #5dc9ca, inset 1px 1px 3px rgba(255, 255, 255, 0.6);
    }
    img {
        width: 50px;
    }

    dl {
        font-weight: 700;
        letter-spacing: 1px;
        font-size: 1.1em;
    }
    #full {
        position: relative;
        background: linear-gradient(
            to right,
            rgba(64, 69, 74, 0.1) 0%,
            rgba(25, 27, 29, 0.1) 100%
        );

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 550px;
        border-radius: 15px;
        padding: 1em;
        padding-top: 10%;
        gap: 5px;
        box-shadow: 30px 30px 50px rgba(0, 0, 0, 0.8),
            inset -10px -10px 10px rgb(30, 23, 41),
            inset 10px 10px 20px rgb(37, 66, 66),
            inset 3px 3px 5px rgba(255, 255, 255, 0.6);
        overflow-y: scroll;
        height: 650px;
    }

    #full span {
        font-family: "Share Tech Mono", monospace;
        padding: 0.6em;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 30px;

        color: var(--accent-soft);
        font-size: 1.2em;
        transition: all 0.6s;
    }

    .inactive {
        opacity: 0.5;
        transition: all 0.6s;
        transform: scale(0.8);
    }

    @media (max-width: 1791px) {
        #container {
            transform: scale(0);
        }
    }
</style>

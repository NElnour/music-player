<script>
    import PlayIcon from "../assets/icons/PlayIcon.svelte";
    import PauseIcon from "../assets/icons/PauseIcon.svelte";
    import ForwardIcon from "../assets/icons/ForwardIcon.svelte";
    import RewindIcon from "../assets/icons/RewindIcon.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatcher = createEventDispatcher();
    let play = false;
    export function resetPlayback(shouldPlay) {
        play = shouldPlay;
    }
    const previous = () => {
        dispatcher("playback", {
            advance: -1,
        });
    };
    const playPause = () => {
        play = !play;
        dispatcher("state", {
            state: play ? "play" : "pause",
        });
    };
    const next = () => {
        dispatcher("playback", {
            advance: 1,
        });
    };
</script>

<div>
    <button on:click={previous}>
        <span class="icon">
            <RewindIcon />
        </span>
    </button>
    <button on:click={playPause} id="playPause">
        <span class="icon main">
            {#if !play}
                <PlayIcon />
            {/if}
            {#if play}
                <PauseIcon />
            {/if}
        </span>
    </button>
    <button on:click={next}>
        <span class="icon">
            <ForwardIcon />
        </span>
    </button>
</div>

<style>
    div {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        min-width: 90%;
        max-width: 100%;
        padding-left: 3em;
        padding-right: 3em;

        margin-top: 0.8em;

        background: transparent;
    }

    button {
        cursor: pointer;
        border-radius: 50%;
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        background: var(--button-color);
        width: 48px;
        height: 48px;

        box-shadow: var(--button-style);
    }

    .icon {
        width: 30px;
        aspect-ratio: 1 / 1;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
    }

    .main {
        width: 50px;
        height: 30px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
    }

    #playPause {
        width: 64px;
        height: 64px;
    }
</style>

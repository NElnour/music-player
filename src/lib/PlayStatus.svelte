<script>
    import { createEventDispatcher, onMount } from "svelte";
    export let total;
    let timePassed;
    let totalTime;
    let playbackInterval;
    let delta = 1000;
    let played = "00:00";
    let progressBar;

    const dispatcher = createEventDispatcher();

    export function playedSoFar() {
        return played;
    }

    onMount(() => {
        progressBar = document.getElementById("progress-status");
    });

    function advanceProgressBar(played, total) {
        //update status bar
        progressBar.style.width = `${(played * 100) / total}%`;
    }

    const play = () => {
        timePassed += delta;
        if (timePassed <= totalTime) {
            advanceProgressBar(timePassed, totalTime);
            played = convertToString(timePassed);
        } else if (timePassed > totalTime) {
            complete();
            reset();
        } else {
            reset();
        }
    };
    const complete = () => {
        stop();
        dispatcher("playback", {
            advance: 1,
        });
    };
    export const reset = () => {
        advanceProgressBar(0, totalTime);
        delta = 1000;
        timePassed = 0;
        played = "00:00";
    };
    const convertToNum = (time) => {
        let [minutes, seconds] = time.split(":");
        minutes *= 60 * 1000;
        seconds *= 1000;
        return minutes + seconds;
    };

    const convertToString = (time) => {
        let seconds = Math.floor((time % 60000) / 1000);
        let minutes = Math.floor(time / 60000);
        let secondPrefix = seconds < 10 ? "0" : "";
        let minutePrefix = minutes < 10 ? "0" : "";
        return `${minutePrefix}${minutes}:${secondPrefix}${seconds}`;
    };

    export function pause() {
        delta = 0;
    }

    export function unpause() {
        delta = 1000;
    }

    export function start(song) {
        delta = 1000;
        timePassed = 0;
        played = "00:00";
        total = song.duration
        totalTime = convertToNum(total);
        playbackInterval = setInterval(play, delta);
    }

    export function stop() {
        clearInterval(playbackInterval);
    }
    onMount(() => {});
</script>

<div id="status">
    <dl id="played">
        {played}
    </dl>

    <div id="progress-bar">
        <div id="progress-status" />
    </div>
    <dl id="remaining">
        {total}
    </dl>
</div>

<style>
    #status {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin: auto;
        width: 100%;
    }

    dl {
        color: var(--grey);
        line-height: 1em;
        font-size: 0.7em;
        font-weight: 600;
        letter-spacing: 1px;
        flex: 0 0 1;
        width: 40px;
    }

    #progress-bar {
        width: 150px;
        height: 5px;
        background: rgb(41, 43, 46);
        border-radius: 3px;
        box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.7);
        flex: 0 0 1;
    }

    #progress-status {
        width: 0;
        height: 4px;
        background: linear-gradient(to right, #22a0b2 0%, #4beafe 100%);
        border-radius: 3px;
        box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.7);
    }
</style>

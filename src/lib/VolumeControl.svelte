<script>
    import AudioBars from "../assets/icons/AudioBars.svelte";
    import AddIcon from "../assets/icons/AddIcon.svelte";
    import SubtractIcon from "../assets/icons/SubtractIcon.svelte";
    import VolumeIcon from "../assets/icons/VolumeIcon.svelte";
    import { createEventDispatcher } from "svelte";
    import MuteIcon from "../assets/icons/MuteIcon.svelte";

    const dispatcher = createEventDispatcher();
    let volume = 50;
    let prevVolume;
    let mute = false;

    export function getVolume() {
        return volume / 100;
    }

    const lowerVolume = () => {
        if (volume > 0) {
            volume -= 10;
            dispatcher("volume", {
                volume: volume / 100,
            });
        }
    };
    const increaseVolume = () => {
        if (volume < 100) {
            volume += 10;
            dispatcher("volume", {
                volume: volume / 100,
            });
        }
    };
    const silence = () => {
        prevVolume = volume
        volume = 0;
        mute = true;
        dispatcher("volume", {
            volume: 0,
        });
    };
    const unsilence = () => {
        volume = prevVolume;
        mute = false;
        dispatcher("volume", {
            volume: volume / 100,
        });
    };
</script>

<div id="container">
    <div id="outer-rim">
        <div id="volume-control">
            <button class="control-icon" on:click={lowerVolume}>
                <SubtractIcon />
            </button>
            <span id="audio-bars"><AudioBars /></span>
            <button class="control-icon" on:click={increaseVolume}>
                <AddIcon />
            </button>
        </div>
    </div>
    <span id="volume-summary">
        <dl>{volume}%</dl>
        {#if mute}
            <span id="icon" on:click={unsilence}><VolumeIcon /></span>
        {/if}
        {#if !mute}
            <span id="icon" on:click={silence}><MuteIcon /></span>
        {/if}
    </span>
</div>

<style>
    button {
        cursor: pointer;
    }
    #container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;

        align-items: center;
        gap: 20px;
        padding-left: 20%;
    }

    #outer-rim {
        height: 185px;
        width: 185px;
        background: rgb(95, 94, 97);
        border-radius: 50%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        box-shadow: 15px 15px 15px 3px rgba(20, 12, 27, 0.8),
            -5px -5px 20px 2px #648c8d,
            inset 3px 3px 5px rgba(255, 255, 255, 0.3),
            inset -3px -3px 5px rgba(20, 12, 27, 0.8);
    }
    #volume-control {
        width: 175px;
        height: 175px;
        background: var(--label-color);
        border-radius: 50%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        box-shadow: inset 3px 3px 2px rgba(0, 0, 0, 0.8),
            inset -3px -3px 2px rgba(255, 255, 255, 0.3);
    }
    #volume-summary {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    dl {
        border-radius: 50%;
        color: rgb(146, 101, 254);
        background: var(--label-color);
        aspect-ratio: 1 / 1;
        font-weight: 600;
        width: 48px;
        font-size: 0.6em;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.8),
            inset -1px -1px 1px rgba(255, 255, 255, 0.6);
    }

    #icon {
        width: 18px;
        aspect-ratio: 1 / 1;
        cursor: pointer;
    }

    .control-icon {
        background: transparent;
        border: none;
        width: 24px;
        aspect-ratio: 1/ 1;
    }

    #audio-bars {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: scaleX(1.5);
    }
</style>

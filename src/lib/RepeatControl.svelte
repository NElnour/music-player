<script>
    import SubtractIcon from "../assets/icons/SubtractIcon.svelte";
    import AddIcon from "../assets/icons/AddIcon.svelte";
    import ResetIcon from "../assets/icons/ResetIcon.svelte";
    import { createEventDispatcher } from "svelte";

    let repeats = 0;
    const dispatcher = createEventDispatcher();
    const increment = () => {
        repeats++;
        dispatcher("repeat", {
            repeat: 1,
        });
    };
    const decrement = () => {
        if (repeats > 0) {
            repeats--;
            dispatcher("repeat", {
                repeat: -1,
            });
        }
    };
    const reset = () => {
        repeats = 0;
        dispatcher("repeat", {
            repeat: repeats,
        });
    };
</script>

<div class="replay-container">
    <span id="main">
        <button on:click={decrement}>
            <SubtractIcon />
        </button>

        <span id="label">{repeats}</span>

        <button on:click={increment}>
            <AddIcon />
        </button>
    </span>

    <span
        ><button on:click={reset}>
            <ResetIcon />
        </button>
    </span>
    <dl>Repeat</dl>
</div>

<style>
    .replay-container {
        position: relative;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    button {
        cursor: pointer;
        background: var(--button-color);
        border-radius: 50%;
        width: 35px;
        aspect-ratio: 1 / 1;
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 8px;

        box-shadow: 7px 7px 10px 1px rgba(20, 12, 27, 0.7),
            -3px -3px 7px 1px #648c8d,
            inset 1px 1px 3px rgba(255, 255, 255, 0.4);
    }

    #main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    #label {
        width: 40px;
        aspect-ratio: 1 / 1;
        background: var(--label-color);
        border-radius: 50%;
        color: var(--accent);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 1px;
        box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 1),
            inset -1px -1px 1px rgba(255, 255, 255, 0.6);
        font-size: 0.8em;
        font-weight: 700;
    }

    dl {
        /* color: #858585; */
        color: var(--grey);
        line-height: 1em;
        font-size: 0.6em;
        font-weight: 600;
        letter-spacing: 1px;
    }
</style>

<script>
    export let song;
    export let show;
    const hasAlbum = () => {
        return song.album != "";
    };
</script>

<span id="song-card" class={show}>
    <dl>
        <dt id="header">
            <span id="title">{song.title}</span><span id="duration"
                >{song.duration}</span
            >
        </dt>
        <dt id="artist">{song.artist}</dt>
        {#if hasAlbum()}
            <dt id="album">from {song.album}</dt>
        {/if}
    </dl>
</span>

<style>
    #song-card {
        position: relative;
        font-family: "Josefin Sans", sans-serif;
        color: var(--accent);
        width: 100%;
        border-radius: 10px;
        padding-left: 1em;
        padding-right: 1em;
        background: transparent;
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        border-radius: 10px;
        border: 1px solid #5dc8ca7b;
        transition: all 0.6s;
    }
    dl {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    dt {
        line-height: 1em;
    }
    #header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-right: 0.5em;
    }

    #header span {
        font-size: 1.1em;
        font-weight: 400;
    }

    #artist {
        font-size: 0.9em;
        font-weight: 300;
    }

    #header #duration {
        font-weight: 300;
        font-size: 0.94em;
        color: var(--accent);
    }

    #header #title {
        font-weight: 600;
        color: var(--accent);
    }

    #album {
        font-size: 0.9em;
        font-weight: 300;
        color: var(--accent-soft);
    }

    .inactive {
        opacity: 0.5;
        transition: all 0.6s;
    }
</style>

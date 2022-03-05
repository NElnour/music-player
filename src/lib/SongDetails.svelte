<script>
    export let title;
    export let artist;
</script>

<span>
    <h5>Playlist "Reflection"</h5>
    <div>
        <h1>{title}</h1>
        <h4>{artist}</h4>
    </div>
</span>

<style>
    span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 20px;
        padding-bottom: 10px;
    }
    h1,
    h4,
    h5 {
        line-height: 1px;
        color: rgba(255, 255, 255, 0.851);
        letter-spacing: 1px;
        font-size: 1.2em;
        font-weight: 700;
    }

    h4 {
        font-size: 0.8em;
    }
    h5 {
        font-size: 0.7em;
        color: var(--grey);
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>

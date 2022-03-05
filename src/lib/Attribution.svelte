<script>
    import AttributionIcon from "@/assets/icons/AttributionIcon.svelte";
    import DribbbleIcon from "@/assets/icons/DribbbleIcon.svelte";
    import mockup from "@/assets/dribbble_mockup.png";
</script>

<div id="main">
    <DribbbleIcon />
    <div id="dropdown-container">
        <div id="dropdown">
            <img
                src={mockup}
                alt="Smart home & music app design mockup by Elena Zelova"
            />
            <dl>
                <p>
                    Smart home & music app design mockup by <span id="artist"
                        >Elena Zelova</span
                    >
                </p>
                <a href="https://bit.ly/3hDaMKS" target="__blank"
                    ><AttributionIcon /></a
                >
            </dl>
        </div>
    </div>
</div>

<style>
    #main {
        position: fixed;
        top: 2%;
        left: 2%;
        width: 32px;
        height: 32px;
        transition: all 0.6s;
        z-index: 3;
    }

    #dropdown-container {
        position: absolute;
        display: none;
        min-width: 300px;
        min-height: 300px;
        aspect-ratio: 1 / 1;

        top: 30%;
        left: 30%;
        background-color: rgba(41, 68, 69, 0.498);
        border-radius: 10px;
        margin: auto;
        transition: all 0.6s;
    }

    p {
        color: #fff;
        font-weight: 400;
        font-size: 0.9em;

        text-align: center;
    }

    a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 26px;
        height: 26px;
        opacity: 0.5;
        transition: all 0.6s;
    }
    a:hover{
        opacity: 1;
    }

    img {
        width: 80%;
        border-radius: 10px;
    }

    #main:hover #dropdown-container,
    #dropdown:hover #dropdown-container,
    #dropdown-container:hover {
        display: flex;
    }
    #dropdown {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        transition: all 0.6s;
    }

    dl {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        padding: 3%;
    }

    #artist {
        font-weight: 600;
        color: var(--accent);
    }
</style>

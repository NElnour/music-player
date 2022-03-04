<script>
    import AttributionIcon from "../assets/icons/AttributionIcon.svelte";
    import DribbbleIcon from "../assets/icons/DribbbleIcon.svelte";
    import mockup from "../assets/dribbble_mockup.png";
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
                <p>Smart home & music app design mockup by Elena Zelova</p>
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
    }

    #dropdown-container {
        position: absolute;
        display: none;
        min-width: 300px;
        min-height: 300px;
        aspect-ratio: 1 / 1;

        top: 80%;
        left: 80%;
        background-color: rgba(41, 68, 69, 0.498);
        border-radius: 5px;
        margin: auto;
    }

    #main:hover {
        cursor: pointer;
    }

    p {
        color: #fff;
        font-weight: 400;

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
    }

    img {
        width: 80%;
        border-radius: 5px;
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
    }

    dl {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        padding: 3%;
    }
</style>

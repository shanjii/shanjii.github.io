window.onload = function () {
    setTimeout(function () {
        var card = document.getElementsByClassName('card-container');
        var i = 0
        var animateCards = setInterval(() => {
            card[i].style.opacity = 100
            card[i].style.top = 0
            i++;
            if (i === card.length) {
                clearInterval(animateCards);
            }
        }, 500);
    }, 3000);
}

Vue.component('cards', {
    data: function () {
        return {

        }
    },
    created: function () {
        this.animate()
    },
    methods: {
        animate: function () {

        }
    },
    template:
        `
<div id="card-area">
    <section class="card-container">
        <section class="window-label">
            <span class="window-text">_WINDOW</span>
        </section>
    </section>
    <section class="card-container">
        <section class="window-label">
            <span class="window-text">_WINDOW</span>
        </section>
    </section>
    <section class="card-container">
        <section class="window-label">
            <span class="window-text">_WINDOW</span>
        </section>
    </section>
    <section class="card-container">
        <section class="window-label">
            <span class="window-text">_WINDOW</span>
        </section>
    </section>
</div>
`
})
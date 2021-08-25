var vm = new Vue({
    el: "#app",
    data: {
        height: null
    },
    created: function () {
        window.addEventListener('resize', this.resize)
        window.addEventListener('load', this.resize)
    },
    methods: {
        resize: function () {
            this.height = window.outerHeight
            document.getElementById('body-background').style.height = this.height + 'px'
            console.log(this.height)
        }
    }
})

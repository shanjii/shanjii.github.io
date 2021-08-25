Vue.component('color-selector', {
    data: function () {
        return {

        }
    },
    methods: {
        changeColor(value) {
            switch (value) {
                case 'color1':
                    document.documentElement.style.setProperty('--background', "#e7e7e7");
                    break;
                case 'color2':
                    document.documentElement.style.setProperty('--background', "d3daaf");
                    break;
                case 'color3':
                    document.documentElement.style.setProperty('--background', "#d3daaf");
                    break;
                case 'color4':
                    document.documentElement.style.setProperty('--background', "green");
                    break;
                default:
                    break;
            }
        }
    },
    template:
        `
<section class="color-container">
<span @click="changeColor('color1')" class="color-option color1"></span>
<span @click="changeColor('color3')" class="color-option color2"></span>
    <span @click="changeColor('color2')" class="color-option color3"></span>
    <span @click="changeColor('color4')" class="color-option color4"></span>
</section>
`
})
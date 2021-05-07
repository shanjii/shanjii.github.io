const text1 = 'Victor'
const text2 = 'Teste'
const timing = 100

const array1 = text1.split('')
const array2 = text2.split('')
Vue.component('typing-effect', {
    data: function () {
        return {
            line1: '',
            line2: ''
        }
    },
    created: function () {
        var i = 0;
        var completeLine1 = setInterval(() => {
            this.line1 = this.line1 + array1[i];
            i++;
            if (i === array1.length) {
                clearInterval(completeLine1);
                line2();
            }
        }, timing);
        line2 = () => {
            i = 0;
            var completeLine2 = setInterval(() => {
                this.line2 = this.line2 + array2[i];
                i++;
                if (i === array2.length) {
                    clearInterval(completeLine2);
                    endEffect();
                }
            }, timing);
        }
        endEffect = () => {
            var alternate = true
            setInterval(() => {
                if (alternate) {
                    this.line2 = text2 + ' |'
                    alternate = false
                } else {
                    this.line2 = text2
                    alternate = true
                }
            }, 600);
        }
    },
    template:
        `
<div>
    <section>
        <h1>{{this.line1}}</h1>
        <h1>{{this.line2}}</h1>
    </section>
</div>
`
})
const text1 = 'VICTOR_ARO'
const text2 = 'fullstack developer'
const text3 = 'ABOUT ME'
const timing = 40


Vue.component('typing-effect', {
    data: function () {
        return {
            line1: '',
            line2: '',
            line3: ''
        }
    },
    created: function () {
        var i = 0;
        var completeLine1 = setInterval(() => {
            this.line1 = this.line1 + text1[i];
            i++;
            if (i === text1.length) {
                clearInterval(completeLine1);
                line2();
            }
        }, timing);
        line2 = () => {
            i = 0;
            var completeLine2 = setInterval(() => {
                this.line2 = this.line2 + text2[i];
                i++;
                if (i === text2.length) {
                    clearInterval(completeLine2);
                    line3();
                    endEffect();
                }
            }, timing);
        }
        line3 = () => {
            i = 0;
            var completeLine2 = setInterval(() => {
                this.line3 = this.line3 + text3[i];
                i++;
                if (i === text3.length) {
                    clearInterval(completeLine2);
                    setTimeout(() => {
                        document.getElementsByClassName("aboutme-container")[0].style.opacity = "100";
                    }, 200);
                    setTimeout(() => {
                        document.getElementsByClassName("aboutme-container")[1].style.opacity = "100";
                    }, 500);
                }
            }, timing);
        }
        endEffect = () => {

            var alternate = true
            setInterval(() => {
                if (alternate) {
                    this.line2 = text2 + '_'
                    alternate = false
                } else {
                    this.line2 = text2
                    alternate = true
                }
            }, 400);
        }
    },
    template:
        `
    <section>
        <h1>{{this.line1}}</h1>
        <h3>{{this.line2}}</h3>
        <h3>{{this.line3}}</h3>
    </section>
`
})
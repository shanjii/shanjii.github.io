Vue.component('lights', {
  data: function () {
    return {
      mode: null
    }
  },
  created: function () {
    if (localStorage.getItem('theme') == 'dark') {
      this.mode = true
      this.themeDark()
    } else {
      this.mode = false
      this.themeLight
    }
  },
  methods: {
    changeTheme: function () {
      if (this.mode != true) {
        this.themeDark()
        this.mode = true
        localStorage.setItem('theme', 'dark')
      } else {
        this.themeLight()
        this.mode = false
        localStorage.setItem('theme', 'light')
      }
    },
    themeDark: function () {
      document.documentElement.style.setProperty('--primary', '#303030');
      document.documentElement.style.setProperty('--secondary', '#f0f0f0');
      document.documentElement.style.setProperty('--background', '#303030');
      document.documentElement.style.setProperty('--navbar', '#272727');
      document.getElementById("line-pattern").style.filter = "invert(0)"
    },
    themeLight: function () {
      document.documentElement.style.setProperty('--primary', '#f0f0f0');
      document.documentElement.style.setProperty('--secondary', '#303030');
      document.documentElement.style.setProperty('--background', '#f0f0f0');
      document.documentElement.style.setProperty('--navbar', '#f5f5f5');
      document.getElementById("line-pattern").style.filter = "invert(100)"
    }
  },
  template:
    `
<label class="switch">
  <input @click="changeTheme" v-model="mode" type="checkbox">
  <span class="slider round"></span>
</label>
`
})
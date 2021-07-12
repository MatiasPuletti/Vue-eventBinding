const app = Vue.createApp({
  data() {
    return {
      userInput: ''
    };
  },
  methods: {
    clickButton(event) {
      alert('You just clicked the button!');
    },
    keydownInput(event) {
      this.userInput = event.target.value;
    }
  }
});

app.mount('#assignment');

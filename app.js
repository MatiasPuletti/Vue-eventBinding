const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      confirmInput: ''
    };
  },
  methods: {
    clickButton(event) {
      alert('You just clicked the button!');
    },
    keydownInput(event) {
      this.userInput = event.target.value;
    },
    enterInput(event) {
      this.confirmInput = this.userInput;
    }
  }
});

app.mount('#assignment');

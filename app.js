const app = Vue.createApp({
  data() {
    return {
    
    };
  },
  methods: {
      clickButton(event) {
          alert('You just clicked the button!')
      }
  }
});

app.mount('#assignment');

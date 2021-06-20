const app = Vue.createApp({
  data() {
    return {
      banner: {
        title: 'Hello Developer!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      contents: [
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          img: 'assets/img/400x300.png'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          img: 'assets/img/400x300.png'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
          img: 'assets/img/400x300.png'
        }
      ]
    }
  }
})

app.mount('#app')
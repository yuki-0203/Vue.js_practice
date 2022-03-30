const app = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js',
    count:99,
    user: {
      lastName: 'Nakamura',
      firstName: 'Yuta',
      prefecture : 'Tokyou',
    },
    colors: ['Red','Blue']
  })
})
app.mount('#app')


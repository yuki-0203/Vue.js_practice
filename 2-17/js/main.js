 const app = Vue.createApp({
  data: () => ({
    user: {
      firstName:'Tanaka',
      lastName: 'yuji',
      age: 23
    }
  })
 })
 app.mount('#app')
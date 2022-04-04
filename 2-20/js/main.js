const app = Vue.createApp({
  data: () => ({
  }),
 })
 app.component('hello-commponent',{
   template: '<p>Hello!</p>'
 })
 app.mount('#app')
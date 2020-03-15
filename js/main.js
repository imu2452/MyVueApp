Vue.component('user-login', {
  template: '#login-template',
  data: function () {
    return {
      userid: '',
      passward: ''
    }
  },
  methods: {
    login: function () {
      auth.login(this.userid, this.passward);
    }
  }
})
var auth = {
  login: function (id, pass) {
    window.alert("userid: " + id + "\n" + "passward: " + pass);
  }
}

new Vue({
  el: "#login-example"
});


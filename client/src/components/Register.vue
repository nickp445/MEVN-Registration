<template>
  <div class="hello">
    <div class="container">
    <form>
      <div class="well">
        <h4>Name</h4>
        <div class="form-group">
          <label class="pull-left">First Name</label>
            <input type="text" class="form-control" required v-model="User.firstname">
        </div>
        <div class="form-group">
          <label class="pull-left">Last Name</label>
            <input type="text" class="form-control" required v-model="User.lastname">
        </div>
        <div class="form-group">
          <label class="pull-left">Email</label>
            <input type="text" class="form-control" required pattern='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/' v-model="User.email">
        </div>
        <router-link to="/users">
          <button class="btn btn-lg btn-block btn-primary" @click="addToAPI">Register</button>
        </router-link>
        <router-link to="/users">
          <button class="btn btn-lg btn-block btn-primary">View Users</button>
        </router-link>
      </div>
    </form>
  </div>
</div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'Register',
  data () {
    return {
      User: {firstname: '', lastname: '', email: ''}
    }
  },
  methods: {
    addToAPI(){
      let newUser = {
        firstname: this.User.firstname,
        lastname: this.User.lastname,
        email: this.User.email
      }
      console.log(newUser);
      axios.post('http://localhost:3100/users', newUser)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => console.log(err))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.well{
  background-color: rgba(100,100,100,.25);
}
.form-group{
  padding: 5px;
}
.btn.btn-lg.btn-block.btn-primary{
  margin-bottom: 10px;
}
input:invalid {
  border: 2px solid red;
}

input:valid {
  
}
</style>

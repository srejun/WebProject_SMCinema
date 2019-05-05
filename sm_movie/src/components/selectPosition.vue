<template>
  <div class="selectPosition">
    <div class="ui center aligned basic segment">
      <div class="ui middle aligned center aligned grid">
        <img class="ui image" src="../assets/screen.png">
      </div>
      <div class="ui horizontal divider"></div>
      <div class="ui middle aligned center aligned grid">
        <!-- <thead>
          <tr>
            <div v-for="chaircol in col" v-bind:key="chaircol.id">
                <td><th>{{chaircol}}</th></td>
            </div>
          </tr>
        </thead>-->
        <table class="table">
          <thead >
              <th></th>
              <td v-for="headcol in col" v-bind:key="headcol">
                  <th class="ui equal width center aligned padded grid">{{headcol}}</th>
              </td>    
          </thead>
          <tbody>
            <tr v-for="chairrow in row" v-bind:key="chairrow">
              <th>{{chairrow}}</th>

              <td v-for="chaircol in col" v-bind:key="chaircol">
                <!-- <th>{{chaircol}}</th> -->
                <!-- <button class="ui button"> -->

                <router-link to="/Total">
                  <img class="ui image" src="../assets/chair_red.png" width="50px" height="50px">
                  <span></span>
                  <!-- <i class="bath icon"></i> -->

                  <!-- </button> -->
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
        <router-link to="/Total">
                  <img class="ui image" src="data:image/png;base64,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" width="50px" height="50px">
                  <span></span>
                  <!-- <i class="bath icon"></i> -->

                  <!-- </button> -->
                </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "adduser",
  data() {
    return {
      row: "ABCDEF",
      col: 15,
      index: "__",
      User: {
        firstName: null,
        lastName: null,
        mobileNo: null,
        email: null,
        facebook: null,
        imageUrl: null
      }
    };
  },
  methods: {
    addToAPI() {
      //   let newUser = {
      //     firstName: this.User.firstName,
      //     lastName: this.User.lastName,
      //     email: this.User.email,
      //     mobileNo: this.User.mobileNo,
      //     facebook: this.User.facebook,
      //     imageUrl: this.User.imageUrl
      //   };
      //   console.log(newUser);
      //   if((newUser.firstName==null)&&(newUser.lastName==null)&&(newUser.email==null)&&(newUser.mobileNo==null)&&(newUser.facebook==null)&&(newUser.imageUrl==null)){
      //     alert("Please add your text")
      //     //console.log("Please add your text")
      //   }
      //   else{
      //     axios
      //     .post("http://localhost:3000/users", newUser)
      //     .then(response => {
      //       //console.log(response);
      //     })
      //     .catch(error => {
      //       //console.log(error);
      //     });
      //   }
    }
  }
};
</script>
    
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

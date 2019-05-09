<template>
  <div class="aboutus">
    <div class="ui center container">
      <div class="ui inverted segment">
        <h1 class="ui yellow dividing header" align="left"><i class="address book outline icon"></i>About Us</h1>
        <div class="ui segment">       
          <img class="ui left floated image" src="../assets/logo.png" height="130px" width="130px">
              <p>First Name : Wachirawit</p>
              <p>Last Name : Smarn</p>
              <p>Student ID : 5913214</p>
              <p>Mobile No. : 0991892888</p>
              <p>E-mail : bigboy2541@gmail.com</p>
          <div class="ui divider"></div>
          <img class="ui left floated image" src="../assets/logo.png" height="130px" width="130px">
              <p>First Name : Atitaya</p>
              <p>Last Name : Thongsuk</p>
              <p>Student ID : 5913220</p>
              <p>Mobile No. : 0815861095</p>
              <p>E-mail : gifeminum@gmail.com</p>
          <div class="ui divider"></div>
          <img class="ui left floated image" src="../assets/logo.png" height="130px" width="130px">
              <p>First Name : Uracha</p>
              <p>Last Name : Wesaratchakon</p>
              <p>Student ID : 5913221</p>
              <p>Mobile No. : 0853978288</p>
              <p>E-mail : uoracha41@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutus",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>


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
  color: orange;
}
.column {
  max-width: 450px;
}
label {
  text-align: left;
}
.ui button {
  float: left;
}
.contact {
  color: orange;
}
</style>
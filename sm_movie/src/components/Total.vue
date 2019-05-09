<template>
  <div class="Total">
    <div class="ui placeholder segment">
      <div class="ui three column stackable center aligned grid">
        <div class="middle aligned row">
          <div class="column">
            <div class="field">
              <img class="top floated ui image" :src="form.imageUrl" width="280px" height="350px">
            </div>
          </div>
          <div class="column">
            <div class="content">
              <div class="header">{{form.movieName}} {{form.movieNameThai}}</div>
              <div class="description">date: {{startTime}}</div>
              <div class="description">time: {{startTime}}</div>
              <div class="description">Length: {{form.length}} Minutes</div>
              <div class="description">Theater {{form.theatre}}</div>
              <div class="description">Seat: {{form.seat}}</div>
              <div class="description">Price: {{form.price}}</div>
            </div>
          </div>
          <div class="column">
            <div class="ui icon header">
              <i class="world icon"></i>
              Add New Country
            </div>
            <div class="ui cards">
              <div class="card">
                <div class="content">
                  <span id="time" v-html="time"></span>
                </div>
                <div class="extra content">
                  <div class="ui two buttons">
                    <div class="ui basic red button" @click="reset">Cancle</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Total",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      state: "started",
      startTime: Date.now(),
      currentTime: Date.now(),
      interval: null,
      destinationTime: Date.now() + 1800000,
      form: {}
    };
  },
  methods: {
    reset: function() {
      this.form.state = "started";
      this.form.startTime = Date.now();
      this.form.currentTime = Date.now();
      this.form.destinationTime = Date.now() + 1799000;
    },
    pause: function() {
      this.form.state = "paused";
    },
    resume: function() {
      this.form.state = "started";
    },
    updateCurrentTime: function() {
      if (this.form.state == "started") {
        this.currentTime = Date.now();
      }
    }
  },
  destroyed: function() {
    clearInterval(this.interval);
  },
  computed: {
    time: function() {
      return this.hours + ":" + this.minutes + ":" + this.seconds;
    },
    milliseconds: function() {
      return this.destinationTime - this.currentTime;
    },
    hours: function() {
      var lapsed = this.milliseconds;
      var hrs = Math.floor(lapsed / 1000 / 60 / 60);
      return hrs >= 10 ? hrs : "0" + hrs;
    },
    minutes: function() {
      var lapsed = this.milliseconds;
      var min = Math.floor((lapsed / 1000 / 60) % 60);
      return min >= 10 ? min : "0" + min;
    },
    seconds: function() {
      var lapsed = this.milliseconds;
      var sec = Math.ceil((lapsed / 1000) % 60);
      return sec >= 10 ? sec : "0" + sec;
    }
  },
  mounted() {
    this.interval = setInterval(this.updateCurrentTime, 1000);
    // console.log(this.$route.params.id);
    // console.log(this.$route.params.time);
    // console.log(this.$route.params.price);
    // console.log(this.$route.params.seat);
    this.form.seat = this.$route.params.seat;
    this.form.price = this.$route.params.price;
    axios
      .get("http://localhost:3001/Movie/" + this.$route.params.id)
      .then(response => {
        console.log(response.data);
        this.form.movieNameThai = response.data.movieNameThai;
        this.form.movieName = response.data.movieName;
        this.form.length = response.data.length;
        this.form.imageUrl = response.data.imageUrl;
        this.form.time = "15:20";
        this.form.theatre = response.data.theatre;
      })
      .catch(error => {});
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

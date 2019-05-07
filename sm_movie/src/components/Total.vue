<template>
  <div class="Total">
    <sui-grid :columns="3" divided>
      <sui-grid-row stretched>
        <sui-grid-column>
          <sui-segment class="ui middle aligned center aligned grid">
            <img src="../assets/dumbo.jpg">
          </sui-segment>
        </sui-grid-column>
        <sui-grid-column>
          <sui-segment>
            <sui-card-content>
              <div v-for="detail in data" v-bind:key="detail">
                <tr>{{detail}}</tr>
              </div>

              <!-- <sui-card-header>Title: {{data.title}}</sui-card-header>
              <sui-card-description>Length: {{data.length}}</sui-card-description>
              <sui-card-description>Date: {{data.date}}</sui-card-description>
              <sui-card-description>Time: {{data.time}}</sui-card-description>
              <sui-card-description>Theatre: {{data.theatre}}</sui-card-description>
              <sui-card-description>Position: {{data.position}}</sui-card-description>
              <sui-card-description>Price: {{data.price}}</sui-card-description>
              <sui-card-description>Code: {{data.code}}</sui-card-description>-->
            </sui-card-content>

            <!-- <sui-card-content extra>
              <sui-icon name="film"/>22 Friends
            </sui-card-content>-->
          </sui-segment>
        </sui-grid-column>
        <sui-grid-column>
          <sui-segment>
            <!-- <p id="demo"></p> -->
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
          </sui-segment>
          <!-- <sui-segment>2</sui-segment> -->
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>

    <!-- <sui-card-group :items-per-row="3">
      
        <div class="ui three column very relaxed stackable grid">
          <div class="middle aligned column">
            <sui-card>
              <sui-image
                src="data:image/png;base64,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"
              />
            </sui-card>
          </div>
          <div class="middle aligned column">
            <sui-card>
              <sui-card-content>
                <sui-card-header>Kristy</sui-card-header>
                <sui-card-meta>Joined in 2013</sui-card-meta>
                <sui-card-description>Kristy is an art director living in New York.</sui-card-description>
              </sui-card-content>
              <sui-card-content extra>
                <sui-icon name="user"/>22 Friends
              </sui-card-content>
            </sui-card>
          </div>
          <div class="middle aligned column">
            <sui-card>
              <sui-card-content>
                <sui-card-header>Kristy</sui-card-header>
                <sui-card-meta>Joined in 2013</sui-card-meta>
                <sui-card-description>Kristy is an art director living in New York.</sui-card-description>
              </sui-card-content>
              <sui-card-content extra>
                <sui-icon name="user"/>22 Friends
              </sui-card-content>
            </sui-card>
          </div>
          <div class="ui vertical divider">Or</div>
        </div>
      
    </sui-card-group>-->
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
      form: {
        title: "",
        length: "",
        date: "",
        time: "",
        theatre: "",
        position: "",
        price: "",
        code: ""
      }
    };
  },
  methods: {
    reset: function() {
      this.$form.state = "started";
      this.$form.startTime = Date.now();
      this.$form.currentTime = Date.now();
      this.$form.destinationTime = Date.now() + 1799000;
    },
    pause: function() {
      this.$form.state = "paused";
    },
    resume: function() {
      this.$form.state = "started";
    },
    updateCurrentTime: function() {
      if (this.$form.state == "started") {
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
    this.form.title = "Dumbo";
    this.form.length = "180";
    this.form.date = "1 Jan 2014";
    this.form.time = "15:20";
    this.form.theatre = "1";
    this.form.position = "A1";
    this.form.price = "180";
    this.form.code = "FZSDFHBVC";
    this.interval = setInterval(this.updateCurrentTime, 1000);

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

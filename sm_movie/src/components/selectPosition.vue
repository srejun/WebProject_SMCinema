<template>
  <div class="selectPosition">
    <div class="ui grid">
      <div class="row">
        <div class="twelve wide column">
          <div class="row">
            <div class="twelve wide column">
              <div class="ui middle aligned center aligned grid">
                <img class="ui image" src="../assets/screen.png">
              </div>
            </div>
            <br>
            <p></p>
            <br>
            <div class="row">
              <div class="twelve wide column">
                <div class="ui middle aligned center aligned grid">
                  <table class="table">
                    <thead>
                      <th></th>
                      <td v-for="headcol in col" v-bind:key="headcol">
                        <strong class="ui equal width center aligned padded grid">{{headcol}}</strong>
                      </td>
                    </thead>
                    <tbody>
                      <tr v-for="chairrow in row" v-bind:key="chairrow">
                        <th>{{chairrow}}</th>

                        <td v-for="chaircol in col" v-bind:key="chaircol">
                          <!-- <th>{{chaircol}}</th> -->
                          <!-- <button class="ui button"> -->
                          <div
                            class="field"
                            v-if="colorredCheck[(15*(chairrow.charCodeAt(0)-65))+chaircol-1] == 'red'"
                            @click="markgreen(chaircol,chairrow)"
                          >
                            <img
                              class="ui image"
                              src="../assets/chair_red.png"
                              width="50px"
                              height="50px"
                            >
                            <span></span>
                          </div>
                          <div
                            class="field"
                            v-else-if="colorredCheck[(15*(chairrow.charCodeAt(0)-65))+chaircol-1] == 'green'"
                            @click="markred(chaircol,chairrow)"
                          >
                            <img
                              class="ui image"
                              src="../assets/chair_green.png"
                              width="50px"
                              height="50px"
                            >
                            <span></span>
                          </div>
                          <div class="field" v-else>
                            <img
                              class="ui image"
                              src="../assets/chair_gray.png"
                              width="50px"
                              height="50px"
                            >
                            <span></span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="four wide column">
          <div class="ui cards">
            <div class="card">
              <div class="content">
                <img class="top floated ui image" :src="imageUrl" width="280px" height="350px">
                <div class="header">{{form.titleen}} {{form.titleth}}</div>
                <div class="description">{{form.date}}</div>
                <div class="description">{{form.length}} Minutes</div>
                <div class="description">Theater {{form.theatre}}</div>
                <div class="description">
                  <div class="ui divider"></div>
                  <div class="inline field">
                    <div class="ui right pointing label">Price:</div>
                    <div class="ui label">{{this.form.price}}</div>
                    <div class="ui left pointing label">$</div>
                  </div>
                </div>
              </div>
              <div class="extra content">
                <!-- <router-link :to="{ path: 'Total/' + buyTicket()}"> -->
                  <div class="ui two buttons">
                    <div class="ui basic green button" @click="book()">Buy Ticket</div>
                  </div>
                <!-- </router-link> -->
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
  name: "selectPosition",
  data() {
    return {
      row: "",
      col: 0,
      time: 0,
      sess: "",
      colorredCheck: [],
      form: {
        id: "",
        id_theatre: "",
        titleth: "",
        titleen: "",
        length: "",
        date: "",
        time: "",
        imageUrl: "",
        theatre: "",
        showTime: [],
        seat: [],
        booked: [],
        confirm: [],
        price: "",
        code: ""
      },
      week: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  },
  methods: {
    buyTicket() {
      var now = new Date().getTime();
      return now;
    },
    markgreen(col, row) {
      let newData = {
        showTime: this.showTime,
        seat: this.seat,
        booked: this.booked,
        confirm: this.confirm,
        theatre: this.theatre,
        movieName: this.movieName,
        movieNameThai: this.movieNameThai
      };
      // console.log(row+col)
      // console.log(newData.booked[0].round1)
      // console.log("new"+newData.booked[0].round1.push(5*(row.charCodeAt(0)-65)+col-1))
      // console.log(this.form.id_theatre)
      newData.seat[0].round1.push(15 * (row.charCodeAt(0) - 65) + col - 1);
      axios
        .post(
          "http://localhost:3001/Theatre/theatreupdate/" + this.form.id_theatre,
          newData
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {});
      window.location.reload();
    },
    markred(col, row) {
      let newData = {
        showTime: this.showTime,
        seat: this.seat,
        booked: this.booked,
        confirm: this.confirm,
        theatre: this.theatre,
        movieName: this.movieName,
        movieNameThai: this.movieNameThai
      };
      // console.log(row+col)
      // console.log(newData.booked[0].round1)
      // console.log("new"+newData.booked[0].round1.push(5*(row.charCodeAt(0)-65)+col-1))
      // console.log(this.form.id_theatre)
      // console.log(this.booked[0]);
      console.log(newData.seat[0].round1);
      for (let i = 0; i < newData.seat[0].round1.length; i++) {
        if (
          newData.seat[0].round1[i] ==
          15 * (row.charCodeAt(0) - 65) + col - 1
        ) {
          // console.log(newData.booked[0].round1[i])
          // console.log(newData.booked[0].round1)
          delete newData.seat[0].round1[i];
          newData.seat[0].round1 = newData.seat[0].round1.filter(
            number => number != null
          );
          // console.log("++++"+newData.booked[0].round1)
        } else {
          // newData.booked[0].round1[i] = this.booked[0].round1[i];
        }
      }
      //newData.booked[0].round1.splice((15 * (row.charCodeAt(0) - 65) + col - 1),2);

      axios
        .post(
          "http://localhost:3001/Theatre/theatreupdate/" + this.form.id_theatre,
          newData
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {});
      window.location.reload();
    },
    book() {
      let newData = {
        showTime: this.showTime,
        seat: this.seat,
        booked: this.booked,
        confirm: this.confirm,
        theatre: this.theatre,
        movieName: this.movieName,
        movieNameThai: this.movieNameThai
      };
      // console.log(row+col)
      // console.log(newData.booked[0].round1)
      // console.log("new"+newData.booked[0].round1.push(5*(row.charCodeAt(0)-65)+col-1))
      // console.log(this.form.id_theatre)
      newData.booked[0].round1.push([15 * (row.charCodeAt(0) - 65) + col - 1,this.sess]);
      console.log(newData.booked[0].round1)
      // axios
      //   .post(
      //     "http://localhost:3001/Theatre/theatreupdate/" + this.form.id_theatre,
      //     newData
      //   )
      //   .then(response => {
      //     console.log(response);
      //   })
      //   .catch(error => {});
    }
  },
  mounted() {
    var now = new Date().getTime();
    (this.sess = "A"), (this.time = now);
    this.form.date =
      this.form.time +
      " " +
      this.week[new Date().getDay()] +
      " " +
      new Date().getDate() +
      " " +
      this.month[new Date().getMonth() + 1] +
      " " +
      new Date().getFullYear();
    this.form.id = "5cd2b7a275e78d4588c92841";
    axios
      .get("http://localhost:3001/Movie/" + this.form.id)
      .then(response => {
        this.form.titleth = response.data.movieNameThai;
        this.form.titleen = response.data.movieName;
        this.form.length = response.data.length;
        this.imageUrl = response.data.imageUrl;
        this.form.time = "15:20";
        this.form.theatre = response.data.theatre;
        this.form.price = response.data.price;
        axios
          .get("http://localhost:3001/Theatre/" + this.form.theatre)
          .then(response => {
            //console.log(response.data[0])
            this.form.id_theatre = response.data[0]._id;
            this.row = response.data[0].seat[0].row;
            this.col = response.data[0].seat[0].col;
            (this.showTime = response.data[0].showTime),
              (this.seat = response.data[0].seat),
              (this.booked = response.data[0].booked),
              (this.confirm = response.data[0].confirm);
            console.log(this.seat[0]);
            for (var i = 0; i < this.row.length * this.col; i++) {
              if (this.seat[0].round1.length > 0) {
                for (var j = 0; j < this.seat[0].round1.length; j++) {
                  //console.log(i, this.booked[0].round1[j]);
                  if (i == this.seat[0].round1[j]) {
                    this.colorredCheck[i] = "green";
                    break;
                  } else {
                    this.colorredCheck[i] = "red";
                  }
                }
              } else {
                this.colorredCheck[i] = "red";
              }
            }
            //console.log(this.colorredCheck);
          })
          .catch(error => {});
      })
      .catch(error => {});

    console.log(this.form.theatre);
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

<template>
  <div class="ui center container">
    <div class="ui inverted segment">
      <h1 class="ui yellow dividing header"><i class="film icon"></i>Movies</h1>
      <div class="ui segment">
        <!-- insert movie card -->
        <div class="ui three column grid" >
              <div v-for="i in Movie" v-bind:key="i._id">
                <div v-if="i.status == true" >
                  <div class="ui column">
                    <!-- <h1>{{i.movieName}}</h1> -->
                    <router-link :to="{ path: 'details/' + i._id}">
                      <div class="ui link card" style="margin:10% 0% 5% 25%">  
                        <!-- data-tooltip="Description of movie" -->
                        
                          <div class="image"> 
                            <img v-bind:src=i.imageUrl>
                          <!-- <img v-bind:src=i.imageUrl onclick="window.location.href ='#/detail'"> -->
                          </div>
                      
                          <div class="content" style="text-align: left">
                            <a class="header">
                              {{i.movieName}}
                            </a>
                            <a class="meta">
                              {{i.movieNameThai}}
                            </a>
                          </div>  
                      </div>
                      </router-link>
                      <router-link :to="{ path: 'buyticket/' + i._id}">
                        <div class="fluid yellow ui button" style="margin:10px 0px 10px 25%" onclick="window.location.href ='#/buyticket'">
                          <i class="ticket icon"></i>Buy now</div>
                        </router-link>      
                  </div>
                </div>
              </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Movie",
  data() {
      return {
        // movie:{
        //     m1: "https://cdn.majorcineplex.com/uploads/movie/2226/thumb_2226.jpg",         
        //     m2: "https://cdn.majorcineplex.com/uploads/movie/2185/thumb_2185.jpg",
        //     m3: "https://cdn.majorcineplex.com/uploads/movie/1011/thumb_1011.jpg",
        //     m4: "https://cdn.majorcineplex.com/uploads/movie/2533/thumb_2533.jpg", 
        //     m5: "https://cdn.majorcineplex.com/uploads/movie/2472/thumb_2472.jpg",
        //     m6: "https://cdn.majorcineplex.com/uploads/movie/2584/thumb_2584.jpg"
        //     },
        Movie:[]

            
        }
      },
      // computed: {
      //   filterdUsers: function(){
      //     return this.Movie.filter((user)=>{
      //       return user.firstName.match(this.search) || user.lastName.match(this.search) 
      //     })
      //   }
      // },
      mounted() {
        axios.get('http://localhost:3001/getMovies')
        .then((response)=>{
            console.log(response.data)
            // // this.Movie=response.data    
            // console.log(response.data[0].status)  
            // // console.log(this.Movie)

            // var len = response.data.length
            // for (var i=0; i<len; i++){
            //   // console.log(response.data[i])
            //   if (response.data[i].status == true){
            //       this.Movie[i]= response.data[i]
            //       console.log(i)
            //       // console.log(this.Movie)
            //   }
            // } console.log(this.Movie)
            this.Movie=response.data
        })
        .catch((error)=>{
            console.log(error)
        })
      },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

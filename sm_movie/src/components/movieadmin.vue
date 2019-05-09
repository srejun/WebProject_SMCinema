<template>
  <div class="ui center container">
    <div class="ui inverted segment">
      <h1 class="ui yellow dividing header"><i class="film icon"></i>Movies</h1>
      <div class="ui segment">
        <!-- insert movie card -->
        <div class="ui three column grid">
            <!-- <div v-for="i in movie" v-bind:key="i"> -->
              <div v-for="i in Movie" v-bind:key="i._id">
                <div v-if="i.status == true" >
                  <div class="column">
                    <!-- <h1>{{i.movieName}}</h1> -->
                    
                      <div class="ui link card" style="margin:10% 0% 5% 25%">  
                        <!-- data-tooltip="Description of movie" -->
                        
                          <div class="image"  data-position="right center"> 
                            <img v-bind:src=i.imageUrl>
                          <!-- <img v-bind:src=i.imageUrl onclick="window.location.href ='#/detail'"> -->
                          </div>
                      
                          <div class="content" style="text-align: left"  >
                            <a class="header">
                              {{i.movieName}}
                            </a>
                            <a class="meta">
                              {{i.movieNameThai}}
                            </a>
                          </div>  
                      </div>
                      <router-link :to="{ path: 'edit/' + i._id}">
                        <div class="fluid red ui button" style="margin:10px 0px 10px 25%">
                          <i class="edit icon"></i>Edit
                        </div>
                      </router-link>
                        <!-- <router-link :to="{ path: 'edit/' + i._id}">
                          <div class="fluid red ui button" style="margin:5px 0px" onclick="window.location.href ='#/edit'">
                          <i class="edit icon"></i>Edit</div>
                        </router-link> -->
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
  name: "movieadmin",
  data() {
      return {
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

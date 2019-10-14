<template>
    <div id='mybutton'>
        <div @click="sendData" v-for="(item,index) in updateMovieData" :key='index' class="item-box">
            <h5>{{item.title}}</h5>
            <img :src='allData.imagePath + item.poster_path'></img>
            <div>{{item.vote_average}}</div>
        </div>
    </div>
</template>
<script>
    import Axios from 'axios'
export default {
    name:'mybutton',
    data(){
        return{
            allData:{
                imagePath: 'https://image.tmdb.org/t/p/w500',             
            },
            movieAPIData:'',
            cloneMovieData:'',
        } 
    },
    methods: {
        sendData(){
            this.$emit('checkPropsData',this.cloneMovieData)
        }
    },
    props:['movieAPIDataFromProps'],
    mounted() {
      
    },
    computed: {
        updateMovieData(){
            if (this.movieAPIDataFromProps =='') return;
            this.movieAPIData = this.movieAPIDataFromProps.slice()
            this.cloneMovieData = this.movieAPIDataFromProps.slice()
            this.cloneMovieData.length = 3
            console.log(this.cloneMovieData)
            return this.cloneMovieData
        }
    },
}
</script>
<style>
#mybutton{
    margin: 0 auto;
    display: flex
}
.item-box{
    text-align:center;
    flex:1 1 ;
}
img{
    width:50%;
}

</style>
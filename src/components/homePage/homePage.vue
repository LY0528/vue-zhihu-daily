<template>
  <div id="app">
    <div class="banner">
      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="story in top_stories">
          <router-link :to="'/moreNews/'+story.id">
            <img :src="story.image">
            <p class="title">{{story.title}}</p>
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="content">
      <ul class="list">
        <li v-for="stories in stories">
          <router-link :to="'/moreNews/'+stories.id">
            <p class="title">{{stories.title}}</p>
            <img :src="stories.images">
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data (){
    return {
      top_stories:[],
      stories:[],
      themes:[],
      isShow:false
    }
  },
  created(){
    this.fetchDate()
  },
  methods:{
    fetchDate:function(){
      axios.get('api/news/latest', {}).then((response) => {
        this.top_stories = response.data.top_stories
        this.stories = response.data.stories        
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.banner
    margin-top:50px
    height:200px
    .mint-swipe
      height:200px
      position:relative
      .mint-swipe-items-wrap
        height:100%
        position:relative
        overflow:hidden
        .mint-swipe-item
          position:absolute
          display:none
          width :100%
          height:100%
        .is-active
          display:block
          a
            display:block
            img
              display:block
              width:100%
              height:200px
            .title
              position:absolute
              bottom:45px
              left:0
              color:#fff
              font-size :18px
              padding:0 10px
      .mint-swipe-indicators        
          position:absolute
          bottom:10px
          left:50%
          transform:translateX(-50%)
        .mint-swipe-indicator
          display:inline-block
          width:8px
          height:8px
          border-radius:8px
          margin-left:5px
          border:1px solid #ccc
        .is-active          
          background:#666
.content
    .list
      li
        border-bottom:1px solid #ccc
        a
          display:block
          width:100%
          .title
            display:inline-block
            height:80px
            width:70%
            padding:20px 10px
            line-height:30px
            color:black
            vertical-align:middle
          img
            display:inline-block
            width:80px
            height:60px
            background:skyblue
            vertical-align:middle
          
</style>

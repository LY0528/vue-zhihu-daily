<template>
  <div id="app">
    <div class="header">
      <span></span>
      <mt-header fixed title="今日热闻"></mt-header>
    </div>
    <div class="banner">
      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="story in top_stories">
          <img :src="story.image">
          <p class="title">{{story.title}}</p>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="content">
      <ul class="list">
        <li v-for="stories in stories">
          <a href="#">
            <p class="title">{{stories.title}}</p>
            <img :src="stories.images">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
  data (){
    return {
      top_stories:[],
      stories:[]
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
#app
  .header
    position:relative   
    span
      display:block
      width:20px
      height:20px
      background:url('../static/images/Category.svg') center no-repeat
      background-size:20px
      position:absolute
      top:15px
      left:15px 
    .mint-header
      text-align: center 
      color: #fff
      height:50px
      line-height:50px
      font-size:20px
      background:#028fd6
  .banner
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
          vertical-align:middle
          .title
            display:inline-block
            height:80px
            width:70%
            padding:20px 10px
            line-height:20px
          img
            display:inline-block
            width:80px
            height:60px
            background:skyblue
            vertical-align:middle
          
</style>

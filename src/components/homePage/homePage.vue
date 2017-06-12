<template>
  <div id="app">
    <div class="header-fixed">
      <div class="header">
        <span @click="isShow = !isShow;getThemes()"></span>
        <mt-header fixed title="今日热闻"></mt-header>
      </div>
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
    <div class="mask" v-show='isShow' @touchmove.prevent>
      <div class="side" v-show='isShow'> 
        <div class="sidebar">
        <div class="user">
          <img class="photo" src="../../../static/images/header.jpg">
          <span class="name">LY0528</span>
          <span class="back" @click="isShow=!isShow"></span>
        </div>
        <div class="handle">
          <div class="handle-item">
            <div class="handle-icon">
              <img src="../../../static/images/favorite.svg">
            </div>
            <div class="name">收藏</div>
          </div>
          <div class="handle-item">
            <div class="handle-icon">
              <img src="../../../static/images/remind.svg">
            </div>
            <div class="name">消息</div>
          </div>
          <div class="handle-item">
            <div class="handle-icon">
              <img src="../../../static/images/set.svg">
            </div>
            <div class="name">设置</div>
          </div>
        </div>
        <div class="theme">
          <ul class="themes">
            <li class="themes-list" @click="isShow=!isShow">
              <router-link to="/homePage" class="icon">首页</router-link>
            </li>
            <li class="themes-list" v-for="theme in themes" @click="isShow=!isShow">
              <router-link :to="'/themeDetail/:'+theme.id">{{theme.name}}</router-link>
            </li>
          </ul>
        </div>
        </div> 
      </div>
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
    },
    getThemes:function(){
      axios.get('api/themes', {}).then((response) => {
        this.themes = response.data.others
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#app
  .header-fixed
    width:100%
    position:fixed
    top:0
    left:0
    z-index:10
    .header
      position:relative   
      span
        display:block
        width:20px
        height:20px
        background:url('../../../static/images/Category.svg') center no-repeat
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
  .mask
    position:fixed
    top:0
    left:0
    z-index:20
    width:100%
    height:667px
    background:rgba(0,0,0,0.4)
    .side
      width:100%
      height:667px
      position:fixed
      top:0
      left:0
      .sidebar
        width:60%
        height:667px
        position:fixed
        top:0
        left:0
        z-index:30  
        background:rgba(0,0,0,0.6)
        padding:10px
        .user
          width:100%
          height:50px
          .photo
            width:45px
            height:45px
            border-radius:45px
            vertical-align:middle
          .name
            display:inline-block
            width:140px
            color:#fff
            font-size :18px
            vertical-align:middle
          .back
            display:inline-block
            width:30px
            height:30px
            background:url('../../../static/images/back.svg') center no-repeat
            background-size:30px
            vertical-align:middle
        .handle
          display:flex
          padding:10px 0
          text-align:center
          .handle-item
            flex:1
            .handle-icon
              img
                width:20px
                height:20px
            .name
              color:#fff
              font-size :16px
              line-height:24px
        .theme
          .themes
            .themes-list
              a
                display:block
                height:38px
                line-height:38px
                color:#fff
              .icon
                padding-left:22px
                background:url('../../../static/images/home.svg') left center no-repeat
                background-size:18px

    
          
</style>

<template>
	<div>
    <div class="header-fixed">
      <div class="header">
        <span @click="isShow = !isShow;getThemes()"></span>
        <mt-header fixed :title="title"></mt-header>
      </div>
    </div>
	  <div class="contents">
	  	<div class="descript">
	  		<div class="bg-img">
	  			<img :src="background">
	  		</div>
	  		<div class="title">{{description}}</div>
	  	</div>
	  	<ul class="content-list">
	  		<li class="content" v-for="story in stoties">
	  			<router-link :to="'/moreNews/:'+story.id">
	  				<span class="title">{{story.title}}</span>
	  				<img :src="story.images" v-if="story.images" class="image">
	  			</router-link>
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
              <router-link :to="'/themeDetail/:'+theme.id">							{{theme.name}}
              </router-link>
            </li>
          </ul>
        </div>
        </div> 
      </div>
    </div>	  
	</div>
</template>
<script type="text/javascript">
import axios from 'axios'
import VueAxios from 'vue-axios'
export default{
	data (){
		return {
			isShow:false,
			id:this.$route.params.id,
			title:'',
			stoties:[],
			description:'',
			background:'',
			themes:[]
		}
	},
	created (){
		this.fetchDate(this.id.split(":")[1])
	},
	methods:{
		fetchDate:function(id){
     	axios.get('api/theme/'+id, {}).then((response) => {
     	  this.title = response.data.name   
     	  this.stoties = response.data.stories   
     	  this.description = response.data.description   
     	  this.background = response.data.background   
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
import '../../common/stylus/index.styl'
.header-fixed
  width:100%
  position:fixed
  top:0
  left:0
  z-index:10
  .header
    position:relative
    height:50px   
    span
      display:block
      width:20px
      height:20px
      background:url('../../../static/images/Category.svg') centeno-repeat
      background-size:20px
      position:absolute
      top:15px
      left:15px 
    .mint-header
      text-align: center 
      color: #fff
      height:100%
      line-height:50px
      font-size:20px
      background:#028fd6
.contents
	margin-top:50px
	background:#f9f9f9
	.descript
		position:relative
		.bg-img
			img
				width:100%
				height:240px
				filter:opacity(70%)
		.title
			width:70%
			line-height:36px
			position:absolute
			top:50px
			right:10px
			color:#fff
			font-weight :900
			font-size :20px
			text-align:center
	.content-list
		position:relative
		padding-top:28px
		.content
			padding:10px
			box-shadow: 5px 2px 2px #f1f1f1
			background:#f9f9f9
			margin-bottom:5px
			a
				display:block
				color:#5b7492
				.title
					display:inline-block
					line-height:28px
					width:75%
					margin-right:5%
					vertical-align:middle
				.image
					display:inline-block
					width:60px
					height:60px
					background:skyblue
					vertical-align:middle
		.content:first-child
			width:88%
			position:absolute
			top:-25px
			left:10px	
			a
				.title
					width:100%
					margin-right:0
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
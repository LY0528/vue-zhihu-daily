<template>
	<div>
		<div class="header">
	    <span @click="isShow = !isShow"></span>
	    <mt-header fixed :title="title"></mt-header>
	  </div>
	  <div class="contents">
	  	<div class="descript">
	  		<div class="bg-img">
	  			<img :src="background">
	  		</div>
	  		<div class="title">{{description}}</div>
	  	</div>
	  	<ul class="content-list">
	  		<li class="content border-1px" v-for="story in stoties">
	  			<a href="#">
	  				<span class="title">{{story.title}}</span>
	  				<img :src="story.images" v-if="story.images" class="image">
	  			</a>
	  		</li>
	  	</ul>
	  </div>
	</div>
</template>
<script type="text/javascript">
import Vue from 'vue'
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
			background:''
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
    /*getThemes:function(){
      axios.get('api/themes', {}).then((response) => {
        this.themes = response.data.others
      })
    }*/
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
import '../../common/stylus/index.styl'
.header
  position:relative
  top:0
  left:0   
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
    height:50px
    line-height:50px
    font-size:20px
    background:#028fd6
.contents
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
			bottom:50px
			right:10px
			color:#fff
			font-weight :900
			font-size :20px
			text-align:center
	.content-list
		.content
			padding:10px
			box-shadow: 10px 2px 10px #ccc
			a
				display:block
				color:#000
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
</style>
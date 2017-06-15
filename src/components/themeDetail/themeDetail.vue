<template>
	<div>
    <!-- 内容 -->
	  <div class="contents">
	  	<div class="descript">
	  		<div class="bg-img">
	  			<img :src="background">
	  		</div>
	  		<div class="description">
          {{description}}
          <br/>
          <br/>
          ———— {{name}}
        </div>
	  	</div>
	  	<ul class="content-list">
	  		<li class="content" v-for="story in stories">
	  			<router-link :to="'/moreNews/'+story.id" @toggleNews="toggleNewsFn(story.id)">
	  				<span class="title">{{story.title}}</span>
	  				<img :src="story.images" v-if="story.images" class="image">
	  			</router-link>
	  		</li>
	  	</ul>
	  </div>
 
	</div>
</template>
<script type="text/javascript">
import axios from 'axios'
export default{
	data (){
		return {
			isShow:false,
			id:this.$route.params.id,
      name:'',
			stories:[],
			description:'',
			background:'',
			themes:[],
      newsList:[],
      nextId:''
		}
	},
	created (){
		this.fetchDate(this.id)
	},
	methods:{
		fetchDate:function(id){
     	axios.get('api/theme/'+id, {}).then((response) => {
     	  this.name = response.data.name   
     	  this.stories = response.data.stories   
     	  this.description = response.data.description   
     	  this.background = response.data.background
        for(var i=0;i<this.stories.length;i++){
          this.newsList[i] = this.stories[i].id
        }  
     	})
   	},
    toggleNewsFn(id){
      var num = this.newsList.indexOf(id)//当前id的位置
      this.nextId = this.newsList[num+1]//下一个id
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
		.description
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

</style>
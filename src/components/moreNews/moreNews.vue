<template>
	<div>
		<link rel="stylesheet" type="text/css" :href="css">
    <div class="header-fixed">
      <div class="header">
        <span></span>
      </div>
    </div>
    <div class="content-part">
			<div class="header">
				<img :src="images" class="bg">
				<h2 class="title">{{title}}</h2>
			</div>
    	<div v-html="body" class="content"></div>
    </div>
	</div>
</template>
<script type="text/javascript">
//import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
export default{
	data (){
		return {
			id:this.$route.params.id,
			title:'',
			body:'',
			css:'',
			images:'../../../static/images/logo.png'
		}
	},
	created (){
		this.fetchDate(this.id.split(":")[1])
	},
	methods:{
		fetchDate:function(id){
     	axios.get('api/news/'+id, {}).then((response) => {
				this.title = response.data.title  
				this.body = response.data.body
				this.css =  response.data.css
				this.images =  response.data.images?response.data.images:this.images
     	})
		}
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header-fixed
  width:100%
  position:fixed
  top:0
  left:0
  z-index:10
  .header
    position:relative
    height:50px  
    background:linear-gradient(0deg,transparent,rgba(0,0,0,.51) 95%)    
    span
      display:block
      width:28px
      height:28px
      background:url('../../../static/images/back.svg') center no-repeat
      background-size:28px
      position:absolute
      top:12px
      left:15px 
.content-part
	.header
		position:relative
		height:230px
		.bg
			width:100%
			height:100%
			filter:opacity(70%)
		.title
			width:80%
			position:absolute
			bottom:20px
			right:0
			color:#fff
			font-size :18px
			line-height:24px
			font-weight :700
			text-align:center
	.content
		.main-wrap
			.headline
				border:0
				.img-place-holder
					height:0
			.content-inner
				.meta
					img
						display:inline-block
						margin:0
					.author
						color:#fc4482
						

</style>
<template>
	<div>
	<!-- 外部资源的css文件 -->
		<link rel="stylesheet" type="text/css" :href="css">
    <!-- 内容区 -->
    <div class="content-part">
			<div class="header">
				<img :src="images" class="bg">
				<h2 class="title">{{title}}</h2>
			</div>
    	<div v-html="body" class="content"></div>
    </div>
    <!-- 上一页、下一页 -->
		<div class="handles">
			<div class="handles-item">
				<span class="back" @click="back()"></span>
			</div>
			<div class="handles-item">
				<span class="next"></span>
			</div>
			<div class="handles-item">
				<span class="good"><i class="good_num">{{popularity}}</i></span>
			</div>
			<div class="handles-item">
				<span class="comments"><i class="comments_num">{{commentsNum}}</i></span>
			</div>
		</div>
		<!-- 评论内容 -->
		<div class="comment">
	    <div class="tab">
				<div class="tab-item" v-if="short_comments_num">
					<div class="title" :class="{active:short_isActive}" @click="short_isActive=!short_isActive;getShortComments(id);short_isShow=!short_isShow">查看短评({{short_comments_num}})</div>
					<ul class="comments" v-show="short_isShow">
						<li class="comments-list" v-for="(comment,index) in short_comments">
							<img :src="comment.avatar" class="avatar">
							<span class="author">{{comment.author}}</span>
							<p class="content">{{comment.content}}</p>
							<p class="reply" v-if="comment.reply_to">
								{{comment.reply_to.author}}&nbsp;<span>回复</span>&nbsp;{{comment.author}}:{{comment.reply_to.content}}
							</p>
							<span class="time">{{short_times[index]}}</span>
							<span class="like"><i v-if="comment.likes>0">{{comment.likes}}</i></span>
						</li>
					</ul>
				</div>
				<div class="tab-item" v-if="long_comments_num">
					<div class="title" :class="{active:long_isActive}" @click="long_isActive=!long_isActive;getLongComments(id);long_isShow=!long_isShow">查看长评({{long_comments_num}})</div>
					<ul class="comments" v-show="long_isShow">
						<li class="comments-list" v-for="(comment,index) in long_comments">
							<img :src="comment.avatar" class="avatar">
							<span class="author">{{comment.author}}</span>
							<p class="content">{{comment.content}}</p>
							<p class="reply" v-if="comment.reply_to">
								{{comment.reply_to.author}}&nbsp;<span>回复</span>&nbsp;{{comment.author}}:{{comment.reply_to.content}}
							</p>
							<span class="time">{{long_times[index]}}</span>
							<span class="like"><i v-if="comment.likes>0">{{comment.likes}}</i></span>
						</li>
					</ul>					
				</div>
    	</div>	
	</div>
	</div>
</template>
<script type="text/javascript">
import axios from 'axios'
export default{
	data (){
		return {
			id:this.$route.params.id,
			title:'',
			body:'',
			css:'',
			images:'../../../static/images/logo.png',
			long_comments_num:'',//长评数量
			short_comments_num:'',//短评数量
			long_isActive:false,
			short_isActive:false,
			commentsNum:'',//评论总数
			popularity :'',//点赞总数
			short_comments:[],//短评内容
			short_isShow:false,//短评关闭或者打开
			short_times:[],//短评时间
			long_comments:[],//长评内容
			long_isShow:false,//长评关闭或者打开
			long_times:[],//长评时间
		}
	},
	created (){
		this.fetchDate(this.id)
		this.getComments(this.id)
	},
	methods:{
		fetchDate:function(id){
     	axios.get('api/news/'+id, {}).then((response) => {
			this.title = response.data.title  
			this.body = response.data.body
			this.css =  response.data.css
			//有图片显示当前的 没有就显示默认的
			this.images =  response.data.images?response.data.images:this.images
     	})
		},
		getComments:function(id){
     	axios.get('api/story-extra/'+id, {}).then((response) => {
     		this.commentsNum = response.data.comments
     		this.popularity = response.data.popularity
				this.long_comments_num = response.data.long_comments
				this.short_comments_num = response.data.short_comments
     	})			
		},
		getShortComments:function(id){
     	axios.get('api/story/'+id+'/short-comments', {}).then((response) => {
				this.short_comments = response.data.comments
				//把时间戳转化成当地时间
				for(var i=0;i<this.short_comments.length;i++){
					this.short_times[i] = new Date(parseInt(this.short_comments[i].time+'000')).toLocaleString()
				}
     	})
		},
		getLongComments:function(id){
     	axios.get('api/story/'+id+'/long-comments', {}).then((response) => {
				this.long_comments = response.data.comments
				//把时间戳转化成当地时间
				for(var i=0;i<this.long_comments.length;i++){
					this.long_times[i] = new Date(parseInt(this.long_comments[i].time+'000')).toLocaleString()
				}
     	})
		},
		back:function(){
			this.$router.go(-1)
		}
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
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
		margin-bottom:5px
		.main-wrap
			.headline
				border:0
				.img-place-holder
					height:0
			.content-inner
				.answer
					.meta
						img
							display:inline-block
							margin:0
						.author
							color:#fc4482
				.view-more
					margin-bottom:5px
.handles
	position:fixed
	bottom:0px
	width:100%
	z-index:10
	display:flex
	background:#f1f1f1
	.handles-item
		flex:1
		text-align:center
		line-height:50px
		span
			display:inline-block
			width:30px
			height:30px
			vertical-align:middle
			i
				position:absolute
				top:-25px
				right:-15px			
		.back
			background:url('../../../static/images/back.svg') center no-repeat
			background-size:30px
		.next
			background:url('../../../static/images/more_unfold.svg') center no-repeat
			background-size:30px
		.good
			background:url('../../../static/images/good.svg') center no-repeat
			background-size:30px
			position:relative
		.comments
			background:url('../../../static/images/comments.svg') center no-repeat
			background-size:30px
			position:relative
.comment
	padding:5px 10px
	margin-bottom:50px
	.tab
		.tab-item
			.title
				font-size :16px
				line-height:28px
				padding-left:20px
				background:url('../../../static/images/shrink.svg') left center 	no-repeat
				background-size:17px
			.active
				background:url('../../../static/images/unfold.svg') left 	no-repeat
				background-size:23px
			.comments
				margin-top:5px
				.comments-list
					border-bottom:1px solid #ccc
					margin-bottom:10px
					.avatar
						width:24px
						height:24px
						border-radius:24px
					.author
						font-size:12px
					.content, .reply,.time
						font-size :13px
						line-height:16px
					.content
						margin:5px 0 !important
					.reply
						margin:10px !important
						background:#ccc
						span
							color:hotpink
					.like
						display:inline-block
						width:22px
						height:22px
						background:url('../../../static/images/like.svg') center no-repeat
						background-size:22px
						vertical-align:middle
						position:relative
						i
							position:absolute
							top:0
							right:-5px
							font-size :12px
					
</style>
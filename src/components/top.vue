<template>
	<div class="top">
		<img src="../../static/imgs/top_icon.jpg"/>
		<h1>黄平路附近<img src="../../static/imgs/top_arrow.jpg" alt="" /></h1>
		<router-link to><div><img src="../../static/imgs/top_search.jpg" alt="" /><p>搜索</p></div></router-link>
	</div>
</template>

<script>	
	export default{
		name : 'top',
		data () {
			return {
				
			}
		}
	}
</script>

<style lang="less">
	.top{
		height: 1.444444rem;
		width: 10rem;
		background-color:#ffd601;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		color: #261600;
		z-index: 100;
		/*line-height: 1.444444rem;*/
		img{
			float: left;
			width: 0.805555rem;
			height: 0.805555rem;
			margin: 0.277777rem 0 0 0.277777rem;
		}
		h1{
			float: left;
			width: 3rem;
			font-size: 0.416666rem;
			font-weight: bold;
			height: 1.444444rem;
			line-height: 1.444444rem;
			margin-left: 2.2rem;
			position: relative;
			img{
				position: absolute;
				width: 0.333333rem;
				height: 0.333333rem;
				right: 0;
				top: 0.3rem;
			}
		}
		a{
			float: left;
			div{
				float: left;
				margin-left: 2.4rem;
				margin-top: -0.1rem;
				text-indent: 0.277777rem;
				color: #261600;
				img{
					width: 0.611111rem;
					height: 0.611111rem;
				}
			}
		}
		
	}
</style>
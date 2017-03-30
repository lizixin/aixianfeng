
<template>
  <div id="app">
  	<!--<router-link to = '/home'>home</router-link>
  	<router-link to = '/cart'>cart</router-link>
		<router-view></router-view>-->
		<router-view class= 'view'></router-view>
		<div class="tab_bar">
				<router-link to ='/home'>
					<section>
						<span>首页</span>
					</section>
				</router-link>
				<router-link to ='/market'>
					<section>
						<span>闪送超市</span>
					</section>
				</router-link>
				<router-link to ='/cart'>
					<section>
						<span>购物车</span>
					</section>
				</router-link>
				<router-link to ='/mine'>
					<section>
						<span>我的</span>
					</section>
				</router-link>
		</div>
  </div>

</template>

<script>


export default {
  name: 'app',
  components: {
		
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  /*margin-top: 60px;*/
 	.tab_bar{
		height: 1.5rem;
		width: 10rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background: #f6f2ef;
		a{
			&:nth-of-type(1){
				background: url('/static/imgs/home.png') no-repeat center 0.166666rem;
				background-size:0.597222rem 0.597222rem;
			}
			&:nth-of-type(2){
				background: url('../static/imgs/market.png') no-repeat center 0.166666rem;
				background-size:0.597222rem 0.597222rem;
			}
			&:nth-of-type(3){
				background: url('../static/imgs/cart.png') no-repeat center 0.166666rem;
				background-size:0.597222rem 0.597222rem;
			}
			&:nth-of-type(4){
				background: url('../static/imgs/mine.png') no-repeat center 0.166666rem;
				background-size:0.597222rem 0.597222rem;
			}
			section{
				width: 2.5rem;
				height: 1.5rem;
				span{
					display: inline-block;
					margin-top: 1.0rem;
					font-size: 0.361111rem;
					color: #60615c;
			}
		}
		}
		
	}
}



</style>

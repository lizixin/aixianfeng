<template>
	<div class="lunbo">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for='item in banner_list'><img :src="item.activity.img" alt="" /></div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		</div>
	</div>
</template>


<script>
	export default{
		name : 'lunbo',
		data () {
			return {
				banner_list : []
			}
		},
		methods : {
			
		},
		created () {
			this.$http.get('/static/data/home.json').then((res) => {
//				console.log(res.body.data.act_info[0].act_rows)
				//将数据赋给data属性中的banner_list数组,用来在页面显示
				this.banner_list = res.body.data.act_info[0].act_rows
			})
		},
		updated () {


//			console.log(this.list)
			 var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    autoplay : 1000,
			    autoplayDisableOnInteraction:false,
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			 })        
		}
	}
</script>

<style lang="less"> 
	.swiper-container {
	    width: 10rem;
	    height: 3.708333rem;
	    img{
	    	width: 10rem;
	    	height: 3.708333rem;
	    }
	}
</style>
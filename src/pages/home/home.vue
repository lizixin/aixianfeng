<template>
	<div class="home">
		<Top></Top>
		<Lunbo class= 'lunbo' :list = 'home_data[0]'></Lunbo>
		<router-view></router-view>
		<Gray height = '24px'></Gray>
		<Class_list></Class_list>
		<Gray></Gray>
		<Good_list></Good_list>
		<Gray></Gray>
		<List></List>
		<Hot_list v-for='i in count' :index='i' key="i"></Hot_list>
		<div class="b_margin"></div>
	</div>
</template>

<script>
	import Top from '../../components/top'
	import Lunbo from '../../components/lunbo'
	import Gray from '../../components/gray'
	import Class_list from '../../components/class_list'
	import List from '../../components/list'
	import Good_list from '../../components/goods_list'
	import Hot_list from '../../components/hot_list'
	export default{
		name : 'home',
		data () {
			return {
				home_data : [],
				count : 6
			}

		},
		components : {
			Top,
			Lunbo,
			Gray,
			Class_list,
			Good_list,
			List,
			Hot_list
		},
	}
</script>
<style lang='less'>
	.home{
		.lunbo{
			margin-top:1.444444rem;
		}
		.gray{
			width: 10rem;
			height: 0.333333rem;
		}
		.b_margin{
			margin-bottom: 1.5rem;
		}
		
	}
</style>
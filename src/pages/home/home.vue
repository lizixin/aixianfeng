<template>
	<div class="home">
		<Top></Top>
		<Lunbo class= 'lunbo'></Lunbo>
		<router-view></router-view>
		<Gray height = '24px'></Gray>
		<Class_list></Class_list>
	</div>
</template>

<script>
	import Top from '../../components/top'
	import Lunbo from '../../components/lunbo'
	import Gray from '../../components/gray'
	import Class_list from '../../components/class_list'
	export default{
		name : 'home',
		components : {
			Top,
			Lunbo,
			Gray,
			Class_list
		}
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
			background: ;
		}
	}
</style>
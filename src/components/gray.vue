<template>
	<div class="gray">
		
	</div>
</template>
<script>
	export default{
		name : 'gray',
		props : ['height'],
		data () {
			return {
				num : this.height
			}
		},
	}
</script>
<style lang="less">
	.gray{
		width: 10rem;
		height: num;
		background: #efefef;
	}
</style>
<template>
	<div class="class_list">
		<router-link to = ''>
			<figure v-for = 'item in list'>
				<img :src="item.activity.img" alt="" />
				<figcaption>
					<p>{{item.activity.name}}</p>
				</figcaption>
			</figure>
		</router-link>
		
	</div>
</template>

<script>
	export default{
		name : 'class_list',
		data () {
			return {
				list : []
			}
		},
		created () {
			this.$http.get('http://www.vrserver.applinzi.com/aixianfeng/apihome.php').then((res)=>{
				console.log(res.body.data.menu)
				this.list = res.body.data.menu;
			})
		}
	}
</script>
<style lang="less">
	.class_list{
		height: 5.555555rem;
		width: 10rem;
		display: flex;
		justify-content: space-around;
		align-content: center;
		flex-wrap:wrap ;
		a{
			display:inline-block;
			figure{
				
				img{
					height: 1.472222rem;
					width: 1.472222rem;
				}
			}
		}
	}
	
</style>
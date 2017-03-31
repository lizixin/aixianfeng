<template>
	<div class="class_list">
			<figure v-for = 'item in list'>
				<router-link to = ''>
					<img :src="item.activity.img" alt="" />
					<figcaption>
						<p>{{item.activity.name}}</p>
					</figcaption>
				</router-link>
			</figure>
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
			this.$http.get('/static/data/home.json').then((res)=>{
//				console.log(res.body.data.act_info[1].act_rows)
//				console.log(res.body.data.menu)
				this.list = res.body.data.act_info[1].act_rows;
			})
		}
	}
</script>
<style lang="less">
	.class_list{
		height: 2.777777rem;
		width: 10rem;
		display: flex;
		justify-content: space-around;
		align-content: center;
		flex-wrap:wrap;
		figure{
			width:2.5rem;
			height: 2.777777rem;
			/*padding: 0.416666rem 0 0 0;*/
			img{
				margin: 0.416666rem 0 0.208333rem 0;
				height: 1.4rem;
				width: 1.9rem;
			}
			figcaption{
				color: #232726;
				font-size: 0.361111rem;
			}
		}
		
	}
	
</style>
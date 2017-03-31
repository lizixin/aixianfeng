<template>
	<div class="goods_list">
		<ul>
			<li v-for = 'item in list'>
				<img :src="item.activity.img" alt="" />
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name : 'goods_list',
		data () {
			return {
				list : []
			}
		},
		created () {
			this.$http.get('/static/data/home.json').then((res) => {
//				console.log(res.body.data.act_info[3].act_rows)
				//将数据赋给data属性中的banner_list数组,用来在页面显示
				this.list = res.body.data.act_info[3].act_rows
			})
		}
	}
</script>

<style lang="less">
	.goods_list{
		width: 10rem;
		height: 4.541666rem;
		ul{
			display: flex;
			justify-content: space-around;
			li{
				border-right: 2px solid #e0e0e0;
				&:last-of-type{
					border: none;
				}
				img{
					width: 100%;
					height: 4.541666rem;
				}
			}
		}
		
	}
</style>
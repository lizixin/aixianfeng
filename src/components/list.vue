<template>
	<div class="list">
		<img :src="item" />
		<ul>
			<li v-for = 't_list in item1'>
				<img :src="t_list.cactivity_detail.img" alt="" />
			</li>
		</ul>
		<div>
			<!--<router-link to = ''  v-for='f_list in item2'>-->
				<figure v-for='f_list in item2'>
					<router-link to = ''>
						<img :src="f_list.cicons_detail.img" alt="" />
						<figcaption>
							<p>{{f_list.cicons_detail.name}}</p>
						</figcaption>
					</router-link>
				</figure>
			<!--</router-link>-->
		</div>
		<ol>
			<li v-for = 'w_list in item3'>
				<img :src="w_list.activity.img" alt="" />
			</li>
		</ol>
	</div>
</template>

<script>
	export default{
		name : 'list',
		data () {
			return {
				list : [],
				item : null,
				item1 : [],
				item2 : [],
				item3 : []
			}
		},
		created () {
			
				this.$http.get('/static/data/home.json').then((res)=>{
//					console.log(res.body.data.act_info[4].act_rows)
	//				console.log(res.body.data.menu)
					this.list = res.body.data.act_info[4].act_rows;
					
					this.item = this.list[0].act_rows[0].chead_detail.img
					this.item1 = this.list[1].act_rows;
					this.item2 = this.list[2].act_rows;
					this.item3 = [this.list[3].act_rows[0], this.list[3].act_rows[1]]
				
//					console.log(this.item3)
				})
			
		}
	}
</script>
<style lang="less">
	.list{
		width: 10rem;
		img{
			width: 10rem;
			height: 1.611111rem;
		}
		ul{
			height: 1.819444rem;;
			width: 100%;
			li{
				float: left;
				&:first-of-type{
					padding: 0 0.277777rem;
				}
				&:last-of-type{
					padding: 0 0.277777rem 0 0;
				}
				img{
					width: 4.569444rem;
					height: 1.819444rem;
				}
			}
		}
		div{
			display: flex;
			justify-content: space-around;
			align-content: center;
			figure{
				width: 2.5rem;
				padding: 0.416666rem 0 0 0;
				a{
					display: inline-block;
					img{
						width: 2.2rem;
						height: 1.527777rem;
					}
					figcaption{
						color: #1f1f1f;
						font-size: 0.361111rem;
					}
				}
				
			}
		}	
		ol{
			display: flex;
			justify-content: space-around;
			margin-top: 0.416666rem;
			li{
				width: 50%;
				height: 2.013888rem;
				img{
					width: 4.986111rem;
					height: 1.986111rem;
					border-top: 0.027777rem solid #e3e3e3;
					
					&:first-of-type{
						border-right: 0.027777rem solid #e3e3e3;
					}
				}
			}
		}
	}
</style>
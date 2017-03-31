<template>
	<div class="hot_list">
		<Gray></Gray>
		<h3 ref = 'h3'><router-link to = ''>更多   ></router-link>{{class1}}</h3>
		<img :src="img" alt="" />
		<div>
			<figure v-for ='good in goods'>
				<img :src="good.img" alt="" />
				<figcaption>
					<p>{{good.name}}</p>
					<p><span>精选</span></p>
					<p>{{good.specifics}}</p>
					<p>￥{{good.partner_price}}<span>￥{{good.market_price}}</span></p>
					<img src="../../static/imgs/add_icon.jpg" alt="" />
				</figcaption>
			</figure>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Gray from './gray'
	export default{
		name : 'hot_list',
		props:['index'],
		components : {
			Gray
		},
		data () {
			return {
				list:[],
				img:'',
				num : this.index-1,
				goods:[],
				class1:'',
				img1:''
			}
		},
		created () {
			
			this.$http.get('/static/data/home.json').then((res) => {
//				console.log(res.body.data.act_info[5])
				this.list = res.body.data.act_info[5].act_rows[this.num]
				this.img=this.list.activity.img
				this.goods = this.list.category_detail.goods
				this.class1 = this.list.category_detail.name
				this.img1 = this.list.category_detail.shuf_new_img
				this.$refs.h3.style.color = '#' + this.list.category_detail.category_color
			})
		}
	}
</script>

<style lang="less">
	.hot_list{
		h3{
			width: 10rem;
			height: 1.25rem;
			text-align: left;
			background: url('../../static/imgs/icon.jpg') no-repeat 0.277777rem center;
			text-indent: 0.736111rem;
			background-size: 0.263888rem 0.5rem;
			line-height: 1.25rem;
			font-size: 0.416666rem;
			color: #d89851;
			font-weight: bold;
			a{
				float: right;
				color: #b0b0b0;
				font-size: 0.361111rem;
				margin-right: 0.277777rem;
			}
		}
		img{
			width: 9.416666rem;
			height: 2.388888rem;
			margin: 0 auto 0.319444rem auto;
		}
		div{
			display: flex;
			justify-content: space-around;
			figure{
				position: relative;
				width: 3.33333rem;
				border-right:1px solid #dedede;
				&:last-of-type{
					border: none;
				}
				img{
					width: 2.777777rem;
					height: 2.361111rem;
				}
				figcaption{
					p{
						text-align: left;
						margin-bottom: 0.138888rem; 
						&:first-of-type{
							font-size: 0.361111rem;
							color: #2d3130;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							font-weight: bold;
							text-indent: 0.180555rem;
						}
						&:nth-of-type(2){
							padding-left:0.180555rem ;
							span{
								font-size: 0.305555rem;
								color: #e51419;
								padding: 0 0.069444rem;
								border: 1px solid #e51419;
								border-radius: 0.055555rem;
							}
						}
						&:nth-of-type(3){
							text-indent: 0.180555rem;
							color: #939393;
							font-size: 0.347222rem;
							font-weight: bold;
						}
						&:last-of-type{
							color: #f1401f;
							text-indent: 0.180555rem;
							font-size: 0.333333rem;
							span{
								color: #909090;
								text-decoration: line-through;
							}
						}
					}
					img{
						position: absolute;
						right: 0.361111rem;
						bottom: 0;
						width: 0.861111rem;
						height: 0.861111rem;
					}
				}
			}
		}
	}
</style>
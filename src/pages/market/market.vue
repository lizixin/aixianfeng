<template>
	<div class="market">
		<Top></Top>
		<div class="cartgroy_list">
			<ul>
				<li v-for='totalClass in category' @click='changeList($event)' :class_id = 'totalClass.id'>{{totalClass.name}}</li>
			</ul>
			<div>
				<ol>
					<li>全部分类<img src="../../../static/imgs/bottom_arrow.jpg" alt="" /></li>
					<li>综合服务<img src="../../../static/imgs/bottom_arrow.jpg" alt="" /></li>
				</ol>
				<Category class='Category' :classId = 'classId'></Category>
			</div>
		</div>
	</div>
</template>

<script>
	import Top from '../../components/top'
	import Category from '../../components/category'
	
	export default{
		name : 'market',
		data () {
			return {
				category : [],
				classId:'104749'
			}
		},
		methods:{
			changeList (e) {
				this.classId = e.target.getAttribute('class_id')
//				console.log(this)
				
			}
		},
		components : {
			Top,
			Category
		},
		created () {
				
			
			this.$http.get('/static/data/market.json').then((res) => {
//				console.log(res.body.categories)
				this.category = res.body.categories;
			})
		}
	}
</script>

<style lang='less'>
	.market{
		/*width: 10rem;*/
		.cartgroy_list{
			width: 100%;
			/*height: 12.013888rem;*/
			overflow:hidden;
			ul{
				float: left;
				/*width: 2.375rem;*/
				height: 15rem;
				overflow: scroll;
				background: #f8f8f8;
				li{
					width: 2.375rem;
					height: 1.25rem;
					color: #5e5e5e;
					font-size: 0.361111rem;
					font-weight: bold;
					line-height: 1.25rem;
					border-bottom: 0.027777rem solid #dedede;
					&:last-of-type{
						border-bottom: none;
					}
				}
			}
			div{
				float: right;
				ol{
					height:1.25rem;
					border-bottom:  0.027777rem solid #dedede;
					li{
						float: left;
						width: 3.777777rem;
						line-height: 1.25rem;
						color: #9a9a9a;
						font-size: 0.361111rem;
						background: url(../../../static/imgs/bg_line.jpg) no-repeat right center;
						background-size: 0.041666rem 0.555555rem;
						&:last-of-type{
							background: none;
						}
						img{
							width: 0.291666rem;
							height: 0.152777rem;
							margin-left: 0.138888rem;
						}
					}
				}
				.Category{
					overflow: scroll;
					height: 13.75rem;
				}
				
			}
			
		}
		
		/*div{
			float: right;
			width: 7.625rem;
			ul{
				/*width: 7.625rem;*/
			/*}
		}*/
	}
</style>
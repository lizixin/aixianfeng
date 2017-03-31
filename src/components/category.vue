<template>
	<div class="category_list">
		<figure v-for = '(item, index) in list'>
			<img :src="item.img" alt="" class="img1"/>
			<figcaption>
				<p>{{ item.name }}</p>
				<p><span>精选</span></p>
				<p>{{item.specifics}}</p>
				<p>{{item.partner_price}}<span>{{item.market_price}}</span></p>

			</figcaption>
			<img src="../../static/imgs/add_icon.jpg" alt="" class="img2" @click = 'add($event)' :index='index'/>
			
		</figure>
	</div>
</template>

<script>

	export default{
		name : 'category_list',
		props : ['classId'],
		data () {
			return {
				list : [],
				id : this.classId,
				goods : null

			}
		},
		methods : {
			loadData(){
				
				this.$http.get('/static/data/market.json').then((res) => {
					
					this.list = res.body.products[this.id]
				})
			},
			add (e) {
//				console.log(e.target.getAttribute('index'))
				console.log(this.$data.list[e.target.getAttribute('index')])
				this.goods = this.$data.list[e.target.getAttribute('index')]
				console.log(this.goods)
				this.addGoods(this.goods)
			}
		},
		watch : {
			classId(newValue,oldValue){
				this.id = newValue;
				this.loadData();
			}
		},
		created () {
			this.loadData();
		}
	}
</script>

<style lang="less">
	.category_list{
		figure{
			width: 7.513888rem;
			height: 2.777777rem;
			border-bottom: 2px solid #e0e0e0;
			position: relative;
			.img1{
				float: left;
				width: 1.9rem;
				height: 2.3rem;
				margin-left: 0.694444rem;
				margin-top: 0.138888rem;
				margin-right: 0.4rem;
			}
			figcaption{
				float: left;
				margin-top: 0.277777rem;
				
				p{
					text-align: left;
					width:3.472222rem; 
					&:first-of-type{
						font-size: 0.361111rem;
						color: #1f1f1f;
						font-weight: bold;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					&:nth-of-type(2){
						margin-top: 0.111111rem;
						span{
							font-size: 0.277777rem;
							color: #c71c15;
							padding: 0 0.069444rem;
							border: 1px solid #c71c15;
							border-radius: 3px;
						}
					}
					&:nth-of-type(3){
						margin-top: 0.208333rem;
						color: #8b8b8b;
						font-size: 0.361111rem;
					}
					&:last-of-type{
						font-size: 0.305555rem;
						color: #ff715f;
						margin-top: 0.138888rem;
						span{
							text-decoration: line-through;
							color: #8b8b8b;
							margin-left: 0.055555rem;
						}
					}
				
				}
			}
			.img2{
				position: absolute;
				right: 0.138888rem;
				bottom: 0.138888rem;
				width: 0.833333rem;
				height: 0.833333rem;
			}
		}
	}
</style>
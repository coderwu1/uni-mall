<template>
	<scroll-view scroll-y="true" class="scroll">
		<view class="top">
		        <view v-for="(item,index) in subcategories" :key="index">
		          <a :href="item.link">
		            <image :src="item.image" alt="">
		            <p>{{item.title}}</p>
		          </a>
				</view>
		</view>
		<view class="tabcontrol" :class="{isactive:isActive}">
		      <view v-for="(item,index) in titles" class="control-item"
		           :class="{active:index === currentIndex}" @click="activeColor(index)">
		        <span>{{item}}</span>
		      </view>
		</view>	
		<goods-list :goods="show"></goods-list>
	</scroll-view>
</template>

<script scoped>
	import GoodsList from '../../components/goods/GoodsList.vue'
	export default {
		props: {
		        subcategories:{
		          type: Array
		        },
				goods:{
				          type: Object
				      }
		},
		data() {
			return {
				titles:["流行","新款","精选"],
				currenStyle :'pop',
				isActive:false,
				currentIndex:0
			}
		},
		methods:{
			activeColor(index) {
				switch (index) {
				            case 0:
				              this.currenStyle='pop'
				              break
				            case 1: this.currenStyle='new'
				              break
				            case 2: this.currenStyle='sell'
				              break
				          }
				this.currentIndex=index
				
			}
		},
		components:{
			GoodsList
		},
		computed:{
		          show() {
		            return this.goods[this.currenStyle].data
		          }
		      }
	}
	
</script>

<style>
	.scroll{
	  overflow: hidden;
	  width: 295px;
	  height:100%;
	}
	  .top{
	    display: flex;
	    flex-wrap: wrap;
	    text-align: center;
	    margin-left: 10px;
	
	  }
	.top image{
	  width: 95px;
	  height: 95px;
	}
	.top p{
	  width: 95px;
	  color: #000;
	  white-space:nowrap;
	}
	a{
		text-decoration: none;
	}
	.tabcontrol{
	    display: flex;
	    text-align: center;
	    font-size: 15px;
	    height: 40px;
	    line-height: 40px;
	    background-color: #fff;
	  }
	  .control-item{
	    flex: 1;
	  }
	  .active {
	    color: #ff8198;
	  }
	  .active span{
	    border-bottom: 3px solid #ff8198;
	    padding: 5px;
	  }
	  .isactive{
		  position:fixed;
		  top:44px;
		  right: 0;
		  left: 0;
		  z-index: 9;
	  }
</style>

<template>
	<view class="home">
		<scroll-view scroll-y="true" class="content"
		 @scrolltolower="lower" @scroll="scroll">
		    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
		    	<swiper-item v-for="(item,index) in swipers">
		    		<a :href="item.link">
						<image :src="item.image"></image>
		    		</a>
		    	</swiper-item>
		    </swiper>
		    <view class="recommend">
		          <view v-for="item in recommends" class="recommend-item">
		            <a :href="item.link">
		    			<image :src="item.image"></image>
		    			<view>{{item.title}}</view>
		    		</a>
		          </view>
		     </view>
		     <view class="feature">
					<a href="https://act.mogujie.com/zzlx67">
					   <image src="../../static/img/recommend_bg.jpg" mode=""></image>
					</a>
		    </view>
			<view class="tabcontrol" :class="{isactive:isActive}">
			      <view v-for="(item,index) in titles" class="control-item"
			           :class="{active:index === currentIndex}" @click="activeColor(index)">
			        <span>{{item}}</span>
			      </view>
		    </view>	
			<goods-list :goods="show"></goods-list>
		</scroll-view>
		
		
	</view>
</template>

<script>
	import {getHomeGoods} from '../../network/home.js'
	import GoodsList from '../../components/goods/GoodsList.vue'
	export default {
		data() {
			return {
				swipers:[],
				recommends:[],
				currentIndex:0,
				titles:["流行","新款","精选"],
				goods: {
				              'pop': {page: 0, list: []},
				              'new': {page: 0, list: []},
				              'sell': {page: 0, list: []},
				            },
				currenStyle :'pop',
				isActive:false
			}
		},
		components:{
			GoodsList
		},
		onLoad() {
			this.getSwipers()
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		methods:{
			getSwipers () {
				this.$request({
					url:'/home/multidata'
				}).then(res => {
					this.swipers=res.data.data.banner.list
					this.recommends=res.data.data.recommend.list;
				})
				
			},
			getHomeGoods (type){
			       const page=this.goods[type].page+1
			       getHomeGoods (type,page).then(res =>{
			                 this.goods[type].list.push(...res.data.data.list)
			                 this.goods[type].page+=1 })
			},
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
			},
			lower() {
					   this.getHomeGoods(this.currenStyle)
					   
			},
			scroll(e) {
					this.isActive=e.detail.scrollTop >558
			}
				
		},
		computed:{
			show() {
				return this.goods[this.currenStyle].list
			}
		}
	}
</script>

<style scoped>
	.home{
		width: 100%;
		height: 100vh;
	}
	.content{
		height: calc(100%);
	}
	.home swiper{
			height: 380rpx;
			width: 750rpx;
		}
	.home swiper image{
		
			width: 100%;
			height: 100%;
	}
	 .recommend{
	    display: flex;
	    width: 100%;
	    text-align: center;
	    font-size: 12px;
	
	    padding: 10px 0 20px;
	    border-bottom: 10px solid #eee;
		
	  }
	  .recommend-item{
	    flex: 1;
	  }
	  .recommend-item image{
	    width: 70px;
	    height: 70px;
	    margin-bottom: 10px;
	  }
	  .recommend a{
		  text-decoration: none;
	  }
	  .recommend view{
	  		  color: #555555;
	  }
	  .feature image{
	      width: 100%;
		  
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

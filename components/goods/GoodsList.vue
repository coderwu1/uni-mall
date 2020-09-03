<template>
	<view class="goods" @click="native">
		<view class="goods-item" v-for="item in goods">
		<image :src="item.img || item.show.img"></image>
	      <view class="item-text">
	        <p>{{item.title}}</p>
	        <span class="price">{{item.price}}</span>
	        <span class="collect">{{item.cfav}}</span>
	      </view>
		</view>
	</view>
</template>

<script>
	export default {
		props :{
		        goods :{
		          type :Array,
		          default (){
		            return []
		          }
		        }
		      },
		methods:{
			native() {
				uni.navigateTo({
					url:'../../pages/detail/detail'
				})
			}
		}
	}
</script>

<style scoped>
	.goods{
		display: flex;
		flex-wrap:wrap;
		justify-content: space-around;
	}
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item image {
    width: 100%;
    border-radius: 5px;
  }

  .item-text {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .item-text p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .item-text .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .item-text .collect {
    position: relative;
  }

  .item-text .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../static/img/common/collect.svg") 0 0/14px 14px;
  }
</style>

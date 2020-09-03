<template>
		<scroll-view scroll-y="true" class="scroll">
			<view v-for="(item,index) in title" class="tabmenu-list-item" :class="{active: index===currentIndex}" @click="itemClick(index)" :key="index">
				<view>{{item.title}}</view>
			</view>
		</scroll-view>
</template>

<script>
	export default {
		data() {
		         return {
		           currentIndex:0
		         }
		      },
		props:{
			title:Array
		},
		methods:{
		        itemClick(index) {
		          this.currentIndex=index
		          this.$emit('selectItem',index)
		        }
		      }
	}
	
</script>

<style scoped>
	 .scroll{
	    overflow: 
		hidden;width: 80px;
		height: 100%;
	  }
	  .tabmenu-list-item{
	  width: 80px;
	  height: 60px;
	  background-color: #eeeeee;
	  color: #777777;
	  line-height: 60px;
	  text-align: center;
	}
	.active{
	    border-left: 4px solid #ff8198;
	    font-size: 16px;
	    color: #ff8198;
	  }
</style>

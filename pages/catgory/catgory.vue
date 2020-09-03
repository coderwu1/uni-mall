<template>
	<view class="catgory">
		<view class="content">
			<tab-menu :title="categories" @selectItem="selectItem"></tab-menu>
			<tab-content-category :subcategories="subcategories" :goods="goods"></tab-content-category>
		</view>
	</view>
</template>
<script>
	import {getCategory, getSubcategory, getCategoryDetail} from '../../network/catgory.js'
	import TabMenu from '../../components/tabmenu/TabMenu.vue'
	import TabContentCategory from '../../components/tabcontentcategory/tabContentCategory.vue'
	export default {
		data() {
			return {
				categories: [],
				subcategories:[],
				        goods: {
				          'pop': {},
				          'new': {},
				          'sell': {},
				        }
			}
		},
		components:{
			TabMenu,
			TabContentCategory
		},
		onLoad() {
			this.getCategories()
		},
		methods:{
			getCategories() {
			        getCategory().then(res => {
						
			          this.categories=res.data.data.category.list
			          this.getSubcategories(0)
			        })
			},
			getSubcategories (index) {
			        this.currentIndex=index
			        const maitKey=this.categories[this.currentIndex].maitKey
			        getSubcategory(maitKey).then(res => {
			          this.subcategories=res.data.data.list
			          this.getCategoriesDetail('pop')
			          this.getCategoriesDetail('new')
			          this.getCategoriesDetail('sell')
			        })
			      },
			      getCategoriesDetail(type) {
			        const miniWallkey=this.categories[this.currentIndex].miniWallkey
			        getCategoryDetail(miniWallkey, type).then(res => {
			          this.goods[type]=res
			        })
			      },
			      selectItem(index) {
			        this.getSubcategories(index)
			      }
		}
	}
</script>

<style scoped>
	 .content{
	    display: flex; 
		height:574px;
	  }
	  .catgory{
		  
	  }
</style>

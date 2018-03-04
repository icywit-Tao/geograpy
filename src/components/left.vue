<template>
    <div class="category" v-if="treeNode" :id="treeNode.id">
        <router-link :to="treeNode.link" class="category-name">{{treeNode.name}}</router-link>
        <!-- <div v-if="active===treeNode.id">11111</div> -->
        <div class="category-sub" v-if="!hideChildren">
            <template v-if="treeNode.childrentype==='1'">
                <tree :tree="subtree" :hideChildren="selected" :active="active" :dictionary="dictionary" v-for="subtree in treeNode.children" :key="subtree"/>
            </template>
        </div>
    </div>
</template>
<script>
export default {
  name:'tree',
  data(){
      return {
          debug:1,
      }
  },
  props:['tree','dictionary','active','hideChildren'],
  computed:{
      treeNode(){
          return this.dictionary[this.tree];
      },
      selected(){
          return this.active === this.tree;
      }
  },
  created(){
  }
}
</script>
<style lang="less" scoped>
    .category{
        padding: 5px;
        
    }
    .category-sub{
        padding-left:20px;
    }
    .add{
        padding-left: 10px;
    }
    .pic-wrap{
        background-color: #eee;
        .upload-pic{
            width:100px;
            height:100px;
        }
    }
</style>

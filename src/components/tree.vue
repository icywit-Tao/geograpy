<template>
    <div class="category" v-if="treeNode" :id="treeNode.id">
        <div class="category-name" @click="toggle(treeNode.id)">
            {{treeNode.name}}
            <span class="add" @click="addSession(treeNode.id)">添加</span>
            <span class="add" @click="delSession(treeNode.id)">删除</span>
        </div>
        <div v-if="active===treeNode.id&&!debug">11111</div>
        <div class="category-sub" v-if="treeNode.isShow||debug">
            <tree :tree="subtree" :active="active" :dictionary="dictionary" :addSession="addSession" :delSession="delSession" :toggle="toggle" v-for="subtree in treeNode.children" :key="subtree"/>
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
  props:['tree','dictionary','addSession','delSession','toggle','active'],
  computed:{
      treeNode(){
          return this.dictionary[this.tree];
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
</style>

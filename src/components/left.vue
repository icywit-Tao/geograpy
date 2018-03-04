<template>
    <div class="category" v-if="treeNode" :id="treeNode.id">
        <router-link :to="treeNode.link" class="category-name">{{treeNode.name}}</router-link>
        <img v-if="activeNode===treeNode.id" src="../assets/stick.png" class="active"></img>
        <div class="category-sub" v-if="isShow(tree)">
            <template v-if="treeNode.childrentype==='1'">
                <tree :tree="subtree" :dictionary="dictionary" :active="active" v-for="subtree in treeNode.children" :key="subtree"/>
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
  props:['tree','dictionary','active'],
  computed:{
      treeNode(){
          return this.dictionary[this.tree];
      },
      activeNode(){
          let temp = this.active[0];
          let tempNode = this.dictionary[temp];
          return tempNode.childrentype === '1'?temp:tempNode.parent;
      }
  },
  methods:{
      isShow(tree){
          return this.active.indexOf(tree) !==-1
      }
  },
  created(){
      window.category = this.dictionary;
  }
}
</script>
<style lang="less" scoped>
    .category{
        position: relative;
    }
    .category-name{
        display: block;
        font-size:30px;
        line-height:45px;
        width:1rem;
        margin: 10px 0 10px .15rem;
        background: rgba(0,0,0,.8);
        color: #eee;
        border-radius: 30px;
        text-align: center;
    }
    .category-sub{
        opacity: .8;
    }
    .active{
        width:.28rem;
        height:.5rem;
        display: block;
        margin-left:.5rem;
    }
    // .add{
    //     // padding-left: 10px;
    // }
    .pic-wrap{
        background-color: #eee;
        .upload-pic{
            width:100px;
            height:100px;
        }
    }
</style>

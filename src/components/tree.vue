<template>
    <div class="category" v-if="treeNode" :id="treeNode.id">
        <div class="category-name" @click="toggle(treeNode.id)">
            {{treeNode.name}}
            <span v-if="treeNode.childrentype==='1'" class="add" @click="addSession(treeNode.id)">添加</span>
            <span v-else class="add" @click="addSession(treeNode.id,1)">添加素材</span>
            <span class="add" @click="delSession(treeNode.id)">删除</span>
        </div>
        <div v-if="active===treeNode.id&&!debug">11111</div>
        <div class="category-sub" v-if="treeNode.isShow||debug">
            <template v-if="treeNode.childrentype==='1'">
                <tree :tree="subtree" :active="active" :dictionary="dictionary" :delResource="delResource" :addSession="addSession" :delSession="delSession" :toggle="toggle" v-for="subtree in treeNode.children" :key="subtree"/>
            </template>
            <template v-else>
                <template v-for="pic in treeNode.children">
                    <li class="pic-wrap">
                        <img :src="`/dist/pics/${treeNode.id}/${pic.file}`" class="upload-pic"/>
                        <br/>
                        <span>{{pic.desc}}</span>
                        <br/>
                        <span class="add" @click="delResource(treeNode.id,pic.file)">删除</span>
                    </li>
                </template>
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
  props:['tree','dictionary','addSession','delSession','toggle','active','delResource'],
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
        overflow: hidden;
        padding-left:20px;
    }
    .add{
        padding-left: 10px;
    }
    .pic-wrap{
        float: left;
        background-color: #ccc;
        .upload-pic{
            width:100px;
            height:100px;
        }
    }
</style>

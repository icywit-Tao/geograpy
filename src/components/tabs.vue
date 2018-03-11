<template>
  <ul v-if="tabs && tabs.length">
      <li v-for="tab in tabs" :key="tab" :class="activeType==tab?'active':''"@click=change(tab)>{{tabName(tab)}}</li>
  </ul>
</template>
<script>
export default {
  props:['tabInfo','activeType','change'],
  computed:{
      tabs(){
          return Object.keys(this.tabInfo)
      }
  },
  methods:{
      tabName(type){
          let name;
          switch(type){
              case '1':
                name="教学用图";
                break;
              case '2':
                name="教学动图";
                break;
              case '3':
                name="教学视频";
                break;
          }
          return name
      }
  }
}
</script>
<style lang="less" scoped>
    ul{
        // background: rgba(0,0,0,.35);
        
        li{
            float: left;
            font-size: 20px;
            line-height: 30px;
            padding: 0 8px;
            color: #ccc;
            &.active{
                color: #321;
            }
            cursor: pointer;
        }
    }
</style>

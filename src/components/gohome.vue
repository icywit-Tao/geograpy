<template>
    <router-link to="/">
        <div class="back-btn">{{name}}</div>
    </router-link>
</template>
<script>
export default {
    data(){
        return{
            name:'< Home 返回首页 >'
        }
    }
}
</script>
<style lang="less" scoped>
    .back-btn{
        width:208px;
        height:37px;
        border:2px solid #000;
        background-color: rgba(0,0,0,.58);
        color:#fff;
        text-align: center;
        line-height: 37px;
        font-size: 18px;
    }
</style>



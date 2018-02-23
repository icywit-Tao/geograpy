<template>
    <div class="nav-container">
        <span>您的位置：</span>
        <template v-if="navs.list.length">
            <template v-for="(nav,index) in navs.list">
                <template v-if="index">></template>
                <router-link :to="`${navs.base}/${nav.link}`">{{nav.name}}</router-link>
            </template>
        </template>
    </div>
</template>
    
<script>
export default {
    props:['navs']
}
</script>
<style lang="less" scoped>
    .nav-container{
        color:#000;
        font-size: 25px;
        a:link,a:visited,a:hover,a:active{
            color:#000;
            
            font-weight: bold;
        }
    }
</style>
<template>
    <div v-if="isShow">
        <div class="mask" @click="addform(0)"></div>
        <div class="content">
            <label for="name">栏目名:</label>
            <input type="text" id="name" v-model="form.name">
            <br/>
            <label for="sub">子目录：</label>
            <input type="radio" name="sub" value="1" v-model="form.sub">有
            <input type="radio" name="sub" value="0" v-model="form.sub">无
            <br/>
            <input type="button" id="submit" value="添加" @click="add(form)">

        </div>
    </div>
</template>
<script>
export default {
    props:['isShow','addform'],
    data(){
        return {
            form:{
                name:'',
                sub:'1'
            }
        }
    },
    methods:{
        add(form){
            this.addform(1,form)
            this.form = {
                name:'',
                sub:'1'
            }
        }
    }
}
</script>
<style lang="less">
    .mask{
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color: rgba(0,0,0,.52);
        z-index:100;
    }
    .content{
        width:300px;
        height:300px;
        position: fixed;
        top:50%;
        left:50%;
        margin-top: -150px;
        margin-left:-150px;
        z-index:101;
        background-color: #fff;
    }
    #submit{
        display: block;
        width:80px;
        height:40px;
        font-size: 20px;
        margin-left: 30px;
    }
</style>

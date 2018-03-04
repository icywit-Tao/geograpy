<template>
    <div v-if="isShow">
        
        <div class="mask" @click="addform(0)"></div>
        <div class="content" v-if="formtype">
            <label for="type">素材类型</label>
            <input type="radio" name="type" value="1" v-model="form.type">图片
            <input type="radio" name="type" value="0" v-model="form.type">视频
            <br/>
            <input type="file" name="" id="" multiple @change="filechange">
            <br/>
            <div class="pic-wrap" v-if="form.files">
                <template v-for="file in form.files">
                <img :src="getpath(file)" alt="" class="upload-pic"/>
                <label for="desc">描述:</label>
                <input type="text" name="desc" id="" v-model="file.desc">
                </template>
            </div>
            
            <input type="button" id="submit" value="添加" @click="add(form,2)">
        </div>
        <div class="content" v-else>
            <label for="name">栏目名:</label>
            <input type="text" id="name" v-model="form.name">
            <br/>
            <label for="sub">子目录：</label>
            <input type="radio" name="sub" value="1" v-model="form.sub">有
            <input type="radio" name="sub" value="0" v-model="form.sub">无
            <br/>
            <input type="button" id="submit" value="添加" @click="add(form,1)">
        </div>
    </div>
</template>
<script>
export default {
    props:['isShow','addform','formtype'],
    data(){
        return {
            form:{
                name:'',
                sub:'1',
                type:'1',
                files:[]
            }
        }
    },
    computed:{

    },
    methods:{
        add(form,type){
            this.addform(type,form)
            this.reset();
        },
        filechange(e){
            this.form.files = e.target.files;
        },
        reset(){
            this.form = {
                name:'',
                sub:'1',
                type:'1',
                files:[]
            }
        },
        getpath(file){
            return URL.createObjectURL(file);
        }
    }
}
</script>
<style lang="less" scoped>
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
        width:600px;
        height:600px;
        position: fixed;
        top:50%;
        left:50%;
        margin-top: -150px;
        margin-left:-150px;
        z-index:101;
        background-color: #fff;
        .pic-wrap{
            background-color: #eee;
            max-height:450px;
            overflow: scroll;
            .upload-pic{
                width:100px;
                height:100px;
            }
        }
    }
    #submit{
        display: block;
        width:80px;
        height:40px;
        font-size: 20px;
        margin-left: 30px;
    }
</style>

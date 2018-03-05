<template>
    <div class="category-container">
        <tree v-if="category" :mask="1" :active="active":tree="tree" :toggle="toggle" :dictionary="category" :addSession="addSession" :delSession="delSession"></tree>
        <addform :isShow="isShow" :addform="addform" :formtype="formtype"></addform>
        <div class="width-height">{{width}}*{{height}}</div>
    </div>
</template>
<script>
import addform from '../components/form';
import tree from '../components/tree';
import {fetch,fetchdata} from '../utils/fetch';
export default {
    data(){
        return {
            category:'',
            tree:'root',
            active:'',
            isShow:'',
            formtype:'',
            width,
            height
        }
    },
    created(){
        fetch('/api/getCategory').then(res=>{
            console.log(res);
            this.category = res;
        })
        this.width = document.documentElement.clientWidth;
        this.height=document.documentElement.clientHeight;
    },
    computed:{
        
    },
    methods:{
        addSession(id,type){
            this.isShow = id;
            this.formtype = type;
        },
        delSession(id){
            fetch('/api/delSession',null,{
                id: id
            }).then(res=>{
                this.category = res;
            })
        },
        addform(isShow,form){
            if(isShow && form.name){
                fetch('/api/addSession',null,{
                    parent:this.isShow,
                    name:form.name,
                    childrentype:form.sub
                }).then(res=>{
                    this.category = res;
                })
            }else if(isShow === 2){
                let data = new FormData();
                for(let i=0, len=form.files.length;i<len;i++){
                    data.append(`pic${i}`,form.files[i]);
                    data.append(`descpic${i}`,form.files[i].desc);
                }
                data.append('parent',this.isShow);
                data.append('type',form.type);
                fetchdata('/api/addResource',null,data)
            }
            this.isShow =false;
        },
        toggle(id){
            let tree =this.category[id];
            let parent =this.category[tree.parent];
            parent&& this.hideTree(parent.children.filter(key=>key!==id));
            tree.isShow =true;
            this.category = {...this.category};
            this.active =id;
        },
        hideTree(trees){
            for(let id of trees){
                let tree = this.category[id];
                tree.isShow =false;
                this.hideTree(tree.children);
            }
        }
    },
    components:{
        tree,
        addform
    }
}
</script>
<style lang="less" scoped>
    .category-container{
        height:100%;
        font-size: 16px;
        overflow: scroll;
    }
    .width-height{
        position: fixed;
        top:80px;
        right:50px;
    }
</style>

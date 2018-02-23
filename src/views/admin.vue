<template>
    <div class="category-container">
        <tree v-if="category" :mask="1" :active="active":tree="tree" :toggle="toggle" :dictionary="category" :addSession="addSession" :delSession="delSession"></tree>
        <addform :isShow="isShow" :addform="addform"></addform>
    </div>
</template>
<script>
import addform from '../components/form';
import tree from '../components/tree';
import {fetch} from '../utils/fetch';
export default {
    data(){
        return {
            category:'',
            tree:'root',
            active:'',
            isShow:'',
        }
    },
    created(){
        fetch('/api/getCategory').then(res=>{
            console.log(res);
            this.category = res;
        })
    },
    computed:{
        
    },
    methods:{
        addSession(id){
            this.isShow = id;
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
                    name:form.name
                }).then(res=>{
                    this.category = res;
                })
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
    
</style>

<template>
    <div class="main-container">
        <div class="top-container">
            <img src="../assets/main-title.png" alt="">
            <div>Geography teaching image library of Nanjing Normal University</div>
        </div>
        <div class="content">
            <div class="left-wrap">
                <div class="left-content">
                    <left :dictionary="category" :tree="tree" :active="active"></left>
                </div>
                
            </div>
            <div class="nav-wrap">
                <navbar :navs="navs"></navbar>
            </div>
            <div class="tabs-wrap" v-if="lastNode">
                <tabs :tabInfo="tabInfo" :activeType="activeType" :change="tabChange" ></tabs>
            </div>
            <div class="pic-wrap last" v-if="lastNode"> 
                <pictures :pics="pics" ></pictures>
            </div>
            <div class="pic-wrap" v-else> 
                <img class="nothing" src="../assets/nothing.png" alt="" >
            </div>
            
            
            
            
        </div>
        <div class="gohome-wrap">
            <gohome></gohome>
        </div>
        
    </div>
</template>
<script>
import navbar from '../components/navbar';
import gohome from '../components/gohome';
import left from '../components/left.vue';
import pictures from '../components/pictures';
import tabs from '../components/tabs';
import {fetch} from '../utils/fetch';
export default {
    data(){
        return {
            pages:{},
            navs:[],
            pics:{},
            active:[],
            lastNode:'',
            activeType:'1',
            picInfo:{
                id:'',
                list:'',
            }
        }
    },
    created(){
        this.init();
        this.$watch('$route',(to,from)=>{
            this.init();
        })
    },
    methods:{
        init(){
            this.navs = this.$route.meta.navs;
            this.active =global.active;
            this.lastNode=this.last
            this.pics=this.picInfo;
            this.lastNode &&this.tabChange('1');
        },
        tabChange(type){
            this.activeType = type;
            this.picInfo.id = this.active[0];
            this.picInfo.list = this.tabInfo[this.activeType];
        }
    },
    computed:{
        category(){
            return global.category;
        },
        tree(){
            return this.$route.params.grade
        },
        last(){
            return this.category[this.active[0]].childrentype !=='1'
        },
        tabInfo(){
            let tabs={};
            if(this.lastNode){
                let id = this.active[0];
                let list = this.category[this.active[0]].children;
                for ( let pic of list){
                    let type =pic.type;
                    if(tabs[type]){
                        tabs[type].push(pic);
                    }else{
                        tabs[type] =[pic];
                    }
                }
            }
            return tabs;
        }
    },
    components:{
        navbar,
        gohome,
        pictures,
        left,
        tabs
    }
}
</script>
<style lang="less" scoped>
    @import '../less/common.less';
    .main-container{
        position: relative;
        .top-container{
            width:100%;
            height:1rem*@diff;
            background-color:rgba(0,0,0,.34);
            border-bottom: 6px solid #000;
            position: relative;
            img{
                width:661px;
                height:63px;
                position: absolute;
                bottom:20px;
                left:20px;
            }
            div{
                font-size: 20px;
                position: absolute;
                left:45px;
                bottom: 10px;

            }
        }
        .content{
            border-top:3px solid #000;
            margin-top: 8px;
            position: relative;
            .left-wrap{
                position: absolute;
                width:1.3rem;
                height:4rem;
                background-color:rgba(0,0,0,.34);
                left:0;
                top:0;
                .left-content{
                    padding: 10px 0;
                    height:2.5rem;
                    overflow: scroll;
                }
            }
            .nav-wrap{
                position: absolute;
                left:1.53rem;
                top:.08rem;
            }
            .tabs-wrap{
                position: absolute;
                left:1.53rem;
                top:.38rem;
            }
            .pic-wrap{
                &.last{
                    margin-top:30px;
                }
                position: absolute;
                left:1.53rem;
                top:.32rem;
                height:2.3rem;
                overflow-y:scroll;
                width:6rem;
                .nothing{
                    display: block;
                    margin: .2rem 0 0 1.6rem;
                    width:3rem;
                    height:2rem;
                }
            }
        }
        .gohome-wrap{
            position: fixed;
            right:.25rem;
            bottom:.25rem*@diff;
        }
    }
</style>







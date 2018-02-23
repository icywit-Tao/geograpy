<template>
    <div class="main-container">
        <div class="top-container">
            <img src="../assets/main-title.png" alt="">
            <div>Geography teaching image library of Nanjing Normal University</div>
        </div>
        <div class="content">
            <div class="nav-wrap">
                <navbar :navs="navs"></navbar>
            </div>
            <div class="pic-wrap">
                <pictures :pics="pics"></pictures>
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
import pictures from '../components/pictures';
export default {
    data(){
        return {
            pages:{},
            navs:[],
            pics:[],
        }
    },
    created(){
        this.pages = {...this.$route.params};
        this.navs = {
            base:'/junior',
            list:[{
                name:'初中部分',
                link:'',
            },{
                name:'地球与地图',
                link:'123',
            },{
                name:'地图',
                link:'333',
            }]
        }
        this.pics=[
            {
                src:'../assets/001.jpg',
                desc:'001.jpg001.jpg001.jpg001.jpg001.jpg001.jpg001.jpg001.jpg001.jpg001.jpg'
            },{
                src:'../assets/006.jpg',
                desc:'006.jpg006.jpg006.jpg006.jpg006.jpg'
            },{
                src:'../assets/008.jpg',
                desc:'008.jpg'
            },{
                src:'../assets/009.jpg',
                desc:'009.jpg'
            },{
                src:'../assets/011.jpg',
                desc:'011.jpg'
            },{
                src:'../assets/017.jpg',
                desc:'017.jpg'
            },{
                src:'../assets/043.jpg',
                desc:'043.jpg'
            },{
                src:'../assets/048.jpg',
                desc:'048.jpg'
            },{
                src:'../assets/049.jpg',
                desc:'049.jpg'
            },{
                src:'../assets/050.jpg',
                desc:'050.jpg'
            },{
                src:'../assets/051.jpg',
                desc:'051.jpg'
            },{
                src:'../assets/057.jpg',
                desc:'057.jpg'
            },{
                src:'../assets/061.jpg',
                desc:'061.jpg'
            },{
                src:'../assets/075.jpg',
                desc:'075.jpg'
            },{
                src:'../assets/075.jpg',
                desc:'075.jpg'
            },{
                src:'../assets/075.jpg',
                desc:'075.jpg'
            },{
                src:'../assets/075.jpg',
                desc:'075.jpg'
            },{
                src:'../assets/075.jpg',
                desc:'075.jpg'
            },{
                src:'../assets/075.jpg',
                desc:'075.jpg'
            },{
                src:'../assets/075.jpg',
                desc:'075.jpg'
            },{
                src:'../assets/075.jpg',
                desc:'075.jpg'
            },{
                src:'../assets/075.jpg',
                desc:'075.jpg'
            },{
                src:'../assets/075.jpg',
                desc:'075.jpg'
            },{
                src:'../assets/075.jpg',
                desc:'075.jpg'
            },{
                src:'../assets/075.jpg',
                desc:'075.jpg'
            },{
                src:'../assets/075.jpg',
                desc:'075.jpg'
            },
        ]
    },
    components:{
        navbar,
        gohome,
        pictures
    }
}
</script>
<style lang="less" scoped>
    .main-container{
        position: relative;
        .top-container{
            width:100%;
            height:175px;
            background-color:rgba(0,0,0,.58);
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
            padding-left:550px;
            .nav-wrap{

            }
            .pic-wrap{
                height:650px;
                overflow-y:scroll; 
            }
        }
        .gohome-wrap{
            position: fixed;
            right:50px;
            bottom:50px;
        }
    }
</style>







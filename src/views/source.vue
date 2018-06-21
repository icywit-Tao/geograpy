<template>
    <div class="source-wrap">
        <div class="title">本站图片均来自网络，如有侵权请告知</div>
        <ul>
            <li v-for="(item,index) in list">
                <div :class="`${(index%4+Math.floor(index/4))%2?'item':''} ${index}`">{{item.name}}</div>
            </li>
        </ul>
        <div class="gohome-wrap">
            <gohome></gohome>
        </div>
    </div>
</template>
<script>
import gohome from '../components/gohome';
export default {
    data(){
        return {
            list:[
                {
                    name:'日本地理百科',
                    link:'',
                    pic:'',
                },{
                    name:'地理科学网',
                    link:'',
                    pic:'',
                },{
                    name:'中国百科网',
                    link:'',
                    pic:'',
                },{
                    name:'中国天气',
                    link:'',
                    pic:'',
                },{
                    name:'七洲',
                    link:'',
                    pic:'',
                },{
                    name:'中国网-中国国情',
                    link:'',
                    pic:'',
                },{
                    name:'地之图',
                    link:'',
                    pic:'',
                },{
                    name:'百度百科',
                    link:'',
                    pic:'',
                },{
                    name:'360百科',
                    link:'',
                    pic:'',
                },{
                    name:'21世纪教育网',
                    link:'',
                    pic:'',
                },{
                    name:'教育联展网',
                    link:'',
                    pic:'',
                },{
                    name:'中国教育出版社',
                    link:'',
                    pic:'',
                },{
                    name:'人民教育出版社',
                    link:'',
                    pic:'',
                },{
                    name:'精英家教网',
                    link:'',
                    pic:'',
                },{
                    name:'上海外教网',
                    link:'',
                    pic:'',
                },{
                    name:'厦门家教网',
                    link:'',
                    pic:'',
                },{
                    name:'学而思网校',
                    link:'',
                    pic:'',
                },{
                    name:'满分5学习网',
                    link:'',
                    pic:'',
                },{
                    name:'沪江中学',
                    link:'',
                    pic:'',
                },{
                    name:'乐乐课堂',
                    link:'',
                    pic:'',
                },{
                    name:'魔方格',
                    link:'',
                    pic:'',
                },{
                    name:'英才苑',
                    link:'',
                    pic:'',
                },{
                    name:'菁优网',
                    link:'',
                    pic:'',
                },{
                    name:'天涯社区',
                    link:'',
                    pic:'',
                },{
                    name:'基本地图库',
                    link:'',
                    pic:'',
                },{
                    name:'互动百科',
                    link:'',
                    pic:'',
                },{
                    name:'360问答',
                    link:'',
                    pic:'',
                },{
                    name:'百度知道',
                    link:'',
                    pic:'',
                },{
                    name:'无忧文档',
                    link:'',
                    pic:'',
                },{
                    name:'搜狗图片',
                    link:'',
                    pic:'',
                },{
                    name:'花瓣网',
                    link:'',
                    pic:'',
                },{
                    name:'百度图片',
                    link:'',
                    pic:'',
                },{
                    name:'360doc个人图书馆',
                    link:'',
                    pic:'',
                },{
                    name:'地理教师网-中国地图之家',
                    link:'',
                    pic:'',
                },{
                    name:'人民教育出版社课程教材研究所',
                    link:'',
                    pic:'',
                }
            ]
        }
    },
    components:{
        gohome
    }
}
</script>
<style lang="less" scoped>
    @import '../less/common.less';
    .source-wrap{
        font-size: 20px;
        .title{
            text-align: center;
            font-size: 35px;
            line-height: 50px;
            margin:10px;
            
        }
        ul{
            width:900px;
            margin: 0 auto;
            overflow-y: scroll;
            display: flex;
            flex-wrap: wrap;
            li{
                margin: 0px 25px;
                min-width: 170px;
                .item{
                    opacity: .4;
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

<template>
    <div class="index-container">
        <img src="../assets/earth-index.png" class="pic-earth"/>
        <img src="../assets/title.png" class="title"/>
        <div class="subtitle">Geography teaching image library of Nanjing Normal University</div>
        <ul>
            <li class="junior">
                <router-link class="link" to="/junior">
                    <img src="../assets/junior.png"/>
                </router-link>
            </li>
            <li class="senior">
                <router-link class="link" to="/senior">
                    <img src="../assets/senior.png"/>
                </router-link>
            </li>   
        </ul>
        <div class="source-wrap">
            <router-link to="/source" class="source">图片来源</router-link>
        </div>
    </div>
    
</template>
<script>
export default {
  data(){
      return {
        txt:''
      }
  },
  created(){
      global.a='cccc';
  }
}
</script>
<style lang="less" scoped>
    @import '../less/common.less';
    .index-container{
        width:1440px;
        height:100%;
        position: absolute;
        top: 0;
        left:50%;
        margin-left: -720px;
        .pic-earth{
            width:3rem;
            height:1.5rem*@diff;
            position: absolute;
            top:.6rem*@diff2;
            left:50%;
            margin-left:-1.4rem;
        }
        .title{
            width:7.5rem;
            height:.82rem*@diff;
            position: absolute;
            top:1.85rem*@diff;
            left:50%;
            margin-left:-3.75rem;
        }
        .subtitle{
            position: absolute;
            font-size: .3rem*@diff2;
            text-align: center;
            width:100%;
            top:2.5rem*@diff;
        }
        ul{
            position: absolute;
            top:2.8rem*@diff;
            width:3.5rem;
            left:50%;
            margin-left: -1.74rem;
            li{
                height:.5rem; 
                margin:.17rem 0;
                text-align: center;
                position: relative;
                &:before{
                    content:'';
                    position: absolute;
                    width:.56rem;
                    height:.6rem;
                    top:-.10rem;
                    left:.2rem;
                    background-size: 100%;
                }
                .link{
                    margin-left:.9rem;
                    display: block;
                    width:1.7rem;
                    height:.5rem*@diff;
                    border-radius:.25rem*@diff;
                    background-color:#000;
                    position: relative;
                    left:20px;
                    img{
                        position: absolute;
                        left:0;
                        top:0;
                        width:1.7rem;
                        height:.5rem*@diff;
                    }
                }
                &.junior{
                    &:before{
                        background-image: url('../assets/icon_male.png');
                    }
                }
                &.senior{
                    &:before{
                        background-image: url('../assets/icon_female.png');
                    }
                    img{
                        width:1.8rem;
                    }
                }
            }
        }
        .source-wrap{
            position: fixed;
            right:.25rem;
            bottom:10px;
            width:120px;
            background-color: rgba(0,0,0,.6);
            overflow: hidden;
            .source{
                display: block;
                padding: 5px;
                font-size: 26px;
                color:#dcd;
            }
        }
    }
</style>




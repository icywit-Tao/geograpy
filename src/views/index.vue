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
    .index-container{
        width:1440px;
        position: absolute;
        top:0;
        left:50%;
        margin-left: -720px;
        .pic-earth{
            width:563px;
            height:261px;
            position: absolute;
            top:110px;
            left:50%;
            margin-left:-244px;
        }
        .title{
            width:1238px;
            height:82px;
            position: absolute;
            top:350px;
            left:101px;
        }
        .subtitle{
            position: absolute;
            font-size: 35px;
            text-align: center;
            width:1440px;
            top:440px;
        }
        ul{
            position: absolute;
            top:537px;
            li{
                height:100px; 
                margin:29px 0;
                width:1440px;
                position: relative;
                text-align: center;
                &:before{
                    content:'';
                    position: absolute;
                    width:120px;
                    height:120px;
                    top:-10px;
                    left:430px;
                    background-size: 100%;
                }
                .link{
                    display: inline-block;
                    width:291px;
                    height:100px;
                    border-radius:50px;
                    background-color:#000;
                    position: relative;
                    left:20px;
                    img{
                        position: relative;
                        top:10px;
                        width:290px;
                        height:80px;
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
                        top:10px;
                        width:310px;
                    }
                }
            }
        }
    }
</style>




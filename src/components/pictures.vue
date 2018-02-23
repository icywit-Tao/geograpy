<template>
    <div class="pic-container">
        <template v-if="total">
            <ul class="pic-list">
                <li v-for="(pic,index) in pics" @click="showPhoto(index)">
                    <img :src="pic.src" alt=""/>
                    <p>{{pic.desc}}</p>
                </li>
            </ul>
            <div class="wrap" :class="{hide:ishide}">
                <img src="../assets/icon_left.png" alt="" class="prev" @click="showPhoto(0,-1)">
                <div class="photo-wrap">
                    <div class="close" @click="showPhoto(-1)">
                        <img src="../assets/icon_close.png" alt="">
                    </div>
                    <img :src="photo&&photo.src" alt="">
                    <div class="desc-wrap">
                        <p>{{photo&&photo.desc}}</p>
                        <div class="count">{{picnum}}/{{total}}</div>
                    </div>
                </div>
                <img src="../assets/icon_right.png" alt="" class="next" @click="showPhoto(0,1)">
            </div>
        </template>
        
    </div>
    
    
</template>
<script>
export default {
    props:['pics'],
    data(){
        return{
            active:-1
        }
        
    },
    computed:{
        ishide(){
            return this.active===-1;
        },
        total(){
            return this.pics.length;
        },
        photo(){
            return this.pics[this.active];
        },
        picnum(){
            return this.active+1
        }
    },
    methods:{
        showPhoto(index,add){
            this.active = add?(this.total+add+this.active)%this.total:index;
        }
    }
}
</script>
<style lang="less" scoped>
    .pic-container{
        .pic-list{
            width:1000px;
            padding:30px;
            li{
                position: relative;
                width:188px;
                height:188px;
                margin:10px 5px;
                float: left;
                img{
                    position: absolute;
                    left: 21px;
                    top:0;
                    width:145px;
                    height:145px;
                }
                p{
                    width:180px;
                    position: absolute;
                    left:4px;
                    top:153px;
                    text-align: center;
                    font-size: 19px;
                    line-height: 21px;
                    height:43px;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    word-break: break-all;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                
            } 
        }
        .wrap{
            position: fixed;
            top:0;
            left:0;
            right:0;
            bottom:0;
            z-index:100;
            background-color: rgba(0,0,0,.2);
            &.hide{
                display: none;
            }
        }
        .photo-wrap{
            position: fixed;
            top:0;
            bottom:0;
            width:830px;
            left:50%;
            margin-left:-315px;
            background-color: #000;
            overflow: hidden;
            .close{
                width:63px;
                height:63px;
                overflow: hidden;
                background-color: #929292;
                border-radius: 50%;position: absolute;
                top:5px;
                right:5px;
            }
            img{

            }
            .desc-wrap{
                position: absolute;
                width:830px;
                box-sizing: border-box;
                bottom:20px;
                height:160px;
                z-index:102;
                padding: 0 20px;
                font-size: 32px;
                color: #fff;
                line-height: 40px;
                word-break: break-all;
                p{
                    height:120px;
                }
                .count{
                    height:40px;
                    text-align: center;
                }
            }
            
        }
        .prev,.next{
            width:104px;
            height:94px;
            position: fixed;
            top:50%;
            margin-top:-47px;
            left:50%;
            &.prev{
                margin-left: -535px;
            }
            &.next{
                margin-left:630px;
            }
        }
    }
</style>



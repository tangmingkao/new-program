/*
 * @Author: tonyTang 
 * @Date: 2018-12-12 19:27:48 
 * @Last Modified by: tonyTang
 * @Last Modified time: 2018-12-13 17:40:17
 */

<template>
  <div id="feed-back">
       <div class="feed-back-container">
            <div class="feed-back-header">
                <OtherHeader></OtherHeader>
            </div>
            <div class="feed-back-main">
                <div class="feedback-banner">
                    <div class="first-title">意见反馈</div>
                </div>
                <div class="feedback-contanier">
                    <div class="container-title">意见反馈</div>
                    <div class="container-textarea">
                        <textarea  type="text" v-model="textAreaContent" placeholder="请输入您的反馈意见"></textarea>
                        <div class="textarea-count">0/600</div>
                    </div>
                    <div class="feedback-second">
                        <span class="second-icon">*</span>
                        <span class="second-text">请选择问题标签</span>
                    </div>
                    <div class="feedback-label-container">
                        <div class="label-item">云端钱包</div>
                        <div class="label-item">HD钱包</div>
                        <div class="label-item">账户</div>
                        <div class="label-item">提币</div>
                        <div class="label-item">企业级冷钱包</div>
                        <div class="label-item">合作问题</div>
                    </div>
                    <div class="feedback-third">
                        <span class="third-icon">*</span>
                        <span class="third-text">联系电话</span>
                    </div>
                    <div class="third-telephone">
                        <input  type="text" placeholder="请输入您的联系电话，以便我们确认相关细节"  />
                    </div>
                    <div class="feedback-four-title">附件</div>
                    <div class="feedback-upload-container">
                        <el-upload
                        class="upload-demo"
                        drag
                        action="http://www.baidu.com"
                        multiple>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        </el-upload>
                    </div>
                </div>
                <div class="feedback-button">确认提交</div>
            </div>
            <div class="feed-back-footer">
                <Footer2></Footer2>
            </div>
       </div>
  </div>
</template>

<script>
import OtherHeader from "../components/OtherHeader.vue";
import Footer2 from "../components/Footer2.vue";
export default {
    name: 'feedBack',
    data() {
        return {
            textAreaContent: "",
        } 
    },
    components: {
        OtherHeader,
        Footer2,
    },
    created() {
        console.log('about us');

    },
}
</script>

<style  lang="css" scoped>
@import "../assets/css/public";

.feed-back-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
}
.feed-back-main {
    background-color: rgba(247,247,247,1);;
    color: #333;
    text-align: center;
    width: 100%; 
} 
.feedback-banner{
    height: 5rem;
    width: 100%;
    background: url("../assets/image/feedback/feedback.png") no-repeat;
    background-size: 100% 100%;
    padding-top: 1px;
}
.first-title{
    width: 1.7rem;
    height: .4rem;
    line-height: .4rem;
    margin: 2.8rem auto 1.8rem auto;
    text-align: center;
    font-size: .4rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(254,254,254,1);
}
.feedback-contanier{
    /* height: 9.8rem; */
    width: 11.2rem;
    padding-left: .4rem;
    padding-right: .4rem;
    padding-bottom: .8rem;
    margin: 0 auto;
    margin-top: .5rem;
    background:rgba(255,255,255,1);
}
.container-title{
    height: .66rem;
    line-height: .66rem;
    margin-top: .3rem;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid rgba(234,234,234,1);
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    font-size: .24rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(33,30,56,1);
}
.container-textarea{
    width: 10.8rem;
    height: 2.72rem;
    padding: .2rem .2rem .2rem .2rem;
    background:rgba(247,247,247,1);
    border:1px solid rgba(234,234,234,1);
    border-radius: .1rem;
    margin-top: .4rem;
    position: relative;
}
.container-textarea>textarea{
    border: 0;
    height: 2.76rem;
    line-height: .48rem;
    width: 100%;
    outline: none;
    resize: none;
    background:rgba(247,247,247,1);
    font-size: .14rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    /* color:rgba(163,168,183,1); */
    line-height: .24rem;
}
.textarea-count{
    position: absolute;
    bottom: 0.2rem;
    right: 0.2rem;
    font-size: .14rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
}
.feedback-second{
    height: .24rem;
    line-height: .24rem;
    text-align: left;
    margin-top: .38rem;
}
.second-icon{
    color: red;
}
.second-text{
    font-size: .24rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(33,30,56,1);
    margin-left: .1rem;
}
.feedback-label-container{
    height: .8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.feedback-label-container>.label-item{
    width: 1.2rem;
    height: .4rem;
    line-height: .4rem;
    background:rgba(255,255,255,1);
    border:1px solid rgba(234,234,234,1);
    border-radius: .1rem;
    text-align: center;
    font-size: .14rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(33,30,56,1);
    margin-left: .5rem;
    cursor: pointer;
}
.feedback-third{
    height: .24rem;
    line-height: .24rem;
    text-align: left;
    margin-top: .22rem;
}
.third-icon{
    color: red;
}
.third-text{
    font-size: .24rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(33,30,56,1);
    margin-left: .1rem;
}
.third-telephone{
    width: 5.8rem;
    height: .48rem;
    margin-top: .2rem;
    margin-left: .18rem;
    background:rgba(247,247,247,1);
    border:1px solid rgba(234,234,234,1);
    border-radius: .1rem; 
    margin-right: .2rem;
    padding-left: .2rem;
    text-align: left;
}
.third-telephone>input{
    width: 5rem;
    height: .48rem;
    line-height: .48rem;
    border: 0;
    border-radius: .16rem;
    font-size: .16rem;
    letter-spacing: .02rem;
    padding-left: 0;
    background:rgba(247,247,247,1);
}
.feedback-four-title{
    height: .18rem;
    line-height: .18rem;
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(33,30,56,1);
    text-align: left;
    margin-left: .2rem;
    margin-top: .4rem;
}
.feedback-upload-container{
    /* height: 1.68rem; */
    width: 6rem;
    margin-left: .2rem;
    margin-top: .2rem;
    /* margin-bottom: 1rem; */
    /* background:rgba(247,247,247,1); */
    /* border:1px solid rgba(234,234,234,1);
    border-radius: .1rem; */
}


.feedback-button{
    width: 2rem;
    height: .68rem;
    line-height: .68rem;
    background:rgba(82,195,174,1);
    border-radius: .1rem;
    text-align: center;
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(255,255,255,1);
    margin: 0 auto;
    margin-top: .5rem;
}

.feed-back-footer{
    height: 4rem;
    width: 100%;
    padding-top: .6rem;
    background:rgba(247,247,247,1);
}
</style>

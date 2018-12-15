/*
 * @Author: tonyTang 
 * @Date: 2018-12-12 19:27:53 
 * @Last Modified by: tonyTang
 * @Last Modified time: 2018-12-13 14:25:24
 */

<template>
  <div id="connect-us">
       <div class="connect-us-container">
            <div class="connect-us-header">
                <OtherHeader></OtherHeader>
            </div>
            <div class="connect-us-main">
                <div class="connect-banner">                
                    <div class="first-title">联系我们</div>
                </div>
                <div class="connect-us-second">
                    <div class="second-item">
                        <div class="item-left">
                            <div class="item-title second-item-margin2">技术咨询</div>
                            <div class="item-sammary">关于虎符产品你有任何技术相关的疑问，<br />您可以在第一时间发送邮件至<span class="item-email">developers@hoo.com</span></div>
                        </div>
                        <div class="item-right">
                            <div class="item-title second-item-margin2">常规咨询</div>
                            <div class="item-sammary">如果您在使用虎符产品的过程中遇到了任何问题，<br />请通过邮件<span class="item-email">support@hoo.com</span>联系我们，我们会在第一时间内为您解答</div>
                        </div>
                    </div>
                    <div class="second-item">
                        <div class="item-left">
                            <div class="item-title second-item-margin1">媒体与采访</div>
                            <div class="item-sammary">如需媒体咨询和采访，请写明详情发送电子邮件至<span class="item-email">media@hoo.com</span></div>
                        </div>
                        <div class="item-right">
                            <div class="item-title second-item-margin1">商业合作</div>
                            <div class="item-sammary">如果您有兴趣与我们合作，请通过<span class="item-email">vc@hoo.com</span>联系,<br />请在邮件中尽量详尽得写明合作方的相关信息及合作意图</div>
                        </div>
                    </div>
                </div>
                <div class="connect-us-third">
                    <div class="third-title">HOO订阅</div>
                    <div class="third-sammary">如果您对虎符的产品感兴趣，只需留下您的邮箱地址，便可以在第一时间了解关于虎符的所有新动态</div>
                    <div class="third-input-content">
                        <div class="third-input-area">
                            <input  type="text" placeholder="请输入您的邮箱地址"  />
                            <!-- <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" class="demo-dynamic">
                                <el-form-item
                                prop="email"
                                :rules="[
                                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                                ]"
                                >
                                    <el-input v-model="dynamicValidateForm.email"></el-input>
                                </el-form-item>
                            </el-form> -->
                        </div>
                        <div class="third-input-button">订阅邮件</div>

                    </div>
                </div>
            </div>
            <div class="connect-us-footer">
                <Footer2></Footer2>
            </div>
       </div>
  </div>
</template>

<script>
import OtherHeader from "../components/OtherHeader.vue";
import Footer2 from "../components/Footer2.vue";
export default {
    name: 'connectUs',
    data() {
        return {
            dynamicValidateForm: {
                email: ''
            },
        } 
    },
    components: {
        OtherHeader,
        Footer2,
    },
    created() {

    },
}
</script>

<style  lang="css" scoped>
@import "../assets/css/public";

.connect-us-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
}
.connect-us-main {
    background-color: rgba(247,247,247,1);;
    color: #333;
    text-align: center;
    width: 100%; 
} 
.connect-banner{
    height: 5rem;
    width: 100%;
    background: url("../assets/image/connect/contact.png") no-repeat;
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
.connect-us-second{
    width: 12rem;
    height: 4.8rem;
    margin: 0 auto;
}
.second-item{
    width: 100%;
    height: 2.4rem;;
    display: flex;
    justify-content: center;
    align-items: center;
}
.item-left{
    width: 50%;
    height: 2.4rem;
}
.item-title{
    height: .24rem;
    line-height: .24rem;
    font-size: .24rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(33,30,56,1);
    text-align: center;
}
.second-item-margin1{
    margin-top: .5rem;
}
.second-item-margin2{
    margin-top: 1rem;
}
.item-sammary{
    width: 90%;
    margin: .2rem auto 0 auto;
    font-size: .14rem;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(33,30,56,1);
    line-height: .3rem;
}
.item-email{
    color:#52C3AE;
}
.item-right{
    width: 50%;
    height: 2.4rem;
}




.connect-us-third{
    width: 12rem;
    height: 3.22rem;
    margin: 0 auto;
    padding-top: 1px;
    background:rgba(255,255,255,1);
}
.third-title{
    line-height: .24rem;
    text-align: center;
    font-size: .24rem;
    font-family:MicrosoftYaHei-Bold;
    font-weight: bold;
    color:rgba(33,30,56,1);
    margin-top: .62rem;
}
.third-sammary{
    line-height: .16rem;
    text-align: center;
    font-size: .14rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(33,30,56,1);
    margin-top: .2rem;
}
.third-input-content{
    height: .68rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .4rem;
}
.third-input-area{
    width: 9rem;
    height: .68rem;
    background:rgba(247,247,247,1);
    border:1px solid rgba(234,234,234,1);
    border-radius: .1rem; 
    margin-right: .2rem;

}
.third-input-area>input{
    width: 8rem;
    height: .68rem;
    line-height: .68rem;
    border: 0;
    border-radius: .16rem;
    font-size: .24rem;
    letter-spacing: .02rem;
    padding-left: .3rem;
    background:rgba(247,247,247,1);
}
.third-input-button{
    width: 2rem;
    height: .68rem;
    line-height: .68rem;
    text-align: center;
    background:rgba(82,195,174,1);
    border-radius: .1rem;
    font-size: .18rem;
    font-family:MicrosoftYaHei;
    font-weight: 400;
    color:rgba(255,255,255,1);
}
.connect-us-footer{
    height: 4rem;
    width: 100%;
    padding-top: .6rem;
    background:rgba(247,247,247,1);
}
@media (max-width: 1600px) {
    .connect-us-third{
        width: 12rem;
        height: 3.32rem;
        margin: 0 auto;
        padding-top: 1px;
        background:rgba(255,255,255,1);
    }
    .third-sammary{
        line-height: .18rem;
        text-align: center;
        font-size: .14rem;
        font-family:MicrosoftYaHei;
        font-weight: 400;
        color:rgba(33,30,56,1);
        margin-top: .2rem;
    }
}
@media (max-width: 1400px) {
    .connect-us-third{
        width: 12rem;
        height: 3.42rem;
        margin: 0 auto;
        padding-top: 1px;
        background:rgba(255,255,255,1);
    }
    .third-sammary{
        line-height: .2rem;
        text-align: center;
        font-size: .14rem;
        font-family:MicrosoftYaHei;
        font-weight: 400;
        color:rgba(33,30,56,1);
        margin-top: .2rem;
    }
}
@media (max-width: 1200px) {
    .connect-us-third{
        width: 12rem;
        height: 3.5rem;
        margin: 0 auto;
        padding-top: 1px;
        background:rgba(255,255,255,1);
    }
   .third-sammary{
        line-height: .24rem;
        text-align: center;
        font-size: .14rem;
        font-family:MicrosoftYaHei;
        font-weight: 400;
        color:rgba(33,30,56,1);
        margin-top: .2rem;
    }
}
@media (max-width: 800px) {
    .connect-us-third{
        width: 12rem;
        height: 4rem;
        margin: 0 auto;
        padding-top: 1px;
        background:rgba(255,255,255,1);
    }
    .third-sammary{
        line-height: .42rem;
        text-align: center;
        font-size: .14rem;
        font-family:MicrosoftYaHei;
        font-weight: 400;
        color:rgba(33,30,56,1);
        margin-top: .2rem;
    }
}
</style>

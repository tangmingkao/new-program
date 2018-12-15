/*
 * @Author: tonyTang 
 * @Date: 2018-12-12 19:27:33 
 * @Last Modified by: tonyTang
 * @Last Modified time: 2018-12-13 17:59:11
 */

<template>
  <div id="common-problem">
       <div class="common-problem-container">
            <div class="common-problem-header">
                <OtherHeader></OtherHeader>
            </div>
            <div class="common-problem-main">
                <div class="common-problem-banner">
                    <div class="first-title">常见问题</div>
                </div>
                <div class="common-problem-question">
                    <div class="question-title">
                        <div class="question-label">关于个人中心</div>
                        <div class="question-label">钱包相关</div>
                        <div class="question-label">交易相关</div>
                        <div class="question-more">更多意见反馈</div>
                        <div class="question-more-icon"></div>
                    </div>
                    
                </div>
            </div>
            <div class="common-problem-footer">
                <Footer2></Footer2>
            </div>
       </div>
  </div>
</template>

<script>
import OtherHeader from "../components/OtherHeader.vue";
import Footer2 from "../components/Footer2.vue";
export default {
    name: 'commonProblem',
    data() {
        return {
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

.common-problem-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
}
.common-problem-main {
    background-color: rgba(247,247,247,1);;
    color: #333;
    text-align: center;
    width: 100%; 
} 
.common-problem-banner{
    height: 5rem;
    width: 100%;
    background: url("../assets/image/problem/problem.png") no-repeat;
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
.common-problem-question{
    height: 12rem;
    width: 12rem;
    margin: 0 auto;
}
.question-title{
    height: 1rem;
    line-height: 1rem;
    width: 100%;
    margin-top: .2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: .14rem;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(33,30,56,1);
    border-bottom: 1px solid rgba(234,234,234,1);
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
}
.question-label{
    height: .4rem;
    width: 2rem;
    margin-right: .3rem;
    line-height: .4rem;
    text-align: center;
    background:rgba(255,255,255,1);
    border:1px solid rgba(234,234,234,1);
    border-radius: .1rem;
}
.question-more{
    height: 1rem;
    line-height: 1rem;
    font-size: .14rem;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(82,195,174,1);
    text-align: center;
    margin-left: 3rem;
}
.question-more-icon{
    width: .06rem;
    height: .12rem;
    background: url("../assets/image/problem/more.png") no-repeat;
    background-size: 100% 100%;
    margin-left: .1rem;
}









.common-problem-footer{
    height: 4rem;
    width: 100%;
    padding-top: .6rem;
    background:rgba(247,247,247,1);
}
</style>

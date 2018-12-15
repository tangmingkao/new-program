<template>
  <div id="loan">
       <div class="loan-container">
            <div class="loan-header">
                <OtherHeader></OtherHeader>
            </div>
            <div class="loan-main">Main</div>
            <div class="loan-footer">
                <Footer2></Footer2>
            </div>
       </div>
  </div>
</template>

<script>
import OtherHeader from "../components/OtherHeader.vue";
import Footer2 from "../components/Footer2.vue";
export default {
    name: 'loanPage',
    data() {
        return {
        } 
    },
    components: {
        OtherHeader,
        Footer2,
    },
    created() {
        console.log(4444444);
    },
}
</script>

<style  lang="css" scoped>
@import "../assets/css/public";

.loan-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 1.6rem;
    min-height: 8rem;
}  
.loan-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
}
.loan-footer{
    height: 4rem;
    width: 100%;
    padding-top: .6rem;
    background:rgba(247,247,247,1);
}
</style>

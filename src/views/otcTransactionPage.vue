<template>
  <div id="otc">
       <div class="otc-container">
            <div class="otc-header">
                <OtherHeader></OtherHeader>
            </div>
            <div class="otc-main">Main</div>
            <div class="otc-footer">
                <Footer2></Footer2>
            </div>
       </div>
  </div>
</template>

<script>
import OtherHeader from "../components/OtherHeader.vue";
import Footer2 from "../components/Footer2.vue";
export default {
    name: 'otcTransactionPage',
    data() {
        return {
        } 
    },
    components: {
        OtherHeader,
        Footer2,
    },
    created() {
        console.log(5555555);
    },
}
</script>

<style  lang="css" scoped>
@import "../assets/css/public";

.otc-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 1.6rem;
    min-height: 8rem;
}  
.otc-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
}
.otc-footer{
    height: 4rem;
    width: 100%;
    padding-top: .6rem;
    background:rgba(247,247,247,1);
}
</style>

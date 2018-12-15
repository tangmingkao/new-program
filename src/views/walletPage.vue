<template>
  <div id="wallet">
       <div class="wallet-container">
            <div class="wallet-header">
                <OtherHeader></OtherHeader>
            </div>
            <div class="wallet-main">Main</div>
            <div class="wallet-footer">
                <Footer2></Footer2>
            </div>
       </div>
  </div>
</template>

<script>
import OtherHeader from "../components/OtherHeader.vue";
import Footer2 from "../components/Footer2.vue";
export default {
    name: 'walletPage',
    data() {
        return {
        } 
    },
    components: {
        OtherHeader,
        Footer2,
    },
    created() {
        console.log(77777777);
    },
}
</script>

<style  lang="css" scoped>
@import "../assets/css/public";

.wallet-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 1.6rem;
    min-height: 8rem;
}  
.wallet-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
}
.wallet-footer{
    height: 4rem;
    width: 100%;
    padding-top: .6rem;
    background:rgba(247,247,247,1);
}
</style>

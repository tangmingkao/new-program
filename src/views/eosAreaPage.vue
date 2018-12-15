<template>
  <div id="eosarea">
       <div class="eosarea-container">
            <div class="eosarea-header">
                <OtherHeader></OtherHeader>
            </div>
            <div class="eosarea-main">Main</div>
            <div class="eosarea-footer">
                <Footer2></Footer2>
            </div>
       </div>
  </div>
</template>

<script>
import OtherHeader from "../components/OtherHeader.vue";
import Footer2 from "../components/Footer2.vue";
export default {
    name: 'eosAreaPage',
    data() {
        return {
        } 
    },
    components: {
        OtherHeader,
        Footer2,
    },
    created() {
        console.log(22222222);
    },
}
</script>

<style  lang="css" scoped>
@import "../assets/css/public";

.eosarea-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 1.6rem;
    min-height: 8rem;
}  
.eosarea-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
}
.eosarea-footer{
    height: 4rem;
    width: 100%;
    padding-top: .6rem;
    background:rgba(247,247,247,1);
}
</style>

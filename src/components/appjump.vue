<template>
  <div class="container">
    <img src="./images/logo_app.png" alt="" class="header">
    <img src="./images/background_picture_app.png" alt="" class="footer">
    <a :href="aHref" class="download-p" @touchstart="checkIfdownload">立即下载</a>
    <div class="weixin-div" v-if="isWeixin && ifClick">
      <img src="./images/download_instructions_app.png" alt="" class="weixin-img">
    </div>
  </div>
</template>

<script>
  export default {
    name: "appjump",
    data() {
      return{
        isWeixin: false,
        aHref: 'https://pmc.evergrande.com/apptest/PlanManagementClient.apk',
        ifClick: false
      }
    },
    created() {
      this.checkIsWeixin()
    },
    methods: {
      checkIsWeixin() {
        let ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") { // 判断是否为微信浏览器
          this.isWeixin = true
        } else {
          this.isWeixin = false
        }
        if (/(iphone|ipad|ipod|ios)/i.test(ua)) { //判断iPhone|iPad|iPod|iOS
          this.aHref = 'itms-services://?action=download-manifest&amp;url=https://pmc.evergrande.com/apptest/planManagementClient.plist'
        } else {
          this.aHref = 'https://pmc.evergrande.com/apptest/PlanManagementClient.apk'
        }
      },
      checkIfdownload(e) {
        if (this.isWeixin) {
          e.preventDefault();
          e.stopPropagation();
        }
        this.ifClick = true;
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    position: relative;
    background: #fff;
  }

  .header {
    width: 66%;
    margin: 21% 17% 0;
  }

  .download-p {
    position: relative;
    margin-top: 12.1%;
    width: 56%;
    background: linear-gradient(45deg, #f23030, #D7000F);
    box-shadow: 0 10px 16px rgba(215, 0, 15, 0.1);
    margin-left: 22%;
    padding: 3.5% 0px;
    color: #ffffff;
    font-size: 4.3vw;
    text-align: center;
    border-radius: 300px;
    cursor: pointer;
    display: block;
    text-decoration: none !important;
    /*display: inline;*/
  }

  .footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    /*z-index: 0;*/
  }
  .weixin-div{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    z-index: 101;
  }
  .weixin-img{
    width: calc(100% - 40px);
    margin-left: 20px;
  }
</style>

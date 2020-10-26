<template>
  <div class="header">
    <div class="bg">
      <div class="top">
        <div class="topBox">
          <img src="../assets/img/1.jpg" alt="" />
          <div class="text">
            <h2>粥品香坊(大运村)</h2>
            <p>蜂鸟专送/38分钟送达</p>
            <p>在线支付满28减5,满50减10</p>
          </div>
        </div>
        <div class="number">
          <p></p>
          <p>5个 ></p>
        </div>
      </div>
      <div class="header_bottom">
        <p class="notice">
          公告:计算机技术少时诵诗书所所所所所所所所所所所开始看思考思考思考库斯库斯
        </p>
        <p>
          <span @click="show = true">></span>
          <van-overlay :show="show" @click="show = false">jhshhshh</van-overlay>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="less" scoped>
.header {
  background-image: url("../assets/img/1.jpg");
  color: #fff;
  .bg {
    background: rgba(0, 0, 0, 0.5);
  }
  .top {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    .topBox {
      display: flex;
      .text {
        margin-left: 20px;
        p {
          margin-top: 15px;
        }
      }
      img {
        width: 80px;
        height: 80px;
      }
    }
    .number {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p:last-child {
        width: 50px;
        height: 30px;
        color: #fff;
        line-height: 25px;
        text-align: center;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 10px;
      }
    }
  }
  .header_bottom {
    background: rgba(0, 0, 0, 0.5);
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    .notice {
      width: 100%;
      // padding: 0 15px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
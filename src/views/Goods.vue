<template>
  <div class="goods">
    <div class="left">
      <ul>
        <li>热销榜</li>
        <li>单彩套餐</li>
        <li>彩套餐</li>
        <li>单套餐</li>
        <li>单人精餐</li>
        <li>精彩套餐</li>
        <li>精彩套餐</li>
        <li>精彩套餐</li>
        <li>精彩套餐</li>
        <li>精彩套餐</li>
        <li>精彩套餐</li>
      </ul>
    </div>
    <div class="right">
      <div class="list">
        <h3>单人金彩套餐</h3>
        <div class="item">
          <img src="@/assets/img/1.jpg" alt="" />
          <div class="text">
            <p>皮蛋瘦肉粥包子套餐</p>
            <p>咸粥</p>
            <p>月售1132份 好评率100%</p>
            <p>
              <span class="current_price">￥24</span>
              <span class="history_price">￥28</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.goods {
  height: 100%;
  // margin-bottom:50px;
  background: #f4f5f7;
  display: flex;
  .left {
    flex: 0 0 80px;
    overflow-y: auto;

    ul {
      padding: 10px;
      height: 100%;
      li {
        height: 40px;
        padding: 10px;
        border-bottom: 1px solid #ccc;
      }
    }
  }
  .right {
    flex: 1;
    .list {
      h3 {
        height: 40px;
        line-height: 40px;
      }
      .item {
        background: #fff;
        display: flex;
        padding: 20px;
        img {
          width: 90px;
          height: 90px;
        }
        .text {
          margin-left: 10px;
          p {
            margin-bottom: 10px;
            color: #aaa;
          }
          p:first-child {
            font-size: 18px;
            font-weight: 666;
            color: #000;
          }
          p:last-child{
            margin-bottom: 0;
          }
          .current_price{
            color: red;
          }
          .history_price{
            text-decoration: line-through;
            margin-left:20px;
          }
         
        }
      }
    }
  }
}
</style>
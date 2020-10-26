<template>
  <div class="home">
    <div class="headerdiv">
      <Header></Header>

      <div class="body">
        <p
          :class="{ curent: index == '/goods' }"
          @click="handelclick('/goods')"
        >
          商品
        </p>
        <p
          :class="{ curent: index == '/merchants' }"
          @click="handelclick('/merchants')"
        >
          评价
        </p>
        <p
          :class="{ curent: index == '/evaluate' }"
          @click="handelclick('/evaluate')"
        >
          商家
        </p>
      </div>
    </div>
    <router-view></router-view>

    <div class="buttom">
      <i class="iconfont icon icon-gouwu shopCar"></i>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  data() {
    return {
      index: "/goods",
    };
  },
  components: { Header },
  methods: {
    handelclick(val) {
      this.index = val;
      this.$router.push(val);
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;

  .body {
    display: flex;
    justify-content: space-around;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    .curent {
      color: red;
    }
  }
  .buttom {
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
    background: #423a33;
    .shopCar{
      width: 100px;
      height: 100px;
    }
  }
}
</style>
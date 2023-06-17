<template>
  <div class="puke-game">
    <div class="left">投注额</div>
    <div class="right">
      <div class="top">
        <div class="puke-card-wrap">
          <div class="change-btn" @click="changeClick">></div>
          <!-- 负责翻转和飞牌 -->
          <div class="puke-card current">
            <div class="inner-card back"></div>
            <div class="inner-card front">{{ this.currentItem }}</div>
          </div>
          <!-- 底牌 -->
          <div class="puke-card flyout">
            <div class="inner-card back"></div>
            <div class="inner-card front"></div>
          </div>

          <!-- 底牌 -->
          <div class="puke-card bottom">
            <div class="inner-card back">反面</div>
            <div class="inner-card front">正面</div>
          </div>
          <div class="puke-card bottom2">
            <div class="inner-card back">反面</div>
            <div class="inner-card front">正面</div>
          </div>
          <!-- <div class="puke-card three"></div> -->
        </div>
      </div>
      <div class="bottom">
        <transition-group name="list" tag="ul" ref="ulRef">
          <div class="item" v-for="(item, index) in list" :key="index">
            {{ item.card.rank }}
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { createMockData } from "./mock";
export default {
  data() {
    return {
      isLeft: true,

      list: [
        {
          card: {
            suit: "S",
            rank: 12,
          },
          guess: "skip",
          payoutMultiplier: 0.99,
        },
        {
          card: {
            suit: "S",
            rank: 12,
          },
          guess: "skip",
          payoutMultiplier: 0.99,
        },
        {
          card: {
            suit: "S",
            rank: 12,
          },
          guess: "skip",
          payoutMultiplier: 0.99,
        },
        {
          card: {
            suit: "S",
            rank: 12,
          },
          guess: "skip",
          payoutMultiplier: 0.99,
        },
      ],
      currentItem: "",
    };
  },
  mounted() {
    this.currentItem = this.randomNum();
  },
  methods: {
    randomNum() {
      const num = Math.floor(Math.random() * 12);
      console.log(num);
      return num;
    },
    fetchData(randomNum) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(createMockData(randomNum));
        }, 200);
      });
    },
    scrollToBottom() {
      this.$nextTick(() => {
        this.$refs.ulRef.$el.scrollTo({
          top: 0,
          left: 10000000,
          behavior: "smooth",
        });
      });
    },

    // 旋转完了再翻转
    async changeClick() {
      const res = await this.fetchData(this.randomNum());
      const tl = gsap.to(".current", {
        duration: 0.6,
        rotation: this.isLeft ? 45 : -45,
        x: this.isLeft ? -200 : 200,
        y: -250,
        onComplete: () => {
          this.isLeft = !this.isLeft;
          this.currentItem =
            res.state.rounds[res.state.rounds.length - 1].card.rank;
          gsap.set(".current", { rotateY: 0 });
          tl.seek(0).pause();
          gsap.to(".current", {
            duration: 0.6,
            rotateY: 180,
            onComplete: () => {
              const newst = res.state.rounds.pop();
              this.list.push(newst);
              this.scrollToBottom();
              console.log("list", this.list);
            },
          });
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// 美化滚动条
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  width: 6px;
  background: rgba(#101f1c, 0.1);
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(144, 147, 153, 0.5);
  background-clip: padding-box;
  min-height: 28px;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
  transition: background-color 0.3s;
  cursor: pointer;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(144, 147, 153, 0.3);
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
* {
  box-sizing: border-box;
}
.inner-card {
  padding: 20px;
  color: #000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; // 隐藏背面
  background-repeat: no-repeat;
  background-size: 100% 100%;
  &.back {
    background-image: url("./assets/fanmian.svg");
  }
  &.front {
    background-image: #fff;
    transform: rotateY(180deg);
  }
}

.puke-card-wrap {
  position: relative;
  width: 100px;
  height: 150px;
  // 设置透视效果
  perspective: 1000px;
  .change-btn {
    position: absolute;
    right: 0;
    top: -20px;
    width: 30px;
    height: 30px;
    border-radius: 2px;
    background-color: #213743;
    color: #fff;
    cursor: pointer;
    z-index: 999;
    text-align: center;
    line-height: 30px;
  }
  .puke-card {
    position: absolute;
    transform-origin: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px #000;
    transform-style: preserve-3d; // 开启3D透视
    &.current {
      top: 3px;
      z-index: 10;
      transform: rotateY(180deg);
      background-color: #fff;
    }

    &.flyout {
      top: 3px;
      z-index: 9;
    }
    &.bottom {
      top: 8px;
      z-index: 8;
    }
    &.bottom2 {
      top: 13px;
      z-index: 7;
    }
  }
}

.puke-game {
  display: flex;
  width: 1200px;
  height: 600px;
}
.left {
  flex: 1;
  background: #213743;
  color: #fff;
  padding: 10px;
}
.right {
  flex: 3;
  width: 0;
  background-color: #0f212e;
  .top {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }
  .bottom {
    width: 100%;
    position: relative;
    ul {
      width: 100%;
      display: flex;
      padding-top: 100px;
      padding-bottom: 20px;
      overflow-x: auto;
    }
    .item {
      flex-shrink: 0;
      width: 100px;
      height: 150px;
      background-color: #fff;
      margin-right: 10px;
    }
  }
}
</style>

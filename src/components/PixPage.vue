<template>
  <div>

  </div>
</template>

<script>
  // 引入pixi.js
  import * as PIXI from 'pixi.js';
  import bg from '../assets/bg.jpg'
  import zhihuan from '../assets/zhihuan.png'
  export default {
    created() {
      // 创建一个pixi应用 铺满整个屏幕
      const app = new PIXI.Application({
        width: window.innerWidth, 
        height: window.innerHeight,
        antialias: true,
        transparent: false,
        resolution: 1,
        background: '#1099bb' 
      });
      // 将pixi应用添加到dom中
      document.body.appendChild(app.view);
      // 创建一个容易
      const container = new PIXI.Container();
      // 创建一个精灵
      const fangzi =  PIXI.Sprite.from(bg)
      // 设置精灵大小同app大小
      fangzi.width = app.screen.width
      fangzi.height = app.screen.height

      // 创建文字精灵
      const text = new PIXI.Text('Hello Pixi',{
        fontSize: 36, 
        fill: 0xff0000,
        align:'center',
        // 设置阴影
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
      })
      // 设置文字精灵位置居中
      text.x = app.screen.width  / 2
      text.y = app.screen.height / 2
      text.anchor.set(0.5)
      // 把精灵添加到容器
      container.addChild(fangzi)
      container.addChild(text)

      // 创建置换精灵
      const displacementSprite = PIXI.Sprite.from(zhihuan)
      displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

      // 创建置换滤镜
      const displacementFilter = new PIXI.DisplacementFilter(displacementSprite)
      // 设置置换滤镜强度
      displacementFilter.scale.x = 10
      displacementFilter.scale.y = 10

      // 把置换精灵添加到容器
      container.addChild(displacementSprite)
      // 把置换滤镜添加到容器
      container.filters = [displacementFilter]

      // ticker
      app.ticker.add(()=>{
        // 每一帧都改变置换精灵的位置
        displacementSprite.x += 1
        // displacementSprite.y += 1
      })



      // 把容器添加到舞台
      app.stage.addChild(container)


      

    },
    mounted () {

    },
    methods: {
    },
  }
</script>

<style  scoped>

</style>
<template>
  <div>

  </div>
</template>

<script>
  // 引入pixi.js
  import * as PIXI from 'pixi.js';
  import fangzi from '../assets/fangzi.png';
  const app = new PIXI.Application({
    width: 640, 
    height: 360,
    antialias: true,
    transparent: false,
    resolution: 1,
    background: '#1099bb' 
  });

  export default {
    mounted () {
      PIXI.Assets.add("fangzi", fangzi)
      document.body.appendChild(app.view);
      PIXI.Assets.load(["fangzi"]).then((textures)=>{
        // 创建精灵
        const fangzi = new PIXI.Sprite(textures.fangzi);
        // 设置精灵位置
        fangzi.x = 100;
        fangzi.y = 100;
        // 设置精灵大小
        fangzi.width = 100;
        fangzi.height = 100;
        // 设置精灵可拖动
        fangzi.eventMode = "dynamic"
        // 添加精灵到舞台
        app.stage.addChild(fangzi);

        // 创建模糊滤镜
        const blurFilter = new PIXI.filters.BlurFilter();      // 设置模糊滤镜强度
        blurFilter.blur = 1;
        // 给精灵添加滤镜
        fangzi.filters = [blurFilter];

      })

    },
    methods: {
    },
  }
</script>

<style  scoped>

</style>
<template>
  <div id="portfolio">
    <div class="ui segment basic">
      <h1>Liste de portfolio Dynanmic</h1>
      <h3>Carousel des portfolio</h3>
      <el-carousel :interval="4000" type="card" height="300px" loop autoplay>
        <el-carousel-item>
          <img src="/png/fab.png" alt>
          <div class="ui button">Lire la description</div>
        </el-carousel-item>
        <el-carousel-item>
          <img src="/png/sia.jpg" alt>
          <p></p>
          <div class="ui button">Lire la description</div>
        </el-carousel-item>
        <el-carousel-item>
          <img src="/png/business-madox.jpg" alt>
        </el-carousel-item>
        <el-carousel-item>
          <img src="/png/jnm.jpg" alt>
        </el-carousel-item>
        <el-carousel-item>
          <img src="/png/orrick.jpg" alt>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>


<style lang="scss" scoped>
#portfolio {
  height: 100%;
}
</style>

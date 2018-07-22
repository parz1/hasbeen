<template>
  <div id="mainroute">
    <el-tabs class="eltabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="地图" name="first">
        <div id="container"></div>
      </el-tab-pane>
      <el-tab-pane label="动态" name="second">动态</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import AMap from 'AMap'
  var map
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    mounted: function () {
      this.init()
    },
    methods: {
      init: function () {
        map = new AMap.Map('container', {
          center: [120.209947,30.245853],
          resizeEnable: true,
          zoom: 12,
          mapStyle: 'amap://styles/5cf2c639c5af0d945afcf4574682e6ec'
        })
        AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
          map.addControl(new AMap.ToolBar())
        })
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
<style>
#mainroute{
  height: 100%;
}
#container{
  height: 100%;
  width: 100%;
} 
.el-tab-pane{
  height: 85%;
}
.eltabs{
  width: 100%;
  height: 100%;
  align-content: center;
  float: none;
}
.el-tabs__content{
  height: 100%;
}
.el-tabs__header{
  margin:0;
  height: 50px;
}
.el-tabs__nav{
  float: none;
  height: 50px;
}
.el-tabs__nav-scroll{
  width: 40%;
  height: 50px;
  margin-right: 30%;
  float: right;
  display: inline-block;
  text-align: center;
}
.el-tabs__item{
  margin-top: 15px;
  font-weight: bold;
  padding: 0 20px;
  font-size: 16px;
}
.el-tabs__active-bar.is-top{
  width: 30px;
}
.el-tabs__nav.is-top{
  display: inline-block;
  text-align: center;
}
.amap-logo {
            bottom:-100px;
            display: none;
        }
        .amap-copyright {
            bottom:-100px;
            display: none;
        }
</style>
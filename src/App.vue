<template>
  <div id="app">
    <router-view/>
    <div id="nav-bottom" class="tabs">
    <!--命名路由-->
      <ul>
        <!--this inspection reports XML/HTML tags with missing mandatory attrbutes ,you can specify attrbute name that should not  be reported-->
        <!--home被点击后，一直处于激活状态，因此需要使用精确匹配模式，在router-link中添加exact属性-->
        <router-link :key="com.key" v-for="com in components" :to="{name:com.url}" tag="li">{{com.name}}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      components:[
        {"name":"首页","url":"Main","key":1},
        {"name":"发现","url":"Find","key":2},
        {"name":"我","url":"User","key":3}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
#nav-bottom{
  position: absolute;
  top: 90%;
  height: 10%;
  width: 100%;
  background-color: #fff;
}
.tabs {
    box-shadow: 0 2px 4px #000;
    width: 100%;
    
  }
.tabs ul {
      display: table;
      width: 100%;
      margin: 0;
      padding: 0;
    }
 .tabs ul li {
        text-align: center;
        font-size: 16px;
        display: table-cell;
        padding: 8px 12px;
        cursor: pointer;
      margin: 0;
      padding: 0;
      background-color: #fff;
      width: 33%;
      }
.tabs ul li router-link-active{
          color: rgb(7, 123, 255);
        }
.tabs ul li router-link-active div {
          font-size: 14px;
        }
.tabs ul li router-link-active div i {
            font-size: 30px;
          }
</style>

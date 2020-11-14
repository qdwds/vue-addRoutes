<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          style="border-right: solid 0px #e6e6e6"
        >
          <template v-for="(item, index) of $store.state.userRoutes">
            <EleMenuItem :key="index" :item="item"></EleMenuItem>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 递归路由 -->
        <template v-for="(item, index) of $store.state.userRoutes">
          <MenuItem :key="index" :item="item"></MenuItem>
        </template>
        <el-card>
          <router-view />
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import MenuItem from "./components/MenuItem";
import EleMenuItem from "./components/EleMenuItem";
export default {
  components: { MenuItem, EleMenuItem },
};
</script>
<style>
* {
  margin: 0;
}
a {
  text-decoration: none;
  color: black;
}
.el-container {
  height: 100vh;
  width: 100vw;
}
.el-aside {
  width: 200px;
  height: 100%;
}
.el-menu {
  /* height: 100vh; */
}
.el-main {
  width: calc(100vw - 200px);
  height: 100%;
}
.el-card {
  width: 100%;
  height: 100%;
}
</style>

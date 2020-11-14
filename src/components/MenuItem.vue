<template>
  <div>
    <!-- 递归渲染路由导航 -->
    <ul v-if="item.children && item.children.length > 0">
      <li>
        <router-link :to="item.link || item.path">{{ item.title }}</router-link>
        <template v-for="(c, i) of item.children">
          <MenuItem :key="i" :item="c"></MenuItem>
        </template>
      </li>
    </ul>
    <ul v-else>
      <router-link :to="item.link || item.path">{{ item.title }}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  // 递归组件重点name
  name: "MenuItem",
  props: {
    item: Object,
  },
};
</script>

<style>
</style>
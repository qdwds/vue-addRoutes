<template>
  <div>
    <div v-if="item.children && item.children.length > 0">
      <el-submenu :index="item.link || item.path">
        <template slot="title">
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item-group
          v-for="c of item.children"
          :key="c.id"
          :index="c.link || c.path"
        >
          <el-menu-item :index="c.link || c.path">{{ c.title }}</el-menu-item>
          <!-- 第三层存在问题，需要在次调用组件 递归内层组件可实现 -->
            <EleMenuItem :key="c.id" :item="c"></EleMenuItem>
        </el-menu-item-group>
      </el-submenu>
    </div>
  </div>
</template>

<script>
export default {
  name: "EleMenuItem",
  props: {
    item: Object,
  },
};
</script>

<style>
</style>
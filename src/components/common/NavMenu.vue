<template>
  <el-card style="padding: 0">
    <el-menu
        :default-active="this.$route.path"
        router
        class="el-menu-vertical-demo"
        text-color="#222">
      <UserInfo/>
      <el-menu-item-group>
        <el-menu-item :key="4" :index="'/index'">
          全部任务
        </el-menu-item>
      </el-menu-item-group>

      <el-menu-item-group>
        <template slot="title">我的任务</template>
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          {{ item.navItem }}
        </el-menu-item>
      </el-menu-item-group>

    </el-menu>
  </el-card>

</template>

<script>
import UserInfo from "@/components/common/UserInfo";
export default {
  name: 'NavMenu',
  components: {UserInfo},
  data () {
    return {
      navList: [
        {name: '/undo', navItem: '已领取'},
        {name: '/reviewing', navItem: '待复核'},
        {name: '/done', navItem: '已完成'}
      ]
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}

span {
  pointer-events: none;
}
</style>


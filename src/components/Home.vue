<template>
    <el-container>
<!--      <p>{{areawidth}}</p>-->
      <el-container>
        <el-aside width="150px"><nav-menu/></el-aside>
        <el-main style="overflow: revert; margin: auto">
          <router-view :style="{width:areawidth}" name="IndexTask"/>
          <router-view :style="{width:areawidth}" name="UndoTask"/>
          <router-view :style="{width:areawidth}" name="ReviewingTask"/>
          <router-view :style="{width:areawidth}" name="DoneTask"/>
        </el-main>
      </el-container>

<!--      <el-footer><router-view name="AppIndex"/></el-footer>-->
    </el-container>
</template>

<script>
  import NavMenu from "@/components/common/NavMenu";
  export default {
    name: "Home",
    components: {NavMenu},
    data(){
      return{
        areawidth:Math.floor((window.screenWidth-150)/230)*230+"px"
      }
    },
    mounted:function (){
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.areawidth = Math.floor((window.screenWidth-150)/230)*230+"px"
        })()
      }
    },
  }
</script>

<style scoped>

</style>
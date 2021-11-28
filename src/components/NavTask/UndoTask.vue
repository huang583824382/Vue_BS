<template>
  <el-row class="index">
<!--    <h1>未完成</h1>-->
    <TaskArea ></TaskArea>
  </el-row>
</template>

<script>
import TaskArea from "@/components/common/TaskArea";
export default {
  name: "AppIndex",
  components: {TaskArea}
}
</script>

<style scoped>
.index{
  display: flex;
  flex-direction: row;
}
</style>
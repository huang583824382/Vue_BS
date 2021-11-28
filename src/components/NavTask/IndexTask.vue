<template>
  <el-row class="index" >
<!--    <h1>全部</h1>-->
    <TaskArea ></TaskArea>
  </el-row>
</template>

<script>
import TaskArea from "@/components/common/TaskArea";
export default {
  name: "IndexTask",
  components: {TaskArea}
}
</script>

<style scoped>
.index{
  display: flex;
  flex-direction: row;
}
</style>
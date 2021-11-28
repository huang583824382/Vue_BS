<template >
  <div class="mycard">
    <el-card :class="flag?'TaskCard2':'TaskCard1'" :style="{ 'backgroundImage':'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0)),url('+cover+')' }"
             @mouseover.native="flag=true" @mouseout.native="flag=false">
      <div>
        <p>{{cover}}</p>
        <h2 style="margin: 5px; text-align: left; float: left">
          {{ title }}
        </h2>
        <!--     <p>-->
        <!--       {{flag}}-->
        <!--     </p>-->
        <p style="margin: 10px; text-align: right; float: right" >
          {{ state }}
        </p>
      </div>
    </el-card>
  </div>

</template>

<script>
export default {
  name: "TaskCard",
  data() {
    return {
      flag:false,
      imgUrl: require('@/assets/testphoto.jpg'),

    }
  },
  props: ["title", "cover", "state"]
}
</script>

<style scoped>
.TaskCard1{
  margin: auto;
  height: 200px;
  width: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}
.TaskCard2{
  margin: auto;
  height: 210px;
  width: 210px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}
.el-card ::v-deep .el-card__body {
  padding: 0%;
}
.mycard{
  height: 210px;
  width: 210px;
  padding: 0;
  /*background-color: #3377aa;*/
}
</style>
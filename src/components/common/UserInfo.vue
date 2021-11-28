<template>
  <div @click="Info" style="cursor: pointer">
    <img :src="imgUrl" alt="text">
    <p>Username</p>
  </div>


</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      imgUrl: require('@/assets/testphoto.jpg')
    }
  },
  methods:{
    Info(){
      this.$router.replace({path:'/userpage'})
    }
  }
}
</script>

<style scoped>
  img{
    width: 65px;
    height: 65px;
    border: 1px solid #eaeaea;
    border-radius: 50%;
  }
  p{
    color: #534e4f;
  }
</style>
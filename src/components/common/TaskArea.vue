<template>
  <div >
    <el-button v-on:click="addTaskimg">上传图片</el-button>
    <el-button v-on:click="addTaskvid">上传视频</el-button>
    <AddTaskForm @reflush="loadTasks" ref="addFormimg" type="picture-card"></AddTaskForm>
    <AddTaskForm @reflush="loadTasks" ref="addFormvid" type=""></AddTaskForm>
    <h1 v-show="empty">无任务</h1>
    <el-row v-show="!empty" style="margin-left:auto; margin-right:auto;" v-loading="loading">
      <el-tooltip placement="right"
                  v-for="item in tasks"
                  :key="item.id"
      style="margin: 10px">
        <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.date}}</p>
        <p slot="content" style="font-size: 12px;margin-bottom: 6px;">{{ item.abs }}</p>
<!--        <TaskCard></TaskCard>-->
        <TaskCard style="float: left; margin: 10px" :title="item.title" :cover="item.imgsrc" :state="item.state">

        </TaskCard>
      </el-tooltip>
    </el-row>
  </div>
</template>

<script>
import TaskCard from "@/components/common/TaskCard";
import AddTaskForm from "@/components/common/AddTaskForm";
export default {
  name: "TaskArea",
  components: {TaskCard, AddTaskForm},
  data(){
    return{
      empty:false,
      num:1,
      tasks:[
        {
          imgsrc:"",
          title:"",
          abs:"",
        }
      ],
      loading:false
    }
  },
  mounted:function (){
    this.loadTasks()
    // const that = this
    // window.onresize = () => {undefined
    //   return (() => {undefined
    //     window.screenHeight = document.body.clientHeight
    //     that.screenHeight = window.screenHeight
    //   })}
  },
//   watch: {undefined,
//     screenHeight (val) {undefined
// // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
//       if (!this.timer) {undefined
// // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
//         this.screenHeight = val
//         this.timer = true
//         let that = this
//         setTimeout(function () {undefined
// // 打印screenWidth变化的值
//           console.log(that.screenHeight)
//           that.timer = false
//         }, 400)
//       }
//     }
//   },
  methods:{
    loadTasks(){
      this.loading=true
      this.$axios.get('/alltasks').then(resp=>{
        if(resp&&resp.status===200){
          this.tasks=resp.data
          if(this.tasks.length==0){
            this.empty=true
          }
          else{
            for (let i of this.tasks){
              i.imgsrc="http://localhost:8443/img/"+i.imgsrc
            }
            this.empty=false;
          }
        }
      })
      this.loading=false
    },
    // additem(){
    //   Vue.set(this.tasks, this.tasks.length, {
    //     imgsrc: 'static/img/testphoto.jpg',
    //     title: ''+this.num}
    //   ),this.num++
    // },
    addTaskimg(){
      this.$refs.addFormimg.dialogFormVisible=true
    },
    addTaskvid(){
      this.$refs.addFormvid.dialogFormVisible=true
    }
  }
}
</script>

<style scoped>

</style>
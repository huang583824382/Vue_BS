<template>
  <div>
    <el-dialog
        title="图片"
        :visible.sync="dialogFormVisible"
        @close="clear">
      <el-form :model="form">
        <el-form-item label="任务主题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="任务简介">
          <el-input v-model="form.abs"></el-input>
        </el-form-item>

        <el-upload
              ref="upload"
              action="#"
              :list-type="type"
              :http-request="uploadSectionFile"
              :limit=limitNum
              :file-list="fileListc"
              :auto-upload="false"
              :on-exceed="handleExceed"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
        <el-progress v-show="uploading" type="line" :percentage="progressPercent"></el-progress>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        <el-form-item style="margin: 20px">
          <el-button size="small" type="primary" @click="uploadFile">立即上传</el-button>
          <el-button size="small">取消</el-button>
        </el-form-item>
      </el-form>
<!--      <div slot="footer" class="dialog-footer">-->
<!--        <el-button @click="dialogFormVisible = false">取 消</el-button>-->
<!--        <el-button type="primary" @click="onSubmit">确 定</el-button>-->
<!--      </div>-->
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["type"],
  name: 'EditForm',
  data () {
    return {
      uploading: false,
      progressPercent:0.0,
      dialogImageUrl: '',
      dialogVisible: false,
      formLabelWidth: '80px',
      limitNum: 3,
      form: {
        title:"",
        abs:""
      },
      dialogFormVisible: false,
      fileListc: [],
      files:[]
    }
  },
  methods: {
    // 上传文件之前的钩子
    handleBeforeUpload(file){
      console.log('before')
      if(!(file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/jpg' || file.type === 'image/jpeg')) {
        this.$notify.warning({
          title: '警告',
          message: '请上传格式为image/png, image/gif, image/jpg, image/jpeg的图片'
        })
      }
      let size = file.size / 1024 / 1024 / 2
      if(size > 2) {
        this.$notify.warning({
          title: '警告',
          message: '图片大小必须小于2M'
        })
      }
    },
    // 文件超出个数限制时的钩子
    handleExceed(files, fileList) {

    },
    // 文件列表移除文件时的钩子
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    // 点击文件列表中已上传的文件时的钩子
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    uploadFile() {
      console.log('update here')
      this.$refs.upload.submit()
      this.uploading=true
      let formdata=new FormData();
      formdata.append('title', this.form.title)
      formdata.append('abs', this.form.abs)
      this.files.forEach(file=>{
        formdata.append('files', file, file.name)
      })
      this.$axios.post('/addtask', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          this.progressPercent = (progressEvent.loaded / progressEvent.total * 100) | 0
        }
      }).then((res) => {
        if(res.data.code==="200"){
          console.log('上传成功')
          console.log(res)
          // this.uploading=false

        }
        else{
          console.log('上传失败')
          console.log(res)
          alert("Upload Failed!")
        }
      })
      setTimeout(() =>{
        this.$notify({
          title: '上传成功',
          message: '',
          type: 'success'
        });
        this.uploading=false
        this.$refs.upload.clearFiles()
        this.dialogFormVisible=false
        this.$emit('reflush')
        this.fileListc=[];
        this.files=[];
        this.form.title="";
        this.form.abs=""
      },1000);
      this.uploading=false
    },
    uploadSectionFile (param) {
      this.files.push(param.file)
      // this.uploading=true
      // console.log('update' + this.fileListc.length)
      // let tform = new FormData()
      // tform.append('file', param.file)
      // tform.append('title', this.form.title)
      // tform.append('abs', this.form.abs)
      // this.$axios.post('/addtask', tform, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   },
      //   onUploadProgress: progressEvent => {
      //     this.progressPercent = (progressEvent.loaded / progressEvent.total * 100) | 0
      //   }
      // }).then((res) => {
      //   if(res.data.code==="200"){
      //     console.log('上传成功')
      //     console.log(res)
      //     // this.uploading=false
      //
      //   }
      //   else{
      //     console.log('上传失败')
      //     console.log(res)
      //     alert("Upload Failed!")
      //   }
      //
      // })
      // setTimeout(() =>{
      //   this.uploading=false
      //   this.$refs.upload.clearFiles()
      //   this.dialogFormVisible=false
      //   this.$emit('reflush')
      // },1000);
      // // this.uploading=false
    },
  }
}
</script>

<style scoped>
.el-icon-circle-plus-outline {
  margin: 50px 0 0 20px;
  font-size: 100px;
  float: left;
  cursor: pointer;
}

</style>



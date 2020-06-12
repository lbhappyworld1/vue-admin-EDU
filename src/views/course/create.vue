<template>
  <div style="width: 70%" class="coursecontet">
    <!-- <el-row type="flex" class="row-bg" justify="left">
      <el-col :span="6"></el-col>
    </el-row> -->
    <div class="titleT">创建课程</div>
    <el-row :gutter="20" type="flex" justify="strat" style="width: 100%">
      <el-col :span="18">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="课程名称">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="课程简介">
            <el-input v-model="form.name2" />
          </el-form-item>
          <el-form-item label="课程封面" prop="image_uri" style="margin-bottom: 30px;">
            <Upload v-model="form.image_uri" />
          </el-form-item>
          <el-form-item label="课程介绍" prop="content" style="margin-bottom: 30px;">
            <Tinymce ref="editor" v-model="form.content" :height="200" />
          </el-form-item>
          <el-form-item label="上课教师" prop="content" style="margin-bottom: 30px;">
            <div class="beginclass">
              <el-row :gutter="20" align="start">
                <el-col v-for="(bitem,index) in ['教师1','教师2','教师3','教师4']" :key="index" :span="6" class="bitemclass">
                  <div>{{ bitem }}</div>
                  <i class="el-icon-circle-close coursedelete" />
                </el-col>
              </el-row>
            </div>
            <el-button type="primary" @click="onSubmit">添加上课教师</el-button>
          </el-form-item>
          <el-form-item label="学习人数">
            <el-input v-model="form.learnpeoples" />
          </el-form-item>
          <el-form-item label="课程价格">
            <el-input v-model="form.learnprices" />
          </el-form-item>
          <el-form-item label="试看时间">
            <el-date-picker v-model="form.time" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="请选择时间" />
          </el-form-item>
          <el-form-item label="排序号">
            <el-input v-model="form.pnumber" />
          </el-form-item>
          <el-form-item label="是否推荐">
            <el-select v-model="form.ispush" default-first-option remote placeholder="请选择">
              <el-option :label="是" :value="1" />
              <el-option :label="否" :value="0" />
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    <!-- <el-col :span="20"><div class="grid-content bg-purple">创建课程</div></el-col> -->
    </el-row>

  </div>
</template>

<script>
import Upload from '@/components/Upload/SingleImage3'
import Tinymce from '@/components/Tinymce'
export default {
  name: 'CourseCreate',
  components: { Upload, Tinymce },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
<style lang="scss">

  .coursecontet {
    // padding: 16px;
    margin: 16px 0px 0px 16px;
    border: 1px solid #EBEEF5;
    border-radius: 5px;
    margin-bottom: 30px;
  }
  .el-input{
    margin-right: 10px;
    padding-right: 10px;
  }

  .titleT{
    // margin-top: 10px;
    background-color: #EBEEF5;
    margin-bottom: 10px;
    line-height: 30px;
    padding-top: 10px;
    padding-left: 18px;
    padding-bottom: 10px;
    width: 100%;
    font-size: 16px;
    // color: #606266;
    vertical-align:middle;
  }

  .beginclass{
    border: 1px solid gray;
    border-radius: 5px;
    margin-bottom: 20px;
    // margin-left: 50px;
    padding-left: 10px;
    width: 100%;
  }
  .bitemclass{
    border: 1px solid gray;
    width: 100px;
    height: 30px;
    margin: 5px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    position: relative;
    .coursedelete{
      position: absolute;
      top: 2px;
      right: 2px;
      color: red;
    }
  }
</style>


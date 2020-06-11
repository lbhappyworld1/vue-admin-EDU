<template>
  <div style="width: 70%" class="coursecontet">
    <!-- <el-row type="flex" class="row-bg" justify="left">
      <el-col :span="6"></el-col>
    </el-row> -->
    <!-- <el-row :gutter="20" type="flex" justify="strat" style="width: 100%"> -->
    <!-- <el-col :span="6"><div class="grid-content bg-purple" center>创建课程</div></el-col> -->
    <!-- <el-col :span="20"><div class="grid-content bg-purple">创建课程</div></el-col> -->
    <!-- </el-row> -->
    <el-form ref="form" :model="form" label-width="90px">
      <el-form-item label="创建课程" class="titleT" />
      <el-form-item label="活动名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type" />
          <el-checkbox label="地推活动" name="type" />
          <el-checkbox label="线下主题活动" name="type" />
          <el-checkbox label="单纯品牌曝光" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助" />
          <el-radio label="线下场地免费" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
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
  }
  .el-input{
    margin-right: 10px;
    padding-right: 10px;
  }

  .titleT{
    background-color: aqua;
  }
</style>


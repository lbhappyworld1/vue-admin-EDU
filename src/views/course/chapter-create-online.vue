<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button v-waves class="filter-item" type="primary" @click="handleFilter">
        返回
      </el-button>
      <el-button v-waves class="filter-item" type="primary" @click="handleFilter">
        刷新
      </el-button>
      <el-button v-waves class="filter-item" type="primary" @click="handleFilter">
        新建章节
      </el-button>
    </div>
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      fit
      highlight-current-row
      style="width: 100%;"
      :show-header="false"
      @sort-change="sortChange"
    >
      <el-table-column align="center">
        <template slot-scope="{row}">
          <div class="columnC">
            <el-row :gutter="20" type="flex" justify="space-between">
              <el-col :span="8">
                <!-- <el-row> -->
                <!-- <span> -->
                <!-- <i class="el-icon-arrow-down" /><el-input v-model="row.id" type="text" placeholder="请输入内容" maxlength="100" show-word-limit /> -->
                <!-- </span> -->
                <!-- <span>{{ row.id }}</span> -->
                <!-- </el-row> -->
                <el-row type="flex" justify="space-between" align="middle">
                  <i class="el-icon-arrow-down dialog-down" />
                  <el-input v-model="row.id" type="text" placeholder="请输入内容" maxlength="100" show-word-limit />
                </el-row>
              </el-col>
              <el-col :span="4">
                <el-row>
                  <el-button size="mini" class="btnright" type="primary">保存</el-button><i class="el-icon-delete" /><span>删除该章节</span>
                </el-row>
              </el-col>
            </el-row>
            <el-row :gutter="20" type="flex" justify="start">
              <span class="chaptertitle">1-1 课程导学</span>
              <el-link type="primary" class="chapterlinktitle">编辑</el-link>
              <el-link type="danger" class="chapterlinktitle">删除</el-link>
              <el-checkbox-group v-model="row.id" class="chaptertitle">
                <el-checkbox label="推荐到APP首页" />
              </el-checkbox-group>
            </el-row>
            <el-row :gutter="20" type="flex" justify="start">
              <span class="chaptertitle">1-1 课程导学</span>
              <el-link type="primary" class="chapterlinktitle">编辑</el-link>
              <el-link type="danger" class="chapterlinktitle">删除</el-link>
              <el-checkbox-group v-model="row.id" class="chaptertitle">
                <el-checkbox label="推荐到APP首页" />
              </el-checkbox-group>
            </el-row>
            <el-row :gutter="20" type="flex" justify="start">
              <span class="chaptertitle">1-1 课程导学</span>
              <el-link type="primary" class="chapterlinktitle">编辑</el-link>
              <el-link type="danger" class="chapterlinktitle">删除</el-link>
              <el-checkbox-group v-model="row.id" class="chaptertitle">
                <el-checkbox label="推荐到APP首页" />
              </el-checkbox-group>
            </el-row>
            <el-row :gutter="20" type="flex" justify="start" align="middle">
              <div class="chaptertitle-add">
                <i class="el-icon-plus" />
              </div>
              <span class="chaptertitle-add-txt">新建课时</span>
            </el-row>
            <el-row :gutter="20" type="flex" justify="start">
              <el-col :span="22" class="chapterdialog">
                <el-col :span="8">
                  <el-form ref="form" :model="form" label-width="100px" label-position="left" size="mini">
                    <el-form-item label="课程名称">
                      <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item v-model="form.value" label="课时类型">
                      <el-select placeholder="请选择" style="width: 100%;">
                        <el-option label="直播" value="1" />
                        <el-option label="点播" value="2" />
                      </el-select>
                      <el-row type="flex" justify="start" align="middle">
                        <el-button size="mini" class="btnchater" type="primary">创建直播</el-button>
                      </el-row>
                    </el-form-item>
                    <el-form-item v-model="form.value" label="关联直播">
                      <el-select placeholder="请选择" style="width: 100%;">
                        <el-option label="赵老师" value="1" />
                        <el-option label="彩老师" value="2" />
                      </el-select>
                    </el-form-item>
                    <el-form-item v-model="form.value" label="关联点播">
                      <el-select placeholder="请选择" style="width: 100%;">
                        <el-option label="赵老师" value="1" />
                        <el-option label="彩老师" value="2" />
                      </el-select>
                      <el-row type="flex" justify="start" align="middle">
                        <el-button size="mini" class="btnchater" type="primary">创建点播</el-button>
                      </el-row>
                    </el-form-item>
                    <el-row type="flex" justify="start" align="middle">
                      <el-button size="mini" class="btnchater" type="primary">保存</el-button>
                      <el-button size="mini" class="btnchater" type="primary">取消</el-button>
                    </el-row>
                  </el-form>
                </el-col>
              </el-col>
            </el-row>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" @pagination="getList" />
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
        <el-form-item label="Type" prop="type">
          <el-select v-model="temp.type" class="filter-item" placeholder="Please select">
            <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
          </el-select>
        </el-form-item>
        <el-form-item label="Date" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date" />
        </el-form-item>
        <el-form-item label="Title" prop="title">
          <el-input v-model="temp.title" />
        </el-form-item>
        <el-form-item label="Status">
          <el-select v-model="temp.status" class="filter-item" placeholder="Please select">
            <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="Imp">
          <el-rate v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="3" style="margin-top:8px;" />
        </el-form-item>
        <el-form-item label="Remark">
          <el-input v-model="temp.remark" :autosize="{ minRows: 2, maxRows: 4}" type="textarea" placeholder="Please input" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Cancel
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          Confirm
        </el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel" />
        <el-table-column prop="pv" label="Pv" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchPv, createArticle, updateArticle, fetchChapterList } from '@/api/course'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      },
      downloadLoading: false,
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
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchChapterList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          this.temp.author = 'vue-element-admin'
          createArticle(this.temp).then(() => {
            this.list.unshift(this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Created Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateArticle(tempData).then(() => {
            const index = this.list.findIndex(v => v.id === this.temp.id)
            this.list.splice(index, 1, this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleDelete(row, index) {
      this.$notify({
        title: 'Success',
        message: 'Delete Successfully',
        type: 'success',
        duration: 2000
      })
      this.list.splice(index, 1)
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData
        this.dialogPvVisible = true
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      return this.list.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    }
  }
}
</script>
<style lang="scss" >
    .columnC{
      border: 1px solid rgba(230, 218, 218, 0.952);
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      border-radius: 10px;
      padding:10px;
      margin: 10px;
    }
    .chapterdialog{
      padding: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      margin: 5px 5px 5px 20px;
      // border: 1px solid red;
      // box-shadow: 2px 2px 4px #c0c4cc, 0 0 6px #c0c4cc;
      // box-shadow: 2px 2px 12px  #c0c4cc;
      // box-shadow: 0px 0px 8px 6px rgba(0,0,0,0.8);
      //  box-shadow: 10px 10px teal inset,10px 10px teal;
    }
    .btnchater{
      margin: 10px 10px 10px 0px;
    }
    .btnright{
        margin-right: 10px;
    }
    .chaptertitle{
        margin-right: 10px;
        margin-top: 3px;
        margin-left: 20px;
        font-size: 13px;
        line-height: 30px;
    }
    .chapterlinktitle{
        margin-left: 5px;
        margin-right: 5px;
    }
    .chaptertitle-add{
        border: 1px solid black;
        border-radius: 5px;
        margin:10px 0px 10px 20px;
        // margin-left: 20px;
        // margin: 20px;
        // height: 85px;
        // width: 85px;
        // text-align: center;
        // float: left;
        font-size: 25px;
        // font-weight: 900;
        color: #071accc2;
        // cursor: pointer;
    }
    .chaptertitle-add-txt{
      margin-left: 10px;
    }
    .el-table__row>td{
      border: none;
    }
    .el-table::before {//去掉最下面的那一条线
      height: 0px;
    }

    .dialog-down{
      // margin-right: 10px;
      margin:0px 10px 0px 10px;
      // padding-right: 10px;
      font-size: 28px;
    }
</style>

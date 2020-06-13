<template>
  <div class="content">
    <el-row type="flex" justify="space-between" :gutter="20">
      <el-col :span="8">
        <el-button class="flesh-item" type="primary">刷新</el-button>
        <el-button class="flesh-item" type="primary">创建老师</el-button>
      </el-col>
      <el-col :span="8">
        <el-row type="flex" justify="end">
          <el-col :span="18">
            <el-input class="searchinput" placeholder="请输入直播名称/关联课时进行搜索" />
          </el-col>
          <el-col :span="6">
            <el-button class="search-item" type="primary">搜索</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      height="600"
      :data="list"
      border
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <!-- <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80" :class-name="getSortClass('id')">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column> -->
      <el-table-column label="老师名称" width="550" align="center">
        <template slot-scope="{row}">
          <!-- <span>{{ row.course_cover}}</span> -->
          <div class="course_cover_img">
            <span>{{ row.title }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="老师账号" align="center">
        <template slot-scope="{row}">
          <span class="link-type" @click="handleUpdate(row)">2020-11-11  15:30</span>
          <!-- <el-tag>{{ row.type | typeFilter }}</el-tag> -->
        </template>
      </el-table-column>
      <el-table-column label="状态" align="center">
        <template>
          <span>直播中</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="200" class-name="small-padding fixed-width">
        <template>
          <!-- <template slot-scope="{row,$index}"> -->
          <el-link type="primary">查看</el-link>
          <el-link type="primary">删除</el-link>
          <el-link type="primary">播放</el-link>
          <el-link type="primary">主要链接</el-link>
        </template>
      </el-table-column>
    </el-table>
    <pagination :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" @pagination="getList" />
  </div>
</template>

<script>
import { fetchList } from '@/api/course'
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  data() {
    return {
      list: null,
      tableKey: 0,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    }
  }
}
</script>

<style lang="scss">
    .content{
        padding: 40px;
        .el-table{
            margin: 10px 0px 0px 0px;
        }
        .searchinput{
            // .el-input{
                border-radius: 0px;
            // }
            // margin-left: 20px;
            // margin-right: 20px;
        }
        // .search-item{
        //     // margin-left: 20px;
        //     // margin-right: 20px;
        // }
        // .search {
        //     background-color: brown;
        // }
    }
</style>

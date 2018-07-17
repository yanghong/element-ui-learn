<template>
  <div class="app-container">
    <div class="filter-contailer">
      <el-form :inline="true" :model="queryParams">

        <el-form-item label="平台" prop="category">
          <el-select style="width: 100%" clearable class="filter-item" v-model="queryParams.category"
                     placehoulder="平台">
            <el-option v-for="item in categoryList" :key="item" :value="item"
                       :label="item"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="模式">
          <el-select style="width: 100%" class="filter-item" v-model="queryParams.companyId"
                     placeholder="模式">
            <el-option v-for="item in companyIdEnums" :key="item.name" :value="item.companyId"
                       :label="item.name"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="品类">
          <el-input v-model="input" placeholder="请输入品类" prefix-icon="el-icon-search"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="fetchData" type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm">清除</el-button>
        </el-form-item>

      </el-form>
    </div>
    <el-table :data="questionableShelflifeList" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row
              style="width: 100%" stripe>
      <el-table-column align="center" label="日期" width="90">
        <template scope="scope">
          <span>{{ scope.row.snapshotDate }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="货主">
        <template scope="scope">
          <span>{{ scope.row.companyName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="类目">
        <template scope="scope">
          <span>{{ scope.row.categoryBd }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="清仓期" width="180">
        <el-table-column prop="scope" label="SKU个数" align="center">
          <template scope="scope">
            <el-button type="text"  align="center" @click="getDetail(scope.row, '清仓期')">{{ scope.row.clearanceSkuNum }}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="scope" label="库存量" align="center">
          <template scope="scope">
            <span>{{ scope.row.clearanceInventory }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="scope" label="库存金额" align="center">
          <template scope="scope">
            <span>{{ scope.row.clearanceAmount }}</span>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column align="center" label="临期" width="180">
        <el-table-column prop="scope" label="SKU个数" align="center">
          <template scope="scope">
            <el-button type="text" align="center" @click="getDetail(scope.row, '临期')">{{ scope.row.expireCloseSkuNum }}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="scope" label="库存量" align="center">
          <template scope="scope">
            <span>{{ scope.row.expireCloseInventory }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="scope" label="库存金额" align="center">
          <template scope="scope">
            <span>{{ scope.row.expireCloseAmount }}</span>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column align="center" label="下架期" width="180">
        <el-table-column prop="scope" label="SKU个数" align="center">
          <template scope="scope">
            <el-button type="text" align="center" @click="getDetail(scope.row, '下架期')">{{ scope.row.shelfOffSkuNum }}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="scope" label="库存量" align="center">
          <template scope="scope">
            <span>{{ scope.row.shelfOffInventory }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="scope" label="库存金额" align="center">
          <template scope="scope">
            <span>{{ scope.row.shelfOffAmount }}</span>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column align="center" label="报废期" width="180">
        <el-table-column prop="scope" label="SKU个数" align="center">
          <template scope="scope">
            <el-button type="text" align="center" @click="getDetail(scope.row, '报废期')">{{ scope.row.defectiveSkuNum }}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="scope" label="库存量" align="center">
          <template scope="scope">
            <span>{{ scope.row.defectiveInventory }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="scope" label="库存金额" align="center">
          <template scope="scope">
            <span>{{ scope.row.defectiveAmount }}</span>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}

</script>

<style>

</style>

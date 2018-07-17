<template>
  <div>
  <el-table :data="data_table" style="width: 100%">
    <el-table-column prop="calendar" label="时间" align="center" style="width: 180px" ></el-table-column>
    <el-table-column prop="companyId" label="货主" align="center" style="width: 180px" ></el-table-column>
    <el-table-column prop="category" label="类目" align="center" style="width: 180px" ></el-table-column>
    <!--<el-table-column label="清仓期" align="center" style="width: 180px" >-->
      <!--<el-table-column label="SKU个数" prop="clearance.SKU_num" align="center" style="width: 60px"></el-table-column>-->
      <!--<el-table-column label="库存量" prop="clearance.stock_num" align="center" style="width: 60px"></el-table-column>-->
      <!--<el-table-column label="库存个数" prop="clearance.stock_amount" align="center" style="width: 60px"></el-table-column>-->
    <!--</el-table-column>-->
    <!--<el-table-column label="临期" align="center" style="width: 180px" >-->
      <!--<el-table-column label="SKU个数" prop="soon_to_expire.SKU_num" align="center" style="width: 60px"></el-table-column>-->
      <!--<el-table-column label="库存量" prop="soon_to_expire.stock_num" align="center" style="width: 60px"></el-table-column>-->
      <!--<el-table-column label="库存个数" prop="soon_to_expire.stock_amount" align="center" style="width: 60px"></el-table-column>-->
    <!--</el-table-column>-->
    <!--<el-table-column label="临期" align="center" style="width: 180px" >-->
      <!--<el-table-column label="SKU个数" prop="inventory_out.SKU_num" align="center" style="width: 60px"></el-table-column>-->
      <!--<el-table-column label="库存量" prop="inventory_out.stock_num" align="center" style="width: 60px"></el-table-column>-->
      <!--<el-table-column label="库存个数" prop="inventory_out.stock_amount" align="center" style="width: 60px"></el-table-column>-->
    <!--</el-table-column>-->
  </el-table>
    <div class="date_picker">
      <vue-datetime-picker class="vue-picker1" name="picker1" :model.sync="result">
      </vue-datetime-picker>
    </div>
  </div>
</template>

<script>
// var Vue = require('vue')

// var vm = new Vue({
//   el: '#app',
//   components: {
//     'vue-datetime-picker': require('vue-datetimepicker')
//   }

// })

export default {
  name: 'table',
  date () {
    return {
      data_table: [{
        calendar: '2018-07-04',
        companyId: '跨境店铺',
        category: '奶粉'
      },
      {
        calendar: '2018-07-03',
        companyId: '跨境店铺',
        category: '用品'
      }]
    }
  }
}
</script>

<style scoped>

</style>

<!--<template>-->
  <!--<el-table-->
    <!--:data="tableData"-->
    <!--style="width: 100%" align="center">-->
    <!--<el-table-column-->
      <!--type="index"-->
      <!--:index="indexMethod" align="center">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
      <!--prop="date"-->
      <!--label="日期"-->
      <!--width="180" align="center">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
      <!--prop="name"-->
      <!--label="姓名"-->
      <!--width="180" align="center">-->
    <!--</el-table-column>-->
    <!--<el-table-column-->
      <!--prop="address"-->
      <!--label="地址"-->
      <!--width="280" align="center">-->
    <!--</el-table-column>-->
  <!--</el-table>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
  <!--data () {-->
    <!--return {-->
      <!--tableData: [{-->
        <!--date: '2016-05-03',-->
        <!--name: '王小虎',-->
        <!--province: '上海',-->
        <!--city: '普陀区',-->
        <!--address: '上海市普陀区金沙江路 1518 弄',-->
        <!--zip: 200333,-->
        <!--tag: '家'-->
      <!--}, {-->
        <!--date: '2016-05-02',-->
        <!--name: '王小虎',-->
        <!--province: '上海',-->
        <!--city: '普陀区',-->
        <!--address: '上海市普陀区金沙江路 1518 弄',-->
        <!--zip: 200333,-->
        <!--tag: '公司'-->
      <!--}, {-->
        <!--date: '2016-05-04',-->
        <!--name: '王小虎',-->
        <!--province: '上海',-->
        <!--city: '普陀区',-->
        <!--address: '上海市普陀区金沙江路 1518 弄',-->
        <!--zip: 200333,-->
        <!--tag: '家'-->
      <!--}, {-->
        <!--date: '2016-05-01',-->
        <!--name: '王小虎',-->
        <!--province: '上海',-->
        <!--city: '普陀区',-->
        <!--address: '上海市普陀区金沙江路 1518 弄',-->
        <!--zip: 200333,-->
        <!--tag: '公司'-->
      <!--}]-->
    <!--}-->
  <!--},-->
  <!--methods: {-->
    <!--indexMethod (index) {-->
      <!--return index * 2-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</script>-->

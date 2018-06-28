<template>
  <div>
    <el-button @click="show = !show">Click Me</el-button>
    <div style="display: flex;vertical-align: middle;">
      <transition name="el-fade-in-linear">
        <div style="vertical-align: middle;" v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>
    <div style="vertical-align: middle;margin-top: 15px;" v-show="show" class="transition-box">.el-fade-in-linear2</div>
  </div>
</template>

<script>
export default {
  name: 'fade',
  data: () => ({
    show: true
  })
}
</script>

<style>
  .transition-box {
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 15px;
  }
</style>

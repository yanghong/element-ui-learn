<template>
  <div class="box" align="center">
    <span data-text="B">B</span>
    <span data-text="U">U</span>
    <span data-text="T">T</span>
    <span data-text="T">T</span>
    <span data-text="O">O</span>
    <span data-text="N">N</span>
  </div>
</template>

<script>
export default {
  name: 'BUTTONchange'
}
</script>

<style scoped>
  div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: papayawhip;
  }

  .box {
    width: 200px;
    height: 60px;
    border: 2px solid black;
    text-align: center;
    font-size: 30px;
    line-height: 60px;
    font-family: sans-serif;
    overflow: hidden;
  }

  .box span {
    display: inline-block;
    color: blue;
    transition: 0.5s;
  }

  .box span:nth-child(odd) {
    transform: translateY(-100%);
  }

  .box span:nth-child(even) {
    transform: translateY(100%);
  }

  .box span::before {
    content: attr(data-text);
    position: absolute;
    color: red;
  }

  .box span:nth-child(odd)::before {
    transform: translateY(100%);
  }

  .box span:nth-child(even)::before {
    transform: translateY(-100%);
  }

  .box:hover span {
    transform: translateY(0);
  }
</style>

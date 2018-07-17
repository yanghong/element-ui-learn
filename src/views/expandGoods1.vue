<template>
  <div class="app-container">
    <div class="filter-container">
      1
    </div>

  </div>
</template>

<script>
export default {
  name: 'expandGoods1',
  data () {
    return {
      input: '',
      companyIdEnums: {
        name: ''
      },
      queryParams: {
        category: '1',
        companyId: ''
      }
    }
  },
  methods: {
    fetchData () {
    },
    resetForm () {
    }
  }
}

</script>

<style>

</style>

<template>
  <div class="demo-button">
    <div>
      <ex-select v-model="value" placeholder="请选择" clearable :originOptions="options">
      </ex-select>
    </div>
  </div>
</template>

<script>
  import exSelect from '../../packages/select/src/select.vue'
  export default {
    name: 'base-index',
    components: {
      exSelect
    },
    data() {
      const getMulitData = () => {
        let arr = []
        for (let i=0; i< 50; i++) {
          arr.push({ value: i, label: '选项'+i })
        }
        return arr
      }
      return {
        options: getMulitData(),
        value: ''
      }
    }
  }
</script>
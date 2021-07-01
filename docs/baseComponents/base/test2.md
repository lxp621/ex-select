# 测试案例2
---

<template>
  <div class="demo-button">
    <div>
      <ex-select v-model="value" placeholder="请选择" filterable>
        <ex-option v-for="item in options" :label="item.label" :value="item.value">
        </ex-option>
      </ex-select>
    </div>
  </div>
</template>

<script>
import exSelect from '../../../packages/select/src/select1.vue'
import exOption from '../../../packages/select/src/option1.vue'
export default {
  name: 'testWrap1',
  components: {
    exSelect,
    exOption
  },
  data() {
  const getMulitData = () => {
     let arr = []
     for (let i=0; i< 50; i++) {
      arr.push({ value: i, label: '选项'+i })
     }
     console.log('arr=', arr)
     return arr
  }
    return {
      options: getMulitData(),
      value: ''
    }
  }
}
</script>
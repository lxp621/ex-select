> 基于`element-ui`和`vue-virtual-scroller`的下拉选择器，用虚拟列表的方式逐级渲染列表。适用于数据量较大的场景。

## install 安装

```shell
npm i ex-select --save
# or
yarn add ex-select
```

## 全局调用

在main.js中写入下面的代码

```javascript
import 'ex-select/dist/bundle.css'
import exSelect from 'ex-select'
Vue.use(exSelect)
```

页面中直接使用

```html
<template>
  <div class="demo-button">
    <div>
      <ex-select v-model="value" placeholder="请选择" clearable :originOptions="options">
      </ex-select>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      options: [
        {
          value: 'test',
          label: '测试'
        }]
    }
  }
}
</script>
```

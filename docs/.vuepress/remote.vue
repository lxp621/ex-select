<template>
  <div class="demo-button">
    <div>
      <ex-select v-model="value" placeholder="请选择" filterable clearable multiple remote
                 :originOptions="options" reserve-keyword :remote-method="remoteMethod" :loading="loading">
      </ex-select>
    </div>
  </div>
</template>

<script>
  import exSelect from '../../packages/select/src/select.vue'
  export default {
    name: 'test-remote',
    components: {
      exSelect
    },
    data() {
      return {
        options: [],
        value: '',
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
          "Arkansas", "California", "Colorado",
          "Connecticut", "Delaware", "Florida",
          "Georgia", "Hawaii", "Idaho", "Illinois",
          "Indiana", "Iowa", "Kansas", "Kentucky",
          "Louisiana", "Maine", "Maryland",
          "Massachusetts", "Michigan", "Minnesota",
          "Mississippi", "Missouri", "Montana",
          "Nebraska", "Nevada", "New Hampshire",
          "New Jersey", "New Mexico", "New York",
          "North Carolina", "North Dakota", "Ohio",
          "Oklahoma", "Oregon", "Pennsylvania",
          "Rhode Island", "South Carolina",
          "South Dakota", "Tennessee", "Texas",
          "Utah", "Vermont", "Virginia",
          "Washington", "West Virginia", "Wisconsin",
          "Wyoming"]
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return {value: `value:${item}`, label: `label:${item}`};
      });
    },
    methods: {
      remoteMethod (query) {
        if (query !== '') {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1
            })
          }, 200)
        } else {
          this.options = []
        }
      }
    }
  }
</script>
<template>
  <div v-loading="loading" class="zyd-line-container">
    <div v-if="loading || dataSource.length > 0" class="zyd-line" ref="zydLine"></div>
    <ZydEmpty
      :url="emptyData.url"
      :desc="emptyData.desc"
      v-if="dataSource.length === 0 && !loading"
    />
  </div>
</template>
<script>
import ZydEmpty from './ZydEmpty.vue';

export default {
  name: 'ZydLine',
  components: { ZydEmpty },
  props: {
    /**
     * 按照设计稿，设计稿多高就设置多高
     */
    loading: {
      default: false,
      type: Boolean,
    },
    dataSource: {
      default: () => {
        return [];
      },
      type: Array,
    },
    /**
     * 按照设计稿，设计稿多高就设置多高
     */
    emptyData: {
      default: () => {
        return {};
      },
      type: Object,
    },
  },
  data() {
    return {};
  },
  mounted() {
    // this.init();
  },
  watch: {
    dataSource: function (values, oldValue) {
      this.init();
    },
  },
  methods: {
    init() {
      const myChart = this.$echarts.init(this.$refs.zydLine);
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: this.dataSource || [],
            type: 'line',
            smooth: true,
          },
        ],
      };
      this.$nextTick(() => {
        myChart.setOption(option);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.zyd-line-container {
  width: 100%;
  height: 300px;
  background: #fff;
  .zyd-line {
    width: 100%;
    height: 100%;
  }
}
</style>

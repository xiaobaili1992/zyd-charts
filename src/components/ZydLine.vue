<template>
  <div v-loading="loading" class="zyd-line-container">
    <div v-if="loading || Object.keys(dataSource).length > 0" class="zyd-line" ref="zydLine"></div>
    <ZydEmpty
      :url="emptyData.url"
      :desc="emptyData.desc"
      v-if="Object.keys(dataSource).length === 0 && !loading"
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
    typeData: {
      default: () => {
        return [];
      },
      type: Array,
    },
    xData: {
      default: () => {
        return ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
      },
      type: Array,
    },
    /**
     * 传入的原始数据
     */
    dataSource: {
      default: () => {
        return {};
      },
      type: Object,
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
    dataSource: function (values) {
      console.log('============> watch dataSource', values);
      console.log('============> watch xData', this.xData);
      this.init(this.xData, values, this.typeData);
    },
  },
  methods: {
    init(xData, data, typeData) {
      const source = this.dataFormat(xData, data);
      const series = this.seriesFormat(typeData, data);
      const myChart = this.$echarts.init(this.$refs.zydLine);
      const option = {
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
        },
        yAxis: {
          type: 'value',
        },
        dataset: {
          source,
        },
        series,
      };
      this.$nextTick(() => {
        myChart.setOption(option);
      });
    },
    seriesFormat(typeData, data) {
      if (typeData) {
        return typeData.map((item) => ({
          type: item,
        }));
      }
      return Object.keys(data).map((_) => ({ type: 'line' }));
    },
    dataFormat(xData, data) {
      const keys = Object.keys(data);
      const arr = [['week', ...keys]];
      xData.forEach((item, index) => {
        arr.push([item, ...keys.map((item) => data[item][index])]);
      });
      console.log('data format', arr);
      return arr;
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

<template>
  <div>
    <el-button type="primary" size="default" @click="onChangeY">Y轴数据变化</el-button>
    <ZydLine
      ref="zydLine"
      :loading="loading"
      :xData="xData"
      :typeData="typeData"
      :dataSource="dataSource"
      :emptyData="emptyData"
    ></ZydLine>
  </div>
</template>

<script>
import { ZydLine } from '../index.js';

const defaultXData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default {
  components: {
    ZydLine,
  },
  data() {
    return {
      loading: false,
      typeData: ['line', 'bar', 'line'],
      xData: [...defaultXData],
      dataSource: {},
      emptyData: {
        desc: '没有数据',
      },
    };
  },
  mounted() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.dataSource = {
        product1: [150, 230, 224, 218, 135, 147, 260],
        product2: [113, 130, 204, 118, 195, 187, 290],
        product3: [183, 190, 104, 168, 125, 117, 250],
      };
    }, 2000);
  },
  methods: {
    onChangeX() {
      this.xData = defaultXData.map((item) => {
        const num = ~~(Math.random() * 100);
        return `${item}_${num}`;
      });
      console.log('============> this.xData', this.xData);
    },
    onChangeY() {
      this.dataSource = {
        product1: this.createRandomData(),
        product2: this.createRandomData(),
        product3: this.createRandomData(),
      };
      this.onChangeX();
    },
    createRandomData() {
      return new Array(7).fill(1).map((item) => {
        return item * ~~(Math.random() * 100);
      });
    },
  },
};
</script>

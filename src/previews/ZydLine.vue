<template>
  <div>
    <ZydLine
      ref="zydLine"
      :loading="loading"
      :dataSource="dataSource"
      :emptyData="emptyData"
    ></ZydLine>
  </div>
</template>

<script>
import { ZydLine } from '../index.js';

export default {
  components: {
    ZydLine,
  },
  data() {
    return {
      loading: false,
      dataSource: [],
      emptyData: {
        desc: '没有数据',
      },
    };
  },
  mounted() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.dataSource = [150, 230, 224, 218, 135, 147, 260];
    }, 2000);
  },
};
</script>

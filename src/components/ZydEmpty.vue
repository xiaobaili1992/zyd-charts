<template>
  <div class="zyd-empty">
    <img :src="url" alt="empty" />
    <p>{{ desc }}</p>
    <!-- @slot 空状态自定义内容，一般设置跳转按钮 -->
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ZydEmpty',
  props: {
    /**
     * 空图片的url
     */
    url: {
      default: 'https://dee-static.oss-cn-beijing.aliyuncs.com/dee-web/empty-data.png',
      type: String,
    },
    /**
     * 空状态的描述
     */
    desc: {
      default: '暂无数据',
      type: String,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.zyd-empty {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 214px;
    height: 129px;
  }
  p {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 14px;
    color: #8c8c8c;
    font-style: normal;
    margin: 0;
    padding: 16px;
  }
}
</style>

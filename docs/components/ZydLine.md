# ZydLine

<ClientOnly>
<CodePreview>
<template slot="preview">
<ZydLine />
</template>
<template slot="code">

```vue
<template>
  <div>
    <ZydLine ref="zydLine" :loading="loading" :dataSource="dataSource"></ZydLine>
  </div>
</template>

<script>
import { ZydLine } from 'zyd-charts';

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
      this.dataSource = [];
      this.$refs.zydLine?.init(this.dataSource);
    }, 2000);
  },
};
</script>
```

</template>
</CodePreview>
</ClientOnly>

## Props

| Prop name  | Description                      | Type    | Values | Default |
| ---------- | -------------------------------- | ------- | ------ | ------- |
| loading    | 按照设计稿，设计稿多高就设置多高 | boolean | -      | false   |
| dataSource | 按照设计稿，设计稿多高就设置多高 | array   | -      | []      |
| emptyData  |                                  | object  | -      | {}      |

> functional

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
    <ZydLine
      ref="zydLine"
      :loading="loading"
      :dataSource="dataSource"
      :emptyData="emptyData"
    ></ZydLine>
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
      this.dataSource = [150, 230, 224, 218, 135, 147, 260];
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
| dataSource | 传入的原始数据                   | array   | -      | []      |
| emptyData  | 按照设计稿，设计稿多高就设置多高 | object  | -      | {}      |

> functional

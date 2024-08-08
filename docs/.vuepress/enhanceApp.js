import * as echarts from 'echarts';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({ Vue }) => {
  Vue.use(ElementUI);
  Vue.prototype.$echarts = echarts;
};

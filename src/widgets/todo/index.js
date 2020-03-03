
import ThemeHoc from '@lugia/theme-hoc';
import Todo from './todo';

export default ThemeHoc(Todo, 'Todo', { hover: true, active: true });  //{ hover: true, active: true } 表示组件内部是否支持hover等状态

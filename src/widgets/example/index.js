import React from 'react';
import ThemeHoc from '@lugia/theme-hoc';

class Example extends React.Component<any, any> {
  render() {
    return (
     <div>example</div>
    );
  }
}

export default ThemeHoc(Example, 'Example', { hover: true, active: true });  //{ hover: true, active: true } 表示组件内部是否支持hover等状态
// 组件必须以 ThemeHoc 包裹后进行导出,否则无法配置主题

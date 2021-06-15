import React from 'react';
import {createRoute} from '@lugia/lugiax-router';
const router = {
  '/': {
    exact: true,
    render: async () => import('./widgets/button/demo'),
  },
};
export default () => {
  return createRoute(router);
};

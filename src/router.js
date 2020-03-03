/**
 *
 *
 * @flow
 */
export default {
  '/': {
    exact: true,
    render: async () => import('./widgets/todo/demo'),
  },
};

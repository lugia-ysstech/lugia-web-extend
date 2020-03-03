import React, { Component } from 'react';
import { createRoute, go } from '@lugia/lugiax-router';
import router from './router';

export default () => {
  return createRoute(router);
};

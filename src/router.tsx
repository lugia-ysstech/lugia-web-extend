/**
 *
 *
 * @flow
 */

import React from "react";
import { createRoute } from "@lugia/lugiax-router";
const router = {
  "/": {
    exact: true,
    render: async () => import("./widgets/button/demo")
  },
  "/number": {
    exact: true,
    render: async () => import("./widgets/number/demo")
  }
};
export default () => {
  return createRoute(router);
};

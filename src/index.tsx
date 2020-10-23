import React from "react";
import {createBrowserHistory} from "history";
import {createApp, render} from "@lugia/lugiax-router";
import "@lugia/lugia-web/dist/css/global.css";
import Router from "./router";

const history = createBrowserHistory();

const App = createApp(
  {
    "/": {
      component: Router
    }
  },
  history
);

render(() => {
  return <App />;
}, "root");

/* @refresh reload */
import "./index.css";

import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";

// import "@lidarbtc/solid-plyr/dist/esm/production/index.css";

import App from "./app";

import Home from "./pages/home";
// const Error404 = lazy(() => import("./pages/notfound"));
// <Route path="**" component={Error404} />
const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <MetaProvider>
      <Router root={App}>
        <Route path="/" component={Home} />
      </Router>
    </MetaProvider>
  ),
  root,
);

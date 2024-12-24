import React from "react";
import ReactDOM from "react-dom/client"; // Use react-dom/client for React 18
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assests/font-awesome/css/all.css";

const engine = new Styletron();
const rootElement = document.getElementById("root");

// Create a root using React 18's createRoot
const root = ReactDOM.createRoot(rootElement);

// Use the root to render your app
root.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>
);

// Keep the service worker registration as it was
serviceWorker.unregister();

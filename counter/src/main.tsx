import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const render = (container: Element) => {
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
};

export default render;

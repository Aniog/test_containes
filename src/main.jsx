import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

const rootElement = document.getElementById("root");
window.__MAIN_STAGE__ = "root-found";

function renderFatalError(error, prefix = "runtime error") {
  const message = error?.stack || error?.message || String(error);
  rootElement.innerHTML = `
    <pre style="margin:0;min-height:100vh;padding:24px;white-space:pre-wrap;background:#171315;color:#f6f0ea;font:14px/1.6 Inter, sans-serif;">${prefix}\n${message}</pre>
  `;
}

class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    if (this.state.error) {
      const message = this.state.error?.stack || this.state.error?.message || String(this.state.error);
      const componentStack = this.state.info?.componentStack || "";

      return (
        <pre
          style={{
            margin: 0,
            minHeight: "100vh",
            padding: "24px",
            whiteSpace: "pre-wrap",
            background: "#171315",
            color: "#f6f0ea",
            font: "14px/1.6 Inter, sans-serif",
          }}
        >
          {`render error\n${message}${componentStack ? `\n\ncomponent stack\n${componentStack}` : ""}`}
        </pre>
      );
    }

    return this.props.children;
  }
}

window.addEventListener("error", (event) => {
  window.__MAIN_STAGE__ = `window-error:${event.message || "unknown"}`;
  renderFatalError(event.error || event.message);
});

window.addEventListener("unhandledrejection", (event) => {
  window.__MAIN_STAGE__ = "unhandledrejection";
  renderFatalError(event.reason);
});

window.__MAIN_STAGE__ = "before-app-import";

import("./App.jsx")
  .then(({ default: App }) => {
    window.__MAIN_STAGE__ = "app-imported";
    const root = ReactDOM.createRoot(rootElement);
    window.__MAIN_STAGE__ = "root-created";
    root.render(
      <React.StrictMode>
        <RootErrorBoundary>
          <App />
        </RootErrorBoundary>
      </React.StrictMode>,
    );
    window.__MAIN_STAGE__ = "render-called";
  })
  .catch((error) => {
    window.__MAIN_STAGE__ = "app-import-catch";
    renderFatalError(error, "import error");
  });

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    const details = error?.stack || error?.message || String(error);
    renderError(`React render error\n${details}`);
  }

  render() {
    if (this.state.error) {
      const details =
        this.state.error?.stack || this.state.error?.message || String(this.state.error);

      return (
        <div
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "24px",
            background: "#f7f2eb",
            color: "#2a221d",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <div
            style={{
              width: "min(820px, 100%)",
              borderRadius: "24px",
              border: "1px solid rgba(184, 154, 105, 0.35)",
              background: "#fdf9f3",
              boxShadow: "0 18px 40px rgba(42, 34, 29, 0.12)",
              padding: "24px",
            }}
          >
            <p style={{ margin: 0, letterSpacing: "0.22em", textTransform: "uppercase", color: "#b89a69", fontSize: "12px" }}>
              Velmora diagnostics
            </p>
            <h1 style={{ margin: "12px 0 0", fontFamily: '"Cormorant Garamond", serif', fontSize: "40px", lineHeight: 1.1 }}>
              The storefront hit a render error
            </h1>
            <pre
              style={{
                margin: "18px 0 0",
                whiteSpace: "pre-wrap",
                overflow: "auto",
                borderRadius: "18px",
                background: "rgba(42, 34, 29, 0.06)",
                padding: "16px",
                font: "12px/1.6 Inter, sans-serif",
                color: "#2a221d",
              }}
            >
              {details}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function createErrorSurface() {
  const errorId = "velmora-runtime-error";

  return (message) => {
    let node = document.getElementById(errorId);

    if (!node) {
      node = document.createElement("pre");
      node.id = errorId;
      node.style.position = "fixed";
      node.style.left = "16px";
      node.style.right = "16px";
      node.style.bottom = "16px";
      node.style.zIndex = "999999";
      node.style.maxHeight = "40vh";
      node.style.overflow = "auto";
      node.style.margin = "0";
      node.style.padding = "12px 14px";
      node.style.borderRadius = "16px";
      node.style.background = "rgba(42, 34, 29, 0.94)";
      node.style.color = "#fdf9f3";
      node.style.font = "12px/1.5 Inter, sans-serif";
      node.style.whiteSpace = "pre-wrap";
      node.style.boxShadow = "0 18px 40px rgba(42, 34, 29, 0.18)";
      document.body.appendChild(node);
    }

    node.textContent = message;
  };
}

const renderError = createErrorSurface();

function setupRuntimeDiagnostics() {
  window.addEventListener("error", (event) => {
    const details = event.error?.stack || event.message || "Unknown runtime error";
    renderError(`Runtime error\n${details}`);
  });

  window.addEventListener("unhandledrejection", (event) => {
    const reason = event.reason;
    const details =
      typeof reason === "string"
        ? reason
        : reason?.stack || reason?.message || JSON.stringify(reason, null, 2);

    renderError(`Unhandled promise rejection\n${details}`);
  });
}

if (import.meta.env.DEV) {
  setupRuntimeDiagnostics();
  import("./visual-edit/index.js");
}

const root = ReactDOM.createRoot(document.getElementById("root"));

async function bootstrap() {
  try {
    const { default: App } = await import("./App.jsx");

    root.render(
      <React.StrictMode>
        <RootErrorBoundary>
          <App />
        </RootErrorBoundary>
      </React.StrictMode>,
    );
  } catch (error) {
    const details = error?.stack || error?.message || String(error);
    console.error("Failed to bootstrap Velmora storefront", error);
    renderError(`Bootstrap error\n${details}`);
  }
}

bootstrap();

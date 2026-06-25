const root = document.getElementById("root");

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

if (root && root.dataset.staticPage !== "true") {
  Promise.all([
    import("react"),
    import("react-dom/client"),
    import("./App.jsx"),
  ]).then(([{ default: React }, { default: ReactDOM }, { default: App }]) => {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  });
}

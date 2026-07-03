import React from "react";
import ReactDOM from "react-dom/client";

function Root() {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>VELMORA TEST</h1>
      <p>If you see this, React is mounting.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);

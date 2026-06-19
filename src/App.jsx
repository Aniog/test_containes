import { useEffect } from "react";
import AppRouter from "@/router";

// Bridge for the preview iframe so route commands from the parent work.
// Mounts above the RouterProvider, but is only meaningful in the preview
// environment — no-op in production.
function PreviewNavigateBridge() {
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, { replace = false } = {}) => {
      if (replace) window.history.replaceState({}, "", path);
      else window.history.pushState({}, "", path);
      window.dispatchEvent(new PopStateEvent("popstate", { state: {} }));
    };
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
    };
  }, []);
  return null;
}

export default function App() {
  return (
    <>
      <PreviewNavigateBridge />
      <AppRouter />
    </>
  );
}

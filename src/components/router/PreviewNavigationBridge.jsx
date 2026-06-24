import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PreviewNavigationBridge() {
  const navigate = useNavigate();
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate;
    return () => {
      if (window.__STRIKINGLY_PREVIEW_NAVIGATE__ === navigate) {
        delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
      }
    };
  }, [navigate]);
  return null;
}

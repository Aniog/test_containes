import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PreviewBridge() {
  const navigate = useNavigate();
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts = {}) => {
      navigate(path, { replace: !!opts.replace });
    };
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
    };
  }, [navigate]);
  return null;
}

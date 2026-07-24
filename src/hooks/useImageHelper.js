import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  loadStrkImages,
  disconnectStrkImages,
} from "@/lib/strk-img";

/**
 * Runs the Strikingly stock image resolver on every route change against
 * the provided container. Cleanup disconnects the SDK's MutationObserver so
 * old route containers are not watched forever.
 */
export function useImageHelper(containerRef) {
  const { pathname } = useLocation();
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      loadStrkImages(containerRef.current);
    });
    return () => {
      window.cancelAnimationFrame(frame);
      disconnectStrkImages(containerRef.current);
    };
  }, [pathname, containerRef]);
}

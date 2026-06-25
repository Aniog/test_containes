import { useEffect } from "react";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Hard fallback resolver. Scans the document (or a subtree) for any
 * <img data-strk-img-id="..."> whose src is still the SVG placeholder,
 * and directly sets src from the config. Runs once on mount + on deps
 * change, then observes for newly added elements. This bypasses the
 * @strikingly/sdk ImageHelper MutationObserver entirely so that any
 * images that fall through the helper still resolve.
 */
export function useResolvedStrkImages(targetRef, deps = []) {
  useEffect(() => {
    const root = targetRef?.current ?? document;
    const pendingImages = new Set();

    const collect = (scope) => {
      if (!scope) return;
      if (scope instanceof HTMLElement && scope.matches?.('[data-strk-img-id]')) {
        pendingImages.add(scope);
      }
      const found = scope.querySelectorAll?.('[data-strk-img-id]') ?? [];
      found.forEach((el) => pendingImages.add(el));
    };

    const resolveImage = (img) => {
      const id = img.getAttribute("data-strk-img-id");
      if (!id) return;
      const entry = strkImgConfig[id];
      if (!entry || !entry.results || entry.results.length === 0) return;
      const pickedId = entry.picked;
      const result =
        entry.results.find((r) => String(r.id) === String(pickedId)) ??
        entry.results[0];
      if (!result?.url) return;
      const current = img.getAttribute("src");
      if (current && current.startsWith("http")) return;
      img.style.opacity = "0";
      img.style.transition = "opacity 0.6s ease";
      img.onload = () => {
        img.style.opacity = "1";
      };
      img.setAttribute("src", result.url);
      if (result.alt && !img.getAttribute("alt")) {
        img.setAttribute("alt", result.alt);
      }
    };

    collect(root);
    pendingImages.forEach(resolveImage);

    let observer = null;
    if (typeof MutationObserver !== "undefined" && root) {
      observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          m.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              if (node.matches?.('[data-strk-img-id]')) resolveImage(node);
              node.querySelectorAll?.('[data-strk-img-id]').forEach(resolveImage);
            }
          });
        }
      });
      observer.observe(root, { childList: true, subtree: true });
    }

    return () => {
      if (observer) observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

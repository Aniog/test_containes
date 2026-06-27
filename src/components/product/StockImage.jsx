import { useEffect, useRef } from "react";

export default function StockImage({
  alt,
  imgId,
  query,
  ratio = "3x2",
  width = 600,
  className = "",
  style = {},
  objectFit = "cover",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const updateBackground = () => {
      el.style.backgroundSize = objectFit === "contain" ? "contain" : "cover";
    };
    updateBackground();
  }, [objectFit]);

  return (
    <img
      ref={ref}
      alt={alt}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      className={className}
      style={{ objectFit, ...style }}
    />
  );
}

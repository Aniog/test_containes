import { useId, useMemo } from "react";

const placeholderSvg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export function ProductImage({
  product,
  ratio = "1x1",
  width = 600,
  hover = false,
  className,
  alt,
  suffix = "",
}) {
  const uniqueId = useId().replace(/:/g, "");
  const uniqueSuffix = suffix || uniqueId;
  const titleId = `prod-title-${product.id}-${uniqueSuffix}`;
  const descId = `prod-desc-${product.id}-${uniqueSuffix}`;
  const imgId = hover
    ? `prod-hover-${product.id}-${uniqueSuffix}`
    : `prod-main-${product.id}-${uniqueSuffix}`;

  const query = useMemo(() => {
    const parts = [product.name, product.category, "gold jewelry"].filter(Boolean);
    return parts.join(" ");
  }, [product.name, product.category]);

  return (
    <div className={className}>
      <span id={titleId} className="sr-only">
        {product.name}
      </span>
      <span id={descId} className="sr-only">
        {product.description || query}
      </span>
      <img
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={placeholderSvg}
        alt={alt || product.name}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

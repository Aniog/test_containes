import { placeholderSrc } from "@/data/products";

export function ProductImage({
  product,
  index = 0,
  className = "",
  ratio = "4x5",
  width = 600,
}) {
  const image = product.images[index] || product.images[0];
  if (!image) return null;

  return (
    <img
      alt={product.name}
      className={className}
      data-strk-img-id={image.imgId}
      data-strk-img={`[${product.descId}] [${product.titleId}]`}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={placeholderSrc}
      loading="lazy"
    />
  );
}

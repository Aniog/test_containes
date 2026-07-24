export default function ProductImage({
  query,
  alt,
  ratio = "4x3",
  width = 600,
  className = "",
  imgId,
}) {
  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
      loading="lazy"
    />
  );
}

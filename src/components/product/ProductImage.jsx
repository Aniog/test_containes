export default function ProductImage({ product, imgId, className = '', ratio = '4x3', width = '800' }) {
  return (
    <img
      alt={product.name}
      className={`h-full w-full object-cover ${className}`}
      data-strk-img-id={imgId}
      data-strk-img={`[${product.descId}] [${product.titleId}]`}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
    />
  )
}

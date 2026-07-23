import strkImgConfig from '@/strk-img-config.json'

const getProductImageUrl = (product, variant) =>
  strkImgConfig?.[`velmora-${product.id}-${variant}`]?.results?.[0]?.url ||
  strkImgConfig?.[`velmora-${product.id}-card-a`]?.results?.[0]?.url

export default function ProductImage({ product, variant = 'primary', className = '' }) {
  return (
    <img
      src={getProductImageUrl(product, variant)}
      alt={product.name}
      className={className}
    />
  )
}

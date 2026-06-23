import { getProductArtwork } from './productArtwork.js'

export default function ProductImage({ product, variant = 'main', className = '' }) {
  return <img alt={product.name} className={className} src={getProductArtwork(product, variant)} />
}

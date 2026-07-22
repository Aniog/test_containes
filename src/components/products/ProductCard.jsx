import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import ProductImage from './ProductImage'

export default function ProductCard({ product, onAdd, compact = false }) {
  return (
    <article className="group relative bg-velmora-porcelain text-velmora-espresso">
      <div className="relative aspect-[4/5] overflow-hidden border border-velmora-mist bg-velmora-blush">
        <Link to={`/products/${product.slug}`} className="block h-full" aria-label={`View ${product.name}`}>
          <ProductImage product={product} imageId={product.primaryImgId} queryId={`card-${product.id}-primary`} className="absolute inset-0" ratio="4x3" width="700" />
          <ProductImage product={product} imageId={product.hoverImgId} queryId={`card-${product.id}-hover`} className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" ratio="4x3" width="700" />
        </Link>
        <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Button type="button" variant="accent" className="w-full px-4 py-3 text-[0.65rem]" onClick={() => onAdd(product)}>
            Add to Cart
          </Button>
        </div>
      </div>
      <div className={compact ? 'pt-4' : 'pt-5'}>
        <p className="text-[0.65rem] font-semibold uppercase tracking-luxury text-velmora-taupe">{product.type}</p>
        <Link to={`/products/${product.slug}`} className="mt-2 block font-serif text-xl uppercase tracking-luxury text-velmora-espresso transition hover:text-velmora-champagne">
          {product.name}
        </Link>
        <div className="mt-2 flex items-center justify-between text-sm text-velmora-taupe">
          <span>{product.material}</span>
          <span className="font-semibold text-velmora-espresso">${product.price}</span>
        </div>
      </div>
    </article>
  )
}

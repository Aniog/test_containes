import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/lib/cart'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'

function ProductCardImages({ product }) {
  const imageClass = 'aspect-[4/5] w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105'
  const hoverClass = 'absolute inset-0 aspect-[4/5] h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-105'

  if (product.id === 'vivid-aura-jewels') {
    return (
      <>
        <img alt="Vivid Aura Jewels styled on warm neutral jewelry set" className={imageClass} data-strk-img-id="product-vivid-aura-primary-9b7d2a" data-strk-img="[product-vivid-aura-desc] [product-vivid-aura-name]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
        <img alt="Vivid Aura Jewels close up detail" className={hoverClass} data-strk-img-id="product-vivid-aura-hover-3c1a7f" data-strk-img="[product-vivid-aura-material] [product-vivid-aura-name]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      </>
    )
  }

  if (product.id === 'majestic-flora-nectar') {
    return (
      <>
        <img alt="Majestic Flora Nectar styled on warm neutral jewelry set" className={imageClass} data-strk-img-id="product-majestic-flora-primary-5e2d8b" data-strk-img="[product-majestic-flora-desc] [product-majestic-flora-name]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
        <img alt="Majestic Flora Nectar close up detail" className={hoverClass} data-strk-img-id="product-majestic-flora-hover-8a4c0d" data-strk-img="[product-majestic-flora-material] [product-majestic-flora-name]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      </>
    )
  }

  if (product.id === 'golden-sphere-huggies') {
    return (
      <>
        <img alt="Golden Sphere Huggies styled on warm neutral jewelry set" className={imageClass} data-strk-img-id="product-golden-sphere-primary-6f0b12" data-strk-img="[product-golden-sphere-desc] [product-golden-sphere-name]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
        <img alt="Golden Sphere Huggies close up detail" className={hoverClass} data-strk-img-id="product-golden-sphere-hover-2a9e77" data-strk-img="[product-golden-sphere-material] [product-golden-sphere-name]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      </>
    )
  }

  if (product.id === 'amber-lace-earrings') {
    return (
      <>
        <img alt="Amber Lace Earrings styled on warm neutral jewelry set" className={imageClass} data-strk-img-id="product-amber-lace-primary-0d5a6e" data-strk-img="[product-amber-lace-desc] [product-amber-lace-name]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
        <img alt="Amber Lace Earrings close up detail" className={hoverClass} data-strk-img-id="product-amber-lace-hover-4b8f33" data-strk-img="[product-amber-lace-material] [product-amber-lace-name]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      </>
    )
  }

  return (
    <>
      <img alt="Royal Heirloom Set styled on warm neutral jewelry set" className={imageClass} data-strk-img-id="product-royal-heirloom-primary-1c7b9f" data-strk-img="[product-royal-heirloom-desc] [product-royal-heirloom-name]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
      <img alt="Royal Heirloom Set close up detail" className={hoverClass} data-strk-img-id="product-royal-heirloom-hover-7e3d44" data-strk-img="[product-royal-heirloom-material] [product-royal-heirloom-name]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
    </>
  )
}

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group min-w-0 text-velmora-ink">
      <div className="relative overflow-hidden bg-velmora-porcelain shadow-sm transition duration-500 group-hover:-translate-y-1 group-hover:shadow-velmoraSoft">
        <Link to={`/products/${product.slug}`} className="block" aria-label={`View ${product.name}`}>
          <ProductCardImages product={product} />
        </Link>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 bg-velmora-ink px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-cream opacity-0 transition duration-300 hover:bg-velmora-espresso group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <Link to={`/products/${product.slug}`}>
            <h3 id={product.ids.name} className="font-serifDisplay text-lg font-semibold uppercase tracking-[0.2em] text-velmora-ink transition hover:text-velmora-antique">
              {product.name}
            </h3>
          </Link>
          <p className="shrink-0 text-sm font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
        </div>
        <p id={product.ids.desc} className="text-sm leading-6 text-velmora-espresso/75">{product.description}</p>
        <p id={product.ids.material} className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-velmora-sage">{product.material}</p>
      </div>
    </article>
  )
}

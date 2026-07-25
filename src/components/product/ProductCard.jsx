import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import ProductImage from './ProductImage.jsx'

export default function ProductCard({ product, scope = 'product-card', onAddToCart }) {
  const titleId = `${scope}-${product.id}-title`
  const descId = `${scope}-${product.id}-desc`

  return (
    <article className="group border border-velmora-line bg-velmora-porcelain text-velmora-espresso shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-luxe">
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand">
        <Link to={`/product/${product.id}`} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold" aria-label={`View ${product.name}`}>
          <ProductImage
            product={product}
            scope={`${scope}-front`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            ratio="3x4"
            width="700"
          />
          <ProductImage
            product={product}
            scope={`${scope}-hover`}
            variant="hover"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            ratio="3x4"
            width="700"
          />
        </Link>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 left-4 right-4 flex translate-y-3 items-center justify-center gap-2 bg-velmora-espresso px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white opacity-0 shadow-soft transition duration-300 hover:bg-velmora-gold focus:translate-y-0 focus:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="space-y-2 px-4 py-5 sm:px-5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-velmora-goldDeep">{product.category}</p>
        <Link to={`/product/${product.id}`} className="block text-velmora-espresso transition hover:text-velmora-goldDeep">
          <h3 id={titleId} className="font-serif text-lg uppercase leading-tight tracking-[0.18em] sm:text-xl">{product.name}</h3>
        </Link>
        <p id={descId} className="line-clamp-2 text-sm leading-6 text-velmora-taupe">{product.description}</p>
        <div className="flex items-center justify-between border-t border-velmora-line pt-4">
          <span className="font-sans text-sm font-semibold text-velmora-espresso">${product.price}</span>
          <span className="text-xs uppercase tracking-[0.18em] text-velmora-taupe">{product.material}</span>
        </div>
      </div>
    </article>
  )
}

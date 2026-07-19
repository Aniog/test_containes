import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/data/products.js'

export default function ProductCard({ product, context = 'grid' }) {
  const { addItem } = useCart()
  const nameId = `${context}-${product.slug}-name`
  const descId = `${context}-${product.slug}-desc`
  return (
    <article className="group text-velmora-espresso">
      <div className="relative overflow-hidden bg-velmora-stone shadow-soft">
        <Link to={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
          <img alt={product.name} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0" data-strk-img-id={`${context}-${product.slug}-primary-a9v`} data-strk-img={`[${descId}] [${nameId}]`} data-strk-img-ratio="3x4" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
          <img alt={`${product.name} detail`} className="absolute inset-0 aspect-[4/5] h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100" data-strk-img-id={`${context}-${product.slug}-secondary-q4m`} data-strk-img={`[${nameId}] [${descId}]`} data-strk-img-ratio="3x4" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
        </Link>
        <button type="button" onClick={() => addItem(product)} className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 bg-velmora-espresso px-4 py-3 text-xs font-semibold uppercase tracking-luxury text-velmora-porcelain opacity-100 transition duration-300 hover:bg-velmora-cocoa md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"><ShoppingBag className="h-4 w-4" /> Add to Cart</button>
      </div>
      <div className="pt-4"><Link id={nameId} to={`/products/${product.slug}`} className="font-serif text-lg uppercase tracking-product text-velmora-espresso transition hover:text-velmora-antique">{product.name}</Link><p id={descId} className="mt-2 text-sm leading-6 text-velmora-taupe">{product.description}</p><div className="mt-3 flex items-center justify-between text-sm"><span className="text-velmora-espresso">{formatPrice(product.price)}</span><span className="uppercase tracking-luxury text-velmora-antique">{product.category}</span></div></div>
    </article>
  )
}

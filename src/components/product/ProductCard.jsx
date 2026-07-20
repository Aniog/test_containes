import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '../../context/CartContext.jsx'
import ProductImage from './ProductImage.jsx'

export default function ProductCard({ product, contextId = 'bestsellers-title' }) {
  const { addItem } = useCart()

  return (
    <article className="group relative overflow-hidden border border-mist/80 bg-ivory text-cocoa shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-glow">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-linen">
          <ProductImage product={product} imageId={product.imgId} contextId={contextId} ratio="3x4" width="800" className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0" />
          <ProductImage product={product} imageId={product.hoverImgId} contextId={contextId} ratio="3x4" width="800" className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
        </div>
      </Link>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-luxe text-stone">
          <span>{product.category}</span>
          <span className="flex items-center gap-1 text-antique"><Star className="h-3.5 w-3.5 fill-current" /> {product.rating}</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 id={product.titleId} className="font-serif text-lg font-semibold uppercase tracking-product text-cocoa transition group-hover:text-antique">{product.name}</h3>
        </Link>
        <p id={product.descId} className="line-clamp-2 text-sm leading-6 text-stone">{product.description}</p>
        <div className="flex items-center justify-between border-t border-mist/70 pt-4">
          <span className="font-serif text-2xl text-cocoa">${product.price}</span>
          <button onClick={() => addItem(product)} className="inline-flex items-center gap-2 bg-cocoa px-4 py-2 text-xs font-semibold uppercase tracking-luxe text-ivory transition hover:bg-antique" type="button">
            <ShoppingBag className="h-4 w-4" /> Add
          </button>
        </div>
      </div>
    </article>
  )
}

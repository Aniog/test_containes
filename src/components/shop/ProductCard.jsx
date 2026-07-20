import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/lib/format'
import { getStrkImageUrl } from '@/lib/images'

export default function ProductCard({ product, onAdd, context = 'card' }) {
  const titleId = `${context}-${product.titleId}`
  const descId = `${context}-${product.descId}`
  const mainImageId = `${context}-${product.imgId}`
  const hoverImageId = `${context}-${product.hoverImgId}`

  return (
    <article className="group overflow-hidden border border-velmora-espresso/10 bg-velmora-porcelain text-velmora-espresso shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-editorial">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-champagne/30">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={mainImageId}
            data-strk-img={`[${descId}] [${titleId}] [bestsellers-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={getStrkImageUrl(mainImageId)}
          />
          <img
            alt={`${product.name} worn`}
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100"
            data-strk-img-id={hoverImageId}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={getStrkImageUrl(hoverImageId)}
          />
          <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                onAdd(product)
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-onyx shadow-velvet transition hover:bg-velmora-champagne"
            >
              <ShoppingBag className="h-4 w-4" /> Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="space-y-2 p-5">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-velmora-gold">{product.category}</p>
        <Link to={`/product/${product.id}`} className="block text-velmora-espresso transition hover:text-velmora-gold">
          <h3 id={titleId} className="font-serif text-xl uppercase leading-tight tracking-[0.16em]">{product.name}</h3>
        </Link>
        <p id={descId} className="line-clamp-2 text-sm leading-6 text-velmora-walnut">{product.shortDescription}</p>
        <div className="flex items-center justify-between border-t border-velmora-espresso/10 pt-4">
          <span className="font-serif text-2xl text-velmora-espresso">{formatPrice(product.price)}</span>
          <span className="text-xs uppercase tracking-[0.18em] text-velmora-truffle">{product.material}</span>
        </div>
      </div>
    </article>
  )
}

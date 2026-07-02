import { ShoppingBag, Star } from 'lucide-react'
import { placeholderSvg } from '@/data/products'

export default function ProductCard({ product, onAddToCart, onSelect, compact = false, imageContext = 'product' }) {
  const idBase = `${imageContext}-${product.id}`

  return (
    <article className="group text-velmora-espresso">
      <div className="relative overflow-hidden rounded-t-full bg-velmora-parchment shadow-[0_20px_60px_rgba(32,24,20,0.06)]">
        <button type="button" onClick={() => onSelect(product)} className="block w-full text-left" aria-label={`View ${product.name}`}>
          <img
            alt={product.name}
            className="aspect-[4/5] w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
            data-strk-img-id={`${idBase}-primary`}
            data-strk-img={`[${idBase}-desc] [${idBase}-title] [${idBase}-category]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholderSvg}
          />
          <img
            alt={`${product.name} worn`}
            className="absolute inset-0 aspect-[4/5] h-full w-full object-cover opacity-0 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
            data-strk-img-id={`${idBase}-hover`}
            data-strk-img={`[${idBase}-wear-context] [${idBase}-category] [${idBase}-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={placeholderSvg}
          />
        </button>
        <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button type="button" onClick={() => onAddToCart(product)} className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-espresso px-4 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-velmora-ivory shadow-xl transition hover:bg-velmora-cocoa">
            <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
            Add to cart
          </button>
        </div>
      </div>

      <div className={`${compact ? 'pt-4' : 'pt-5'}`}>
        <div className="mb-2 flex items-center gap-1 text-velmora-champagne">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-3.5 w-3.5 fill-current" strokeWidth={1.2} />
          ))}
          <span className="ml-1 text-xs font-medium text-velmora-mink">{product.rating}</span>
        </div>
        <button type="button" onClick={() => onSelect(product)} className="text-left">
          <h3 id={`${idBase}-title`} className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition group-hover:text-velmora-champagne">{product.name}</h3>
        </button>
        <p id={`${idBase}-desc`} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-mink">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <p id={`${idBase}-category`} className="text-xs uppercase tracking-[0.18em] text-velmora-mink">{product.category}</p>
          <p className="font-semibold text-velmora-espresso">${product.price}</p>
        </div>
        <span id={`${idBase}-wear-context`} className="sr-only">{product.category} worn by a woman in warm editorial light</span>
      </div>
    </article>
  )
}

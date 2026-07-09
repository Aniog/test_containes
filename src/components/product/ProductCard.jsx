import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import StrkImage from '@/components/common/StrkImage'
import { formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product, compact = false }) {
  const { addToCart } = useCart()

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-velmora-sand/80 bg-velmora-porcelain text-velmora-espresso shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-velvet">
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden bg-velmora-mist">
        <StrkImage
          id={product.imgId}
          query={`[${product.descId}] [${product.titleId}] warm gold jewelry editorial close-up`}
          ratio="4x3"
          width="900"
          alt={product.name}
          className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
        />
        <StrkImage
          id={product.hoverImgId}
          query={`[${product.titleId}] worn by model warm luxury jewelry detail`}
          ratio="4x3"
          width="900"
          alt={`${product.name} worn detail`}
          className="absolute inset-0 aspect-[4/3] h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              addToCart(product)
            }}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-velmora-espresso px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-lg transition hover:bg-velmora-champagne hover:text-velmora-espresso"
          >
            <ShoppingBag className="h-4 w-4" /> Quick add
          </button>
        </div>
      </Link>
      <div className={`${compact ? 'p-4' : 'p-5 md:p-6'}`}>
        <div className="mb-3 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-velmora-umber">
          <span>{product.category}</span>
          <span className="flex items-center gap-1 text-velmora-espresso"><Star className="h-3.5 w-3.5 fill-velmora-champagne text-velmora-champagne" /> {product.rating}</span>
        </div>
        <h3 id={product.titleId} className="font-serif text-lg font-semibold uppercase tracking-[0.16em] md:text-xl">
          <Link to={`/product/${product.id}`} className="text-velmora-espresso transition hover:text-velmora-umber">{product.name}</Link>
        </h3>
        <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-umber">{product.shortDescription}</p>
        <p className="mt-4 text-base font-bold text-velmora-espresso">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}

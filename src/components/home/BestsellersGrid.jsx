import { Link, useNavigate } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/StarRating'

export default function BestsellersGrid({ products }) {
  const { addItem } = useCart()
  const navigate = useNavigate()

  return (
    <section className="section-padding py-16 md:py-24 bg-vbg">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-vmuted mb-3">
          Curated for You
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-vtext">
          Bestsellers
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => {
          const p = product.data || product
          return (
            <div key={p.id} className="group">
              {/* Image area — programmatic navigation, no Link wrapper */}
              <div
                className="relative aspect-[3/4] bg-vborder/50 rounded-sm overflow-hidden mb-3 cursor-pointer"
                onClick={() => navigate(`/product/${p.slug}`)}
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay with quick add — visible on hover (desktop) */}
                <div className="hidden md:flex absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 items-end justify-center pb-4 pointer-events-none">
                  <button
                    type="button"
                    className="pointer-events-auto translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-vtext font-sans text-[11px] tracking-wider uppercase px-5 py-2.5 flex items-center gap-2 shadow-sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      addItem(p)
                    }}
                  >
                    <ShoppingBag size={13} />
                    Add to Bag
                  </button>
                </div>
              </div>
              {/* Mobile quick add */}
              <button
                type="button"
                className="md:hidden w-full mt-1 mb-2 font-sans text-[11px] tracking-wider uppercase py-2 border border-vborder text-vtext active:bg-vborder/50 transition-colors flex items-center justify-center gap-2"
                onClick={() => addItem(p)}
              >
                <ShoppingBag size={13} />
                Add to Bag
              </button>
              <div className="flex items-center gap-1.5 mb-1.5">
                <StarRating rating={p.rating || 0} size={11} />
                <span className="font-sans text-[10px] text-vmuted">
                  ({p.review_count || 0})
                </span>
              </div>
              <Link to={`/product/${p.slug}`}>
                <h3 className="font-sans text-xs font-medium uppercase tracking-widest text-vtext mb-1">
                  {p.name}
                </h3>
              </Link>
              <p className="font-sans text-sm text-vmuted">
                ${p.price.toFixed(2)}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

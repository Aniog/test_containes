import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Plus, Minus, ChevronDown, Check, ArrowRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import StarRating from '@/components/StarRating'
import ProductCard from '@/components/ProductCard'
import { useStrkImages, getStrkImageUrl } from '@/lib/strk-images'

const ACCORDIONS = [
  { key: 'description', title: 'Description' },
  { key: 'materials', title: 'Materials & Care' },
  { key: 'shipping', title: 'Shipping & Returns' },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useStrkImages([id])

  const [tone, setTone] = useState(product?.tone || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [added, setAdded] = useState(false)

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const galleryIds = [product.imgId, ...product.galleryIds]
  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product, { quantity, tone })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-4">
        <nav className="text-xs uppercase tracking-[0.15em] text-stone">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pb-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 md:w-20">
            {galleryIds.map((gid, i) => (
              <button
                key={gid}
                type="button"
                onClick={() => setActiveImage(i)}
                className={cn(
                  'relative w-16 md:w-20 aspect-[4/5] overflow-hidden bg-sand shrink-0 transition-all',
                  activeImage === i
                    ? 'ring-1 ring-ink ring-offset-2 ring-offset-cream'
                    : 'opacity-60 hover:opacity-100'
                )}
              >
                <img
                  src={getStrkImageUrl(gid)}
                  alt={`${product.name} view ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          {/* Main image */}
          <div className="flex-1 relative aspect-[4/5] overflow-hidden bg-sand">
            <img
              src={getStrkImageUrl(galleryIds[activeImage])}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="lg:py-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-champagne mb-3">{product.type}</p>
          <h1
            id={`pdp-${product.id}-name`}
            className="font-serif text-3xl md:text-4xl uppercase tracking-[0.1em] text-ink leading-tight"
          >
            {product.name}
          </h1>
          <p id={`pdp-${product.id}-desc`} className="sr-only">
            {product.shortDescription}
          </p>

          <div className="flex items-center gap-3 mt-4">
            <StarRating rating={product.rating} size={15} />
            <span className="text-sm text-stone">{product.rating} · {product.reviews} reviews</span>
          </div>

          <p className="font-serif text-2xl text-ink mt-5">{formatPrice(product.price)}</p>

          <p className="mt-6 text-stone leading-relaxed">{product.shortDescription}</p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink font-medium mb-3">
              Tone: <span className="text-stone">{tone}</span>
            </p>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setTone(v)}
                  className={cn(
                    'px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium border transition-colors',
                    tone === v
                      ? 'bg-ink text-cream border-ink'
                      : 'bg-transparent text-ink border-ink/25 hover:border-ink'
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink font-medium mb-3">Quantity</p>
            <div className="inline-flex items-center border border-ink/20">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="w-11 h-11 flex items-center justify-center text-ink hover:bg-ink/5 transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-12 text-center text-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="w-11 h-11 flex items-center justify-center text-ink hover:bg-ink/5 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className={cn(
              'w-full mt-8 text-[11px] uppercase tracking-[0.2em] font-semibold py-4 transition-colors flex items-center justify-center gap-2',
              added ? 'bg-gold-deep text-ink' : 'bg-champagne text-ink hover:bg-gold-deep'
            )}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" /> Added to Bag
              </>
            ) : (
              `Add to Bag — ${formatPrice(product.price * quantity)}`
            )}
          </button>

          <p className="mt-4 text-xs text-stone text-center">
            Free shipping · 30-day returns · Ships within 24 hours
          </p>

          {/* Accordions */}
          <div className="mt-10 border-t border-ink/10">
            {ACCORDIONS.map((acc) => {
              const isOpen = openAccordion === acc.key
              return (
                <div key={acc.key} className="border-b border-ink/10">
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? null : acc.key)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-ink">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 text-ink transition-transform duration-300',
                        isOpen && 'rotate-180'
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-luxury',
                      isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm text-stone leading-relaxed">{product[acc.key]}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-20 md:py-24 bg-sand/50">
        <div className="max-w-8xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-3">Complete the Look</p>
            <h2 className="font-serif text-4xl text-ink">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-ink border-b border-ink/30 pb-1 hover:border-champagne hover:text-champagne transition-colors"
            >
              Shop All Jewelry
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

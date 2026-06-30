import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Plus, Minus, ChevronDown, ShoppingBag, Check } from 'lucide-react'
import { PRODUCTS, formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useImageLoader } from '@/lib/useImageLoader'
import StarRating from '@/components/ui/StarRating'
import ProductCard from '@/components/ui/ProductCard'
import ProductImage, { PLACEHOLDER_SVG } from '@/components/ui/ProductImage'
import { cn } from '@/lib/utils'

const ACCORDIONS = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

const SHIPPING_TEXT =
  'Free worldwide shipping on all orders. Orders are processed within 1–2 business days and delivered in 5–10 business days internationally. Enjoy 30-day returns on unworn pieces in their original packaging — your satisfaction, guaranteed.'

export default function ProductDetail() {
  const { id } = useParams()
  const product = PRODUCTS.find((p) => p.id === id)
  const { addItem } = useCart()
  const containerRef = useImageLoader([id])

  const [variant, setVariant] = useState(product?.variants?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-5 pt-24">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <p className="mt-3 text-stone">The piece you are looking for is no longer available.</p>
        <Link
          to="/shop"
          className="mt-6 border border-ink text-ink text-[11px] tracking-[0.2em] uppercase px-7 py-3.5 hover:bg-ink hover:text-cream transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4)

  const gallery = product.gallery

  const handleAdd = () => {
    addItem(product, { variant, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const accordionContent = {
    description: <p className="leading-relaxed">{product.description}</p>,
    materials: (
      <div className="space-y-3 leading-relaxed">
        <p>{product.materials}</p>
        <p className="text-stone">{product.care}</p>
      </div>
    ),
    shipping: <p className="leading-relaxed">{SHIPPING_TEXT}</p>,
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6">
        <nav className="text-[11px] tracking-[0.16em] uppercase text-stone flex items-center gap-2">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar md:overflow-visible">
            {gallery.map((g, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImage(i)}
                className={cn(
                  'shrink-0 w-16 md:w-20 aspect-[4/5] overflow-hidden bg-sand border transition-colors',
                  activeImage === i ? 'border-ink' : 'border-line hover:border-stone',
                )}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  data-strk-img-id={`${g.imgId}-thumb`}
                  data-strk-img={g.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="160"
                  src={PLACEHOLDER_SVG}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="flex-1 relative overflow-hidden bg-sand aspect-[4/5]">
            {gallery.map((g, i) => (
              <img
                key={i}
                data-strk-img-id={`${g.imgId}-main`}
                data-strk-img={g.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src={PLACEHOLDER_SVG}
                alt={product.name}
                className={cn(
                  'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
                  activeImage === i ? 'opacity-100' : 'opacity-0',
                )}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="text-[11px] tracking-[0.2em] uppercase text-champagne mb-3">
            {product.category}
          </p>
          <h1
            id={product.titleId}
            className="font-serif text-4xl md:text-5xl uppercase tracking-[0.1em] text-ink leading-tight"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.shortDescription}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating rating={product.rating} size={15} />
            <span className="text-xs text-stone">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-2xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-5 text-stone leading-relaxed">{product.shortDescription}</p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-3">
              Tone — <span className="text-ink">{variant}</span>
            </p>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={cn(
                    'px-5 py-2.5 rounded-full text-xs tracking-[0.12em] uppercase border transition-colors duration-300',
                    variant === v
                      ? 'bg-ink text-cream border-ink'
                      : 'bg-transparent text-ink border-line hover:border-ink',
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-7">
            <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-3">Quantity</p>
            <div className="inline-flex items-center border border-line">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2.5 hover:bg-sand transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={14} strokeWidth={1.5} />
              </button>
              <span className="px-5 text-sm tabular-nums">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2.5 hover:bg-sand transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className={cn(
              'mt-8 w-full flex items-center justify-center gap-2.5 text-[11px] tracking-[0.2em] uppercase py-4 transition-colors duration-300',
              added ? 'bg-champagne-deep text-cream' : 'bg-champagne text-cream hover:bg-champagne-deep',
            )}
          >
            {added ? (
              <>
                <Check size={16} strokeWidth={1.5} /> Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag size={16} strokeWidth={1.5} /> Add to Cart — {formatPrice(product.price * quantity)}
              </>
            )}
          </button>

          <p className="mt-4 text-xs text-stone flex items-center gap-2">
            <Check size={13} strokeWidth={1.5} className="text-champagne" />
            Free shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10 border-t border-line">
            {ACCORDIONS.map((acc) => {
              const open = openAccordion === acc.key
              return (
                <div key={acc.key} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(open ? null : acc.key)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-xs tracking-[0.18em] uppercase text-ink">
                      {acc.label}
                    </span>
                    <ChevronDown
                      size={16}
                      strokeWidth={1.5}
                      className={cn(
                        'text-stone transition-transform duration-300',
                        open && 'rotate-180',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300',
                      open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className="overflow-hidden text-sm text-stone">
                      {accordionContent[acc.key]}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[0.3em] uppercase text-champagne mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

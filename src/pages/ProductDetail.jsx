import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/lib/useStrkImages'
import { formatPrice, cn } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'
import SectionHeading from '@/components/home/SectionHeading'

// NOTE: `src` must be an inline string literal (not a const) so the strk-img
// build plugin can statically resolve and inline the image URL at build time.

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem, openCart } = useCart()
  const ref = useStrkImages([id])

  const [tone, setTone] = useState(product?.tones?.[0] || 'Gold')
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    setTone(product?.tones?.[0] || 'Gold')
    setQty(1)
    setActiveImg(0)
    window.scrollTo(0, 0)
  }, [id, product])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 pt-24">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <Link
          to="/shop"
          className="text-[11px] uppercase tracking-widest2 text-gold border-b border-gold pb-1"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const titleId = `pd-${product.id}-title`
  const tagId = `pd-${product.id}-tag`

  const handleAdd = () => {
    addItem(product.id, { tone, quantity: qty })
  }

  const accordions = [
    {
      title: 'Description',
      content: (
        <>
          <p>{product.description}</p>
          <p>
            Each piece arrives in a signature Velmora pouch — ready to keep or
            to gift.
          </p>
        </>
      ),
    },
    {
      title: 'Materials & Care',
      content: (
        <>
          <p>
            <strong className="text-ink">Material:</strong> 18K gold plating
            over a hypoallergenic brass base. Nickel and lead free.
          </p>
          <p>
            <strong className="text-ink">Care:</strong> Avoid contact with
            water, perfume, and lotions. Store in the provided pouch away from
            sunlight. Gently wipe with a soft cloth to restore shine.
          </p>
        </>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <>
          <p>
            <strong className="text-ink">Shipping:</strong> Free worldwide
            shipping on all orders. Dispatched within 1–2 business days.
          </p>
          <p>
            <strong className="text-ink">Returns:</strong> 30-day returns on
            unworn pieces in original packaging. Full refund, no questions.
          </p>
        </>
      ),
    },
  ]

  return (
    <div ref={ref} className="bg-ivory pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-5 flex items-center gap-2 text-xs text-stone">
        <Link to="/" className="hover:text-ink transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
        <ChevronRight size={12} />
        <span className="text-ink">{product.name}</span>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 pb-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 md:w-20">
            {product.gallery.map((gId, i) => (
              <button
                key={gId}
                type="button"
                onClick={() => setActiveImg(i)}
                className={cn(
                  'relative aspect-square w-16 md:w-full bg-cream overflow-hidden border transition-colors',
                  activeImg === i ? 'border-ink' : 'border-line hover:border-stone',
                )}
              >
                <img
                  data-strk-img-id={`${gId}-thumb`}
                  data-strk-img={`[${tagId}] [${titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="relative flex-1 aspect-[4/5] bg-cream overflow-hidden">
            <img
              data-strk-img-id={`${product.gallery[activeImg]}-main`}
              data-strk-img={`[${tagId}] [${titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          {product.badge && (
            <span className="inline-block text-[10px] font-semibold uppercase tracking-widest2 text-gold mb-3">
              {product.badge}
            </span>
          )}
          <h1
            id={titleId}
            className="font-serif text-3xl md:text-4xl text-ink uppercase tracking-widest2 leading-tight"
          >
            {product.name}
          </h1>
          <p id={tagId} className="mt-2 text-sm text-stone">
            {product.tagline}
          </p>

          <div className="flex items-center gap-3 mt-4">
            <StarRating value={product.rating} size={15} />
            <span className="text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 text-sm text-cocoa leading-relaxed">
            {product.description}
          </p>

          {/* Tone selector */}
          <div className="mt-7">
            <p className="text-[11px] uppercase tracking-widest2 text-stone mb-3">
              Tone: <span className="text-ink">{tone}</span>
            </p>
            <div className="flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={cn(
                    'px-6 py-3 text-[11px] uppercase tracking-widest2 font-medium border transition-all duration-300',
                    tone === t
                      ? 'bg-ink text-ivory border-ink'
                      : 'bg-transparent text-ink border-line hover:border-ink',
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-7 flex items-stretch gap-3">
            <div className="flex items-center border border-line">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="px-4 hover:bg-cream transition-colors"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                <Minus size={14} />
              </button>
              <span className="px-4 text-sm tabular-nums w-10 text-center">
                {qty}
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="px-4 hover:bg-cream transition-colors"
                onClick={() => setQty((q) => q + 1)}
              >
                <Plus size={14} />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 inline-flex items-center justify-center px-7 py-4 text-xs font-medium uppercase tracking-widest2 bg-ink text-ivory hover:bg-espresso transition-colors duration-300"
            >
              Add to Cart — {formatPrice(product.price * qty)}
            </button>
          </div>

          <p className="mt-4 text-xs text-stone">
            Free worldwide shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} defaultOpen={0} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <SectionHeading eyebrow="Complete the Look" title="You May Also Like" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

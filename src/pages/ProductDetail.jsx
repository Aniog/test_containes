import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useToast } from '@/context/ToastContext'
import { useStrkImages } from '@/hooks/useStrkImages'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'
import { formatPrice, cn } from '@/lib/utils'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const ref = useStrkImages([id])

  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  const { addItem } = useCart()
  const { toast } = useToast()

  if (!product) return <Navigate to="/shop" replace />

  const related = getRelatedProducts(product.id, 4)
  const titleId = `pdp-${product.id}-title`
  const subId = `pdp-${product.id}-sub`

  const gallery = [
    { imgId: product.imgId, query: `[${subId}] [${titleId}] gold jewelry product` },
    { imgId: product.imgIdAlt, query: `[${subId}] [${titleId}] gold jewelry worn on model` },
    { imgId: `${product.imgId}-d3`, query: `[${subId}] [${titleId}] gold jewelry detail close up` },
    { imgId: `${product.imgId}-d4`, query: `[${subId}] [${titleId}] gold jewelry packaging gift box` },
  ]

  const handleAdd = () => {
    addItem(product, { variant, quantity })
    toast(`${product.name} added to bag`)
  }

  const accordions = [
    {
      title: 'Description',
      content: (
        <div>
          <p>{product.description}</p>
        </div>
      ),
    },
    {
      title: 'Materials & Care',
      content: (
        <div>
          <ul className="mb-3 list-disc space-y-1 pl-4">
            {product.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p>{product.care}</p>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div>
          <p className="mb-2">
            Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days
            and arrive in signature Velmora packaging.
          </p>
          <p>
            Enjoy 30-day returns on unworn pieces in their original packaging. See our returns
            policy for full details.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-content px-6 py-6 md:px-10 lg:px-16">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink-muted">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-6 pb-20 md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {gallery.map((g, i) => (
              <button
                key={g.imgId}
                type="button"
                onClick={() => setActiveImg(i)}
                className={cn(
                  'relative aspect-[4x5] w-16 shrink-0 overflow-hidden bg-cream-deep transition-opacity md:w-20',
                  activeImg === i ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'
                )}
              >
                <img
                  alt={`${product.name} thumbnail ${i + 1}`}
                  data-strk-img-id={`${g.imgId}-thumb`}
                  data-strk-img={g.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative aspect-[4x5] flex-1 overflow-hidden bg-cream-deep">
            <img
              alt={product.name}
              data-strk-img-id={gallery[activeImg].imgId}
              data-strk-img={gallery[activeImg].query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
              className="h-full w-full object-cover"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 bg-cream-soft/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink backdrop-blur-sm">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="lg:py-4">
          <p className="text-[11px] uppercase tracking-widest3 text-gold">{product.category}</p>
          <h1
            id={titleId}
            className="mt-3 font-serif text-3xl uppercase tracking-widest2 text-ink md:text-4xl"
          >
            {product.name}
          </h1>
          <p id={subId} className="mt-2 text-sm text-ink-muted">
            {product.subtitle}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating rating={product.rating} size={15} />
            <span className="text-xs text-ink-muted">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-serif text-2xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-5 text-sm leading-relaxed text-ink-muted">
            {product.description}
          </p>

          {/* Variants */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-widest2 text-ink">Tone</p>
            <div className="mt-3 flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVariant(v.id)}
                  className={cn(
                    'px-6 py-3 text-[11px] uppercase tracking-widest2 transition-colors duration-300',
                    variant === v.id
                      ? 'bg-ink text-cream-soft'
                      : 'border border-ink/20 text-ink hover:border-ink'
                  )}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-[11px] uppercase tracking-widest2 text-ink">Quantity</p>
            <div className="mt-3 inline-flex items-center border border-ink/20">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-ink transition-colors hover:bg-cream-deep"
                aria-label="Decrease quantity"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-12 text-center text-sm text-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-ink transition-colors hover:bg-cream-deep"
                aria-label="Increase quantity"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className="mt-8 flex w-full items-center justify-center gap-2 bg-gold py-4 text-[11px] uppercase tracking-widest2 text-cream-soft transition-colors duration-300 hover:bg-gold-deep"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Bag — {formatPrice(product.price * quantity)}
          </button>

          <p className="mt-4 text-center text-[11px] text-ink-muted">
            Free shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-ink/10 bg-cream-deep py-20 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16">
          <div className="mb-12 text-center">
            <p className="text-[11px] uppercase tracking-widest3 text-gold">Complete the Look</p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 lg:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

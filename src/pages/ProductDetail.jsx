import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { getProductById, relatedProducts } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const galleryFrames = [
  { key: 'editorial', caption: 'Warm editorial close-up of demi-fine gold jewelry' },
  { key: 'worn', caption: 'Jewelry worn on model in soft natural light' },
  { key: 'detail', caption: 'Detailed polished gold finish and crystal accents' },
  { key: 'gift', caption: 'Velmora jewelry packaging for gifting' },
]

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-velmora-taupe/30 text-velmora-espresso">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-velmora text-velmora-espresso"
        aria-expanded={open}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="pb-6 text-sm leading-7 text-velmora-umber">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const pageRef = useRef(null)
  const [activeFrame, setActiveFrame] = useState(galleryFrames[0].key)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  useStrkImages(pageRef, [id, activeFrame])

  const related = useMemo(() => relatedProducts(id), [id])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const currentFrame = galleryFrames.find((frame) => frame.key === activeFrame)
  const titleId = `detail-title-${product.id}`
  const descId = `detail-desc-${product.id}`
  const frameId = `detail-frame-${product.id}-${activeFrame}`

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[6rem_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {galleryFrames.map((frame) => {
              const thumbId = `thumb-caption-${product.id}-${frame.key}`
              return (
                <button
                  key={frame.key}
                  type="button"
                  onClick={() => setActiveFrame(frame.key)}
                  className={`relative aspect-square w-20 shrink-0 overflow-hidden rounded-full border transition lg:w-24 ${activeFrame === frame.key ? 'border-velmora-gold ring-2 ring-velmora-gold/25' : 'border-velmora-taupe/40'}`}
                  aria-label={`Show ${frame.caption}`}
                >
                  <span id={thumbId} className="sr-only">{frame.caption}</span>
                  <img
                    alt={frame.caption}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`product-thumb-${product.id}-${frame.key}-6ad41c`}
                    data-strk-img={`[${thumbId}] [${descId}] [${titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="260"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              )
            })}
          </div>
          <div className="order-1 overflow-hidden bg-velmora-porcelain shadow-velmora lg:order-2">
            <span id={frameId} className="sr-only">{currentFrame.caption}</span>
            <img
              alt={`${product.name} ${currentFrame.caption}`}
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id={`product-main-${product.id}-${activeFrame}-91c8fe`}
              data-strk-img={`[${frameId}] [${descId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1100"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        <aside className="lg:pl-8">
          <p className="text-xs font-bold uppercase tracking-wideLuxury text-velmora-gold">{product.category}</p>
          <h1 id={titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-none tracking-velmora text-velmora-espresso sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="text-2xl font-bold text-velmora-espresso">${product.price}</p>
            <div className="flex items-center gap-1 text-velmora-gold" aria-label={`${product.rating} star rating`}>
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              <span className="ml-2 text-sm font-semibold text-velmora-umber">{product.rating} · {product.reviews} reviews</span>
            </div>
          </div>
          <p id={descId} className="mt-6 text-base leading-8 text-velmora-umber">{product.detail}</p>

          <div className="mt-8 border-y border-velmora-taupe/30 py-6">
            <p className="text-xs font-bold uppercase tracking-wideLuxury text-velmora-gold">Tone</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {product.tone.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setVariant(tone)}
                  className={`rounded-full border px-5 py-2 text-sm font-bold transition ${variant === tone ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-taupe/50 bg-velmora-porcelain text-velmora-espresso hover:border-velmora-gold'}`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center rounded-full border border-velmora-taupe/40 bg-velmora-porcelain text-velmora-espresso">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-4 transition hover:text-velmora-gold" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center font-bold">{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-4 transition hover:text-velmora-gold" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => addToCart(product, quantity, variant)}
              className="min-h-14 flex-1 rounded-full bg-velmora-gold px-7 py-4 text-sm font-bold uppercase tracking-velmora text-velmora-espresso transition hover:-translate-y-0.5 hover:bg-velmora-champagne"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8">
            <AccordionItem title="Description" defaultOpen>{product.description}</AccordionItem>
            <AccordionItem title="Materials & Care">{product.material}. {product.care}</AccordionItem>
            <AccordionItem title="Shipping & Returns">{product.shipping}</AccordionItem>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl border-t border-velmora-taupe/30 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wideLuxury text-velmora-gold">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-5xl text-velmora-espresso">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-sm font-bold uppercase tracking-velmora text-velmora-espresso underline decoration-velmora-gold underline-offset-8 transition hover:text-velmora-gold sm:block">
            View all
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} compact />)}
        </div>
      </section>
    </main>
  )
}

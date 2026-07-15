import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import ProductCard from '../components/products/ProductCard.jsx'
import { getProductById, imagePlaceholder, products } from '../data/products.js'
import { useCart } from '../components/cart/CartContext.jsx'
import { useImageLoader } from '../lib/useImageLoader.js'

const galleryViews = [
  { id: 'worn', label: 'Worn' },
  { id: 'detail', label: 'Detail' },
  { id: 'gift', label: 'Gifted' },
]

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [activeImage, setActiveImage] = useState('worn')
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const { addItem } = useCart()

  const related = useMemo(
    () => products.filter((item) => item.id !== productId).slice(0, 4),
    [productId],
  )

  const containerRef = useImageLoader([activeImage, productId])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const titleId = `detail-${product.id}-title`
  const descId = `detail-${product.id}-desc`
  const materialId = `detail-${product.id}-material`
  const activeLabel = galleryViews.find((view) => view.id === activeImage)?.label || 'Worn'
  const activeLabelId = `detail-${product.id}-${activeImage}-label`

  return (
    <main ref={containerRef} className="bg-velmora-cream pt-28 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[5rem_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {galleryViews.map((view) => {
              const labelId = `detail-${product.id}-${view.id}-thumb-label`
              return (
                <button
                  key={view.id}
                  type="button"
                  onClick={() => setActiveImage(view.id)}
                  className={`relative aspect-square w-20 flex-none overflow-hidden border bg-velmora-linen transition ${
                    activeImage === view.id ? 'border-velmora-champagne' : 'border-velmora-linen hover:border-velmora-bronze'
                  }`}
                  aria-label={`View ${view.label} image`}
                >
                  <img
                    alt={`${product.name} ${view.label}`}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`velmora-detail-thumb-${product.id}-${view.id}`}
                    data-strk-img={`[${descId}] [${titleId}] [${materialId}] [${labelId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="220"
                    src={imagePlaceholder}
                  />
                  <span id={labelId} className="sr-only">{view.label}</span>
                </button>
              )
            })}
          </div>

          <div className="order-1 overflow-hidden rounded-t-full border border-velmora-linen bg-velmora-linen shadow-soft lg:order-2">
            <img
              key={activeImage}
              alt={`${product.name} ${activeLabel} editorial jewelry image`}
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id={`velmora-detail-main-${product.id}-${activeImage}`}
              data-strk-img={`[${descId}] [${titleId}] [${materialId}] [${activeLabelId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src={imagePlaceholder}
            />
            <span id={activeLabelId} className="sr-only">{activeLabel}</span>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs font-bold uppercase tracking-[0.36em] text-velmora-bronze">{product.category}</p>
          <h1 id={titleId} className="mt-4 font-serif text-5xl uppercase leading-none tracking-[0.16em] text-velmora-ink md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center justify-between border-b border-velmora-linen pb-6">
            <p className="font-serif text-4xl text-velmora-bronze">${product.price}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-mist">
              <span className="flex text-velmora-champagne" aria-label={`${product.rating} star rating`}>
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </span>
              {product.rating} ({product.reviews})
            </div>
          </div>

          <p id={descId} className="mt-6 text-lg leading-8 text-velmora-mist">{product.detail}</p>
          <p id={materialId} className="mt-3 text-sm font-bold uppercase tracking-[0.22em] text-velmora-bronze">{product.material}</p>

          <div className="mt-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-ink">Tone</h2>
            <div className="mt-3 flex gap-3">
              {['Gold', 'Silver'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setTone(option)}
                  className={`rounded-full border px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] transition ${
                    tone === option
                      ? 'border-velmora-champagne bg-velmora-champagne text-velmora-ink'
                      : 'border-velmora-linen bg-velmora-pearl text-velmora-ink hover:border-velmora-bronze'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <div className="flex items-center rounded-full border border-velmora-linen bg-velmora-pearl text-velmora-ink">
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-4" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center font-semibold">{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)} className="p-4" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => addItem(product, quantity, tone)}
              className="min-h-14 flex-1 rounded-full bg-velmora-champagne px-6 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-bronze hover:text-velmora-pearl"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 border-y border-velmora-linen">
            <AccordionItem
              title="Description"
              open={openAccordion === 'Description'}
              onClick={() => setOpenAccordion(openAccordion === 'Description' ? '' : 'Description')}
            >
              {product.description} Designed for lasting glow, balanced proportions, and effortless styling.
            </AccordionItem>
            <AccordionItem
              title="Materials & Care"
              open={openAccordion === 'Materials & Care'}
              onClick={() => setOpenAccordion(openAccordion === 'Materials & Care' ? '' : 'Materials & Care')}
            >
              {product.material}. {product.care}
            </AccordionItem>
            <AccordionItem
              title="Shipping & Returns"
              open={openAccordion === 'Shipping & Returns'}
              onClick={() => setOpenAccordion(openAccordion === 'Shipping & Returns' ? '' : 'Shipping & Returns')}
            >
              Free worldwide shipping on every order, with easy 30-day returns in original condition.
            </AccordionItem>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="mb-8 flex items-end justify-between border-t border-velmora-linen pt-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.36em] text-velmora-bronze">You may also like</p>
            <h2 className="mt-3 font-serif text-5xl text-velmora-ink">Complete the ritual</h2>
          </div>
          <Link to="/shop" className="hidden text-sm font-bold uppercase tracking-[0.26em] text-velmora-bronze transition hover:text-velmora-ink md:block">
            Shop all
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </section>
    </main>
  )
}

function AccordionItem({ title, open, onClick, children }) {
  return (
    <div className="border-b border-velmora-linen last:border-b-0">
      <button type="button" onClick={onClick} className="flex w-full items-center justify-between py-5 text-left text-velmora-ink">
        <span className="text-sm font-bold uppercase tracking-[0.24em]">{title}</span>
        <ChevronDown className={`h-5 w-5 text-velmora-bronze transition ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
        <p className="overflow-hidden text-sm leading-7 text-velmora-mist">{children}</p>
      </div>
    </div>
  )
}

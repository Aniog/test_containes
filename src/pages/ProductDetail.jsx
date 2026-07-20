import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard.jsx'
import ProductImage from '@/components/product/ProductImage.jsx'
import { getProductBySlug, products } from '@/data/products.js'
import { useStrkImages } from '@/lib/useStrkImages.js'

const galleryViews = [
  { id: 'hero', label: 'On model', copy: 'warm close up of gold jewelry worn on model skin editorial' },
  { id: 'detail', label: 'Detail', copy: 'macro detail of demi fine gold jewelry warm neutral background' },
  { id: 'box', label: 'Packaging', copy: 'premium ivory jewelry box gold jewelry gift packaging' },
]

const accordionContent = [
  ['Description', 'Designed for everyday ceremony, this piece balances refined shine with a lightweight feel that moves easily from morning errands to evening plans.'],
  ['Materials & Care', 'Crafted with a demi-fine gold finish over a durable base. Keep dry, avoid fragrance contact, and store in the included pouch between wears.'],
  ['Shipping & Returns', 'Free worldwide shipping on qualifying orders, easy 30-day returns, and Velmora signature packaging included with every piece.'],
]

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-linen">
      <button type="button" onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-5 text-left text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-espresso">
        {title}
        <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="pb-5 text-sm leading-7 text-velmora-ink/76">{children}</div>}
    </div>
  )
}

export default function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeView, setActiveView] = useState(galleryViews[0].id)
  const containerRef = useStrkImages([slug, activeView])
  const related = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 4), [product.id])
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`

  return (
    <main ref={containerRef} className="px-4 pb-16 pt-28 text-velmora-ink sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="grid gap-4 lg:grid-cols-[5rem_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {galleryViews.map((view) => (
              <button
                key={view.id}
                type="button"
                onClick={() => setActiveView(view.id)}
                className={`relative h-20 w-20 shrink-0 overflow-hidden border bg-velmora-linen transition ${activeView === view.id ? 'border-velmora-champagne' : 'border-velmora-linen hover:border-velmora-champagne/70'}`}
                aria-label={`View ${view.label}`}
              >
                <ProductImage id={`thumb-${product.id}-${view.id}`} query={`[product-${product.id}-${view.id}-thumb] [${titleId}]`} alt={`${product.name} ${view.label}`} width="180" />
                <span id={`product-${product.id}-${view.id}-thumb`} className="sr-only">{view.copy}</span>
              </button>
            ))}
          </div>
          <div className="relative order-1 aspect-editorial overflow-hidden bg-velmora-linen shadow-jewel lg:order-2">
            {galleryViews.map((view) => {
              const mainViewId = `product-${product.id}-${view.id}-view`
              return (
                <div key={view.id} className={`absolute inset-0 transition duration-500 ${activeView === view.id ? 'opacity-100' : 'opacity-0'}`}>
                  <ProductImage id={`main-${product.id}-${view.id}`} query={`[${mainViewId}] [${descId}] [${titleId}]`} alt={`${product.name} ${view.label}`} ratio="4x3" width="1100" />
                  <span id={mainViewId} className="sr-only">{view.copy}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="self-start bg-velmora-ivory p-6 text-velmora-espresso shadow-soft sm:p-8 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-rose">{product.category}</p>
          <h1 id={titleId} className="mt-4 font-serif text-4xl font-semibold uppercase leading-none tracking-[0.18em] text-velmora-espresso sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center justify-between border-b border-velmora-linen pb-5">
            <p className="text-2xl font-semibold text-velmora-espresso">${product.price}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-ink/75">
              <span className="flex text-velmora-champagne" aria-label={`${product.rating} stars`}>{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</span>
              <span>{product.reviews} reviews</span>
            </div>
          </div>
          <p id={descId} className="mt-6 text-base leading-8 text-velmora-ink/78">{product.description}</p>

          <div className="mt-7">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-espresso">Tone</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((option) => (
                <button key={option} type="button" onClick={() => setTone(option)} className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition ${tone === option ? 'border-velmora-champagne bg-velmora-champagne text-velmora-espresso' : 'border-velmora-linen bg-velmora-parchment text-velmora-espresso hover:border-velmora-champagne'}`}>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-espresso">Qty</p>
            <div className="flex items-center rounded-full border border-velmora-linen bg-velmora-parchment text-velmora-espresso">
              <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 transition hover:text-velmora-champagne"><Minus className="h-4 w-4" /></button>
              <span className="min-w-10 text-center text-sm font-bold">{quantity}</span>
              <button type="button" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)} className="p-3 transition hover:text-velmora-champagne"><Plus className="h-4 w-4" /></button>
            </div>
          </div>

          <button type="button" onClick={() => onAddToCart(product, { tone, quantity })} className="mt-8 w-full rounded-full bg-velmora-champagne px-6 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso shadow-soft transition hover:-translate-y-0.5 hover:bg-velmora-espresso hover:text-velmora-ivory">
            Add to Cart
          </button>

          <div className="mt-8 border-t border-velmora-linen">
            {accordionContent.map(([title, content], index) => (
              <AccordionItem key={title} title={title} defaultOpen={index === 0}>{content}</AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl lg:mt-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-rose">Complete the mood</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-espresso">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-champagne sm:inline-block">Shop all</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} onAdd={onAddToCart} context="related" />)}
        </div>
      </section>
    </main>
  )
}

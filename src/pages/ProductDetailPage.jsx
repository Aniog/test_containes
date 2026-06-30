import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProductCard from '../components/product/ProductCard.jsx'
import { formatPrice, products } from '../data/products.js'
import strkImgConfig from '../strk-img-config.json'

const placeholder =
  'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'

function getConfiguredImage(imageId) {
  const entry = strkImgConfig?.[imageId]
  const picked = entry?.results?.find((result) => result.id === entry.picked)
  return picked?.url || entry?.results?.[0]?.url || placeholder
}

const accordions = [
  {
    title: 'Description',
    content: 'Made for everyday rituals and elevated moments, each Velmora piece balances softness, polish, and quiet statement energy.',
  },
  {
    title: 'Materials & Care',
    content: 'Our demi-fine pieces use 18K gold plating, hypoallergenic details, and carefully selected crystal accents. Keep dry, avoid fragrance, and store in the included pouch.',
  },
  {
    title: 'Shipping & Returns',
    content: 'Enjoy free worldwide shipping and easy 30-day returns on unworn pieces in original packaging.',
  },
]

export default function ProductDetailPage({ productId, onAddToCart }) {
  const product = products.find((item) => item.id === productId) || products[0]
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(product.imageId)
  const [openAccordion, setOpenAccordion] = useState('Description')

  const gallery = useMemo(
    () => [
      { id: product.imageId, label: `${product.name} studio` },
      { id: product.hoverImageId, label: `${product.name} worn` },
    ],
    [product],
  )

  const activeLabel = gallery.find((image) => image.id === activeImage)?.label || product.name
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const contextId = `detail-${product.id}-context`
  const titleId = `detail-${product.id}-title`
  const descId = `detail-${product.id}-desc`

  return (
    <main className="bg-velmora-porcelain pb-20 pt-28 text-velmora-ink md:pb-28">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-4 md:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto no-scrollbar md:order-1 md:grid md:gap-4 md:overflow-visible">
            {gallery.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(image.id)}
                className={`aspect-square w-24 shrink-0 overflow-hidden border bg-velmora-champagne transition ${
                  activeImage === image.id ? 'border-velmora-gold' : 'border-velmora-ink/10 hover:border-velmora-ink/30'
                }`}
                aria-label={`View ${image.label}`}
              >
                <img
                  alt={image.label}
                  className="h-full w-full object-cover"
                  src={getConfiguredImage(image.id)}
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden bg-velmora-champagne shadow-soft md:order-2">
            <img
              key={activeImage}
              alt={activeLabel}
              className="aspect-[4/5] h-full w-full object-cover"
              src={getConfiguredImage(activeImage)}
            />
          </div>
        </div>

        <article className="lg:pl-8">
          <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">{product.category}</p>
          <h1 id={titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-none tracking-luxe text-velmora-ink md:text-7xl">
            {product.name}
          </h1>
          <div className="mt-6 flex items-center justify-between gap-5 border-y border-velmora-ink/10 py-5">
            <p className="text-2xl font-bold text-velmora-ink">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-cocoa">
              <span className="flex text-velmora-gold" aria-label={`${product.rating} stars`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span>{product.rating} ({product.reviews})</span>
            </div>
          </div>
          <p id={descId} className="mt-6 text-base leading-8 text-velmora-cocoa">{product.description}</p>

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-ink">Tone</p>
            <div className="mt-3 flex gap-3">
              {['Gold', 'Silver'].map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setVariant(tone)}
                  className={`rounded-full border px-5 py-3 text-sm font-bold transition ${
                    variant === tone
                      ? 'border-velmora-ink bg-velmora-ink text-velmora-pearl'
                      : 'border-velmora-ink/15 text-velmora-ink hover:border-velmora-gold'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-velmora-ink/15 bg-velmora-pearl">
              <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-4 transition hover:bg-velmora-champagne">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center font-bold">{quantity}</span>
              <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)} className="p-4 transition hover:bg-velmora-champagne">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(product, quantity, variant)}
              className="min-h-14 flex-1 bg-velmora-gold px-7 text-xs font-extrabold uppercase tracking-luxe text-velmora-ink transition hover:-translate-y-0.5 hover:bg-velmora-ink hover:text-velmora-pearl"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-10 border-t border-velmora-ink/10">
            {accordions.map((item) => (
              <div key={item.title} className="border-b border-velmora-ink/10">
                <button
                  type="button"
                  onClick={() => setOpenAccordion((current) => (current === item.title ? '' : item.title))}
                  className="flex w-full items-center justify-between py-5 text-left font-serif text-2xl font-semibold text-velmora-ink"
                >
                  {item.title}
                  <ChevronDown className={`h-5 w-5 transition ${openAccordion === item.title ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === item.title && (
                  <p className="pb-5 text-sm leading-7 text-velmora-cocoa">
                    {item.title === 'Description' ? product.details : item.title === 'Materials & Care' ? product.care : item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-5 md:mt-28 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold">You may also like</h2>
          </div>
          <a href="#/shop" className="hidden text-xs font-bold uppercase tracking-luxe text-velmora-ink transition hover:text-velmora-gold md:block">Shop all</a>
        </div>
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
          ))}
        </div>
      </section>
    </main>
  )
}

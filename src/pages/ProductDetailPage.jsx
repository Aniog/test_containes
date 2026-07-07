import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { products } from '@/data/products'
import { useImageLoader } from '@/lib/useImageLoader'
import ProductCard from '@/components/product/ProductCard'

const accordionItems = [
  { id: 'description', title: 'Description' },
  { id: 'care', title: 'Materials & Care' },
  { id: 'shipping', title: 'Shipping & Returns' },
]

export default function ProductDetailPage({ onAddToCart }) {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug) || products[0]
  const [selectedTone, setSelectedTone] = useState(product.toneOptions[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')
  const containerRef = useImageLoader([slug, activeImage])

  const related = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  const gallery = [
    {
      id: 'studio',
      label: `${product.name} studio detail`,
      ratio: '4x3',
      query: `[detail-desc-${product.id}] [detail-name-${product.id}] warm gold jewelry studio close-up`,
    },
    {
      id: 'worn',
      label: `${product.name} worn on model`,
      ratio: '4x3',
      query: `[detail-name-${product.id}] jewelry worn on model warm editorial`,
    },
    {
      id: 'packaging',
      label: `${product.name} packaging`,
      ratio: '4x3',
      query: `[detail-name-${product.id}] jewelry gift box premium packaging`,
    },
  ]

  const content = {
    description: product.description,
    care: product.care,
    shipping: product.shipping,
  }

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-24 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.08fr_0.92fr] md:py-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-[92px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                className={`h-20 w-20 shrink-0 overflow-hidden rounded-2xl border bg-velmora-cream transition md:h-24 md:w-full ${
                  activeImage === index ? 'border-velmora-bronze' : 'border-velmora-linen hover:border-velmora-champagne'
                }`}
                onClick={() => setActiveImage(index)}
                aria-label={`Show ${image.label}`}
              >
                <img
                  alt={image.label}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`thumb-${product.id}-${image.id}`}
                  data-strk-img={image.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="240"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden rounded-[2.5rem] bg-velmora-cream shadow-soft md:order-2">
            <img
              alt={gallery[activeImage].label}
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
              data-strk-img-id={`detail-main-${product.id}-${gallery[activeImage].id}`}
              data-strk-img={gallery[activeImage].query}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        <aside className="self-start rounded-[2rem] border border-velmora-linen bg-velmora-mist p-6 text-velmora-espresso shadow-soft md:sticky md:top-28 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-bronze">{product.category}</p>
          <h1 id={`detail-name-${product.id}`} className="mt-4 font-serifDisplay text-5xl font-semibold uppercase leading-none tracking-[0.16em] text-velmora-espresso sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="text-2xl font-semibold text-velmora-espresso">${product.price}</p>
            <div className="flex items-center gap-1 text-velmora-bronze" aria-label="Rated 4.9 out of 5 stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm font-semibold text-velmora-cocoa">4.9</span>
            </div>
          </div>
          <p id={`detail-desc-${product.id}`} className="mt-5 text-base leading-8 text-velmora-cocoa">{product.shortDescription}</p>

          <div className="mt-8 border-t border-velmora-linen pt-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa">Tone</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {product.toneOptions.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  className={`rounded-full border px-5 py-3 text-sm font-bold transition ${
                    selectedTone === tone
                      ? 'border-velmora-espresso bg-velmora-espresso text-velmora-mist'
                      : 'border-velmora-linen bg-velmora-ivory text-velmora-espresso hover:border-velmora-bronze'
                  }`}
                  onClick={() => setSelectedTone(tone)}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="inline-flex items-center rounded-full border border-velmora-linen bg-velmora-ivory text-velmora-espresso">
              <button type="button" className="p-4 transition hover:text-velmora-bronze" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center font-semibold">{quantity}</span>
              <button type="button" className="p-4 transition hover:text-velmora-bronze" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-velmora-cocoa">In stock · ships gift boxed</p>
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-full bg-velmora-bronze px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-mist transition hover:-translate-y-0.5 hover:bg-velmora-espresso"
            onClick={() => onAddToCart(product, quantity, selectedTone)}
          >
            Add to cart
          </button>

          <div className="mt-8 divide-y divide-velmora-linen border-y border-velmora-linen">
            {accordionItems.map((item) => (
              <div key={item.id}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-[0.2em] text-velmora-espresso"
                  onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                >
                  {item.title}
                  <ChevronDown className={`h-4 w-4 transition ${openAccordion === item.id ? 'rotate-180 text-velmora-bronze' : ''}`} />
                </button>
                {openAccordion === item.id && <p className="pb-5 text-sm leading-7 text-velmora-cocoa">{content[item.id]}</p>}
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <div className="mb-8 flex items-end justify-between border-b border-velmora-linen pb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Complete the look</p>
            <h2 className="mt-2 font-serifDisplay text-4xl font-semibold text-velmora-espresso">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-sm font-bold uppercase tracking-[0.2em] text-velmora-bronze hover:text-velmora-espresso sm:block">Shop all</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
          ))}
        </div>
      </section>
    </main>
  )
}

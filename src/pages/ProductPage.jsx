import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import AccordionItem from '@/components/products/AccordionItem'
import ProductCard from '@/components/products/ProductCard.jsx?velmora=bg-images'
import { products } from '@/data/products.js?velmora=png-assets'

const tones = ['Gold', 'Silver']
const galleryViews = [
  { key: 'editorial', label: 'Editorial' },
  { key: 'detail', label: 'Detail' },
  { key: 'styled', label: 'Styled' },
]

export default function ProductPage({ onAddToCart }) {
  const { slug } = useParams()
  const product = products.find((entry) => entry.slug === slug) ?? products[0]
  const [selectedView, setSelectedView] = useState(galleryViews[0])
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)

  const relatedProducts = useMemo(
    () => products.filter((entry) => entry.id !== product.id).slice(0, 4),
    [product.id],
  )

  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:grid lg:content-start lg:overflow-visible">
              {galleryViews.map((view) => (
                <button
                  key={view.key}
                  type="button"
                  onClick={() => setSelectedView(view)}
                  className={`aspect-square w-20 shrink-0 overflow-hidden border bg-velmora-blush transition lg:w-full ${selectedView.key === view.key ? 'border-velmora-gold' : 'border-velmora-sand hover:border-velmora-gold'}`}
                  aria-label={`Show ${view.label} image`}
                >
                  <span
                    className="block h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${view.key === 'editorial' ? product.image : product.imageAlt || product.image})` }}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>

            <div
              className="order-1 aspect-[4/5] overflow-hidden bg-velmora-blush bg-cover bg-center shadow-velmora-lg lg:order-2"
              style={{ backgroundImage: `url(${selectedView.key === 'editorial' ? product.image : product.imageAlt || product.image})` }}
              role="img"
              aria-label={`${product.name} ${selectedView.label.toLowerCase()} gallery view`}
            />
          </div>

          <aside className="text-velmora-ink lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-ui text-velmora-gold">{product.category}</p>
            <h1 id={`detail-${product.id}-title`} className="mt-4 font-serif text-5xl uppercase leading-none tracking-product text-velmora-ink sm:text-6xl">
              {product.name}
            </h1>
            <p id={`detail-${product.id}-material`} className="mt-4 text-sm uppercase tracking-ui text-velmora-bronze">
              {product.material}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex text-velmora-gold" aria-label={`${product.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-velmora-bronze">{product.rating} · {product.reviews} reviews</span>
            </div>
            <p className="mt-6 font-serif text-3xl text-velmora-ink">${product.price}</p>
            <p id={`detail-${product.id}-desc`} className="mt-5 text-base leading-8 text-velmora-bronze">
              {product.description}
            </p>

            <div className="mt-8 border-y border-velmora-sand/70 py-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-ui text-velmora-ink">Tone</p>
              <div className="flex gap-3">
                {tones.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTone(item)}
                    className={`rounded-full border px-5 py-2 text-sm font-medium transition ${tone === item ? 'border-velmora-gold bg-velmora-gold text-velmora-ink' : 'border-velmora-sand bg-transparent text-velmora-bronze hover:border-velmora-gold hover:text-velmora-ink'}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="inline-flex items-center rounded-full border border-velmora-sand bg-velmora-pearl text-velmora-ink">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="bg-transparent px-4 py-3 text-velmora-ink hover:text-velmora-bronze"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center font-medium">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                  className="bg-transparent px-4 py-3 text-velmora-ink hover:text-velmora-bronze"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => onAddToCart(product, quantity)}
                className="flex-1 rounded-full bg-velmora-gold px-7 py-4 text-sm font-semibold uppercase tracking-ui text-velmora-ink transition hover:-translate-y-0.5 hover:bg-velmora-champagne"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8">
              <AccordionItem title="Description" defaultOpen>{product.description}</AccordionItem>
              <AccordionItem title="Materials & Care">{product.care}</AccordionItem>
              <AccordionItem title="Shipping & Returns">Free worldwide shipping, easy 30-day returns, and gift-ready packaging on every order.</AccordionItem>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-velmora-sand/70 bg-velmora-pearl py-16 text-velmora-ink sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-ui text-velmora-gold">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-ink">You may also like</h2>
            </div>
            <Link to="/shop" className="hidden text-sm font-semibold uppercase tracking-ui text-velmora-bronze transition hover:text-velmora-ink sm:inline">
              View all
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((entry) => (
              <ProductCard key={entry.id} product={entry} onAddToCart={onAddToCart} compact scope="related" />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

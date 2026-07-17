import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { getProductBySlug, placeholderSvg, products } from '@/data/products'
import { useVelmoraImages } from '@/lib/useVelmoraImages'

const accordions = [
  { title: 'Description', key: 'longDescription' },
  { title: 'Materials & Care', key: 'care' },
  {
    title: 'Shipping & Returns',
    content: 'Free worldwide shipping on every order. Returns are accepted within 30 days in unworn condition with original packaging.',
  },
]

export default function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const imageRef = useVelmoraImages([slug])
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  const gallery = [
    { id: 'main', ratio: '3x4', query: `[${product.descId}] [${product.titleId}]` },
    { id: 'model', ratio: '3x4', query: `[${product.descId}] [${product.titleId}]` },
    { id: 'detail', ratio: '3x4', query: `[${product.descId}] [${product.titleId}]` },
  ]

  return (
    <main ref={imageRef} className="bg-velmora-ivory pt-24 text-velmora-ink">
      <section className="luxury-container pb-16 pt-6 sm:pb-24 sm:pt-10">
        <div className="mb-6 text-xs font-bold uppercase tracking-luxury text-velmora-espresso/60">
          <Link to="/shop" className="premium-focus transition hover:text-velmora-antique">Shop</Link>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
        </div>

        <div className="grid gap-9 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="grid gap-4 sm:grid-cols-[96px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:block sm:space-y-3 sm:overflow-visible">
              {gallery.map((item) => (
                <div key={item.id} className="h-24 w-20 shrink-0 overflow-hidden border border-velmora-mist bg-velmora-parchment sm:h-28 sm:w-24">
                  <img
                    className="h-full w-full object-cover"
                    data-strk-img-id={`detail-thumb-${product.id}-${item.id}`}
                    data-strk-img={item.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="250"
                    src={placeholderSvg}
                    alt={`${product.name} thumbnail ${item.id}`}
                  />
                </div>
              ))}
            </div>
            <div className="order-1 aspect-product overflow-hidden bg-velmora-parchment shadow-luxury sm:order-2">
              <img
                className="editorial-image"
                data-strk-img-id={`detail-main-${product.id}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1100"
                src={placeholderSvg}
                alt={`${product.name} main product image`}
              />
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-antique">{product.category}</p>
            <h1 id={product.titleId} className="mt-3 font-serif text-5xl font-semibold uppercase leading-none tracking-luxury text-velmora-ink sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="font-serif text-3xl font-semibold text-velmora-ink">${product.price}</p>
              <div className="flex items-center gap-1 text-velmora-antique" aria-label={`${product.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-sm font-semibold text-velmora-espresso/66">{product.reviewCount} reviews</span>
              </div>
            </div>
            <p id={product.descId} className="mt-6 max-w-xl text-base leading-8 text-velmora-espresso/76">{product.description}</p>

            <div className="mt-8 border-t border-velmora-mist pt-7">
              <p className="text-xs font-bold uppercase tracking-luxury text-velmora-espresso/70">Tone</p>
              <div className="mt-3 flex gap-3">
                {['Gold', 'Silver'].map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setVariant(tone)}
                    className={`premium-focus rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-luxury transition ${variant === tone ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory' : 'border-velmora-mist bg-velmora-ivory text-velmora-ink hover:border-velmora-antique'}`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <p className="text-xs font-bold uppercase tracking-luxury text-velmora-espresso/70">Quantity</p>
              <div className="inline-flex items-center border border-velmora-mist bg-velmora-ivory">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="premium-focus inline-flex h-11 w-11 items-center justify-center text-velmora-ink">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm font-semibold text-velmora-ink">{quantity}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((current) => current + 1)} className="premium-focus inline-flex h-11 w-11 items-center justify-center text-velmora-ink">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onAddToCart(product, quantity, variant)}
              className="premium-focus mt-8 w-full bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-ink transition hover:bg-velmora-antique hover:text-velmora-ivory"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            <div className="mt-8 divide-y divide-velmora-mist border-y border-velmora-mist">
              {accordions.map((item, index) => (
                <details key={item.title} className="group" open={index === 0}>
                  <summary className="premium-focus flex cursor-pointer list-none items-center justify-between py-5 text-sm font-bold uppercase tracking-luxury text-velmora-ink">
                    {item.title}
                    <span className="text-xl transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="pb-5 text-sm leading-7 text-velmora-espresso/75">{item.content ?? product[item.key]}</p>
                </details>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-velmora-mist bg-velmora-parchment py-16 sm:py-24">
        <div className="luxury-container">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-luxury text-velmora-antique">Complete the ritual</p>
              <h2 className="mt-2 font-serif text-4xl font-semibold text-velmora-ink sm:text-5xl">You may also like</h2>
            </div>
            <Link to="/shop" className="premium-focus hidden text-xs font-bold uppercase tracking-luxury text-velmora-antique transition hover:text-velmora-ink sm:inline-flex">View all</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

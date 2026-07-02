import { Minus, Plus, Star } from 'lucide-react'
import { useState } from 'react'
import ProductCard from '../common/ProductCard.jsx'
import StockImage from '../common/StockImage.jsx'

const accordionContent = [
  {
    title: 'Description',
    body: 'A refined demi-fine piece designed to layer effortlessly, catch warm light, and become part of your daily signature.',
  },
  {
    title: 'Materials & Care',
    body: '18K gold plated finish over a durable base. Keep dry, store separately, and polish gently with a soft cloth after wear.',
  },
  {
    title: 'Shipping & Returns',
    body: 'Free worldwide shipping on every order. Enjoy simple 30-day returns on unworn pieces in original packaging.',
  },
]

const ProductDetail = ({ product, products, onAdd, onSelect }) => {
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [open, setOpen] = useState('Description')
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <section id="product" className="bg-velmora-cream px-5 py-16 text-velmora-ink lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="grid gap-4 md:grid-cols-[5.5rem_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
              {[product.imageId, product.hoverImageId, `${product.id}-detail-thumb-q4z7`].map((id, index) => (
                <button key={id} type="button" className="shrink-0 overflow-hidden border border-velmora-line bg-velmora-ivory transition hover:border-velmora-gold" aria-label={`${product.name} image ${index + 1}`}>
                  <StockImage
                    id={id}
                    query={`[${product.descId}] [${product.titleId}]`}
                    ratio="1x1"
                    width="220"
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="h-20 w-20 object-cover md:h-24 md:w-full"
                  />
                </button>
              ))}
            </div>
            <div className="order-1 overflow-hidden border border-velmora-line bg-velmora-champagne/20 shadow-soft md:order-2">
              <StockImage
                id={`${product.id}-gallery-main-e7p2`}
                query={`[${product.descId}] [${product.titleId}]`}
                ratio="3x4"
                width="1000"
                alt={product.name}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-clay">{product.category}</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold uppercase leading-none tracking-[0.16em] text-velmora-ink md:text-6xl">
              {product.name}
            </h2>
            <div className="mt-5 flex items-center justify-between gap-4 border-b border-velmora-line pb-6">
              <p className="text-2xl font-semibold text-velmora-ink">${product.price}</p>
              <div className="flex items-center gap-1 text-velmora-gold" aria-label="4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                <span className="ml-2 text-sm font-semibold text-velmora-forest/75">4.9</span>
              </div>
            </div>
            <p className="mt-6 text-base leading-8 text-velmora-forest/78">{product.detail}</p>

            <div className="mt-7">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-clay">Tone</p>
              <div className="mt-3 flex gap-3">
                {['Gold', 'Silver'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-5 py-3 text-sm font-bold transition ${tone === option ? 'border-velmora-gold bg-velmora-gold text-velmora-ink' : 'border-velmora-line bg-velmora-ivory text-velmora-ink hover:border-velmora-gold'}`}
                  >
                    {option} tone
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <div className="inline-flex items-center overflow-hidden rounded-full border border-velmora-line bg-velmora-ivory text-velmora-ink">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-4 transition hover:bg-velmora-champagne/50" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center font-bold">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-4 transition hover:bg-velmora-champagne/50" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <span className="text-sm text-velmora-forest/70">Ready to ship</span>
            </div>

            <button type="button" onClick={() => onAdd(product, quantity)} className="mt-6 w-full rounded-full bg-velmora-gold px-8 py-5 text-sm font-extrabold uppercase tracking-[0.22em] text-velmora-ink shadow-glow transition hover:bg-velmora-champagne">
              Add to Cart
            </button>

            <div className="mt-8 border-t border-velmora-line">
              {accordionContent.map((item) => (
                <div key={item.title} className="border-b border-velmora-line">
                  <button type="button" onClick={() => setOpen(open === item.title ? '' : item.title)} className="flex w-full items-center justify-between py-5 text-left text-sm font-extrabold uppercase tracking-[0.22em] text-velmora-ink">
                    {item.title}
                    <span className="text-xl">{open === item.title ? '−' : '+'}</span>
                  </button>
                  {open === item.title && <p className="pb-5 text-sm leading-7 text-velmora-forest/75">{item.body}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-velmora-line pt-10">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-clay">You may also like</p>
              <h3 className="mt-2 font-serif text-4xl font-semibold text-velmora-ink">Complete the ritual</h3>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} onAdd={onAdd} onSelect={onSelect} compact imageContext="related" />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail

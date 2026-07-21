import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useState } from 'react'
import ProductCard from '../components/storefront/ProductCard'
import ProductGallery from '../components/storefront/ProductGallery'
import { products } from '../data/products'

const accordions = [
  { title: 'Description', key: 'details' },
  { title: 'Materials & Care', key: 'care' },
  { title: 'Shipping & Returns', key: 'shipping' },
]

export default function ProductDetail({ product, onAddToCart, onViewProduct }) {
  const [tone, setTone] = useState('Gold tone')
  const [quantity, setQuantity] = useState(1)
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-24">
        <ProductGallery product={product} />

        <div className="lg:pl-6">
          <p className="text-xs font-bold uppercase tracking-luxury text-velmora-bronze">{product.category}</p>
          <h1 id={product.titleId} className="product-name mt-4 text-4xl leading-tight text-velmora-espresso sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="text-2xl font-semibold text-velmora-espresso">${product.price}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-taupe">
              <span className="flex text-velmora-gold" aria-label={`${product.rating} star rating`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </span>
              {product.rating} · {product.reviewCount} reviews
            </div>
          </div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-taupe">
            {product.description}
          </p>

          <div className="mt-8 border-y border-velmora-line py-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-taupe">Finish</p>
            <div className="flex flex-wrap gap-3">
              {['Gold tone', 'Silver tone'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setTone(option)}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                    tone === option
                      ? 'border-velmora-noir bg-velmora-noir text-velmora-ivory'
                      : 'border-velmora-line bg-velmora-pearl text-velmora-espresso hover:border-velmora-gold'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <div className="inline-flex w-fit items-center rounded-full border border-velmora-line bg-velmora-pearl text-velmora-espresso">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-4" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-12 text-center font-semibold">{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-4" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(product, quantity, tone)}
              className="flex-1 rounded-full bg-velmora-gold px-8 py-4 text-xs font-extrabold uppercase tracking-luxury text-velmora-espresso shadow-glow transition hover:-translate-y-0.5 hover:bg-velmora-champagne"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 divide-y divide-velmora-line border-t border-velmora-line">
            {accordions.map((item) => (
              <details key={item.title} className="group py-5" open={item.key === 'details'}>
                <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-bold uppercase tracking-luxury text-velmora-espresso">
                  {item.title}
                  <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-7 text-velmora-taupe">
                  {item.key === 'shipping' ? product.shipping || 'Free worldwide shipping on every order with 30-day returns on unworn pieces.' : product[item.key]}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-line px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl text-velmora-espresso sm:text-5xl">You may also like</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} context="related" onAddToCart={onAddToCart} onViewProduct={onViewProduct} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

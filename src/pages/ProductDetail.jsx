import { Minus, Plus, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Accordion from '@/components/product/Accordion'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { formatPrice, getProductById } from '@/lib/format'

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams()
  const product = getProductById(products, id)
  const [tone, setTone] = useState(product.tone[0])
  const [quantity, setQuantity] = useState(1)
  const related = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 4), [product.id])

  const accordions = [
    { title: 'Description', content: product.details },
    { title: 'Materials & Care', content: `${product.material}. ${product.care}` },
    { title: 'Shipping & Returns', content: 'Complimentary worldwide shipping, easy 30-day returns, and gift-ready packaging with every order.' },
  ]

  const handleAdd = () => {
    onAddToCart(product, quantity, tone)
  }

  return (
    <main className="bg-velmora-parchment pb-24 pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-taupe transition hover:text-velmora-gold">← Back to shop</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="grid gap-4 sm:grid-cols-[88px_1fr]">
            <div className="order-2 flex gap-3 sm:order-1 sm:flex-col">
              {[product.imgId, product.hoverImgId, `${product.id}-detail-vmthird`].map((imageId, index) => (
                <img
                  key={imageId}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="aspect-square w-20 rounded-xl border border-velmora-line bg-velmora-ivory object-cover sm:w-full"
                  data-strk-img-id={imageId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="240"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              ))}
            </div>
            <div className="order-1 overflow-hidden rounded-[2rem] bg-velmora-ivory shadow-soft sm:order-2">
              <img
                alt={product.name}
                className="aspect-[4/5] h-full w-full object-cover"
                data-strk-img-id={`${product.id}-pdp-main-vmhero`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">{product.category}</p>
            <h1 id={product.titleId} className="mt-4 font-serif text-5xl uppercase leading-tight tracking-[0.16em] text-velmora-ink sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-2xl font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-2 text-sm text-velmora-ink">
                <span className="flex text-velmora-champagne">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</span>
                <span>{product.rating} · {product.reviews} reviews</span>
              </div>
            </div>
            <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-taupe">{product.description}</p>

            <div className="mt-8 space-y-7 border-y border-velmora-line py-7">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-velmora-ink">Tone</p>
                <div className="flex flex-wrap gap-3">
                  {product.tone.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setTone(option)}
                      className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] transition ${tone === option ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory' : 'border-velmora-line bg-velmora-ivory text-velmora-ink hover:border-velmora-gold'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-velmora-ink">Quantity</p>
                <div className="inline-flex items-center rounded-full border border-velmora-line bg-velmora-ivory">
                  <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-4 text-velmora-ink transition hover:text-velmora-gold" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                  <span className="min-w-10 text-center text-sm font-semibold text-velmora-ink">{quantity}</span>
                  <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-4 text-velmora-ink transition hover:text-velmora-gold" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                </div>
              </div>
              <button type="button" onClick={handleAdd} className="w-full rounded-full bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-[0.3em] text-velmora-ink shadow-soft transition hover:bg-velmora-gold">
                Add to Cart
              </button>
            </div>

            <Accordion items={accordions} />
          </div>
        </div>

        <div className="mt-24 border-t border-velmora-line pt-12">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-4xl text-velmora-ink">You may also like</h2>
            </div>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />)}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetail

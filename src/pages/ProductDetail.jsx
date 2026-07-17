import { Minus, Plus, Star } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Accordion from '@/components/product/Accordion.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import { getProductById, products } from '@/data/products.js'

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(product.gallery[0])

  const related = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 4), [product.id])
  const galleryIds = [product.gallery[0], product.gallery[1], product.gallery[2], product.imageId]

  const addCurrentProduct = () => {
    onAddToCart(product, { variant, quantity })
  }

  return (
    <main className="bg-velmora-ivory pt-24 text-velmora-ink lg:pt-28">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto no-scrollbar lg:order-1 lg:flex-col lg:overflow-visible">
            {galleryIds.map((imageId, index) => (
              <button
                key={imageId}
                type="button"
                onClick={() => setActiveImage(imageId)}
                className={`h-20 w-20 flex-none overflow-hidden border bg-velmora-parchment transition ${activeImage === imageId ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-gold/50'}`}
                aria-label={`View product image ${index + 1}`}
              >
                <img
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`${imageId}-thumb`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="180"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-parchment shadow-soft lg:order-2">
            <img
              key={activeImage}
              alt={product.name}
              className="h-full w-full object-cover"
              data-strk-img-id={activeImage}
              data-strk-img={`[${product.descId}] [${product.titleId}] warm gold jewelry editorial product detail`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1100"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        <div className="text-velmora-ink lg:pl-8">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold transition hover:text-velmora-ink">Back to shop</Link>
          <h1 id={product.titleId} className="mt-5 font-serif text-5xl font-semibold uppercase leading-none tracking-[0.16em] text-velmora-ink sm:text-6xl">{product.name}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 border-b border-velmora-gold/25 pb-6">
            <p className="font-serif text-3xl text-velmora-ink">${product.price}</p>
            <div className="flex items-center gap-1 text-velmora-gold">
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              <span className="ml-2 text-sm font-semibold text-velmora-taupe">{product.rating} · {product.reviews} reviews</span>
            </div>
          </div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-taupe">{product.description}</p>

          <div className="mt-8">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink">Tone</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((tone) => (
                <button key={tone} type="button" onClick={() => setVariant(tone)} className={`rounded-full border px-5 py-2 text-sm font-bold transition ${variant === tone ? 'border-velmora-gold bg-velmora-gold text-velmora-ink' : 'border-velmora-ink/15 text-velmora-ink hover:border-velmora-gold hover:text-velmora-gold'}`}>{tone}</button>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink">Quantity</p>
            <div className="inline-flex items-center rounded-full border border-velmora-ink/15 bg-velmora-porcelain text-velmora-ink">
              <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="p-4 transition hover:text-velmora-gold" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
              <span className="min-w-12 text-center font-bold">{quantity}</span>
              <button type="button" onClick={() => setQuantity((current) => current + 1)} className="p-4 transition hover:text-velmora-gold" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
            </div>
          </div>

          <button type="button" onClick={addCurrentProduct} className="mt-8 w-full rounded-full bg-velmora-gold px-7 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-velmora-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-velmora-soft-gold">Add to Cart</button>

          <div className="mt-9">
            <Accordion items={[
              { title: 'Description', content: product.details },
              { title: 'Materials & Care', content: `${product.material}. ${product.care}` },
              { title: 'Shipping & Returns', content: 'Enjoy free worldwide shipping on every order and easy 30-day returns on unworn pieces in original packaging.' },
            ]} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mb-9 flex items-end justify-between border-t border-velmora-gold/25 pt-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ink">You may also like</h2>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />)}
        </div>
      </section>
    </main>
  )
}

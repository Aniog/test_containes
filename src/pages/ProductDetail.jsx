import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Minus, Plus } from 'lucide-react'
import AccordionItem from '@/components/product/AccordionItem.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import ProductGallery from '@/components/product/ProductGallery.jsx'
import Stars from '@/components/product/Stars.jsx'
import { getProductById, products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product.id])

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <main ref={containerRef} className="bg-velmora-cream pt-28 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-16">
        <ProductGallery product={product} />

        <div className="lg:sticky lg:top-28 lg:self-start">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-clay transition hover:text-velmora-ink">Back to shop</Link>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-clay">{product.category}</p>
          <h1 id="product-detail-title" className="mt-3 font-serif text-5xl uppercase leading-none tracking-[0.16em] text-velmora-ink md:text-6xl">{product.name}</h1>
          <div className="mt-5 flex items-center gap-4">
            <p className="font-serif text-4xl text-velmora-ink">${product.price}</p>
            <div className="h-8 w-px bg-velmora-ink/10" />
            <div className="flex items-center gap-2">
              <Stars rating={product.rating} />
              <span className="text-xs text-velmora-ink/60">{product.rating} ({product.reviews})</span>
            </div>
          </div>
          <p className="mt-6 text-base leading-8 text-velmora-ink/72">{product.description}</p>

          <div className="mt-8 space-y-6 border-y border-velmora-ink/10 py-7">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-clay">Tone</p>
              <div className="flex flex-wrap gap-3">
                {['Gold', 'Silver'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-5 py-2 text-sm font-medium transition ${tone === option ? 'border-velmora-gold bg-velmora-gold text-velmora-ink' : 'border-velmora-ink/15 text-velmora-ink hover:border-velmora-clay'}`}
                  >
                    {option} tone
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-clay">Quantity</p>
              <div className="inline-flex items-center border border-velmora-ink/15 text-velmora-ink">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-3 transition hover:bg-velmora-linen" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center text-sm">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-3 transition hover:bg-velmora-linen" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => addToCart(product, quantity, tone)}
            className="mt-7 w-full bg-velmora-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-brass focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2 focus:ring-offset-velmora-cream"
          >
            Add to Cart
          </button>

          <div className="mt-8">
            <AccordionItem title="Description" defaultOpen>{product.detail}</AccordionItem>
            <AccordionItem title="Materials & Care">{product.material}. {product.care}</AccordionItem>
            <AccordionItem title="Shipping & Returns">Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.</AccordionItem>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-ink/10 bg-velmora-pearl py-16 text-velmora-ink md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-clay">Complete the ritual</p>
              <h2 id="related-title" className="mt-3 font-serif text-5xl text-velmora-ink">You may also like</h2>
            </div>
            <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink underline decoration-velmora-gold underline-offset-8 transition hover:text-velmora-clay md:inline-flex">Shop all</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} contextId="related-title" compact />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import { getProductById, products } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import { useStockImages } from '@/lib/useStockImages'
import ProductGallery from '@/components/product/ProductGallery.jsx?velmora=2'
import Rating from '@/components/product/Rating'
import AccordionGroup from '@/components/product/AccordionGroup'
import ProductCard from '@/components/product/ProductCard.jsx?velmora=2'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const [tone, setTone] = useState(product.tone[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const { addItem } = useCart()
  const containerRef = useStockImages([product.id, activeImage])
  const related = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 4), [product.id])

  return (
    <main ref={containerRef} className="bg-velmora-ivory pb-20 pt-28 text-velmora-ink md:pt-32">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <ProductGallery product={product} activeImage={activeImage} setActiveImage={setActiveImage} />
        <div className="lg:sticky lg:top-28 lg:self-start">
          <nav className="mb-6 text-xs uppercase tracking-luxury text-velmora-taupe">
            <Link to="/shop" className="hover:text-velmora-gold">Shop</Link> / {product.category}
          </nav>
          <p id={`pdp-${product.id}-desc`} className="mb-4 text-xs font-semibold uppercase tracking-luxury text-velmora-gold">{product.category}</p>
          <h1 id={`pdp-${product.id}-title`} className="font-serif text-5xl uppercase leading-none tracking-luxury text-velmora-ink md:text-7xl">
            {product.name}
          </h1>
          <div className="mt-6 flex flex-col gap-4 border-y border-velmora-sand py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-serif text-3xl text-velmora-ink">${product.price}</p>
            <Rating rating={product.rating} reviews={product.reviews} />
          </div>
          <p className="mt-6 text-base leading-8 text-velmora-taupe">{product.description}</p>

          <div className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-ink">Tone</p>
            <div className="flex flex-wrap gap-3">
              {product.tone.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setTone(option)}
                  className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-luxury transition ${
                    tone === option
                      ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory'
                      : 'border-velmora-sand bg-velmora-porcelain text-velmora-ink hover:border-velmora-gold'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-[140px_1fr]">
            <div className="flex min-h-14 items-center justify-between rounded-full border border-velmora-sand bg-velmora-porcelain px-4 text-velmora-ink">
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-semibold">{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => addItem(product, { tone, quantity })}
              className="min-h-14 rounded-full bg-velmora-gold px-7 text-xs font-bold uppercase tracking-luxury text-velmora-espresso shadow-gold transition hover:bg-velmora-champagne"
            >
              Add to Cart
            </button>
          </div>

          <AccordionGroup product={product} />
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-5 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-luxury text-velmora-gold">Complete the ritual</p>
            <h2 className="font-serif text-4xl text-velmora-ink md:text-5xl">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-luxury text-velmora-ink underline decoration-velmora-gold underline-offset-8 hover:text-velmora-gold sm:block">
            Shop all
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} contextId="related" />)}
        </div>
      </section>
    </main>
  )
}

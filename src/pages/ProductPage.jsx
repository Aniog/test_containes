import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import Accordion from '@/components/product/Accordion'
import ProductCard from '@/components/product/ProductCard'
import ProductImage from '@/components/product/ProductImage'
import Rating from '@/components/product/Rating'
import { products } from '@/data/products'
import { formatCurrency } from '@/lib/format'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const tones = ['Gold', 'Silver']
const getGalleryImageUrl = (product, index) => {
  const results = strkImgConfig?.[`velmora-${product.id}-card-a`]?.results || []
  return results[index]?.url || results[0]?.url
}

export default function ProductPage({ onAddToCart }) {
  const { slug } = useParams()
  const pageRef = useRef(null)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  const product = products.find((item) => item.slug === slug) || products[0]
  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug, activeImage])

  const addSelectedToCart = () => {
    onAddToCart(product, { tone, quantity })
  }

  return (
    <main ref={pageRef} className="min-h-screen bg-velmora-porcelain pt-28 text-velmora-ink">
      <section className="velmora-container pb-16 pt-8 md:pb-24 md:pt-12">
        <div className="mb-8 text-xs font-bold uppercase tracking-[0.20em] text-velmora-clay">
          <Link to="/shop" className="transition hover:text-velmora-gold">Shop</Link>
          <span className="mx-3 text-velmora-gold">/</span>
          <span>{product.category}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto scrollbar-none lg:order-1 lg:flex-col lg:overflow-visible">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`h-20 w-20 shrink-0 overflow-hidden border bg-velmora-mist transition ${activeImage === index ? 'border-velmora-gold' : 'border-velmora-sand'}`}
                  aria-label={`View image ${index + 1}`}
                >
                  <ProductImage product={product} variant={`thumb-${index}`} ratio="1x1" width="180" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
            <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-mist shadow-soft lg:order-2">
              <img src={getGalleryImageUrl(product, activeImage)} alt={product.name} className="h-full w-full object-cover" />
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <p id={`product-${product.id}-material`} className="eyebrow">{product.material}</p>
            <h1 id={`product-${product.id}-title`} className="mt-4 font-serif text-5xl font-semibold uppercase leading-none tracking-luxe text-velmora-ink md:text-7xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-5">
              <p className="font-serif text-4xl font-semibold text-velmora-ink">{formatCurrency(product.price)}</p>
              <Rating rating={product.rating} count={product.reviewCount} />
            </div>
            <p id={`product-${product.id}-desc`} className="mt-6 max-w-xl text-base leading-8 text-velmora-clay">{product.shortDescription}</p>

            <div className="mt-8 border-y border-velmora-sand py-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-clay">Tone</p>
              <div className="mt-4 flex gap-3">
                {tones.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTone(item)}
                    className={`rounded-full border px-5 py-2 text-sm font-bold uppercase tracking-[0.16em] transition ${tone === item ? 'border-velmora-gold bg-velmora-gold text-velmora-espresso' : 'border-velmora-sand bg-velmora-pearl text-velmora-ink hover:border-velmora-gold'}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-[150px_1fr]">
              <div className="flex h-14 items-center justify-between rounded-full border border-velmora-sand bg-velmora-pearl px-4 text-velmora-ink">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                <span className="font-bold">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
              </div>
              <button type="button" onClick={addSelectedToCart} className="btn-primary h-14 w-full">Add to Cart</button>
            </div>

            <div className="mt-8">
              <Accordion
                items={[
                  { title: 'Description', content: product.description },
                  { title: 'Materials & Care', content: `${product.material}. ${product.care}` },
                  { title: 'Shipping & Returns', content: 'Enjoy free worldwide shipping and 30-day returns on unworn pieces in original packaging.' },
                ]}
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-velmora-sand bg-velmora-pearl py-16 text-velmora-ink md:py-24">
        <div className="velmora-container">
          <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">You may also like</p>
              <h2 className="serif-display mt-3 text-5xl text-velmora-ink md:text-6xl">Complete the ritual</h2>
            </div>
            <Link to="/shop" className="btn-secondary w-fit">View all</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

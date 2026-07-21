import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import { formatPrice, getProductBySlug, products } from '@/data/products'
import { useStrikinglyImages } from '@/hooks/useStrikinglyImages'
import ImageSlot from '@/components/storefront/ImageSlot'
import ProductCard from '@/components/storefront/ProductCard'

const tones = ['Gold', 'Silver']

const accordionCopy = (product) => [
  { title: 'Description', content: product.details },
  { title: 'Materials & Care', content: product.care },
  { title: 'Shipping & Returns', content: product.shipping },
]

export default function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const containerRef = useStrikinglyImages([slug, selectedImage])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const gallery = [product.imageId, ...product.detailImageIds]

  const related = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4)

  return (
    <main ref={containerRef} className="bg-velmora-ivory pb-16 pt-28 text-velmora-ink sm:pt-32 lg:pb-24">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((imgId, index) => (
              <button
                key={imgId}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`aspect-square w-20 shrink-0 overflow-hidden border bg-velmora-champagne transition lg:w-full ${
                  selectedImage === index ? 'border-velmora-gold ring-2 ring-velmora-gold/30' : 'border-velmora-hairline hover:border-velmora-brass'
                }`}
                aria-label={`View ${product.name} image ${index + 1}`}
              >
                <ImageSlot
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                  imgId={`thumb-${imgId}`}
                  query={`[${product.descId}] [${product.titleId}]`}
                  ratio="1x1"
                  width="220"
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden bg-velmora-champagne shadow-editorial lg:order-2">
            <ImageSlot
              alt={product.name}
              className="aspect-[4/5] h-full w-full object-cover"
              imgId={`gallery-main-${gallery[selectedImage]}`}
              query={`[${product.descId}] [${product.titleId}]`}
              ratio="3x4"
              width="1200"
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <nav className="mb-6 text-xs font-semibold uppercase tracking-luxury text-velmora-muted">
            <Link to="/shop" className="transition hover:text-velmora-brass">Shop</Link>
            <span className="mx-2">/</span>
            <span>{product.category}</span>
          </nav>

          <p className="text-xs font-bold uppercase tracking-emblem text-velmora-brass">{product.category}</p>
          <h1 id={product.titleId} className="mt-3 font-serifDisplay text-5xl uppercase leading-none tracking-luxury text-velmora-ink sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="text-2xl font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-muted">
              <span className="flex text-velmora-gold" aria-label={`${product.rating} star rating`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </span>
              {product.rating} ({product.reviews} reviews)
            </div>
          </div>
          <p id={product.descId} className="mt-6 max-w-xl text-base leading-8 text-velmora-muted">
            {product.description}
          </p>

          <div className="mt-8 border-t border-velmora-hairline pt-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-ink">Tone</p>
            <div className="flex flex-wrap gap-3">
              {tones.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-luxury transition focus:outline-none focus:ring-2 focus:ring-velmora-gold ${
                    selectedTone === tone
                      ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory'
                      : 'border-velmora-hairline bg-velmora-porcelain text-velmora-ink hover:border-velmora-gold'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-[140px_1fr]">
            <div className="flex h-14 items-center justify-between rounded-full border border-velmora-hairline bg-velmora-porcelain px-3">
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                className="rounded-full p-2 text-velmora-ink transition hover:bg-velmora-champagne"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-semibold text-velmora-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((value) => value + 1)}
                className="rounded-full p-2 text-velmora-ink transition hover:bg-velmora-champagne"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(product, quantity, selectedTone)}
              className="h-14 rounded-full bg-velmora-gold px-7 text-xs font-bold uppercase tracking-luxury text-velmora-ink shadow-glow transition hover:bg-velmora-ink hover:text-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 divide-y divide-velmora-hairline border-y border-velmora-hairline">
            {accordionCopy(product).map((item) => (
              <div key={item.title}>
                <button
                  type="button"
                  onClick={() => setOpenAccordion((open) => (open === item.title ? '' : item.title))}
                  className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-luxury text-velmora-ink"
                >
                  {item.title}
                  <span className="text-xl text-velmora-brass">{openAccordion === item.title ? '−' : '+'}</span>
                </button>
                {openAccordion === item.title && (
                  <p className="pb-5 text-sm leading-7 text-velmora-muted">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:mt-24 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-emblem text-velmora-brass">Complete the ritual</p>
            <h2 className="mt-3 font-serifDisplay text-5xl leading-none text-velmora-ink">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-sm font-semibold uppercase tracking-luxury text-velmora-brass transition hover:text-velmora-ink sm:block">
            View all
          </Link>
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

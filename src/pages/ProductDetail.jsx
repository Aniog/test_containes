import { ChevronLeft, Minus, Plus, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import StrkImage from '@/components/common/StrkImage'
import Accordion from '@/components/products/Accordion'
import ProductCard from '@/components/products/ProductCard'
import { formatPrice, getProductById, products } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

const variants = ['Gold', 'Silver']

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)

  const gallery = useMemo(
    () => [product.imgId, product.hoverImgId, ...product.galleryIds].map((id, index) => ({ id, index })),
    [product],
  )
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const containerRef = useStrkImages([product.id, selectedImage])

  const handleAdd = () => {
    onAddToCart(product, quantity, variant)
  }

  return (
    <main ref={containerRef} className="bg-velmora-porcelain pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 md:py-14">
        <Link to="/shop" className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe transition hover:text-velmora-gold">
          <ChevronLeft className="h-4 w-4" />
          Back to shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="grid gap-4 md:grid-cols-[92px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
              {gallery.map((image) => (
                <button
                  type="button"
                  key={image.id}
                  onClick={() => setSelectedImage(image.index)}
                  className={`h-24 w-20 shrink-0 overflow-hidden rounded-t-full border bg-velmora-ivory transition ${
                    selectedImage === image.index ? 'border-velmora-gold' : 'border-velmora-line hover:border-velmora-gold'
                  }`}
                  aria-label={`View image ${image.index + 1}`}
                >
                  <StrkImage
                    id={`${image.id}-thumb`}
                    query={`[${product.descId}] [${product.titleId}]`}
                    ratio="3x4"
                    width="180"
                    alt={`${product.name} thumbnail ${image.index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="order-1 overflow-hidden rounded-t-full border border-velmora-line bg-velmora-champagne shadow-soft md:order-2">
              <StrkImage
                id={`${gallery[selectedImage].id}-main`}
                query={`[${product.descId}] [${product.titleId}]`}
                ratio="3x4"
                width="1000"
                alt={product.name}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">{product.category}</p>
            <h1 id={product.titleId} className="mt-4 font-serif text-5xl font-medium uppercase leading-none tracking-[0.08em] text-velmora-ink md:text-7xl">
              {product.name}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 border-b border-velmora-line pb-6">
              <p className="font-serif text-4xl text-velmora-ink">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-2 text-sm text-velmora-taupe">
                <span className="flex text-velmora-gold" aria-label={`${product.rating} star rating`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                {product.rating} · {product.reviews} reviews
              </div>
            </div>

            <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-taupe md:text-lg">
              {product.shortDescription}
            </p>

            <div className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">Tone</p>
              <div className="flex gap-3">
                {variants.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setVariant(tone)}
                    className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                      variant === tone
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                        : 'border-velmora-line bg-velmora-ivory text-velmora-taupe hover:border-velmora-gold hover:text-velmora-ink'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-[150px_1fr]">
              <div className="flex items-center justify-between rounded-full border border-velmora-line bg-velmora-ivory text-velmora-ink">
                <button type="button" className="px-5 py-4" onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="font-semibold">{quantity}</span>
                <button type="button" className="px-5 py-4" onClick={() => setQuantity((current) => current + 1)} aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="rounded-full bg-velmora-ink px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ivory transition hover:-translate-y-0.5 hover:bg-velmora-gold hover:text-velmora-ink hover:shadow-glow"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-9">
              <Accordion
                items={[
                  { title: 'Description', content: product.description },
                  { title: 'Materials & Care', content: `${product.material}. ${product.care}` },
                  { title: 'Shipping & Returns', content: 'Enjoy free worldwide shipping, gift-ready packaging, and 30-day returns on unworn pieces.' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-line bg-velmora-ivory py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-4xl text-velmora-ink md:text-6xl">You may also like</h2>
            </div>
            <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe transition hover:text-velmora-gold">
              View all pieces
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

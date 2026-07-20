import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import strkImgConfig from '../strk-img-config.json'

const formatPrice = (value) => `$${value.toFixed(0)}`

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-blush">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink"
        aria-expanded={open}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="pb-6 text-sm leading-7 text-velmora-umber">{children}</div>}
    </div>
  )
}

function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug) || products[0]
  const [selectedImage, setSelectedImage] = useState(product.galleryIds[0])
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const pageRef = useRef(null)

  useEffect(() => {
    setSelectedImage(product.galleryIds[0])
    setTone('Gold')
    setQuantity(1)
  }, [product.id])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product.id, selectedImage])

  const related = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  const handleAdd = () => {
    onAddToCart(product, quantity, tone)
  }

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-ink md:pt-28">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 md:px-8 md:pb-24 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="grid gap-4 md:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:block md:space-y-4 md:overflow-visible">
            {product.galleryIds.map((imageId, index) => (
              <button
                key={imageId}
                type="button"
                onClick={() => setSelectedImage(imageId)}
                className={`min-w-20 overflow-hidden rounded-2xl border bg-velmora-blush transition-all ${
                  selectedImage === imageId ? 'border-velmora-gold opacity-100' : 'border-velmora-blush opacity-70 hover:opacity-100'
                }`}
                aria-label={`View ${product.name} image ${index + 1}`}
              >
                <div
                  className="aspect-square w-full bg-cover bg-center velmora-image-warmth"
                  data-strk-bg-id={`${imageId}-thumb`}
                  data-strk-bg={`[${product.descId}] [${product.titleId}]`}
                  data-strk-bg-ratio="1x1"
                  data-strk-bg-width="220"
                  role="img"
                  aria-label={`${product.name} thumbnail ${index + 1}`}
                />
              </button>
            ))}
          </div>
          <div
            className="order-1 aspect-[4/5] overflow-hidden rounded-[2.25rem] bg-velmora-blush bg-cover bg-center shadow-soft velmora-image-warmth md:order-2"
            data-strk-bg-id={`${selectedImage}-main`}
            data-strk-bg={`[${product.descId}] [${product.titleId}]`}
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1100"
            role="img"
            aria-label={product.name}
          />
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">{product.category}</p>
          <h1 id={product.titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-tight tracking-[0.16em] text-velmora-ink md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center gap-4">
            <p className="text-2xl font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-1 text-velmora-gold" aria-label="Rated 5 stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm font-semibold text-velmora-umber">128 reviews</span>
            </div>
          </div>
          <p id={product.descId} className="mt-6 text-lg leading-8 text-velmora-umber">
            {product.description}
          </p>

          <div className="mt-8 border-y border-velmora-blush py-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-velmora-umber">Tone</p>
            <div className="flex flex-wrap gap-3">
              {['Gold', 'Silver'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setTone(option)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-bold uppercase tracking-[0.18em] transition-colors ${
                    tone === option
                      ? 'border-velmora-champagne bg-velmora-champagne text-velmora-ink'
                      : 'border-velmora-blush bg-transparent text-velmora-ink hover:border-velmora-champagne'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <div className="flex w-full items-center justify-between rounded-full border border-velmora-blush bg-velmora-cream px-3 text-velmora-ink sm:w-36">
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                className="p-3 text-velmora-ink hover:text-velmora-gold"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-semibold">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((value) => value + 1)}
                className="p-3 text-velmora-ink hover:text-velmora-gold"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="min-h-14 flex-1 rounded-full bg-velmora-champagne px-8 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink shadow-glow transition-all duration-300 hover:bg-velmora-gold hover:text-velmora-cream"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8">
            <AccordionItem title="Description" defaultOpen>
              {product.longDescription}
            </AccordionItem>
            <AccordionItem title="Materials & Care">
              {product.material}. Hypoallergenic and nickel-conscious. {product.care}
            </AccordionItem>
            <AccordionItem title="Shipping & Returns">
              Free worldwide shipping on every order. Enjoy 30-day returns on unworn pieces in original packaging.
            </AccordionItem>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-blush px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Complete the ritual</p>
              <h2 className="font-serif text-4xl font-semibold text-velmora-ink md:text-5xl">You may also like</h2>
            </div>
            <Link to="/shop" className="text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink transition-colors hover:text-velmora-gold">
              View all pieces
            </Link>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetail

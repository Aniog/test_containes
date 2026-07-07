import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import ProductImage from '@/components/ProductImage.jsx'
import ProductCard from '@/components/shop/ProductCard.jsx'
import { formatPrice, products } from '@/data/products.js'

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const pageRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')

  const gallery = useMemo(() => [product.imageId, ...product.galleryIds], [product])
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const titleId = `detail-${product.id}-title`
  const descId = `detail-${product.id}-desc`

  useEffect(() => {
    setSelectedImage(0)
    setVariant('Gold')
    setQuantity(1)
  }, [product.id])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product.id, selectedImage])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-ink md:pt-28">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-8 md:px-8 md:py-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:grid lg:content-start lg:overflow-visible">
            {gallery.map((imageId, index) => (
              <button
                key={imageId}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`h-24 w-24 shrink-0 overflow-hidden border bg-velmora-pearl transition ${
                  selectedImage === index ? 'border-velmora-gold' : 'border-velmora-linen'
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <ProductImage
                  id={`${imageId}-thumb`}
                  query={`[${descId}] [${titleId}]`}
                  ratio="1x1"
                  width="220"
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden bg-velmora-pearl shadow-soft lg:order-2">
            <ProductImage
              id={`${gallery[selectedImage]}-large`}
              query={`[${descId}] [${titleId}]`}
              ratio="3x4"
              width="1000"
              alt={product.name}
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:pl-8">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-bronze transition hover:text-velmora-gold">
            Back to shop
          </Link>
          <h1 id={titleId} className="mt-5 font-serif text-4xl font-semibold uppercase leading-tight tracking-[0.18em] md:text-5xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center justify-between border-b border-velmora-linen pb-6">
            <p className="text-2xl font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-bronze">
              <span className="flex text-velmora-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </span>
              {product.rating} ({product.reviews})
            </div>
          </div>
          <p id={descId} className="mt-6 text-base leading-8 text-velmora-bronze">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink">Tone</p>
            <div className="mt-3 flex gap-3">
              {['Gold', 'Silver'].map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setVariant(tone)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                    variant === tone
                      ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory'
                      : 'border-velmora-linen text-velmora-ink hover:border-velmora-gold'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink">Quantity</p>
            <div className="inline-flex items-center rounded-full border border-velmora-linen bg-velmora-ivory">
              <button type="button" className="p-3 hover:text-velmora-gold" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm font-semibold">{quantity}</span>
              <button type="button" className="p-3 hover:text-velmora-gold" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button
            type="button"
            className="mt-8 w-full rounded-full bg-velmora-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink shadow-glow transition hover:bg-velmora-ink hover:text-velmora-ivory"
            onClick={() => onAddToCart(product, variant, quantity)}
          >
            Add to Cart
          </button>

          <div className="mt-8 border-t border-velmora-linen">
            {[
              ['Description', product.details],
              ['Materials & Care', product.care],
              ['Shipping & Returns', product.shipping],
            ].map(([title, content]) => (
              <div key={title} className="border-b border-velmora-linen">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink"
                  onClick={() => setOpenAccordion(openAccordion === title ? '' : title)}
                >
                  {title}
                  <ChevronDown className={`h-4 w-4 transition ${openAccordion === title ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === title && <p className="pb-5 text-sm leading-7 text-velmora-bronze">{content}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 md:px-8 md:pb-24">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-5xl leading-none">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.22em] text-velmora-bronze hover:text-velmora-gold sm:block">
            View all
          </Link>
        </div>
        <div className="grid gap-x-5 gap-y-11 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    </main>
  )
}

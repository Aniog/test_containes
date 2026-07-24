import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { getStrikinglyImageUrl } from '@/components/ImageLoadScope'
import ProductCard from '@/components/products/ProductCard'
import { formatPrice, getProductBySlug, products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const accordionItems = [
  {
    title: 'Description',
    copy: 'A considered demi-fine piece designed for daily wear, easy layering, and thoughtful gifting. Each silhouette is refined to feel elevated without being overly formal.',
  },
  {
    title: 'Materials & Care',
    copy: '18K gold plated finish over a durable base with skin-friendly detailing. Keep away from perfumes and lotions, store separately, and polish gently with a soft cloth.',
  },
  {
    title: 'Shipping & Returns',
    copy: 'Enjoy free worldwide shipping and easy 30-day returns. Gift-ready packaging is included with every Velmora order.',
  },
]

export default function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug) || products[0]
  const [activeImage, setActiveImage] = useState(0)
  const [tone, setTone] = useState('Gold tone')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const pageRef = useRef(null)

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  const galleryIds = [product.imgId, ...product.gallery]
  const currentGalleryId = galleryIds[activeImage]

  useEffect(() => {
    let cleanup = null
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [product.slug, activeImage])

  const addSelectedToCart = () => {
    onAddToCart(product, tone, quantity)
  }

  return (
    <main ref={pageRef} className="min-h-screen bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-[1500px] gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-24">
        <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {galleryIds.map((galleryId, index) => (
              <button
                key={galleryId}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`h-20 w-20 shrink-0 overflow-hidden border bg-velmora-porcelain transition focus:outline-none focus:ring-2 focus:ring-velmora-champagne ${activeImage === index ? 'border-velmora-champagne' : 'border-velmora-linen'}`}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`${galleryId}-thumb`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="220"
                  src={getStrikinglyImageUrl(`${galleryId}-thumb`)}
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden bg-velmora-porcelain lg:order-2">
            <img
              alt={`${product.name} gallery view`}
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id={`${currentGalleryId}-large`}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src={getStrikinglyImageUrl(`${currentGalleryId}-large`)}
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-cta text-velmora-bronze">{product.category}</p>
          <h1 id={product.titleId} className="mt-3 font-serif text-5xl uppercase leading-none tracking-product text-velmora-espresso sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center gap-4">
            <span className="font-serif text-4xl text-velmora-espresso">{formatPrice(product.price)}</span>
            <div className="flex items-center gap-1 text-sm text-velmora-mist" aria-label={`${product.rating} star rating`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-velmora-champagne text-velmora-champagne" aria-hidden="true" />
              ))}
              <span className="ml-2">{product.reviews} reviews</span>
            </div>
          </div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-mist">
            {product.detail}
          </p>

          <div className="mt-8 space-y-7 border-y border-velmora-linen py-7">
            <fieldset>
              <legend className="mb-3 text-xs font-bold uppercase tracking-cta text-velmora-espresso">Tone</legend>
              <div className="flex flex-wrap gap-3">
                {['Gold tone', 'Silver tone'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-5 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-velmora-champagne ${tone === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-linen text-velmora-espresso hover:border-velmora-champagne'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-cta text-velmora-espresso">Quantity</p>
              <div className="inline-flex items-center border border-velmora-linen bg-velmora-ivory">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="p-4 text-velmora-espresso transition hover:bg-velmora-linen/45 focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" aria-hidden="true" />
                </button>
                <span className="min-w-12 text-center text-sm font-bold text-velmora-espresso">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="p-4 text-velmora-espresso transition hover:bg-velmora-linen/45 focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={addSelectedToCart}
              className="w-full bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-cta text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </div>

          <div className="divide-y divide-velmora-linen">
            {accordionItems.map((item) => {
              const isOpen = openAccordion === item.title
              return (
                <div key={item.title}>
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? '' : item.title)}
                    className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-cta text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                    aria-expanded={isOpen}
                  >
                    {item.title}
                    <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="text-sm leading-7 text-velmora-mist">{item.copy}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] border-t border-velmora-linen px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-cta text-velmora-bronze">Complete the ritual</p>
            <h2 className="mt-2 font-serif text-5xl text-velmora-espresso">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-cta text-velmora-bronze transition hover:text-velmora-espresso sm:block">
            View all
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    </main>
  )
}

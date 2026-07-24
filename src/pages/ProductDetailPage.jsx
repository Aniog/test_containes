import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Minus, Plus, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/product/ProductCard.jsx'
import Accordion from '@/components/product/Accordion.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { products } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

const imageSrc = (imageId) => strkImgConfig[imageId]?.results?.[0]?.url

const ProductDetailPage = () => {
  const { productId } = useParams()
  const pageRef = useRef(null)
  const product = products.find((item) => item.id === productId) || products[0]
  const [selectedTone, setSelectedTone] = useState(product.tones[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const { addItem } = useCart()

  useEffect(() => {
    setSelectedTone(product.tones[0])
    setQuantity(1)
    setActiveImage(0)
  }, [product])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [product, activeImage])

  const gallery = useMemo(() => [
    {
      id: `${product.id}-main`,
      imgId: `pdp-${product.id}-main-0a1`,
      alt: `${product.name} primary view`,
      ratio: '3x4',
    },
    {
      id: `${product.id}-worn`,
      imgId: `pdp-${product.id}-worn-0b2`,
      alt: `${product.name} worn on model`,
      ratio: '3x4',
    },
    {
      id: `${product.id}-detail`,
      imgId: `pdp-${product.id}-detail-0c3`,
      alt: `${product.name} detail view`,
      ratio: '3x4',
    },
  ], [product])

  const titleId = `pdp-${product.id}-title`
  const descId = `pdp-${product.id}-desc`
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <main ref={pageRef} className="bg-velmora-porcelain pt-24 text-velmora-ink lg:pt-28">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-14 lg:px-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-nav text-velmora-clay transition hover:text-velmora-ink">
          <ArrowLeft className="h-4 w-4" /> Back to shop
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
              {gallery.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  className={`relative h-20 w-20 shrink-0 overflow-hidden border bg-velmora-sand transition ${activeImage === index ? 'border-velmora-champagne' : 'border-transparent hover:border-velmora-sand'}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show ${image.alt}`}
                >
                  <img
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`${image.imgId}-thumb`}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="240"
                    src={imageSrc(`${image.imgId}-thumb`)}
                  />
                </button>
              ))}
            </div>

            <div className="order-1 overflow-hidden bg-velmora-sand shadow-velmora lg:order-2">
              <div className="relative aspect-[3/4]">
                {gallery.map((image, index) => (
                  <img
                    key={image.id}
                    alt={image.alt}
                    className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${activeImage === index ? 'opacity-100' : 'opacity-0'}`}
                    data-strk-img-id={image.imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="1000"
                    src={imageSrc(image.imgId)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-velmora-ink lg:sticky lg:top-28 lg:self-start">
            <p className="text-[0.7rem] font-bold uppercase tracking-nav text-velmora-clay">{product.category} · {product.material}</p>
            <h1 id={titleId} className="mt-4 font-serif text-4xl uppercase leading-tight tracking-product text-velmora-ink sm:text-5xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center justify-between gap-4 border-y border-velmora-sand py-4">
              <p className="text-2xl font-semibold text-velmora-ink">${product.price}</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-velmora-clay">
                <Star className="h-4 w-4 fill-velmora-champagne text-velmora-champagne" />
                {product.rating} ({product.reviews})
              </div>
            </div>
            <p id={descId} className="mt-6 text-base leading-8 text-velmora-clay">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-nav text-velmora-ink">Tone</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.tones.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-nav transition ${selectedTone === tone ? 'border-velmora-ink bg-velmora-ink text-velmora-pearl' : 'border-velmora-sand bg-transparent text-velmora-ink hover:border-velmora-champagne'}`}
                    onClick={() => setSelectedTone(tone)}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-nav text-velmora-ink">Quantity</p>
              <div className="mt-3 inline-flex items-center border border-velmora-sand bg-velmora-pearl text-velmora-ink">
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center bg-transparent text-velmora-ink transition hover:text-velmora-champagne"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center text-sm font-bold">{quantity}</span>
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center bg-transparent text-velmora-ink transition hover:text-velmora-champagne"
                  onClick={() => setQuantity((current) => current + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              className="mt-8 w-full bg-velmora-champagne px-6 py-4 text-xs font-bold uppercase tracking-nav text-velmora-ink transition hover:bg-velmora-ink hover:text-velmora-pearl"
              onClick={() => addItem(product, { tone: selectedTone, quantity })}
            >
              Add to cart · ${product.price * quantity}
            </button>

            <div className="mt-8">
              <Accordion
                items={[
                  { title: 'Description', content: product.detail },
                  { title: 'Materials & Care', content: product.care },
                  { title: 'Shipping & Returns', content: product.shipping },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-sand px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-nav text-velmora-clay">Complete the edit</p>
              <h2 className="mt-3 font-serif text-4xl text-velmora-ink sm:text-5xl">You may also like</h2>
            </div>
            <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-nav text-velmora-clay transition hover:text-velmora-ink sm:block">View all</Link>
          </div>
          <div className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} compact />)}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetailPage

import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '../components/ProductCard.jsx'
import { StockImage } from '../components/StockImage.jsx'
import { getProductById, products } from '../data/products.js'
import strkImgConfig from '../strk-img-config.json'

const accordions = [
  { key: 'description', title: 'Description' },
  { key: 'care', title: 'Materials & Care' },
  { key: 'shipping', title: 'Shipping & Returns' },
]

export default function ProductDetailPage({ onAddToCart }) {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('main')
  const [openAccordion, setOpenAccordion] = useState('description')
  const detailRef = useRef(null)

  const relatedProducts = useMemo(() => products.filter((item) => item.id !== productId).slice(0, 4), [productId])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, detailRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeImage, productId])

  if (!product) return <Navigate to="/shop" replace />

  const gallery = [
    { key: 'main', label: 'Editorial', imageId: `${product.imageId}-detail-main`, query: `[${product.descId}] [${product.titleId}]` },
    { key: 'styled', label: 'Worn', imageId: `${product.hoverImageId}-detail-worn`, query: `[${product.titleId}] [${product.descId}]` },
    { key: 'close', label: 'Detail', imageId: `velmora-${product.id}-detail-close-21f9`, query: `[${product.titleId}] [${product.descId}]` },
  ]
  const selectedImage = gallery.find((image) => image.key === activeImage) || gallery[0]

  const addDetailToCart = () => {
    onAddToCart(product, { tone, quantity })
  }

  return (
    <main ref={detailRef} className="bg-velmora-ivory pt-28 text-velmora-obsidian">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[6rem_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image) => (
              <button
                key={image.key}
                type="button"
                onClick={() => setActiveImage(image.key)}
                className={`relative h-24 w-20 shrink-0 overflow-hidden rounded-2xl border bg-velmora-obsidian transition ${activeImage === image.key ? 'border-velmora-champagneDark ring-2 ring-velmora-champagne/30' : 'border-velmora-champagne/20'}`}
                aria-label={`Show ${image.label} image`}
              >
                <StockImage
                  id={`${image.imageId}-thumb`}
                  query={image.query}
                  ratio="4x3"
                  width="220"
                  alt={`${product.name} ${image.label}`}
                  className="h-full w-full object-cover opacity-85"
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden rounded-[2.5rem] bg-velmora-obsidian shadow-[0_30px_90px_rgba(32,25,19,0.14)] lg:order-2">
            <StockImage
              id={selectedImage.imageId}
              query={selectedImage.query}
              ratio="3x4"
              width="1100"
              alt={product.name}
              className="aspect-[4/5] h-full w-full object-cover opacity-90"
            />
          </div>
        </div>

        <div className="lg:pl-8">
          <div className="sticky top-28">
            <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe transition hover:text-velmora-champagneDark">Back to shop</Link>
            <h1 id={product.titleId} className="mt-5 font-serif text-5xl font-semibold uppercase leading-tight tracking-[0.15em] text-velmora-obsidian sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="font-serif text-4xl text-velmora-obsidian">${product.price}</p>
              <div className="flex items-center gap-2 text-sm text-velmora-ink/78">
                <span className="flex text-velmora-champagneDark" aria-label={`${product.rating} star rating`}>
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                </span>
                <span>{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>
            <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-ink/78">{product.description}</p>

            <div className="mt-8 border-y border-velmora-champagne/25 py-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe">Tone</p>
              <div className="flex flex-wrap gap-3">
                {['Gold', 'Silver'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] transition ${tone === option ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-ivory' : 'border-velmora-champagne/30 bg-velmora-pearl text-velmora-obsidian hover:border-velmora-champagneDark'}`}
                  >
                    {option} tone
                  </button>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe">Quantity</p>
                <div className="flex items-center rounded-full border border-velmora-champagne/30 bg-velmora-pearl text-velmora-obsidian">
                  <button type="button" className="p-3" onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Decrease quantity">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-9 text-center text-sm font-semibold">{quantity}</span>
                  <button type="button" className="p-3" onClick={() => setQuantity((current) => current + 1)} aria-label="Increase quantity">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <button type="button" onClick={addDetailToCart} className="mt-7 w-full rounded-full bg-velmora-champagne px-7 py-5 text-sm font-bold uppercase tracking-[0.24em] text-velmora-obsidian shadow-[0_18px_50px_rgba(208,168,104,0.22)] transition hover:-translate-y-0.5 hover:bg-velmora-champagneDark">
              Add to Cart
            </button>

            <div className="mt-8 divide-y divide-velmora-champagne/25 border-y border-velmora-champagne/25">
              {accordions.map((item) => (
                <section key={item.key}>
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(openAccordion === item.key ? '' : item.key)}
                    className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.24em] text-velmora-obsidian"
                    aria-expanded={openAccordion === item.key}
                  >
                    {item.title}
                    <ChevronDown className={`h-4 w-4 transition ${openAccordion === item.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === item.key && (
                    <p className="pb-5 text-sm leading-7 text-velmora-ink/78">
                      {item.key === 'description' ? product.details : item.key === 'care' ? product.care : product.shipping}
                    </p>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mb-8 border-t border-velmora-champagne/25 pt-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-champagneDark">Complete the ritual</p>
          <h2 className="mt-3 font-serif text-5xl text-velmora-obsidian">You may also like</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />)}
        </div>
      </section>
    </main>
  )
}

import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { getProductById, products } from '@/data/products.js'
import { useCart } from '@/context/CartContext.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import AccordionItem from '@/components/product/AccordionItem.jsx'
import strkImgConfig from '@/strk-img-config.json'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const [selectedImage, setSelectedImage] = useState('primary')
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const containerRef = useStrkImages([id, selectedImage])

  const gallery = useMemo(
    () => [
      { key: 'primary', label: 'Studio', imgId: `${product.imgId}-detail-main`, ratio: '3x4' },
      { key: 'worn', label: 'Worn', imgId: `${product.hoverImgId}-detail-worn`, ratio: '3x4' },
      { key: 'macro', label: 'Detail', imgId: `${product.imgId}-detail-macro`, ratio: '3x4' },
    ],
    [product],
  )

  const activeImage = gallery.find((image) => image.key === selectedImage) || gallery[0]
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-ink">
      <section className="px-5 pb-16 pt-6 md:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="grid gap-4 lg:grid-cols-[5rem_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
              {gallery.map((image) => (
                <button
                  key={image.key}
                  type="button"
                  onClick={() => setSelectedImage(image.key)}
                  className={`relative h-20 w-20 flex-none overflow-hidden border bg-velmora-cream transition ${selectedImage === image.key ? 'border-velmora-bronze' : 'border-velmora-champagne'}`}
                  aria-label={`Show ${image.label} image`}
                >
                  <img
                    alt={`${product.name} ${image.label}`}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`${image.imgId}-thumb`}
                    data-strk-img={`[${product.descId}-detail] [${product.titleId}-detail]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="220"
                    src={placeholder}
                  />
                </button>
              ))}
            </div>

            <div className="order-1 overflow-hidden bg-velmora-cream lg:order-2">
              <img
                alt={product.name}
                className="aspect-[3/4] w-full object-cover"
                data-strk-img-id={activeImage.imgId}
                data-strk-img={`[${product.descId}-detail] [${product.titleId}-detail]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1000"
                src={placeholder}
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:h-fit">
            <Link to="/shop" className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-bronze transition hover:text-velmora-forest">Back to shop</Link>
            <p className="mt-8 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-cocoa">{product.category}</p>
            <h1 id={`${product.titleId}-detail`} className="mt-3 font-serif text-4xl uppercase leading-tight tracking-[0.16em] text-velmora-ink md:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-4">
              <p className="font-sans text-xl font-semibold text-velmora-ink">${product.price}</p>
              <div className="flex items-center gap-1 text-velmora-bronze" aria-label={`${product.rating} stars`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.5} />
                ))}
                <span className="ml-2 font-sans text-sm text-velmora-cocoa">{product.reviews} reviews</span>
              </div>
            </div>
            <p id={`${product.descId}-detail`} className="mt-6 max-w-xl font-sans text-base leading-8 text-velmora-cocoa">{product.detail}</p>

            <div className="mt-8 border-y border-velmora-champagne/80 py-6">
              <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-cocoa">Tone</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] transition ${tone === option ? 'border-velmora-bronze bg-velmora-bronze text-velmora-cream' : 'border-velmora-champagne bg-velmora-cream text-velmora-ink hover:border-velmora-bronze'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-cocoa">Quantity</p>
                <div className="inline-flex items-center border border-velmora-champagne bg-velmora-cream">
                  <button type="button" className="p-3 text-velmora-ink transition hover:text-velmora-bronze" onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Decrease quantity">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-10 text-center font-sans text-sm text-velmora-ink">{quantity}</span>
                  <button type="button" className="p-3 text-velmora-ink transition hover:text-velmora-bronze" onClick={() => setQuantity((current) => current + 1)} aria-label="Increase quantity">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addToCart(product, { tone, quantity })}
              className="mt-6 w-full bg-velmora-bronze px-8 py-5 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-cream transition hover:bg-velmora-forest"
            >
              Add to Cart
            </button>

            <div className="mt-8">
              <AccordionItem title="Description" defaultOpen>{product.detail}</AccordionItem>
              <AccordionItem title="Materials & Care">{product.care}</AccordionItem>
              <AccordionItem title="Shipping & Returns">Free worldwide shipping on every order. If it is not the perfect fit, return unworn pieces within 30 days in original packaging.</AccordionItem>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-champagne/80 bg-velmora-cream px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-bronze">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-4xl text-velmora-ink md:text-6xl">You may also like</h2>
            </div>
            <Link to="/shop" className="hidden border-b border-velmora-bronze pb-1 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-bronze md:inline-flex">Shop all</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} compact />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

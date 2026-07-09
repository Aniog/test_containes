import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { placeholderSvg, products } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import ProductCard from '@/components/product/ProductCard'

const accordionContent = {
  Description: 'Each Velmora piece is designed to add warmth and polish without feeling precious. Wear alone for a clean statement or layer into your existing jewelry wardrobe.',
  'Materials & Care': 'Demi-fine finishes are crafted for everyday wear. Remove before swimming, showering, or applying fragrance. Store in the included pouch and polish gently with a dry cloth.',
  'Shipping & Returns': 'Enjoy free worldwide shipping and easy 30-day returns on unworn items in original packaging. Gift orders arrive in our signature Velmora box.',
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug) || products[0]
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const { addToCart } = useCart()
  const detailRef = useRef(null)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('primary')
  const [openAccordion, setOpenAccordion] = useState('Description')

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, detailRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [activeImage, product.id])

  const activeImageConfig = useMemo(() => {
    if (activeImage === 'model') {
      return {
        id: `detail-model-${product.hoverImageId}`,
        query: `[${product.descId}] [${product.titleId}]`,
        alt: `${product.name} worn on model`,
      }
    }

    return {
      id: `detail-primary-${product.imageId}`,
      query: `[${product.descId}] [${product.titleId}]`,
      alt: product.name,
    }
  }, [activeImage, product])

  return (
    <main className="bg-velmora-ivory pb-20 pt-28 text-velmora-espresso">
      <section ref={detailRef} className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-14">
        <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
          <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
            {[
              { key: 'primary', id: product.imageId, query: `[${product.descId}] [${product.titleId}]`, alt: product.name },
              { key: 'model', id: product.hoverImageId, query: `[${product.descId}] [${product.titleId}]`, alt: `${product.name} on model` },
            ].map((image) => (
              <button
                key={image.key}
                type="button"
                onClick={() => setActiveImage(image.key)}
                className={`aspect-square overflow-hidden border bg-velmora-champagne transition ${activeImage === image.key ? 'border-velmora-gold' : 'border-velmora-espresso/10'}`}
                aria-label={`View ${image.alt}`}
              >
                <img
                  alt={image.alt}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`thumb-${image.id}`}
                  data-strk-img={image.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="220"
                  src={placeholderSvg}
                />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-champagne lg:order-2">
            <img
              key={activeImageConfig.id}
              alt={activeImageConfig.alt}
              className="h-full w-full object-cover"
              data-strk-img-id={activeImageConfig.id}
              data-strk-img={activeImageConfig.query}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1100"
              src={placeholderSvg}
            />
          </div>
        </div>

        <div className="lg:pl-8">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-velmora-gold">{product.category}</p>
          <h1 id={product.titleId} className="mt-4 font-serif text-5xl uppercase leading-tight tracking-[0.16em] text-velmora-espresso sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-5">
            <p className="text-2xl font-bold text-velmora-espresso">${product.price}</p>
            <div className="flex items-center gap-1 text-velmora-gold">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm font-semibold text-velmora-taupe">{product.reviews} reviews</span>
            </div>
          </div>
          <p id={product.descId} className="mt-6 max-w-xl text-base leading-8 text-velmora-taupe">{product.description}</p>

          <div className="mt-8 border-y border-velmora-espresso/10 py-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe">Tone</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setVariant(tone)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${variant === tone ? 'border-velmora-gold bg-velmora-gold text-velmora-espresso' : 'border-velmora-espresso/15 text-velmora-espresso hover:border-velmora-gold'}`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <div className="inline-flex h-14 w-36 items-center justify-between border border-velmora-espresso/15 text-velmora-espresso">
              <button type="button" className="px-4 py-4 transition hover:text-velmora-gold" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-semibold">{quantity}</span>
              <button type="button" className="px-4 py-4 transition hover:text-velmora-gold" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => addToCart(product, quantity, variant)}
              className="h-14 flex-1 bg-velmora-gold px-7 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory"
            >
              Add to cart
            </button>
          </div>

          <div className="mt-9 divide-y divide-velmora-espresso/10 border-y border-velmora-espresso/10">
            {Object.entries(accordionContent).map(([title, content]) => (
              <div key={title}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-5 text-left font-serif text-2xl text-velmora-espresso"
                  onClick={() => setOpenAccordion(openAccordion === title ? '' : title)}
                >
                  {title}
                  <ChevronDown className={`h-5 w-5 transition ${openAccordion === title ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === title && <p className="pb-5 text-sm leading-7 text-velmora-taupe">{title === 'Description' ? product.details : content}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between border-b border-velmora-espresso/10 pb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-velmora-gold">Complete the stack</p>
            <h2 className="mt-3 font-serif text-4xl font-medium">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden border-b border-velmora-gold pb-1 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:text-velmora-gold sm:block">
            View all
          </Link>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} compact />
          ))}
        </div>
      </section>
    </main>
  )
}

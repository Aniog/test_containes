import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json?hero-gold-v2'
import ProductCard from '../components/product/ProductCard.jsx'
import { products } from '../data/products.js'
import { getStrkImageUrl } from '../lib/strk-images.js'

export default function ProductDetail({ onAddToCart }) {
  const containerRef = useRef(null)
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug) || products[0]
  const [activeImage, setActiveImage] = useState(0)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openPanel, setOpenPanel] = useState('Description')

  const gallery = useMemo(() => [product.imageId, product.hoverImageId, ...product.galleryIds], [product])
  const activeMainId = `detail-main-${product.id}-${activeImage}-${gallery[activeImage]}`
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  useEffect(() => {
    setActiveImage(0)
    setVariant('Gold')
    setQuantity(1)
  }, [product.id])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product.id, activeImage])

  const addSelected = () => onAddToCart(product, quantity, variant)

  return (
    <main ref={containerRef} className="bg-velmora-cream pt-24 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-16">
        <div className="grid gap-4 md:grid-cols-[92px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
            {gallery.slice(0, 4).map((imageId, index) => {
              const thumbId = `thumb-${product.id}-${index}-${imageId}`

              return (
                <button
                  key={`${imageId}-${index}`}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`View ${product.name} image ${index + 1}`}
                  className={`aspect-square min-w-20 overflow-hidden border bg-velmora-parchment transition ${activeImage === index ? 'border-velmora-gold' : 'border-velmora-border hover:border-velmora-gold'}`}
                >
                  <img
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                    data-strk-img-id={thumbId}
                    data-strk-img={`[detail-desc-${product.id}] [detail-title-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="220"
                    src={getStrkImageUrl(thumbId)}
                  />
                </button>
              )
            })}
          </div>
          <div className="order-1 overflow-hidden bg-velmora-parchment shadow-softGold md:order-2">
            <img
              alt={`${product.name} gallery image`}
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id={activeMainId}
              data-strk-img={`[detail-desc-${product.id}] [detail-title-${product.id}] [detail-material-${product.id}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              src={getStrkImageUrl(activeMainId)}
            />
          </div>
        </div>

        <div className="text-velmora-ink md:sticky md:top-28 md:h-fit">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-luxury text-velmora-clay transition hover:text-velmora-gold">
            Back to shop
          </Link>
          <p id={`detail-material-${product.id}`} className="mt-8 text-xs font-bold uppercase tracking-luxury text-velmora-gold">
            {product.material}
          </p>
          <h1 id={`detail-title-${product.id}`} className="mt-3 font-serifDisplay text-4xl uppercase leading-tight tracking-luxury text-velmora-ink md:text-5xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center gap-4">
            <p className="font-serifDisplay text-3xl text-velmora-ink">${product.price}</p>
            <div className="flex items-center gap-1 text-velmora-gold">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm text-velmora-clay">{product.rating} ({product.reviews})</span>
            </div>
          </div>
          <p id={`detail-desc-${product.id}`} className="mt-6 text-base leading-8 text-velmora-clay">
            {product.shortDescription}
          </p>

          <div className="mt-8 border-y border-velmora-border py-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-clay">Tone</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setVariant(tone)}
                  className={`rounded-full border px-6 py-3 text-sm font-semibold transition ${variant === tone ? 'border-velmora-gold bg-velmora-gold text-velmora-ink' : 'border-velmora-border bg-velmora-linen text-velmora-ink hover:border-velmora-gold'}`}
                >
                  {tone}
                </button>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-4">
              <p className="text-xs font-bold uppercase tracking-luxury text-velmora-clay">Quantity</p>
              <div className="flex items-center rounded-full border border-velmora-border bg-velmora-linen text-velmora-ink">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-3 text-velmora-ink transition hover:text-velmora-gold" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center font-semibold">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-3 text-velmora-ink transition hover:text-velmora-gold" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={addSelected}
            className="mt-7 w-full rounded-full bg-velmora-gold px-8 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-ink shadow-softGold transition hover:bg-velmora-brass"
          >
            Add to Cart
          </button>

          <div className="mt-8 divide-y divide-velmora-border border-y border-velmora-border">
            <Accordion title="Description" openPanel={openPanel} setOpenPanel={setOpenPanel}>
              {product.longDescription}
            </Accordion>
            <Accordion title="Materials & Care" openPanel={openPanel} setOpenPanel={setOpenPanel}>
              {product.care}
            </Accordion>
            <Accordion title="Shipping & Returns" openPanel={openPanel} setOpenPanel={setOpenPanel}>
              Free worldwide shipping on every order. Returns are accepted within 30 days when pieces are unworn and in original packaging.
            </Accordion>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-border px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-luxury text-velmora-gold">You may also like</p>
              <h2 className="mt-3 font-serifDisplay text-4xl text-velmora-ink md:text-5xl">Complete the ritual</h2>
            </div>
            <Link to="/shop" className="text-xs font-bold uppercase tracking-luxury text-velmora-ink transition hover:text-velmora-gold">View all</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} context={`related-${product.id}`} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function Accordion({ title, openPanel, setOpenPanel, children }) {
  const isOpen = openPanel === title
  return (
    <div className="text-velmora-ink">
      <button
        type="button"
        className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-luxury text-velmora-ink"
        onClick={() => setOpenPanel(isOpen ? '' : title)}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180 text-velmora-gold' : 'text-velmora-clay'}`} />
      </button>
      <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-7 text-velmora-clay">{children}</p>
        </div>
      </div>
    </div>
  )
}

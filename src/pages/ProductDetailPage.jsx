import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '../components/ProductCard'
import { formatPrice, products } from '../data/products'
import { resolveConfiguredImage } from '../lib/resolve-image'
import strkImgConfig from '../strk-img-config.json'

const fallbackImage =
  'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_1200/unsplashcom/photo-1605100804763-247f67b3557e'

function AccordionItem({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-sand">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold uppercase tracking-[0.22em] text-velmora-ink"
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden text-sm leading-7 text-velmora-espresso/80">{children}</div>
      </div>
    </div>
  )
}

export default function ProductDetailPage({ product, onBack, onAddToCart, onOpenProduct }) {
  const [activeImage, setActiveImage] = useState(0)
  const [selectedTone, setSelectedTone] = useState(product.tone[0])
  const [quantity, setQuantity] = useState(1)
  const containerRef = useRef(null)
  const primaryImage = resolveConfiguredImage(strkImgConfig, product.imgId) || fallbackImage
  const hoverImage = resolveConfiguredImage(strkImgConfig, product.hoverImgId, [primaryImage]) || primaryImage
  const styledImage = resolveConfiguredImage(strkImgConfig, product.imgId, [primaryImage, hoverImage]) || hoverImage
  const gallery = [
    { label: 'hero view', url: primaryImage },
    { label: 'worn detail', url: hoverImage },
    { label: 'styled flatlay', url: styledImage },
  ]

  useEffect(() => {
    setActiveImage(0)
    setSelectedTone(product.tone[0])
    setQuantity(1)
  }, [product.id, product.tone])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product.id])

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    for (let index = 0; index < quantity; index += 1) {
      onAddToCart(product, selectedTone)
    }
  }

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-24 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <button
          type="button"
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-bronze transition hover:text-velmora-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to shop
        </button>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="grid gap-4 md:grid-cols-[5rem_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
              {gallery.map((image, index) => (
                <button
                  key={image.label}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square w-20 flex-none overflow-hidden border bg-velmora-sand transition md:w-full ${
                    activeImage === index ? 'border-velmora-champagne' : 'border-velmora-sand hover:border-velmora-bronze'
                  }`}
                  aria-label={`Show ${image.label}`}
                >
                  <img
                    alt={`${product.name} ${image.label}`}
                    className="h-full w-full object-cover"
                    src={image.url}
                  />
                </button>
              ))}
            </div>
            <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-sand md:order-2">
              <img
                key={`${product.id}-${activeImage}`}
                alt={`${product.name} ${gallery[activeImage]?.label || 'detail view'}`}
                className="h-full w-full object-cover animate-[fadeUp_500ms_ease-out]"
                src={gallery[activeImage]?.url || fallbackImage}
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-bronze">{product.category}</p>
            <h1 id="product-detail-heading" className="mt-4 font-serif text-4xl uppercase leading-tight tracking-[0.18em] text-velmora-ink sm:text-5xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="font-serif text-3xl text-velmora-ink">{formatPrice(product.price)}</p>
              <span className="flex items-center gap-1 text-sm text-velmora-espresso">
                <Star className="h-4 w-4 fill-velmora-champagne text-velmora-champagne" />
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p id="product-detail-description" className="mt-6 text-base leading-8 text-velmora-espresso/80">
              {product.shortDescription}
            </p>
            <span id="product-detail-title" className="sr-only">{product.name}</span>

            <div className="mt-8 border-y border-velmora-sand py-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-bronze">Tone</p>
              <div className="flex flex-wrap gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                      selectedTone === tone
                        ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory'
                        : 'border-velmora-sand bg-velmora-pearl text-velmora-ink hover:border-velmora-champagne'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <div className="inline-flex w-fit items-center rounded-full border border-velmora-sand bg-velmora-pearl text-velmora-ink">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="p-4 transition hover:text-velmora-bronze"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center font-semibold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                  className="p-4 transition hover:text-velmora-bronze"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="min-h-14 flex-1 rounded-full bg-velmora-champagne px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-velmora-ink shadow-glow transition hover:bg-velmora-ink hover:text-velmora-ivory"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8">
              <AccordionItem title="Description" defaultOpen>
                {product.description}
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                {product.material}. {product.care}
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                Free worldwide shipping on every Velmora order, with easy 30-day returns in original condition.
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mb-8 border-b border-velmora-sand pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-bronze">Complete the edit</p>
          <h2 className="mt-3 font-serif text-4xl text-velmora-ink">You may also like</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} onAdd={onAddToCart} onOpen={onOpenProduct} />
          ))}
        </div>
      </section>
    </main>
  )
}

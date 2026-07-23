import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import AccordionItem from '@/components/AccordionItem'
import ProductCard from '@/components/ProductCard'
import RatingStars from '@/components/RatingStars'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ProductDetail = () => {
  const { slug } = useParams()
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const product = products.find((item) => item.slug === slug)

  const [selectedTone, setSelectedTone] = useState(product?.tones[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('primary')

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product?.id).slice(0, 3),
    [product?.id],
  )

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [product?.id, activeImage])

  useEffect(() => {
    if (!product) {
      return
    }

    document.title = `${product.shortName} | Velmora Fine Jewelry`
    setSelectedTone(product.tones[0])
    setQuantity(1)
    setActiveImage('primary')
  }, [product])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const gallery = [
    {
      key: 'primary',
      label: 'Studio front',
      prompt: product.imagePrompts.primary,
      ratio: '4x3',
      width: '1200',
    },
    {
      key: 'secondary',
      label: 'Worn view',
      prompt: product.imagePrompts.secondary,
      ratio: '4x3',
      width: '1200',
    },
    {
      key: 'detail',
      label: 'Detail close-up',
      prompt: product.imagePrompts.detail,
      ratio: '4x3',
      width: '1200',
    },
  ]

  const activeGalleryItem = gallery.find((item) => item.key === activeImage) ?? gallery[0]

  return (
    <div ref={containerRef} className="section-frame py-12 sm:py-16">
      <div className="mb-8 text-sm text-taupe">
        <Link to="/shop" className="transition duration-300 hover:text-gold">
          Shop
        </Link>{' '}
        / <span className="text-ink">{product.shortName}</span>
      </div>

      <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-4 md:grid-cols-[110px_minmax(0,1fr)]">
          <div className="order-2 flex gap-3 md:order-1 md:flex-col">
            {gallery.map((item) => {
              const active = item.key === activeImage

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveImage(item.key)}
                  className={`overflow-hidden rounded-2xl border bg-sand ${
                    active ? 'border-gold' : 'border-line'
                  }`}
                >
                  <img
                    alt={item.label}
                    className="aspect-square h-full w-full object-cover"
                    data-strk-img-id={`${product.id}-${item.key}-thumb-m12`}
                    data-strk-img={`[${product.id}-description] [${product.id}-name]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              )
            })}
          </div>

          <div className="order-1 overflow-hidden rounded-3xl border border-line bg-sand md:order-2">
            <img
              alt={product.shortName}
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id={`${product.id}-${activeGalleryItem.key}-hero-x11`}
              data-strk-img={`[${product.id}-${activeGalleryItem.key}-copy] [${product.id}-name] [${product.id}-description]`}
              data-strk-img-ratio={activeGalleryItem.ratio}
              data-strk-img-width={activeGalleryItem.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <p id={`${product.id}-${activeGalleryItem.key}-copy`} hidden aria-hidden="true">
              {activeGalleryItem.prompt}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-button text-taupe">{product.collection}</p>
          <h1 id={`${product.id}-name`} className="mt-4 font-display text-5xl uppercase tracking-product leading-none text-obsidian sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-2xl text-ink">{formatPrice(product.price)}</p>
            <RatingStars rating={product.rating} reviews={product.reviews} />
          </div>
          <p id={`${product.id}-description`} className="mt-6 max-w-xl text-base leading-8 text-taupe sm:text-lg">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-button text-taupe">Tone</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {product.tones.map((tone) => {
                const active = tone === selectedTone
                return (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-3 text-xs uppercase tracking-button transition duration-300 ${
                      active
                        ? 'border-gold bg-gold text-parchment'
                        : 'border-line bg-parchment text-ink hover:border-gold hover:text-gold'
                    }`}
                  >
                    {tone}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="inline-flex items-center justify-between rounded-full border border-line bg-parchment px-4 py-3 sm:w-40">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="bg-transparent p-0 text-ink"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-sm text-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="bg-transparent p-0 text-ink"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => addItem(product, quantity, selectedTone)}
              className="premium-button w-full sm:flex-1"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-10 border-t border-line">
            <AccordionItem title="Description" content={product.details} defaultOpen />
            <AccordionItem title="Materials & Care" content={product.materials} />
            <AccordionItem title="Shipping & Returns" content={product.shipping} />
          </div>
        </div>
      </section>

      <section className="pt-20 sm:pt-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">You may also like</p>
            <h2 className="mt-3 font-display text-4xl text-obsidian sm:text-5xl">More from the Velmora edit</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetail

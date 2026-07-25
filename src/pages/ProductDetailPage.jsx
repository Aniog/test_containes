import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import { formatPrice, getProductById, products } from '@/data/products.js'
import { getStrkImageUrl } from '@/lib/strk-image-utils.js'
import strkImgConfig from '@/strk-img-config.json'

const variants = ['Gold Tone', 'Silver Tone']

export default function ProductDetailPage({ productId, onAddToCart, onViewProduct }) {
  const product = getProductById(productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState(variants[0])
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [product.id, selectedImage])

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  const titleId = `detail-${product.id}-title`
  const descId = `detail-${product.id}-desc`
  const categoryId = `detail-${product.id}-category`
  const selectedMainImageId = `detail-main-${product.id}-${selectedImage}-9e21`
  const galleryLabels = [
    `${product.description} warm gold jewelry product editorial`,
    `${product.name} worn by model close up`,
    `${product.name} gift packaging detail`,
  ]

  const handleAdd = () => {
    onAddToCart(product, quantity)
  }

  const accordions = [
    {
      title: 'Description',
      body: product.detail,
    },
    {
      title: 'Materials & Care',
      body: `${product.material}. Hypoallergenic finish designed for sensitive skin. ${product.care}`,
    },
    {
      title: 'Shipping & Returns',
      body: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition, with gift-ready packaging included on all Velmora pieces.',
    },
  ]

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-8 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:grid lg:gap-4 lg:overflow-visible">
            {galleryLabels.map((label, index) => {
              const imageId = `detail-thumb-${product.id}-${index}-c8d1`

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`min-w-20 overflow-hidden border bg-velmora-champagne transition ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-velmora-champagne'
                  }`}
                  aria-label={`Show ${product.name} image ${index + 1}`}
                >
                  <img
                    alt={label}
                    className="aspect-square w-full object-cover"
                    data-strk-img-id={imageId}
                    data-strk-img={`[detail-gallery-${product.id}-${index}] [${titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="220"
                    src={getStrkImageUrl(imageId)}
                  />
                </button>
              )
            })}
          </div>

          <div className="order-1 overflow-hidden bg-velmora-champagne shadow-editorial lg:order-2">
            <div className="sr-only">
              {galleryLabels.map((label, index) => (
                <p key={label} id={`detail-gallery-${product.id}-${index}`}>
                  {label}
                </p>
              ))}
            </div>
            <img
              alt={`${product.name} gallery view`}
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id={selectedMainImageId}
              data-strk-img={`[detail-gallery-${product.id}-${selectedImage}] [${descId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              src={getStrkImageUrl(selectedMainImageId)}
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p id={categoryId} className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">{product.category}</p>
          <h1 id={titleId} className="mt-4 font-serifDisplay text-5xl font-semibold uppercase leading-tight tracking-[0.18em] text-velmora-espresso md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="font-serifDisplay text-3xl font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-ink/75">
              <span className="flex text-velmora-gold" aria-label={`${product.rating} star rating`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </span>
              {product.rating} ({product.reviews} reviews)
            </div>
          </div>
          <p id={descId} className="mt-6 text-base leading-8 text-velmora-ink/75">
            {product.description}
          </p>

          <div className="mt-8 border-y border-velmora-champagne py-7">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-espresso">Tone</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {variants.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setVariant(item)}
                  className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] transition ${
                    variant === item
                      ? 'border-velmora-gold bg-velmora-gold text-velmora-pearl'
                      : 'border-velmora-champagne bg-velmora-pearl text-velmora-espresso hover:border-velmora-gold'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <div className="inline-flex w-full items-center justify-between border border-velmora-champagne bg-velmora-pearl text-velmora-espresso sm:w-36">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="p-4 transition hover:bg-velmora-champagne"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-sm font-bold">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="p-4 transition hover:bg-velmora-champagne"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="min-h-14 flex-1 bg-velmora-gold px-8 text-sm font-bold uppercase tracking-[0.24em] text-velmora-pearl transition duration-300 hover:bg-velmora-bronze"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 divide-y divide-velmora-champagne border-y border-velmora-champagne">
            {accordions.map((item) => {
              const open = openAccordion === item.title
              return (
                <div key={item.title}>
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(open ? '' : item.title)}
                    className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso"
                  >
                    {item.title}
                    <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
                  </button>
                  {open && <p className="pb-6 text-sm leading-7 text-velmora-ink/75">{item.body}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="mb-10 flex items-end justify-between gap-5 border-t border-velmora-champagne pt-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Complete the ritual</p>
            <h2 className="mt-3 font-serifDisplay text-4xl font-medium text-velmora-espresso md:text-5xl">You may also like</h2>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((related) => (
            <ProductCard
              key={related.id}
              product={related}
              onAddToCart={onAddToCart}
              onViewProduct={onViewProduct}
              compact
            />
          ))}
        </div>
      </section>
    </main>
  )
}

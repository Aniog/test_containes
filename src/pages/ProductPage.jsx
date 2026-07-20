import { ImageHelper } from '@strikingly/sdk'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { formatPrice, getProductBySlug, products } from '@/data/products'
import { getStrkImageSrc } from '@/data/strkImages'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductPage({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const pageRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [product.slug, selectedImage, tone])

  const titleId = `pdp-${product.slug}-title`
  const descId = `pdp-${product.slug}-desc`
  const categoryId = `pdp-${product.slug}-category`
  const galleryImages = [0, 1, 2, 3].map((index) => ({
    index,
    thumbId: `pdp-${product.slug}-thumb-${index}-e02b1`,
    mainId: `pdp-${product.slug}-main-${index}-ad741`,
    query: [
      `[${descId}] [${titleId}] [${categoryId}]`,
      `[${categoryId}] [${titleId}] [${descId}]`,
      `[${titleId}] [${descId}]`,
      `[${descId}] [${categoryId}]`,
    ][index],
  }))

  const selectedGalleryImage = galleryImages[selectedImage]

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.care },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-espresso">
      <section className="velmora-product-section mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="velmora-product-gallery grid gap-4">
          <div className="velmora-product-thumbnails order-2 flex gap-3 overflow-x-auto lg:order-1 lg:space-y-3">
            {galleryImages.map((image) => (
              <button
                key={image.index}
                type="button"
                onClick={() => setSelectedImage(image.index)}
                className={`h-20 w-20 shrink-0 overflow-hidden border bg-velmora-champagne transition lg:h-24 lg:w-full ${
                  selectedImage === image.index ? 'border-velmora-gold' : 'border-velmora-mink hover:border-velmora-gold'
                }`}
                aria-label={`Show image ${image.index + 1}`}
              >
                <img
                  alt={`${product.name} thumbnail ${image.index + 1}`}
                  className="h-full w-full object-cover"
                  data-strk-img-id={image.thumbId}
                  data-strk-img={image.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="220"
                  src={getStrkImageSrc(image.thumbId)}
                />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-portrait overflow-hidden bg-velmora-champagne lg:order-2">
            <img
              alt={product.name}
              className="h-full w-full object-cover"
              data-strk-img-id={selectedGalleryImage.mainId}
              data-strk-img={selectedGalleryImage.query}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1100"
              src={getStrkImageSrc(selectedGalleryImage.mainId)}
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p id={categoryId} className="text-xs font-extrabold uppercase tracking-logo text-velmora-gold">
            {product.category} · {product.material}
          </p>
          <h1 id={titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-none tracking-editorial text-velmora-espresso sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center gap-4">
            <p className="text-2xl font-bold text-velmora-espresso">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-1 text-velmora-gold" aria-label={`${product.rating} star rating`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm font-semibold text-velmora-truffle">{product.rating} ({product.reviews})</span>
            </div>
          </div>
          <p id={descId} className="mt-6 text-base leading-8 text-velmora-truffle">
            {product.shortDescription}
          </p>

          <div className="mt-8 border-y border-velmora-mink/70 py-6">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-luxury text-velmora-espresso">Tone</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setTone(option)}
                  className={`rounded-full border px-5 py-2 text-sm font-bold transition ${
                    tone === option
                      ? 'border-velmora-gold bg-velmora-gold text-velmora-espresso'
                      : 'border-velmora-mink bg-velmora-porcelain text-velmora-truffle hover:border-velmora-gold hover:text-velmora-espresso'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-luxury text-velmora-espresso">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-velmora-mink bg-velmora-porcelain text-velmora-espresso">
                <button type="button" className="p-3" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center text-sm font-bold">{quantity}</span>
                <button type="button" className="p-3" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-full bg-velmora-gold px-7 py-4 text-xs font-extrabold uppercase tracking-atelier text-velmora-espresso shadow-whisper transition hover:bg-velmora-espresso hover:text-velmora-ivory"
            onClick={() => onAddToCart(product, quantity, tone)}
          >
            Add to Cart
          </button>

          <div className="mt-8 divide-y divide-velmora-mink/70 border-y border-velmora-mink/70">
            {accordions.map((item) => (
              <div key={item.title}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-5 text-left text-xs font-extrabold uppercase tracking-luxury text-velmora-espresso"
                  onClick={() => setOpenAccordion((current) => (current === item.title ? '' : item.title))}
                >
                  {item.title}
                  <ChevronDown className={`h-4 w-4 transition ${openAccordion === item.title ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === item.title && <p className="pb-5 text-sm leading-7 text-velmora-truffle">{item.content}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-velmora-mink/70 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-9 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-logo text-velmora-gold">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-espresso">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-extrabold uppercase tracking-luxury text-velmora-espresso hover:text-velmora-gold sm:block">
            Shop all
          </Link>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} imagePrefix="related" />
          ))}
        </div>
      </section>
    </main>
  )
}

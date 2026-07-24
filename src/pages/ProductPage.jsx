import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import strkImgConfig from '@/strk-img-config.json'

function ProductPage({ onAddToCart }) {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const pageRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return products.filter((item) => item.id !== product.id).slice(0, 4)
  }, [product])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [slug, selectedImage])

  if (!product) return <Navigate to="/shop" replace />

  const gallery = [
    `${product.description} ${product.imageTheme}`,
    `${product.name} worn on model warm editorial close up`,
    `${product.name} jewelry detail on neutral velvet surface luxury product photography`,
  ]
  const selectedCaptionId = `pdp-${product.slug}-gallery-caption-${selectedImage}`

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((caption, index) => {
              const thumbCaptionId = `pdp-${product.slug}-thumb-caption-${index}`
              return (
                <button
                  key={caption}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`h-24 w-20 flex-none overflow-hidden border bg-velmora-sand transition focus:outline-none focus:ring-2 focus:ring-velmora-gold ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-velmora-sand'
                  }`}
                  aria-label={`View ${product.name} image ${index + 1}`}
                >
                  <img
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`pdp-${product.slug}-thumb-${index}-31df`}
                    data-strk-img={`[${thumbCaptionId}] [pdp-${product.slug}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="240"
                  />
                  <span id={thumbCaptionId} className="sr-only">{caption}</span>
                </button>
              )
            })}
          </div>
          <div className="order-1 overflow-hidden bg-velmora-sand shadow-velvet lg:order-2">
            <p id={selectedCaptionId} className="sr-only">{gallery[selectedImage]}</p>
            <img
              alt={product.name}
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id={`pdp-${product.slug}-main-${selectedImage}-45bc`}
              data-strk-img={`[${selectedCaptionId}] [pdp-${product.slug}-description] [pdp-${product.slug}-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1100"
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <Link to="/shop" className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold transition hover:text-velmora-ink">
            Back to shop
          </Link>
          <p className="mt-7 font-sans text-xs uppercase tracking-[0.35em] text-velmora-taupe">{product.category}</p>
          <h1 id={`pdp-${product.slug}-title`} className="mt-3 font-serif text-5xl uppercase leading-none tracking-[0.18em] text-velmora-ink sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center justify-between border-b border-velmora-sand pb-6">
            <p className="font-sans text-2xl font-semibold text-velmora-ink">${product.price}</p>
            <div className="flex items-center gap-2 text-velmora-ink">
              <div className="flex text-velmora-champagne" aria-label={`${product.rating} star rating`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-taupe">{product.rating} · {product.reviews}</span>
            </div>
          </div>

          <p id={`pdp-${product.slug}-description`} className="mt-6 font-sans text-base leading-8 text-velmora-taupe">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.25em] text-velmora-ink">Tone</p>
            <div className="flex flex-wrap gap-3">
              {product.variants.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setVariant(option)}
                  className={`rounded-full border px-5 py-2 font-sans text-xs font-bold uppercase tracking-[0.22em] transition focus:outline-none focus:ring-2 focus:ring-velmora-gold ${
                    variant === option
                      ? 'border-velmora-champagne bg-velmora-champagne text-velmora-ink'
                      : 'border-velmora-sand bg-velmora-porcelain text-velmora-taupe hover:border-velmora-gold hover:text-velmora-ink'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-[150px_1fr]">
            <div className="inline-flex items-center justify-between border border-velmora-sand bg-velmora-porcelain text-velmora-ink">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="p-4 transition hover:bg-velmora-sand/50 focus:outline-none focus:ring-2 focus:ring-velmora-gold"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-sans text-sm font-bold">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="p-4 transition hover:bg-velmora-sand/50 focus:outline-none focus:ring-2 focus:ring-velmora-gold"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(product, { variant, quantity })}
              className="bg-velmora-champagne px-7 py-4 font-sans text-xs font-bold uppercase tracking-[0.28em] text-velmora-ink transition hover:bg-velmora-gold hover:text-velmora-porcelain focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2 focus:ring-offset-velmora-ivory"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 divide-y divide-velmora-sand border-y border-velmora-sand">
            <Accordion title="Description" open={openAccordion === 'Description'} onClick={() => setOpenAccordion(openAccordion === 'Description' ? '' : 'Description')}>
              {product.details}
            </Accordion>
            <Accordion title="Materials & Care" open={openAccordion === 'Materials & Care'} onClick={() => setOpenAccordion(openAccordion === 'Materials & Care' ? '' : 'Materials & Care')}>
              {product.care}
            </Accordion>
            <Accordion title="Shipping & Returns" open={openAccordion === 'Shipping & Returns'} onClick={() => setOpenAccordion(openAccordion === 'Shipping & Returns' ? '' : 'Shipping & Returns')}>
              {product.shipping}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-sand py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex items-end justify-between gap-4">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.35em] text-velmora-gold">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">You may also like.</h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} contextKey={`related-${product.slug}`} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function Accordion({ title, open, onClick, children }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left font-sans text-xs font-bold uppercase tracking-[0.26em] text-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-gold"
      >
        {title}
        <ChevronDown className={`h-4 w-4 text-velmora-gold transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-5 font-sans text-sm leading-7 text-velmora-taupe">{children}</p>}
    </div>
  )
}

export default ProductPage

import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/velmora/ProductCard'
import { findProductById, formatPrice, products } from '@/data/products'
import { getStrkImageUrl } from '@/lib/strkImages'

const accordionLabels = ['Description', 'Materials & Care', 'Shipping & Returns']

export default function ProductDetail({ onAdd }) {
  const { productId } = useParams()
  const product = findProductById(productId)
  const containerRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [tone, setTone] = useState(product.toneOptions[0])
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')

  useEffect(() => {
    setSelectedImage(0)
    setTone(product.toneOptions[0])
    setQuantity(1)
    setOpenAccordion('Description')
  }, [product.id])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product.id, selectedImage])

  const gallery = useMemo(() => [product.imgId, ...product.galleryIds], [product])
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4)

  const getAccordionText = (label) => {
    if (label === 'Materials & Care') return product.care
    if (label === 'Shipping & Returns') return product.shipping
    return product.longDescription
  }

  return (
    <main ref={containerRef} className="bg-velmora-parchment pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:pb-24">
        <div className="grid gap-4 md:grid-cols-[92px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
            {gallery.map((imageId, index) => (
              <button
                key={imageId}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`h-24 w-20 shrink-0 overflow-hidden border bg-velmora-ivory transition md:w-full ${selectedImage === index ? 'border-velmora-gold' : 'border-velmora-espresso/10 hover:border-velmora-champagne'}`}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`${imageId}-thumb`}
                  data-strk-img={`[pdp-desc] [pdp-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="240"
                  src={getStrkImageUrl(`${imageId}-thumb`)}
                />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden border border-velmora-espresso/10 bg-velmora-ivory md:order-2">
            <img
              alt={product.name}
              className="h-full w-full object-cover"
              data-strk-img-id={`${gallery[selectedImage]}-main`}
              data-strk-img="[pdp-desc] [pdp-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              src={getStrkImageUrl(`${gallery[selectedImage]}-main`)}
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <nav className="mb-6 text-xs uppercase tracking-luxury text-velmora-taupe" aria-label="Breadcrumb">
            <Link to="/shop" className="hover:text-velmora-gold">Shop</Link> / <span>{product.category}</span>
          </nav>

          <p className="text-xs font-bold uppercase tracking-atelier text-velmora-gold">{product.badge}</p>
          <h1 id="pdp-title" className="mt-3 font-serif text-5xl uppercase leading-tight tracking-editorial text-velmora-espresso md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex gap-1 text-velmora-gold" aria-label={`${product.rating} star rating`}>
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
            </div>
            <span className="text-sm text-velmora-taupe">{product.rating} · {product.reviews} reviews</span>
          </div>
          <p id="pdp-desc" className="mt-6 text-base leading-8 text-velmora-taupe">{product.description}</p>

          <div className="mt-8 border-y border-velmora-espresso/10 py-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-cocoa">Tone</p>
            <div className="flex flex-wrap gap-3">
              {product.toneOptions.map((option) => (
                <button key={option} type="button" onClick={() => setTone(option)} className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-ritual transition ${tone === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-espresso/20 bg-velmora-ivory text-velmora-espresso hover:border-velmora-gold'}`}>{option}</button>
              ))}
            </div>

            <div className="mt-6 flex items-end gap-4">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-cocoa">Quantity</p>
                <div className="flex h-12 items-center border border-velmora-espresso/20 bg-velmora-ivory">
                  <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="px-4 text-velmora-espresso hover:text-velmora-gold" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                  <span className="w-10 text-center text-sm font-semibold text-velmora-espresso">{quantity}</span>
                  <button type="button" onClick={() => setQuantity((value) => value + 1)} className="px-4 text-velmora-espresso hover:text-velmora-gold" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                </div>
              </div>
              <button type="button" onClick={() => onAdd(product, quantity, tone)} className="h-12 flex-1 border border-velmora-espresso bg-velmora-espresso px-5 text-xs font-bold uppercase tracking-luxury text-velmora-ivory transition hover:bg-velmora-cocoa">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="divide-y divide-velmora-espresso/10">
            {accordionLabels.map((label) => (
              <div key={label}>
                <button type="button" onClick={() => setOpenAccordion(openAccordion === label ? '' : label)} className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-luxury text-velmora-cocoa">
                  {label}
                  <ChevronDown className={`h-4 w-4 transition ${openAccordion === label ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === label ? 'max-h-36 pb-5' : 'max-h-0'}`}>
                  <p className="text-sm leading-7 text-velmora-taupe">{getAccordionText(label)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-velmora-espresso/10 px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mb-9 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-atelier text-velmora-gold">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-4xl text-velmora-espresso md:text-5xl">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-luxury text-velmora-espresso hover:text-velmora-gold sm:block">View all</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => <ProductCard key={item.id} product={item} onAdd={onAdd} context="related-row" />)}
        </div>
      </section>
    </main>
  )
}

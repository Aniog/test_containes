import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import { formatPrice, getProductBySlug, products } from '@/data/products'
import { productImageAssets } from '@/data/imageAssets'

const accordionContent = {
  Description: 'A refined Velmora signature designed to bring warm, editorial shine to everyday dressing and thoughtful gifting.',
  'Materials & Care': 'Demi-fine construction with gold plating and hypoallergenic details. Avoid water, lotions, and perfume. Store in your pouch after wear.',
  'Shipping & Returns': 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition and packaging.',
}

export default function ProductPage({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('Description')

  const related = useMemo(() => {
    if (!product) return []
    return products.filter((item) => item.id !== product.id).slice(0, 4)
  }, [product])

  if (!product) return <Navigate to="/shop" replace />

  const images = productImageAssets[product.id]
  const galleryItems = images?.gallery || []
  const thumbnailItems = images?.thumbnails || galleryItems

  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 md:pb-24 lg:px-10">
        <div className="mb-8 text-sm text-velmora-taupe">
          <Link to="/shop" className="transition hover:text-velmora-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-espresso">{product.name}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="grid gap-4 lg:grid-cols-[5.5rem_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
              {thumbnailItems.map((thumbnail, index) => (
                <button
                  key={thumbnail}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square w-20 shrink-0 overflow-hidden border transition ${activeImage === index ? 'border-velmora-gold' : 'border-velmora-line hover:border-velmora-gold'}`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src={thumbnail}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-parchment shadow-soft lg:order-2">
              <img
                src={galleryItems[activeImage] || images?.primary}
                alt={`${product.name} gallery image`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p id={`detail-${product.id}-category`} className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">{product.category}</p>
            <h1 id={`detail-${product.id}-title`} className="mt-4 font-serifDisplay text-5xl font-semibold uppercase leading-tight tracking-luxe text-velmora-espresso md:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-2xl font-bold text-velmora-espresso">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-1 text-velmora-gold">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                <span className="ml-2 text-sm font-semibold text-velmora-taupe">{product.rating} ({product.reviewCount})</span>
              </div>
            </div>
            <p id={`detail-${product.id}-desc`} className="mt-6 text-base leading-8 text-velmora-taupe">{product.shortDescription}</p>

            <div className="mt-8 border-t border-velmora-line pt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-luxe text-velmora-espresso">Tone</p>
              <div className="flex flex-wrap gap-3">
                {product.toneOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-5 py-3 text-sm font-bold transition ${tone === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-line bg-velmora-pearl text-velmora-espresso hover:border-velmora-gold'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-luxe text-velmora-espresso">Quantity</p>
              <div className="inline-flex items-center border border-velmora-line bg-velmora-pearl text-velmora-espresso">
                <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="p-4 transition hover:bg-velmora-parchment" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center font-bold">{quantity}</span>
                <button type="button" onClick={() => setQuantity((current) => current + 1)} className="p-4 transition hover:bg-velmora-parchment" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onAddToCart(product, { tone, quantity })}
              className="mt-7 w-full bg-velmora-gold px-7 py-5 text-sm font-bold uppercase tracking-luxe text-velmora-espresso transition hover:bg-velmora-softGold"
            >
              Add to Cart
            </button>

            <div className="mt-9 divide-y divide-velmora-line border-y border-velmora-line">
              {Object.entries(accordionContent).map(([title, fallback]) => {
                const isOpen = openAccordion === title
                const text = title === 'Description' ? product.description : title === 'Materials & Care' ? product.care : fallback
                return (
                  <div key={title}>
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(isOpen ? '' : title)}
                      className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-luxe text-velmora-espresso"
                    >
                      {title}
                      <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
                      <p className="overflow-hidden text-sm leading-7 text-velmora-taupe">{text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-line bg-velmora-parchment px-5 py-16 sm:px-8 md:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Curated with this piece</p>
              <h2 className="mt-3 font-serifDisplay text-5xl font-semibold text-velmora-espresso">You may also like</h2>
            </div>
            <Link to="/shop" className="text-sm font-bold uppercase tracking-luxe text-velmora-espresso transition hover:text-velmora-gold">View all</Link>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item, index) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} imageScope={`related-${index}`} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

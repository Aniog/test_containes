import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useShop } from '@/context/ShopContext'
import ProductCard from '@/components/products/ProductCard'

const money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const accordionSections = [
  { key: 'details', label: 'Description' },
  { key: 'care', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

export default function ProductDetail() {
  const pageRef = useRef(null)
  const { slug } = useParams()
  const { addToCart } = useShop()
  const product = products.find((item) => item.slug === slug) ?? products[0]
  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 3),
    [product.id],
  )

  const gallery = [product.imageIds.hero, product.imageIds.alt, product.imageIds.detail]
  const [selectedImage, setSelectedImage] = useState(gallery[0])
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [activeAccordion, setActiveAccordion] = useState('details')

  useEffect(() => {
    setSelectedImage(gallery[0])
    setSelectedVariant(product.variants[0])
    setQuantity(1)
    setActiveAccordion('details')
  }, [product, gallery])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [selectedImage, product.id])

  const contentMap = {
    details: product.details,
    care: `${product.materials} ${product.care}`,
    shipping: product.shipping,
  }

  return (
    <main ref={pageRef} className="bg-parchment px-5 pb-20 pt-10 text-espresso sm:px-6 lg:px-10 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/shop"
          className="text-xs uppercase tracking-[0.28em] text-taupe transition hover:text-gold"
        >
          Back to Shop
        </Link>

        <section className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-4 lg:grid-cols-[100px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
              {gallery.map((imageId, index) => (
                <button
                  key={imageId}
                  type="button"
                  onClick={() => setSelectedImage(imageId)}
                  className={`overflow-hidden rounded-[1.25rem] border bg-ivory ${
                    selectedImage === imageId ? 'border-gold' : 'border-champagne/70'
                  }`}
                >
                  <img
                    alt={`${product.name} thumbnail ${index + 1}`}
                    data-strk-img-id={`${imageId}-thumb`}
                    data-strk-img={`[product-detail-subtitle] [product-detail-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="260"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-24 w-24 object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="order-1 overflow-hidden rounded-[2rem] border border-champagne/70 bg-ivory shadow-veil lg:order-2">
              <img
                alt={product.name}
                data-strk-img-id={selectedImage}
                data-strk-img="[product-detail-subtitle] [product-detail-title]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full min-h-[420px] w-full object-cover sm:min-h-[560px]"
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-champagne/70 bg-ivory p-6 shadow-card sm:p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{product.category}</p>
            <h1
              id="product-detail-title"
              className="mt-4 font-serif text-4xl uppercase tracking-product text-espresso sm:text-5xl"
            >
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-4">
              <p className="text-2xl font-medium text-espresso">{money.format(product.price)}</p>
              <div className="flex items-center gap-2 text-sm text-mocha">
                <Star className="h-4 w-4 fill-gold text-gold" />
                <span>{product.rating}</span>
                <span className="text-taupe">({product.reviewCount} reviews)</span>
              </div>
            </div>
            <p id="product-detail-subtitle" className="mt-5 text-base leading-8 text-mocha">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.28em] text-taupe">Variant</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-5 py-3 text-sm font-medium transition ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold text-espresso'
                        : 'border-champagne bg-parchment text-espresso hover:border-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center rounded-full border border-champagne bg-parchment p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-espresso"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center text-sm font-medium text-espresso">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-espresso"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => addToCart(product, quantity, selectedVariant)}
                className="flex-1 rounded-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-espresso transition hover:bg-champagne"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-10 divide-y divide-champagne/70 rounded-[1.5rem] border border-champagne/70 bg-parchment/70">
              {accordionSections.map((section) => (
                <div key={section.key}>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveAccordion((current) =>
                        current === section.key ? '' : section.key,
                      )
                    }
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium uppercase tracking-[0.22em] text-espresso"
                  >
                    {section.label}
                    <span>{activeAccordion === section.key ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === section.key && (
                    <div className="px-5 pb-5 text-sm leading-7 text-mocha">
                      {contentMap[section.key]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.34em] text-gold">You may also like</p>
            <h2 className="mt-4 font-serif text-4xl text-espresso">More to discover</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

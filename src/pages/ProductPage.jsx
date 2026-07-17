import { Minus, Plus } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '@/components/store/ProductCard'
import SectionHeading from '@/components/store/SectionHeading'
import StarRating from '@/components/store/StarRating'
import { getProductById, products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useStockImages } from '@/hooks/useStockImages'

const galleryViews = [
  'Front-facing editorial product portrait',
  'Close-up texture detail in warm light',
  'Jewelry worn on skin with natural glow',
  'Gift-ready styling detail on neutral background',
]

export default function ProductPage() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)

  useStockImages(containerRef, [selectedImageIndex, selectedVariant])

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== productId).slice(0, 3),
    [productId],
  )

  if (!product) {
    return (
      <main className="bg-ivory px-5 pb-24 pt-32 text-ink sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-mocha/10 bg-white/70 p-10 text-center shadow-card">
          <p className="text-xs uppercase tracking-[0.28em] text-mocha">Product unavailable</p>
          <h1 className="mt-4 font-display text-5xl text-ink">This piece has moved on</h1>
          <p className="mt-4 text-sm leading-7 text-mocha">
            Explore the current collection to discover our latest earrings, necklaces, and gift-ready sets.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex rounded-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-ink transition hover:bg-champagne"
          >
            Shop all jewelry
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main ref={containerRef} className="bg-ivory pb-24 pt-28 text-ink sm:pt-32">
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-8 text-xs uppercase tracking-[0.28em] text-mocha">
          <Link to="/shop" className="transition hover:text-ink">
            Shop
          </Link>{' '}
          / {product.category}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="overflow-hidden rounded-[2rem] bg-sand shadow-soft">
              <img
                alt={product.name}
                className="aspect-[4/5] h-full w-full object-cover"
                data-strk-img-id={`product-${product.id}-main-${selectedImageIndex}`}
                data-strk-img={`[product-gallery-${selectedImageIndex}-caption] [product-title] [product-description]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {galleryViews.map((caption, index) => (
                <button
                  key={caption}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  className={`overflow-hidden rounded-[1.2rem] border bg-sand transition ${
                    selectedImageIndex === index
                      ? 'border-gold shadow-card'
                      : 'border-mocha/10 hover:border-mocha/30'
                  }`}
                  aria-label={`Show image ${index + 1} for ${product.name}`}
                >
                  <img
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="aspect-square h-full w-full object-cover"
                    data-strk-img-id={`product-${product.id}-thumb-${index}`}
                    data-strk-img={`[product-gallery-${index}-caption] [product-title] [product-description]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <span id={`product-gallery-${index}-caption`} className="sr-only">
                    {caption}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.32em] text-mocha">{product.category}</p>
            <h1
              id="product-title"
              className="mt-4 font-display text-4xl uppercase tracking-product leading-tight text-ink sm:text-5xl"
            >
              {product.name}
            </h1>
            <div className="mt-5 flex items-center justify-between gap-4">
              <StarRating rating={product.rating} reviewCount={product.reviewCount} />
              <p className="text-2xl text-ink">${product.price}</p>
            </div>
            <p id="product-description" className="mt-6 max-w-xl text-base leading-8 text-mocha">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.28em] text-mocha">Tone</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.22em] transition ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold text-ink'
                        : 'border-mocha/15 bg-white/60 text-ink hover:bg-sand'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center rounded-full border border-mocha/15 bg-white/70 px-2 py-2">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink transition hover:bg-sand"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center text-sm text-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink transition hover:bg-sand"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 flex w-full items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-ink transition hover:bg-champagne"
            >
              Add to Cart
            </button>

            <div className="mt-10 divide-y divide-mocha/10 overflow-hidden rounded-[1.75rem] border border-mocha/10 bg-white/60">
              <details className="group p-6" open>
                <summary className="cursor-pointer list-none text-sm uppercase tracking-[0.24em] text-ink">
                  Description
                </summary>
                <p className="mt-4 text-sm leading-7 text-mocha">{product.details}</p>
              </details>
              <details className="group p-6">
                <summary className="cursor-pointer list-none text-sm uppercase tracking-[0.24em] text-ink">
                  Materials & Care
                </summary>
                <p className="mt-4 text-sm leading-7 text-mocha">{product.materials}</p>
              </details>
              <details className="group p-6">
                <summary className="cursor-pointer list-none text-sm uppercase tracking-[0.24em] text-ink">
                  Shipping & Returns
                </summary>
                <p className="mt-4 text-sm leading-7 text-mocha">{product.shipping}</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-5 sm:px-8 lg:px-10 lg:mt-24">
        <SectionHeading
          eyebrow="Curated for you"
          title="You may also like"
          description="A refined continuation of the collection, chosen to layer beautifully with your current piece."
          titleId="related-title"
          descriptionId="related-description"
          align="left"
          className="mx-0"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              scope="related-products"
              sectionTitleId="related-title"
              sectionDescriptionId="related-description"
            />
          ))}
        </div>
      </section>
    </main>
  )
}

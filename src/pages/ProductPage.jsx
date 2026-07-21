import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductAccordion from '@/components/storefront/ProductAccordion'
import ProductCard from '@/components/storefront/ProductCard'
import ProductGallery from '@/components/storefront/ProductGallery'
import RatingStars from '@/components/storefront/RatingStars'
import { formatPrice, getProductBySlug, getRelatedProducts } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const variants = ['Gold Tone', 'Silver Tone']

export default function ProductPage({ onAddToCart }) {
  const { slug } = useParams()
  const containerRef = useRef(null)
  const product = getProductBySlug(slug)
  const [selectedVariant, setSelectedVariant] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)

  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current) || (() => {})
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [slug, product])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `${product.materials} Store in a soft pouch and avoid direct contact with water, perfume, and lotions to preserve the finish.`,
    },
    {
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ]

  return (
    <section ref={containerRef} className="px-4 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <ProductGallery product={product} />

          <div className="space-y-8 rounded-[2rem] border border-velmora-stone/15 bg-white p-6 shadow-soft md:p-8">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.28em] text-velmora-stone">
                {product.category}
              </p>
              <div className="space-y-3">
                <h1
                  id={product.titleId}
                  className="font-serif text-4xl uppercase tracking-luxe text-velmora-ink md:text-5xl"
                >
                  {product.name}
                </h1>
                <p className="text-2xl font-semibold text-velmora-ink">
                  {formatPrice(product.price)}
                </p>
              </div>
              <RatingStars rating={product.rating} reviews={product.reviews} />
              <p id={product.descId} className="text-sm leading-8 text-velmora-stone md:text-base">
                {product.shortDescription}
              </p>
            </div>

            <div className="space-y-6 border-y border-velmora-stone/10 py-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-velmora-ink">
                  Tone
                </p>
                <div className="flex flex-wrap gap-3">
                  {variants.map((variant) => {
                    const isActive = selectedVariant === variant
                    return (
                      <button
                        key={variant}
                        type="button"
                        onClick={() => setSelectedVariant(variant)}
                        className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.22em] transition ${
                          isActive
                            ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                            : 'border-velmora-stone/20 text-velmora-stone hover:border-velmora-gold hover:text-velmora-ink'
                        }`}
                      >
                        {variant}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-velmora-ink">
                  Quantity
                </p>
                <div className="flex w-fit items-center rounded-full border border-velmora-stone/20">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="px-4 py-3 text-lg text-velmora-ink"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="min-w-12 text-center text-sm font-medium text-velmora-ink">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="px-4 py-3 text-lg text-velmora-ink"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onAddToCart(product, selectedVariant, quantity)}
                className="w-full rounded-full bg-velmora-gold px-6 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-velmora-ink transition duration-300 ease-velvet hover:-translate-y-0.5"
              >
                Add to Cart
              </button>
            </div>

            <ProductAccordion items={accordionItems} />
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-velmora-stone">
                Curated for You
              </p>
              <h2 className="font-serif text-4xl text-velmora-ink">You may also like</h2>
            </div>
            <Link
              to="/shop"
              className="text-xs font-semibold uppercase tracking-[0.26em] text-velmora-ink transition hover:text-velmora-gold"
            >
              View All
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

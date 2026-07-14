import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import {
  formatCurrency,
  getProductBySlug,
  getRelatedProducts,
} from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'
import QuantitySelector from '@/components/shared/QuantitySelector'
import RatingStars from '@/components/shared/RatingStars'
import ProductCard from '@/components/shared/ProductCard'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const { addItem } = useCart()
  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])
  const containerRef = useStrkImages([slug, selectedImageIndex])

  useEffect(() => {
    if (!product) {
      return
    }

    setSelectedTone(product.tones[0])
    setQuantity(1)
    setSelectedImageIndex(0)
  }, [product])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <div ref={containerRef} className="bg-stone-50">
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-stone-500">
          <Link to="/" className="transition hover:text-stone-900">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="transition hover:text-stone-900">
            Shop
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-stone-700">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="grid gap-4 md:grid-cols-[104px_minmax(0,1fr)]">
            <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
              {product.images.map((imageLabel, index) => {
                const thumbTitleId = `${product.id}-thumb-${index}-title`
                const thumbImageId = `${product.id}-thumb-${index}-image`

                return (
                  <button
                    key={thumbImageId}
                    type="button"
                    onClick={() => setSelectedImageIndex(index)}
                    className={`overflow-hidden rounded-2xl border transition ${
                      selectedImageIndex === index
                        ? 'border-stone-950 shadow-lg'
                        : 'border-stone-200'
                    }`}
                  >
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="h-24 w-24 object-cover md:h-28 md:w-24"
                      data-strk-img-id={thumbImageId}
                      data-strk-img={`[${thumbTitleId}] [product-${product.id}-title]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="300"
                    />
                    <span id={thumbTitleId} className="sr-only">
                      {imageLabel}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="order-1 overflow-hidden rounded-[2rem] bg-stone-100 md:order-2">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="aspect-[4/5] w-full object-cover"
                data-strk-img-id={`${product.id}-detail-main-${selectedImageIndex}`}
                data-strk-img={`[product-${product.id}-description] [product-${product.id}-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 shadow-[0_18px_40px_rgba(28,25,23,0.05)] md:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
              {product.category}
            </p>
            <h1
              id={`product-${product.id}-title`}
              className="mt-4 font-serif text-4xl uppercase tracking-[0.24em] text-stone-950 md:text-5xl"
            >
              {product.name}
            </h1>
            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-2xl font-medium text-stone-950">
                {formatCurrency(product.price)}
              </p>
              <RatingStars rating={product.rating} reviews={product.reviews} />
            </div>
            <p
              id={`product-${product.id}-description`}
              className="mt-6 text-base leading-7 text-stone-600"
            >
              {product.description}
            </p>

            <div className="mt-8 space-y-6 border-t border-stone-200 pt-8">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                  Choose tone
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {product.tones.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.18em] transition ${
                        selectedTone === tone
                          ? 'border-stone-950 bg-stone-950 text-stone-50'
                          : 'border-stone-300 bg-stone-50 text-stone-700 hover:border-stone-500'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                    Quantity
                  </p>
                  <div className="mt-3">
                    <QuantitySelector
                      quantity={quantity}
                      onChange={(nextQuantity) => setQuantity(Math.max(1, nextQuantity))}
                    />
                  </div>
                </div>
                <p className="rounded-full bg-amber-100 px-4 py-2 text-xs uppercase tracking-[0.24em] text-stone-800">
                  Gift-ready packaging
                </p>
              </div>

              <button
                type="button"
                onClick={() => addItem(product, selectedTone, quantity)}
                className="flex w-full items-center justify-center rounded-full bg-amber-200 px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-stone-950 transition hover:bg-amber-100"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 space-y-3 border-t border-stone-200 pt-8">
              <details className="rounded-2xl border border-stone-200 bg-stone-100 px-5 py-4" open>
                <summary className="cursor-pointer list-none text-sm uppercase tracking-[0.2em] text-stone-900">
                  Description
                </summary>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {product.shortDescription} Each piece is designed for layering,
                  gifting, and easy everyday wear.
                </p>
              </details>

              <details className="rounded-2xl border border-stone-200 bg-stone-100 px-5 py-4">
                <summary className="cursor-pointer list-none text-sm uppercase tracking-[0.2em] text-stone-900">
                  Materials & Care
                </summary>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-stone-600">
                  {product.details.map((detail) => (
                    <li key={detail}>• {detail}</li>
                  ))}
                  <li>• {product.care}</li>
                </ul>
              </details>

              <details className="rounded-2xl border border-stone-200 bg-stone-100 px-5 py-4">
                <summary className="cursor-pointer list-none text-sm uppercase tracking-[0.2em] text-stone-900">
                  Shipping & Returns
                </summary>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {product.shipping}
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
              Related Pieces
            </p>
            <h2 className="mt-4 font-serif text-4xl text-stone-950">
              You may also like
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </section>
    </div>
  )
}

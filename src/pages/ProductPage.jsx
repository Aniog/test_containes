import { Minus, Plus } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductAccordion from '@/components/products/ProductAccordion'
import ProductCard from '@/components/products/ProductCard'
import RatingStars from '@/components/products/RatingStars'
import { formatPrice, getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/hooks/useStrkImages'

const ProductPage = () => {
  const { productId } = useParams()
  const product = getProductById(productId)
  const relatedProducts = useMemo(() => getRelatedProducts(productId), [productId])
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [openSection, setOpenSection] = useState('Description')
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useStrkImages(containerRef, [productId, activeImageIndex])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const accordionItems = [
    { label: 'Description', content: product.accordion.description },
    { label: 'Materials & Care', content: product.accordion.materials },
    { label: 'Shipping & Returns', content: product.accordion.shipping },
  ]

  return (
    <div ref={containerRef} className="bg-canvas text-ink">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-ink-muted">
          <Link to="/shop" className="transition-colors duration-300 hover:text-accent">
            Shop
          </Link>
          <span>/</span>
          <span>{product.category}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="grid gap-5 md:grid-cols-[104px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
              {product.galleryScenes.map((scene, index) => {
                const titleId = `product-${product.id}-gallery-title-${index}`
                const descId = `product-${product.id}-gallery-desc-${index}`

                return (
                  <button
                    key={scene}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative min-w-[88px] overflow-hidden rounded-[1.4rem] border bg-surface-alt transition-all duration-300 ${
                      activeImageIndex === index ? 'border-accent shadow-soft' : 'border-line'
                    }`}
                  >
                    <img
                      alt={`${product.name} thumbnail ${index + 1}`}
                      data-strk-img-id={`product-${product.id}-thumb-${index}-c2f1e8`}
                      data-strk-img={`[${descId}] [${titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="240"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-24 w-full object-cover opacity-90"
                    />
                    <span id={titleId} className="sr-only">
                      {product.displayName}
                    </span>
                    <span id={descId} className="sr-only">
                      {scene}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="order-1 overflow-hidden rounded-[2.25rem] border border-line bg-surface shadow-card md:order-2">
              {product.galleryScenes.map((scene, index) => {
                const titleId = `product-${product.id}-hero-title-${index}`
                const descId = `product-${product.id}-hero-desc-${index}`

                return (
                  <div
                    key={scene}
                    className={`${activeImageIndex === index ? 'block' : 'hidden'} aspect-[4/5]`}
                  >
                    <img
                      alt={product.name}
                      data-strk-img-id={`product-${product.id}-hero-${index}-a92d7f`}
                      data-strk-img={`[${descId}] [${titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="1200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-full w-full object-cover"
                    />
                    <span id={titleId} className="sr-only">
                      {product.displayName}
                    </span>
                    <span id={descId} className="sr-only">
                      {scene}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="space-y-7 rounded-[2.25rem] border border-line bg-surface p-6 text-ink shadow-card sm:p-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                {product.category}
              </p>
              <h1 className="font-serif text-4xl uppercase tracking-product text-ink sm:text-5xl">
                {product.displayName}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-2xl font-semibold text-ink">{formatPrice(product.price)}</p>
                <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
              </div>
              <p className="max-w-xl text-base leading-8 text-ink-muted">
                {product.description}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-muted">
                Tone
              </p>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-accent bg-accent text-surface'
                        : 'border-line bg-canvas text-ink hover:bg-accent-soft/35'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-muted">
                Quantity
              </p>
              <div className="inline-flex items-center rounded-full border border-line bg-canvas">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="rounded-full p-3 text-ink transition-colors duration-300 hover:bg-accent-soft/40"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center text-sm font-semibold text-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="rounded-full p-3 text-ink transition-colors duration-300 hover:bg-accent-soft/40"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full rounded-full bg-accent px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-surface transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-alt"
            >
              Add to Cart
            </button>

            <div className="rounded-[1.75rem] bg-canvas px-5 py-5">
              <ul className="space-y-3 text-sm text-ink-muted">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {accordionItems.map((item) => (
                <ProductAccordion
                  key={item.label}
                  item={item}
                  isOpen={openSection === item.label}
                  onToggle={() =>
                    setOpenSection((current) =>
                      current === item.label ? '' : item.label,
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Continue your edit
              </p>
              <h2 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">You may also like</h2>
            </div>
            <Link
              to="/shop"
              className="text-xs font-semibold uppercase tracking-[0.28em] text-ink transition-colors duration-300 hover:text-accent"
            >
              Back to shop
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage

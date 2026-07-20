import { useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useCart } from '../components/cart/CartContext'
import QuantitySelector from '../components/common/QuantitySelector'
import RatingStars from '../components/common/RatingStars'
import AccordionItem from '../components/products/AccordionItem'
import ProductGallery from '../components/products/ProductGallery'
import ProductGrid from '../components/products/ProductGrid'
import {
  formatPrice,
  getProductBySlug,
  getRelatedProducts,
} from '../lib/products'
import { useStrkImageLoader } from '../lib/useStrkImageLoader'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] ?? 'Gold Tone',
  )
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const relatedProducts = useMemo(
    () => (product ? getRelatedProducts(product.id) : []),
    [product],
  )

  useStrkImageLoader(containerRef, [slug])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <div ref={containerRef} className="pb-16 pt-28 md:pb-24 md:pt-36">
      <section className="page-shell">
        <div className="mb-6 text-sm text-ink/60">
          <Link to="/shop" className="transition hover:text-ink">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <ProductGallery product={product} />

          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">{product.category}</p>
            <h1 className="mt-4 font-display text-4xl uppercase tracking-luxe text-ink md:text-5xl">
              {product.shortName}
            </h1>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <p className="text-3xl text-ink">{formatPrice(product.price)}</p>
              <RatingStars rating={product.rating} reviews={product.reviews} />
            </div>
            <p className="mt-6 text-base leading-8 text-ink/75">
              {product.description}
            </p>

            <div className="mt-8 space-y-6 rounded-[2rem] border border-sandDeep/70 bg-white/70 p-6 shadow-card">
              <div>
                <p className="text-sm font-medium text-ink">Finish</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.variants.map((variant) => {
                    const isActive = variant === selectedVariant
                    return (
                      <button
                        key={variant}
                        type="button"
                        onClick={() => setSelectedVariant(variant)}
                        className={`rounded-full border px-4 py-2 text-sm transition ${
                          isActive
                            ? 'border-champagne bg-champagne text-champagneInk'
                            : 'border-sandDeep/80 bg-porcelain text-ink hover:border-rosewood hover:text-rosewood'
                        }`}
                      >
                        {variant}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-ink">Quantity</p>
                  <p className="mt-1 text-sm text-ink/60">Adjust your order</p>
                </div>
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>

              <button
                type="button"
                onClick={() => addItem(product, quantity, selectedVariant)}
                className="luxe-button w-full"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 rounded-[2rem] border border-sandDeep/70 bg-porcelain px-6 py-4">
              <AccordionItem defaultOpen title="Description" content={product.details} />
              <AccordionItem title="Materials & Care" content={product.care} />
              <AccordionItem title="Shipping & Returns" content={product.shipping} />
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell mt-16 md:mt-24">
        <p className="eyebrow">Related pieces</p>
        <h2 id="related-products-title" className="mt-4 editorial-heading">
          You may also like
        </h2>

        <ProductGrid
          className="mt-8 lg:grid-cols-4"
          contextKey="related-products"
          products={relatedProducts}
          sectionTitleId="related-products-title"
        />
      </section>
    </div>
  )
}

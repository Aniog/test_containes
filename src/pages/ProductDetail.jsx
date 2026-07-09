import { useState, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, ChevronDown, ArrowLeft } from 'lucide-react'
import { getProductById, products, formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useImageLoader } from '@/hooks/useImageLoader'
import StarRating from '@/components/StarRating'
import ProductCard from '@/components/ProductCard'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-velmora-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-widest font-medium">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-velmora-taupe leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const containerRef = useImageLoader()
  const { addItem } = useCart()

  const product = useMemo(() => getProductById(productId), [productId])

  const [selectedVariant, setSelectedVariant] = useState(
    product?.defaultVariant || 'gold'
  )
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-velmora-cream text-velmora-espresso">
        <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
        <Link
          to="/shop"
          className="text-xs uppercase tracking-widest underline hover:text-velmora-taupe"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const variant = product.variants.find((v) => v.id === selectedVariant)
  const related = product.related
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)

  const handleAdd = () => {
    if (!variant?.inStock) return
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const imageIds = Array.from({ length: product.images }, (_, i) => i)

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-20 sm:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-taupe hover:text-velmora-espresso transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] bg-stone-200 overflow-hidden">
              {imageIds.map((idx) => (
                <div
                  key={idx}
                  data-strk-bg-id={`product-${product.id}-img-${idx}`}
                  data-strk-bg={`[product-${product.id}-title] [product-${product.id}-desc] gold jewelry`}
                  data-strk-bg-ratio="4x5"
                  data-strk-bg-width="900"
                  role="img"
                  aria-label={`${product.name} view ${idx + 1}`}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                    activeImage === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              {imageIds.map((idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 h-24 sm:w-24 sm:h-28 overflow-hidden bg-stone-200 border-2 transition-colors ${
                    activeImage === idx
                      ? 'border-velmora-espresso'
                      : 'border-transparent'
                  }`}
                >
                  <div
                    data-strk-bg-id={`product-${product.id}-thumb-${idx}`}
                    data-strk-bg={`[product-${product.id}-title] gold jewelry`}
                    data-strk-bg-ratio="4x5"
                    data-strk-bg-width="200"
                    role="img"
                    aria-label={`${product.name} thumbnail ${idx + 1}`}
                    className="absolute inset-0 bg-cover bg-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:pt-10">
            <p className="text-xs uppercase tracking-widest text-velmora-taupe mb-3">
              {product.category}
            </p>
            <h1
              id={`product-${product.id}-title`}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-widest-xl mb-4"
            >
              {product.name}
            </h1>
            <p
              id={`product-${product.id}-desc`}
              className="text-sm text-velmora-taupe mb-5"
            >
              {product.shortDescription}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="font-serif text-2xl sm:text-3xl">
                {formatPrice(product.price)}
              </span>
              <StarRating
                rating={product.rating}
                count={product.reviewCount}
                size={14}
              />
            </div>

            {/* Variant selector */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-velmora-taupe block mb-3">
                Tone
              </span>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    disabled={!v.inStock}
                    onClick={() => setSelectedVariant(v.id)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-widest border transition-colors ${
                      selectedVariant === v.id
                        ? 'bg-velmora-espresso text-velmora-cream border-velmora-espresso'
                        : 'border-velmora-hairline text-velmora-espresso hover:border-velmora-espresso'
                    } ${
                      !v.inStock
                        ? 'opacity-50 cursor-not-allowed line-through'
                        : ''
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
              {!variant?.inStock && (
                <p className="text-xs text-red-700 mt-2">Out of stock</p>
              )}
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-velmora-taupe block mb-3">
                Quantity
              </span>
              <div className="inline-flex items-center border border-velmora-hairline">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-velmora-hairline/50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-velmora-hairline/50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              disabled={!variant?.inStock}
              className={`w-full py-4 text-xs uppercase tracking-widest font-semibold transition-colors ${
                added
                  ? 'bg-velmora-espresso text-velmora-cream'
                  : 'bg-velmora-gold text-velmora-espresso hover:bg-velmora-gold-hover'
              } ${!variant?.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            <div className="mt-10">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                {product.materials} {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on orders over $75. Standard delivery is
                5–10 business days. Easy 30-day returns on unworn pieces in
                original packaging.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-20 sm:mt-28 border-t border-velmora-hairline pt-14">
            <h2 className="font-serif text-3xl sm:text-4xl text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
              {related.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  queryIds={{
                    titleId: `related-title-${p.id}`,
                    descId: `related-desc-${p.id}`,
                  }}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

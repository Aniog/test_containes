import { useEffect, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Check } from 'lucide-react'
import { getProductById, products, formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/StarRating'
import ProductCard from '@/components/ProductCard'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-velmora-stone">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-velmora-ink">
          {title}
        </span>
        <ChevronDown
          size={16}
          className={`text-velmora-warmgray transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-lux ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-sm leading-relaxed text-velmora-warmgray">{children}</div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { productId } = useParams()
  const product = useMemo(() => getProductById(productId), [productId])
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]?.id || '')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (product) {
      const inStock = product.variants.find((v) => v.inStock)
      setSelectedVariant(inStock?.id || product.variants[0]?.id || '')
      setQuantity(1)
      setAdded(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [product])

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return products.filter((p) => product.related.includes(p.id))
  }, [product])

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl text-velmora-ink">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-velmora-rust underline">
          Continue shopping
        </Link>
      </div>
    )
  }

  const selectedTone = product.variants.find((v) => v.id === selectedVariant)

  const handleAdd = () => {
    if (!selectedTone?.inStock) return
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-velmora-stone">
              <img
                data-strk-img-id={`product-main-${product.id}`}
                data-strk-img={`[product-detail-title-${product.id}] [product-detail-desc-${product.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square overflow-hidden bg-velmora-stone">
                  <img
                    data-strk-img-id={`product-thumb-${product.id}-${i}`}
                    data-strk-img={`[product-detail-title-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col lg:py-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-velmora-rust">
              {product.category}
            </p>
            <h1
              id={`product-detail-title-${product.id}`}
              className="mt-2 font-serif text-3xl font-medium uppercase tracking-widest text-velmora-ink md:text-4xl"
            >
              {product.name}
            </h1>
            <p
              id={`product-detail-desc-${product.id}`}
              className="mt-2 text-sm font-light italic text-velmora-warmgray"
            >
              {product.tagline}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-velmora-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="font-serif text-2xl font-medium text-velmora-ink">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-velmora-taupe line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-velmora-warmgray">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-velmora-ink">
                Tone
              </span>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    type="button"
                    disabled={!variant.inStock}
                    aria-pressed={selectedVariant === variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-widest transition ${
                      selectedVariant === variant.id
                        ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory'
                        : 'border-velmora-stone bg-transparent text-velmora-ink hover:border-velmora-taupe'
                    } ${!variant.inStock ? 'cursor-not-allowed opacity-40 line-through' : ''}`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-velmora-ink">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-velmora-stone">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-velmora-warmgray transition hover:bg-velmora-stone hover:text-velmora-ink"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm text-velmora-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-velmora-warmgray transition hover:bg-velmora-stone hover:text-velmora-ink"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              disabled={!selectedTone?.inStock}
              className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full py-4 text-xs font-semibold uppercase tracking-widest transition ${
                added
                  ? 'bg-green-700 text-velmora-ivory'
                  : 'bg-velmora-ink text-velmora-ivory hover:bg-velmora-charcoal'
              } disabled:cursor-not-allowed disabled:opacity-50`}
            >
              {added ? (
                <>
                  <Check size={16} /> Added to Cart
                </>
              ) : selectedTone?.inStock ? (
                'Add to Cart'
              ) : (
                'Sold Out'
              )}
            </button>

            {/* Trust microcopy */}
            <div className="mt-6 flex flex-wrap gap-4 text-[10px] uppercase tracking-widest text-velmora-warmgray">
              <span>Free shipping over $75</span>
              <span>•</span>
              <span>30-day returns</span>
              <span>•</span>
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc space-y-1 pl-4">
                  {product.materials.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                <p className="mt-3 font-medium">Care tips:</p>
                <ul className="list-disc space-y-1 pl-4">
                  {product.care.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">{product.shipping}</p>
                <p>{product.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-velmora-stone bg-velmora-ivory py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center font-serif text-2xl font-medium text-velmora-ink md:text-3xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

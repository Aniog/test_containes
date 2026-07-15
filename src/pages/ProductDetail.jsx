import { useState, useRef, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, Check } from 'lucide-react'
import { getProductById, getRelatedProducts, formatPrice } from '@/data/products'
import { useCart } from '@/contexts/CartContext'
import { useStrkImages } from '@/hooks/useStrkImages'
import { Button } from '@/components/ui/Button'
import { Accordion } from '@/components/ui/Accordion'
import { StarRating } from '@/components/ui/StarRating'
import { ProductCard } from '@/components/product/ProductCard'

export function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [tone, setTone] = useState(product?.tone?.[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [mainIndex, setMainIndex] = useState(0)
  const [added, setAdded] = useState(false)

  useStrkImages(containerRef, [mainIndex, id])

  const related = useMemo(() => {
    return product ? getRelatedProducts(product.id, 4) : []
  }, [product])

  if (!product) {
    return (
      <div className="container-vel py-24 text-center">
        <h1 className="heading-serif text-3xl">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-vel-accent underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const titleId = `product-detail-name-${product.id}`
  const descId = `product-detail-desc-${product.id}`
  const mainImgId = `product-detail-main-${product.id}-${mainIndex}`
  const thumbImgIds = Array.from({ length: product.images }, (_, i) =>
    `product-detail-thumb-${product.id}-${i}`
  )

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $50. Orders are processed within 1–2 business days. We offer 30-day returns on unworn items in original packaging.',
    },
  ]

  const handleAdd = () => {
    addItem(product, { tone, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={containerRef}>
      <div className="container-vel py-8 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Gallery */}
          <div className="flex flex-col gap-4 md:flex-row-reverse">
            <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-vel-cream">
              <img
                data-strk-img-id={mainImgId}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-row gap-3 md:flex-col">
              {thumbImgIds.map((thumbId, i) => (
                <button
                  key={thumbId}
                  type="button"
                  onClick={() => setMainIndex(i)}
                  className={`relative aspect-square w-16 overflow-hidden bg-vel-cream md:w-20 ${
                    mainIndex === i ? 'ring-1 ring-vel-base' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    data-strk-img-id={thumbId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-vel-accent">
              {product.category}
            </p>
            <h1
              id={titleId}
              className="product-name text-2xl md:text-3xl"
            >
              {product.name}
            </h1>
            <p id={descId} className="sr-only">
              {product.description}
            </p>

            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} size={16} />
              <span className="text-sm text-vel-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-5 font-serif text-3xl font-light text-vel-base">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 leading-relaxed text-vel-muted">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <span className="mb-3 block text-xs font-medium uppercase tracking-wide text-vel-muted">
                Metal Tone
              </span>
              <div className="flex flex-wrap gap-3">
                {product.tone.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={`px-5 py-2.5 text-xs font-medium uppercase tracking-wide transition-all ${
                      tone === t
                        ? 'bg-vel-base text-white'
                        : 'border border-vel-border text-vel-base hover:border-vel-base'
                    }`}
                  >
                    <span className="capitalize">{t}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="mb-3 block text-xs font-medium uppercase tracking-wide text-vel-muted">
                Quantity
              </span>
              <div className="inline-flex items-center border border-vel-border">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-vel-muted hover:text-vel-base"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-vel-muted hover:text-vel-base"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <Button
              onClick={handleAdd}
              className={`mt-8 w-full transition-all ${
                added ? 'bg-green-700 hover:bg-green-700' : ''
              }`}
            >
              {added ? (
                <span className="flex items-center justify-center gap-2">
                  <Check size={16} /> Added
                </span>
              ) : (
                'Add to Cart'
              )}
            </Button>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-vel-border bg-white py-16 md:py-20">
        <div className="container-vel">
          <h2
            id="related-title"
            className="heading-serif mb-8 text-center text-2xl md:text-3xl"
          >
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} contextId="related-title" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

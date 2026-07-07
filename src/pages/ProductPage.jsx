import { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Heart, ChevronLeft, Truck, RotateCcw, ShieldCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, formatPrice, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import Button from '@/components/ui/Button'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import QuantitySelector from '@/components/ui/QuantitySelector'
import ProductCard from '@/components/product/ProductCard'

export default function ProductPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = getProductById(productId)
  const { addToCart } = useCart()

  const [selectedTone, setSelectedTone] = useState(product?.tone?.[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [wishlist, setWishlist] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0])
      setQuantity(1)
      setActiveImage(0)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [product])

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [product, activeImage])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-3xl">Product Not Found</h1>
        <p className="mt-2 text-stone">
          We couldn't find that piece. Explore our collection instead.
        </p>
        <Button variant="primary" className="mt-6" onClick={() => navigate('/shop')}>
          Shop All
        </Button>
      </div>
    )
  }

  const accordionItems = [
    {
      title: 'Description',
      content: (
        <div>
          <p className="mb-3">{product.description}</p>
          <ul className="list-disc space-y-1 pl-5">
            {product.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: 'Materials & Care',
      content: (
        <ul className="list-disc space-y-1 pl-5">
          {product.care.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <ul className="list-disc space-y-1 pl-5">
          {product.shipping.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
  ]

  const related = getRelatedProducts(product.id)

  const handleAddToCart = () => {
    addToCart(product, { tone: selectedTone, quantity })
  }

  return (
    <div ref={containerRef} className="bg-warm-white pb-20">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone hover:text-ink transition-colors"
        >
          <ChevronLeft size={14} />
          Back
        </button>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-champagne">
              <img
                data-strk-img-id={`product-main-${product.id}-${activeImage}`}
                data-strk-img={`[product-name-${product.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="h-full w-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-warm-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="grid grid-cols-5 gap-3">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`relative aspect-square overflow-hidden bg-champagne transition-all ${
                    activeImage === index
                      ? 'ring-1 ring-ink'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    data-strk-img-id={`product-thumb-${product.id}-${index}`}
                    data-strk-img={`[product-name-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col lg:py-10">
            <span id={`product-name-${product.id}`} className="sr-only">
              {product.name}
            </span>
            <h1 className="text-product font-serif text-3xl font-medium text-ink md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 font-serif text-3xl text-ink">
              {formatPrice(product.price)}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} size={16} />
              <span className="text-sm text-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-6 leading-relaxed text-stone">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-stone">
                Tone
              </span>
              <div className="mt-3 flex gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                      selectedTone === tone
                        ? 'border-ink bg-ink text-warm-white'
                        : 'border-line text-ink hover:border-ink'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and actions */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <QuantitySelector value={quantity} onChange={setQuantity} />
              <Button
                variant="primary"
                className="flex-1"
                onClick={handleAddToCart}
              >
                Add to Cart — {formatPrice(product.price * quantity)}
              </Button>
              <button
                type="button"
                onClick={() => setWishlist((w) => !w)}
                className={`flex h-12 w-12 items-center justify-center border transition-colors ${
                  wishlist
                    ? 'border-gold bg-gold text-white'
                    : 'border-line text-ink hover:border-gold hover:text-gold'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart size={18} fill={wishlist ? 'currentColor' : 'none'} />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2 border-t border-line pt-6">
              {[
                { icon: Truck, text: 'Free shipping over $75' },
                { icon: RotateCcw, text: '30-day returns' },
                { icon: ShieldCheck, text: 'Hypoallergenic' },
              ].map((item) => (
                <div key={item.text} className="text-center">
                  <item.icon
                    size={20}
                    className="mx-auto mb-2 text-gold"
                    strokeWidth={1.5}
                  />
                  <span className="text-[10px] uppercase tracking-wider text-stone">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} defaultOpen={[0]} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="mx-auto max-w-7xl px-4 pt-16 md:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-serif text-3xl text-ink md:text-4xl">
          You May Also Like
        </h2>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} query={`[product-name-${p.id}]`} />
          ))}
        </div>
      </section>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, Heart, Truck, RotateCcw, Shield } from 'lucide-react'
import StarRating from '@/components/StarRating.jsx'
import Accordion from '@/components/Accordion.jsx'
import ProductCard from '@/components/ProductCard.jsx'
import { useProductBySlug, useProducts } from '@/hooks/useProducts.js'
import { useCart } from '@/context/CartContext.jsx'
import { getProductImages } from '@/data/productImages.js'
import { cn, formatPrice } from '@/lib/utils.js'

export default function ProductDetail() {
  const { slug } = useParams()
  const { product, status } = useProductBySlug(slug)
  const { products } = useProducts()
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const galleryRef = useRef(null)

  const data = product?.data || {}
  const variants = data.tone_variants || ['gold']
  const images = getProductImages(slug)
  const galleryImages = images?.gallery || []
  const thumbImages = images?.thumbs || []

  useEffect(() => {
    if (variants.length && !selectedVariant) {
      setSelectedVariant(variants[0])
    }
  }, [variants, selectedVariant])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setSelectedVariant('')
    setQuantity(1)
    setActiveImage(0)
  }, [slug])

  const relatedProducts = products
    .map((p) => ({ ...p, ...p.data }))
    .filter((p) => p.id !== product?.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    if (!product) return
    addItem({ ...data, id: product.id }, selectedVariant, quantity)
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-background pt-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="aspect-square animate-pulse bg-surface" />
            <div className="space-y-6">
              <div className="h-8 w-2/3 animate-pulse bg-surface" />
              <div className="h-6 w-24 animate-pulse bg-surface" />
              <div className="h-24 w-full animate-pulse bg-surface" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (status === 'error' || !product) {
    return (
      <div className="min-h-screen bg-background pt-32 text-center">
        <p className="font-serif text-xl uppercase tracking-widest-custom">Product not found</p>
        <Link to="/shop" className="mt-4 inline-block text-sm text-accent hover:underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const accordionItems = [
    { title: 'Description', content: data.description },
    { title: 'Materials & Care', content: data.materials },
    { title: 'Shipping & Returns', content: data.shipping_returns },
  ]

  return (
    <div className="min-h-screen bg-background pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Gallery */}
          <div ref={galleryRef}>
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              {galleryImages[activeImage] ? (
                <img
                  src={galleryImages[activeImage]}
                  alt={data.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-surface" />
              )}
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {thumbImages.map((url, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    'relative aspect-square overflow-hidden bg-surface',
                    activeImage === index ? 'ring-1 ring-accent' : 'opacity-70 hover:opacity-100'
                  )}
                >
                  <img
                    src={url}
                    alt={`${data.name} view ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-xs uppercase tracking-widest text-accent">{data.category}</p>
            <h1 className="font-serif text-3xl font-normal uppercase tracking-widest-custom text-foreground md:text-4xl">
              {data.name}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <span className="font-serif text-2xl text-foreground">{formatPrice(data.price)}</span>
              {data.compare_price > 0 && (
                <span className="text-lg text-muted line-through">
                  {formatPrice(data.compare_price)}
                </span>
              )}
            </div>

            <div className="mt-3">
              <StarRating rating={data.rating} count={data.review_count} />
            </div>

            <p className="mt-6 leading-relaxed text-muted">{data.description}</p>

            {/* Variant selector */}
            {variants.length > 0 && (
              <div className="mt-8">
                <span className="mb-3 block text-xs uppercase tracking-widest text-muted">
                  Metal Tone
                </span>
                <div className="flex flex-wrap gap-3">
                  {variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={cn(
                        'rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition-all',
                        selectedVariant === variant
                          ? 'border-accent bg-accent text-background'
                          : 'border-muted-subtle text-foreground hover:border-accent'
                      )}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <span className="mb-3 block text-xs uppercase tracking-widest text-muted">
                Quantity
              </span>
              <div className="inline-flex items-center border border-muted-subtle/40">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-muted hover:text-foreground"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-muted hover:text-foreground"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-accent py-4 text-xs font-medium uppercase tracking-widest text-background transition-colors hover:bg-accent-hover"
              >
                Add to Cart
              </button>
              <button
                className="border border-muted-subtle/40 px-4 text-muted transition-colors hover:text-accent"
                aria-label="Add to wishlist"
              >
                <Heart size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Trust mini bar */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-muted-subtle/30 pt-6">
              <div className="text-center">
                <Truck size={18} strokeWidth={1.5} className="mx-auto mb-2 text-accent" />
                <p className="text-[10px] uppercase tracking-wider text-muted">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw size={18} strokeWidth={1.5} className="mx-auto mb-2 text-accent" />
                <p className="text-[10px] uppercase tracking-wider text-muted">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield size={18} strokeWidth={1.5} className="mx-auto mb-2 text-accent" />
                <p className="text-[10px] uppercase tracking-wider text-muted">Hypoallergenic</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="py-20 md:py-28">
            <h2 className="mb-10 text-center font-serif text-2xl uppercase tracking-widest-custom text-foreground md:text-3xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

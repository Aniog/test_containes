import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Star, Minus, Plus, Heart, Truck, RotateCcw } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductGallery from '@/components/product/ProductGallery'
import Accordion from '@/components/product/Accordion'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = useMemo(() => getProductBySlug(slug), [slug])
  const { addToCart } = useCart()
  const [variant, setVariant] = useState(product?.variants?.[0] || 'Gold')
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (product) {
      setVariant(product.variants[0])
      setQty(1)
      setAdded(false)
    }
  }, [product])

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frame)
  }, [slug])

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <p className="font-serif text-xl">Product not found.</p>
        <Link to="/shop" className="text-velmora-accent mt-4 inline-block">
          Continue shopping
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.slug)
  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders over $50. We ship within 1–2 business days. Returns accepted within 30 days of delivery for unworn items in original packaging.',
    },
  ]

  const handleAdd = () => {
    addToCart(product, variant, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="text-xs text-velmora-muted font-sans">
          <Link to="/" className="hover:text-velmora-accent transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-accent transition-colors">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-text">{product.name}</span>
        </nav>
      </div>

      {/* Product */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery product={product} />

          <div className="md:sticky md:top-28 md:self-start">
            <p
              id={`product-detail-category`}
              className="text-[10px] uppercase tracking-[0.25em] text-velmora-muted mb-2"
            >
              {product.category}
            </p>
            <h1
              id={`product-detail-name`}
              className="font-serif text-3xl md:text-4xl tracking-[0.12em] uppercase text-velmora-text"
            >
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-velmora-muted">
                {product.reviewCount} reviews
              </span>
            </div>
            <p className="mt-4 text-2xl font-serif text-velmora-text">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-6 text-velmora-muted leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-velmora-text">
                Tone
              </span>
              <div className="flex flex-wrap gap-3 mt-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 border font-sans text-xs uppercase tracking-[0.12em] transition-colors ${
                      variant === v
                        ? 'border-velmora-text bg-velmora-text text-velmora-bg'
                        : 'border-velmora-border text-velmora-text hover:border-velmora-text'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-velmora-border">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-velmora-bg transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="p-3 hover:bg-velmora-bg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className={`flex-1 py-3.5 font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-colors ${
                  added
                    ? 'bg-velmora-text text-white'
                    : 'bg-velmora-accent text-white hover:bg-velmora-accent-hover'
                }`}
              >
                {added ? 'Added to Bag' : 'Add to Cart'}
              </button>
              <button
                type="button"
                className="p-3.5 border border-velmora-border text-velmora-text hover:border-velmora-text transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Trust mini */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 text-xs text-velmora-muted">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-velmora-accent" />
                Free shipping over $50
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-velmora-accent" />
                30-day returns
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-velmora-surface border-t border-velmora-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-text tracking-wide mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                imgId={`related-${p.id}-img`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

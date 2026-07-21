import { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Heart, Share2, ChevronLeft, Check, Truck, RefreshCw, ShieldCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductBySlug, getRelatedProducts, formatTone } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CartDrawer } from '@/components/layout/CartDrawer'
import { Newsletter } from '@/components/layout/Newsletter'
import { StarRating } from '@/components/ui/StarRating'
import { QuantitySelector } from '@/components/ui/QuantitySelector'
import { Accordion } from '@/components/ui/Accordion'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'
import { ProductCard } from '@/components/shop/ProductCard'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(slug)
  const { addItem, openCart } = useCart()

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!product) return
    setSelectedImageIndex(0)
    setSelectedVariant(product.variants.find((v) => v.inStock) || product.variants[0])
    setQuantity(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [product])

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product, selectedImageIndex])

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-4 text-center">
        <h1 className="font-serif text-4xl text-espresso">Product Not Found</h1>
        <p className="mt-4 text-taupe">We couldn't find the piece you're looking for.</p>
        <Link to="/shop" className="mt-6 bg-espresso px-8 py-3 text-xs uppercase tracking-wider text-cream-light hover:bg-mocha">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = getRelatedProducts(product.id, 4)
  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.care },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  const handleAddToCart = () => {
    if (!selectedVariant.inStock) return
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
    openCart()
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-cream">
      <Navbar />
      <CartDrawer />

      <main className="pt-16">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-taupe transition-colors hover:text-gold"
          >
            <ChevronLeft className="h-4 w-4" /> Back
          </button>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Gallery */}
            <div className="flex flex-col-reverse gap-4 md:flex-row">
              <div className="flex flex-row gap-3 overflow-x-auto md:flex-col md:overflow-visible">
                {product.images.map((image, index) => (
                  <button
                    key={`${product.id}-thumb-${index}`}
                    type="button"
                    onClick={() => setSelectedImageIndex(index)}
                    className={cn(
                      'relative h-20 w-20 flex-shrink-0 overflow-hidden bg-cream-dark ring-1 transition-all duration-200 md:h-24 md:w-24',
                      selectedImageIndex === index ? 'ring-gold' : 'ring-transparent hover:ring-champagne'
                    )}
                    aria-label={`View image ${index + 1}`}
                  >
                    <ResponsiveImage
                      imgId={`product-thumb-${product.id}-${index}`}
                      query={image.query}
                      ratio="1x1"
                      width={200}
                      alt={`${product.name} view ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-cream-dark md:aspect-auto md:min-h-[560px]">
                <ResponsiveImage
                  imgId={`product-main-${product.id}-${selectedImageIndex}`}
                  query={product.images[selectedImageIndex].query}
                  ratio="4x5"
                  width={900}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{product.category}</p>
              <h1 className="mt-3 font-serif text-3xl uppercase tracking-widest-plus text-espresso sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-3">
                <StarRating rating={product.rating} size={16} />
                <span className="text-sm text-warm-gray">{product.rating} ({product.reviewCount} reviews)</span>
              </div>

              <p className="mt-5 font-serif text-2xl text-espresso sm:text-3xl">
                {formatPrice(selectedVariant.price)}
              </p>

              <p className="mt-5 text-sm leading-relaxed text-taupe sm:text-base">
                {product.shortDescription}
              </p>

              {/* Variant selector */}
              <div className="mt-8">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-espresso">
                  Metal Tone{selectedVariant && `: ${formatTone(selectedVariant.tone)}`}
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.tone}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      disabled={!variant.inStock}
                      className={cn(
                        'min-w-[96px] rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] transition-all duration-200',
                        selectedVariant.tone === variant.tone
                          ? 'border-espresso bg-espresso text-cream-light'
                          : 'border-champagne bg-transparent text-espresso hover:border-gold',
                        !variant.inStock && 'cursor-not-allowed border-champagne text-warm-gray line-through opacity-60'
                      )}
                    >
                      {variant.label}
                      {!variant.inStock && ' — Sold Out'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to cart */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <QuantitySelector value={quantity} onChange={setQuantity} />
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={!selectedVariant.inStock}
                  className={cn(
                    'flex flex-1 items-center justify-center gap-2 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-cream-light transition-all duration-300',
                    selectedVariant.inStock ? 'bg-gold hover:bg-gold-dark' : 'bg-warm-gray cursor-not-allowed'
                  )}
                >
                  {added ? (
                    <>
                      <Check className="h-4 w-4" /> Added to Cart
                    </>
                  ) : (
                    <>{selectedVariant.inStock ? 'Add to Cart' : 'Sold Out'}</>
                  )}
                </button>
                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="flex h-12 w-12 items-center justify-center border border-champagne text-taupe transition-colors hover:border-gold hover:text-gold"
                >
                  <Heart className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Share product"
                  className="flex h-12 w-12 items-center justify-center border border-champagne text-taupe transition-colors hover:border-gold hover:text-gold"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-2 border-t border-champagne pt-6">
                <div className="flex flex-col items-center gap-2 text-center">
                  <Truck className="h-5 w-5 text-gold" />
                  <span className="text-[10px] font-medium uppercase tracking-wide text-taupe">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <RefreshCw className="h-5 w-5 text-gold" />
                  <span className="text-[10px] font-medium uppercase tracking-wide text-taupe">30-Day Returns</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <ShieldCheck className="h-5 w-5 text-gold" />
                  <span className="text-[10px] font-medium uppercase tracking-wide text-taupe">Hypoallergenic</span>
                </div>
              </div>

              <div className="mt-10">
                <Accordion items={accordionItems} />
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="border-t border-champagne bg-cream-light py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-2xl tracking-wide text-espresso sm:text-3xl">
              You May Also Like
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        <Newsletter compact />
      </main>
      <Footer />
    </div>
  )
}

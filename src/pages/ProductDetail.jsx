import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useStrkImages, PLACEHOLDER } from '@/hooks/useStrkImages'
import { formatPrice, cn } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem, openCart } = useCart()
  const ref = useStrkImages([id])

  const [variant, setVariant] = useState(product?.variants?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    setVariant(product?.variants?.[0] || 'Gold')
    setQuantity(1)
    setActiveImage(0)
    window.scrollTo(0, 0)
  }, [id, product])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-5">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <Link
          to="/shop"
          className="text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-deep"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const handleAddToCart = () => {
    addItem(product, { variant, quantity })
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materials },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-stone">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:max-h-[600px] md:overflow-y-auto no-scrollbar">
              {product.galleryIds.map((gid, i) => (
                <button
                  key={gid}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    'shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden bg-cream border transition-colors',
                    activeImage === i ? 'border-gold' : 'border-sand hover:border-stone'
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    data-strk-img-id={gid}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src={PLACEHOLDER}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-[4/5] overflow-hidden bg-cream">
              <img
                data-strk-img-id={`${product.galleryIds[activeImage]}-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src={PLACEHOLDER}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink uppercase tracking-[0.08em] leading-tight"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <StarRating rating={product.rating} />
              <span className="text-sm text-stone">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-2xl md:text-3xl text-ink mt-5">
              {formatPrice(product.price)}
            </p>

            <p
              id={product.descId}
              className="text-stone text-base mt-5 leading-relaxed max-w-md"
            >
              {product.short}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-stone mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      'px-6 py-3 text-xs uppercase tracking-[0.15em] border transition-colors duration-300',
                      variant === v
                        ? 'border-ink bg-ink text-ivory'
                        : 'border-sand text-ink hover:border-ink'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-stone mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-sand">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  className="px-4 py-3 text-ink hover:text-gold transition-colors"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm text-ink min-w-[3ch] text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  className="px-4 py-3 text-ink hover:text-gold transition-colors"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full mt-8 bg-gold text-ivory text-xs uppercase tracking-[0.2em] py-5 hover:bg-gold-deep transition-colors duration-300"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            <p className="text-xs text-stone mt-4 text-center">
              Free worldwide shipping · 30-day returns · Hypoallergenic
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordionItems} defaultOpen={0} />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

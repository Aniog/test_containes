import { useEffect, useRef, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import Accordion from '@/components/ui/Accordion'

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null)
  const related = products.filter(p => p.id !== currentId).slice(0, 4)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [currentId])

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-divider">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {related.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.slug}`}>
                <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
                  <img
                    data-strk-img-id={`related-${product.imgId}`}
                    data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3
                  id={`related-title-${product.id}`}
                  className="font-sans text-xs tracking-product uppercase font-semibold text-charcoal group-hover:text-champagne-dark transition-colors duration-300"
                >
                  {product.name}
                </h3>
                <p id={`related-desc-${product.id}`} className="sr-only">{product.shortDescription}</p>
                <p className="font-sans text-sm font-semibold text-charcoal mt-1">${product.price}</p>
              </Link>
              <button
                onClick={() => addItem(product)}
                className="mt-3 w-full border border-divider text-charcoal font-sans text-[10px] tracking-widest uppercase font-medium py-2.5 hover:border-champagne hover:text-champagne transition-colors duration-300 opacity-0 group-hover:opacity-100"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const product = products.find(p => p.slug === slug)

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug])

  useEffect(() => {
    setSelectedVariant(product?.variants?.[0] || 'Gold')
    setQuantity(1)
    setActiveImg(0)
    setAdded(false)
  }, [slug, product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-parchment pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-charcoal">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block font-sans text-xs tracking-widest uppercase text-champagne">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const images = [
    { id: `pdp-main-${product.imgId}`, query: `[pdp-desc] [pdp-title] gold jewelry` },
    { id: `pdp-alt1-${product.imgId2}`, query: `[pdp-title] jewelry detail close-up` },
    { id: `pdp-alt2-${product.id}-c`, query: `[pdp-title] jewelry worn on model` },
  ]

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-sans text-xs text-warm-stone hover:text-champagne transition-colors duration-300"
          >
            <ArrowLeft size={13} strokeWidth={1.5} />
            Back
          </button>
          <span className="text-divider">·</span>
          <Link to="/shop" className="font-sans text-xs text-warm-stone hover:text-champagne transition-colors duration-300">
            Shop
          </Link>
          <span className="text-divider">·</span>
          <span className="font-sans text-xs text-charcoal capitalize">{product.category}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-300 ${activeImg === i ? 'border-champagne' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-ivory aspect-[3/4]">
              {images.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${activeImg === i ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-obsidian text-ivory font-sans text-[10px] tracking-widest uppercase px-3 py-1.5">
                  {product.badge}
                </div>
              )}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-sans text-xs tracking-widest uppercase text-champagne font-medium mb-3 capitalize">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id="pdp-title"
              className="font-sans text-sm md:text-base tracking-product uppercase font-bold text-charcoal leading-tight"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-3xl text-charcoal mt-3 font-light">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < Math.floor(product.rating) ? 'fill-champagne text-champagne' : 'text-divider'}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-warm-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-divider my-6" />

            {/* Short description */}
            <p id="pdp-desc" className="font-sans text-sm text-warm-stone leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-widest uppercase font-semibold text-charcoal mb-3">
                Finish: <span className="text-champagne-dark">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-sans text-xs tracking-wider uppercase font-medium border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-champagne bg-champagne text-obsidian'
                        : 'border-divider text-charcoal hover:border-champagne hover:text-champagne'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-widest uppercase font-semibold text-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-warm-stone hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-sans text-sm font-medium text-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-warm-stone hover:text-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`mt-8 w-full flex items-center justify-center gap-3 font-sans text-xs tracking-widest uppercase font-semibold py-4 transition-all duration-300 ${
                added
                  ? 'bg-charcoal text-ivory'
                  : 'bg-champagne text-obsidian hover:bg-champagne-dark'
              }`}
            >
              <ShoppingBag size={15} strokeWidth={2} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-5 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[11px] tracking-wider text-warm-stone flex items-center gap-1">
                  <span className="text-champagne">✦</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  )
}

import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronRight, Minus, Plus, Heart } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import ProductCard from '@/components/products/ProductCard'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [wishlisted, setWishlisted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0])
      setQuantity(1)
      setActiveImage(0)
      setOpenAccordion('description')
    }
  }, [product])

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => cancelAnimationFrame(raf)
  }, [id, activeImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal-800 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  const accordionSections = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `${product.details}\n\n${product.care}`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ]

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 pb-16 md:pb-24">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24 mb-8">
        <nav className="flex items-center gap-2 text-xs font-sans text-charcoal-400">
          <Link to="/" className="hover:text-charcoal-700 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-charcoal-700 transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal-700">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible scrollbar-hide">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 border-2 transition-all duration-300 ${
                    activeImage === i
                      ? 'border-gold-500'
                      : 'border-charcoal-100 hover:border-charcoal-300'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[${product.id}-name] [${product.id}-desc] gold jewelry product`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-stone-100 overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-${activeImage}`}
                data-strk-img={`[${product.id}-name] [${product.id}-desc] gold jewelry elegant product photo dark background`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.images[activeImage]?.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:py-4">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block bg-gold-100 text-gold-700 text-[10px] font-sans font-semibold tracking-widest uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            {/* Product name */}
            <h1 className="text-product-name text-2xl md:text-3xl lg:text-4xl text-charcoal-800 mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-2xl text-charcoal-800">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="font-sans text-base text-charcoal-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`${
                      i < Math.round(product.rating)
                        ? 'text-gold-500 fill-gold-500'
                        : 'text-charcoal-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-sans text-charcoal-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Short description */}
            <p className="font-sans text-sm text-charcoal-500 leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {/* Divider */}
            <div className="hairline-divider mb-8" />

            {/* Variant selector */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-charcoal-600 mb-3">
                Tone: <span className="font-medium text-charcoal-800">{selectedVariant?.label}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`relative px-6 py-2.5 border text-xs font-sans font-medium tracking-widest uppercase transition-all duration-300 ${
                      selectedVariant?.id === variant.id
                        ? 'border-charcoal-800 bg-charcoal-800 text-cream-50'
                        : 'border-charcoal-200 text-charcoal-600 hover:border-charcoal-400'
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-charcoal-600 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-charcoal-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="px-5 text-sm font-medium text-charcoal-800 min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mb-8">
              <button onClick={handleAddToCart} className="flex-1 btn-primary">
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`p-4 border transition-all duration-300 ${
                  wishlisted
                    ? 'border-gold-500 text-gold-500 bg-gold-50'
                    : 'border-charcoal-200 text-charcoal-400 hover:border-charcoal-400 hover:text-charcoal-700'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart size={20} fill={wishlisted ? 'currentColor' : 'none'} strokeWidth={1.5} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans text-charcoal-400 mb-10">
              <span>Free Shipping</span>
              <span>·</span>
              <span>30-Day Returns</span>
              <span>·</span>
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="border-t border-charcoal-100">
              {accordionSections.map((section) => (
                <div key={section.id} className="border-b border-charcoal-100">
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="font-sans text-xs tracking-widest uppercase text-charcoal-700 group-hover:text-charcoal-900 transition-colors">
                      {section.title}
                    </span>
                    <span className="text-charcoal-400 transition-transform duration-300" style={{
                      transform: openAccordion === section.id ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}>
                      <Plus size={16} />
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === section.id ? 'max-h-64 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="font-sans text-sm text-charcoal-500 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20 md:mt-28">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold-500 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

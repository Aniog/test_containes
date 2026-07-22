import { useState, useMemo, useRef, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, Minus, Plus, ChevronRight, ChevronLeft, Check } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const product = products.find((p) => p.id === id)
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants.find((v) => v.available) || product?.variants[0]
  )
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return products
      .filter((p) => p.id !== product.id)
      .slice(0, 4)
  }, [product])

  useEffect(() => {
    if (!product) return
    const raf = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(raf)
  }, [product, activeImage])

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h1 className="font-serif text-heading-2 text-charcoal mb-4">
          Product Not Found
        </h1>
        <Link to="/shop" className="btn-outline inline-block">
          Back to Shop
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? '' : section)
  }

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `${product.materials}\n\n${product.care}`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ]

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      <div className="container-narrow py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-body-sm text-warm-gray mb-8">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-square bg-cream-dark rounded overflow-hidden mb-4">
              <img
                data-strk-img-id={`${product.id}-detail-${activeImage}`}
                data-strk-img={`[pd-name] [pd-subtitle] gold jewelry product detail`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 rounded overflow-hidden border-2 transition-colors ${
                    activeImage === idx
                      ? 'border-gold'
                      : 'border-transparent hover:border-charcoal/20'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.id}-thumb-${idx}`}
                    data-strk-img={`[pd-name] [pd-subtitle] jewelry detail close-up`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="text-caption uppercase tracking-mega-wide text-gold mb-3">
              {product.category}
            </p>

            <h1
              id="pd-name"
              className="font-serif text-heading-1 text-charcoal uppercase tracking-ultra-wide mb-2"
            >
              {product.name}
            </h1>

            <p id="pd-subtitle" className="text-body text-warm-gray mb-4">
              {product.subtitle}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-warm-gray-light'}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-body-sm text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-heading-2 text-charcoal mb-6">
              ${product.price}
            </p>

            {/* Short description */}
            <p className="text-body text-warm-gray leading-relaxed mb-8 max-w-md">
              {product.description.split('.')[0]}.
            </p>

            <div className="hairline-divider mb-8" />

            {/* Variant selector */}
            <div className="mb-8">
              <p className="text-caption uppercase tracking-ultra-wide text-charcoal font-medium mb-3">
                Tone: {selectedVariant?.label}
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => variant.available && setSelectedVariant(variant)}
                    disabled={!variant.available}
                    className={`variant-pill px-5 py-2.5 text-body-sm border rounded-full transition-all duration-200 ${
                      selectedVariant?.id === variant.id
                        ? 'border-gold bg-gold/5 text-charcoal active'
                        : variant.available
                          ? 'border-charcoal/20 text-warm-gray hover:border-charcoal/40'
                          : 'border-charcoal/10 text-warm-gray-light cursor-not-allowed line-through'
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-caption uppercase tracking-ultra-wide text-charcoal font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-charcoal/15 rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-charcoal hover:text-gold transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-body font-medium text-charcoal min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-charcoal hover:text-gold transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedVariant?.available}
              className="btn-gold w-full text-center flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Check size={16} strokeWidth={2} />
              Add to Bag — ${product.price * quantity}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((text) => (
                <span key={text} className="text-body-sm text-warm-gray flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-gold rounded-full" />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 lg:mt-24 max-w-3xl">
          <div className="hairline-divider" />
          {accordions.map((acc) => (
            <div key={acc.id}>
              <button
                onClick={() => toggleAccordion(acc.id)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <h3 className="font-serif text-heading-3 text-charcoal tracking-wide">
                  {acc.title}
                </h3>
                <span className="text-charcoal group-hover:text-gold transition-colors ml-4">
                  {openAccordion === acc.id ? (
                    <Minus size={18} strokeWidth={1.5} />
                  ) : (
                    <Plus size={18} strokeWidth={1.5} />
                  )}
                </span>
              </button>
              {openAccordion === acc.id && (
                <div className="pb-6 animate-fade-in">
                  <p className="text-body text-warm-gray leading-relaxed whitespace-pre-line">
                    {acc.content}
                  </p>
                </div>
              )}
              <div className="hairline-divider" />
            </div>
          ))}
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 lg:mt-24">
            <div className="text-center mb-10">
              <h2 className="font-serif text-heading-2 text-charcoal">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/product/${rp.id}`}
                  className="group"
                >
                  <div className="product-image-wrapper aspect-square bg-cream-dark rounded overflow-hidden mb-3">
                    <img
                      data-strk-img-id={`${rp.id}-related`}
                      data-strk-img={`[rel-name-${rp.id}] jewelry product`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={rp.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    id={`rel-name-${rp.id}`}
                    className="text-product-name text-body-sm mb-1 group-hover:text-gold transition-colors"
                  >
                    {rp.name}
                  </h3>
                  <p className="text-body-sm font-semibold text-charcoal">
                    ${rp.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

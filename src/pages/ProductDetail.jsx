import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-2 text-velmora-text mb-4">Product Not Found</h1>
          <Link to="/collection" className="btn-primary">
            Browse Collection
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  // If not enough related in same category, add from other categories
  if (relatedProducts.length < 4) {
    const others = products
      .filter(p => p.id !== product.id && p.category !== product.category)
      .slice(0, 4 - relatedProducts.length)
    relatedProducts.push(...others)
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  const accordions = [
    {
      id: 'description',
      label: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      label: 'Materials & Care',
      content: product.details + '\n\n' + product.care,
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      content: product.shipping,
    },
  ]

  const productImages = [
    { id: product.imgId, alt: product.name },
    { id: product.secondaryImgId, alt: `${product.name} detail` },
  ]

  return (
    <div ref={containerRef} className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="container-velmora py-4">
        <nav className="flex items-center gap-2 text-xs text-velmora-text-light">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-velmora-gold transition-colors">Collection</Link>
          <span>/</span>
          <span className="text-velmora-text">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="container-velmora py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-3">
              {productImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 border-2 overflow-hidden transition-colors ${
                    activeImage === idx
                      ? 'border-velmora-gold'
                      : 'border-velmora-border hover:border-velmora-border-dark'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product thumbnail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-square bg-velmora-surface-hover overflow-hidden">
              <img
                data-strk-img-id={productImages[activeImage].id}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product detail`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={productImages[activeImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="nav-link text-velmora-gold mb-3">{product.category}</p>
            <h1 className="product-name text-2xl md:text-3xl mb-4 text-velmora-text">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-text-secondary">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-velmora-text mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="text-velmora-text-secondary leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-sm font-medium text-velmora-text mb-3">
                Tone: <span className="text-velmora-text-secondary">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-sm font-medium border transition-colors ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-border text-velmora-text hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-medium text-velmora-text mb-3">Quantity</p>
              <div className="inline-flex items-center border border-velmora-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velmora-text-secondary hover:text-velmora-text transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium text-velmora-text">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velmora-text-secondary hover:text-velmora-text transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary py-4 text-sm justify-center"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-velmora-border">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: '18K Gold Plated' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <Icon size={18} className="mx-auto mb-2 text-velmora-gold" />
                  <span className="text-xs text-velmora-text-secondary">{label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-velmora-border">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-velmora-border">
                  <button
                    onClick={() => toggleAccordion(acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-velmora-text">{acc.label}</span>
                    {openAccordion === acc.id ? (
                      <ChevronUp size={16} className="text-velmora-text-secondary" />
                    ) : (
                      <ChevronDown size={16} className="text-velmora-text-secondary" />
                    )}
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4 text-sm text-velmora-text-secondary leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-velmora"><div className="divider" /></div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-section-mobile md:py-section">
          <div className="container-velmora">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-velmora-text">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-light-gray">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-sans uppercase tracking-[0.15em] text-charcoal">{title}</span>
        {isOpen ? <ChevronUp size={16} className="text-warm-gray" /> : <ChevronDown size={16} className="text-warm-gray" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-warm-gray leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [product, setProduct] = useState(null)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const found = products.find(p => p.id === id)
    setProduct(found)
    setSelectedVariant('gold')
    setQuantity(1)
    setActiveImage(0)
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (containerRef.current && product) {
      requestAnimationFrame(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
    }
  }, [product, activeImage])

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <p className="text-warm-gray">Product not found</p>
      </div>
    )
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  return (
    <main ref={containerRef} className="min-h-screen bg-cream pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-warm-gray">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-ivory overflow-hidden">
              <img
                data-strk-img-id={`${product.imgId}-detail-${activeImage}`}
                data-strk-img={activeImage === 0 
                  ? `[${product.descId}] [${product.titleId}] gold jewelry product photography detailed`
                  : `[${product.descId}] [${product.titleId}] gold jewelry worn model closeup`
                }
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {[0, 1].map(idx => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 bg-ivory overflow-hidden border-2 transition-colors ${
                    activeImage === idx ? 'border-gold' : 'border-transparent hover:border-light-gray'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${idx}`}
                    data-strk-img={idx === 0 
                      ? `[${product.titleId}] gold jewelry product`
                      : `[${product.titleId}] gold jewelry worn`
                    }
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
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.15em] text-charcoal mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                    className={i < Math.floor(product.rating) ? 'text-gold' : 'text-light-gray'}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-gray">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-charcoal mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-sm text-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs font-sans uppercase tracking-[0.15em] text-charcoal mb-3">
                Tone: <span className="text-warm-gray capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-[0.15em] border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'bg-charcoal text-cream border-charcoal'
                        : 'bg-transparent text-charcoal border-light-gray hover:border-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs font-sans uppercase tracking-[0.15em] text-charcoal mb-3">Quantity</p>
              <div className="inline-flex items-center border border-light-gray">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart button */}
            <button onClick={handleAddToCart} className="w-full btn-primary py-4 text-center mb-6">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 py-4 border-y border-light-gray mb-8">
              <div className="flex items-center gap-1.5 text-warm-gray">
                <Truck size={14} strokeWidth={1.5} />
                <span className="text-[11px]">Free Shipping</span>
              </div>
              <div className="flex items-center gap-1.5 text-warm-gray">
                <RotateCcw size={14} strokeWidth={1.5} />
                <span className="text-[11px]">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-1.5 text-warm-gray">
                <Shield size={14} strokeWidth={1.5} />
                <span className="text-[11px]">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="space-y-0">
              <Accordion title="Description" defaultOpen>
                <p>{product.descriptionLong}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-16 md:py-24 bg-ivory section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-3">
            You May Also Like
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(item => (
              <Link key={item.id} to={`/product/${item.id}`} className="group block">
                <div className="aspect-[3/4] bg-ivory overflow-hidden">
                  <img
                    data-strk-img-id={`${item.imgId}-related`}
                    data-strk-img={`[${item.descId}] [${item.titleId}] gold jewelry product`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-charcoal mt-4 group-hover:text-gold transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-charcoal mt-1">${item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

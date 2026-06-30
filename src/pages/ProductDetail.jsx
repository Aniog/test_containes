import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/home/ProductCard'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug) || products[0]
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]?.value || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  useEffect(() => {
    setActiveImage(0)
    setSelectedVariant(product.variants[0]?.value || 'gold')
    setQuantity(1)
    window.scrollTo(0, 0)
  }, [product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [product, activeImage])

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const accordions = [
    { key: 'description', label: 'Description', content: product.longDescription || product.description },
    { key: 'care', label: 'Materials & Care', content: product.care },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-velmora-muted">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-cream">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-20 lg:w-20 lg:h-24 flex-shrink-0 rounded overflow-hidden border-2 transition-colors ${
                    activeImage === idx ? 'border-velmora-gold' : 'border-velmora-border/30 hover:border-velmora-border'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.id}-thumb-${idx}`}
                    data-strk-img={`[${product.id}-name] ${product.name} jewelry ${idx === 0 ? 'product' : 'detail worn'}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] rounded-lg overflow-hidden bg-velmora-surface">
              <img
                data-strk-img-id={`${product.id}-main-${activeImage}`}
                data-strk-img={`[${product.id}-name] ${product.name} jewelry ${activeImage === 0 ? 'product display' : 'detail worn closeup'}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block bg-velmora-gold/10 text-velmora-gold text-[10px] tracking-wider uppercase px-3 py-1 rounded mb-4 border border-velmora-gold/20">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-2xl md:text-4xl tracking-widest-xl uppercase text-velmora-cream leading-tight">
              {product.name}
            </h1>

            <p className="text-2xl md:text-3xl text-velmora-gold font-light mt-3 font-serif">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="text-sm text-velmora-muted leading-relaxed mt-5 max-w-lg">
              {product.description}
            </p>

            <div className="w-full h-px bg-velmora-border/20 my-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-wider uppercase text-velmora-muted mb-3">
                Tone: <span className="text-velmora-cream capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.value}
                    onClick={() => setSelectedVariant(v.value)}
                    className={`px-5 py-2 text-sm tracking-wider transition-all duration-200 rounded ${
                      selectedVariant === v.value
                        ? 'bg-velmora-gold text-velmora-bg'
                        : 'border border-velmora-border/40 text-velmora-muted hover:border-velmora-gold/60 hover:text-velmora-cream'
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs tracking-wider uppercase text-velmora-muted mb-3">Quantity</p>
              <div className="inline-flex items-center border border-velmora-border/40 rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2.5 text-velmora-muted hover:text-velmora-cream transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 py-2.5 text-sm text-velmora-cream min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2.5 text-velmora-muted hover:text-velmora-cream transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-velmora-gold text-velmora-bg text-sm font-medium tracking-wider uppercase hover:bg-velmora-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-velmora-gold/20 rounded"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust icons */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1.5 text-center">
                  <item.icon size={16} className="text-velmora-gold" />
                  <span className="text-[10px] tracking-wider uppercase text-velmora-muted">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 space-y-0 border-t border-velmora-border/20">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-velmora-border/20">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm tracking-wider uppercase text-velmora-cream">{acc.label}</span>
                    {openAccordion === acc.key ? (
                      <ChevronUp size={16} className="text-velmora-gold" />
                    ) : (
                      <ChevronDown size={16} className="text-velmora-muted" />
                    )}
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4 text-sm text-velmora-muted leading-relaxed animate-fade-in">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-28">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-cream tracking-wide">
                You May Also Like
              </h2>
              <div className="w-12 h-px bg-velmora-gold/40 mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

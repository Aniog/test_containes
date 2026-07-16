import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveImage(0)
    setSelectedVariant('Gold')
    setQuantity(1)
    setOpenAccordion(null)
  }, [id])

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [id, activeImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-100 pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  return (
    <main ref={containerRef} className="min-h-screen bg-cream-100 pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-xs text-charcoal-400">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-charcoal">{product.name}</span>
          </div>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-cream-200 overflow-hidden">
              <img
                data-strk-img-id={`${product.imgId}-detail-${activeImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] closeup jewelry detail`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 bg-cream-200 overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-gold' : 'border-transparent hover:border-cream-400'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img={`[${product.titleId}] jewelry detail angle ${i + 1}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold mb-2">
              {product.category}
            </p>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wider uppercase text-charcoal mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-cream-400'}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-400">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl lg:text-3xl text-charcoal mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="text-charcoal-500 leading-relaxed mb-8 text-sm sm:text-base">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-charcoal-400 mb-3">
                Tone: <span className="text-charcoal font-medium">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-sm tracking-widest uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'bg-charcoal text-cream-50 border-charcoal'
                        : 'bg-transparent text-charcoal border-cream-400 hover:border-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-charcoal-400 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-cream-400">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-11 flex items-center justify-center text-charcoal-400 hover:text-charcoal transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 h-11 flex items-center justify-center text-charcoal-400 hover:text-charcoal transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-gold text-center mb-8"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-cream-300/40 mb-8">
              <div className="text-center">
                <Truck size={18} className="text-gold mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-2xs text-charcoal-400 tracking-wide">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw size={18} className="text-gold mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-2xs text-charcoal-400 tracking-wide">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield size={18} className="text-gold mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-2xs text-charcoal-400 tracking-wide">Hypoallergenic</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="space-y-0">
              {[
                { key: 'description', title: 'Description', content: product.longDescription },
                { key: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
                { key: 'shipping', title: 'Shipping & Returns', content: product.shipping },
              ].map(section => (
                <div key={section.key} className="border-b border-cream-300/40">
                  <button
                    onClick={() => toggleAccordion(section.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium tracking-widest uppercase text-charcoal">
                      {section.title}
                    </span>
                    {openAccordion === section.key ? (
                      <ChevronUp size={16} className="text-charcoal-400" />
                    ) : (
                      <ChevronDown size={16} className="text-charcoal-400" />
                    )}
                  </button>
                  {openAccordion === section.key && (
                    <div className="pb-4 text-sm text-charcoal-500 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-20 lg:mt-28">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map(rp => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                <div className="aspect-[4/5] bg-cream-200 overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${rp.id}`}
                    data-strk-img={`[${rp.descId}] [${rp.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-sm tracking-wider uppercase text-charcoal group-hover:text-gold transition-colors">
                  {rp.name}
                </h3>
                <p className="text-sm text-charcoal-500 mt-1">{formatPrice(rp.price)}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

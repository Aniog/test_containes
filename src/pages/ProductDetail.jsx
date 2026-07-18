import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'
import ProductCard from '../components/shop/ProductCard'

const accordionItems = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const [product, setProduct] = useState(null)
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [addedToCart, setAddedToCart] = useState(false)

  useEffect(() => {
    const found = products.find((p) => p.id === id)
    setProduct(found)
    setSelectedVariant('Gold')
    setQuantity(1)
    setActiveImage(0)
    setOpenAccordion('description')
    setAddedToCart(false)
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <main className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
          <h1 className="font-serif text-3xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline text-xs">Back to Shop</Link>
        </div>
      </main>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  const getAccordionContent = (key) => {
    switch (key) {
      case 'description':
        return product.longDescription
      case 'materials':
        return (
          <div className="space-y-3">
            <p><strong className="font-medium">Materials:</strong> {product.materials}</p>
            <p><strong className="font-medium">Care:</strong> {product.care}</p>
          </div>
        )
      case 'shipping':
        return product.shipping
      default:
        return ''
    }
  }

  return (
    <main className="pt-20 md:pt-24">
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-sans tracking-wider">
            <li><Link to="/" className="text-velmora-light-gray hover:text-velmora-charcoal transition-colors">Home</Link></li>
            <li className="text-velmora-light-gray">/</li>
            <li><Link to="/shop" className="text-velmora-light-gray hover:text-velmora-charcoal transition-colors">Shop</Link></li>
            <li className="text-velmora-light-gray">/</li>
            <li className="text-velmora-charcoal">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-velmora-ivory overflow-hidden rounded-sm">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden rounded-sm border-2 transition-colors ${
                    activeImage === index ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-warm'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block bg-velmora-gold/10 text-velmora-gold text-[10px] font-sans tracking-wider uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal uppercase tracking-wider leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.round(product.rating) ? '#b8860b' : 'none'}
                    className={i < Math.round(product.rating) ? 'text-velmora-gold' : 'text-velmora-light-gray'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-mid-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-velmora-charcoal mt-4">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="font-sans text-sm text-velmora-mid-gray leading-relaxed mt-4 max-w-md">
              {product.description}
            </p>

            <div className="hairline mt-6 mb-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-wider uppercase text-velmora-charcoal mb-3 font-medium">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm font-sans tracking-wider border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                        : 'bg-white text-velmora-charcoal border-velmora-warm hover:border-velmora-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-wider uppercase text-velmora-charcoal mb-3 font-medium">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-velmora-warm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-velmora-charcoal hover:bg-velmora-ivory transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} strokeWidth={1.5} />
                  </button>
                  <span className="w-12 text-center font-sans text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-velmora-charcoal hover:bg-velmora-ivory transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm font-sans tracking-wider uppercase transition-all duration-300 ${
                addedToCart
                  ? 'bg-green-700 text-white'
                  : 'btn-accent'
              }`}
            >
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-velmora-warm">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon size={18} strokeWidth={1.5} className="text-velmora-gold mx-auto mb-1" />
                  <span className="font-sans text-[10px] tracking-wider uppercase text-velmora-mid-gray">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              {accordionItems.map((item) => (
                <div key={item.key} className="border-b border-velmora-warm">
                  <button
                    onClick={() => toggleAccordion(item.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs tracking-widest uppercase text-velmora-charcoal font-medium">
                      {item.label}
                    </span>
                    {openAccordion === item.key ? (
                      <ChevronUp size={16} strokeWidth={1.5} className="text-velmora-mid-gray" />
                    ) : (
                      <ChevronDown size={16} strokeWidth={1.5} className="text-velmora-mid-gray" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.key ? 'max-h-60 pb-4' : 'max-h-0'
                    }`}
                  >
                    <div className="font-sans text-sm text-velmora-mid-gray leading-relaxed">
                      {getAccordionContent(item.key)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-16 md:py-24 bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">You May Also Like</h2>
            <div className="w-12 h-[1px] bg-velmora-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

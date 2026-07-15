import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-slate-850 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <>
          <p className="mb-3">{product.details}</p>
          <p className="font-sans text-xs uppercase tracking-wider text-slate-850/50 mb-2 mt-4">Care Instructions</p>
          <p>{product.care}</p>
        </>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <>
          <p className="mb-3"><strong>Free Worldwide Shipping</strong> on all orders. Standard delivery takes 5–10 business days. Express shipping available at checkout.</p>
          <p><strong>30-Day Returns:</strong> Not in love? Return your piece within 30 days for a full refund. Items must be unworn and in original packaging.</p>
        </>
      ),
    },
  ]

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-slate-850/40 font-sans">
          <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold-600 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-slate-850/60 capitalize">{product.category}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-3">
            <div className="aspect-[4/5] bg-cream-200 overflow-hidden">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                      activeImage === idx ? 'border-gold-600' : 'border-cream-300 hover:border-cream-400'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="lg:py-4">
            {product.badge && (
              <span className="inline-block bg-gold-600 text-cream-50 text-[9px] uppercase tracking-wider font-sans font-medium px-2.5 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl uppercase tracking-ultra-wide text-slate-850 font-medium mb-3">
              {product.name}
            </h1>

            <p className="font-sans text-xl md:text-2xl text-slate-850 font-medium mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.round(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-cream-400'}
                  />
                ))}
              </div>
              <span className="text-xs text-slate-850/40 font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="divider-hairline mb-6" />

            <p className="font-sans text-sm text-slate-850/60 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-[10px] uppercase tracking-ultra-wide text-slate-850/50 mb-3 font-medium">
                Tone: <span className="text-slate-850 capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-[11px] uppercase tracking-wider font-sans font-medium transition-all duration-200 border ${
                      selectedVariant === variant
                        ? 'border-gold-600 bg-gold-600 text-cream-50'
                        : 'border-cream-400 text-slate-850 hover:border-gold-400 bg-transparent'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-[10px] uppercase tracking-ultra-wide text-slate-850/50 mb-3 font-medium">
                Quantity
              </p>
              <div className="inline-flex items-center border border-cream-400">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 text-slate-850 hover:text-gold-600 transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="px-5 text-sm font-sans font-medium text-slate-850 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 text-slate-850 hover:text-gold-600 transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full text-center py-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-cream-300/50">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map(item => (
                <div key={item.label} className="text-center">
                  <item.icon size={16} className="text-gold-600 mx-auto mb-1.5" strokeWidth={1.5} />
                  <p className="font-sans text-[9px] uppercase tracking-wider text-slate-850/50">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10 space-y-0">
              {accordionItems.map(item => (
                <div key={item.id} className="border-t border-cream-300/50">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-[11px] uppercase tracking-ultra-wide text-slate-850 font-medium">
                      {item.title}
                    </span>
                    {openAccordion === item.id ? (
                      <ChevronUp size={16} className="text-slate-850/40" />
                    ) : (
                      <ChevronDown size={16} className="text-slate-850/40" />
                    )}
                  </button>
                  {openAccordion === item.id && (
                    <div className="pb-5 font-sans text-sm text-slate-850/60 leading-relaxed animate-fade-in">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="border-t border-cream-300/50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading text-3xl md:text-4xl">You May Also Like</h2>
            <p className="section-subheading">Handpicked just for you</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'
import ProductCard from '@/components/product/ProductCard'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-parchment">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-serif text-body font-medium text-charcoal uppercase tracking-wider">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-warm-gray" />
        ) : (
          <ChevronDown className="w-4 h-4 text-warm-gray" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-body text-warm-gray leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    setAddedToCart(false)
  }, [id, selectedVariant])

  if (!product) {
    return (
      <main className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-display-sm text-charcoal">Product Not Found</h1>
        <Link to="/shop" className="mt-4 inline-block text-body text-gold underline">Back to Shop</Link>
      </main>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <main className="pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-body-sm text-warm-gray mb-8">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-parchment">
              <div
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`${product.name} ${product.description} jewelry product shot`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="aspect-square rounded bg-parchment overflow-hidden cursor-pointer hover:ring-2 hover:ring-gold transition-all">
                  <div
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`${product.name} jewelry angle ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:py-4">
            <p className="text-overline font-medium tracking-[0.25em] text-gold uppercase mb-3">
              {product.material}
            </p>
            <h1 className="font-serif text-display-sm text-charcoal mb-3 uppercase tracking-wide">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-warm-gray-lighter'
                    }`}
                  />
                ))}
              </div>
              <span className="text-body-sm text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-[2rem] text-charcoal mb-6">
              {formatPrice(product.price)}
            </p>

            <p className="text-body-lg text-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-body-sm font-medium text-charcoal mb-3">
                Tone: <span className="text-warm-gray">{product.variants[selectedVariant].name}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant, idx) => (
                  <button
                    key={variant.name}
                    onClick={() => setSelectedVariant(idx)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-200 ${
                      selectedVariant === idx
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-parchment text-warm-gray hover:border-warm-gray-lighter'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-white/30"
                      style={{ backgroundColor: variant.color }}
                    />
                    <span className="text-body-sm font-medium">{variant.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-body-sm font-medium text-charcoal mb-3">Quantity</p>
              <div className="inline-flex items-center border border-parchment rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-warm-gray hover:text-charcoal transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 text-body font-medium text-charcoal min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-warm-gray hover:text-charcoal transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-body font-semibold tracking-wider uppercase rounded transition-all duration-300 ${
                addedToCart
                  ? 'bg-success text-white'
                  : 'bg-charcoal text-white hover:bg-charcoal-light'
              }`}
            >
              {addedToCart ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust items */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-parchment">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1.5 text-center">
                  <item.icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  <span className="text-body-sm text-warm-gray">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-20 sm:mt-28">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-overline font-medium tracking-[0.25em] text-gold uppercase mb-2">
                Complete Your Look
              </p>
              <h2 className="font-serif text-display-sm text-charcoal">
                You May Also Like
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

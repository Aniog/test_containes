import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Star, ChevronDown, ChevronUp, ShoppingBag, Heart, Truck, RotateCcw } from 'lucide-react'

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-t border-[var(--color-soft-gray)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wider uppercase">{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-[var(--color-muted)] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline inline-block">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4)

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-[var(--color-muted)] mb-8">
          <Link to="/" className="hover:text-[var(--color-gold)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[var(--color-gold)] transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-charcoal)]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-[var(--color-warm-white)] mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[var(--color-gold)]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-4">
            {product.badge && (
              <span className="inline-block bg-[var(--color-gold)]/10 text-[var(--color-gold-dark)] text-[10px] tracking-widest uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="product-name text-2xl md:text-3xl mb-3">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' : 'text-[var(--color-soft-gray)]'}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--color-muted)]">{product.rating}</span>
              <span className="text-sm text-[var(--color-muted)]">({product.reviews} reviews)</span>
            </div>

            <p className="serif-heading text-2xl mb-6">${product.price}</p>

            <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-xs tracking-widest uppercase mb-3 block">Finish</label>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-xs tracking-wider uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-white'
                        : 'border-[var(--color-soft-gray)] hover:border-[var(--color-charcoal)]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-xs tracking-widest uppercase mb-3 block">Quantity</label>
              <div className="flex items-center border border-[var(--color-soft-gray)] w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[var(--color-warm-white)] transition-colors"
                >
                  -
                </button>
                <span className="flex-1 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[var(--color-warm-white)] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                  addedToCart
                    ? 'bg-green-600 text-white'
                    : 'bg-[var(--color-charcoal)] text-white hover:bg-[var(--color-gold-dark)]'
                }`}
              >
                <ShoppingBag size={16} />
                {addedToCart ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button className="p-4 border border-[var(--color-soft-gray)] hover:border-[var(--color-gold)] transition-colors">
                <Heart size={18} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 text-xs text-[var(--color-muted)] mb-8">
              <div className="flex items-center gap-2">
                <Truck size={14} />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw size={14} />
                <span>30-Day Returns</span>
              </div>
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
                <p className="mt-2">Each piece comes beautifully packaged in our signature Velmora gift box, ready for gifting or treating yourself.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>18K gold plated over recycled brass. Hypoallergenic and nickel-free.</p>
                <p className="mt-2">To maintain the luster, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery takes 5-7 business days.</p>
                <p className="mt-2">We offer hassle-free 30-day returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="serif-heading text-3xl md:text-4xl text-center mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                  <div className="aspect-[3/4] bg-[var(--color-warm-white)] overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="product-name text-xs mb-1 group-hover:text-[var(--color-gold)] transition-colors">{p.name}</h3>
                  <p className="text-sm">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

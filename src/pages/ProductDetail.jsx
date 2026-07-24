import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, Heart, Share2 } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ui/ProductCard'

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-[var(--color-light-gray)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wider uppercase">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-[var(--color-warm-gray)] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addToCart } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, product.variants[selectedVariant], quantity)
  }

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-xs text-[var(--color-warm-gray)] tracking-wider">
          <Link to="/" className="hover:text-[var(--color-charcoal)] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[var(--color-charcoal)] transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-charcoal)]">{product.name}</span>
        </nav>
      </div>

      {/* Product */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[3/4] bg-[var(--color-warm-white)] mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-[var(--color-warm-white)] overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[var(--color-charcoal)]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:py-8">
            {product.badge && (
              <span className="inline-block text-[10px] tracking-widest uppercase text-[var(--color-gold)] mb-3">
                {product.badge}
              </span>
            )}
            <h1 className="product-name text-2xl md:text-3xl tracking-[0.15em] mb-3">{product.name}</h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                <span className="text-sm">{product.rating}</span>
              </div>
              <span className="text-xs text-[var(--color-warm-gray)]">({product.reviews} reviews)</span>
            </div>

            <p className="serif-heading text-2xl mb-6">${product.price}</p>

            <p className="text-sm text-[var(--color-warm-gray)] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-wider uppercase mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(index)}
                    className={`px-6 py-2.5 text-xs tracking-wider border transition-all ${
                      selectedVariant === index
                        ? 'border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-cream)]'
                        : 'border-[var(--color-light-gray)] hover:border-[var(--color-charcoal)]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-wider uppercase mb-3">Quantity</p>
              <div className="flex items-center border border-[var(--color-light-gray)] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[var(--color-warm-white)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[var(--color-warm-white)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-accent w-full mb-4">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="flex items-center gap-6 text-[var(--color-warm-gray)]">
              <button className="flex items-center gap-2 text-xs tracking-wider hover:text-[var(--color-charcoal)] transition-colors">
                <Heart className="w-4 h-4" />
                Wishlist
              </button>
              <button className="flex items-center gap-2 text-xs tracking-wider hover:text-[var(--color-charcoal)] transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              >
                <p>{product.description}</p>
                <p className="mt-2">Each piece is carefully crafted and quality-checked before shipping. Comes in our signature Velmora gift box.</p>
              </Accordion>
              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                <p>18K gold plated over brass base. Hypoallergenic and nickel-free.</p>
                <p className="mt-2">To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              >
                <p>Free worldwide shipping on all orders. Standard delivery: 5-10 business days. Express: 2-4 business days.</p>
                <p className="mt-2">30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="bg-[var(--color-warm-white)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="serif-heading text-2xl md:text-3xl tracking-wide text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

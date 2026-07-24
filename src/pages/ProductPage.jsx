import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/home/ProductCard'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem, openCart } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-base">Product Not Found</h1>
          <Link to="/shop" className="btn-primary inline-block mt-6">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    openCart()
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4)

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: (
        <div className="space-y-3 text-sm text-velmora-muted leading-relaxed">
          <p>{product.description}. This exquisite piece from Velmora's collection is designed for the modern woman who appreciates understated luxury.</p>
          <p>Crafted with attention to every detail, this piece features a refined finish that catches light beautifully. Perfect for layering or wearing alone as a statement piece.</p>
        </div>
      ),
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-3 text-sm text-velmora-muted leading-relaxed">
          <p><strong className="text-velmora-base">Material:</strong> 18K gold plated over recycled brass</p>
          <p><strong className="text-velmora-base">Stone:</strong> Hypoallergenic crystal accents</p>
          <p><strong className="text-velmora-base">Care:</strong> Store in the provided pouch. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3 text-sm text-velmora-muted leading-relaxed">
          <p><strong className="text-velmora-base">Shipping:</strong> Free worldwide shipping on all orders. Standard delivery 5-7 business days. Express available at checkout.</p>
          <p><strong className="text-velmora-base">Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
        </div>
      ),
    },
  ]

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Image Gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-velmora-warm/20 mb-3 md:mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 md:gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-20 md:w-20 md:h-24 bg-velmora-warm/20 overflow-hidden transition-all ${
                    selectedImage === index
                      ? 'ring-2 ring-velmora-gold'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-muted mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-wider text-velmora-base">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3 md:mt-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 md:w-4 md:h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-warm'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs md:text-sm text-velmora-muted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-xl md:text-2xl text-velmora-base mt-4 md:mt-6">${product.price}</p>

            {/* Description */}
            <p className="font-sans text-sm text-velmora-muted mt-3 md:mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6 md:mt-8">
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-base mb-3">
                Finish
              </p>
              <div className="flex gap-2 md:gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 md:px-6 py-2 md:py-2.5 font-sans text-xs tracking-wider uppercase transition-all ${
                      selectedVariant === variant
                        ? 'bg-velmora-base text-velmora-cream'
                        : 'border border-velmora-warm text-velmora-muted hover:border-velmora-gold'
                    }`}
                  >
                    {variant} tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6 md:mt-8">
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-base mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-velmora-warm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 md:p-3 hover:text-velmora-gold transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 md:w-12 text-center font-sans text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 md:p-3 hover:text-velmora-gold transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary mt-6 md:mt-8 flex items-center justify-center gap-3 text-sm md:text-base py-3 md:py-3.5"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="mt-4 md:mt-6 flex flex-wrap gap-3 md:gap-4 text-xs text-velmora-muted">
              <span>Free Shipping</span>
              <span className="w-px h-4 bg-velmora-warm/50" />
              <span>30-Day Returns</span>
              <span className="w-px h-4 bg-velmora-warm/50" />
              <span>18K Gold Plated</span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-3xl">
          {accordions.map((accordion) => (
            <div key={accordion.id} className="border-t border-velmora-warm/50">
              <button
                onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="font-sans text-sm tracking-widest uppercase text-velmora-base">
                  {accordion.title}
                </span>
                {openAccordion === accordion.id ? (
                  <ChevronUp className="w-5 h-5 text-velmora-muted" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-velmora-muted" />
                )}
              </button>
              {openAccordion === accordion.id && (
                <div className="pb-6 animate-fade-in">
                  {accordion.content}
                </div>
              )}
            </div>
          ))}
          <div className="border-t border-velmora-warm/50" />
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <div className="text-center mb-10">
              <p className="section-subtitle">Complete the Look</p>
              <h2 className="section-title mt-2">You May Also Like</h2>
              <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

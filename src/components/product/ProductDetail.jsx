import React, { useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, Minus, Plus, ShoppingBag, Heart } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-[#e8e2db]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm uppercase tracking-wider">{title}</span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-[#6b6560] leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)

  return (
    <div ref={containerRef} className="flex flex-col-reverse md:flex-row gap-3">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2">
        {product.images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setActiveIndex(i)}
            className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 overflow-hidden border-2 transition-colors ${
              activeIndex === i ? 'border-[#1a1a1a]' : 'border-transparent'
            }`}
          >
            <div className="w-full h-full bg-gradient-to-br from-[#d4c5b2] to-[#c9b896] flex items-center justify-center">
              <span className="text-[#6b6560] text-[10px] uppercase tracking-wider">{product.name}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-gradient-to-br from-[#d4c5b2] to-[#c9b896] overflow-hidden flex items-center justify-center">
        <span className="text-[#6b6560] text-xs uppercase tracking-wider">{product.name}</span>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-['Cormorant_Garamond'] text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="pt-20 md:pt-24">
      {/* Product Section */}
      <div className="container-padding py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Info */}
          <div className="md:sticky md:top-24 md:self-start">
            <nav className="text-xs text-[#6b6560] mb-4">
              <Link to="/" className="hover:text-[#c9a96e] transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/shop" className="hover:text-[#c9a96e] transition-colors">Shop</Link>
              <span className="mx-2">/</span>
              <span className="text-[#1a1a1a]">{product.name}</span>
            </nav>

            <h1 className="product-name text-2xl md:text-3xl mb-2">{product.name}</h1>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-[#c9a96e] fill-[#c9a96e]' : 'text-[#d4c5b2]'}
                  />
                ))}
              </div>
              <span className="text-xs text-[#6b6560]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-['Cormorant_Garamond'] text-2xl mb-4">${product.price}</p>

            <p className="text-sm text-[#6b6560] leading-relaxed mb-6">{product.description}</p>

            <div className="hairline mb-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-xs uppercase tracking-wider mb-3 block">Color</label>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-xs uppercase tracking-wider border transition-all ${
                      selectedVariant === variant
                        ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white'
                        : 'border-[#d4c5b2] text-[#6b6560] hover:border-[#1a1a1a]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-xs uppercase tracking-wider mb-3 block">Quantity</label>
              <div className="flex items-center border border-[#d4c5b2] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#e8e2db] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#e8e2db] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 btn-accent flex items-center justify-center gap-2 ${
                  added ? 'bg-[#4a7c59]' : ''
                }`}
              >
                <ShoppingBag size={16} />
                {added ? 'Added to Bag' : 'Add to Bag'}
              </button>
              <button className="w-12 h-12 border border-[#d4c5b2] flex items-center justify-center hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
                <Heart size={18} />
              </button>
            </div>

            <div className="hairline mb-6" />

            {/* Accordions */}
            <Accordion title="Description" defaultOpen>
              {product.fullDescription}
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
              <p><strong>Care:</strong> {product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              Free worldwide shipping on all orders. 30-day hassle-free returns. Items must be unworn and in original packaging.
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-padding">
            <h2 className="font-['Cormorant_Garamond'] text-3xl text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] bg-gradient-to-br from-[#d4c5b2] to-[#c9b896] overflow-hidden mb-3 flex items-center justify-center">
                    <span className="text-[#6b6560] text-xs uppercase tracking-wider">{p.name}</span>
                  </div>
                  <h3 className="product-name text-sm text-center">{p.name}</h3>
                  <p className="text-center text-sm mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

import React, { useState } from 'react'
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { products } from '../../data/products'
import { Link, useParams, useNavigate } from 'react-router-dom'

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm uppercase tracking-wider">{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-warm-gray leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

function ProductGallery({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 md:gap-3">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 overflow-hidden border-2 transition-colors ${
              activeIndex === index ? 'border-gold' : 'border-transparent'
            }`}
          >
            <img src={img} alt={`${name} view ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] overflow-hidden bg-border-light">
        <img
          src={images[activeIndex]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl mb-4">Product not found</p>
          <Link to="/shop" className="btn-gold inline-block">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Product Info */}
          <div className="md:py-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{product.category}</p>
            <h1 className="product-name text-2xl md:text-3xl mb-3">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border'}
                  />
                ))}
              </div>
              <span className="text-sm text-warm-gray">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-2xl mb-6">${product.price}</p>

            <p className="text-warm-gray leading-relaxed mb-8">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-xs uppercase tracking-wider border transition-colors ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold text-white'
                        : 'border-border text-warm-gray hover:border-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wider mb-3">Quantity</p>
              <div className="flex items-center border border-border w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="flex-1 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-gold w-full flex items-center justify-center gap-2 mb-4"
            >
              <ShoppingBag size={16} />
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-warm-gray text-center mb-8">
              Free shipping on all orders · 30-day returns
            </p>

            {/* Accordions */}
            <div className="border-t border-border">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}. Crafted with care using premium materials and finished with 18K gold plating for lasting beauty.</p>
                <p className="mt-2">Each piece comes in our signature gift-ready packaging, perfect for treating yourself or someone special.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> 18K gold plated over recycled brass. Hypoallergenic and nickel-free.</p>
                <p className="mb-2"><strong>Care:</strong> Avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
                <p>With proper care, your Velmora piece will maintain its beauty for years to come.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2"><strong>Shipping:</strong> Free worldwide shipping. Orders ship within 1-2 business days. Delivery takes 5-10 business days depending on location.</p>
                <p className="mb-2"><strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                <p><strong>Exchanges:</strong> Need a different size or style? We offer free exchanges within 30 days.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((related) => (
              <Link
                key={related.id}
                to={`/product/${related.id}`}
                className="group block"
              >
                <div className="aspect-[3/4] overflow-hidden bg-border-light mb-3">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="product-name text-xs mb-1 group-hover:text-gold transition-colors">{related.name}</h3>
                <p className="text-sm font-medium">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

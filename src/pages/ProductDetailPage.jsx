import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, Heart } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-[#e8e2db]">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm tracking-widest uppercase text-[#1a1a1a]">{title}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-[#6b6560]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#6b6560]" />
        )}
      </button>
      {open && (
        <div className="pb-4 text-sm text-[#6b6560] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f0eb] mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="product-name text-xs text-[#1a1a1a] mb-1">{product.name}</h3>
      <p className="text-sm text-[#1a1a1a]">${product.price}</p>
    </Link>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const product = products.find((p) => p.id === id)
  const relatedProducts = products
    .filter((p) => p.id !== id && p.category === product?.category)
    .slice(0, 4)
  const fallbackRelated = products.filter((p) => p.id !== id).slice(0, 4)
  const displayRelated = relatedProducts.length > 0 ? relatedProducts : fallbackRelated

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-[#1a1a1a] mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="pt-20 md:pt-24">
      {/* Product section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] overflow-hidden bg-[#f5f0eb] mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-24 overflow-hidden bg-[#f5f0eb] transition-all ${
                    selectedImage === i
                      ? 'ring-2 ring-[#c9a96e]'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="inline-block text-[10px] tracking-widest uppercase text-[#c9a96e] mb-2">
                {product.badge}
              </span>
            )}

            <h1 className="product-name text-2xl md:text-3xl text-[#1a1a1a] mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#c9a96e] text-[#c9a96e]'
                        : 'text-[#e8e2db]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6b6560]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-[#1a1a1a] mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-sm text-[#6b6560] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-xs tracking-widest uppercase text-[#1a1a1a] mb-3 block">
                Finish
              </label>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2.5 text-xs tracking-widest uppercase transition-all ${
                      selectedVariant === v
                        ? 'bg-[#1a1a1a] text-[#faf8f5]'
                        : 'border border-[#e8e2db] text-[#6b6560] hover:border-[#1a1a1a]'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-widest uppercase text-[#1a1a1a] mb-3 block">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-[#e8e2db] hover:border-[#c9a96e] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-[#e8e2db] hover:border-[#c9a96e] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 btn-primary py-4 ${
                  added ? 'bg-green-700' : ''
                }`}
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button
                className="w-14 h-14 flex items-center justify-center border border-[#e8e2db] hover:border-[#c9a96e] transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5 text-[#6b6560]" />
              </button>
            </div>

            {/* Material badge */}
            <div className="flex items-center gap-2 text-xs text-[#6b6560] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#c9a96e]" />
              {product.material}
            </div>

            {/* Accordions */}
            <div className="border-b border-[#e8e2db]">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-2">Each piece is carefully crafted and quality-checked before shipping. Designed in our studio with love and attention to every detail.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">18K gold plated over recycled brass base. Hypoallergenic and nickel-free.</p>
                <p>To maintain the beauty of your piece:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Avoid contact with water, perfume, and lotions</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Gently polish with a soft cloth</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Standard delivery takes 5-10 business days.</p>
                <p>30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="bg-[#f5f0eb] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {displayRelated.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

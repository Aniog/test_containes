import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft, Check } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import Accordion from '@/components/product/Accordion'
import ProductCard from '@/components/ProductCard'

const accordionData = [
  {
    title: 'Description',
    content: 'Each Velmora piece is handcrafted with precision by master jewelers using ethically sourced materials. Our signature 18K gold plating ensures lasting shine that resists tarnishing with proper care.',
  },
  {
    title: 'Materials & Care',
    content: '18K gold over brass core. Genuine cubic zirconia crystals. To maintain brilliance, avoid contact with water, perfume, and lotions. Store in a dry place, ideally in the included pouch. Gently polish with a soft cloth.',
  },
  {
    title: 'Shipping & Returns',
    content: 'Free worldwide shipping on all orders. Estimated delivery 5-10 business days. 30-day return window for unworn items in original packaging. Exchanges are always free.',
  },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="font-serif text-2xl">Product Not Found</h2>
          <Link to="/shop" className="btn-primary inline-block mt-6">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-xs text-secondary hover:text-charcoal tracking-wider uppercase transition-colors mb-6"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Image Gallery */}
          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-white mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.rating >= 4.8 && (
                <span className="absolute top-4 left-4 bg-gold text-white text-[10px] tracking-wider uppercase px-3 py-1 rounded-full font-medium">
                  Bestseller
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 overflow-hidden rounded-sm border-2 transition-all duration-300 ${
                      selectedImage === idx ? 'border-gold' : 'border-taupe/50 hover:border-taupe'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl text-charcoal tracking-[0.12em] uppercase">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-taupe'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-secondary">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-3xl text-charcoal mt-5">${product.price}</p>

            <p className="text-sm md:text-base text-secondary leading-relaxed mt-5">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <span className="text-xs tracking-[0.15em] uppercase text-secondary">Finish</span>
              <div className="flex gap-3 mt-2">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 rounded-full text-xs tracking-wider uppercase transition-all duration-300 ${
                      variant === v
                        ? 'bg-charcoal text-white'
                        : 'bg-white border border-taupe text-charcoal hover:border-charcoal/30'
                    }`}
                  >
                    {v === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs tracking-[0.15em] uppercase text-secondary">Quantity</span>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center border border-taupe rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-xs hover:text-gold transition-colors"
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-xs hover:text-gold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full mt-8 py-4 rounded-full text-sm tracking-wider uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-charcoal text-white'
                  : 'bg-gold text-white hover:bg-gold-hover shadow-lg shadow-gold/20'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  Added to Cart
                </>
              ) : (
                'Add to Cart — $' + (product.price * quantity).toFixed(2)
              )}
            </button>

            {/* Accordions */}
            <div className="mt-10 hairline pt-2">
              <Accordion items={accordionData} />
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 md:mt-24 mb-16">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal tracking-wide">
              You May Also Like
            </h2>
            <div className="w-10 h-px bg-gold/40 mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
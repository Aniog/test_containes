import React, { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const variants = [
  { label: 'Gold Tone', value: 'gold' },
  { label: 'Silver Tone', value: 'silver' },
]

const accordionData = [
  {
    title: 'Description',
    content: 'Each piece is meticulously crafted with 18K gold plating over high-quality brass, ensuring lasting shine and durability. Designed for everyday wear with a refined aesthetic.',
  },
  {
    title: 'Materials & Care',
    content: '18K Gold Plated over Brass | Hypoallergenic | Nickel-Free | To maintain your jewelry, avoid contact with water, perfume, and lotions. Store in a dry place and polish gently with a soft cloth.',
  },
  {
    title: 'Shipping & Returns',
    content: 'Free worldwide shipping on all orders. 30-day return window for unworn items in original packaging. Orders are processed within 1-2 business days.',
  },
]

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem, openCart } = useCart()
  const sectionRef = useRef(null)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = products.find((p) => p.id === id)
  const relatedProducts = products.filter((p) => p.category === product?.category && p.id !== id).slice(0, 4)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [id])

  useEffect(() => {
    setSelectedImage(0)
    setSelectedVariant('gold')
    setQuantity(1)
    setOpenAccordion(null)
  }, [id])

  if (!product) {
    return (
      <div className="py-24 text-center">
        <p className="font-serif text-xl text-taupe">Product not found</p>
        <Link to="/shop" className="text-gold text-sm uppercase tracking-wider mt-4 inline-block hover:underline">
          Back to Shop
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: variants.find((v) => v.value === selectedVariant)?.label || 'Gold Tone',
      quantity,
      image: product.images[0],
      titleId: product.titleId,
    })
    openCart()
  }

  return (
    <div ref={sectionRef} className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-taupe mb-8 uppercase tracking-[0.05em]">
          <Link to="/" className="hover:text-dark transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-dark transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-dark">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] overflow-hidden bg-taupe-sand/20">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    'w-20 h-24 overflow-hidden border-2 transition-colors',
                    selectedImage === idx ? 'border-gold' : 'border-transparent hover:border-taupe-sand'
                  )}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl uppercase tracking-[0.12em] text-dark">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-taupe-sand'
                    )}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-dark mt-4">${product.price}</p>

            {/* Description */}
            <p id={product.descId} className="text-taupe text-sm leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <h3 className="text-xs uppercase tracking-[0.12em] text-dark font-medium mb-3">
                Finish: <span className="text-gold">{variants.find((v) => v.value === selectedVariant)?.label}</span>
              </h3>
              <div className="flex gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant.value}
                    onClick={() => setSelectedVariant(variant.value)}
                    className={cn(
                      'px-6 py-2.5 text-xs uppercase tracking-[0.08em] border transition-all duration-300',
                      selectedVariant === variant.value
                        ? 'border-gold bg-gold text-white'
                        : 'border-taupe-sand text-taupe hover:border-gold hover:text-gold'
                    )}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <h3 className="text-xs uppercase tracking-[0.12em] text-dark font-medium mb-3">Quantity</h3>
              <div className="flex items-center border border-taupe-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 hover:bg-taupe-sand/30 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-6 py-2.5 text-sm min-w-[3rem] text-center border-x border-taupe-sand">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 hover:bg-taupe-sand/30 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button className="w-full mt-8" size="lg" onClick={handleAddToCart}>
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </Button>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-taupe-sand">
              <div className="flex items-center gap-2 text-xs text-taupe">
                <Truck className="w-3.5 h-3.5 text-gold" />
                Free Shipping
              </div>
              <div className="flex items-center gap-2 text-xs text-taupe">
                <RotateCcw className="w-3.5 h-3.5 text-gold" />
                30-Day Returns
              </div>
              <div className="flex items-center gap-2 text-xs text-taupe">
                <Shield className="w-3.5 h-3.5 text-gold" />
                Lifetime Warranty
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8 space-y-0 border-t border-taupe-sand">
              {accordionData.map((item) => (
                <div key={item.title} className="border-b border-taupe-sand">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.title ? null : item.title)}
                    className="w-full flex items-center justify-between py-4 text-sm text-dark hover:text-gold transition-colors"
                  >
                    <span className="text-xs uppercase tracking-[0.12em] font-medium">{item.title}</span>
                    {openAccordion === item.title ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      openAccordion === item.title ? 'max-h-48 pb-4' : 'max-h-0'
                    )}
                  >
                    <p className="text-sm text-taupe leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-taupe-sand">
            <h2 className="font-serif text-2xl text-dark mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-taupe-sand/20">
                    <img
                      data-strk-img-id={`related-${product.id}`}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-serif text-xs uppercase tracking-[0.12em] text-dark">
                      {product.name}
                    </h3>
                    <p className="text-sm text-dark mt-1">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
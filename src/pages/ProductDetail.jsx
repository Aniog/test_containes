import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-semibold uppercase tracking-wide-product text-charcoal">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-stone-400" /> : <ChevronDown className="w-4 h-4 text-stone-400" />}
      </button>
      {open && <div className="pb-4 text-sm text-stone-600 leading-relaxed">{children}</div>}
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [product])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold hover:text-gold-dark transition-colors text-sm uppercase tracking-wide-product">
          Back to Shop
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
    setQuantity(1)
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef}>
      <div className="pt-24 md:pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-xs text-stone-400 uppercase tracking-wide-product">
            <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image gallery */}
            <div>
              <div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-3">
                <img
                  data-strk-img-id={product.images[selectedImage].id}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio={product.images[selectedImage].ratio}
                  data-strk-img-width={product.images[selectedImage].width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-20 overflow-hidden border-2 transition-colors ${selectedImage === i ? 'border-gold' : 'border-transparent'}`}
                  >
                    <img
                      data-strk-img-id={`${img.id}-thumb`}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="120"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="py-2">
              <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl uppercase tracking-wide-product text-charcoal">
                {product.name}
              </h1>
              <p id={product.descId} className="text-stone-500 mt-2">{product.description}</p>

              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-stone-300'}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-stone-400">({product.reviewCount})</span>
              </div>

              <p className="text-2xl font-serif mt-4">${product.price}</p>

              <p className="text-sm text-stone-600 leading-relaxed mt-4">
                {product.longDescription}
              </p>

              {/* Tone selector */}
              <div className="mt-6">
                <span className="text-xs font-semibold uppercase tracking-wide-product text-charcoal block mb-3">
                  Tone: {selectedTone === 'gold' ? 'Gold' : 'Silver'}
                </span>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedTone('gold')}
                    className={`px-5 py-2 text-xs font-semibold uppercase tracking-wide-product border transition-all duration-300 ${selectedTone === 'gold' ? 'border-gold bg-gold text-white' : 'border-stone-300 text-charcoal hover:border-gold'}`}
                  >
                    Gold
                  </button>
                  <button
                    onClick={() => setSelectedTone('silver')}
                    className={`px-5 py-2 text-xs font-semibold uppercase tracking-wide-product border transition-all duration-300 ${selectedTone === 'silver' ? 'border-gold bg-gold text-white' : 'border-stone-300 text-charcoal hover:border-gold'}`}
                  >
                    Silver
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <span className="text-xs font-semibold uppercase tracking-wide-product text-charcoal block mb-3">Quantity</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 border border-stone-300 flex items-center justify-center hover:border-gold transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 border border-stone-300 flex items-center justify-center hover:border-gold transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="w-full mt-8 bg-gold text-white py-4 text-xs font-semibold uppercase tracking-wide-product hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>

              {/* Accordions */}
              <div className="mt-8">
                <Accordion title="Description" defaultOpen>
                  <p>{product.longDescription}</p>
                </Accordion>
                <Accordion title="Materials & Care">
                  <p className="mb-2">Material: {product.material} over sterling silver</p>
                  <p className="mb-2">Nickel-free and hypoallergenic</p>
                  <p>To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <p className="mb-2">Free worldwide shipping on all orders. Standard delivery: 5–10 business days.</p>
                  <p>30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                </Accordion>
              </div>
            </div>
          </div>

          {/* Related products */}
          <div className="mt-20 pt-12 border-t border-stone-200">
            <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-charcoal text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.slug}`} className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-stone-100">
                    <img
                      data-strk-img-id={`${p.imgId}-related`}
                      data-strk-img={`[${p.descId}] [${p.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-xs md:text-sm uppercase tracking-wide-product text-charcoal mt-2">
                    {p.name}
                  </h3>
                  <p className="text-sm mt-0.5">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

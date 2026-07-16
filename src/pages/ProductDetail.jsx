import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import products from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === id)
  const containerRef = useRef(null)
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [expandedSection, setExpandedSection] = useState('description')

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-serif text-xl text-taupe">Product not found.</p>
      </div>
    )
  }

  const variant = selectedVariant || product.variants[0]

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Breadcrumb */}
        <div className="text-xs font-sans text-taupe mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-square bg-stone overflow-hidden rounded-sm relative mb-4">
              <div
                className="w-full h-full"
                data-strk-img={`[pd-name] [pd-desc]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="1200"
                data-strk-img-id={`pd-${product.id}-main`}
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 flex justify-between opacity-0 group-hover:opacity-100 pointer-events-none">
                <button
                  onClick={() => setActiveImage((a) => (a > 0 ? a - 1 : product.images.length - 1))}
                  className="w-9 h-9 bg-cream/90 rounded-full flex items-center justify-center pointer-events-auto hover:bg-cream transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveImage((a) => (a < product.images.length - 1 ? a + 1 : 0))}
                  className="w-9 h-9 bg-cream/90 rounded-full flex items-center justify-center pointer-events-auto hover:bg-cream transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 bg-stone overflow-hidden rounded-sm border-2 transition-colors ${
                    i === activeImage ? 'border-gold' : 'border-transparent hover:border-border'
                  }`}
                >
                  <div
                    className="w-full h-full"
                    data-strk-img-id={`pd-${product.id}-thumb-${i}`}
                    data-strk-img={`[pd-name] jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="128"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl lg:text-3xl tracking-wider uppercase text-charcoal" id="pd-name">
              {product.name}
            </h1>
            <p className="text-xl font-sans font-medium text-charcoal mt-3">${product.price}</p>

            {/* Stars */}
            <div className="flex items-center gap-1.5 mt-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-border'
                  }`}
                />
              ))}
              <span className="text-xs text-taupe ml-1">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-sm text-taupe mt-5 leading-relaxed" id="pd-desc">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-8">
                <p className="font-sans text-xs tracking-wider uppercase text-charcoal mb-3">
                  Finish: {variant}
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2.5 font-sans text-xs tracking-wide transition-colors rounded-full border ${
                        variant === v
                          ? 'bg-charcoal text-cream border-charcoal'
                          : 'text-charcoal border-border hover:border-charcoal/40'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <p className="font-sans text-xs tracking-wider uppercase text-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-border w-fit rounded-sm">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:text-gold transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 text-sm font-sans min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:text-gold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to bag */}
            <button
              onClick={() => { for (let i = 0; i < quantity; i++) addItem(product, variant) }}
              className="mt-8 w-full bg-charcoal text-cream py-4 font-sans text-sm tracking-wider uppercase hover:bg-espresso transition-colors duration-300"
            >
              Add to Bag — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {[
                { key: 'description', label: 'Description', content: product.details },
                { key: 'care', label: 'Materials & Care', content: product.care },
                { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
              ].map((section) => (
                <div key={section.key} className="border-b border-border">
                  <button
                    onClick={() =>
                      setExpandedSection(expandedSection === section.key ? null : section.key)
                    }
                    className="w-full flex items-center justify-between py-4 font-sans text-xs tracking-wider uppercase text-charcoal hover:text-gold transition-colors"
                  >
                    {section.label}
                    <span className="text-taupe text-base">
                      {expandedSection === section.key ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedSection === section.key ? 'max-h-48 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-taupe leading-relaxed">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="font-serif text-2xl text-center tracking-wide text-charcoal mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {related.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                  <div className="aspect-square bg-stone overflow-hidden rounded-sm mb-3">
                    <div
                      className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
                      data-strk-img={`[related-name-${rp.id}] gold jewelry`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="600"
                      data-strk-img-id={`related-${rp.id}`}
                    />
                  </div>
                  <p
                    className="font-serif text-sm tracking-wider uppercase text-charcoal"
                    id={`related-name-${rp.id}`}
                  >
                    {rp.name}
                  </p>
                  <p className="font-sans text-sm text-charcoal mt-1">${rp.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/shared/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  useEffect(() => {
    if (product) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [product, selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-charcoal mb-4">Product not found</h2>
          <Link to="/shop" className="font-sans text-xs tracking-ui uppercase text-gold hover:text-gold-dark">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20 md:pt-24">
      <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3x4] overflow-hidden bg-charcoal/5 mb-4">
              <img
                data-strk-img-id={product.images[selectedImage].imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio={product.images[selectedImage].ratio}
                data-strk-img-width={product.images[selectedImage].width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
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
                  className={`w-16 h-20 overflow-hidden bg-charcoal/5 border-2 transition-colors duration-300 ${
                    selectedImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="py-0 md:py-4">
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl tracking-product uppercase text-charcoal mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-sans text-lg font-medium text-charcoal mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-divider'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-text-muted-dark">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p id={product.descId} className="font-sans text-sm text-text-muted-dark leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-ui uppercase text-text-muted-dark mb-3">Tone</p>
              <div className="flex gap-3">
                {product.tone.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`font-sans text-xs tracking-ui uppercase px-5 py-2 rounded-full border transition-colors duration-300 ${
                      selectedTone === tone
                        ? 'bg-gold text-charcoal border-gold'
                        : 'bg-transparent text-charcoal border-divider hover:border-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-ui uppercase text-text-muted-dark mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center border border-divider text-text-muted-dark hover:text-charcoal hover:border-charcoal transition-colors duration-300"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="font-sans text-sm text-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center border border-divider text-text-muted-dark hover:text-charcoal hover:border-charcoal transition-colors duration-300"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-charcoal font-sans text-xs tracking-ui uppercase py-4 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2 mb-8"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t border-divider">
              {[
                { key: 'description', title: 'Description', content: product.details },
                { key: 'materials', title: 'Materials & Care', content: product.materials },
                { key: 'shipping', title: 'Shipping & Returns', content: product.shipping },
              ].map(acc => (
                <div key={acc.key} className="border-b border-divider">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 font-sans text-xs tracking-ui uppercase text-charcoal hover:text-gold transition-colors duration-300"
                  >
                    {acc.title}
                    {openAccordion === acc.key ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === acc.key && (
                    <p className="font-sans text-sm text-text-muted-dark leading-relaxed pb-4">
                      {acc.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-charcoal">You May Also Like</h2>
            <div className="h-px w-12 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

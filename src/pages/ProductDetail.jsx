import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-velmora-hairline">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm tracking-[0.1em] uppercase text-velmora-dark hover:text-velmora-gold transition-colors duration-300"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 font-sans text-sm text-velmora-textSecondary leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

const ProductDetail = () => {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const relatedRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0])
      setQuantity(1)
      setSelectedImage(0)
    }
  }, [product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current)
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-velmora-dark">Product not found</h2>
          <Link to="/shop" className="font-sans text-sm tracking-[0.1em] uppercase text-velmora-gold mt-4 inline-block hover:text-velmora-goldHover transition-colors duration-300">
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

  return (
    <div className="pt-20 md:pt-24">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-velmora-dark/5">
              <img
                data-strk-img-id={selectedImage === 0 ? product.imgId : product.imgId2}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3 mt-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-20 aspect-[3/4] overflow-hidden border-2 transition-colors duration-300 ${selectedImage === idx ? 'border-velmora-gold' : 'border-velmora-hairline'}`}
                >
                  <img
                    data-strk-img-id={idx === 0 ? product.imgId : product.imgId2}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:pl-4">
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase text-velmora-dark">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-hairline'}`} />
                ))}
              </div>
              <span className="font-sans text-xs text-velmora-textSecondary">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-xl md:text-2xl text-velmora-dark mt-4">${product.price}</p>

            <p id={product.descId} className="font-sans text-sm text-velmora-textSecondary mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Tone Selector */}
            <div className="mt-6">
              <span className="font-sans text-xs tracking-[0.1em] uppercase text-velmora-textSecondary">Tone</span>
              <div className="flex gap-3 mt-2">
                {product.tone.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`font-sans text-sm tracking-[0.05em] px-4 py-2 rounded-full border transition-all duration-300 ${selectedTone === tone ? 'bg-velmora-gold text-velmora-dark border-velmora-gold' : 'bg-transparent text-velmora-dark border-velmora-hairline hover:border-velmora-gold'}`}
                  >
                    {tone === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="font-sans text-xs tracking-[0.1em] uppercase text-velmora-textSecondary">Quantity</span>
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 border border-velmora-hairline rounded flex items-center justify-center text-velmora-dark hover:border-velmora-gold transition-colors duration-300"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm text-velmora-dark w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 border border-velmora-hairline rounded flex items-center justify-center text-velmora-dark hover:border-velmora-gold transition-colors duration-300"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 font-sans text-sm tracking-[0.15em] uppercase bg-velmora-gold text-velmora-dark py-3 hover:bg-velmora-goldHover transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-velmora-hairline">
              <Accordion title="Description">
                <p>{product.description}</p>
                <p className="mt-2">Each piece is individually crafted and inspected to ensure the highest quality. The warm gold finish complements every skin tone, making it a versatile addition to your collection.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>Base: Sterling silver with 18K gold plating. Nickel-free and hypoallergenic.</p>
                <p className="mt-2">To maintain the beauty of your jewelry, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery: 5-7 business days. Express: 2-3 business days.</p>
                <p className="mt-2">30-day hassle-free returns. If you're not completely satisfied, return your piece in its original condition for a full refund.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div ref={relatedRef} className="mt-16 md:mt-24 border-t border-velmora-hairline pt-8 md:pt-12">
          <h2 className="font-serif text-xl md:text-2xl tracking-[0.05em] text-velmora-dark mb-6 md:mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(rp => (
              <Link key={rp.id} to={`/product/${rp.slug}`} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-velmora-dark/5">
                  <img
                    data-strk-img-id={rp.imgId}
                    data-strk-img={`[${rp.descId}] [${rp.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 id={rp.titleId} className="font-serif text-xs md:text-sm tracking-[0.2em] uppercase text-velmora-dark mt-2">
                  {rp.name}
                </h3>
                <p id={rp.descId} className="font-sans text-xs md:text-sm text-velmora-textSecondary mt-1">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

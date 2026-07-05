import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-velmora-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-xs font-medium uppercase tracking-wider text-velmora-charcoal">{title}</span>
        <span className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-4 h-4 text-velmora-muted" />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-velmora-muted leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [relatedRef, relatedRevealed] = useScrollReveal()

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    setSelectedImage(0)
    setQuantity(1)
    setSelectedVariant('Gold')
    setAdded(false)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <p className="text-velmora-muted mb-4">Product not found</p>
          <Link to="/shop" className="text-xs font-medium uppercase tracking-wider text-velmora-charcoal border border-velmora-charcoal px-8 py-3 hover:bg-velmora-charcoal hover:text-white transition-all duration-300 btn-press">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant)
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-24 md:pt-28 page-enter">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-velmora-muted">
          <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-stone-200 mb-3">
              <img
                alt={product.name}
                data-strk-img-id={selectedImage === 0 ? product.imgId : product.imgId2}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src={product.images[selectedImage]}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === idx ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-divider'
                  }`}
                >
                  <img
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    data-strk-img-id={`${idx === 0 ? product.imgId : product.imgId2}-thumb`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    src={product.images[idx]}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl uppercase tracking-product text-velmora-charcoal"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-stone-300'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-muted">({product.reviews} reviews)</span>
            </div>

            <p className="text-xl font-medium mt-4">${product.price}</p>

            <p id={product.descId} className="text-sm text-velmora-muted mt-4 leading-relaxed">
              {product.description}. Crafted with premium 18K gold plating over hypoallergenic brass.
              Each piece is nickel-free and safe for sensitive skin.
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-wider text-velmora-charcoal mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs font-medium uppercase tracking-wider border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                        : 'border-velmora-divider text-velmora-charcoal hover:border-velmora-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-wider text-velmora-charcoal mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 border border-velmora-divider flex items-center justify-center hover:border-velmora-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-sm w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 border border-velmora-divider flex items-center justify-center hover:border-velmora-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full mt-8 text-xs font-medium uppercase tracking-wider py-4 flex items-center justify-center gap-2 transition-all duration-300 btn-press ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-velmora-gold text-white hover:bg-velmora-gold-hover'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Bag' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>
                  The {product.name} is a stunning piece from our demi-fine collection.
                  {product.description}. Designed for everyday wear, this piece transitions
                  effortlessly from day to night.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>18K Gold Plated over hypoallergenic brass</li>
                  <li>Nickel-free and lead-free</li>
                  <li>To maintain shine, avoid contact with water, perfume, and lotions</li>
                  <li>Store in the provided Velmora pouch when not wearing</li>
                  <li>Gently wipe with a soft cloth after each wear</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Standard delivery: 5-7 business days</li>
                  <li>Express delivery: 2-3 business days (available at checkout)</li>
                  <li>30-day hassle-free returns</li>
                  <li>Items must be unworn and in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div ref={relatedRef} className={`mt-20 md:mt-28 pb-20 sr-hidden ${relatedRevealed ? 'sr-visible' : ''}`}>
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-velmora-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 sr-stagger">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                  <img
                    alt={p.name}
                    data-strk-img-id={`${p.imgId}-related`}
                    data-strk-img={`[${p.descId}] [${p.titleId}] gold jewelry`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src={p.images[0]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm uppercase tracking-product text-velmora-charcoal mt-3 group-hover:text-velmora-gold transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm font-medium mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

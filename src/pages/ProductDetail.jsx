import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ShoppingBag } from 'lucide-react'
import { safeLoadImages } from '@/lib/imageLoader'

import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-brand-warm-border/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[11px] tracking-[0.15em] uppercase font-sans font-medium text-brand-charcoal group-hover:text-brand-gold transition-colors duration-300">{title}</span>
        <ChevronDown className={`w-4 h-4 text-brand-warm-gray transition-all duration-300 ${open ? 'rotate-180 text-brand-gold' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="text-sm text-brand-warm-gray leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const relatedRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [imageTransition, setImageTransition] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      return safeLoadImages(containerRef.current)
    }
  }, [product])

  useEffect(() => {
    if (relatedRef.current) {
      return safeLoadImages(relatedRef.current)
    }
  }, [product])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-display-sm text-brand-charcoal">Product Not Found</h1>
        <Link to="/shop" className="btn-outline mt-6 inline-flex text-xs">Back to Shop</Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const handleImageChange = (index) => {
    setImageTransition(true)
    setTimeout(() => {
      setActiveImage(index)
      setImageTransition(false)
    }, 200)
  }

  // Generate gallery images (main + hover + detail)
  const galleryImages = [
    { imgId: product.imgId, label: 'Main' },
    { imgId: product.imgIdHover, label: 'Worn' },
    { imgId: `${product.imgId}-detail`, label: 'Detail' },
  ]

  return (
    <div className="pt-20 md:pt-24">
      <div ref={containerRef} className="max-w-7xl mx-auto section-padding py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto scrollbar-hide">
              {galleryImages.map((img, i) => (
                <button
                  key={img.imgId}
                  onClick={() => handleImageChange(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 border-2 transition-all duration-300 ${
                    activeImage === i ? 'border-brand-charcoal' : 'border-transparent hover:border-brand-warm-border'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${img.imgId}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} - ${img.label}`}
                    className="w-full h-full object-cover bg-brand-ivory"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3x4] overflow-hidden bg-brand-ivory">
              <img
                data-strk-img-id={`pdp-main-${galleryImages[activeImage].imgId}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className={`w-full h-full object-cover transition-opacity duration-300 ${imageTransition ? 'opacity-0' : 'opacity-100'}`}
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="lg:py-4">
            <h1 id={product.titleId} className="product-name text-2xl md:text-3xl text-brand-charcoal">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-warm-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-warm-gray">({product.reviewCount})</span>
            </div>

            {/* Price */}
            <p className="mt-4 text-xl font-serif text-brand-charcoal">${product.price}</p>

            {/* Short description */}
            <p id={product.descId} className="mt-4 text-sm text-brand-warm-gray leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-[11px] tracking-[0.15em] uppercase font-sans font-medium text-brand-charcoal mb-3">Tone</p>
              <div className="flex gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-[11px] tracking-[0.12em] uppercase font-sans transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'bg-brand-charcoal text-brand-cream'
                        : 'border border-brand-warm-border text-brand-warm-gray hover:border-brand-charcoal hover:text-brand-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[11px] tracking-[0.15em] uppercase font-sans font-medium text-brand-charcoal mb-3">Quantity</p>
              <div className="inline-flex items-center border border-brand-warm-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 text-brand-warm-gray hover:text-brand-charcoal transition-colors duration-200"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium text-brand-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 text-brand-warm-gray hover:text-brand-charcoal transition-colors duration-200"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-accent w-full mt-8 py-4 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-brand-charcoal">Materials:</strong> {product.materials}</p>
                <p><strong className="text-brand-charcoal">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout.</p>
                <p>30-day hassle-free returns. Items must be unworn and in original packaging. Gift sets must be returned complete.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div ref={relatedRef} className="bg-brand-ivory py-16 md:py-20">
        <div className="max-w-7xl mx-auto section-padding">
          <h2 className="font-serif text-heading md:text-display-sm text-brand-charcoal text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {relatedProducts.map(rp => (
              <Link key={rp.id} to={`/product/${rp.slug}`} className="group">
                <div className="aspect-[3x4] overflow-hidden bg-brand-sand">
                  <img
                    data-strk-img-id={`related-${rp.imgId}`}
                    data-strk-img={`[${rp.descId}] [${rp.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="product-name text-xs md:text-sm text-brand-charcoal mt-3">{rp.name}</h3>
                <p className="text-sm text-brand-charcoal mt-1">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

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
    <div className="border-t border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-xs font-semibold tracking-ultra-wide uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors duration-300"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="font-sans text-sm text-velmora-warm-gray leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants?.[0] || 'Gold')
      setQuantity(1)
      setSelectedImage(0)
    }
  }, [product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedImage])

  if (!product) {
    return (
      <div className="pt-24 pb-16 text-center">
        <p className="font-sans text-velmora-warm-gray">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block font-sans text-xs tracking-ultra-wide uppercase text-velmora-gold hover:text-velmora-gold-dark">
          Back to Shop
        </Link>
      </div>
    )
  }

  const images = [
    { imgId: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { imgId: product.imgId2, query: `[${product.descId}] [${product.titleId}] styled` },
  ]

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-velmora-border mb-3">
              <img
                key={images[selectedImage].imgId}
                data-strk-img-id={images[selectedImage].imgId}
                data-strk-img={images[selectedImage].query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={img.imgId}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors duration-300 ${selectedImage === i ? 'border-velmora-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-velmora-charcoal"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">{product.description}</p>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-velmora-warm-gray">
                {product.rating} ({product.reviews})
              </span>
            </div>

            <p className="font-serif text-2xl text-velmora-charcoal mt-4">${product.price}</p>

            <p className="font-sans text-sm text-velmora-warm-gray leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <span className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-velmora-charcoal block mb-3">
                Tone
              </span>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wide px-5 py-2 border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-charcoal'
                        : 'border-velmora-border text-velmora-charcoal hover:border-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-velmora-charcoal block mb-3">
                Quantity
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center border border-velmora-border text-velmora-charcoal hover:border-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm text-velmora-charcoal w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center border border-velmora-border text-velmora-charcoal hover:border-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 font-sans text-xs font-semibold tracking-ultra-wide uppercase bg-velmora-gold text-velmora-charcoal py-4 hover:bg-velmora-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
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
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Standard delivery takes 5–10 business days. Express shipping available at checkout.</p>
                <p>We offer a 30-day return policy. Items must be unworn and in original packaging. Contact us at hello@velmora.com to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-velmora-border">
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide uppercase text-velmora-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-velmora-border">
                  <img
                    data-strk-img-id={`${p.imgId}-related`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 font-serif text-xs md:text-sm tracking-ultra-wide uppercase text-velmora-charcoal">
                  {p.name}
                </h3>
                <p className="font-sans text-sm text-velmora-warm-gray mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

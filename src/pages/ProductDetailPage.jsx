import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, ChevronDown, Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-super-wide uppercase text-text-primary">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-text-secondary transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <div className="font-sans text-sm text-text-secondary font-light leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null)
  const related = products.filter((p) => p.id !== currentId).slice(0, 4)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="py-16 md:py-20 border-t border-sand">
      <h3 className="font-serif text-xl md:text-2xl tracking-wide text-text-primary text-center mb-10">
        You May Also Like
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group">
            <div className="aspect-[3x4] overflow-hidden bg-ivory">
              <img
                data-strk-img-id={`related-${product.images[0].imgId}`}
                data-strk-img={`[${product.images[0].descId}] [${product.images[0].titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h4
              id={`related-${product.images[0].titleId}`}
              className="mt-3 font-serif text-xs md:text-sm tracking-extra-wide uppercase text-text-primary"
            >
              {product.name}
            </h4>
            <p
              id={`related-${product.images[0].descId}`}
              className="sr-only"
            >
              {product.description}
            </p>
            <p className="mt-1 font-sans text-sm text-text-secondary">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = getProductById(id)
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl text-text-primary">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block font-sans text-xs tracking-wide uppercase text-gold hover:text-gold-dark">
          Back to Shop
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2">
              {product.images.map((img, i) => (
                <button
                  key={img.imgId}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 overflow-hidden border-2 transition-colors duration-300 ${
                    activeImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.imgId}`}
                    data-strk-img={`[${img.descId}] [${img.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3x4] overflow-hidden bg-ivory">
              <img
                data-strk-img-id={`main-${product.images[activeImage].imgId}`}
                data-strk-img={`[${product.images[activeImage].descId}] [${product.images[activeImage].titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="py-2 md:py-4">
            <h1
              id={product.images[0].titleId}
              className="font-serif text-2xl md:text-3xl tracking-extra-wide uppercase text-text-primary"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-sand'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-text-muted">
                {product.rating} ({product.reviews})
              </span>
            </div>

            {/* Price */}
            <p className="mt-4 font-serif text-2xl text-text-primary">${product.price}</p>

            {/* Description */}
            <p
              id={product.images[0].descId}
              className="mt-4 font-sans text-sm text-text-secondary font-light leading-relaxed"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-wide uppercase text-text-secondary mb-3">
                Tone
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wide uppercase px-5 py-2.5 border transition-colors duration-300 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-warm-black'
                        : 'border-sand text-text-secondary hover:border-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-wide uppercase text-text-secondary mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-sand">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-text-primary">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full font-sans text-xs tracking-super-wide uppercase bg-gold text-warm-black py-4 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
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
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  )
}

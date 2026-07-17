import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/product/ProductCard'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-brand-linen">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-sm tracking-wider uppercase text-brand-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-brand-warm" />
        ) : (
          <ChevronDown className="w-4 h-4 text-brand-warm" />
        )}
      </button>
      {open && (
        <div className="pb-5 font-sans text-sm text-brand-warm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedVariant('Gold')
    setSelectedImage(0)
    setQuantity(1)
  }, [id])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-display text-brand-charcoal mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-outline">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-xs text-brand-warm">
          <Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="max-w-7xl mx-auto px-4 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-brand-gold'
                      : 'border-transparent hover:border-brand-linen'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${index}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-brand-ivory overflow-hidden">
              <img
                data-strk-img-id={`${product.imgId}-main-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio={product.images[selectedImage]?.ratio || '3x4'}
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage]?.alt || product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="section-subtitle mb-2">{product.category}</p>
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-ultra-wide text-brand-charcoal mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-brand-gold text-brand-gold'
                        : 'fill-brand-linen text-brand-linen'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-brand-warm">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-brand-gold mb-6">${product.price}</p>

            {/* Description */}
            <p className="font-sans text-sm text-brand-warm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-wider uppercase text-brand-taupe mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-wider uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal'
                        : 'bg-white text-brand-taupe border-brand-linen hover:border-brand-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-wider uppercase text-brand-taupe mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-brand-linen">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 text-brand-taupe hover:text-brand-charcoal transition-colors"
                >
                  −
                </button>
                <span className="w-12 text-center text-sm font-medium text-brand-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 text-brand-taupe hover:text-brand-charcoal transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="btn-primary w-full text-center"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDesc}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">{product.materials}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-16 md:py-24 px-4 bg-brand-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

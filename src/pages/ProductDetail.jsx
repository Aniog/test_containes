import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react'
import { products } from '@/data/products'
import { productImages } from '@/data/images'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-accent underline text-sm">Return to Shop</Link>
        </div>
      </div>
    )
  }

  const images = productImages[product.id] || []
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.details}\n\n${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-muted">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-background-alt overflow-hidden mb-4">
              <img
                src={images[activeImage] || images[0] || ''}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-[4/5] bg-background-alt overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-accent' : 'border-transparent hover:border-border'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2">{product.category}</p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.1em] uppercase text-foreground font-medium mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-accent text-accent' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-foreground mb-6">{formatPrice(product.price)}</p>

            {/* Description */}
            <p className="text-sm text-muted leading-relaxed mb-6">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.15em] uppercase text-foreground font-medium mb-3">
                Tone: {product.variants[selectedVariant]}
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant, i) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-6 py-2.5 text-xs tracking-[0.1em] uppercase border transition-all duration-200 ${
                      selectedVariant === i
                        ? 'border-accent bg-accent text-white'
                        : 'border-border text-muted hover:border-accent hover:text-accent'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.15em] uppercase text-foreground font-medium mb-3">Quantity</p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-foreground transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 h-10 flex items-center justify-center text-sm text-foreground border-x border-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-foreground transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, product.variants[selectedVariant], quantity)}
              className="w-full bg-accent text-white py-4 text-xs tracking-[0.25em] uppercase font-medium hover:bg-accent-dark transition-colors duration-300 mb-8"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-border">
              <div className="text-center">
                <Truck className="w-5 h-5 text-accent mx-auto mb-1.5" />
                <p className="text-[10px] text-muted uppercase tracking-wider">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-5 h-5 text-accent mx-auto mb-1.5" />
                <p className="text-[10px] text-muted uppercase tracking-wider">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 text-accent mx-auto mb-1.5" />
                <p className="text-[10px] text-muted uppercase tracking-wider">1 Year Warranty</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-border">
              {accordions.map((acc, i) => (
                <div key={acc.title} className="border-b border-border">
                  <button
                    onClick={() => toggleAccordion(i)}
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <span className="text-xs tracking-[0.15em] uppercase text-foreground font-medium">
                      {acc.title}
                    </span>
                    {openAccordion === i ? (
                      <ChevronUp className="w-4 h-4 text-muted" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted" />
                    )}
                  </button>
                  {openAccordion === i && (
                    <div className="pb-4 text-sm text-muted leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24 pt-12 border-t border-border">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                  <div className="aspect-[4/5] bg-background-alt overflow-hidden mb-3">
                    <img
                      src={productImages[rp.id]?.[0] || ''}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xs tracking-[0.15em] uppercase text-foreground font-medium mb-1 truncate">
                    {rp.name}
                  </h3>
                  <p className="text-sm font-medium text-foreground">{formatPrice(rp.price)}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

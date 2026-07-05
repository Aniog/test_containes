import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ShoppingBag, Minus, Plus } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-brand-pale-gray">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-super-wide uppercase font-sans font-medium text-brand-charcoal">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-brand-warm-gray transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm leading-relaxed text-brand-warm-gray font-sans">
          {children}
        </div>
      </div>
    </div>
  )
}

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-brand-charcoal">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block text-xs tracking-widest uppercase font-sans text-brand-gold hover:text-brand-gold-dark">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="bg-brand-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 md:mb-8">
          <ol className="flex items-center gap-2 text-xs font-sans text-brand-light-gray">
            <li><Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-brand-charcoal">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] bg-brand-ivory overflow-hidden mb-3">
              <img
                alt={product.name}
                data-strk-img-id={`${product.imgId}-detail-${activeImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 bg-brand-ivory border-2 transition-colors ${
                    activeImage === i ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <span className="text-[9px] text-brand-light-gray font-sans">{i + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-brand-charcoal"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-brand-gold text-brand-gold'
                        : 'text-brand-pale-gray'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-warm-gray font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-brand-charcoal mt-4">${product.price}</p>

            {/* Description */}
            <p
              id={product.descId}
              className="text-sm leading-relaxed text-brand-warm-gray font-sans mt-4"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <label className="text-xs tracking-widest uppercase font-sans font-medium text-brand-charcoal block mb-3">
                Tone
              </label>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-xs tracking-widest uppercase font-sans border transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'border-brand-charcoal bg-brand-charcoal text-brand-cream'
                        : 'border-brand-pale-gray text-brand-warm-gray hover:border-brand-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <label className="text-xs tracking-widest uppercase font-sans font-medium text-brand-charcoal block mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-brand-pale-gray w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-brand-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-sans">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-brand-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full mt-8 py-4 text-xs tracking-super-wide uppercase font-sans font-medium flex items-center justify-center gap-2 transition-colors duration-300 ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-brand-charcoal text-brand-cream hover:bg-brand-gold'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 mt-4 text-[10px] tracking-widest uppercase text-brand-light-gray font-sans">
              <span>Free Shipping</span>
              <span className="w-1 h-1 rounded-full bg-brand-pale-gray" />
              <span>30-Day Returns</span>
              <span className="w-1 h-1 rounded-full bg-brand-pale-gray" />
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8 border-b border-brand-pale-gray">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout.</p>
                <p>We offer a 30-day return policy. Items must be unworn and in original packaging. Contact us at hello@velmora.com to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-brand-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-brand-ivory overflow-hidden">
                  <img
                    alt={p.name}
                    data-strk-img-id={`${p.imgId}-related`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm tracking-ultra-wide uppercase text-brand-charcoal mt-3">
                  {p.name}
                </h3>
                <p className="text-sm font-sans text-brand-warm-gray mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

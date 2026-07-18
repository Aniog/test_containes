import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/data/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-brand-sand/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-brand-warm-gray transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <div className="text-sm font-sans text-brand-warm-gray leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-brand-charcoal mb-4">Product not found</p>
          <Link to="/shop" className="text-sm font-sans text-brand-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-sans text-brand-warm-gray">
            <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-brand-charcoal">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] overflow-hidden bg-brand-warm mb-3">
              <img
                data-strk-img-id={`${product.id}-detail-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 bg-brand-warm overflow-hidden border-2 transition-colors ${selectedImage === i ? 'border-brand-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`${product.id}-thumb-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry thumbnail`}
                    data-strk-img-ratio="3x4"
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
          <div className="md:pl-4">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-super-wide uppercase text-brand-charcoal"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`}
                  />
                ))}
              </div>
              <span className="text-xs font-sans text-brand-warm-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-4 text-xl font-serif text-brand-charcoal">${product.price}</p>

            <p
              id={product.descId}
              className="mt-4 text-sm font-sans text-brand-warm-gray leading-relaxed"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <span className="text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal block mb-3">
                Tone
              </span>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs font-sans font-medium tracking-extra-wide uppercase border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-brand-gold bg-brand-gold text-white'
                        : 'border-brand-sand text-brand-charcoal hover:border-brand-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal block mb-3">
                Quantity
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-brand-sand flex items-center justify-center text-brand-charcoal hover:border-brand-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm font-sans text-brand-charcoal w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-brand-sand flex items-center justify-center text-brand-charcoal hover:border-brand-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-brand-gold text-white text-xs font-sans font-medium tracking-extra-wide uppercase py-4 hover:bg-brand-gold-dark transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">Each piece is meticulously crafted with attention to detail, ensuring a finish that rivals fine jewelry at a fraction of the cost.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc list-inside space-y-1">
                  <li>18K Gold Plated over 925 Sterling Silver</li>
                  <li>Hypoallergenic — nickel and lead free</li>
                  <li>Tarnish-resistant coating</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Avoid contact with water, perfume, and lotions</li>
                  <li>Gently wipe with a soft cloth after each wear</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="list-disc list-inside space-y-1">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Standard delivery: 5–10 business days</li>
                  <li>Express delivery available at checkout</li>
                  <li>30-day hassle-free returns</li>
                  <li>Items must be unworn and in original packaging</li>
                  <li>Gift wrapping available for $5</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 pt-12 border-t border-brand-sand/60">
          <h2 className="font-serif text-2xl text-brand-charcoal tracking-extra-wide uppercase text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group text-center">
                <div className="aspect-[3x4] overflow-hidden bg-brand-warm mb-3">
                  <img
                    data-strk-img-id={`${p.id}-related`}
                    data-strk-img={`[${p.descId}] [${p.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm tracking-super-wide uppercase text-brand-charcoal">
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

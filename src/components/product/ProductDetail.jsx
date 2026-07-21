import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs font-semibold tracking-wide-btn uppercase text-warm-black">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-warm-gray" />
        ) : (
          <ChevronDown className="w-4 h-4 text-warm-gray" />
        )}
      </button>
      {open && <div className="pb-4 font-sans text-sm text-warm-gray leading-relaxed">{children}</div>}
    </div>
  )
}

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-sans text-warm-gray">Product not found</p>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem({ ...product, quantity }, selectedVariant)
  }

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 font-sans text-xs text-warm-gray">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-warm-black">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] overflow-hidden bg-cream mb-3">
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
            <div className="flex gap-3">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 overflow-hidden bg-cream border-2 transition-colors ${selectedImage === idx ? 'border-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`thumb-${idx === 0 ? product.imgId : product.imgId2}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
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
              className="font-serif text-2xl md:text-3xl uppercase tracking-product text-warm-black"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-sand'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-gray font-sans">({product.reviews} reviews)</span>
            </div>

            <p className="text-xl font-sans font-medium text-warm-black mt-3">${product.price}</p>

            <p
              id={product.descId}
              className="font-sans text-sm text-warm-gray leading-relaxed mt-4"
            >
              {product.description}. Crafted with meticulous attention to detail, this piece embodies the Velmora commitment to everyday luxury.
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <span className="font-sans text-xs font-semibold tracking-wide-btn uppercase text-warm-black block mb-3">
                Tone: {selectedVariant}
              </span>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 font-sans text-xs font-medium tracking-wider uppercase border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-warm-black'
                        : 'border-sand text-warm-gray hover:border-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="font-sans text-xs font-semibold tracking-wide-btn uppercase text-warm-black block mb-3">
                Quantity
              </span>
              <div className="flex items-center border border-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-warm-gray hover:text-warm-black transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-warm-black">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-warm-gray hover:text-warm-black transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-6 bg-gold text-warm-black font-sans text-xs font-semibold tracking-wide-btn uppercase py-4 hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>
                  The {product.name} is a signature Velmora piece, designed to transition effortlessly from day to night. 
                  {product.description}, made with premium {product.material} over sterling silver. 
                  Each piece is hand-finished and comes in our signature Velmora box.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc list-inside space-y-1">
                  <li>18K Gold Plated over 925 Sterling Silver</li>
                  <li>Nickel-free and hypoallergenic</li>
                  <li>Tarnish-resistant coating</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Avoid direct contact with perfume or lotions</li>
                  <li>Gently wipe with a soft cloth after each wear</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="list-disc list-inside space-y-1">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Standard delivery: 5–7 business days</li>
                  <li>Express delivery: 2–3 business days (available at checkout)</li>
                  <li>30-day hassle-free returns</li>
                  <li>Items must be unworn and in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-warm-black font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="relative aspect-[3x4] overflow-hidden bg-cream">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs uppercase tracking-product text-warm-black mt-2">
                  {p.name}
                </h3>
                <p className="text-sm font-sans font-medium text-warm-black mt-0.5">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

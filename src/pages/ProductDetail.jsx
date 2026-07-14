import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductRow from '@/components/product/ProductRow'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-base tracking-wide text-charcoal uppercase">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-stone-500" /> : <ChevronDown className="w-4 h-4 text-stone-500" />}
      </button>
      {open && (
        <div className="pb-4 text-stone-600 font-sans text-sm leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-secondary">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const images = [
    { imgId: product.imgId, label: 'Main' },
    { imgId: product.imgId2, label: 'Detail' },
  ]

  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
    setQuantity(1)
  }

  return (
    <div ref={containerRef} className="bg-cream-50 min-h-screen pt-24 md:pt-28">
      <div className="container-wide pb-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs font-sans text-stone-500 tracking-wide">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-stone-100 mb-3">
              <img
                data-strk-img-id={images[selectedImage].imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
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
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${selectedImage === i ? 'border-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} ${img.label}`}
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
              className="font-serif text-2xl md:text-3xl uppercase tracking-ultrawide text-charcoal"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-stone-300'}`}
                  />
                ))}
              </div>
              <span className="text-xs font-sans text-stone-500">({product.reviews})</span>
            </div>

            <p className="mt-4 text-2xl font-serif text-charcoal">${product.price}</p>

            <p id={product.descId} className="mt-4 text-stone-600 font-sans text-sm leading-relaxed">
              {product.longDescription}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <span className="text-xs font-sans font-medium tracking-wide uppercase text-stone-500 block mb-3">
                Tone: {selectedTone}
              </span>
              <div className="flex gap-3">
                {product.tone.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 text-xs font-sans tracking-widest uppercase border transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-gold bg-gold text-white'
                        : 'border-stone-300 text-stone-600 hover:border-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs font-sans font-medium tracking-wide uppercase text-stone-500 block mb-3">
                Quantity
              </span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-stone-300 text-stone-600 hover:border-charcoal transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-base font-sans text-charcoal w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-stone-300 text-stone-600 hover:border-charcoal transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 btn-primary w-full flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc list-inside space-y-1">
                  <li>18K gold plating over 925 sterling silver</li>
                  <li>Hypoallergenic — nickel and lead free</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Avoid direct contact with perfume, lotions, and water</li>
                  <li>Gently wipe with a soft cloth after each wear</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="list-disc list-inside space-y-1">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Standard delivery: 5–10 business days</li>
                  <li>Express delivery: 2–4 business days (available at checkout)</li>
                  <li>30-day hassle-free returns</li>
                  <li>Items must be unworn and in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20">
          <ProductRow title="You May Also Like" items={related} />
        </div>
      </div>
    </div>
  )
}

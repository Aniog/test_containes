import React, { useRef, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, ChevronDown, Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-gold-light/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-[11px] tracking-[0.15em] uppercase font-semibold text-charcoal">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-warm-gray transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="text-warm-gray text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const containerRef = useRef(null)
  const product = products.find(p => p.id === Number(id))
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedImage])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="font-serif text-2xl text-charcoal">Product not found</p>
        <Link to="/shop" className="mt-4 inline-block text-gold text-sm underline">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-warm-gray tracking-wide">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-ivory mb-4">
              <img
                data-strk-img-id={`pdp-${product.imgId}-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.imgId}-${idx}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                    data-strk-img-ratio="4x5"
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
          <div>
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl uppercase tracking-[0.12em] text-charcoal"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-warm-gray-light'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-warm-gray">({product.reviews})</span>
            </div>

            <p className="mt-4 font-serif text-2xl text-charcoal">{formatPrice(product.price)}</p>

            <p
              id={product.descId}
              className="mt-4 text-warm-gray leading-relaxed"
            >
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-charcoal mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {['gold', 'silver'].map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-6 py-3 text-[11px] tracking-[0.12em] uppercase font-medium border transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-gold bg-gold text-warm-black'
                        : 'border-warm-gray-light text-warm-gray hover:border-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-warm-gray-light text-charcoal hover:border-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-warm-gray-light text-charcoal hover:border-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-gold text-warm-black text-[11px] tracking-[0.15em] uppercase font-semibold py-4 hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">Each piece is carefully crafted with attention to detail, ensuring a finish that rivals fine jewelry at a fraction of the cost.</p>
              </Accordion>

              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>• 18K Gold Plated over brass base</li>
                  <li>• Hypoallergenic — nickel and lead free</li>
                  <li>• To maintain shine, avoid contact with water, perfume, and lotions</li>
                  <li>• Store in the provided pouch when not wearing</li>
                  <li>• Clean gently with a soft cloth</li>
                </ul>
              </Accordion>

              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>• Free worldwide shipping on all orders</li>
                  <li>• Standard delivery: 5–10 business days</li>
                  <li>• Express delivery available at checkout</li>
                  <li>• 30-day hassle-free returns</li>
                  <li>• Items must be unworn and in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-charcoal text-center">
            You May Also Like
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4 mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(rp => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-ivory">
                  <img
                    data-strk-img-id={`related-${rp.imgId}`}
                    data-strk-img={`[${rp.descId}] [${rp.titleId}] gold jewelry`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="mt-3 font-serif text-xs md:text-sm uppercase tracking-[0.1em] text-charcoal group-hover:text-gold transition-colors">
                  {rp.name}
                </h3>
                <p className="mt-1 text-sm text-warm-gray">{formatPrice(rp.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

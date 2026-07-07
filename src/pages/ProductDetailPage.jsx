import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, ShoppingBag, Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-[0.15em] uppercase font-medium text-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-stone-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-stone-400" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-stone-600 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

const ProductDetailPage = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeImage])

  if (!product) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h1 className="font-serif text-2xl">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-champagne underline">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs tracking-wide text-stone-500">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-stone-100 mb-3">
              <img
                data-strk-img-id={product.images[activeImage].imgId}
                data-strk-img={`[${product.images[activeImage].descId}] [${product.images[activeImage].titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[activeImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 md:gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-24 md:w-16 md:h-20 overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-champagne' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.imgId}`}
                    data-strk-img={`[${img.descId}] [${img.titleId}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="128"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <h1
              id={product.images[0].titleId}
              className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-charcoal"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-champagne text-champagne' : 'text-stone-300'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-stone-500">({product.reviews})</span>
            </div>

            <p className="mt-4 text-xl font-serif">${product.price.toFixed(2)}</p>

            <p
              id={product.images[0].descId}
              className="mt-4 text-stone-600 leading-relaxed"
            >
              {product.details}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <span className="text-xs tracking-[0.15em] uppercase font-medium text-charcoal block mb-3">
                Tone
              </span>
              <div className="flex gap-3">
                {['gold', 'silver'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-6 py-2.5 text-xs tracking-[0.15em] uppercase font-medium border transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-champagne bg-champagne text-white'
                        : 'border-stone-300 text-stone-600 hover:border-champagne'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs tracking-[0.15em] uppercase font-medium text-charcoal block mb-3">
                Quantity
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-stone-300 flex items-center justify-center hover:border-stone-500 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-stone-300 flex items-center justify-center hover:border-stone-500 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedTone, quantity)}
              className="mt-8 w-full bg-champagne text-white py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-champagne-dark transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.details}</p>
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
        <div className="mt-16 md:mt-24 pt-12 border-t border-stone-200">
          <h2 className="font-serif text-xl md:text-2xl tracking-[0.1em] uppercase text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-stone-100">
                  <img
                    data-strk-img-id={`related-${p.images[0].imgId}`}
                    data-strk-img={`[${p.images[0].descId}] [${p.images[0].titleId}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.images[0].alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2 font-serif text-xs tracking-[0.15em] uppercase text-charcoal">
                  {p.name}
                </h3>
                <p className="text-sm mt-0.5">${p.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage

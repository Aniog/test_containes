import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-ivory">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-xs font-semibold tracking-widest-xl uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors"
      >
        {title}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && (
        <div className="pb-4 font-sans text-sm text-velmora-slate leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="font-sans text-sm text-velmora-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}] warm gold jewelry product on dark background` },
    { id: product.imgIdAlt, query: `[${product.descId}] [${product.titleId}] gold jewelry detail closeup` },
  ]

  return (
    <div className="bg-velmora-cream min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 font-sans text-xs text-velmora-silver">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[3/4] bg-velmora-linen overflow-hidden mb-3">
              <img
                data-strk-img-id={images[activeImage].id}
                data-strk-img={images[activeImage].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-warm-gray'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="py-2">
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-velmora-ivory text-velmora-gold text-[10px] font-sans font-semibold tracking-widest-xl uppercase mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-2xl md:text-3xl tracking-widest text-velmora-black">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-ivory'}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-slate">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-serif text-2xl text-velmora-black">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="font-sans text-lg text-velmora-silver line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="font-sans text-sm text-velmora-slate leading-relaxed mt-4">
              {product.shortDescription}
            </p>

            <div className="w-full h-px bg-velmora-ivory my-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs font-semibold tracking-widest-xl uppercase text-velmora-charcoal mb-3">
                Tone — {selectedVariant}
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.name}
                    onClick={() => setSelectedVariant(v.name)}
                    className={`px-5 py-2 border text-xs font-sans font-medium tracking-wider uppercase transition-all ${
                      selectedVariant === v.name
                        ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-gold-dark'
                        : 'border-velmora-ivory text-velmora-slate hover:border-velmora-warm-gray'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full border border-velmora-ivory"
                        style={{ backgroundColor: v.color }}
                      />
                      {v.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs font-semibold tracking-widest-xl uppercase text-velmora-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-ivory">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-slate hover:text-velmora-black transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 h-10 flex items-center justify-center font-sans text-sm font-medium text-velmora-black border-x border-velmora-ivory">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-slate hover:text-velmora-black transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full py-4 bg-velmora-gold text-white text-xs font-sans font-semibold tracking-widest-xl uppercase hover:bg-velmora-gold-dark transition-colors"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            <p className="text-center font-sans text-[11px] text-velmora-silver mt-3">
              Free worldwide shipping · 30-day returns
            </p>

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
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-black">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="relative aspect-[3/4] bg-velmora-linen overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}] warm gold jewelry product`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-sm tracking-widest text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
                  {p.name}
                </h3>
                <p className="font-sans text-sm font-semibold text-velmora-black mt-1">
                  {formatPrice(p.price)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

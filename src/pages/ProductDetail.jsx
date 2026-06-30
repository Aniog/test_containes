import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronRight } from 'lucide-react'
import { getProduct, getRelated } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { useStrkImages } from '@/lib/useStrkImages'
import Accordion from '@/components/Accordion'
import ProductCard from '@/components/ProductCard'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const { addItem } = useCart()
  const containerRef = useStrkImages([slug])

  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    setVariant(product?.variants?.[0] ?? 'Gold')
    setQuantity(1)
    setActiveImg(0)
    window.scrollTo(0, 0)
  }, [slug, product])

  if (!product) {
    return (
      <div className="container-editorial py-32 text-center">
        <h1 className="font-serif text-4xl text-espresso-800 mb-4">Piece not found</h1>
        <Link to="/shop" className="btn-outline">Back to Shop</Link>
      </div>
    )
  }

  const related = getRelated(slug, 4)
  const gallery = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.imgIdAlt, query: `[${product.descId}] ${product.name} worn detail` },
    { id: product.imgId3, query: `[${product.descId}] [${product.titleId}] close up` },
    { id: product.imgId4, query: `[${product.descId}] ${product.name} styled` },
  ]

  const handleAdd = () => {
    addItem(product, { variant, quantity })
  }

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} To care, avoid contact with water, perfume, and cosmetics. Store in the provided pouch away from direct sunlight. Clean gently with a soft cloth.` },
    { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Orders ship within 1–2 business days and arrive in 3–7 days. Enjoy 30-day returns on unworn pieces in original packaging.' },
  ]

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container-editorial py-5">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-espresso-500">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-espresso-800">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="container-editorial pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-20">
              {gallery.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-16 md:w-full aspect-square overflow-hidden bg-cream-deep shrink-0 border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    src={PLACEHOLDER}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    data-strk-img-id={img.id}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Main image */}
            <div className="flex-1 relative aspect-[4/5] overflow-hidden bg-cream-deep">
              <img
                src={PLACEHOLDER}
                alt={product.name}
                data-strk-img-id={gallery[activeImg].id}
                data-strk-img={gallery[activeImg].query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:py-4">
            <p className="text-xs uppercase tracking-widest3 text-gold mb-3">{product.category}</p>
            <h1
              id={product.titleId}
              className="product-name text-3xl md:text-4xl text-espresso-800 mb-4"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-espresso-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-espresso-500 tracking-wide">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-3xl text-espresso-800 mb-5">{formatPrice(product.price)}</p>

            <p id={product.descId} className="text-espresso-700 leading-relaxed mb-8">
              {product.shortDesc}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest2 text-espresso-600 mb-3">
                Tone: <span className="text-espresso-800">{variant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest2 border transition-all ${
                      variant === v
                        ? 'bg-espresso-800 text-cream border-espresso-800'
                        : 'bg-transparent text-espresso-800 border-espresso-300 hover:border-espresso-800'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest2 text-espresso-600 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-espresso-300">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-espresso-800 hover:bg-espresso-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-espresso-800 min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-espresso-800 hover:bg-espresso-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button onClick={handleAdd} className="btn-accent w-full mb-10">
              Add to Bag — {formatPrice(product.price * quantity)}
            </button>

            {/* Accordions */}
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-cream-warm py-20 md:py-24">
        <div className="container-editorial">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-espresso-800">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import React, { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ChevronDown, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import ProductCard from '@/components/ProductCard'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

const ACCORDIONS = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tones?.[0] || 'Gold')
      setQuantity(1)
      setActiveImage(0)
      setAdded(false)
    }
  }, [slug, product])

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-20">
        <h1 className="font-serif text-3xl text-espresso mb-4">Product not found</h1>
        <Link to="/shop" className="text-gold hover:text-gold-deep text-sm tracking-[0.2em] uppercase">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(slug, 4)
  const galleryImages = [
    { imgId: product.imgId, label: 'Primary view' },
    { imgId: product.imgIdAlt, label: 'Worn view' },
  ]

  const handleAddToCart = () => {
    addItem(product, { tone: selectedTone, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <nav className="text-xs tracking-[0.15em] uppercase text-taupe">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    'w-16 h-20 md:w-20 md:h-24 bg-cream overflow-hidden border-2 transition-colors shrink-0',
                    activeImage === idx ? 'border-gold' : 'border-transparent hover:border-sand',
                  )}
                >
                  <img
                    src={PLACEHOLDER}
                    alt={`${product.name} ${img.label}`}
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={`[${product.descId}] ${product.name} gold jewelry ${img.label}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-cream overflow-hidden relative">
              <img
                src={PLACEHOLDER}
                alt={product.name}
                data-strk-img-id={galleryImages[activeImage].imgId}
                data-strk-img={`[${product.descId}] ${product.name} gold jewelry ${galleryImages[activeImage].label}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-ivory/90 text-espresso text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-4">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">{product.category}</p>
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl uppercase tracking-[0.08em] text-espresso mb-3"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">{product.shortDesc}</p>

            <div className="flex items-center gap-2 mb-5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.round(product.rating)
                        ? 'fill-gold text-gold'
                        : 'text-sand',
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-taupe">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-2xl text-espresso mb-6">{formatPrice(product.price)}</p>

            <p className="text-cocoa leading-relaxed mb-8">{product.shortDesc}</p>

            {/* Tone selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.2em] uppercase text-cocoa mb-3">
                Tone: <span className="text-espresso">{selectedTone}</span>
              </p>
              <div className="flex gap-3">
                {product.tones.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      'px-6 py-2.5 text-xs tracking-[0.2em] uppercase border transition-colors',
                      selectedTone === tone
                        ? 'border-espresso bg-espresso text-cream'
                        : 'border-sand text-cocoa hover:border-espresso',
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.2em] uppercase text-cocoa mb-3">Quantity</p>
              <div className="inline-flex items-center border border-sand">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-espresso hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm text-espresso min-w-[3ch] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-espresso hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={cn(
                'w-full py-4 text-xs tracking-[0.3em] uppercase transition-colors duration-300 flex items-center justify-center gap-2',
                added
                  ? 'bg-gold-deep text-cream'
                  : 'bg-gold text-cream hover:bg-gold-deep',
              )}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-sand">
              {ACCORDIONS.map((acc) => {
                const isOpen = openAccordion === acc.key
                return (
                  <div key={acc.key} className="border-b border-sand">
                    <button
                      onClick={() => setOpenAccordion(isOpen ? null : acc.key)}
                      className="w-full flex items-center justify-between py-5 text-left"
                    >
                      <span className="text-xs tracking-[0.2em] uppercase text-espresso">
                        {acc.label}
                      </span>
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 text-taupe transition-transform duration-300',
                          isOpen && 'rotate-180',
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        isOpen ? 'max-h-96 pb-5' : 'max-h-0',
                      )}
                    >
                      <p className="text-sm text-cocoa leading-relaxed">
                        {product[acc.key]}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Complete the Look</p>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

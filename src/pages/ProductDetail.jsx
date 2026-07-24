import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeAccordion, setActiveAccordion] = useState(null)

  useEffect(() => {
    if (product) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-light">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-velmora-dark">Product not found</h2>
          <Link to="/shop" className="mt-4 font-sans text-sm text-velmora-gold hover:text-velmora-gold-light underline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-light pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Breadcrumb */}
        <div className="mb-6 font-sans text-xs tracking-wide text-stone-500 uppercase">
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-velmora-gold transition-colors">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-dark">{product.name}</span>
        </div>

        {/* Main product section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3x4] overflow-hidden bg-velmora-cream">
              <img
                data-strk-img-id={product.imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="aspect-square overflow-hidden bg-velmora-cream">
                <img
                  data-strk-img-id={`${product.imgId}-thumb-1`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden bg-velmora-cream">
                <img
                  data-strk-img-id={`${product.imgId2}-thumb-2`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden bg-velmora-cream">
                <img
                  data-strk-img-id={`${product.imgId}-thumb-3`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden bg-velmora-cream">
                <img
                  data-strk-img-id={`${product.imgId2}-thumb-4`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-velmora-dark">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-stone-300'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-stone-500">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-sans text-xl md:text-2xl font-medium text-velmora-dark mt-4">{formatPrice(product.price)}</p>

            {/* Description */}
            <p id={product.descId} className="font-sans text-base text-stone-600 leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="font-sans text-sm tracking-[0.05em] uppercase text-velmora-dark mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-sm tracking-[0.05em] uppercase px-6 py-2 border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'bg-velmora-gold text-velmora-dark border-velmora-gold'
                        : 'bg-transparent text-velmora-dark border-stone-300 hover:border-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-sm tracking-[0.05em] uppercase text-velmora-dark mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-stone-300 text-velmora-dark hover:border-velmora-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-base text-velmora-dark w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-stone-300 text-velmora-dark hover:border-velmora-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-velmora-gold text-velmora-dark font-sans text-sm tracking-[0.1em] uppercase py-4 hover:bg-velmora-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-stone-200">
              {[
                { key: 'description', title: 'Description', content: product.description },
                { key: 'materials', title: 'Materials & Care', content: `Materials: ${product.materials}\n\nCare: ${product.care}` },
                { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Items must be unworn and in original packaging. Gift sets are final sale.' },
              ].map(acc => (
                <div key={acc.key} className="border-b border-stone-200">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 font-sans text-sm tracking-[0.05em] uppercase text-velmora-dark hover:text-velmora-gold transition-colors"
                  >
                    {acc.title}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeAccordion === acc.key ? 'rotate-180' : ''}`} />
                  </button>
                  {activeAccordion === acc.key && (
                    <p className="pb-4 font-sans text-sm text-stone-600 leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-dark tracking-wide text-center">You May Also Like</h2>
          <div className="mt-3 w-12 h-px bg-velmora-gold mx-auto" />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="relative aspect-[3x4] overflow-hidden bg-velmora-cream">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-serif text-sm tracking-[0.15em] uppercase text-velmora-dark">{p.name}</h3>
                  <p className="font-sans text-sm font-medium text-velmora-dark mt-1">{formatPrice(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

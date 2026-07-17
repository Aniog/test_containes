import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]?.id || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [expandedAccordion, setExpandedAccordion] = useState(null)

  const containerRef = useRef(null)

  useEffect(() => {
    setActiveImage(0)
    setSelectedVariant(product?.variants[0]?.id || 'gold')
    setQuantity(1)
    setExpandedAccordion(null)
    window.scrollTo(0, 0)
  }, [slug, product])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [slug, activeImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-stone-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold-dark underline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section)
  }

  const accordions = [
    { id: 'description', title: 'Description', content: product.longDescription },
    { id: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
  ]

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="pt-20 sm:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-4">
        <nav className="flex items-center gap-2 text-xs text-stone-400">
          <Link to="/" className="hover:text-stone-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-stone-600 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-stone-600">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-3">
            <div className="aspect-[3/4] bg-stone-100 rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-${activeImage}`}
                data-strk-img={`[pdp-name] [pdp-desc] gold jewelry product ${product.images[activeImage] || ''}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover bg-stone-200"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                    activeImage === idx ? 'border-gold' : 'border-transparent hover:border-stone-300'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-name] product thumbnail view ${idx + 1}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover bg-stone-200"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p id="pdp-desc" className="hidden">{product.description}</p>
            <p className="text-[11px] font-medium tracking-widest-2xl uppercase text-gold-dark mb-3">
              {product.category}
            </p>
            <h1 id="pdp-name" className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-wider uppercase leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.round(product.rating) ? '#C9A96E' : 'none'}
                    className={i < Math.round(product.rating) ? 'text-gold' : 'text-stone-300'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-xs text-stone-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl sm:text-3xl text-stone-900 mt-4">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="text-sm text-stone-600 leading-relaxed mt-4">
              {product.description}
            </p>

            <div className="w-full h-px bg-stone-200 my-6" />

            {/* Variant selector */}
            <div>
              <p className="text-[11px] font-medium tracking-widest-xl uppercase text-stone-600 mb-3">
                Tone: <span className="text-stone-900">{product.variants.find(v => v.id === selectedVariant)?.name}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`px-5 py-2 text-[12px] font-medium tracking-widest-xl uppercase border rounded-sm transition-all ${
                      selectedVariant === variant.id
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-300 text-stone-600 hover:border-stone-500'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[11px] font-medium tracking-widest-xl uppercase text-stone-600 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-stone-200 rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-stone-500 hover:text-stone-800 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium text-stone-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-stone-500 hover:text-stone-800 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-6 bg-stone-900 text-white py-4 text-[13px] font-medium tracking-widest-xl uppercase hover:bg-stone-800 transition-colors rounded-sm"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5">
              <div className="flex items-center gap-1.5 text-stone-500">
                <Truck size={14} strokeWidth={1.5} />
                <span className="text-[11px]">Free Shipping</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-500">
                <RotateCcw size={14} strokeWidth={1.5} />
                <span className="text-[11px]">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-500">
                <Shield size={14} strokeWidth={1.5} />
                <span className="text-[11px]">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-stone-200">
              {accordions.map((section) => (
                <div key={section.id} className="border-b border-stone-200">
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-[12px] font-medium tracking-widest-xl uppercase text-stone-700">
                      {section.title}
                    </span>
                    {expandedAccordion === section.id ? (
                      <ChevronUp size={16} className="text-stone-400" />
                    ) : (
                      <ChevronDown size={16} className="text-stone-400" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedAccordion === section.id ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 sm:mt-28">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-900">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

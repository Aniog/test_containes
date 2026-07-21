import { useEffect, useRef, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, ChevronDown, Star, Truck, RotateCcw, Sparkles, ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { StarRating } from '@/components/StarRating'
import { ProductCard } from '@/components/ProductCard'

const accordionData = [
  {
    id: 'description',
    title: 'Description',
    icon: Sparkles,
  },
  {
    id: 'care',
    title: 'Materials & Care',
    icon: Sparkles,
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    icon: Truck,
  },
]

export default function ProductPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = getProductById(productId)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null)
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [added, setAdded] = useState(false)

  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return undefined
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeImage, product?.id])

  if (!product) {
    return (
      <div className="container-velmora flex min-h-screen flex-col items-center justify-center bg-cream-100 pt-24 text-center">
        <p className="font-serif text-2xl">Product not found</p>
        <Link to="/shop" className="btn-primary mt-6">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const titleId = `${product.id}-title`
  const images = [
    { id: `${product.id}-img-1`, ratio: '4x3', width: 900 },
    { id: `${product.id}-img-2`, ratio: '4x3', width: 900 },
    { id: `${product.id}-img-3`, ratio: '4x3', width: 900 },
    { id: `${product.id}-img-4`, ratio: '4x3', width: 900 },
  ]

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordionContent = {
    description: product.description,
    care: (
      <div className="space-y-2">
        <p>{product.materials.join(' · ')}</p>
        <p>
          To keep your pieces luminous, store them in the provided pouch, avoid contact with perfumes and lotions, and wipe gently with a soft cloth after wear.
        </p>
      </div>
    ),
    shipping: (
      <div className="space-y-2">
        <p>Free worldwide shipping on all orders over $75.</p>
        <p>Orders ship within 1–2 business days. Returns accepted within 30 days of delivery in original condition.</p>
      </div>
    ),
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-cream-100 pt-20 md:pt-24">
      <div className="container-velmora py-8 md:py-12">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-warmgray-500 transition-colors hover:text-espresso-900 md:mb-8"
        >
          <ArrowLeft size={14} />
          Back
        </button>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col gap-4 md:flex-row-reverse">
            <div className="aspect-[4/5] overflow-hidden bg-warmgray-100 md:flex-1">
              <img
                data-strk-img-id={images[activeImage].id}
                data-strk-img={`[${titleId}]`}
                data-strk-img-ratio={images[activeImage].ratio}
                data-strk-img-width={String(images[activeImage].width)}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto md:w-20 md:flex-col md:overflow-visible scrollbar-hide">
              {images.map((img, idx) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square w-20 flex-shrink-0 overflow-hidden bg-warmgray-100 ring-1 transition-all ${activeImage === idx ? 'ring-espresso-900' : 'ring-transparent hover:ring-warmgray-300'}`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={`[${titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="font-sans text-xs text-warmgray-500">({product.reviewCount} reviews)</span>
            </div>
            <h1 id={titleId} className="product-title text-lg md:text-xl">
              {product.name}
            </h1>
            <p className="mt-2 font-serif text-3xl font-medium text-espresso-900 md:text-4xl">
              {formatPrice(product.price)}
            </p>
            <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-warmgray-600">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mt-6">
                <span className="section-label">Tone</span>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`rounded-full border px-5 py-2 font-sans text-xs font-semibold uppercase tracking-widest transition-all ${selectedVariant === variant ? 'border-espresso-900 bg-espresso-900 text-cream-100' : 'border-warmgray-300 text-espresso-900 hover:border-espresso-900'}`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <span className="section-label">Quantity</span>
              <div className="mt-3 inline-flex items-center border border-warmgray-200">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-warmgray-500 hover:text-espresso-900"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="min-w-[2rem] text-center font-sans text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-warmgray-500 hover:text-espresso-900"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`btn-primary mt-8 w-full transition-all ${added ? 'bg-gold-light' : ''}`}
            >
              {added ? 'Added to Bag' : 'Add to Cart'}
            </button>

            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="flex flex-col items-center gap-2 border border-warmgray-200 py-4">
                <Truck size={18} className="text-gold-dark" strokeWidth={1.5} />
                <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-warmgray-500">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-2 border border-warmgray-200 py-4">
                <RotateCcw size={18} className="text-gold-dark" strokeWidth={1.5} />
                <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-warmgray-500">30-Day Returns</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-warmgray-200">
              {accordionData.map((section) => {
                const isOpen = openAccordion === section.id
                const Icon = section.icon
                return (
                  <div key={section.id} className="border-b border-warmgray-200">
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(isOpen ? null : section.id)}
                      className="flex w-full items-center justify-between py-4 text-left"
                    >
                      <span className="inline-flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-widest text-espresso-900">
                        <Icon size={16} className="text-gold-dark" strokeWidth={1.5} />
                        {section.title}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-warmgray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}
                    >
                      <div className="font-sans text-sm leading-relaxed text-warmgray-600">
                        {accordionContent[section.id]}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <h2 id="related-title" className="mb-8 font-display text-2xl font-medium md:text-3xl">You may also like</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} contextId="related-title" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

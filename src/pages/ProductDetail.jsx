import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const pageRef = useRef(null)

  useEffect(() => {
    if (pageRef.current) {
      return ImageHelper.loadImages(strkImgConfig, pageRef.current)
    }
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-brand-espresso">Product Not Found</h1>
          <Link to="/shop" className="mt-4 inline-block font-sans text-sm text-brand-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: (
        <div>
          <p className="font-sans text-sm text-brand-muted leading-relaxed">{product.description}</p>
          <ul className="mt-4 space-y-2">
            {product.details.map((detail, i) => (
              <li key={i} className="font-sans text-sm text-brand-muted flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <p className="font-sans text-sm text-brand-muted"><strong className="text-brand-charcoal">Material:</strong> {product.material}</p>
          <p className="font-sans text-sm text-brand-muted"><strong className="text-brand-charcoal">Care:</strong> Avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft cloth.</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <p className="font-sans text-sm text-brand-muted"><strong className="text-brand-charcoal">Shipping:</strong> Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express available at checkout.</p>
          <p className="font-sans text-sm text-brand-muted"><strong className="text-brand-charcoal">Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
        </div>
      ),
    },
  ]

  return (
    <main ref={pageRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 font-sans text-xs text-brand-muted-light">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-brand-charcoal capitalize">{product.category}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div className="space-y-4">
            {/* Hidden product description for image query */}
            <span id={`pdp-name-${product.id}`} className="sr-only">{product.name} {product.category} gold jewelry close up</span>

            {/* Main image */}
            <div className="relative aspect-square bg-brand-ivory overflow-hidden">
              <div
                className="absolute inset-0"
                data-strk-bg-id={`pdp-main-img-${product.id}`}
                data-strk-bg={`[pdp-name-${product.id}]`}
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="800"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-brand-ivory flex items-center justify-center border border-brand-sand/50 hover:border-brand-gold transition-colors cursor-pointer">
                  <span className="text-[10px] font-sans text-brand-muted-light">{i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="py-2 md:py-4">
            <h1 className="font-serif text-xl md:text-2xl uppercase tracking-product text-brand-espresso">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    fill={i < Math.floor(product.rating) ? '#C9A96E' : '#E8DFD3'}
                    stroke={i < Math.floor(product.rating) ? '#C9A96E' : '#E8DFD3'}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-brand-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium text-brand-charcoal mt-4">
              ${product.price}
            </p>

            {/* Description */}
            <p className="font-sans text-sm text-brand-muted mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <label className="font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal font-medium">
                  Tone
                </label>
                <div className="flex gap-3 mt-3">
                  {product.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 font-sans text-xs uppercase tracking-wider border transition-colors ${
                        selectedVariant === variant
                          ? 'border-brand-gold bg-brand-gold/5 text-brand-gold'
                          : 'border-brand-sand text-brand-muted hover:border-brand-charcoal'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <label className="font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal font-medium">
                Quantity
              </label>
              <div className="flex items-center gap-4 mt-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-brand-sand flex items-center justify-center text-brand-muted hover:border-brand-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm font-medium text-brand-charcoal w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-brand-sand flex items-center justify-center text-brand-muted hover:border-brand-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 bg-brand-gold text-white py-4 font-sans text-xs uppercase tracking-wide-xl hover:bg-brand-gold-dark transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-sand">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-brand-sand">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-sm text-brand-charcoal font-medium">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-brand-muted transition-transform duration-300 ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4 animate-fade-in">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 pt-16 border-t border-brand-sand">
          <h2 className="font-serif text-2xl md:text-3xl text-brand-espresso text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { products, pdpImages } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl text-espresso">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold text-sm underline">Back to Shop</Link>
      </div>
    )
  }

  const images = pdpImages[product.id] || {}
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const accordions = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: product.materials },
    { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Delivered in 5–7 business days. 30-day hassle-free returns — simply contact us and we\'ll arrange everything.' },
  ]

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-stone">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="aspect-square bg-ivory overflow-hidden">
              <img
                src={images.main || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square bg-ivory overflow-hidden">
                <img
                  src={images.thumb1 || product.image2}
                  alt={`${product.name} view 2`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
              <div className="aspect-square bg-ivory overflow-hidden">
                <img
                  src={images.thumb2 || product.image}
                  alt={`${product.name} view 3`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
              <div className="aspect-square bg-ivory overflow-hidden">
                <img
                  src={images.thumb3 || product.image2}
                  alt={`${product.name} view 4`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="py-2">
            <h1
              id={`pdp-product-name-${product.id}`}
              className="font-serif text-2xl md:text-3xl font-medium text-espresso uppercase tracking-product"
            >
              {product.name}
            </h1>

            <p className="mt-3 text-xl font-medium text-charcoal">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-sand'}`}
                    fill={i < Math.round(product.rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="text-xs text-stone">({product.reviewCount} reviews)</span>
            </div>

            <p className="mt-5 text-sm text-stone leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-wide text-charcoal mb-3">Tone</p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs font-medium uppercase tracking-product border transition-colors ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-cream'
                        : 'border-sand text-charcoal hover:border-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-wide text-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-ivory transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium border-x border-sand">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-ivory transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full py-4 bg-gold text-cream text-sm font-medium uppercase tracking-product hover:bg-gold-dark transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-sand">
              {accordions.map(acc => (
                <div key={acc.key} className="border-b border-sand">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-charcoal">{acc.title}</span>
                    <ChevronDown className={`w-4 h-4 text-stone transition-transform ${openAccordion === acc.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === acc.key && (
                    <p className="pb-4 text-sm text-stone leading-relaxed">{acc.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24 border-t border-sand pt-12">
          <h2 className="font-serif text-2xl md:text-3xl text-espresso font-medium text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

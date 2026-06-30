import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { products } from '../lib/data'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/product/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-sm text-gold hover:underline">← Back to Shop</Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  return (
    <div className="pt-24 md:pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-8">
        <nav className="flex items-center gap-2 text-xs text-taupe font-light">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="aspect-square bg-linen relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-linen via-sand/30 to-gold/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 rounded-full bg-gold/15 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gold/25 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-gold/40" />
                    </div>
                  </div>
                  <span className="text-xs text-taupe uppercase tracking-wider">{product.category}</span>
                </div>
              </div>
              {product.badge && (
                <span className="absolute top-4 left-4 bg-charcoal text-cream text-[10px] uppercase tracking-wider px-3 py-1.5 font-sans">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-linen border border-sand hover:border-gold transition-colors cursor-pointer flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gold/20" />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:py-4">
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-widest-plus text-charcoal mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-xl text-charcoal font-light mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-sand'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe">({product.reviewCount} reviews)</span>
            </div>

            {/* Description */}
            <p className="text-sm text-charcoal/70 font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-charcoal font-medium mb-3">
                Tone: <span className="font-light capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-xs uppercase tracking-wider font-sans border transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'border-charcoal bg-charcoal text-cream'
                        : 'border-sand text-charcoal hover:border-charcoal bg-transparent'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wider text-charcoal font-medium mb-3">Quantity</p>
              <div className="inline-flex items-center border border-sand">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal hover:text-gold transition-colors bg-transparent border-none"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-sm font-medium text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal hover:text-gold transition-colors bg-transparent border-none"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-charcoal text-cream text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-gold transition-colors duration-300 border-none mb-8"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-sand">
              {[
                { key: 'description', title: 'Description', content: product.description },
                { key: 'materials', title: 'Materials & Care', content: product.materials },
                { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express delivery 2–3 business days. 30-day hassle-free returns — items must be unworn and in original packaging.' },
              ].map(item => (
                <div key={item.key} className="border-b border-sand">
                  <button
                    onClick={() => toggleAccordion(item.key)}
                    className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none"
                  >
                    <span className="text-xs uppercase tracking-wider text-charcoal font-medium">{item.title}</span>
                    <ChevronDown className={`w-4 h-4 text-taupe transition-transform duration-200 ${openAccordion === item.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-4">
                      <p className="text-sm text-charcoal/70 font-light leading-relaxed">{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28 pt-16 border-t border-sand">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal">You May Also Like</h2>
          </div>
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

import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/shop/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()

  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold text-sm underline">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: `${product.materials}\n\nCare: Avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently polish with a soft cloth to maintain shine.`,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5-7 business days. Express delivery 2-3 business days available at checkout.\n\n30-day returns on unworn items in original packaging. Contact us for a prepaid return label.',
    },
  ]

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-6 md:mb-8">
          <ol className="flex items-center gap-2 text-xs text-taupe list-none p-0 m-0">
            <li><Link to="/" className="hover:text-gold transition-colors no-underline text-taupe">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-gold transition-colors no-underline text-taupe">Shop</Link></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div>
            <div className="aspect-square bg-ivory flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-sand/60 flex items-center justify-center mb-3">
                  <span className="text-gold text-3xl font-serif">V</span>
                </div>
                <span className="text-xs text-taupe uppercase tracking-wider">{product.name}</span>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-ivory flex items-center justify-center cursor-pointer border border-transparent hover:border-gold transition-colors">
                  <span className="text-[9px] text-taupe">{i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="py-2">
            <h1 className="product-name text-xl md:text-2xl text-charcoal">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5" fill={i < Math.floor(product.rating) ? '#B8860B' : 'none'} stroke={i < Math.floor(product.rating) ? '#B8860B' : '#E8E0D4'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-taupe">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="mt-4 text-2xl font-serif text-charcoal">${product.price}</p>

            {/* Short description */}
            <p className="mt-4 text-sm text-taupe leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-charcoal font-medium mb-2">Tone</p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                      variant === v
                        ? 'border-gold bg-gold text-cream'
                        : 'border-sand text-charcoal bg-transparent hover:border-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-charcoal font-medium mb-2">Quantity</p>
              <div className="flex items-center gap-0 border border-sand inline-flex">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors bg-transparent border-none cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm text-charcoal border-x border-sand">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors bg-transparent border-none cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full py-4 bg-gold text-cream text-sm uppercase tracking-wider font-medium hover:bg-gold-dark transition-colors border-none cursor-pointer"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-sand">
              {accordions.map(acc => (
                <div key={acc.key} className="border-b border-sand">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer"
                  >
                    <span className="text-sm text-charcoal font-medium">{acc.title}</span>
                    <ChevronDown className={`w-4 h-4 text-taupe transition-transform duration-200 ${openAccordion === acc.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4 text-sm text-taupe leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-sand">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">You May Also Like</h2>
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

import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/home/ProductCard'

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
        <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-gold underline">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

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
      content: `${product.materials}\n\nCare: Store in the included pouch. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.`,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express delivery 2–3 business days. 30-day hassle-free returns — items must be unworn and in original packaging.',
    },
  ]

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 md:mb-8">
          <ol className="flex items-center gap-2 text-xs text-muted-fg">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Images */}
          <div className="space-y-3">
            <div className="aspect-square bg-muted flex items-center justify-center">
              <span className="font-serif text-xl text-muted-fg/40 italic">{product.name}</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-muted cursor-pointer hover:opacity-80 transition-opacity" />
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="py-2">
            <h1 className="font-sans text-sm font-medium uppercase tracking-product text-charcoal">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-3">
              <span className="font-serif text-2xl md:text-3xl font-medium text-charcoal">
                ${product.price}
              </span>
            </div>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-fg">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-5 text-sm text-muted-fg leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs font-sans font-medium uppercase tracking-widest text-charcoal mb-3">
                Tone
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs font-sans font-medium uppercase tracking-widest border transition-colors ${
                      variant === v
                        ? 'border-gold bg-gold text-cream'
                        : 'border-border text-charcoal hover:border-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-sans font-medium uppercase tracking-widest text-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-0 border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-muted transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium text-charcoal border-x border-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-muted transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="mt-8 w-full py-4 bg-gold text-cream font-sans text-sm font-medium uppercase tracking-widest hover:bg-gold-light transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {accordions.map(acc => (
                <div key={acc.key} className="border-b border-border">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-sans font-medium text-charcoal">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-fg transition-transform ${
                        openAccordion === acc.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4 text-sm text-muted-fg leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28 border-t border-border pt-12 md:pt-16">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-charcoal mb-8 md:mb-10">
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

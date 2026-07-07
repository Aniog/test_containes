import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-accent font-sans text-sm no-underline hover:text-accent-light">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: '18K gold plated over a hypoallergenic brass base. Nickel-free and lead-free. To maintain shine, avoid contact with water, perfume, and lotions. Store in the included pouch when not wearing.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery takes 5–7 business days. Express shipping available at checkout. 30-day returns accepted — items must be unworn and in original packaging.',
    },
  ]

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-muted font-sans">
          <Link to="/" className="hover:text-accent no-underline text-muted">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-accent no-underline text-muted">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-muted-light flex items-center justify-center mb-4">
              <div className="text-center">
                <span className="text-sm text-muted/60 font-sans uppercase tracking-wider block">
                  {product.category}
                </span>
                <span className="text-xs text-muted/40 font-sans mt-2 block">
                  Product Image
                </span>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-muted-light flex items-center justify-center cursor-pointer hover:ring-1 hover:ring-accent transition-all">
                  <span className="text-xs text-muted/40 font-sans">{i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="py-2">
            <h1 className="font-serif text-2xl md:text-3xl text-charcoal uppercase tracking-product">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-accent' : 'text-border'}`}
                    fill={i < Math.floor(product.rating) ? '#B8860B' : 'none'}
                  />
                ))}
              </div>
              <span className="text-xs text-muted font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-4 text-2xl font-serif text-charcoal">${product.price}</p>

            <p className="mt-6 text-sm text-muted font-sans leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mt-8">
                <p className="text-xs uppercase tracking-wider text-muted font-sans mb-3">Tone</p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 text-sm font-sans capitalize border transition-colors cursor-pointer ${
                        selectedVariant === v
                          ? 'border-accent bg-accent text-white'
                          : 'border-border bg-transparent text-charcoal hover:border-accent'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-wider text-muted font-sans mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border flex items-center justify-center bg-transparent hover:border-accent transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4 text-charcoal" />
                </button>
                <span className="text-base font-sans text-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border flex items-center justify-center bg-transparent hover:border-accent transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4 text-charcoal" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-accent text-white py-4 text-sm uppercase tracking-wide-btn font-sans font-medium hover:bg-accent-light transition-colors border-none cursor-pointer"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-border">
                  <button
                    onClick={() => toggleAccordion(acc.id)}
                    className="w-full flex items-center justify-between py-4 bg-transparent border-none cursor-pointer text-left"
                  >
                    <span className="text-sm font-sans text-charcoal">{acc.title}</span>
                    <ChevronDown className={`w-4 h-4 text-muted transition-transform ${openAccordion === acc.id ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4">
                      <p className="text-sm text-muted font-sans leading-relaxed">{acc.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24 pt-12 border-t border-border">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

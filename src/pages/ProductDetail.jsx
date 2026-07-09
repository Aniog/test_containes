import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import ProductCard from '@/components/product/ProductCard'

const ProductDetail = () => {
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
        <Link to="/shop" className="mt-4 inline-block text-gold text-sm font-sans">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
  }

  const accordions = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: `${product.material}\n\n${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <main className="pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs font-sans text-muted">
          <Link to="/" className="text-muted no-underline hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="text-muted no-underline hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div>
            <div className="aspect-square bg-surface flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <span className="font-serif text-3xl text-gold">V</span>
                </div>
                <p className="text-sm text-muted font-sans capitalize">{product.category}</p>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2 mt-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-surface border border-border flex items-center justify-center cursor-pointer hover:border-gold transition-colors">
                  <span className="text-xs text-muted">{i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="py-2">
            <h1 className="font-sans text-sm font-medium tracking-widest uppercase text-charcoal">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-4 font-serif text-3xl text-charcoal">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 text-sm text-muted font-sans leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-8">
                <p className="text-xs font-sans font-medium tracking-wider uppercase text-charcoal mb-3">
                  Tone
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={`px-5 py-2.5 text-xs font-sans font-medium tracking-wider uppercase border cursor-pointer transition-colors ${
                        variant === v
                          ? 'bg-charcoal text-white border-charcoal'
                          : 'bg-transparent text-charcoal border-border hover:border-charcoal'
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
              <p className="text-xs font-sans font-medium tracking-wider uppercase text-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-charcoal hover:text-gold transition-colors cursor-pointer"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-sans font-medium text-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-charcoal hover:text-gold transition-colors cursor-pointer"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-gold text-white py-4 text-sm font-sans font-medium tracking-widest uppercase hover:bg-gold-light transition-colors border-none cursor-pointer"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {accordions.map(acc => (
                <div key={acc.key} className="border-b border-border">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 bg-transparent border-none cursor-pointer text-left"
                  >
                    <span className="text-sm font-sans font-medium text-charcoal">{acc.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted transition-transform duration-200 ${
                        openAccordion === acc.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4">
                      <p className="text-sm text-muted font-sans leading-relaxed whitespace-pre-line">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28 border-t border-border pt-16">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-light text-center mb-10">
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

export default ProductDetail

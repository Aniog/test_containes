import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/home/ProductCard'

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl text-text">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-accent hover:underline">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: `Material: ${product.material}. Care: Avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently polish with a soft cloth to maintain shine.`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express delivery 2–3 business days. 30-day hassle-free returns — items must be unworn and in original packaging.',
    },
  ]

  return (
    <main className="pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-text-muted">
          <Link to="/" className="hover:text-text transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-text transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-text">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="space-y-3">
            <div className="aspect-square bg-accent-light rounded-sm flex items-center justify-center">
              <span className="font-serif text-accent/30 text-2xl text-center px-8">
                {product.name}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map(i => (
                <div
                  key={i}
                  className="aspect-square bg-accent-light rounded-sm flex items-center justify-center cursor-pointer border border-transparent hover:border-accent transition-colors"
                >
                  <span className="text-xs text-accent/30">{i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:py-4">
            <h1 className="font-serif text-2xl lg:text-3xl uppercase tracking-product text-text">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border-dark'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mt-4 text-2xl font-medium text-text">${product.price}</p>

            {/* Description */}
            <p className="mt-4 text-sm text-text-muted leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-product text-text mb-3">
                  Tone
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 text-xs font-medium uppercase tracking-wide-sm border rounded-sm transition-colors ${
                        selectedVariant === v
                          ? 'border-accent bg-accent text-white'
                          : 'border-border text-text hover:border-border-dark'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-product text-text mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-border rounded-sm flex items-center justify-center hover:border-border-dark transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-border rounded-sm flex items-center justify-center hover:border-border-dark transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full py-4 bg-accent text-white text-sm font-medium uppercase tracking-product text-center rounded-sm hover:bg-accent-hover transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-border">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-text">{acc.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-text-muted transition-transform ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4 text-sm text-text-muted leading-relaxed">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 lg:mt-24 pt-12 border-t border-border">
          <h2 className="font-serif text-2xl lg:text-3xl text-text text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default ProductDetail

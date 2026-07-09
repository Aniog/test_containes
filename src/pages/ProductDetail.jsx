import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <p className="text-muted">Product not found.</p>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <nav className="text-xs text-muted">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted-light overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square bg-muted-light overflow-hidden">
                <img
                  src={product.imageAlt}
                  alt={`${product.name} detail`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
              <div className="aspect-square bg-muted-light overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} on model`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
              <div className="aspect-square bg-muted-light overflow-hidden">
                <img
                  src={product.imageAlt}
                  alt={`${product.name} packaging`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="py-2">
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-product text-charcoal">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted">({product.reviewCount} reviews)</span>
            </div>

            <p className="text-2xl font-serif text-charcoal mt-4">${product.price}</p>

            <p className="mt-6 text-muted text-sm leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-charcoal font-medium mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest border transition-colors ${
                      selectedVariant === v
                        ? 'border-accent bg-accent text-white'
                        : 'border-border text-charcoal hover:border-accent'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-charcoal font-medium mb-3">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-accent transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-accent transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 bg-accent text-white py-4 text-sm uppercase tracking-widest font-medium hover:bg-accent-light transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {[
                { key: 'description', title: 'Description', content: product.description },
                { key: 'materials', title: 'Materials & Care', content: product.materials },
                { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express delivery 2–3 business days. 30-day hassle-free returns — items must be unworn and in original packaging.' },
              ].map(item => (
                <div key={item.key} className="border-b border-border">
                  <button
                    onClick={() => toggleAccordion(item.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-charcoal">{item.title}</span>
                    <ChevronDown className={`w-4 h-4 text-muted transition-transform ${openAccordion === item.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-4">
                      <p className="text-sm text-muted leading-relaxed">{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24 border-t border-border pt-12">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

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
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  const product = products.find(p => p.id === id)
  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [id])

  if (!product) {
    return (
      <main className="pt-24 pb-20 text-center">
        <p className="text-muted-foreground">Product not found.</p>
        <Link to="/shop" className="text-accent mt-4 inline-block">Back to Shop</Link>
      </main>
    )
  }

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
      content: product.materials + ' Clean gently with a soft cloth. Store in the included pouch to prevent tarnishing.',
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Delivered in 5-7 business days. 30-day returns — if you\'re not completely in love, send it back for a full refund.',
    },
  ]

  return (
    <main ref={containerRef} className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-muted overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-title] gold jewelry close up`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square bg-muted overflow-hidden">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-${product.id}-title] gold jewelry detail ${i === 1 ? 'worn' : i === 2 ? 'close up' : 'packaging'}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <nav className="text-xs text-muted-foreground mb-4">
              <Link to="/" className="hover:text-accent transition-colors no-underline text-muted-foreground">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/shop" className="hover:text-accent transition-colors no-underline text-muted-foreground">Shop</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{product.name}</span>
            </nav>

            <h1
              id={`pdp-${product.id}-title`}
              className="font-serif text-2xl lg:text-3xl uppercase tracking-product text-foreground"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-4 text-2xl font-serif text-foreground">${product.price}</p>

            <p
              id={`pdp-${product.id}-desc`}
              className="mt-4 text-sm text-muted-foreground leading-relaxed"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest font-medium text-foreground mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest border transition-colors ${
                      variant === v
                        ? 'border-accent bg-accent text-accent-foreground'
                        : 'border-border bg-transparent text-foreground hover:border-accent'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest font-medium text-foreground mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-border bg-transparent text-foreground hover:border-accent transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-border bg-transparent text-foreground hover:border-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-accent text-accent-foreground py-4 text-sm uppercase tracking-widest font-medium hover:bg-accent-hover transition-colors border-none"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {accordions.map(acc => (
                <div key={acc.key} className="border-b border-border">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 bg-transparent border-none text-foreground"
                  >
                    <span className="text-sm uppercase tracking-widest font-medium">{acc.title}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openAccordion === acc.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{acc.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 lg:mt-28 border-t border-border pt-16">
          <h2 className="font-serif text-2xl lg:text-3xl text-foreground text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

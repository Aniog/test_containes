import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/lib/data'
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
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-primary">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-accent underline">Back to Shop</Link>
      </div>
    )
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  const accordions = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: product.materials },
    { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Items must be unworn and in original packaging.' },
  ]

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.imgId}`}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-title]`}
                data-strk-img-ratio="1x1"
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
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-x${i}y${i}z${i}`}
                    data-strk-img={`[pdp-${product.id}-title] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} detail ${i}`}
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <nav className="text-xs text-muted-foreground mb-4">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
              <span className="mx-2">/</span>
              <span className="text-primary">{product.name}</span>
            </nav>

            <h1
              id={`pdp-${product.id}-title`}
              className="font-serif text-3xl lg:text-4xl text-primary uppercase tracking-product mb-3"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-2xl text-primary mb-6">${product.price}</p>

            <p id={`pdp-${product.id}-desc`} className="text-sm text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest font-medium text-primary mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest font-medium border transition-colors ${
                      variant === v
                        ? 'border-accent bg-accent text-white'
                        : 'border-border text-muted-foreground hover:border-accent hover:text-accent'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest font-medium text-primary mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium text-primary w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="w-full bg-accent text-white py-4 uppercase tracking-widest text-sm font-medium hover:bg-accent-hover transition-colors mb-8"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-border">
              {accordions.map(acc => (
                <div key={acc.key} className="border-b border-border">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-primary">{acc.title}</span>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${openAccordion === acc.key ? 'rotate-180' : ''}`} />
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
          <h2 className="font-serif text-3xl text-primary text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

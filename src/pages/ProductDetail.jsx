import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  const product = products.find(p => p.id === id)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-gold hover:text-gold-light transition-colors no-underline">
          ← Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const accordions = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `${product.materials}\n\nCare: Avoid contact with water, perfume, and lotions. Store in the included pouch when not wearing. Gently polish with a soft cloth to maintain shine.`,
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express delivery 2–3 business days ($12). 30-day hassle-free returns — items must be unworn and in original packaging.',
    },
  ]

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-muted-fg">
          <Link to="/" className="hover:text-gold transition-colors no-underline text-muted-fg">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors no-underline text-muted-fg">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={`pdp-main-${product.id}-e1f2g3`}
                data-strk-img={`[pdp-${product.id}-name] [pdp-${product.id}-desc] gold jewelry product photo`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-muted overflow-hidden cursor-pointer border border-transparent hover:border-gold transition-colors">
                  <img
                    alt={`${product.name} view ${i}`}
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-h4i5j6`}
                    data-strk-img={`[pdp-${product.id}-name] gold jewelry detail view ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1
              id={`pdp-${product.id}-name`}
              className="font-serif text-2xl md:text-3xl text-charcoal uppercase tracking-product"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-fg">({product.reviewCount} reviews)</span>
            </div>

            <p className="mt-4 font-serif text-2xl text-charcoal">${product.price}</p>

            <p id={`pdp-${product.id}-desc`} className="mt-6 text-sm text-muted-fg leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <span className="text-xs font-medium text-charcoal uppercase tracking-wide">Tone</span>
              <div className="flex gap-3 mt-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-xs font-medium uppercase tracking-wide border transition-all cursor-pointer ${
                      variant === v
                        ? 'border-gold bg-gold text-cream'
                        : 'border-border bg-transparent text-charcoal hover:border-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs font-medium text-charcoal uppercase tracking-wide">Quantity</span>
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border flex items-center justify-center bg-transparent hover:border-gold transition-colors cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border flex items-center justify-center bg-transparent hover:border-gold transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="w-full mt-8 py-4 bg-gold text-cream font-sans text-sm font-medium uppercase tracking-widest hover:bg-gold-light transition-colors border-none cursor-pointer"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {accordions.map((acc, i) => (
                <div key={i} className="border-b border-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 bg-transparent border-none cursor-pointer text-left"
                  >
                    <span className="text-sm font-medium text-charcoal">{acc.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-fg transition-transform duration-300 ${
                        openAccordion === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === i && (
                    <div className="pb-4 text-sm text-muted-fg leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 border-t border-border pt-16">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group no-underline">
                <div className="aspect-[3/4] bg-muted overflow-hidden mb-3">
                  <img
                    alt={p.name}
                    data-strk-img-id={`related-${p.id}-k7l8m9`}
                    data-strk-img={`[related-${p.id}-title] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span id={`related-${p.id}-title`} className="block font-sans text-xs font-medium uppercase tracking-product text-charcoal">
                  {p.name}
                </span>
                <span className="block mt-1 text-sm text-muted-fg">${p.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

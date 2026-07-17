import { useState, useEffect, useRef } from 'react'
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
      <div className="min-h-screen flex items-center justify-center pt-20">
        <p className="text-muted-fg font-sans">Product not found.</p>
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
      content: `${product.materials}\n\nCare: Store in the included pouch. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express delivery 2–3 business days. 30-day hassle-free returns — items must be unworn and in original packaging.',
    },
  ]

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-w4x5y6`}
                data-strk-img={`[pdp-${product.id}-name] [pdp-${product.id}-desc] gold jewelry editorial`}
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
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}-z7a8b9`}
                    data-strk-img={`[pdp-${product.id}-name] gold jewelry detail view ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <h1
              id={`pdp-${product.id}-name`}
              className="font-serif text-2xl md:text-3xl text-charcoal uppercase tracking-widest"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold'
                        : 'text-border'
                    }`}
                    fill={i < Math.floor(product.rating) ? '#B8860B' : 'none'}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-fg font-sans">
                ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-4 text-2xl font-serif text-charcoal">
              ${product.price}
            </p>

            <p
              id={`pdp-${product.id}-desc`}
              className="mt-6 text-sm text-charcoal/70 font-sans leading-relaxed"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-muted-fg font-sans mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 rounded-full text-sm font-sans capitalize transition-all border ${
                      variant === v
                        ? 'border-gold text-gold bg-gold/5'
                        : 'border-border text-charcoal/70 hover:border-gold/50 bg-transparent'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-muted-fg font-sans mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-border bg-transparent hover:border-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4 text-charcoal" />
                </button>
                <span className="text-base font-sans text-charcoal w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-border bg-transparent hover:border-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4 text-charcoal" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="mt-8 w-full bg-gold text-white py-4 text-sm uppercase tracking-widest font-sans hover:bg-gold-light transition-colors border-none"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 bg-transparent border-none text-left"
                  >
                    <span className="text-sm font-sans text-charcoal">{acc.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-fg transition-transform ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4">
                      <p className="text-sm text-charcoal/70 font-sans leading-relaxed whitespace-pre-line">
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
        <div className="mt-16 md:mt-24 border-t border-border pt-12">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(rp => (
              <Link
                key={rp.id}
                to={`/product/${rp.id}`}
                className="group no-underline"
              >
                <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    data-strk-img-id={`related-${rp.id}-c0d1e2`}
                    data-strk-img={`[related-${rp.id}-title] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3
                  id={`related-${rp.id}-title`}
                  className="mt-3 text-xs uppercase tracking-widest text-charcoal font-sans font-medium"
                >
                  {rp.name}
                </h3>
                <p className="mt-1 text-sm text-charcoal font-sans">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

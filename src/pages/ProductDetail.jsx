import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold text-sm">Back to Shop</Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const accordions = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: product.materials },
    { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Standard delivery 5-7 business days. Express delivery 2-3 business days. 30-day hassle-free returns — items must be unworn and in original packaging.' },
  ]

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.imgId}`}
                data-strk-img={`[pdp-${product.id}-desc] [pdp-${product.id}-title] gold jewelry close-up`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  data-strk-img-id={`pdp-thumb1-${product.imgId2}`}
                  data-strk-img={`[pdp-${product.id}-title] gold jewelry detail`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  data-strk-img-id={`pdp-thumb2-${product.id}-z1a2b3`}
                  data-strk-img={`[pdp-${product.id}-title] jewelry on model`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} on model`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  data-strk-img-id={`pdp-thumb3-${product.id}-c4d5e6`}
                  data-strk-img={`[pdp-${product.id}-title] jewelry packaging gift`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} packaging`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <h1 id={`pdp-${product.id}-title`} className="product-name text-lg md:text-xl text-charcoal">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-fg">({product.reviewCount} reviews)</span>
            </div>

            <p className="mt-4 text-2xl font-serif text-charcoal">${product.price}</p>

            <p id={`pdp-${product.id}-desc`} className="mt-6 text-sm text-muted-fg leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs font-medium text-charcoal tracking-wide uppercase mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs font-medium tracking-wide capitalize rounded-full border transition-colors ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-white'
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
              <p className="text-xs font-medium text-charcoal tracking-wide uppercase mb-3">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm text-charcoal border-x border-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-gold text-white text-sm font-medium tracking-wide py-4 hover:bg-gold-light transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {accordions.map(acc => (
                <div key={acc.key} className="border-b border-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-charcoal">{acc.title}</span>
                    <ChevronDown className={`w-4 h-4 text-muted-fg transition-transform ${openAccordion === acc.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4">
                      <p className="text-sm text-muted-fg leading-relaxed">{acc.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 border-t border-border pt-12">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(rp => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    data-strk-img-id={`related-${rp.imgId}`}
                    data-strk-img={`[related-${rp.id}-title] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 id={`related-${rp.id}-title`} className="product-name text-xs text-charcoal mt-3">
                  {rp.name}
                </h3>
                <p className="mt-1 text-sm text-muted-fg">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

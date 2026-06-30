import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import products from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem, openCart } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')

  useEffect(() => { window.scrollTo(0, 0) }, [id])
  useEffect(() => {
    if (product) setSelectedVariant(product.variants[0])
    setQuantity(1)
    setActiveImage(0)
  }, [product])

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl tracking-wider mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-xs tracking-widest uppercase text-velmora-gold">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    openCart()
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-velmora-sand rounded-sm overflow-hidden mb-4">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-name-${product.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span id={`pdp-name-${product.id}`} className="hidden">{product.name}</span>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square bg-velmora-sand rounded-sm overflow-hidden border-2 transition-colors ${i === activeImage ? 'border-velmora-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-name-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="text-[10px] tracking-widest uppercase text-velmora-muted mb-2">{product.category}</p>
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-hairline'}`} />
                ))}
              </div>
              <span className="text-xs text-velmora-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="text-2xl font-medium text-velmora-deep mb-4">${product.price}</p>
            <p className="text-sm text-velmora-muted leading-relaxed mb-6">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-velmora-muted mb-3">Finish</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs tracking-wider uppercase border transition-colors rounded-sm ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-hairline text-velmora-muted hover:border-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-velmora-muted mb-3">Quantity</p>
              <div className="flex items-center gap-3 border border-velmora-hairline rounded-sm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:text-velmora-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:text-velmora-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-velmora-gold text-white text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold-dark transition-colors rounded-sm mb-10"
            >
              Add to Bag — ${(product.price * quantity).toFixed(0)}
            </button>

            {/* Accordions */}
            <div className="border-t border-velmora-hairline">
              {[
                { key: 'description', label: 'Description', content: product.description },
                { key: 'materials', label: 'Materials & Care', content: `${product.materials}\n\nCare: ${product.care}` },
                { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
              ].map((section) => (
                <div key={section.key} className="border-b border-velmora-hairline">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === section.key ? '' : section.key)}
                    className="w-full flex items-center justify-between py-4 text-xs tracking-widest uppercase hover:text-velmora-gold transition-colors"
                  >
                    {section.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openAccordion === section.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === section.key && (
                    <div className="pb-5 text-sm text-velmora-muted leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20 pt-16 border-t border-velmora-hairline">
            <h2 className="font-serif text-xl md:text-2xl tracking-wider text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link to={`/product/${p.id}`} key={p.id} className="group block">
                  <div className="aspect-[3/4] bg-velmora-sand rounded-sm overflow-hidden mb-3">
                    <img
                      data-strk-img-id={`related-${p.id}`}
                      data-strk-img={`[related-name-${p.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span id={`related-name-${p.id}`} className="hidden">{p.name}</span>
                  <p className="font-serif text-xs tracking-widest uppercase truncate">{p.name}</p>
                  <p className="text-sm font-medium mt-0.5">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

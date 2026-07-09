import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { getProductById, products } from '@/data/products'
import { useCart } from '@/data/CartContext'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <p className="text-brand-muted font-sans">Product not found.</p>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const accordions = [
    { key: 'description', title: 'Description', content: product.details.description },
    { key: 'materials', title: 'Materials & Care', content: product.details.materials },
    { key: 'shipping', title: 'Shipping & Returns', content: product.details.shipping },
  ]

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-brand-ivory overflow-hidden">
              <img
                src={product.images[activeImage]?.url || product.images[0].url}
                alt={product.images[activeImage]?.alt || product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 bg-brand-ivory overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-brand-gold' : 'border-transparent hover:border-brand-sand'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl tracking-product uppercase text-brand-charcoal">
              {product.name}
            </h1>

            <p className="text-xl md:text-2xl font-sans text-brand-charcoal mt-3">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-muted font-sans">({product.reviewCount} reviews)</span>
            </div>

            <p className="text-sm text-brand-muted font-sans leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs font-sans font-medium tracking-wide uppercase text-brand-charcoal mb-3">
                Tone: <span className="capitalize font-normal text-brand-muted">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs tracking-widest uppercase font-sans font-medium border transition-colors ${
                      selectedVariant === v
                        ? 'border-brand-charcoal bg-brand-charcoal text-white'
                        : 'border-brand-sand text-brand-charcoal hover:border-brand-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-sans font-medium tracking-wide uppercase text-brand-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-brand-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-brand-ivory transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium border-x border-brand-sand">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-brand-ivory transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-brand-gold text-white py-4 text-sm tracking-widest uppercase font-sans font-medium hover:bg-brand-gold-dark transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-sand">
              {accordions.map(acc => (
                <div key={acc.key} className="border-b border-brand-sand">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-sans font-medium text-brand-charcoal">{acc.title}</span>
                    <ChevronDown className={`w-4 h-4 text-brand-muted transition-transform ${openAccordion === acc.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4 animate-fade-in">
                      <p className="text-sm text-brand-muted font-sans leading-relaxed">{acc.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 border-t border-brand-sand pt-12">
          <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

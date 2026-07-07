import { useState, useMemo, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, Check } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { cn, formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import { StarRating } from '@/components/ui/StarRating'
import { Accordions } from '@/components/ui/Accordions'
import { ProductCard } from '@/components/ui/ProductCard'

const VARIANTS = ['gold', 'silver']

export default function Product() {
  const { productId } = useParams()
  const product = useMemo(() => getProductById(productId), [productId])
  const related = useMemo(() => getRelatedProducts(productId), [productId])
  const { addToCart } = useCart()

  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setActiveImage(0)
    setVariant('gold')
    setQuantity(1)
    setAdded(false)
  }, [productId])

  if (!product) {
    return (
      <main className="pt-28 pb-20 bg-velvet min-h-screen">
        <div className="mx-auto max-w-8xl px-4 text-center">
          <h1 className="font-serif text-3xl text-cream mb-4">Product Not Found</h1>
          <Link
            to="/shop"
            className="inline-block px-8 py-3 bg-cream text-velvet text-xs font-sans uppercase tracking-[0.16em] font-medium hover:bg-ivory-dark transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    )
  }

  const images = product.images[variant] || product.images.gold

  const handleAdd = () => {
    addToCart(product, { variant, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  const accordionItems = [
    {
      title: 'Description',
      content: (
        <div className="space-y-3">
          <p>{product.description}</p>
          <ul className="list-disc pl-5 space-y-1">
            {product.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: 'Materials & Care',
      content: (
        <ul className="list-disc pl-5 space-y-1">
          {product.care.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <ul className="list-disc pl-5 space-y-1">
          {product.shipping.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      ),
    },
  ]

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-28 bg-velvet min-h-screen">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-warm-gray mb-8 md:mb-12">
          <Link to="/" className="hover:text-cream transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-cream transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-cream">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-velvet-secondary overflow-hidden">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    'w-20 h-24 md:w-24 md:h-28 overflow-hidden border transition-colors',
                    activeImage === idx ? 'border-accent' : 'border-cream/10 hover:border-cream/30'
                  )}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:pt-6">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest text-cream">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <StarRating
                rating={product.rating}
                count={product.reviewCount}
                size={14}
              />
            </div>

            <p className="mt-5 font-serif text-2xl md:text-3xl text-cream">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 text-warm-gray leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <p className="font-sans text-xs uppercase tracking-[0.16em] text-cream mb-3">
                Metal Tone
              </p>
              <div className="flex gap-3">
                {VARIANTS.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      'px-6 py-2.5 text-xs font-sans uppercase tracking-[0.16em] border transition-colors',
                      variant === v
                        ? 'border-accent text-accent'
                        : 'border-cream/30 text-cream hover:border-cream/60'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="font-sans text-xs uppercase tracking-[0.16em] text-cream mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-cream/20">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-warm-gray hover:text-cream transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-cream font-sans">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-warm-gray hover:text-cream transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className={cn(
                'mt-8 w-full py-4 flex items-center justify-center gap-2 text-xs font-sans uppercase tracking-[0.18em] font-semibold transition-colors',
                added
                  ? 'bg-success text-velvet'
                  : 'bg-accent text-velvet hover:bg-accent-hover'
              )}
            >
              {added ? (
                <>
                  <Check size={16} /> Added to Bag
                </>
              ) : (
                'Add to Cart'
              )}
            </button>

            <div className="mt-8">
              <Accordions items={accordionItems} />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl text-cream mb-8 md:mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

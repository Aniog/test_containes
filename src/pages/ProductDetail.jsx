import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Heart, Truck, RefreshCcw, ShieldCheck } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { cn, formatPrice } from '@/lib/utils'
import { Stars } from '@/components/ui/Stars'
import { ProductGallery } from '@/components/product/ProductGallery'
import { Accordion } from '@/components/product/Accordion'
import { ProductCard } from '@/components/product/ProductCard'
import { useCart } from '@/context/CartContext'

export function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const [tone, setTone] = useState(product?.tone || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-3xl uppercase tracking-[0.1em] text-[#1A1614]">
          Product Not Found
        </h1>
        <p className="mt-3 text-[#6B625B]">
          The piece you are looking for is no longer available.
        </p>
        <Link
          to="/shop"
          className="mt-6 bg-[#B9975B] px-8 py-3 text-xs font-medium uppercase tracking-[0.14em] text-white hover:bg-[#A8864D]"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.slug)

  const handleAdd = () => {
    addItem(product, { tone, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.details },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div className="bg-[#F9F7F2] pb-20 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery product={product} />

          <div className="flex flex-col">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="mb-4 self-start text-xs font-medium uppercase tracking-[0.12em] text-[#6B625B] hover:text-[#B9975B]"
            >
              ← Back
            </button>

            <h1
              id={`pdp-title-${product.slug}`}
              className="font-serif text-2xl font-medium uppercase tracking-[0.18em] text-[#1A1614] md:text-3xl"
            >
              {product.name}
            </h1>
            <p className="mt-2 font-sans text-2xl font-light text-[#1A1614]">
              {formatPrice(product.price)}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <Stars rating={product.rating} size={14} />
              <span className="text-xs text-[#6B625B]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-6 font-sans text-base font-light leading-relaxed text-[#6B625B]">
              {product.description}
            </p>

            <div className="mt-8">
              <span className="mb-3 block text-xs font-medium uppercase tracking-[0.12em] text-[#1A1614]">
                Metal Tone
              </span>
              <div className="flex gap-3">
                {['gold', 'silver'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={cn(
                      'px-6 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-all',
                      tone === t
                        ? 'bg-[#1A1614] text-white'
                        : 'border border-[#E2DDD5] bg-white text-[#6B625B] hover:border-[#B9975B]'
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="mb-3 block text-xs font-medium uppercase tracking-[0.12em] text-[#1A1614]">
                Quantity
              </span>
              <div className="inline-flex items-center border border-[#E2DDD5] bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2 text-[#6B625B] hover:bg-[#F2EFE9]"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm text-[#1A1614]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2 text-[#6B625B] hover:bg-[#F2EFE9]"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={handleAdd}
                className={cn(
                  'flex-1 py-4 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors',
                  added ? 'bg-[#6B8E6E]' : 'bg-[#B9975B] hover:bg-[#A8864D]'
                )}
              >
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button
                type="button"
                className="border border-[#E2DDD5] px-4 text-[#6B625B] transition-colors hover:border-[#B9975B] hover:text-[#B9975B]"
                aria-label="Add to wishlist"
              >
                <Heart size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2 border-t border-[#E2DDD5] pt-6">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RefreshCcw, label: '30-Day Returns' },
                { icon: ShieldCheck, label: '1-Year Warranty' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon size={20} strokeWidth={1.5} className="mx-auto mb-2 text-[#B9975B]" />
                  <span className="text-[10px] uppercase tracking-[0.1em] text-[#6B625B]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="mb-10 font-serif text-2xl font-light uppercase tracking-[0.08em] text-[#1A1614] md:text-3xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Check, ChevronRight, Heart, Truck, RotateCcw, Shield } from 'lucide-react'
import { getProductBySlug, PRODUCTS } from '@/data/products'
import { cn, formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import ProductGallery from '@/components/product/ProductGallery'
import VariantSelector from '@/components/product/VariantSelector'
import ProductAccordion from '@/components/product/ProductAccordion'
import RelatedProducts from '@/components/product/RelatedProducts'
import StarRating from '@/components/shared/StarRating'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = useMemo(() => getProductBySlug(slug), [slug])
  const { addItem } = useCart()
  const [variant, setVariant] = useState(product?.colors?.[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [justAdded, setJustAdded] = useState(false)

  useEffect(() => {
    setVariant(product?.colors?.[0] || 'gold')
    setQuantity(1)
  }, [product?.id])

  if (!product) {
    return (
      <section className="pt-32 pb-20 min-h-[60vh] bg-ivory-50">
        <div className="container-x text-center">
          <h1 className="font-serif text-[40px]">Not found</h1>
          <p className="mt-2 text-ink-500">This piece has slipped out of the collection.</p>
          <Link to="/shop" className="btn-outline mt-8">Back to shop</Link>
        </div>
      </section>
    )
  }

  const handleAdd = () => {
    addItem(product, { variant, quantity })
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1800)
  }

  const sections = [
    {
      id: 'description',
      title: 'Description',
      content: <p>{product.description}</p>,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <>
          <p className="mb-3">
            Hypoallergenic, nickel-free, and hand-finished in a small workshop.
          </p>
          <ul className="space-y-1.5 list-disc pl-5">
            {product.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p className="mt-5 font-medium text-ink-900">How to care for it</p>
          <ul className="mt-2 space-y-1.5 list-disc pl-5">
            {product.care.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <>
          <p className="mb-3">
            Free worldwide shipping on orders over $75. Most pieces ship in 1–3
            business days from our studio in Lisbon.
          </p>
          <ul className="space-y-1.5 list-disc pl-5">
            <li>Free standard shipping (5–8 business days)</li>
            <li>Express options at checkout</li>
            <li>30-day returns, free for members</li>
            <li>Lifetime plating refresh — bring it back to us any time</li>
          </ul>
        </>
      ),
    },
  ]

  return (
    <>
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-ivory-50">
        <div className="container-x">
          <nav className="text-[11px] uppercase tracking-[0.22em] text-ink-500 mb-8 flex items-center gap-2" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-ink-900">Home</Link>
            <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
            <Link to="/shop" className="hover:text-ink-900">Shop</Link>
            <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
            <span className="text-ink-800 truncate">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <ProductGallery product={product} />
            </div>
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              {product.badge && (
                <span className="eyebrow text-gold-600">{product.badge}</span>
              )}
              <h1 className="mt-3 font-serif text-ink-900 text-[34px] sm:text-[40px] lg:text-[44px] leading-[1.05] tracking-[-0.01em] uppercase">
                {product.name}
              </h1>
              <p className="mt-2 font-serif italic text-[18px] text-ink-600">
                {product.subtitle}
              </p>
              <div className="mt-5 flex items-center gap-4">
                <StarRating value={product.rating} count={product.reviewCount} />
              </div>
              <p className="mt-6 font-serif text-[32px] text-ink-900">
                {formatPrice(product.price)}
              </p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.22em] text-ink-500">
                Or 4 interest-free payments of {formatPrice(product.price / 4)}
              </p>

              <div className="mt-8 space-y-6">
                <VariantSelector product={product} value={variant} onChange={setVariant} />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-ink-700">
                      Quantity
                    </p>
                  </div>
                  <div className="inline-flex items-center border border-ink-900/20">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                      className="w-11 h-11 flex items-center justify-center hover:bg-ink-900/5"
                    >
                      <Minus className="w-4 h-4" strokeWidth={1.4} />
                    </button>
                    <span className="w-12 text-center text-[14px]">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      aria-label="Increase quantity"
                      className="w-11 h-11 flex items-center justify-center hover:bg-ink-900/5"
                    >
                      <Plus className="w-4 h-4" strokeWidth={1.4} />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  className={cn(
                    'w-full inline-flex items-center justify-center gap-2 px-8 py-5 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300',
                    justAdded
                      ? 'bg-ink-700 text-ivory-50'
                      : 'bg-ink-900 text-ivory-50 hover:bg-ink-700',
                  )}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4" strokeWidth={1.6} />
                      Added to bag
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                      Add to bag — {formatPrice(product.price * quantity)}
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 border border-ink-900/30 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-ink-900 hover:border-ink-900"
                >
                  <Heart className="w-4 h-4" strokeWidth={1.5} />
                  Save to wishlist
                </button>
              </div>

              <ul className="mt-8 pt-6 border-t border-ink-900/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-[11px] uppercase tracking-[0.18em] text-ink-600">
                <li className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-ink-700" strokeWidth={1.4} />
                  Free shipping
                </li>
                <li className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-ink-700" strokeWidth={1.4} />
                  30-day returns
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-ink-700" strokeWidth={1.4} />
                  Hypoallergenic
                </li>
              </ul>

              <div className="mt-8">
                <ProductAccordion sections={sections} defaultOpen="description" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts product={product} />
    </>
  )
}

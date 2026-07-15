import { ChevronDown, Heart, ShieldCheck, Truck } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useCart } from '@/components/cart/CartContext'
import ProductCard from '@/components/product/ProductCard'
import ProductImage from '@/components/product/ProductImage'
import QuantitySelector from '@/components/product/QuantitySelector'
import Rating from '@/components/product/Rating'
import { formatPrice, getProductBySlug, products } from '@/data/products'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addToCart } = useCart()
  const [selectedTone, setSelectedTone] = useState(product?.toneOptions?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return products
      .filter((item) => item.id !== product.id)
      .slice(0, 4)
  }, [product])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const detailSections = [
    { title: 'Description', body: product.description },
    { title: 'Materials & Care', body: `${product.material}. ${product.care}` },
    { title: 'Shipping & Returns', body: product.shipping },
  ]

  return (
    <main className="bg-velmora-cream pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:pb-24">
        <div className="grid gap-4 lg:grid-cols-[86px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto no-scrollbar lg:order-1 lg:flex-col lg:overflow-visible">
            {['thumb-one', 'thumb-two', 'thumb-three'].map((variant) => (
              <button key={variant} type="button" className="aspect-square w-20 shrink-0 overflow-hidden border border-velmora-linen bg-velmora-porcelain transition hover:border-velmora-champagne">
                <ProductImage
                  product={product}
                  variant={variant}
                  ratio="1x1"
                  width="220"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden border border-velmora-linen bg-velmora-porcelain shadow-soft lg:order-2">
            <ProductImage
              product={product}
              variant="detail-main"
              ratio="3x4"
              width="1100"
              className="aspect-[3/4] h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <div className="border border-velmora-linen bg-velmora-porcelain p-6 shadow-sm md:p-8">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p id={`product-${product.id}-material`} className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-antique">
                {product.material}
              </p>
              <button type="button" className="rounded-full border border-velmora-linen p-2 text-velmora-antique transition hover:bg-velmora-cream" aria-label="Save product">
                <Heart className="h-5 w-5" />
              </button>
            </div>
            <h1 id={`product-${product.id}-title`} className="font-serif text-5xl font-semibold uppercase leading-none tracking-[0.16em] text-velmora-espresso md:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-velmora-linen pb-6">
              <p className="font-serif text-4xl font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
              <Rating rating={product.rating} reviews={product.reviews} />
            </div>
            <p id={`product-${product.id}-desc`} className="mt-6 text-base leading-8 text-velmora-ink/80">
              {product.shortDescription}
            </p>

            <div className="mt-7 space-y-6">
              <div>
                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-sage">
                  Tone
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.toneOptions.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                        selectedTone === tone
                          ? 'border-velmora-champagne bg-velmora-champagne text-velmora-espresso'
                          : 'border-velmora-linen bg-velmora-porcelain text-velmora-espresso hover:border-velmora-champagne'
                      }`}
                      onClick={() => setSelectedTone(tone)}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <QuantitySelector value={quantity} onChange={setQuantity} />

              <button
                type="button"
                className="w-full rounded-full bg-velmora-champagne px-7 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-velmora-espresso shadow-glow transition hover:bg-velmora-antique hover:text-velmora-porcelain"
                onClick={() => addToCart(product, { tone: selectedTone, quantity })}
              >
                Add to Cart
              </button>

              <div className="grid gap-3 text-sm text-velmora-sage sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-velmora-antique" /> Free worldwide shipping
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-velmora-antique" /> Hypoallergenic finish
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 border border-velmora-linen bg-velmora-porcelain text-velmora-espresso">
            {detailSections.map((section) => {
              const isOpen = openAccordion === section.title
              return (
                <div key={section.title} className="border-b border-velmora-linen last:border-b-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-extrabold uppercase tracking-[0.2em] text-velmora-espresso"
                    onClick={() => setOpenAccordion(isOpen ? '' : section.title)}
                  >
                    {section.title}
                    <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-5 text-sm leading-7 text-velmora-ink/80">
                      {section.body}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-velmora-linen px-5 py-16 md:px-8 lg:py-24">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-antique">You may also like</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-none text-velmora-espresso md:text-6xl">
              Complete the ritual
            </h2>
          </div>
          <Link to="/shop" className="hidden text-sm font-bold uppercase tracking-[0.22em] text-velmora-antique transition hover:text-velmora-espresso md:block">
            Shop all
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} compact />
          ))}
        </div>
      </section>
    </main>
  )
}

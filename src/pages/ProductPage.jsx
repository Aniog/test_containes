import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductAccordion from '@/components/product/ProductAccordion'
import ProductGallery from '@/components/product/ProductGallery'
import RelatedProducts from '@/components/product/RelatedProducts'
import QuantitySelector from '@/components/ui/QuantitySelector'
import RatingStars from '@/components/ui/RatingStars'
import { useCart } from '@/context/CartContext'
import { formatCurrency, getProductBySlug } from '@/data/store'

function ProductPage() {
  const { slug } = useParams()
  const product = useMemo(() => getProductBySlug(slug), [slug])
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  useEffect(() => {
    setSelectedTone(product?.tones?.[0] ?? 'Gold Tone')
    setQuantity(1)
  }, [product])

  if (!product) {
    return (
      <section className="bg-ivory py-24">
        <div className="section-shell rounded-[32px] border border-line bg-pearl px-6 py-16 text-center shadow-card">
          <p className="font-serif text-4xl text-ink">This piece is no longer available.</p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-velvet px-6 py-3 text-sm uppercase tracking-[0.18em] text-ivory transition duration-300 hover:bg-velvet-soft"
          >
            Return to shop
          </Link>
        </div>
      </section>
    )
  }

  const accordionItems = [
    {
      key: 'description',
      label: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      label: 'Materials & Care',
      content: product.care,
    },
    {
      key: 'shipping',
      label: 'Shipping & Returns',
      content: product.shipping,
    },
  ]

  return (
    <>
      <section className="bg-ivory py-12 md:py-16">
        <div className="section-shell">
          <Link
            to="/shop"
            className="inline-flex text-xs uppercase tracking-[0.2em] text-truffle transition duration-300 hover:text-champagne-deep"
          >
            Back to collection
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
            <ProductGallery product={product} />

            <div className="space-y-6 rounded-[32px] border border-line bg-pearl p-6 shadow-card md:p-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.22em] text-truffle">{product.category}</p>
                <h1 className="font-serif text-4xl uppercase tracking-luxe text-ink md:text-5xl">
                  {product.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-2xl text-ink">{formatCurrency(product.price)}</span>
                  <RatingStars rating={product.rating} reviews={product.reviews} />
                </div>
                <p className="max-w-xl text-base leading-8 text-truffle">{product.shortDescription}</p>
              </div>

              <div className="rounded-[28px] border border-line bg-ivory p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-truffle">Variant</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {product.tones.map((tone) => {
                    const active = selectedTone === tone

                    return (
                      <button
                        key={tone}
                        type="button"
                        className={[
                          'rounded-full border px-5 py-3 text-xs uppercase tracking-[0.18em] transition duration-300',
                          active
                            ? 'border-champagne bg-champagne text-velvet'
                            : 'border-line bg-pearl text-truffle hover:border-champagne hover:text-ink',
                        ].join(' ')}
                        onClick={() => setSelectedTone(tone)}
                      >
                        {tone}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-5 rounded-[28px] border border-line bg-ivory p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-truffle">Quantity</p>
                  <div className="mt-4">
                    <QuantitySelector
                      value={quantity}
                      onChange={(value) => setQuantity(Math.max(1, value))}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-champagne px-6 text-sm uppercase tracking-[0.2em] text-velvet transition duration-300 hover:bg-champagne-deep sm:w-auto sm:min-w-[260px]"
                  onClick={() => addItem(product, selectedTone, quantity)}
                >
                  Add to Cart
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.materials.map((material) => (
                  <span
                    key={material}
                    className="rounded-full border border-line bg-ivory px-4 py-2 text-xs uppercase tracking-[0.16em] text-truffle"
                  >
                    {material}
                  </span>
                ))}
              </div>

              <ProductAccordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts slug={product.slug} />
    </>
  )
}

export default ProductPage

import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Accordion from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import QuantitySelector from '@/components/ui/QuantitySelector'
import Stars from '@/components/ui/Stars'
import ProductGallery from '@/components/products/ProductGallery'
import RelatedProducts from '@/components/products/RelatedProducts'
import { getProductBySlug } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ProductPage() {
  const { slug } = useParams()
  const product = useMemo(() => getProductBySlug(slug), [slug])
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const galleryRef = useRef(null)

  useEffect(() => {
    if (!product) {
      return
    }

    setSelectedVariant(product.variants[0] || 'Gold Tone')
    setQuantity(1)
  }, [product])

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50 px-4 pt-24 text-center">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Product not found</p>
          <h1 className="mt-4 font-serif-display text-4xl text-stone-950">This piece has moved on.</h1>
          <Link to="/shop" className="mt-6 inline-flex text-sm uppercase tracking-[0.3em] text-stone-900">
            Return to shop
          </Link>
        </div>
      </div>
    )
  }

  const accordionItems = [
    { id: 'description', label: 'Description', content: product.description },
    { id: 'materials', label: 'Materials & Care', content: product.materials },
    { id: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div className="bg-stone-50 pb-20 pt-28 sm:pb-24 sm:pt-32">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div ref={galleryRef}>
            <ProductGallery product={product} containerRef={galleryRef} />
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm shadow-stone-950/5 sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">{product.category}</p>
            <h1 className="mt-4 font-serif-display text-4xl uppercase tracking-[0.26em] text-stone-950 sm:text-5xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-3">
              <Stars rating={product.rating} />
              <span className="text-sm text-stone-500">{product.rating} · {product.reviewCount} reviews</span>
            </div>
            <p className="mt-5 text-2xl text-stone-950">${product.price}</p>
            <p className="mt-5 text-base leading-7 text-stone-600">{product.shortDescription}</p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.34em] text-stone-500">Variant</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants.map((variant) => {
                  const isActive = selectedVariant === variant
                  return (
                    <button
                      key={variant}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.28em] transition ${
                        isActive
                          ? 'border-stone-950 bg-stone-950 text-stone-50'
                          : 'border-stone-300 bg-stone-50 text-stone-900 hover:border-stone-900'
                      }`}
                    >
                      {variant}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-stone-500">Quantity</p>
                <div className="mt-3">
                  <QuantitySelector value={quantity} onChange={setQuantity} />
                </div>
              </div>
              <div className="text-right text-sm leading-6 text-stone-500">
                <p>Free worldwide shipping</p>
                <p>Gift-ready packaging</p>
              </div>
            </div>

            <Button
              className="mt-8 w-full"
              size="lg"
              onClick={() => addItem(product, selectedVariant, quantity)}
            >
              Add to Cart
            </Button>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts slug={product.slug} />
    </div>
  )
}

export default ProductPage

import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Stars from '@/components/common/Stars'
import QuantitySelector from '@/components/common/QuantitySelector'
import ProductAccordion from '@/components/product/ProductAccordion'
import ProductGallery from '@/components/product/ProductGallery'
import RelatedProducts from '@/components/product/RelatedProducts'
import { getProductBySlug, getRelatedProducts } from '@/data/storefront'
import { useStore } from '@/context/StoreContext'
import { useStrkImages } from '@/hooks/useStrkImages'
import { formatCurrency } from '@/lib/format'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addToCart } = useStore()
  const [selectedTone, setSelectedTone] = useState(product?.tones[0] ?? 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(product?.imageIds.primary ?? '')
  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])
  const containerRef = useStrkImages([slug, selectedTone, quantity, activeImage])

  useEffect(() => {
    if (!product) {
      return
    }

    setSelectedTone(product.tones[0])
    setQuantity(1)
    setActiveImage(product.imageIds.primary)
  }, [product])

  if (!product) {
    return <Navigate replace to="/shop" />
  }

  const accordionItems = [
    { title: 'Description', content: product.details },
    { title: 'Materials & Care', content: product.materials },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div ref={containerRef} className="bg-velmora-ivory pt-28 lg:pt-32">
      <section className="mx-auto max-w-7xl px-4 pb-12 md:px-6 lg:px-8 lg:pb-16">
        <div className="mb-6 flex items-center gap-2 text-sm text-velmora-stone">
          <Link to="/" className="transition-colors duration-300 hover:text-velmora-ink">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="transition-colors duration-300 hover:text-velmora-ink">
            Shop
          </Link>
          <span>/</span>
          <span className="text-velmora-ink">{product.name}</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.08fr,0.92fr] lg:gap-12">
          <ProductGallery
            activeImage={activeImage}
            onImageChange={setActiveImage}
            product={product}
          />

          <div className="rounded-[2rem] border border-velmora-line/80 bg-white/75 p-6 shadow-velmora-soft lg:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-gold">{product.category}</p>
            <h1 id={`pdp-${product.slug}-title`} className="mt-4 font-serif text-5xl uppercase leading-none tracking-velmora text-velmora-ink md:text-6xl">
              {product.displayName}
            </h1>
            <div className="mt-5 flex items-center gap-4">
              <p className="text-2xl font-semibold text-velmora-ink">{formatCurrency(product.price)}</p>
              <div className="flex items-center gap-2 text-sm text-velmora-stone">
                <Stars className="h-3.5 w-3.5" />
                <span>{product.rating} · {product.reviewCount} reviews</span>
              </div>
            </div>
            <p id={`pdp-${product.slug}-desc`} className="mt-6 text-base leading-8 text-velmora-stone">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-stone">Tone</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.tones.map((tone) => {
                  const active = tone === selectedTone

                  return (
                    <button
                      key={tone}
                      type="button"
                      className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${active ? 'border-velmora-gold bg-velmora-gold text-velmora-ink' : 'border-velmora-line bg-white text-velmora-ink hover:border-velmora-gold'}`}
                      onClick={() => setSelectedTone(tone)}
                    >
                      {tone} tone
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-stone">Quantity</p>
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-full bg-velmora-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-velmora-gold-deep hover:text-velmora-ivory sm:w-auto sm:min-w-[18rem]"
                onClick={() => addToCart(product, selectedTone, quantity)}
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-velmora-line/80 bg-velmora-cream/70 px-5 py-4 text-sm leading-7 text-velmora-stone">
              Signature gift boxing included. Hypoallergenic, easy to layer, and designed for daily wear.
            </div>

            <div className="mt-8">
              <ProductAccordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
    </div>
  )
}

export default ProductDetail

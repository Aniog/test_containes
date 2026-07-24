import { useMemo, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import ProductAccordions from '../components/product/ProductAccordions'
import ProductGallery from '../components/product/ProductGallery'
import RelatedProducts from '../components/product/RelatedProducts'
import QuantitySelector from '../components/common/QuantitySelector'
import Stars from '../components/common/Stars'
import {
  formatCurrency,
  getProductBySlug,
  getRelatedProducts,
  toneOptions,
} from '../data/store'
import { useCart } from '../context/CartContext'
import useStrkImages from '../lib/useStrkImages'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(product?.gallery?.[0])
  const [openSection, setOpenSection] = useState('description')
  const { addToCart } = useCart()
  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])
  const containerRef = useStrkImages([slug, activeImage?.id])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const sections = [
    { id: 'description', label: 'Description', content: product.description },
    { id: 'materials', label: 'Materials & Care', content: product.materialsCare },
    { id: 'shipping', label: 'Shipping & Returns', content: product.shippingReturns },
  ]

  const handleAddToCart = () => {
    addToCart(product, { tone: selectedTone, quantity })
  }

  return (
    <div ref={containerRef} className="bg-stone-950 text-stone-50">
      <section className="px-6 pb-16 pt-28 lg:px-10 lg:pb-24 lg:pt-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <ProductGallery
            product={product}
            activeImage={activeImage}
            onImageSelect={setActiveImage}
          />

          <div className="space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4 border-b border-stone-200/10 pb-8">
              <p className="text-xs uppercase tracking-[0.28em] text-amber-200">{product.category}</p>
              <h1 className="font-display text-5xl uppercase leading-none tracking-product text-stone-50 md:text-6xl">
                {product.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-2xl text-stone-50">{formatCurrency(product.price)}</p>
                <Stars value={product.rating} reviews={product.reviews} light />
              </div>
              <p className="max-w-xl text-base leading-8 text-stone-300">{product.shortDescription}</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Tone</p>
                <div className="flex flex-wrap gap-3">
                  {toneOptions.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={[
                        'rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] transition',
                        selectedTone === tone
                          ? 'border-amber-200 bg-amber-200 text-stone-950'
                          : 'border-stone-200/10 bg-stone-900 text-stone-200 hover:border-stone-200/30',
                      ].join(' ')}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Quantity</p>
                <QuantitySelector
                  value={quantity}
                  onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
                  onIncrease={() => setQuantity((current) => current + 1)}
                />
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full rounded-full bg-amber-200 px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-950 transition duration-300 hover:bg-amber-100"
              >
                Add to Cart
              </button>

              <div className="rounded-[1.75rem] border border-stone-200/10 bg-stone-900/50 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Finish</p>
                <p className="mt-2 text-sm leading-7 text-stone-300">{product.finish}</p>
              </div>
            </div>

            <ProductAccordions
              sections={sections}
              openSection={openSection}
              onToggle={(sectionId) =>
                setOpenSection((current) => (current === sectionId ? '' : sectionId))
              }
            />
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
    </div>
  )
}

export default ProductDetail

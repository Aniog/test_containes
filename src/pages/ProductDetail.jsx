import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { useNavigate, useParams } from 'react-router-dom'
import AccordionItem from '@/components/shared/AccordionItem.jsx'
import QuantitySelector from '@/components/shared/QuantitySelector.jsx'
import StarRating from '@/components/shared/StarRating.jsx'
import ProductGallery from '@/components/product/ProductGallery.jsx'
import RelatedProducts from '@/components/product/RelatedProducts.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { products } from '@/data/store.js'
import strkImgConfig from '@/strk-img-config.json'
import { formatPrice } from '@/lib/utils'

function ProductDetail() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [activeImage, setActiveImage] = useState(0)
  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')

  const product = products.find((item) => item.id === productId)
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [productId, activeImage])

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== productId).slice(0, 4),
    [productId],
  )

  if (!product) {
    navigate('/shop', { replace: true })
    return null
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.care },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div ref={containerRef} className="bg-stone-50 pt-28 md:pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-8 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <ProductGallery
            product={product}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
          />

          <div className="space-y-8 lg:sticky lg:top-32">
            <div className="space-y-4 border-b border-stone-200 pb-8">
              <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
                {product.badge}
              </p>
              <h1
                id={product.titleId}
                className="font-display text-4xl uppercase tracking-[0.24em] text-stone-900 md:text-5xl"
              >
                {product.name}
              </h1>
              <div className="flex items-center justify-between gap-6">
                <StarRating rating={product.rating} reviews={product.reviews} />
                <p className="text-2xl text-stone-900">{formatPrice(product.price)}</p>
              </div>
              <p id={product.descId} className="text-sm leading-8 text-stone-600 md:text-base">
                {product.shortDescription}
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Tone</p>
                <div className="flex flex-wrap gap-3">
                  {product.tones.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.24em] transition ${
                        selectedTone === tone
                          ? 'border-stone-950 bg-stone-950 text-stone-100'
                          : 'border-stone-300 bg-white text-stone-700'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Quantity</p>
                <QuantitySelector
                  quantity={quantity}
                  onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
                  onIncrease={() => setQuantity((current) => current + 1)}
                />
              </div>

              <button
                type="button"
                onClick={() => addToCart(product, quantity, selectedTone)}
                className="w-full rounded-full bg-amber-200 px-6 py-4 text-xs uppercase tracking-[0.28em] text-stone-950 transition hover:bg-amber-100"
              >
                Add to Cart
              </button>
            </div>

            <div>
              {accordionItems.map((item) => (
                <AccordionItem
                  key={item.title}
                  title={item.title}
                  content={item.content}
                  isOpen={openAccordion === item.title}
                  onToggle={() =>
                    setOpenAccordion((current) =>
                      current === item.title ? '' : item.title,
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
    </div>
  )
}

export default ProductDetail

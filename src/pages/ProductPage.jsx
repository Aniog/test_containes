import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductGallery from '../components/product/ProductGallery.jsx'
import AccordionItem from '../components/shared/AccordionItem.jsx'
import ProductGrid from '../components/shared/ProductGrid.jsx'
import QuantitySelector from '../components/shared/QuantitySelector.jsx'
import RatingStars from '../components/shared/RatingStars.jsx'
import { useCart } from '../context/CartContext.jsx'
import { formatCurrency } from '../lib/format.js'
import { getProductBySlug, getRelatedProducts } from '../lib/store-data.js'

function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [openPanel, setOpenPanel] = useState('Description')
  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])

  useEffect(() => {
    if (!product) {
      return
    }

    setSelectedTone(product.tones[0])
    setQuantity(1)
    setActiveImageIndex(0)
    setOpenPanel('Description')
  }, [product])

  if (!product) {
    return (
      <section className="page-shell flex min-h-[60vh] flex-col items-center justify-center gap-6 pb-16 pt-28 text-center sm:pt-32">
        <p className="text-xs uppercase tracking-overline text-velmora-taupe">Product not found</p>
        <h1 className="font-display text-5xl text-velmora-espresso">This piece has moved on.</h1>
        <Link to="/shop" className="rounded-full bg-velmora-gold px-6 py-3 text-sm font-semibold uppercase tracking-overline text-velmora-espresso">
          Return to shop
        </Link>
      </section>
    )
  }

  const panels = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materials },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <section className="page-shell pb-16 pt-28 sm:pb-20 sm:pt-32">
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-16">
        <ProductGallery product={product} activeIndex={activeImageIndex} onChange={setActiveImageIndex} />

        <div className="lg:pt-6">
          <p className="text-xs uppercase tracking-overline text-velmora-taupe">{product.collection}</p>
          <h1 className="mt-4 font-display text-4xl uppercase tracking-product text-velmora-espresso sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="text-2xl font-medium text-velmora-espresso">{formatCurrency(product.price)}</p>
            <RatingStars rating={product.rating} reviews={product.reviews} />
          </div>
          <p className="mt-6 max-w-xl text-base leading-8 text-velmora-taupe">{product.shortDescription}</p>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-overline text-velmora-taupe">Tone</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {product.tones.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-full border px-5 py-3 text-sm font-medium transition ${selectedTone === tone ? 'border-velmora-gold bg-velmora-gold text-velmora-espresso' : 'border-velmora-line bg-white text-velmora-espresso hover:border-velmora-gold'}`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-overline text-velmora-taupe">Quantity</p>
              <div className="mt-3">
                <QuantitySelector
                  quantity={quantity}
                  onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
                  onIncrease={() => setQuantity((current) => current + 1)}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => addItem(product, selectedTone, quantity)}
              className="h-14 w-full rounded-full bg-velmora-gold px-6 text-sm font-semibold uppercase tracking-overline text-velmora-espresso transition hover:opacity-90 sm:max-w-[280px]"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-10 border-t border-velmora-line">
            {panels.map((panel) => (
              <AccordionItem
                key={panel.title}
                title={panel.title}
                content={panel.content}
                isOpen={openPanel === panel.title}
                onToggle={() => setOpenPanel((current) => (current === panel.title ? '' : panel.title))}
              />
            ))}
          </div>
        </div>
      </div>

      <section className="mt-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-overline text-velmora-taupe">You may also like</p>
          <h2 className="mt-3 font-display text-4xl text-velmora-espresso sm:text-5xl">Keep the story going</h2>
        </div>
        <ProductGrid products={relatedProducts} columns="compact" />
      </section>
    </section>
  )
}

export default ProductPage

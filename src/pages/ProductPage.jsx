import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Minus, Plus, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import Accordion from '../components/Accordion.jsx'
import ProductCard from '../components/ProductCard.jsx'
import ProductImage from '../components/ProductImage.jsx'
import { formatPrice, getProductById, products } from '../data/products.js'

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

function ProductPage({ onAddToCart }) {
  const pageRef = useRef(null)
  const { productId } = useParams()
  const product = getProductById(productId) || products[0]
  const [activeImage, setActiveImage] = useState('main')
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [product.id, activeImage])

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  const accordionItems = [
    { title: 'Description', content: product.details },
    { title: 'Materials & Care', content: product.care },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  const handleAdd = () => {
    onAddToCart(product, quantity, variant)
  }

  return (
    <main ref={pageRef} className="bg-velmora-cream pt-24 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-ui text-velmora-cocoa hover:text-velmora-antique">
          <ArrowLeft className="h-4 w-4" /> Back to shop
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
            <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
              {['main', 'detail', 'model'].map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={`aspect-square w-20 overflow-hidden border bg-velmora-blush/30 transition ${
                    activeImage === image ? 'border-velmora-antique' : 'border-velmora-line hover:border-velmora-antique'
                  }`}
                  aria-label={`Show ${image} image`}
                >
                  <img
                    alt={`${product.name} ${image}`}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`pdp-thumb-${product.id}-${image}`}
                    data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="240"
                    src={placeholder}
                  />
                </button>
              ))}
            </div>

            <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-blush/30 lg:order-2">
              <ProductImage
                product={product}
                context="pdp-gallery"
                variant={activeImage}
                titleId={`pdp-title-${product.id}`}
                descId={`pdp-desc-${product.id}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:h-max">
            <p className="text-xs font-bold uppercase tracking-ui text-velmora-antique">{product.badge}</p>
            <h1 id={`pdp-title-${product.id}`} className="mt-4 font-serif text-5xl uppercase leading-tight tracking-luxury text-velmora-ink sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center justify-between border-b border-velmora-line pb-5">
              <p className="text-2xl font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-2 text-velmora-antique">
                <div className="flex" aria-label={`${product.rating} stars`}>
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" strokeWidth={1.2} />
                  ))}
                </div>
                <span className="text-sm text-velmora-cocoa">{product.reviews} reviews</span>
              </div>
            </div>

            <p id={`pdp-desc-${product.id}`} className="mt-6 text-base leading-8 text-velmora-cocoa">{product.description}</p>

            <div className="mt-8 space-y-7">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-ui text-velmora-ink">Tone</p>
                <div className="flex gap-3">
                  {['Gold', 'Silver'].map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setVariant(tone)}
                      className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-ui transition ${
                        variant === tone
                          ? 'border-velmora-ink bg-velmora-ink text-velmora-cream'
                          : 'border-velmora-line bg-velmora-porcelain text-velmora-ink hover:border-velmora-antique'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-ui text-velmora-ink">Quantity</p>
                <div className="inline-flex items-center border border-velmora-line bg-velmora-porcelain text-velmora-ink">
                  <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-4 hover:bg-velmora-blush/40" aria-label="Decrease quantity">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-12 text-center font-semibold">{quantity}</span>
                  <button type="button" onClick={() => setQuantity(quantity + 1)} className="p-4 hover:bg-velmora-blush/40" aria-label="Increase quantity">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className="w-full bg-velmora-champagne px-6 py-4 text-sm font-bold uppercase tracking-ui text-velmora-ink transition hover:bg-velmora-ink hover:text-velmora-cream"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-9">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mb-8 border-b border-velmora-line pb-5">
          <p className="text-xs font-bold uppercase tracking-ui text-velmora-antique">Complete the ritual</p>
          <h2 className="mt-2 font-serif text-4xl text-velmora-ink">You may also like</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} context="related-products" />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductPage

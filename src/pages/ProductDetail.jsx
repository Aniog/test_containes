import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Navigate, useParams } from 'react-router-dom'
import ProductCard from '@/components/common/ProductCard'
import StarRating from '@/components/common/StarRating'
import AccordionItem from '@/components/product/AccordionItem'
import ProductGallery from '@/components/product/ProductGallery'
import { useCart } from '@/context/CartContext'
import {
  formatPrice,
  getProductBySlug,
  getRelatedProducts,
  materialsCopy,
  shippingCopy,
  toneOptions,
} from '@/data/store'
import strkImgConfig from '@/strk-img-config.json'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = useMemo(() => getProductBySlug(slug), [slug])
  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])
  const { addItem, openCart } = useCart()
  const [selectedTone, setSelectedTone] = useState(toneOptions[0])
  const [quantity, setQuantity] = useState(1)
  const containerRef = useRef(null)

  useEffect(() => {
    setSelectedTone(toneOptions[0])
    setQuantity(1)
  }, [slug])

  useEffect(() => {
    let cleanup

    const frameId = window.requestAnimationFrame(() => {
      if (!containerRef.current) {
        return
      }

      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [selectedTone, slug])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const handleAddToCart = () => {
    addItem(product, { quantity, variant: selectedTone })
    openCart()
  }

  return (
    <div ref={containerRef} className="bg-velmora-pearl pt-28 md:pt-36">
      <section className="page-shell pb-16 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <ProductGallery product={product} />

          <div className="max-w-xl text-velmora-ink">
            <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
              {product.category}
            </p>
            <h1 id="product-title" className="mt-4 font-heading text-4xl uppercase tracking-product md:text-5xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-2xl text-velmora-ink">{formatPrice(product.price)}</p>
              <StarRating rating={product.rating} reviewCount={product.reviewCount} />
            </div>
            <p id="product-short-desc" className="mt-6 text-base leading-8 text-velmora-ink/75">
              {product.shortDescription}
            </p>

            <div className="mt-8 space-y-7 rounded-[2rem] border border-velmora-sand/70 bg-velmora-mist p-6 shadow-soft">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-velmora-ink/60">
                  Tone
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {toneOptions.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      className={tone === selectedTone ? 'button-primary !px-5 !py-2.5 !text-xs' : 'button-secondary !px-5 !py-2.5 !text-xs'}
                      onClick={() => setSelectedTone(tone)}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-velmora-ink/60">
                  Quantity
                </p>
                <div className="mt-4 inline-flex items-center rounded-full border border-velmora-ink/10 bg-velmora-pearl p-1">
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-lg"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  >
                    −
                  </button>
                  <span className="min-w-10 text-center text-sm">{quantity}</span>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-lg"
                    onClick={() => setQuantity((current) => current + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button type="button" className="button-primary w-full" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>

            <div className="mt-8">
              <AccordionItem title="Description" defaultOpen>
                <p>{product.description}</p>
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <p>{materialsCopy}</p>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <p>{shippingCopy}</p>
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-velmora-mist py-16 md:py-24">
        <div className="page-shell space-y-10">
          <div>
            <p className="section-kicker">You may also like</p>
            <h2 className="section-title">Complete the collection</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard
                key={item.slug}
                product={item}
                onAddToCart={(relatedProduct) => {
                  addItem(relatedProduct, { quantity: 1, variant: toneOptions[0] })
                  openCart()
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail

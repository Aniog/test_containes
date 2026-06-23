import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { products, formatPrice } from '@/data/products.js'
import { useCart } from '@/context/CartContext.jsx'
import { useStockImages } from '@/hooks/useStockImages.js'
import ProductGallery from '@/components/product/ProductGallery.jsx'
import ProductAccordion from '@/components/product/ProductAccordion.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import StarRating from '@/components/common/StarRating.jsx'
import QuantitySelector from '@/components/common/QuantitySelector.jsx'

const ProductPage = () => {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const { addToCart } = useCart()
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!product) return
    setSelectedTone(product.tones?.[0] || 'Gold Tone')
    setQuantity(1)
  }, [product])

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return products.filter((item) => item.slug !== product.slug).slice(0, 3)
  }, [product])

  useStockImages(containerRef, [slug])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <main ref={containerRef} className="px-4 pb-20 pt-28 sm:px-6 lg:px-10 lg:pt-32">
      <div className="mx-auto max-w-7xl space-y-14">
        <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
          <Link to="/" className="transition hover:text-accent">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/shop" className="transition hover:text-accent">Shop</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <ProductGallery product={product} />

          <div className="space-y-8 text-foreground">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Velmora Signature</p>
              <h1 id={`pdp-${product.slug}-title`} className="text-4xl uppercase tracking-product text-foreground-strong sm:text-5xl">
                {product.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-2xl uppercase tracking-[0.18em] text-foreground">{formatPrice(product.price)}</p>
                <StarRating rating={product.rating} reviews={product.reviews} tone="light" />
              </div>
              <p className="max-w-xl text-sm leading-8 text-muted sm:text-base">{product.shortDescription}</p>
            </div>

            <div className="space-y-4 rounded-[1.75rem] border border-hairline-dark bg-base-muted p-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.24em] text-foreground">Choose Tone</p>
                <div className="flex flex-wrap gap-3">
                  {product.tones.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.22em] transition ${
                        selectedTone === tone
                          ? 'border-accent bg-accent text-ink'
                          : 'border-hairline-dark text-foreground hover:border-accent hover:text-accent'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.24em] text-foreground">Quantity</p>
                <QuantitySelector value={quantity} onChange={setQuantity} tone="dark" />
              </div>

              <button
                type="button"
                onClick={() => addToCart(product, { tone: selectedTone, quantity })}
                className="flex h-14 w-full items-center justify-center rounded-full bg-accent px-6 text-xs font-medium uppercase tracking-[0.24em] text-ink transition duration-300 hover-lift hover:brightness-105"
              >
                Add to Cart
              </button>
            </div>

            <ProductAccordion product={product} />
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between gap-4 border-t border-hairline-dark pt-10">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-accent">Related Pieces</p>
              <h2 className="mt-2 text-4xl text-foreground-strong">You may also like</h2>
            </div>
            <Link to="/shop" className="text-xs uppercase tracking-[0.2em] text-foreground transition hover:text-accent">
              Shop All
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} context="related" />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default ProductPage

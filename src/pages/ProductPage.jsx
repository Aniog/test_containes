import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductAccordions from '@/components/product/ProductAccordions'
import ProductGallery from '@/components/product/ProductGallery'
import ProductSummary from '@/components/product/ProductSummary'
import ProductCard from '@/components/shared/ProductCard'
import { productCatalog } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'
import NotFoundPage from './NotFoundPage'

function ProductPage() {
  const { productId } = useParams()
  const pageRef = useRef(null)
  const product = useMemo(
    () => productCatalog.find((item) => item.id === productId),
    [productId],
  )
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (!product) {
      return
    }

    setSelectedTone(product.tones[0])
    setQuantity(1)
  }, [product])

  useStrkImages(pageRef, [productId, selectedTone])

  if (!product) {
    return <NotFoundPage />
  }

  const relatedProducts = productCatalog.filter((item) => item.id !== product.id).slice(0, 3)

  return (
    <main className="px-4 pb-20 pt-28 sm:px-6 lg:px-10 lg:pt-32" ref={pageRef}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-stone-400">
          <Link className="transition hover:text-stone-100" to="/">
            Home
          </Link>
          <span>/</span>
          <Link className="transition hover:text-stone-100" to="/shop">
            Shop
          </Link>
          <span>/</span>
          <span className="text-stone-200">{product.name}</span>
        </div>

        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <ProductGallery product={product} />
          <ProductSummary
            product={product}
            quantity={quantity}
            selectedTone={selectedTone}
            setQuantity={setQuantity}
            setSelectedTone={setSelectedTone}
          />
        </section>

        <ProductAccordions product={product} />

        <section className="section-shell pt-6">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-amber-200">Curated for your jewelry wardrobe</p>
              <h2 className="font-display text-4xl text-stone-100 sm:text-5xl">
                You may also like
              </h2>
            </div>
            <Link className="button-secondary hidden sm:inline-flex" to="/shop">
              View all pieces
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard contextId="related-products-title" key={item.id} product={item} />
            ))}
          </div>

          <span className="sr-only" id="related-products-title">
            Velmora related products
          </span>
        </section>
      </div>
    </main>
  )
}

export default ProductPage

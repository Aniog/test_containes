import { Minus, Plus } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductAccordion } from '@/components/storefront/ProductAccordion.jsx'
import { ProductCard } from '@/components/storefront/ProductCard.jsx'
import { ProductGallery } from '@/components/storefront/ProductGallery.jsx'
import { ProductRating, SectionHeading, formatPrice } from '@/components/storefront/storefront-utils.jsx'
import { getProductById, getRelatedProducts } from '@/data/products.js'
import { useCart } from '@/context/CartContext.jsx'
import { useStrkImages } from '@/hooks/useStrkImages.js'

export function ProductPage() {
  const { slug } = useParams()
  const product = getProductById(slug)
  const { addToCart } = useCart()
  const pageRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState(product?.colors?.[0] ?? 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImageId, setSelectedImageId] = useState(product?.gallery?.[0]?.id ?? '')

  useStrkImages(pageRef, [selectedVariant, quantity, selectedImageId])

  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-stone-50 px-5 text-stone-900">
        <div className="space-y-4 text-center">
          <p className="font-serif text-4xl">Piece not found</p>
          <Link to="/shop" className="text-sm uppercase tracking-[0.26em] text-stone-600 underline-offset-4 hover:underline">
            Return to shop
          </Link>
        </div>
      </main>
    )
  }

  const accordionItems = [
    { title: 'Description', content: product.details },
    { title: 'Materials & Care', content: `${product.material}. ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  const titleId = `pdp-${product.id}-title`
  const descId = `pdp-${product.id}-desc`

  return (
    <main ref={pageRef} className="bg-stone-50 pt-28 text-stone-900 md:pt-32">
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-10 xl:px-16">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-[0.68rem] uppercase tracking-[0.28em] text-stone-500">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <span className="text-stone-900">{product.name}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] xl:gap-16">
          <ProductGallery
            product={product}
            selectedImageId={selectedImageId}
            onSelectImage={setSelectedImageId}
          />

          <div className="space-y-8 lg:sticky lg:top-32 lg:self-start">
            <div className="space-y-5 border-b border-stone-200 pb-8">
              <p className="text-[0.72rem] uppercase tracking-[0.34em] text-amber-700">{product.category}</p>
              <div className="space-y-4">
                <h1 id={titleId} className="font-serif text-4xl uppercase tracking-[0.22em] text-stone-950 sm:text-5xl">
                  {product.name}
                </h1>
                <p className="text-xl text-stone-900">{formatPrice(product.price)}</p>
                <ProductRating rating={product.rating} reviews={product.reviews} />
                <p id={descId} className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Tone</p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedVariant(color)}
                      className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${selectedVariant === color ? 'bg-stone-900 text-stone-50' : 'border border-stone-300 bg-white text-stone-900 hover:border-stone-900'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Quantity</p>
                <div className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-2 py-1 text-stone-900">
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-10 text-center text-sm">{quantity}</span>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                    onClick={() => setQuantity((current) => current + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addToCart(product, selectedVariant, quantity)}
                className="w-full rounded-full bg-amber-700 px-6 py-4 text-xs font-medium uppercase tracking-[0.3em] text-white transition hover:bg-amber-800"
              >
                Add to Cart
              </button>
            </div>

            <ProductAccordion items={accordionItems} />
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 xl:px-16">
          <SectionHeading
            eyebrow="You may also like"
            title="More from the Velmora edit"
            description="Considered companions for layering, gifting, and effortless everyday styling."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

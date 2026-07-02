import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductGallery from '@/components/product/ProductGallery'
import ProductCard from '@/components/product/ProductCard'
import AccordionList from '@/components/ui/AccordionList'
import Button from '@/components/ui/Button'
import QuantitySelector from '@/components/ui/QuantitySelector'
import StarRating from '@/components/ui/StarRating'
import { formatCurrency, getRelatedProducts, productLookup } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/lib/useStrkImages'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = productLookup[productId]
  const [variant, setVariant] = React.useState(product?.variants?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = React.useState(1)
  const { addItem } = useCart()
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    if (!product) return
    setVariant(product.variants[0])
    setQuantity(1)
  }, [productId, product])

  useStrkImages(containerRef, [productId, variant])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const relatedProducts = getRelatedProducts(product.id, product.category)
  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content:
        'Crafted in demi-fine finishes including 18K gold plating and vermeil over a durable base. Keep dry, avoid perfume contact, and store in the Velmora pouch to preserve shine.',
    },
    {
      title: 'Shipping & Returns',
      content:
        'We offer free worldwide shipping on all orders and a 30-day return window. Most orders dispatch within 1–2 business days in our signature gift-ready packaging.',
    },
  ]

  return (
    <div ref={containerRef} className="bg-stone-100 text-stone-900">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-stone-500">
          <Link to="/shop" className="transition hover:text-stone-900">
            Shop
          </Link>
          <span>/</span>
          <span>{product.material}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <ProductGallery product={product} />

          <div className="space-y-8 rounded-[2rem] border border-stone-200 bg-stone-50 p-6 text-stone-900 shadow-[0_22px_70px_-42px_rgba(28,25,23,0.4)] sm:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">{product.badge}</p>
              <h1 className="mt-3 font-display text-4xl uppercase tracking-[0.28em] text-stone-950 sm:text-5xl">
                {product.name}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <p className="text-2xl font-medium text-stone-950">
                  {formatCurrency(product.price)}
                </p>
                <StarRating rating={product.rating} reviewCount={product.reviewCount} />
              </div>
              <p className="mt-5 max-w-xl text-base leading-8 text-stone-600">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Tone</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.variants.map((itemVariant) => (
                    <button
                      key={itemVariant}
                      type="button"
                      className={`rounded-full border px-4 py-3 text-xs uppercase tracking-[0.24em] transition ${
                        variant === itemVariant
                          ? 'border-stone-900 bg-stone-900 text-stone-50'
                          : 'border-stone-300 bg-white text-stone-700 hover:border-stone-900 hover:text-stone-950'
                      }`}
                      onClick={() => setVariant(itemVariant)}
                    >
                      {itemVariant}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Quantity</p>
                <QuantitySelector
                  className="mt-3"
                  value={quantity}
                  onChange={setQuantity}
                />
              </div>

              <Button
                className="w-full"
                onClick={() => addItem(product, { variant, quantity })}
              >
                Add to Cart
              </Button>
            </div>

            <AccordionList items={accordionItems} />
          </div>
        </div>

        <section className="mt-20 space-y-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">You may also like</p>
              <h2 className="mt-3 font-display text-4xl text-stone-950">Continue your edit</h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

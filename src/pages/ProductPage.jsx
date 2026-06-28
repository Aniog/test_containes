import { useEffect, useMemo, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Accordion from '@/components/ui/Accordion'
import Button from '@/components/ui/Button'
import QuantitySelector from '@/components/ui/QuantitySelector'
import ProductGallery from '@/components/products/ProductGallery'
import ProductCard from '@/components/products/ProductCard'
import RatingStars from '@/components/products/RatingStars'
import { getProductById, getRelatedProducts } from '@/data/products'
import { formatCurrency } from '@/lib/format'
import { useCart } from '@/context/CartContext'

export default function ProductPage() {
  const { productId } = useParams()
  const location = useLocation()
  const product = getProductById(productId)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [openItem, setOpenItem] = useState('description')
  const { addToCart } = useCart()

  const accordionItems = useMemo(
    () =>
      product
        ? [
            { id: 'description', label: 'Description', content: product.details },
            { id: 'materials-care', label: 'Materials & Care', content: product.care },
            { id: 'shipping-returns', label: 'Shipping & Returns', content: product.shipping },
          ]
        : [],
    [product],
  )

  useEffect(() => {
    if (!product) return

    setSelectedVariant(product.variants[0] || 'Gold Tone')
    setQuantity(1)
    setOpenItem(location.hash === '#materials-care' ? 'materials-care' : location.hash === '#shipping-returns' ? 'shipping-returns' : 'description')
  }, [location.hash, product])

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-stone-50 px-5 text-center">
        <div>
          <p className="font-[Cormorant_Garamond] text-5xl text-stone-950">Product not found</p>
          <p className="mt-4 text-stone-600">Please return to the collection to continue shopping.</p>
        </div>
      </main>
    )
  }

  const relatedProducts = getRelatedProducts(product.id)

  return (
    <main className="bg-stone-50 pb-20 pt-32 sm:pb-24">
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.08fr,0.92fr] lg:items-start">
          <ProductGallery product={product} />

          <div className="lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.34em] text-stone-500">
              {product.category}
            </p>
            <h1 className="mt-4 font-[Cormorant_Garamond] text-5xl uppercase tracking-[0.18em] text-stone-950 sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center justify-between gap-4">
              <RatingStars rating={product.rating} reviews={product.reviews} />
              <p className="text-xl font-medium text-stone-950">{formatCurrency(product.price)}</p>
            </div>
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-600">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Finish</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.24em] transition ${
                      selectedVariant === variant
                        ? 'border-stone-950 bg-stone-950 text-stone-50'
                        : 'border-stone-300 bg-stone-50 text-stone-700 hover:border-stone-950 hover:text-stone-950'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>

            <Button
              className="mt-8 w-full"
              onClick={() => addToCart(product, selectedVariant, quantity)}
            >
              Add to Cart
            </Button>

            <div id="product-details" className="mt-8 scroll-mt-32">
              <Accordion items={accordionItems} openItem={openItem} onChange={setOpenItem} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-stone-500">You may also like</p>
            <h2 className="mt-3 font-[Cormorant_Garamond] text-5xl text-stone-950">
              More to layer, gift, and keep close
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} compact />
          ))}
        </div>
      </section>
    </main>
  )
}

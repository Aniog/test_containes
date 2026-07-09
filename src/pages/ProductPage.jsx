import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Star } from 'lucide-react'
import ProductGallery from '@/components/product/ProductGallery'
import ProductAccordion from '@/components/product/ProductAccordion'
import QuantitySelector from '@/components/product/QuantitySelector'
import ProductCard from '@/components/shop/ProductCard'
import { useCart } from '@/context/CartContext'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { formatPrice } from '@/lib/format'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const relatedProducts = getRelatedProducts(slug)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [openItem, setOpenItem] = useState('description')

  useEffect(() => {
    if (!product) {
      return
    }

    setSelectedVariant(product.variants[0])
    setQuantity(1)
    setOpenItem('description')
  }, [product])

  const accordionItems = useMemo(() => {
    if (!product) {
      return []
    }

    return [
      {
        id: 'description',
        label: 'Description',
        content: product.description,
      },
      {
        id: 'materials',
        label: 'Materials & Care',
        content: product.materialsCare,
      },
      {
        id: 'shipping',
        label: 'Shipping & Returns',
        content: product.shippingReturns,
      },
    ]
  }, [product])

  if (!product) {
    return (
      <main className="bg-velmora-paper pt-28">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-muted">
            Product not found
          </p>
          <h1 className="mt-4 font-display text-5xl text-velmora-cocoa">
            This piece has slipped away
          </h1>
          <Link
            to="/shop"
            className="mt-8 inline-flex rounded-full bg-velmora-gold px-6 py-4 text-xs uppercase tracking-[0.26em] text-velmora-cocoa transition hover:bg-velmora-gold-soft"
          >
            Return to shop
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-velmora-paper pt-28">
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.26em] text-velmora-stone">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/shop">Shop</Link>
            <span>/</span>
            <span className="text-velmora-cocoa">{product.name}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <ProductGallery product={product} />

            <div className="lg:pt-4">
              <p className="text-xs uppercase tracking-[0.3em] text-velmora-muted">
                {product.category}
              </p>
              <h1 className="mt-4 font-display text-5xl uppercase tracking-[0.18em] text-velmora-cocoa sm:text-6xl">
                {product.name}
              </h1>

              <div className="mt-5 flex items-center gap-3 text-sm text-velmora-stone">
                <div className="flex items-center gap-1 text-velmora-gold-deep">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span>{product.rating}</span>
                <span>·</span>
                <span>{product.reviewCount} reviews</span>
              </div>

              <p className="mt-6 text-2xl uppercase tracking-[0.2em] text-velmora-cocoa">
                {formatPrice(product.price)}
              </p>
              <p className="mt-6 text-base leading-8 text-velmora-stone sm:text-lg">
                {product.description}
              </p>

              <div className="mt-8 border-t border-velmora-line pt-8">
                <p className="text-xs uppercase tracking-[0.28em] text-velmora-cocoa">
                  Select finish
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.24em] transition ${
                        selectedVariant === variant
                          ? 'border-velmora-gold bg-velmora-gold text-velmora-cocoa'
                          : 'border-velmora-line bg-velmora-panel text-velmora-cocoa hover:border-velmora-gold'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-5 border-t border-velmora-line pt-8 sm:flex-row sm:items-center">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.28em] text-velmora-cocoa">
                    Quantity
                  </p>
                  <QuantitySelector quantity={quantity} onChange={setQuantity} />
                </div>
                <button
                  type="button"
                  onClick={() => addItem(product, selectedVariant, quantity)}
                  className="w-full rounded-full bg-velmora-ink px-6 py-4 text-xs uppercase tracking-[0.28em] text-velmora-ivory transition hover:bg-velmora-cocoa sm:mt-6"
                >
                  Add to Cart
                </button>
              </div>

              <p className="mt-5 text-sm leading-7 text-velmora-stone">
                {product.accentLine} Crafted in {product.material.toLowerCase()} and designed to move effortlessly between self-purchase and gifting.
              </p>

              <div className="mt-10">
                <ProductAccordion
                  items={accordionItems}
                  openItem={openItem}
                  onToggle={(id) => setOpenItem((current) => (current === id ? '' : id))}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-line bg-velmora-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-velmora-muted">
                You may also like
              </p>
              <h2 className="mt-4 font-display text-4xl text-velmora-cocoa sm:text-5xl">
                Pair it with another favorite
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

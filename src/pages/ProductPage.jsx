import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductGallery from '@/components/store/ProductGallery'
import ProductCard from '@/components/store/ProductCard'
import Button from '@/components/ui/Button'
import AccordionItem from '@/components/ui/AccordionItem'
import RatingStars from '@/components/ui/RatingStars'
import { useCart } from '@/context/CartContext'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { formatCurrency } from '@/lib/utils'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem, openCart } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setSelectedVariant(product?.variants?.[0] || 'Gold Tone')
    setQuantity(1)
  }, [product])

  if (!product) {
    return (
      <div className="px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-velmora-line bg-velmora-ivory p-10 text-center shadow-velmora-soft">
          <p className="font-display text-5xl text-velmora-ink">Product not found</p>
          <p className="mt-4 text-base text-velmora-taupe">
            The piece you’re looking for is no longer in this edit.
          </p>
          <Link to="/shop">
            <Button className="mt-6">Return to Shop</Button>
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = getRelatedProducts(product)

  return (
    <div className="px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ProductGallery product={product} />

          <div className="rounded-[2rem] border border-velmora-line bg-velmora-ivory p-6 shadow-velmora-soft sm:p-8">
            <div className="space-y-5 border-b border-velmora-line pb-6">
              <p className="text-xs uppercase tracking-brand text-velmora-taupe">{product.category}</p>
              <h1 className="font-display text-5xl leading-none tracking-product text-velmora-ink sm:text-6xl">
                {product.name}
              </h1>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-lg uppercase tracking-product text-velmora-ink">
                  {formatCurrency(product.price)}
                </p>
                <RatingStars rating={product.rating} className="justify-start" />
              </div>
              <p className="text-base leading-8 text-velmora-taupe">{product.description}</p>
            </div>

            <div className="space-y-6 pt-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-product text-velmora-taupe">Finish</p>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`rounded-full border px-5 py-3 text-xs uppercase tracking-product transition duration-300 ${
                        selectedVariant === variant
                          ? 'border-velmora-gold bg-velmora-gold text-velmora-noir'
                          : 'border-velmora-line bg-velmora-pearl text-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-product text-velmora-taupe">Quantity</p>
                <div className="inline-flex items-center rounded-full border border-velmora-line bg-velmora-pearl px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-velmora-taupe transition hover:bg-velmora-champagne"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="min-w-10 text-center text-sm text-velmora-ink">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-velmora-taupe transition hover:bg-velmora-champagne"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={() => {
                  addItem(product, quantity, selectedVariant)
                  openCart()
                }}
              >
                Add to Cart
              </Button>
            </div>

            <div className="mt-8">
              <AccordionItem title="Description" defaultOpen>
                {product.longDescription}
              </AccordionItem>
              <AccordionItem title="Materials & Care">{product.materials}</AccordionItem>
              <AccordionItem title="Shipping & Returns">{product.shipping}</AccordionItem>
            </div>
          </div>
        </div>

        <section className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-brand text-velmora-taupe">Related</p>
            <h2 className="font-display text-5xl leading-none text-velmora-ink">
              You may also like
            </h2>
          </div>
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((relatedProduct, index) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                prefix={`related-${index + 1}`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AccordionItem from '../components/storefront/AccordionItem'
import ProductCard from '../components/storefront/ProductCard'
import ProductGallery from '../components/storefront/ProductGallery'
import RatingStars from '../components/storefront/RatingStars'
import { useCart } from '../context/CartContext'
import { formatPrice, getProductBySlug, getRelatedProducts } from '../data/products'

function ProductPage() {
  const { slug } = useParams()
  const { addItem } = useCart()
  const product = getProductBySlug(slug)
  const [tone, setTone] = useState(product?.tones?.[0] || 'gold')
  const [quantity, setQuantity] = useState(1)

  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])

  if (!product) {
    return (
      <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-10 lg:pt-36">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-hairline bg-pearl px-6 py-12 text-center shadow-soft">
          <p className="text-xs uppercase tracking-luxe text-gold">Product unavailable</p>
          <h1 className="mt-4 font-serif text-5xl text-umber">We couldn’t find that piece.</h1>
          <p className="mt-4 text-sm leading-7 text-taupe">
            The product link may have changed. Explore the collection to discover what’s currently in stock.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-espresso px-6 py-3 text-xs font-medium uppercase tracking-luxe text-pearl transition hover:bg-walnut"
          >
            Return to shop
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-10 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-luxe text-taupe">
            <Link to="/" className="transition hover:text-gold-deep">Home</Link>
            <span>/</span>
            <Link to="/shop" className="transition hover:text-gold-deep">Shop</Link>
            <span>/</span>
            <span className="text-umber">{product.name}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <ProductGallery product={product} />

            <div className="lg:sticky lg:top-28 xl:pr-4">
              <p className="text-xs uppercase tracking-luxe text-gold">{product.badge}</p>
              <h1 className="mt-4 font-serif text-4xl uppercase tracking-[0.18em] text-umber sm:text-5xl">
                {product.name}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <p className="text-lg uppercase tracking-luxe text-umber">
                  {formatPrice(product.price)}
                </p>
                <RatingStars rating={product.rating} reviews={product.reviews} />
              </div>
              <p className="mt-6 max-w-xl text-base leading-8 text-taupe sm:text-lg">
                {product.shortDescription}
              </p>

              <div className="mt-8 space-y-6 rounded-[2rem] border border-hairline bg-pearl p-6 shadow-soft">
                <div>
                  <p className="text-xs uppercase tracking-luxe text-umber">Tone</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {product.tones.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setTone(option)}
                        className={`rounded-full border px-5 py-3 text-xs uppercase tracking-luxe transition ${
                          tone === option
                            ? 'border-gold bg-gold text-umber'
                            : 'border-hairline bg-ivory text-taupe hover:border-gold hover:text-umber'
                        }`}
                      >
                        {option} tone
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-luxe text-umber">Quantity</p>
                  <div className="mt-4 inline-flex items-center rounded-full border border-hairline bg-ivory">
                    <button
                      type="button"
                      onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                      className="inline-flex h-12 w-12 items-center justify-center text-sm text-umber transition hover:text-gold-deep"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="min-w-12 text-center text-sm text-umber">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((current) => current + 1)}
                      className="inline-flex h-12 w-12 items-center justify-center text-sm text-umber transition hover:text-gold-deep"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => addItem(product, { tone, quantity })}
                  className="inline-flex w-full items-center justify-center rounded-full bg-espresso px-6 py-4 text-sm font-medium uppercase tracking-luxe text-pearl transition hover:bg-walnut"
                >
                  Add to Cart
                </button>
              </div>

              <div className="mt-8 border-t border-hairline">
                <AccordionItem title="Description" defaultOpen>
                  <p>{product.details}</p>
                </AccordionItem>
                <AccordionItem title="Materials & Care">
                  <p>{product.materialsCare}</p>
                </AccordionItem>
                <AccordionItem title="Shipping & Returns">
                  <p>{product.shippingReturns}</p>
                </AccordionItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-champagne px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-luxe text-gold">You may also like</p>
          <h2 className="mt-4 font-serif text-4xl text-umber sm:text-5xl">
            More pieces with the same softly polished mood.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductPage

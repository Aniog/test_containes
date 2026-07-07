import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Heart } from 'lucide-react'
import ProductGallery from '@/components/product/ProductGallery'
import ProductAccordion from '@/components/product/ProductAccordion'
import ProductGrid from '@/components/product/ProductGrid'
import QuantitySelector from '@/components/shared/QuantitySelector'
import RatingStars from '@/components/shared/RatingStars'
import { formatPrice, getProductBySlug, products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const toneOptions = ['Gold Tone', 'Silver Tone']

export default function ProductPage() {
  const { slug } = useParams()
  const { addToCart } = useCart()
  const product = getProductBySlug(slug) ?? products[0]
  const [selectedTone, setSelectedTone] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)

  const relatedProducts = useMemo(
    () => products.filter((entry) => entry.slug !== product.slug).slice(0, 3),
    [product.slug],
  )

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materialsCare },
    { title: 'Shipping & Returns', content: product.shippingReturns },
  ]

  return (
    <main className="bg-porcelain pt-10 sm:pt-14">
      <section className="section-shell pt-8 sm:pt-10">
        <div className="container-shell space-y-12">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            <Link to="/shop" className="transition duration-300 hover:text-champagne">
              Shop
            </Link>{' '}
            / {product.category}
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <ProductGallery product={product} />

            <div className="space-y-8 lg:sticky lg:top-28">
              <div className="space-y-5 border-b border-mist/70 pb-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <p className="eyebrow">{product.category}</p>
                    <h1 className="font-serif text-4xl uppercase tracking-[0.2em] text-obsidian sm:text-5xl">
                      {product.name}
                    </h1>
                  </div>
                  <button
                    type="button"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-mist bg-porcelain text-espresso hover:bg-sand"
                    aria-label="Save for later"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <p className="font-serif text-4xl text-obsidian">{formatPrice(product.price)}</p>
                  <RatingStars value={product.rating} reviewCount={product.reviews} />
                </div>

                <p className="max-w-xl text-base leading-8 text-espresso/78">{product.shortDescription}</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">Finish</p>
                  <div className="flex flex-wrap gap-3">
                    {toneOptions.map((tone) => (
                      <button
                        key={tone}
                        type="button"
                        onClick={() => setSelectedTone(tone)}
                        className={`rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition duration-300 ${
                          selectedTone === tone
                            ? 'border-champagne bg-champagne/10 text-obsidian'
                            : 'border-mist bg-porcelain text-espresso/70 hover:border-champagne/60'
                        }`}
                      >
                        {tone}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">Quantity</p>
                  <QuantitySelector value={quantity} onChange={setQuantity} />
                </div>

                <button
                  type="button"
                  onClick={() => addToCart(product, { tone: selectedTone, quantity })}
                  className="premium-button w-full"
                >
                  Add to Cart
                </button>
              </div>

              <ProductAccordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell border-t border-mist/70 bg-sand/35">
        <div className="container-shell space-y-10">
          <div className="space-y-4">
            <p className="eyebrow">You May Also Like</p>
            <h2 className="section-title">Pieces in the Same Orbit</h2>
          </div>
          <ProductGrid products={relatedProducts} columns="three" />
        </div>
      </section>
    </main>
  )
}

import { useState, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Heart, Share2, Check, ArrowLeft } from 'lucide-react'
import { products, formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import QuantitySelector from '@/components/ui/QuantitySelector'
import ProductCard from '@/components/ui/ProductCard'
import { cn } from '@/lib/utils'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const product = products.find((p) => p.slug === slug)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedTone, setSelectedTone] = useState(product?.tone?.[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const related = useMemo(() => {
    if (!product) return []
    return products.filter((p) => p.id !== product.id).slice(0, 4)
  }, [product])

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-4 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Product not found</h1>
        <Link
          to="/shop"
          className="mt-6 bg-accent px-8 py-3 text-sm font-medium uppercase tracking-wide text-white"
        >
          Back to Shop
        </Link>
      </main>
    )
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="min-h-screen bg-cream pt-20 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-4 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-wide text-warmgray transition-colors hover:text-charcoal md:mb-6"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Back
        </button>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-4 md:flex-row md:gap-6">
            <div className="flex flex-row gap-3 overflow-x-auto md:flex-col md:overflow-visible">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    'h-20 w-20 flex-shrink-0 overflow-hidden border bg-taupe/30 transition-colors md:h-24 md:w-24',
                    selectedImage === index ? 'border-charcoal' : 'border-hairline hover:border-warmgray'
                  )}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
            <div className="aspect-[4/5] w-full overflow-hidden bg-taupe/30">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col lg:pt-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="product-name text-2xl font-medium text-charcoal md:text-3xl">
                  {product.name}
                </h1>
                <div className="mt-2 flex items-center gap-3">
                  <StarRating rating={product.rating} />
                  <span className="text-xs text-warmgray">({product.reviewCount} reviews)</span>
                </div>
              </div>
              <p className="font-sans text-xl font-medium text-charcoal md:text-2xl">
                {formatPrice(product.price)}
              </p>
            </div>

            <p className="mt-6 font-sans text-sm leading-relaxed text-warmgray">
              {product.description}
            </p>

            {product.tone.length > 1 && (
              <div className="mt-6">
                <span className="font-sans text-xs font-semibold uppercase tracking-wide text-charcoal">
                  Tone
                </span>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.tone.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      aria-pressed={selectedTone === tone}
                      onClick={() => setSelectedTone(tone)}
                      className={cn(
                        'rounded-full border px-5 py-2 font-sans text-xs font-medium uppercase tracking-wide transition-all',
                        selectedTone === tone
                          ? 'border-charcoal bg-charcoal text-cream'
                          : 'border-hairline text-charcoal hover:border-charcoal'
                      )}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <span className="font-sans text-xs font-semibold uppercase tracking-wide text-charcoal">
                Quantity
              </span>
              <div className="mt-3">
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAddToCart}
                className={cn(
                  'flex flex-1 items-center justify-center gap-2 py-4 font-sans text-sm font-medium uppercase tracking-wide text-white transition-colors',
                  added ? 'bg-charcoal' : 'bg-accent hover:bg-accent-hover'
                )}
              >
                {added ? (
                  <>
                    <Check size={16} strokeWidth={2} />
                    Added to Cart
                  </>
                ) : (
                  'Add to Cart'
                )}
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center border border-hairline p-4 text-warmgray transition-colors hover:border-charcoal hover:text-charcoal"
                aria-label="Add to wishlist"
              >
                <Heart size={20} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center border border-hairline p-4 text-warmgray transition-colors hover:border-charcoal hover:text-charcoal"
                aria-label="Share product"
              >
                <Share2 size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-20 border-t border-hairline pt-16 md:mt-24 md:pt-20">
          <h2 className="mb-8 text-center font-serif text-2xl font-medium text-charcoal md:text-3xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

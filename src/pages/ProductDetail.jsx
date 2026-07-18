import { Minus, Plus } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import StarRating from '@/components/product/StarRating'
import { getProductById, getRelatedProducts } from '@/data/storefront'
import { useStorefront } from '@/context/StorefrontContext'

const accordionSections = [
  { key: 'details', label: 'Description' },
  { key: 'care', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

const ProductDetail = () => {
  const { productId } = useParams()
  const product = useMemo(() => getProductById(productId), [productId])
  const relatedProducts = useMemo(() => getRelatedProducts(productId), [productId])
  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('primary')
  const [openSection, setOpenSection] = useState('details')
  const { addToCart } = useStorefront()

  useEffect(() => {
    setSelectedTone('Gold')
    setQuantity(1)
    setActiveImage('primary')
    setOpenSection('details')
  }, [productId])

  if (!product) {
    return (
      <main className="bg-velmora-cream pt-28 text-velmora-ink">
        <section className="mx-auto max-w-5xl px-5 py-20 text-center md:px-8 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-muted">Product</p>
          <h1 className="mt-4 font-display text-5xl text-velmora-ink">Piece not found</h1>
          <Link to="/shop" className="mt-8 inline-block text-sm uppercase tracking-[0.28em] text-velmora-gold">
            Return to Shop
          </Link>
        </section>
      </main>
    )
  }

  const titleId = `${product.id}-detail-title`
  const descId = `${product.id}-detail-desc`
  const activeImageSrc = activeImage === 'primary' ? product.heroImage : product.hoverImage

  return (
    <main className="bg-velmora-cream pt-28 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-24">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[2rem] bg-velmora-panel shadow-soft">
            <img
              alt={product.name}
              className="aspect-[4/5] w-full object-cover"
              src={activeImageSrc}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { key: 'primary', label: 'Main View', src: product.heroImage },
              { key: 'alternate', label: 'Styled View', src: product.hoverImage },
            ].map((image) => (
              <button
                key={image.key}
                type="button"
                onClick={() => setActiveImage(image.key === 'primary' ? 'primary' : 'alternate')}
                className={`overflow-hidden rounded-[1.5rem] border bg-velmora-panel text-left transition-colors duration-300 ${
                  activeImage === (image.key === 'primary' ? 'primary' : 'alternate')
                    ? 'border-velmora-gold'
                    : 'border-velmora-mist/60'
                }`}
              >
                <img
                  alt={image.label}
                  className="aspect-[4/5] w-full object-cover"
                  src={image.src}
                />
                <p className="px-4 py-3 text-xs uppercase tracking-[0.26em] text-velmora-muted">
                  {image.label}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-muted">{product.category}</p>
          <h1 id={titleId} className="mt-3 font-display text-5xl uppercase tracking-luxe text-velmora-ink md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center justify-between gap-4">
            <p className="text-2xl text-velmora-ink">${product.price}</p>
            <StarRating rating={product.rating} reviews={product.reviews} />
          </div>
          <p id={descId} className="mt-6 text-base leading-8 text-velmora-muted md:text-lg">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-muted">Tone</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {product.tones.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.24em] transition-colors duration-300 ${
                    selectedTone === tone
                      ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                      : 'border-velmora-mist bg-transparent text-velmora-muted hover:border-velmora-gold hover:text-velmora-ink'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-muted">Quantity</p>
            <div className="mt-3 inline-flex items-center rounded-full border border-velmora-mist bg-velmora-panel px-2 py-1">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="rounded-full p-3 text-velmora-ink transition-colors duration-300 hover:text-velmora-gold"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm text-velmora-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="rounded-full p-3 text-velmora-ink transition-colors duration-300 hover:text-velmora-gold"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              addToCart({ productId: product.id, quantity, tone: selectedTone })
            }
            className="mt-8 w-full rounded-full bg-velmora-gold px-6 py-5 text-sm uppercase tracking-[0.28em] text-velmora-ink shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
          >
            Add to Cart
          </button>

          <div className="mt-10 space-y-3 border-t border-velmora-mist/60 pt-6">
            {accordionSections.map((section) => {
              const content =
                section.key === 'details'
                  ? product.details
                  : section.key === 'care'
                    ? product.care
                    : product.shipping

              return (
                <div
                  key={section.key}
                  className="rounded-[1.5rem] border border-velmora-mist/60 bg-velmora-panel"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSection((current) =>
                        current === section.key ? '' : section.key,
                      )
                    }
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-xs uppercase tracking-[0.28em] text-velmora-ink">
                      {section.label}
                    </span>
                    <span className="text-lg text-velmora-gold">
                      {openSection === section.key ? '−' : '+'}
                    </span>
                  </button>
                  {openSection === section.key && (
                    <div className="px-5 pb-5 text-sm leading-7 text-velmora-muted">
                      {content}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-mist/60 bg-velmora-panel py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-velmora-muted">You May Also Like</p>
              <h2 className="mt-3 font-display text-5xl text-velmora-ink md:text-6xl">
                More pieces in the Velmora edit.
              </h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                onAddToCart={(nextProductId) => addToCart({ productId: nextProductId })}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetail

import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Minus, Plus } from 'lucide-react'
import ProductCard from '@/components/store/ProductCard'
import RatingStars from '@/components/store/RatingStars'
import AccordionItem from '@/components/store/AccordionItem'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/hooks/useStrkImages'

const ProductPage = () => {
  const { slug } = useParams()
  const product = products.find((entry) => entry.slug === slug) || products[0]
  const [selectedImage, setSelectedImage] = useState('primary')
  const [selectedTone, setSelectedTone] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    setSelectedImage('primary')
    setSelectedTone(product.colors[0])
    setQuantity(1)
  }, [product])

  useStrkImages(containerRef, [selectedImage, selectedTone, product.slug])

  const galleryItems = useMemo(
    () => [
      {
        key: 'primary',
        imageId: product.imageIds.primary,
        alt: `${product.shortName} main view`,
        query: `[product-page-${product.slug}-title] [product-page-${product.slug}-desc] main jewelry product photo`,
      },
      {
        key: 'secondary',
        imageId: product.imageIds.secondary,
        alt: `${product.shortName} alternate view`,
        query: `[product-page-${product.slug}-title] [product-page-${product.slug}-desc] alternate jewelry styling`,
      },
      {
        key: 'detail1',
        imageId: product.imageIds.detail1,
        alt: `${product.shortName} detail`,
        query: `[product-page-${product.slug}-title] close-up detail gold jewelry`,
      },
      {
        key: 'detail2',
        imageId: product.imageIds.detail2,
        alt: `${product.shortName} on model`,
        query: `[product-page-${product.slug}-title] model wearing ${product.type}`,
      },
    ],
    [product],
  )

  const activeImage = galleryItems.find((item) => item.key === selectedImage) || galleryItems[0]
  const relatedProducts = products.filter((entry) => entry.slug !== product.slug).slice(0, 3)

  return (
    <div ref={containerRef} className="bg-brand-ivory pt-28 text-brand-ink md:pt-32">
      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8 lg:px-10">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-brand-muted transition hover:text-brand-gold-deep"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to shop
        </Link>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:pb-28">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[2rem] bg-brand-sand shadow-soft">
            <img
              alt={activeImage.alt}
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id={`product-active-${product.slug}-${selectedImage}`}
              data-strk-img={activeImage.query}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {galleryItems.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setSelectedImage(item.key)}
                className={`overflow-hidden rounded-[1.25rem] border bg-brand-pearl transition ${
                  selectedImage === item.key
                    ? 'border-brand-gold shadow-soft'
                    : 'border-brand-border hover:border-brand-gold'
                }`}
              >
                <img
                  alt={item.alt}
                  className="aspect-square h-full w-full object-cover"
                  data-strk-img-id={`product-thumb-${product.slug}-${item.key}`}
                  data-strk-img={item.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4 border-b border-brand-border pb-8">
            <p className="text-xs uppercase tracking-[0.34em] text-brand-muted">{product.category}</p>
            <h1
              id={`product-page-${product.slug}-title`}
              className="font-display text-5xl uppercase tracking-[0.28em] text-brand-ink md:text-6xl"
            >
              {product.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-2xl font-medium text-brand-ink">${product.price}</p>
              <RatingStars rating={product.rating} reviews={product.reviews} />
            </div>
            <p
              id={`product-page-${product.slug}-desc`}
              className="max-w-xl text-base leading-8 text-brand-muted md:text-lg"
            >
              {product.longDescription}
            </p>
          </div>

          <div className="space-y-6 border-b border-brand-border pb-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.32em] text-brand-muted">Tone</p>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.18em] transition ${
                      selectedTone === tone
                        ? 'border-brand-gold bg-brand-gold text-brand-ink'
                        : 'border-brand-border bg-brand-pearl text-brand-ink hover:border-brand-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.32em] text-brand-muted">Quantity</p>
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center rounded-full border border-brand-border bg-brand-pearl px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="rounded-full p-2 text-brand-ink"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-10 text-center text-sm text-brand-ink">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="rounded-full p-2 text-brand-ink"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-sm text-brand-muted">Gift-ready box included</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addItem(product, selectedTone, quantity)}
              className="w-full rounded-full bg-brand-gold px-6 py-4 text-sm uppercase tracking-[0.24em] text-brand-ink transition hover:bg-brand-gold-soft"
            >
              Add to Cart
            </button>
          </div>

          <div className="space-y-1">
            <AccordionItem title="Description" defaultOpen>
              {product.longDescription}
            </AccordionItem>
            <AccordionItem title="Materials & Care">{product.materials}</AccordionItem>
            <AccordionItem title="Shipping & Returns">{product.shipping}</AccordionItem>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-border bg-brand-pearl/70 py-20 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-5 md:px-8 lg:px-10">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.34em] text-brand-muted">You may also like</p>
            <h2 className="font-display text-4xl text-brand-ink md:text-5xl">More polished favorites</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage

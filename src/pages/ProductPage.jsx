import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import AccordionItem from '@/components/common/AccordionItem'
import QuantityStepper from '@/components/common/QuantityStepper'
import RatingStars from '@/components/common/RatingStars'
import ProductCard from '@/components/products/ProductCard'
import { getProductBySlug, getRelatedProducts, toneOptions, formatPrice } from '@/data/storefront'
import { useCart } from '@/context/CartContext'
import strkImgConfig from '@/strk-img-config.json'

const ProductPage = () => {
  const containerRef = useRef(null)
  const { slug } = useParams()
  const { addItem } = useCart()
  const product = useMemo(() => getProductBySlug(slug), [slug])
  const [selectedTone, setSelectedTone] = useState(toneOptions[0])
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  useEffect(() => {
    setSelectedImageIndex(0)
    setSelectedTone(toneOptions[0])
    setQuantity(1)
  }, [slug])

  useEffect(() => {
    let disconnectImages
    const frameId = window.requestAnimationFrame(() => {
      disconnectImages = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof disconnectImages === 'function') {
        disconnectImages()
      }
    }
  }, [slug, selectedImageIndex])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const relatedProducts = getRelatedProducts(product.slug)
  const gallery = product.imageNotes.map((note, index) => ({
    id: `${product.id}-gallery-${index}`,
    titleId: `${product.id}-gallery-title-${index}`,
    noteId: `${product.id}-gallery-note-${index}`,
    alt: `${product.shortName} view ${index + 1}`,
    note,
  }))

  const selectedImage = gallery[selectedImageIndex]

  return (
    <main ref={containerRef} className="px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl space-y-16">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm font-medium text-velmora-muted transition duration-300 hover:text-velmora-gold"
        >
          <ArrowLeft className="h-4 w-4" /> Back to shop
        </Link>

        <section className="grid gap-10 lg:grid-cols-[1fr,0.92fr] lg:gap-14">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[2.5rem] bg-velmora-sand shadow-soft">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={selectedImage.alt}
                className="aspect-[4/5] w-full object-cover"
                data-strk-img-id={`${product.id}-featured-image-${selectedImageIndex}`}
                data-strk-img={`[${selectedImage.noteId}] [${selectedImage.titleId}] [product-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {gallery.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  className={`overflow-hidden rounded-[1.5rem] border bg-velmora-sand transition duration-300 ${
                    selectedImageIndex === index
                      ? 'border-velmora-gold shadow-soft'
                      : 'border-transparent hover:border-velmora-line'
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={image.alt}
                    className="aspect-square w-full object-cover"
                    data-strk-img-id={`${image.id}-thumb`}
                    data-strk-img={`[${image.noteId}] [${image.titleId}] [product-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="500"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8 rounded-[2.5rem] bg-white p-7 shadow-soft sm:p-10">
            <div className="space-y-4 border-b border-velmora-line pb-8">
              <p className="eyebrow text-velmora-gold">{product.category}</p>
              <h1 id="product-title" className="font-display text-5xl tracking-product text-velmora-ink sm:text-6xl">
                {product.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-2xl font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
                <RatingStars rating={product.rating} reviews={product.reviews} />
              </div>
              <p className="max-w-xl text-sm leading-7 text-velmora-muted">{product.longDescription}</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-eyebrow text-velmora-ink">Tone</p>
                <div className="flex flex-wrap gap-3">
                  {toneOptions.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      className={`rounded-full border px-5 py-3 text-sm transition duration-300 ${
                        selectedTone === tone
                          ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                          : 'border-velmora-line bg-transparent text-velmora-muted hover:border-velmora-gold hover:text-velmora-ink'
                      }`}
                      onClick={() => setSelectedTone(tone)}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-eyebrow text-velmora-ink">Quantity</p>
                  <QuantityStepper value={quantity} onChange={setQuantity} />
                </div>
                <button
                  type="button"
                  className="btn-primary h-14 w-full justify-center sm:w-auto sm:min-w-[240px]"
                  onClick={() => addItem(product, selectedTone, quantity)}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] bg-velmora-sand/60 px-5 py-4 text-sm text-velmora-muted">
              <p className="font-medium text-velmora-ink">Why it stands out</p>
              <p className="mt-2 leading-7">{product.description}</p>
            </div>

            <div>
              <AccordionItem title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <p>{product.materialsCare}</p>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <p>{product.shippingReturns}</p>
              </AccordionItem>
            </div>
          </div>
        </section>

        <div className="sr-only">
          {gallery.map((image) => (
            <div key={image.id}>
              <span id={image.titleId}>{product.shortName}</span>
              <span id={image.noteId}>{image.note}</span>
            </div>
          ))}
        </div>

        <section className="space-y-10">
          <SectionHeader />
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

const SectionHeader = () => (
  <div className="space-y-3">
    <p className="eyebrow text-velmora-muted">You may also like</p>
    <h2 className="font-display text-4xl text-velmora-ink sm:text-5xl">Complete the Velmora edit</h2>
  </div>
)

export default ProductPage

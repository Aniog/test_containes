import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AccordionItem from '@/components/AccordionItem'
import Container from '@/components/Container'
import ProductGallery from '@/components/ProductGallery'
import QuantitySelector from '@/components/QuantitySelector'
import RelatedProducts from '@/components/RelatedProducts'
import SectionHeading from '@/components/SectionHeading'
import StarRating from '@/components/StarRating'
import { formatPrice, getProductById, products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { getProductGalleryImages } from '@/lib/strkImages'

const ProductPage = () => {
  const { productId } = useParams()
  const product = getProductById(productId)
  const { addToCart } = useCart()
  const galleryImages = useMemo(() => getProductGalleryImages(product), [product])
  const [selectedTone, setSelectedTone] = useState(product?.toneOptions?.[0] ?? 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(galleryImages[0]?.src ?? '')

  const relatedProducts = useMemo(() => {
    if (!product) {
      return []
    }

    return products
      .filter((entry) => entry.id !== product.id && entry.category === product.category)
      .slice(0, 4)
  }, [product])

  useEffect(() => {
    setSelectedTone(product?.toneOptions?.[0] ?? 'Gold')
    setQuantity(1)
    setActiveImage(galleryImages[0]?.src ?? '')
  }, [product, galleryImages])


  if (!product) {
    return (
      <div className="pt-32">
        <Container>
          <SectionHeading
            eyebrow="Product unavailable"
            title="This piece could not be found"
            description="Return to the shop to continue browsing the collection."
          />
          <Link
            to="/shop"
            className="mt-8 inline-flex rounded-full bg-brand-bronze px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-umber"
          >
            Back to shop
          </Link>
        </Container>
      </div>
    )
  }

  return (
    <div className="pb-20 pt-32 md:pt-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <ProductGallery
            product={product}
            activeImage={activeImage}
            onSelectImage={setActiveImage}
          />

          <div className="lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.28em] text-brand-bronze">{product.category}</p>
            <h1
              id={`detail-${product.id}-title`}
              className="mt-4 font-serif text-4xl uppercase tracking-[0.26em] text-brand-espresso md:text-5xl"
            >
              {product.name}
            </h1>
            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="text-2xl font-medium text-brand-espresso">{formatPrice(product.price)}</span>
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>
            <p id={`detail-${product.id}-desc`} className="mt-5 text-base leading-8 text-brand-mink">
              {product.shortDescription}
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-mink">Tone</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.toneOptions.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.2em] transition ${
                      selectedTone === tone
                        ? 'border-brand-bronze bg-brand-bronze/10 text-brand-espresso'
                        : 'border-brand-line text-brand-mink hover:text-brand-espresso'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <QuantitySelector value={quantity} onChange={setQuantity} />
              <button
                type="button"
                onClick={() => addToCart(product, selectedTone, quantity)}
                className="min-h-[56px] flex-1 rounded-full bg-brand-bronze px-6 text-xs font-semibold uppercase tracking-[0.24em] text-brand-umber transition hover:opacity-90"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-10 border-t border-brand-line">
              <AccordionItem title="Description" content={product.description} defaultOpen />
              <AccordionItem title="Materials & Care" content={product.materials} />
              <AccordionItem title="Shipping & Returns" content={product.shipping} />
            </div>
          </div>
        </div>
      </Container>

      <section className="mt-16 bg-brand-surface py-16 md:mt-24 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="You may also like"
            title="More pieces in the same mood"
            description="Pair it with another Velmora favorite for a layered, gift-ready look."
          />
          <div className="mt-10">
            <RelatedProducts products={relatedProducts.length ? relatedProducts : products.slice(0, 4)} />
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ProductPage

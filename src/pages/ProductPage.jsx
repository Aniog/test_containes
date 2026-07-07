import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import AccordionItem from '@/components/common/AccordionItem'
import ProductCard from '@/components/common/ProductCard.jsx?velmora=20260707'
import QuantitySelector from '@/components/common/QuantitySelector'
import RatingStars from '@/components/common/RatingStars'
import { formatPrice, getProductById, getProductImageUrl, getRelatedProducts } from '@/data/products.js?velmora=20260707'
import { useCart } from '@/context/CartContext'

function buildGallery(product) {
  return [
    {
      key: 'galleryOne',
      title: 'Close detail',
      description: 'Close-up of polished jewelry details in warm editorial light.',
    },
    {
      key: 'galleryTwo',
      title: 'On model',
      description: 'The piece styled on a model against a refined neutral backdrop.',
    },
    {
      key: 'galleryThree',
      title: 'Styled flat lay',
      description: 'A carefully arranged flat lay with velvet, gift box, and gold jewelry.',
    },
  ].map((item) => ({
    ...item,
    imageId: product.imageIds[item.key],
  }))
}

export default function ProductPage() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const relatedProducts = useMemo(() => getRelatedProducts(productId), [productId])
  const [variant, setVariant] = useState(product?.variants?.[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const gallery = useMemo(() => (product ? buildGallery(product) : []), [product])
  const [activeImage, setActiveImage] = useState(gallery[0]?.key ?? 'galleryOne')
  const { addItem } = useCart()

  if (!product) {
    return (
      <div className="container-shell flex min-h-[70vh] flex-col items-center justify-center gap-5 pt-28 text-center md:pt-36">
        <p className="section-eyebrow">Not found</p>
        <h1 className="font-serif text-5xl text-velmora-noir">This piece is no longer available</h1>
        <Link to="/shop" className="premium-button">
          Back to Shop
        </Link>
      </div>
    )
  }

  const activeItem = gallery.find((item) => item.key === activeImage) ?? gallery[0]
  const productTitleId = `product-page-${product.id}-title`

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
    toast.success(`${product.name} added to your bag`)
  }

  return (
    <div className="container-shell pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <section className="space-y-5">
          <div className="overflow-hidden rounded-[2.5rem] bg-white/70 shadow-velvet">
            <img
              alt={product.name}
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id={`${activeItem.imageId}-pdp-active`}
              data-strk-img={`[product-page-${product.id}-${activeItem.key}-desc] [product-page-${product.id}-${activeItem.key}-title] [${productTitleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src={getProductImageUrl(product, 'primary')}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {gallery.map((item) => {
              const titleId = `product-page-${product.id}-${item.key}-title`
              const descId = `product-page-${product.id}-${item.key}-desc`
              return (
                <button
                  key={item.key}
                  type="button"
                  className={activeImage === item.key ? 'overflow-hidden rounded-[1.5rem] border border-velmora-gold bg-white/80 p-1' : 'overflow-hidden rounded-[1.5rem] border border-velmora-espresso/10 bg-white/60 p-1 transition hover:border-velmora-gold/60'}
                  onClick={() => setActiveImage(item.key)}
                >
                  <img
                    alt={`${product.name} ${item.title}`}
                    className="aspect-[4/5] w-full rounded-[1.2rem] object-cover"
                    data-strk-img-id={`${item.imageId}-pdp-thumb`}
                    data-strk-img={`[${descId}] [${titleId}] [${productTitleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src={getProductImageUrl(product, 'secondary')}
                  />
                  <span className="sr-only" id={titleId}>{item.title}</span>
                  <span className="sr-only" id={descId}>{item.description}</span>
                </button>
              )
            })}
          </div>
        </section>

        <section className="rounded-[2.5rem] border border-velmora-espresso/10 bg-white/65 p-6 shadow-card md:p-8 lg:sticky lg:top-28">
          <div className="space-y-5 border-b hairline-divider pb-6">
            <p className="text-xs uppercase tracking-luxe text-velmora-espresso/60">{product.category}</p>
            <h1 id={productTitleId} className="font-serif text-4xl uppercase tracking-luxe text-velmora-noir md:text-5xl">
              {product.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-2xl font-semibold text-velmora-noir">{formatPrice(product.price)}</p>
              <RatingStars rating={product.rating} reviews={product.reviews} />
            </div>
            <p className="text-base leading-8 text-velmora-espresso/78">{product.description}</p>
          </div>

          <div className="space-y-6 py-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-luxe text-velmora-noir">Tone</p>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={variant === item ? 'rounded-full bg-velmora-noir px-5 py-3 text-xs font-semibold uppercase tracking-luxe text-white' : 'rounded-full border border-velmora-espresso/10 bg-velmora-parchment px-5 py-3 text-xs font-semibold uppercase tracking-luxe text-velmora-espresso/75 transition hover:border-velmora-gold hover:text-velmora-gold'}
                    onClick={() => setVariant(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-luxe text-velmora-noir">Quantity</p>
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>

            <button type="button" className="premium-button w-full" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          <div className="border-t hairline-divider">
            <AccordionItem title="Description" defaultOpen>
              {product.details}
            </AccordionItem>
            <AccordionItem title="Materials & Care">
              {product.material}. {product.care}
            </AccordionItem>
            <AccordionItem title="Shipping & Returns">
              {product.shipping}
            </AccordionItem>
          </div>
        </section>
      </div>

      <section className="mt-16 md:mt-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">You may also like</p>
            <h2 className="section-title mt-4">More from the Velmora edit</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-velmora-espresso/75">
            Complement your look with refined silhouettes chosen to pair effortlessly.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} contextLabel="related" />
          ))}
        </div>
      </section>
    </div>
  )
}

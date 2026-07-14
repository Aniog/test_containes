import { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Heart, ShieldCheck, Truck } from 'lucide-react'
import ProductAccordion from '@/components/product/ProductAccordion'
import ProductCard from '@/components/product/ProductCard'
import QuantitySelector from '@/components/product/QuantitySelector'
import Rating from '@/components/product/Rating'
import { useCart } from '@/context/CartContext'
import { getProductById, getRelatedProducts } from '@/data/products'
import { formatPrice } from '@/lib/format'
import { imagePlaceholder } from '@/lib/imagePlaceholder'
import { useImageLoader } from '@/hooks/useImageLoader'

const ProductDetail = () => {
  const { id } = useParams()
  const product = getProductById(id)
  const related = getRelatedProducts(product.id)
  const { addToCart } = useCart()
  const pageRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)

  useImageLoader(pageRef, [product.id, selectedImage])

  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const materialId = `product-${product.id}-material`
  const gallery = [
    { id: 'main', label: 'Editorial close-up' },
    { id: 'worn', label: 'Styled on model' },
    { id: 'detail', label: 'Warm detail view' },
  ]

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-24">
        <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:block lg:space-y-3 lg:overflow-visible">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`relative h-24 w-20 shrink-0 overflow-hidden border bg-velmora-parchment transition focus:outline-none focus:ring-2 focus:ring-velmora-champagne lg:h-28 lg:w-full ${
                  selectedImage === index ? 'border-velmora-bronze' : 'border-velmora-espresso/10 opacity-75 hover:opacity-100'
                }`}
                aria-label={`View ${image.label}`}
              >
                <img
                  className="h-full w-full object-cover"
                  alt={`${product.name} ${image.label}`}
                  data-strk-img-id={`product-${product.id}-${image.id}-thumb`}
                  data-strk-img={`[${materialId}] [${descId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="240"
                  src={imagePlaceholder}
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden bg-velmora-parchment shadow-soft lg:order-2">
            <img
              className="aspect-[4/5] h-full w-full object-cover"
              alt={`${product.name} large product view`}
              data-strk-img-id={`product-${product.id}-${gallery[selectedImage].id}-main`}
              data-strk-img={`[${materialId}] [${descId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1100"
              src={imagePlaceholder}
            />
          </div>
        </div>

        <div className="lg:pl-8">
          <div className="border-b border-velmora-espresso/10 pb-8">
            <Link to="/shop" className="text-xs font-extrabold uppercase tracking-luxe text-velmora-bronze transition hover:text-velmora-ink">Back to shop</Link>
            <p id={materialId} className="mt-6 text-xs font-extrabold uppercase tracking-widerLuxury text-velmora-bronze">{product.material}</p>
            <h1 id={titleId} className="mt-3 font-serif text-5xl font-semibold uppercase leading-none tracking-luxe text-velmora-ink sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <p className="font-serif text-4xl font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
              <Rating rating={product.rating} reviews={product.reviews} />
            </div>
            <p id={descId} className="mt-6 text-base leading-8 text-velmora-espresso/75">{product.description}</p>
          </div>

          <div className="space-y-7 py-8">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-luxe text-velmora-bronze">Tone</p>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setVariant(option)}
                    className={`rounded-full border px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-velmora-champagne ${
                      variant === option
                        ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory'
                        : 'border-velmora-espresso/15 bg-velmora-pearl text-velmora-ink hover:border-velmora-bronze'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-extrabold uppercase tracking-luxe text-velmora-bronze">Quantity</p>
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>
              <button
                type="button"
                onClick={() => addToCart(product, quantity, variant)}
                className="min-h-14 flex-1 bg-velmora-champagne px-8 py-4 text-xs font-extrabold uppercase tracking-luxe text-velmora-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-velmora-bronze hover:text-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-ink"
              >
                Add to Cart
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="border border-velmora-espresso/10 bg-velmora-pearl p-4 text-sm text-velmora-espresso/75">
                <Truck className="mb-3 h-5 w-5 text-velmora-bronze" /> Free shipping
              </div>
              <div className="border border-velmora-espresso/10 bg-velmora-pearl p-4 text-sm text-velmora-espresso/75">
                <ShieldCheck className="mb-3 h-5 w-5 text-velmora-bronze" /> Hypoallergenic
              </div>
              <div className="border border-velmora-espresso/10 bg-velmora-pearl p-4 text-sm text-velmora-espresso/75">
                <Heart className="mb-3 h-5 w-5 text-velmora-bronze" /> Gift ready
              </div>
            </div>
          </div>

          <ProductAccordion
            sections={[
              { title: 'Description', content: product.detail },
              { title: 'Materials & Care', content: product.care },
              { title: 'Shipping & Returns', content: product.shipping },
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mb-8 flex items-end justify-between border-t border-velmora-espresso/10 pt-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widerLuxury text-velmora-bronze">Complete the edit</p>
            <h2 className="mt-3 font-serif text-5xl font-medium text-velmora-ink">You may also like</h2>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} context={`related-${product.id}`} />)}
        </div>
      </section>
    </main>
  )
}

export default ProductDetail

import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import ProductAccordion from '@/components/product/ProductAccordion'
import ProductCard from '@/components/product/ProductCard'
import StarRating from '@/components/common/StarRating'
import { formatCurrency, getProductByHandle, getRelatedProducts } from '@/data/storeData'
import { useCart } from '@/context/CartContext'
import { getDefaultStrkImageUrl, getStrkImageUrl } from '@/lib/strk-image'

const ProductDetail = () => {
  const { handle } = useParams()
  const product = getProductByHandle(handle)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const relatedProducts = useMemo(
    () => (product ? getRelatedProducts(product.id) : []),
    [product],
  )

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const selectedImage = product.images[selectedImageIndex]
  const selectedImageSrc = getStrkImageUrl(`${selectedImage.id}-detail-main`) || getStrkImageUrl(selectedImage.id) || getDefaultStrkImageUrl()
  const accordionItems = [
    { title: 'Description', content: product.details },
    { title: 'Materials & Care', content: `${product.material}. ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div className="pb-16 md:pb-24">
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-6 text-xs uppercase tracking-[0.35em] text-stone-500">
          <Link to="/shop" className="transition hover:text-amber-700">Shop</Link> / {product.category}
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="space-y-4">
            <div className="sr-only">
              {product.images.map((image) => (
                <div key={`${image.id}-meta`}>
                  <h2 id={image.titleId}>{product.name} {image.label}</h2>
                  <p id={image.descId}>{image.alt}</p>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-stone-200">
              <img
                alt={selectedImage.alt}
                className="aspect-[4/5] w-full object-cover"
                data-strk-img-id={`${selectedImage.id}-detail-main`}
                data-strk-img={`[${selectedImage.descId}] [${selectedImage.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src={selectedImageSrc}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((image, index) => {
                const thumbSrc = getStrkImageUrl(`${image.id}-detail-thumb`) || getStrkImageUrl(image.id) || getDefaultStrkImageUrl()

                return (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setSelectedImageIndex(index)}
                    className={`overflow-hidden rounded-[1.5rem] border bg-stone-200 ${selectedImageIndex === index ? 'border-amber-700' : 'border-stone-300/70'}`}
                  >
                    <img
                      alt={image.alt}
                      className="aspect-[4/5] w-full object-cover"
                      data-strk-img-id={`${image.id}-detail-thumb`}
                      data-strk-img={`[${image.descId}] [${image.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src={thumbSrc}
                    />
                  </button>
                )
              })}
            </div>
          </div>

          <div className="space-y-8 text-stone-900 lg:sticky lg:top-28 lg:self-start">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">{product.category}</p>
              <h1 className="font-serif text-4xl uppercase tracking-[0.18em] text-stone-900 md:text-5xl">
                {product.name}
              </h1>
              <div className="flex items-center justify-between gap-4">
                <p className="text-2xl text-stone-900">{formatCurrency(product.price)}</p>
                <StarRating rating={product.rating} reviews={product.reviews} />
              </div>
              <p className="max-w-xl text-base leading-8 text-stone-600">{product.description}</p>
            </div>

            <div className="space-y-5 rounded-[2rem] border border-stone-300/70 bg-stone-100/70 p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Tone</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`rounded-full border px-4 py-2 text-sm transition ${selectedVariant === variant ? 'border-stone-900 bg-stone-900 text-stone-50' : 'border-stone-300 bg-stone-50 text-stone-900 hover:bg-stone-200'}`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Quantity</p>
                <div className="mt-3 inline-flex items-center rounded-full border border-stone-300 bg-stone-50">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="p-3 text-stone-900"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-12 text-center text-sm text-stone-900">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="p-3 text-stone-900"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addToCart({ product, variant: selectedVariant, quantity })}
                className="w-full rounded-full bg-amber-700 px-5 py-4 text-sm font-medium text-stone-50 transition hover:bg-amber-800"
              >
                Add to Cart
              </button>
            </div>

            <ProductAccordion items={accordionItems} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-700">You may also like</p>
            <h2 className="mt-3 font-serif text-4xl text-stone-900 md:text-5xl">More to treasure</h2>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetail

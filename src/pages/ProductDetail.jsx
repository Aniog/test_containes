import { useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import AccordionItem from '@/components/store/AccordionItem.jsx'
import ProductCard from '@/components/store/ProductCard.jsx'
import RatingStars from '@/components/store/RatingStars.jsx'
import SiteFooter from '@/components/store/SiteFooter.jsx'
import { StockImage } from '@/components/store/ImageSlot.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { products, relatedProductIds } from '@/data/storefront.js'
import useStrkImages from '@/hooks/useStrkImages.jsx'
import { formatPrice } from '@/lib/format.js'

const ProductDetail = () => {
  const { productId } = useParams()
  const containerRef = useRef(null)
  const product = products.find((item) => item.id === productId) || products[0]
  const [activeImage, setActiveImage] = useState(product.images[0])
  const [selectedVariant, setSelectedVariant] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  useStrkImages(containerRef, [product.id, activeImage.id, selectedVariant])

  const relatedProducts = useMemo(
    () =>
      (relatedProductIds[product.id] || [])
        .map((id) => products.find((item) => item.id === id))
        .filter(Boolean),
    [product.id],
  )

  return (
    <div ref={containerRef} className="bg-velmora-porcelain pt-20 text-velmora-noir">
      <section className="section-wrap py-12 md:py-16">
        <div className="mb-8 text-sm text-velmora-noir/60">
          <Link className="transition-colors duration-300 hover:text-velmora-noir" to="/shop">
            Shop
          </Link>{' '}
          / <span className="text-velmora-noir">{product.name}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <div className="overflow-hidden rounded-soft bg-velmora-ivory shadow-velvet">
              <StockImage
                alt={product.name}
                className="aspect-[4/5] w-full object-cover"
                descId={activeImage.descId}
                imageId={activeImage.id}
                titleId={activeImage.titleId}
                width="1200"
              />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-4">
              {product.images.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  className={`overflow-hidden rounded-3xl border bg-velmora-ivory ${
                    activeImage.id === image.id
                      ? 'border-velmora-noir shadow-soft'
                      : 'border-velmora-mist/25'
                  }`}
                  onClick={() => setActiveImage(image)}
                >
                  <StockImage
                    alt={image.title}
                    className="aspect-square w-full object-cover"
                    descId={image.descId}
                    imageId={image.id}
                    titleId={image.titleId}
                    width="300"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="surface-panel h-fit p-7 md:p-10 lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-brand text-velmora-rosewood">{product.badge}</p>
            <h1 id={product.images[0].titleId} className="mt-4 font-serif text-4xl uppercase tracking-brand text-velmora-noir md:text-5xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center justify-between gap-4">
              <span className="text-2xl font-medium text-velmora-noir">
                {formatPrice(product.price)}
              </span>
              <RatingStars rating={product.rating} reviewCount={product.reviews} />
            </div>
            <p id={product.images[0].descId} className="mt-6 text-base leading-8 text-velmora-noir/72">
              {product.description}
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="mb-3 text-xs uppercase tracking-brand text-velmora-rosewood">Finish</p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      className={`rounded-full border px-5 py-3 text-xs uppercase tracking-brand transition-colors duration-300 ${
                        selectedVariant === color
                          ? 'border-velmora-noir bg-velmora-noir text-velmora-ivory'
                          : 'border-velmora-mist/40 bg-velmora-ivory text-velmora-noir'
                      }`}
                      onClick={() => setSelectedVariant(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs uppercase tracking-brand text-velmora-rosewood">Quantity</p>
                <div className="flex w-fit items-center rounded-full border border-velmora-mist/35 bg-velmora-ivory text-velmora-noir">
                  <button
                    type="button"
                    className="inline-flex h-12 w-12 items-center justify-center"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-10 text-center text-sm font-medium">{quantity}</span>
                  <button
                    type="button"
                    className="inline-flex h-12 w-12 items-center justify-center"
                    onClick={() => setQuantity((current) => current + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="luxury-button-primary w-full"
                onClick={() => addItem(product, selectedVariant, quantity)}
              >
                Add to cart
              </button>
            </div>

            <div className="mt-8">
              <AccordionItem defaultOpen title="Description">
                {product.shortDescription}
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-3">{product.care}</p>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                {product.shipping}
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap pb-16 md:pb-24">
        <div className="mb-10 space-y-3">
          <p className="eyebrow">You may also like</p>
          <h2 className="text-4xl text-velmora-noir md:text-5xl">Continue the collection</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((item, index) => (
            <ProductCard key={item.id} idPrefix={`related-${index}`} product={item} showQuickAdd={false} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default ProductDetail

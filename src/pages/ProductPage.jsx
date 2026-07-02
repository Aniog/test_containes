import { Minus, Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'

import ImageLoaderSection from '@/components/shared/ImageLoaderSection'
import ProductCard from '@/components/shared/ProductCard'
import QuantitySelector from '@/components/shared/QuantitySelector'
import StarRating from '@/components/shared/StarRating'
import { getProductById, products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { getStrkImageSource } from '@/lib/strkImages'

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-velmora-line py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-xs uppercase tracking-luxury text-velmora-ink">{title}</span>
        {isOpen ? <Minus className="h-4 w-4 text-velmora-gold" /> : <Plus className="h-4 w-4 text-velmora-gold" />}
      </button>
      {isOpen ? <p className="mt-4 max-w-2xl text-sm leading-8 text-velmora-muted">{children}</p> : null}
    </div>
  )
}

const ProductPage = () => {
  const { productId } = useParams()
  const product = getProductById(productId)
  const { addToCart } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product?.variantOptions[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('primary')
  const [openAccordion, setOpenAccordion] = useState('description')

  const gallery = useMemo(() => {
    if (!product) return []

    return [
      {
        key: 'primary',
        id: `${product.id}-primary-gallery-slot`,
        title: `${product.id}-gallery-primary-title`,
        description: `${product.id}-gallery-primary-desc`,
        label: 'Front view',
      },
      {
        key: 'secondary',
        id: `${product.id}-secondary-gallery-slot`,
        title: `${product.id}-gallery-secondary-title`,
        description: `${product.id}-gallery-secondary-desc`,
        label: 'Detail view',
      },
      {
        key: 'lifestyle',
        id: `${product.id}-lifestyle-gallery-slot`,
        title: `${product.id}-gallery-lifestyle-title`,
        description: `${product.id}-gallery-lifestyle-desc`,
        label: 'Worn view',
      },
    ]
  }, [product])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3)
  const activeGalleryImage = gallery.find((item) => item.key === activeImage) || gallery[0]
  const activeImageSrc = getStrkImageSource(activeGalleryImage.id)

  return (
    <main className="pt-28 sm:pt-32">
      <section className="section-shell pt-6">
        <div className="mb-8 text-xs uppercase tracking-luxury text-velmora-muted">
          <Link to="/shop" className="transition hover:text-velmora-gold">
            Shop
          </Link>{' '}
          / <span className="text-velmora-ink">{product.name}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <ImageLoaderSection className="space-y-4" dependency={`${product.id}-${activeImage}`}>
            <div className="overflow-hidden rounded-[2.4rem] bg-velmora-mist shadow-velmora-soft">
              <img
                data-strk-img-id={activeGalleryImage.id}
                data-strk-img={`[${activeGalleryImage.description}] [${activeGalleryImage.title}] [product-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src={activeImageSrc}
                alt={product.name}
                className="aspect-editorial w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {gallery.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveImage(item.key)}
                  className={`overflow-hidden rounded-[1.4rem] border bg-velmora-mist ${
                    activeImage === item.key
                      ? 'border-velmora-gold'
                      : 'border-velmora-line'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${item.id}`}
                    data-strk-img={`[${item.description}] [${item.title}] [product-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="420"
                    src={getStrkImageSource(`thumb-${item.id}`)}
                    alt={item.label}
                    className="aspect-editorial w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {gallery.map((item) => (
              <div key={`meta-${item.key}`} className="sr-only">
                <span id={item.title}>{product.name} {item.label}</span>
                <span id={item.description}>{product.shortDescription}</span>
              </div>
            ))}
          </ImageLoaderSection>

          <div className="rounded-[2.4rem] border border-velmora-line bg-velmora-sand p-6 shadow-velmora-soft sm:p-8">
            <p className="text-xs uppercase tracking-luxury text-velmora-gold">{product.category}</p>
            <h1 id="product-title" className="mt-4 font-display text-5xl uppercase tracking-luxury-tight text-velmora-ink sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-4 flex items-center justify-between gap-4 border-b border-velmora-line pb-6">
              <p className="text-2xl font-medium text-velmora-ink">${product.price}</p>
              <StarRating rating={product.rating} reviews={product.reviews} />
            </div>
            <p className="mt-6 max-w-xl text-sm leading-8 text-velmora-muted sm:text-base">
              {product.description}
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <p className="mb-3 text-xs uppercase tracking-luxury text-velmora-muted">Tone</p>
                <div className="flex flex-wrap gap-3">
                  {product.variantOptions.map((variant) => {
                    const isActive = selectedVariant === variant

                    return (
                      <button
                        key={variant}
                        type="button"
                        onClick={() => setSelectedVariant(variant)}
                        className={`rounded-full border px-5 py-3 text-xs uppercase tracking-luxury transition ${
                          isActive
                            ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory'
                            : 'border-velmora-line bg-velmora-parchment text-velmora-ink hover:border-velmora-gold hover:text-velmora-gold'
                        }`}
                      >
                        {variant}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs uppercase tracking-luxury text-velmora-muted">Quantity</p>
                <QuantitySelector
                  value={quantity}
                  onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
                  onIncrease={() => setQuantity((current) => current + 1)}
                />
              </div>

              <button
                type="button"
                onClick={() => addToCart(product, selectedVariant, quantity)}
                className="btn-primary w-full"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 divide-y divide-velmora-line border-t border-velmora-line">
              <AccordionItem
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
              >
                {product.description}
              </AccordionItem>
              <AccordionItem
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? '' : 'materials')}
              >
                {product.materialsCare}
              </AccordionItem>
              <AccordionItem
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
              >
                {product.shippingReturns}
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="mb-10 flex items-end justify-between gap-5 border-b border-velmora-line pb-8">
          <div>
            <p className="text-xs uppercase tracking-luxury text-velmora-gold">You may also like</p>
            <h2 className="mt-3 font-display text-4xl text-velmora-ink">More warm gold signatures</h2>
          </div>
        </div>
        <ImageLoaderSection className="grid gap-6 md:grid-cols-3" dependency={relatedProducts.length}>
          {relatedProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              context="related-products"
              sectionId="related-products-title"
              onQuickAdd={(entry) => addToCart(entry, entry.variantOptions[0], 1)}
            />
          ))}
        </ImageLoaderSection>
        <h2 id="related-products-title" className="sr-only">
          Related Velmora jewelry products
        </h2>
      </section>
    </main>
  )
}

export default ProductPage

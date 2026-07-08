import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Plus, Minus, Truck, RotateCcw, ShieldCheck } from 'lucide-react'
import { getProductById, getRelatedProducts, PRODUCTS } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { StrkImage } from '@/components/product/StrkImage'
import { StarRating } from '@/components/ui/StarRating'
import { ProductCard } from '@/components/product/ProductCard'
import { formatPrice, cn } from '@/lib/utils'

const TRUST_ITEMS = [
  { Icon: Truck, label: 'Free shipping over $75' },
  { Icon: RotateCcw, label: '30-day returns' },
  { Icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [activeImage, setActiveImage] = useState(0)
  const [variant, setVariant] = useState(product?.variants?.[0]?.id)
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')

  if (!product) {
    return (
      <div className="container-page pt-40 pb-32 text-center">
        <h1 className="display-2 text-deep">Piece not found</h1>
        <p className="body-base mt-4">The piece you’re looking for has moved or sold out.</p>
        <Link to="/shop" className="btn-primary mt-8 inline-flex">Shop the Collection</Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem({ id: product.id, variant, quantity })
  }

  return (
    <div className="bg-cream">
      <div className="container-page pt-28 md:pt-32 pb-6">
        <nav aria-label="Breadcrumb" className="text-[11px] tracking-eyebrow uppercase font-sans text-mocha">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <Link
            to={`/shop/${product.category}`}
            className="hover:text-gold transition-colors capitalize"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-deep">{product.name}</span>
        </nav>
      </div>

      <div className="container-page pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <ul className="flex md:flex-col gap-3 shrink-0">
              {product.images.map((image, i) => (
                <li key={image.id}>
                  <button
                    type="button"
                    aria-label={`View image ${i + 1}`}
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      'block w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors',
                      activeImage === i ? 'border-gold' : 'border-transparent hover:border-taupe',
                    )}
                  >
                    <StrkImage
                      id={image.id}
                      query={image.queryParts.map((p) => `[${p}]`).join(' ')}
                      ratio="3x4"
                      width={400}
                      alt={image.alt}
                      eager={i < 2}
                      className="w-full h-full object-cover"
                    />
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex-1 relative aspect-[3/4] bg-sand overflow-hidden">
              <StrkImage
                id={product.images[activeImage].id}
                query={product.images[activeImage].queryParts.map((p) => `[${p}]`).join(' ')}
                ratio="3x4"
                width={1200}
                alt={product.images[activeImage].alt}
                eager
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-cream/95 text-deep text-[10px] tracking-eyebrow uppercase font-sans px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:pt-4">
            <p className="eyebrow text-mocha">{product.subcategory}</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-3 text-deep leading-[1.1]">
              {product.name}
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <p className="font-sans text-xl text-deep">
                {formatPrice(product.price)}
                {product.originalPrice && (
                  <span className="ml-2 text-sm text-mocha line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </p>
              <span className="text-[11px] tracking-eyebrow uppercase font-sans text-mocha">
                or 4 payments of {formatPrice(product.price / 4)}
              </span>
            </div>
            <div className="mt-4">
              <StarRating value={product.rating} count={product.reviewCount} size={14} />
            </div>
            <p className="body-base mt-6 max-w-md">{product.shortDescription}</p>

            {product.variants.length > 1 && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <p className="eyebrow text-mocha">Finish</p>
                  <p className="text-xs font-sans text-deep capitalize">
                    {product.variants.find((v) => v.id === variant)?.name}
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVariant(v.id)}
                      aria-pressed={variant === v.id}
                      className={cn(
                        'flex items-center gap-2 pl-2 pr-4 py-2 border text-sm font-sans transition-all',
                        variant === v.id
                          ? 'border-deep bg-deep text-cream'
                          : 'border-taupe text-deep hover:border-deep',
                      )}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-taupe"
                        style={{ backgroundColor: v.hex }}
                        aria-hidden="true"
                      />
                      {v.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex items-stretch gap-3">
              <div className="flex items-center border border-deep">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-12 flex items-center justify-center text-deep hover:bg-sand transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm font-sans text-deep">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-12 flex items-center justify-center text-deep hover:bg-sand transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="btn-primary flex-1"
              >
                Add to Bag · {formatPrice(product.price * quantity)}
              </button>
            </div>

            <ul className="mt-7 grid grid-cols-3 gap-3">
              {TRUST_ITEMS.map(({ Icon, label }) => (
                <li
                  key={label}
                  className="flex flex-col items-center text-center gap-1.5 py-3 border border-taupe/40"
                >
                  <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  <span className="text-[10px] tracking-eyebrow uppercase font-sans text-deep/80 leading-tight">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Accordions */}
            <div className="mt-10 border-t border-taupe/40">
              <Accordion
                id="description"
                title="Description"
                open={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? null : 'description')}
              >
                <p className="body-base">{product.description}</p>
              </Accordion>
              <Accordion
                id="materials"
                title="Materials & Care"
                open={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
              >
                <p className="body-base">
                  <span className="font-sans text-deep">Materials — </span>
                  {product.materials}
                </p>
                <p className="body-base mt-3">
                  <span className="font-sans text-deep">Care — </span>
                  {product.care}
                </p>
              </Accordion>
              <Accordion
                id="shipping"
                title="Shipping & Returns"
                open={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
              >
                <p className="body-base">{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-taupe/40 bg-sand/30 py-20 md:py-24">
        <div className="container-page">
          <div className="mb-10 md:mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-mocha">You May Also Love</p>
              <h2 className="display-2 mt-3 text-deep">Pieces to pair</h2>
            </div>
            <Link to="/shop" className="btn-ghost hidden md:inline-flex">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function Accordion({ title, open, onToggle, children }) {
  return (
    <div className="border-b border-taupe/40">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-serif text-xl text-deep">{title}</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-deep transition-transform duration-300',
            open && 'rotate-180',
          )}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-[max-height,opacity] duration-500 ease-out-soft',
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="pb-6 pr-6 max-w-prose">{children}</div>
      </div>
    </div>
  )
}

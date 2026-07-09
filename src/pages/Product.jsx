import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProductById, getRelatedProducts, formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { getImageUrl } from '@/lib/images'
import { StarRating } from '@/components/StarRating'
import { ProductCard } from '@/components/ProductCard'
import { ChevronDown, Minus, Plus, ArrowLeft } from 'lucide-react'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-xs uppercase tracking-widest text-velmora-text">{title}</span>
        <ChevronDown size={16} className={`text-velmora-muted transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <div className="font-sans text-sm leading-relaxed text-velmora-muted">{children}</div>
      </div>
    </div>
  )
}

export default function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (!product) return
    setSelectedVariant(product.variants[0])
    setQuantity(1)
    setAdded(false)
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-velmora-bg px-5 text-center">
        <h1 className="font-serif text-4xl text-velmora-text mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-velmora-accent underline underline-offset-4">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id)
  const titleId = `product-detail-title-${product.id}`
  const categoryId = `product-detail-category-${product.id}`
  const mainUrl = getImageUrl(product.imgId)
  const hoverUrl = getImageUrl(product.hoverImgId)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="bg-velmora-bg min-h-screen pt-20 md:pt-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 py-8 md:py-12">
        <button
          onClick={() => navigate(-1)}
          className="hidden md:inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-velmora-muted hover:text-velmora-text mb-8"
        >
          <ArrowLeft size={14} /> Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[4/5] overflow-hidden bg-velmora-bg-warm mb-4">
              <img
                alt={product.name}
                src={mainUrl}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[hoverUrl, mainUrl, hoverUrl, mainUrl].map((url, idx) => (
                <div key={idx} className="relative aspect-square overflow-hidden bg-velmora-bg-warm">
                  <img
                    alt={`${product.name} view ${idx + 1}`}
                    src={url}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col md:pt-8">
            <p
              id={categoryId}
              className="text-[10px] font-sans uppercase tracking-[0.25em] text-velmora-muted mb-3"
            >
              {product.category}
            </p>
            <h1
              id={titleId}
              className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest-plus text-velmora-text mb-4"
            >
              {product.name}
            </h1>
            <p className="font-sans text-xl md:text-2xl text-velmora-text mb-4">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-2 mb-6">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-velmora-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-velmora-muted mb-8">{product.description}</p>

            <div className="mb-6">
              <p className="text-[10px] font-sans uppercase tracking-widest text-velmora-text mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 rounded-full border text-xs font-sans uppercase tracking-widest transition-all ${
                      selectedVariant?.id === variant.id
                        ? 'border-velmora-text bg-velmora-text text-white'
                        : 'border-velmora-border-strong text-velmora-text hover:border-velmora-text'
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-[10px] font-sans uppercase tracking-widest text-velmora-text mb-3">Quantity</p>
              <div className="inline-flex items-center border border-velmora-border-strong">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 hover:bg-velmora-bg-warm"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-5 text-sm font-sans text-velmora-text min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 hover:bg-velmora-bg-warm"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-xs font-medium uppercase tracking-widest text-white transition-colors ${
                added ? 'bg-velmora-text' : 'bg-velmora-accent hover:bg-velmora-accent-hover'
              }`}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        <section className="mt-20 md:mt-28">
          <div className="mb-10 text-center">
            <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-velmora-accent mb-3">Complete the Look</p>
            <h2 id="related-title" className="font-serif text-3xl md:text-4xl text-velmora-text">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} contextLabel="related-title" />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

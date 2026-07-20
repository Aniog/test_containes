import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { StrkImage, StrkImageContainer } from '@/components/ui/StrkImage'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'
import { formatPrice, cn } from '@/lib/utils'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  if (!product) return <Navigate to="/shop" replace />
  return <ProductDetailContent product={product} />
}

function ProductDetailContent({ product }) {
  const { addItem } = useCart()

  const [activeImg, setActiveImg] = useState(0)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)

  const related = getRelatedProducts(product.id, 4)
  const titleId = `pd-${product.id}-title`
  const tagId = `pd-${product.id}-tag`

  const handleAdd = () => {
    addItem(product, { variant, quantity })
  }

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <StrkImageContainer deps={[product.id]} className="pt-24 md:pt-28">
      {/* breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 text-[11px] uppercase tracking-widest2 text-muted flex items-center gap-2">
        <Link to="/" className="hover:text-gold">Home</Link>
        <ChevronRight size={12} />
        <Link to="/shop" className="hover:text-gold">Shop</Link>
        <ChevronRight size={12} />
        <span className="text-charcoal">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pb-20">
        {/* gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar">
            {product.images.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setActiveImg(i)}
                className={cn(
                  'shrink-0 w-16 md:w-20 aspect-square overflow-hidden bg-sand border transition-colors',
                  activeImg === i ? 'border-gold' : 'border-transparent hover:border-stone'
                )}
              >
                <StrkImage
                  imgId={`${img.id}-thumb`}
                  query={`[${tagId}] [${titleId}] gold jewelry detail`}
                  ratio="1x1"
                  width={200}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="flex-1 aspect-[4/5] overflow-hidden bg-sand">
            <StrkImage
              imgId={`${product.images[activeImg].id}-main`}
              query={`[${tagId}] [${titleId}] gold jewelry editorial`}
              ratio="4x5"
              width={900}
              alt={product.images[activeImg].alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* info */}
        <div className="md:pt-4">
          <p id={tagId} className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
            {product.subcategory}
          </p>
          <h1
            id={titleId}
            className="font-serif text-4xl md:text-5xl text-charcoal uppercase tracking-widest2 leading-tight"
          >
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <StarRating rating={product.rating} size={15} />
            <span className="text-sm text-muted">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-serif text-3xl text-charcoal">{formatPrice(product.price)}</p>

          <p className="mt-5 text-muted leading-relaxed">{product.description}</p>

          {/* variants */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-widest2 text-charcoal mb-3">
              Tone — <span className="text-muted">{variant}</span>
            </p>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={cn(
                    'px-6 py-3 text-[11px] uppercase tracking-widest2 border transition-colors',
                    variant === v
                      ? 'border-gold bg-gold text-cream'
                      : 'border-stone text-charcoal hover:border-charcoal'
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* quantity */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-widest2 text-charcoal mb-3">Quantity</p>
            <div className="inline-flex items-center border border-stone/60">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-charcoal hover:bg-sand"
                aria-label="Decrease"
              >
                <Minus size={14} />
              </button>
              <span className="px-6 text-charcoal min-w-[3rem] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-charcoal hover:bg-sand"
                aria-label="Increase"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* add to cart */}
          <button
            onClick={handleAdd}
            className="mt-8 w-full bg-gold text-cream py-4 text-[11px] uppercase tracking-widest2 hover:bg-gold-deep transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={15} />
            Add to Cart — {formatPrice(product.price * quantity)}
          </button>

          <p className="mt-4 text-xs text-muted text-center">
            Free worldwide shipping · 30-day returns
          </p>

          {/* accordions */}
          <div className="mt-12">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* related */}
      <section className="py-20 md:py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Continue Exploring</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal tracking-wide">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </StrkImageContainer>
  )
}

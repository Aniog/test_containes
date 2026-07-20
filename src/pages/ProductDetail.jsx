import { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, ArrowLeft } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { StockImg } from '@/components/ui/StockImg'
import { StarRating } from '@/components/ui/StarRating'
import { QuantitySelector } from '@/components/ui/QuantitySelector'
import { Accordion } from '@/components/ui/Accordion'
import { ProductCard } from '@/components/product/ProductCard'

const variants = ['Gold', 'Silver']

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = useMemo(() => getProductById(id), [id])
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [mainImage, setMainImage] = useState('primary')

  if (!product) {
    return (
      <div className="container-velmora py-40 text-center">
        <h1 className="font-serif text-2xl text-velmora-dark">Product not found</h1>
        <button onClick={() => navigate('/shop')} className="btn-primary mt-6">
          Back to Shop
        </button>
      </div>
    )
  }

  const related = getRelatedProducts(product.id)

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant)
  }

  return (
    <div className="min-h-screen bg-velmora-light pb-16 pt-24 md:pt-28">
      <div className="container-velmora">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-velmora-muted transition hover:text-velmora-dark"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Back
        </button>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col-reverse gap-4 md:flex-row md:gap-6"
          >
            <div className="flex gap-3 overflow-x-auto md:flex-col md:overflow-visible">
              {[
                { key: 'primary', query: product.imageQuery },
                { key: 'secondary', query: product.secondaryQuery },
                { key: 'lifestyle', query: `gold jewelry lifestyle editorial warm ${product.category}` },
              ].map((thumb) => (
                <button
                  key={thumb.key}
                  onClick={() => setMainImage(thumb.key)}
                  className={`h-20 w-20 flex-shrink-0 overflow-hidden border bg-stone-100 transition md:h-24 md:w-24 ${
                    mainImage === thumb.key
                      ? 'border-velmora-dark'
                      : 'border-transparent hover:border-velmora-hairline'
                  }`}
                >
                  <StockImg
                    id={`thumb-${product.id}-${thumb.key}`}
                    query={thumb.query}
                    ratio="1x1"
                    width={200}
                    alt={`${product.name} thumbnail`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="aspect-[3/4] flex-1 overflow-hidden bg-stone-100">
              <StockImg
                id={`main-${product.id}-${mainImage}`}
                query={
                  mainImage === 'primary'
                    ? product.imageQuery
                    : mainImage === 'secondary'
                    ? product.secondaryQuery
                    : `gold jewelry lifestyle editorial warm ${product.category}`
                }
                ratio="3x4"
                width={900}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:pr-8"
          >
            <div className="flex items-start justify-between gap-4">
              <h1 className="font-serif text-3xl uppercase tracking-[0.15em] text-velmora-dark md:text-4xl lg:text-5xl">
                {product.name}
              </h1>
              <button
                className="text-velmora-muted transition hover:text-velmora-gold"
                aria-label="Add to wishlist"
              >
                <Heart size={22} strokeWidth={1.5} />
              </button>
            </div>

            <p className="mt-3 font-serif text-2xl text-velmora-dark md:text-3xl">
              ${product.price}
            </p>

            <div className="mt-4">
              <StarRating
                rating={product.rating}
                count={product.reviewCount}
                size={16}
              />
            </div>

            <p className="mt-6 text-sm leading-relaxed text-velmora-muted md:text-base">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-velmora-dark">
                Tone
              </p>
              <div className="flex gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition ${
                      selectedVariant === variant
                        ? 'bg-velmora-dark text-white'
                        : 'border border-velmora-hairline bg-white text-velmora-dark hover:border-velmora-dark'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-velmora-dark">
                Quantity
              </p>
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>

            <button onClick={handleAddToCart} className="btn-primary mt-8 w-full">
              Add to Cart — ${product.price * quantity}
            </button>

            <div className="mt-10">
              <Accordion items={accordionItems} defaultOpen={[0]} />
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="text-center font-serif text-3xl text-velmora-dark md:text-4xl">
              You May Also Like
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {related.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

import { Minus, Plus } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import AccordionItem from '@/components/product/AccordionItem'
import ProductGallery from '@/components/product/ProductGallery'
import RelatedProducts from '@/components/product/RelatedProducts'
import { useCart } from '@/components/cart/CartContext'
import { formatPrice, getProductBySlug, getRelatedProducts } from '@/data/catalog'
import { useStrkImages } from '@/lib/useStrkImages'
import StarRating from '@/components/ui/StarRating'

const ProductPage = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const { addToCart } = useCart()
  const relatedProducts = useMemo(
    () => (product ? getRelatedProducts(product) : []),
    [product],
  )
  const containerRef = useStrkImages([slug, selectedTone])

  useEffect(() => {
    setSelectedTone(product?.tones?.[0] || 'Gold Tone')
    setQuantity(1)
    setOpenAccordion('Description')
  }, [product])


  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const accordionItems = [
    { title: 'Description', content: product.longDescription },
    { title: 'Materials & Care', content: product.materialsCare },
    { title: 'Shipping & Returns', content: product.shippingReturns },
  ]

  return (
    <div ref={containerRef} className="bg-stone-50 pt-28 md:pt-32">
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/shop"
            className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500 transition duration-300 hover:text-amber-800"
          >
            Back to shop
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <ProductGallery product={product} />

            <div className="rounded-[34px] border border-stone-200 bg-white p-6 shadow-[0_22px_50px_rgba(28,25,23,0.06)] md:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
                {product.category}
              </p>
              <h1 className="mt-4 font-serif text-4xl uppercase tracking-[0.18em] text-stone-900 md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-5 text-3xl font-medium text-stone-900">
                {formatPrice(product.price)}
              </p>
              <div className="mt-4">
                <StarRating rating={product.rating} reviewCount={product.reviewCount} />
              </div>
              <p className="mt-6 text-base leading-7 text-stone-600">
                {product.description}
              </p>

              <div className="mt-8 border-t border-stone-200 pt-8">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
                  Select tone
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {product.tones.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.24em] transition duration-300 ${
                        selectedTone === tone
                          ? 'border-stone-900 bg-stone-900 text-stone-50'
                          : 'border-stone-300 bg-stone-50 text-stone-700 hover:border-stone-900 hover:text-stone-900'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-stone-200 pt-8">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
                  Quantity
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="inline-flex items-center rounded-full border border-stone-300 bg-stone-50 p-1">
                    <button
                      type="button"
                      onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                      className="rounded-full p-3 text-stone-700 transition duration-300 hover:bg-white"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-10 text-center text-sm font-medium text-stone-900">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((current) => current + 1)}
                      className="rounded-full p-3 text-stone-700 transition duration-300 hover:bg-white"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addToCart(product, { tone: selectedTone, quantity })}
                className="mt-8 w-full rounded-full bg-amber-700 px-6 py-4 text-xs font-medium uppercase tracking-[0.3em] text-stone-50 transition duration-300 hover:bg-amber-800"
              >
                Add to Cart
              </button>

              <div className="mt-8 border-t border-stone-200">
                {accordionItems.map((item) => (
                  <AccordionItem
                    key={item.title}
                    title={item.title}
                    content={item.content}
                    isOpen={openAccordion === item.title}
                    onToggle={() =>
                      setOpenAccordion((current) =>
                        current === item.title ? '' : item.title,
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
    </div>
  )
}

export default ProductPage

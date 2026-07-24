import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import ProductGallery from '@/components/storefront/ProductGallery'
import QuantitySelector from '@/components/storefront/QuantitySelector'
import Stars from '@/components/storefront/Stars'
import AccordionItem from '@/components/storefront/AccordionItem'
import ProductCard from '@/components/storefront/ProductCard'
import { findProductBySlug, formatCurrency, products } from '@/data/storeData'

const ProductPage = ({ onAddToCart }) => {
  const { slug } = useParams()
  const product = findProductBySlug(slug) || products[0]
  const [selectedTone, setSelectedTone] = useState(product.tones[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('hero')
  const [openSection, setOpenSection] = useState('Description')

  const relatedProducts = useMemo(
    () => products.filter((item) => item.slug !== product.slug).slice(0, 3),
    [product.slug],
  )

  useEffect(() => {
    setSelectedTone(product.tones[0])
    setQuantity(1)
    setActiveImage('hero')
    setOpenSection('Description')
  }, [product.slug, product.tones])

  const handleToggle = (section) => {
    setOpenSection((current) => (current === section ? '' : section))
  }

  return (
    <div className="bg-[#f7f2ea]">
      <section className="border-b border-[rgba(215,195,171,0.7)] bg-white/40">
        <div className="mx-auto max-w-7xl px-5 pb-8 pt-32 text-xs uppercase tracking-[0.28em] text-[#6f5946] sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-2">
            <Link to="/" className="transition hover:text-[#c19a6b]">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/shop" className="transition hover:text-[#c19a6b]">Shop</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#241a13]">{product.name}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <ProductGallery
            product={product}
            activeImage={activeImage}
            onSelectImage={setActiveImage}
          />

          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#c19a6b]">
              {product.category}
            </p>
            <h1
              id={`pdp-${product.slug}-name`}
              className="mt-4 font-['Cormorant_Garamond'] text-[2.9rem] uppercase leading-none tracking-[0.22em] text-[#241a13] sm:text-[3.5rem]"
            >
              {product.name}
            </h1>
            <div className="mt-5 flex items-center justify-between gap-4 border-b border-[rgba(215,195,171,0.7)] pb-6">
              <p className="text-2xl text-[#241a13]">{formatCurrency(product.price)}</p>
              <Stars rating={product.rating} reviews={product.reviews} />
            </div>
            <p id={`pdp-${product.slug}-type`} className="mt-6 text-sm uppercase tracking-[0.28em] text-[#c19a6b]">
              {product.type}
            </p>
            <p id={`pdp-${product.slug}-desc`} className="mt-4 max-w-xl text-base leading-8 text-[#6f5946]">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#241a13]">Tone</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.tones.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.28em] transition ${
                      selectedTone === tone
                        ? 'border-[#c19a6b] bg-[#c19a6b] text-[#f7f2ea]'
                        : 'border-[#d7c3ab] bg-white text-[#241a13] hover:border-[#c19a6b] hover:text-[#c19a6b]'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
              <p id={`pdp-${product.slug}-tone`} className="sr-only">{selectedTone}</p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <QuantitySelector
                value={quantity}
                onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
                onIncrease={() => setQuantity((current) => current + 1)}
              />
              <button
                type="button"
                onClick={() => onAddToCart(product, quantity, selectedTone)}
                className="h-14 flex-1 rounded-full bg-[#c19a6b] px-6 text-xs uppercase tracking-[0.32em] text-[#f7f2ea] transition hover:bg-[#241a13]"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-10 rounded-[2rem] border border-[rgba(215,195,171,0.7)] bg-white/80 px-6">
              <AccordionItem
                title="Description"
                open={openSection === 'Description'}
                onToggle={() => handleToggle('Description')}
              >
                <div>
                  <p>{product.description}</p>
                  <ul id={`pdp-${product.slug}-details`} className="mt-4 list-disc space-y-2 pl-5">
                    {product.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </AccordionItem>
              <AccordionItem
                title="Materials & Care"
                open={openSection === 'Materials & Care'}
                onToggle={() => handleToggle('Materials & Care')}
              >
                <p>{product.materialsCare}</p>
              </AccordionItem>
              <AccordionItem
                title="Shipping & Returns"
                open={openSection === 'Shipping & Returns'}
                onToggle={() => handleToggle('Shipping & Returns')}
              >
                <p>{product.shippingReturns}</p>
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(215,195,171,0.7)] bg-white/50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#c19a6b]">Related pieces</p>
              <h2 className="mt-4 font-['Cormorant_Garamond'] text-5xl leading-none text-[#241a13] sm:text-6xl">
                You may also like
              </h2>
            </div>
            <Link to="/shop" className="text-xs uppercase tracking-[0.32em] text-[#241a13] transition hover:text-[#c19a6b]">
              View all
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.slug} product={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage

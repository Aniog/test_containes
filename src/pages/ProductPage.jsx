import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Accordion from '@/components/Accordion'
import ProductCard from '@/components/ProductCard'
import QuantitySelector from '@/components/QuantitySelector'
import SectionHeading from '@/components/SectionHeading'
import StarRating from '@/components/StarRating'
import { useCart } from '@/context/CartContext'
import { getProductBySlug, products } from '@/data/products'

function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedTone, setSelectedTone] = useState(product?.tones[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const relatedProducts = useMemo(() => products.filter((item) => item.slug !== slug).slice(0, 3), [slug])

  if (!product) {
    return (
      <div className="bg-stone-100 px-5 pb-20 pt-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-stone-300/70 bg-stone-50 px-8 py-16 text-center shadow-[0_18px_50px_rgba(28,25,23,0.08)]">
          <h1 className="font-serif text-4xl text-stone-950">Product not found</h1>
          <p className="mt-4 text-sm leading-7 text-stone-600">
            This piece is no longer in the current edit.
          </p>
          <Link
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-stone-100 transition hover:bg-amber-200 hover:text-stone-950"
            to="/shop"
          >
            <ArrowLeft className="h-4 w-4" /> Back to shop
          </Link>
        </div>
      </div>
    )
  }

  const galleryImages = product.galleryImages?.length ? product.galleryImages : [product.cardImage].filter(Boolean)
  const activeImage = galleryImages[selectedIndex] || galleryImages[0] || product.cardImage

  return (
    <div className="bg-stone-100 px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-stone-500">
          <Link className="transition hover:text-stone-950" to="/shop">
            Shop
          </Link>
          <span>/</span>
          <span>{product.category}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <section>
            <div className="overflow-hidden rounded-[2.5rem] border border-stone-300/70 bg-stone-200 shadow-[0_24px_70px_rgba(28,25,23,0.12)]">
              <img alt={product.name} className="aspect-[4/5] h-full w-full object-cover" src={activeImage} />
            </div>

            <div className="mt-5 grid grid-cols-4 gap-4">
              {galleryImages.map((image, index) => {
                const isSelected = selectedIndex === index

                return (
                  <button
                    className={`overflow-hidden rounded-[1.5rem] border bg-stone-200 transition ${
                      isSelected
                        ? 'border-stone-950 shadow-[0_16px_35px_rgba(28,25,23,0.12)]'
                        : 'border-stone-300/70 hover:border-stone-500'
                    }`}
                    key={`${product.slug}-gallery-${index}`}
                    onClick={() => setSelectedIndex(index)}
                    type="button"
                  >
                    <img
                      alt={`${product.name} view ${index + 1}`}
                      className="aspect-square h-full w-full object-cover"
                      src={image}
                    />
                  </button>
                )
              })}
            </div>
          </section>

          <section className="rounded-[2.5rem] border border-stone-300/70 bg-stone-50 p-7 shadow-[0_20px_60px_rgba(28,25,23,0.08)] sm:p-10 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-700">{product.category}</p>
            <h1 className="mt-5 font-serif text-4xl uppercase tracking-[0.28em] text-stone-950 sm:text-5xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-2xl text-stone-950">${product.price}</p>
              <StarRating rating={product.rating} reviews={product.reviews} />
            </div>
            <p className="mt-6 text-base leading-8 text-stone-600">{product.description}</p>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">Tone</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.tones.map((tone) => {
                  const isActive = selectedTone === tone

                  return (
                    <button
                      className={`rounded-full border px-5 py-3 text-sm font-medium transition ${
                        isActive
                          ? 'border-stone-950 bg-stone-950 text-stone-100'
                          : 'border-stone-300 bg-stone-50 text-stone-700 hover:border-stone-950 hover:text-stone-950'
                      }`}
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      type="button"
                    >
                      {tone}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <QuantitySelector
                quantity={quantity}
                onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
                onIncrease={() => setQuantity((current) => current + 1)}
              />
            </div>

            <button
              className="mt-8 w-full rounded-full bg-stone-950 px-6 py-4 text-sm font-medium uppercase tracking-[0.25em] text-stone-100 transition hover:bg-amber-200 hover:text-stone-950"
              onClick={() => addToCart(product, selectedTone, quantity)}
              type="button"
            >
              Add to Cart
            </button>

            <div className="mt-10">
              <Accordion
                items={[
                  {
                    title: 'Description',
                    content: product.description,
                  },
                  {
                    title: 'Materials & Care',
                    content: `${product.material}. ${product.care}`,
                  },
                  {
                    title: 'Shipping & Returns',
                    content: product.shipping,
                  },
                ]}
              />
            </div>
          </section>
        </div>

        <section className="mt-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="You may also like"
              title="More Velmora favorites"
              description="Continue the edit with pieces that layer beautifully or make a thoughtful next gift."
            />
            <Link className="inline-flex items-center gap-2 text-sm font-medium text-stone-700 transition hover:text-stone-950" to="/shop">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((relatedProduct, index) => (
              <ProductCard
                imagePrefix={`related-${relatedProduct.slug}-${index}`}
                key={relatedProduct.slug}
                product={relatedProduct}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductPage

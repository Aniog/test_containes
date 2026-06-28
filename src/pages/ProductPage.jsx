import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AccordionItem from '@/components/layout/AccordionItem.jsx'
import ProductCard from '@/components/layout/ProductCard.jsx'
import QuantitySelector from '@/components/layout/QuantitySelector.jsx'
import Stars from '@/components/layout/Stars.jsx'
import { useCart } from '@/context/CartContext.jsx'
import {
  formatPrice,
  getProductById,
  getRelatedProducts,
} from '@/data/products.js'

export default function ProductPage() {
  const { productId } = useParams()
  const { addToCart } = useCart()
  const product = getProductById(productId)
  const [activeImage, setActiveImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (!product) return
    setActiveImage(0)
    setSelectedVariant(product.variants[0])
    setQuantity(1)
  }, [product])

  if (!product) {
    return (
      <section className="mx-auto max-w-4xl px-5 pb-16 pt-32 text-center sm:px-6 lg:px-10">
        <p className="text-[0.68rem] uppercase tracking-[0.34em] text-stone-500">
          Not found
        </p>
        <h1 className="mt-4 font-serif text-4xl text-stone-950">
          This piece is no longer available.
        </h1>
        <Link
          to="/shop"
          className="mt-8 inline-flex rounded-full bg-stone-950 px-6 py-3 text-xs uppercase tracking-[0.28em] text-amber-200"
        >
          Back to Shop
        </Link>
      </section>
    )
  }

  const relatedProducts = getRelatedProducts(product.id)
  const activeAsset = product.images[activeImage]

  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-6 md:pb-24 lg:px-10">
      <div className="mb-8 text-sm text-stone-500">
        <Link to="/shop" className="transition hover:text-stone-900">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="grid gap-4 md:grid-cols-[100px,1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
            {product.images.map((image, index) => (
              <button
                key={`${image.id}-${index}`}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`shrink-0 overflow-hidden rounded-[1.25rem] border bg-stone-100 ${activeImage === index ? 'border-stone-950' : 'border-stone-200'}`}
              >
                <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-24 md:w-24">
                  <img
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                    src={image.url}
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="order-1 overflow-hidden rounded-[2rem] bg-stone-100 shadow-[0_28px_70px_rgba(28,25,23,0.1)] md:order-2">
            <div className="relative aspect-[4/5]">
              <img
                alt={product.name}
                className="h-full w-full object-cover"
                src={activeAsset.url}
              />
            </div>
          </div>
        </div>

        <div className="max-w-xl space-y-6">
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-stone-500">
            {product.category}
          </p>
          <h1 className="font-serif text-4xl uppercase tracking-[0.2em] text-stone-950 sm:text-5xl">
            {product.name}
          </h1>
          <p className="text-2xl text-stone-950">{formatPrice(product.price)}</p>
          <Stars rating={product.rating} reviews={product.reviews} />
          <p className="text-base leading-8 text-stone-600">{product.description}</p>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-stone-900">Tone</p>
            <div className="flex flex-wrap gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant}
                  type="button"
                  onClick={() => setSelectedVariant(variant)}
                  className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.24em] transition ${selectedVariant === variant ? 'border-stone-950 bg-stone-950 text-amber-200' : 'border-stone-300 bg-white text-stone-700 hover:bg-stone-100'}`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-stone-900">Quantity</p>
            <QuantitySelector value={quantity} onChange={setQuantity} />
          </div>

          <button
            type="button"
            onClick={() => addToCart(product, selectedVariant, quantity)}
            className="w-full rounded-full bg-stone-950 px-7 py-4 text-xs uppercase tracking-[0.28em] text-amber-200 transition hover:bg-stone-900"
          >
            Add to Cart
          </button>

          <div className="rounded-[2rem] border border-stone-200 bg-white px-6 py-2 shadow-sm">
            <AccordionItem title="Description" defaultOpen>
              {product.longDescription}
            </AccordionItem>
            <AccordionItem title="Materials & Care">
              {product.material}. {product.care}
            </AccordionItem>
            <AccordionItem title="Shipping & Returns">
              {product.shipping}
            </AccordionItem>
          </div>
        </div>
      </div>

      <div className="mt-20 space-y-8">
        <div className="space-y-3">
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-stone-500">
            You may also like
          </p>
          <h2 className="font-serif text-4xl text-stone-950">More Velmora favorites</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>
    </section>
  )
}

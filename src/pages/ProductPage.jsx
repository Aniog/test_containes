import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/shared/ProductCard'
import Stars from '@/components/shared/Stars'
import StoreImage from '@/components/shared/StoreImage'
import { products, relatedProductIds } from '@/data/products'
import { useCart } from '@/context/CartContext'

const accordionItems = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

const ProductPage = () => {
  const { productId } = useParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const product = products.find((item) => item.id === productId) || products[0]
  const [selectedImage, setSelectedImage] = useState(product.imageIds[0])
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')

  useEffect(() => {
    setSelectedImage(product.imageIds[0])
    setSelectedVariant(product.variants[0])
    setQuantity(1)
  }, [product])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [selectedImage, product])

  const relatedProducts = useMemo(() => {
    const ids = relatedProductIds[product.id] || []
    return products.filter((item) => ids.includes(item.id))
  }, [product.id])

  const contentByKey = {
    description: product.description,
    materials: product.materials,
    shipping: product.shipping,
  }

  return (
    <div ref={containerRef} className="bg-stone-50 text-stone-950">
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_20px_45px_rgba(28,24,19,0.08)]">
              <div className="aspect-[4/5] overflow-hidden bg-stone-100">
                <StoreImage
                  alt={product.name}
                  imgId={selectedImage}
                  query={`[${product.descId}] [${product.titleId}]`}
                  ratio="4x3"
                  width="1200"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.imageIds.map((imageId, index) => (
                <button
                  key={imageId}
                  type="button"
                  onClick={() => setSelectedImage(imageId)}
                  className={`overflow-hidden rounded-[1.25rem] border bg-white ${
                    selectedImage === imageId ? 'border-stone-950' : 'border-stone-200'
                  }`}
                >
                  <div className="aspect-[4/5] overflow-hidden bg-stone-100">
                    <StoreImage
                      alt={`${product.name} view ${index + 1}`}
                      imgId={imageId}
                      query={`[${product.descId}] [${product.titleId}]`}
                      ratio="4x3"
                      width="400"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_20px_45px_rgba(28,24,19,0.08)] md:p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-stone-500">{product.collection}</p>
            <h1 id={product.titleId} className="mt-4 font-serif text-4xl uppercase tracking-[0.28em] text-stone-950 md:text-5xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-4">
              <p className="text-2xl text-stone-950">${product.price}</p>
              <div className="flex items-center gap-2">
                <Stars />
                <span className="text-sm text-stone-500">{product.rating} ({product.reviews})</span>
              </div>
            </div>
            <p id={product.descId} className="mt-6 text-base leading-8 text-stone-600">
              {product.shortDescription}
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Tone</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants.map((variant) => {
                  const active = selectedVariant === variant
                  return (
                    <button
                      key={variant}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`rounded-full border px-5 py-2.5 text-sm transition-all duration-300 ${
                        active
                          ? 'border-stone-950 bg-stone-950 text-stone-50'
                          : 'border-stone-300 bg-white text-stone-700 hover:border-stone-500'
                      }`}
                    >
                      {variant}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="inline-flex items-center rounded-full border border-stone-300 bg-stone-50 p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="rounded-full p-3 text-stone-700 transition-colors hover:bg-white"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center text-sm text-stone-950">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                  className="rounded-full p-3 text-stone-700 transition-colors hover:bg-white"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full rounded-full bg-amber-200 px-6 py-4 text-sm font-medium text-stone-950 transition-colors hover:bg-amber-100"
            >
              Add to Cart
            </button>

            <div className="mt-8 space-y-3 border-t border-stone-200 pt-8">
              {accordionItems.map((item) => {
                const isOpen = openAccordion === item.key
                return (
                  <div key={item.key} className="rounded-[1.5rem] border border-stone-200 bg-stone-50">
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(isOpen ? '' : item.key)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left"
                    >
                      <span className="text-sm uppercase tracking-[0.28em] text-stone-800">
                        {item.label}
                      </span>
                      <span className="text-xl text-stone-500">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen ? (
                      <div className="px-5 pb-5 text-sm leading-7 text-stone-600">
                        {contentByKey[item.key]}
                      </div>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-100/60 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.32em] text-stone-500">You may also like</p>
            <h2 className="mt-4 font-serif text-4xl text-stone-950 md:text-5xl">More in the Velmora edit</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage

import { useEffect, useMemo, useRef, useState } from 'react'
import { useOutletContext, useParams, Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Star } from 'lucide-react'
import AccordionItem from '@/components/storefront/AccordionItem'
import ProductCard from '@/components/storefront/ProductCard'
import QuantitySelector from '@/components/storefront/QuantitySelector'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductPage() {
  const { productId } = useParams()
  const product = products.find((entry) => entry.id === productId) ?? products[0]
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addItem } = useCart()
  const { openCart } = useOutletContext()
  const containerRef = useRef(null)

  useEffect(() => {
    let disposeImages = () => {}

    const frameId = window.requestAnimationFrame(() => {
      if (!containerRef.current) {
        return
      }

      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      disposeImages = typeof cleanup === 'function' ? cleanup : () => {}
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      disposeImages()
    }
  }, [selectedImage, selectedColor, product.id])

  useEffect(() => {
    setSelectedColor(product.colors[0])
    setQuantity(1)
    setSelectedImage(0)
  }, [product.id, product.colors])


  const relatedProducts = useMemo(
    () => products.filter((entry) => entry.id !== product.id).slice(0, 3),
    [product.id],
  )

  const handleAddToCart = () => {
    addItem(product, selectedColor, quantity)
    openCart()
  }

  const handleRelatedAdd = (relatedProduct) => {
    addItem(relatedProduct)
    openCart()
  }

  return (
    <main ref={containerRef} className="mx-auto max-w-7xl px-4 pb-16 pt-32 md:px-8 md:pb-24 lg:px-10 lg:pb-28">
      <div className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr]">
        <section className="grid gap-5 lg:grid-cols-[7rem_minmax(0,1fr)] lg:items-start">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
            {product.detailImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`overflow-hidden rounded-[1.4rem] border transition ${
                  selectedImage === index
                    ? 'border-brand-gold shadow-soft'
                    : 'border-brand-line'
                }`}
              >
                <img
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="aspect-[4/5] w-24 object-cover lg:w-full"
                  data-strk-img-id={`${product.id}-${image.id}-thumb`}
                  data-strk-img={`[${product.imagePromptIds.subtitle}] [${product.imagePromptIds.title}] [${product.imagePromptIds.category}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </button>
            ))}
          </div>

          <div className="order-1 overflow-hidden rounded-[2.4rem] border border-brand-line bg-brand-champagne shadow-luxe lg:order-2">
            <span id={product.imagePromptIds.title} className="sr-only">
              {product.name}
            </span>
            <span id={product.imagePromptIds.subtitle} className="sr-only">
              {product.shortDescription}
            </span>
            <span id={product.imagePromptIds.category} className="sr-only">
              {product.category} {product.subcategory}
            </span>
            <img
              alt={product.imageAlt}
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id={`${product.id}-${product.detailImages[selectedImage].id}-main`}
              data-strk-img={`[${product.imagePromptIds.subtitle}] [${product.imagePromptIds.title}] [${product.imagePromptIds.category}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </section>

        <section className="lg:pt-6">
          <p className="text-xs uppercase tracking-[0.32em] text-brand-mist">{product.category}</p>
          <h1 className="mt-4 font-display text-5xl uppercase tracking-[0.18em] text-brand-ink md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center gap-4">
            <p className="text-2xl text-brand-ink">${product.price}</p>
            <div className="flex items-center gap-2 text-sm text-brand-mist">
              <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
              <span>
                {product.rating} · {product.reviews} reviews
              </span>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-8 text-brand-mist md:text-base">
            {product.description}
          </p>

          <div className="mt-10 space-y-8 rounded-[2rem] border border-brand-line bg-brand-surface p-6 shadow-soft md:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-brand-mist">Variant</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.22em] transition ${
                      selectedColor === color
                        ? 'border-brand-gold bg-brand-gold text-brand-noir'
                        : 'border-brand-line bg-brand-ivory text-brand-ink hover:bg-brand-champagne'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-brand-mist">Quantity</p>
                <div className="mt-3">
                  <QuantitySelector
                    value={quantity}
                    onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
                    onIncrease={() => setQuantity((current) => current + 1)}
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handleAddToCart}
                className="h-14 w-full rounded-full bg-brand-gold px-6 text-[11px] uppercase tracking-[0.28em] text-brand-noir transition hover:bg-brand-gold-soft sm:max-w-xs"
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-brand-line bg-brand-surface px-6 shadow-soft md:px-8">
            <AccordionItem title="Description" content={<p>{product.description}</p>} defaultOpen />
            <AccordionItem title="Materials & Care" content={<p>{product.materialsCare}</p>} />
            <AccordionItem title="Shipping & Returns" content={<p>{product.shippingReturns}</p>} />
          </div>
        </section>
      </div>

      <section className="mt-20 md:mt-24">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-brand-mist">Related Pieces</p>
            <h2 className="mt-4 font-display text-4xl text-brand-ink md:text-5xl">
              You may also like
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-[0.26em] text-brand-ink transition hover:text-brand-gold"
          >
            View Collection
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.id}
              product={relatedProduct}
              onAddToCart={handleRelatedAdd}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

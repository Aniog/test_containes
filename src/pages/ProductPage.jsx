import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { getProductBySlug, getRelatedProducts } from '../data/products'
import ProductGallery from '../components/products/ProductGallery'
import ProductCard from '../components/products/ProductCard'
import AccordionItem from '../components/ui/AccordionItem'
import QuantitySelector from '../components/ui/QuantitySelector'
import StarRating from '../components/ui/StarRating'

const ProductPage = ({ onAddToCart }) => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [activeImage, setActiveImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const containerRef = useRef(null)

  const relatedProducts = useMemo(
    () => (product ? getRelatedProducts(product.slug, product.category) : []),
    [product],
  )

  useEffect(() => {
    setActiveImage(0)
    setSelectedVariant(product?.variants?.[0] || 'Gold Tone')
    setQuantity(1)
  }, [product])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [activeImage, product])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <div ref={containerRef} className="bg-ivory text-noir">
      <section className="px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <Link to="/shop" className="text-xs uppercase tracking-brand text-taupe transition hover:text-noir">
            Back to shop
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <ProductGallery product={product} activeIndex={activeImage} onSelect={setActiveImage} />

            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs uppercase tracking-brand text-taupe">{product.collection}</p>
              <h1 className="mt-3 font-display text-4xl uppercase tracking-brand text-noir sm:text-5xl">
                {product.name}
              </h1>
              <div className="mt-4 flex items-center justify-between gap-4 border-b border-noir/10 pb-5">
                <StarRating rating={product.rating} reviews={product.reviewCount} />
                <p className="text-2xl text-noir">${product.price}</p>
              </div>
              <p className="mt-6 text-base leading-8 text-taupe">{product.description}</p>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-brand text-taupe">Tone</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`rounded-full border px-5 py-3 text-sm uppercase tracking-brand transition ${
                        selectedVariant === variant
                          ? 'border-gold bg-noir text-ivory'
                          : 'border-noir/10 bg-white text-noir hover:border-gold/50'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <QuantitySelector quantity={quantity} onChange={setQuantity} />
                <button
                  type="button"
                  onClick={() => onAddToCart(product, quantity, selectedVariant)}
                  className="h-14 flex-1 rounded-full bg-gold px-6 text-sm uppercase tracking-brand text-noir transition hover:-translate-y-0.5 hover:shadow-soft"
                >
                  Add to Cart
                </button>
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-noir/10 bg-mist px-6 py-4 text-sm leading-7 text-taupe">
                Premium demi-fine finish, hypoallergenic wear, and gifting-ready packaging in every order.
              </div>

              <div className="mt-8">
                <AccordionItem title="Description" defaultOpen>
                  {product.description}
                </AccordionItem>
                <AccordionItem title="Materials & Care">{product.materialsCare}</AccordionItem>
                <AccordionItem title="Shipping & Returns">{product.shippingReturns}</AccordionItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-noir/10 bg-mist px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Related pieces</p>
              <h2 className="font-display text-4xl text-noir">You may also like</h2>
            </div>
            <Link to="/shop" className="text-xs uppercase tracking-brand text-noir">
              View all
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage

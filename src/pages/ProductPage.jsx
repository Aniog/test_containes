import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import AccordionItem from '@/components/common/AccordionItem'
import ProductCard from '@/components/common/ProductCard?card=v3'
import StarRating from '@/components/common/StarRating'
import ProductGallery from '@/components/product/ProductGallery.jsx?gallery=v2'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/helpers'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const ProductPage = () => {
  const { productId } = useParams()
  const pageRef = useRef(null)
  const product = products.find((item) => item.id === productId) || products[0]
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4)
  const [selectedTone, setSelectedTone] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const galleryImages = [
    {
      id: product.imageId,
      alt: product.name,
      variant: 'Main editorial image',
    },
    {
      id: product.secondaryImageId,
      alt: `${product.name} detail`,
      variant: 'Detail close-up',
    },
    ...product.thumbIds.map((id, index) => ({
      id,
      alt: `${product.name} view ${index + 1}`,
      variant: `Alternate angle ${index + 1}`,
    })),
  ]

  const [activeImage, setActiveImage] = useState(galleryImages[0])

  useEffect(() => {
    setSelectedTone(product.colors[0])
    setQuantity(1)
    setActiveImage(galleryImages[0])
  }, [productId])

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [productId])

  return (
    <div ref={pageRef} className="bg-velmora-ivory px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <ProductGallery product={product} galleryImages={galleryImages} activeImage={activeImage} onSelectImage={setActiveImage} />

          <div className="rounded-[2rem] border border-velmora-line bg-velmora-pearl/70 p-6 text-velmora-ink shadow-velmora sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-mist">Velmora signature</p>
            <p id={`product-${product.id}-category`} className="sr-only">
              {product.category}
            </p>
            <p id={`product-${product.id}-material`} className="sr-only">
              {product.material}
            </p>
            <h1 id={`product-${product.id}-name`} className="mt-4 font-display text-5xl uppercase leading-none tracking-[0.22em] text-velmora-ink sm:text-6xl">
              {product.name}
            </h1>
            <p className="mt-5 text-2xl font-medium text-velmora-ink">{formatPrice(product.price)}</p>
            <div className="mt-4">
              <StarRating rating={product.rating} reviews={product.reviews} />
            </div>
            <p id={`product-${product.id}-description`} className="mt-6 max-w-xl text-sm leading-8 text-velmora-mist sm:text-base">
              {product.description}
            </p>
            <div className="sr-only">
              {galleryImages.map((image) => (
                <span key={image.id} id={`product-${product.id}-${image.id}-variant`}>
                  {image.variant}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-velmora-mist">Tone</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.colors.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.24em] transition ${
                      selectedTone === tone
                        ? 'border-velmora-bronze bg-velmora-ink text-velmora-ivory'
                        : 'border-velmora-line bg-white text-velmora-ink hover:border-velmora-bronze'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="inline-flex items-center rounded-full border border-velmora-line bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="inline-flex h-12 w-12 items-center justify-center text-velmora-ink"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center text-sm text-velmora-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="inline-flex h-12 w-12 items-center justify-center text-velmora-ink"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => addItem(product, selectedTone, quantity)}
                className="h-12 flex-1 rounded-full bg-velmora-bronze px-6 text-xs font-medium uppercase tracking-[0.28em] text-velmora-ivory shadow-velmora transition hover:bg-velmora-ink"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-10 border-t border-velmora-line">
              <AccordionItem title="Description" content={product.details} defaultOpen />
              <AccordionItem title="Materials & Care" content={`${product.material}. ${product.care}`} />
              <AccordionItem title="Shipping & Returns" content={product.shipping} />
            </div>
          </div>
        </div>

        <section className="mt-16 lg:mt-24">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-velmora-mist">Related pieces</p>
              <h2 className="mt-3 font-display text-4xl text-velmora-ink">You may also like</h2>
            </div>
            <Link to="/shop" className="text-xs uppercase tracking-[0.28em] text-velmora-mist transition hover:text-velmora-bronze">
              Back to shop
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductPage

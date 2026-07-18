import { Minus, Plus } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link, useParams } from 'react-router-dom'
import Accordion from '@/components/store/Accordion.jsx'
import ProductCard from '@/components/store/ProductCard.jsx'
import RatingStars from '@/components/store/RatingStars.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { products } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

const ProductDetail = () => {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState('hero')
  const [selectedVariant, setSelectedVariant] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')

  useEffect(() => {
    let dispose

    const frameId = window.requestAnimationFrame(() => {
      if (!containerRef.current) {
        return
      }

      dispose = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)

      if (typeof dispose === 'function') {
        dispose()
      }
    }
  }, [selectedImage, product.id])

  const relatedProducts = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 4), [product.id])

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.material}. ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  const imageVariants = [
    { key: 'hero', imgId: product.heroImageId, title: `${product.id}-detail-hero-title`, desc: `${product.id}-detail-hero-desc` },
    { key: 'alt', imgId: product.altImageId, title: `${product.id}-detail-alt-title`, desc: `${product.id}-detail-alt-desc` },
  ]

  const activeImage = imageVariants.find((item) => item.key === selectedImage) || imageVariants[0]

  return (
    <div className="bg-ivory pb-20 pt-28 md:pt-32">
      <div ref={containerRef} className="content-wrap">
        <div className="mb-6 text-sm text-ink/60">
          <Link to="/" className="hover:text-velvet">Home</Link> / <Link to="/shop" className="hover:text-velvet">Shop</Link> / <span className="text-velvet">{product.baseName}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="grid gap-4 md:grid-cols-[6rem_1fr]">
            <div className="order-2 flex gap-3 md:order-1 md:flex-col">
              {imageVariants.map((image) => (
                <button
                  key={image.key}
                  type="button"
                  onClick={() => setSelectedImage(image.key)}
                  className={`overflow-hidden rounded-3xl border ${selectedImage === image.key ? 'border-champagne' : 'border-ink/10'}`}
                >
                  <img
                    alt={`${product.baseName} thumbnail ${image.key}`}
                    className="h-24 w-20 object-cover"
                    data-strk-img-id={`${image.imgId}-thumb`}
                    data-strk-img={`[${image.desc}] [${image.title}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              ))}
            </div>

            <div className="order-1 overflow-hidden rounded-luxe border border-ink/10 bg-sand shadow-velvet md:order-2">
              <img
                alt={product.baseName}
                className="aspect-[4/5] w-full object-cover"
                data-strk-img-id={`${activeImage.imgId}-full`}
                data-strk-img={`[${activeImage.desc}] [${activeImage.title}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <p id={`${product.id}-detail-hero-title`} className="sr-only">{product.baseName} main product view</p>
              <p id={`${product.id}-detail-hero-desc`} className="sr-only">Warm close-up of gold jewelry on a model with soft editorial lighting</p>
              <p id={`${product.id}-detail-alt-title`} className="sr-only">{product.baseName} alternate styling view</p>
              <p id={`${product.id}-detail-alt-desc`} className="sr-only">Alternate angle highlighting texture and finish against a neutral background</p>
            </div>
          </section>

          <section className="space-y-8">
            <div className="space-y-4">
              <p className="editorial-kicker">{product.category}</p>
              <h1 className="product-title text-3xl sm:text-4xl">{product.name}</h1>
              <div className="flex items-center justify-between gap-4">
                <p className="text-3xl font-medium text-velvet">${product.price}</p>
                <RatingStars rating={product.rating} reviews={product.reviews} />
              </div>
              <p className="max-w-xl text-sm leading-8 text-ink/75 md:text-base">{product.shortDescription}</p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="mb-3 text-xs uppercase tracking-luxe text-champagne">Finish</p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((variant) => (
                    <button
                      key={variant}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`rounded-full border px-5 py-3 text-sm transition-colors ${selectedVariant === variant ? 'border-champagne bg-champagne/10 text-velvet' : 'border-ink/10 bg-mist text-ink/70 hover:border-champagne'}`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs uppercase tracking-luxe text-champagne">Quantity</p>
                <div className="inline-flex items-center rounded-full border border-ink/10 bg-mist">
                  <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-3 text-ink/70">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-12 text-center text-sm text-velvet">{quantity}</span>
                  <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-3 text-ink/70">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="button-primary w-full min-h-14 text-base"
            >
              Add to Cart
            </button>

            <Accordion items={accordionItems} openItem={openAccordion} setOpenItem={setOpenAccordion} />
          </section>
        </div>

        <section className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="editorial-kicker">You may also like</p>
              <h2 className="mt-3 text-4xl leading-none text-velvet">Related pieces</h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetail

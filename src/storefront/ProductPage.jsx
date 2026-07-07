import { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import { useCart } from './cart.jsx'
import { products, variants } from './products.js'
import { useImageLoader } from './use-image-loader.js'
import { AccordionItem, ProductCard, StarRating } from './ui.jsx'

export default function ProductPage() {
  const { slug } = useParams()
  const product = products.find((entry) => entry.slug === slug)
  const relatedProducts = products.filter((entry) => entry.slug !== slug).slice(0, 4)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const containerRef = useRef(null)
  const { addToCart } = useCart()

  useImageLoader(containerRef, [selectedImage, selectedVariant])

  if (!product) {
    return (
      <div className="section-shell py-40 text-center">
        <p className="eyebrow">Not found</p>
        <h1 className="mt-4 font-display text-5xl text-velmora-espresso">This piece is no longer available.</h1>
        <Link to="/shop" className="mt-8 inline-flex rounded-full bg-velmora-bronze px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-pearl">
          Back to Shop
        </Link>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="bg-velmora-ivory text-velmora-espresso">
      <section className="section-shell pt-32 sm:pt-36 lg:pt-40">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-5">
            <div className="overflow-hidden rounded-[2.5rem] border border-velmora-sand bg-velmora-mist shadow-velmora">
              <div className="aspect-[4/5]">
                <img
                  alt={product.gallery[selectedImage].title}
                  className="h-full w-full object-cover"
                  data-strk-img-id={product.gallery[selectedImage].imgId}
                  data-strk-img={`[${product.gallery[selectedImage].descId}] [${product.gallery[selectedImage].titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.gallery.map((item, index) => (
                <button key={item.id} type="button" onClick={() => setSelectedImage(index)} className={`overflow-hidden rounded-[1.5rem] border bg-velmora-pearl transition ${selectedImage === index ? 'border-velmora-bronze shadow-velmora-soft' : 'border-velmora-sand'}`}>
                  <div className="aspect-[4/5]">
                    <img
                      alt={item.title}
                      className="h-full w-full object-cover"
                      data-strk-img-id={`${item.imgId}-thumb`}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </button>
              ))}
            </div>
            <div className="sr-only">
              {product.gallery.map((item) => (
                <div key={item.id}>
                  <p id={item.titleId}>{item.title}</p>
                  <p id={item.descId}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <div className="rounded-[2.5rem] border border-velmora-sand bg-velmora-pearl p-7 shadow-velmora sm:p-9">
              <p className="eyebrow">{product.category}</p>
              <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.22em] text-velmora-espresso sm:text-5xl">{product.name}</h1>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <p className="text-2xl font-semibold text-velmora-espresso">${product.price}</p>
                <StarRating rating={product.rating} reviewCount={product.reviewCount} />
              </div>
              <p className="mt-6 text-base leading-8 text-velmora-umber">{product.description}</p>

              <div className="mt-8 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-velmora-espresso">Variant</p>
                <div className="flex flex-wrap gap-3">
                  {variants.map((variant) => (
                    <button key={variant} type="button" onClick={() => setSelectedVariant(variant)} className={`rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition ${selectedVariant === variant ? 'border-velmora-bronze bg-velmora-bronze text-velmora-pearl' : 'border-velmora-sand text-velmora-espresso hover:border-velmora-bronze hover:text-velmora-bronze'}`}>
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="inline-flex items-center rounded-full border border-velmora-sand bg-velmora-ivory p-1 text-velmora-espresso">
                  <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="rounded-full p-3 transition hover:bg-velmora-pearl" aria-label="Decrease quantity">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-10 text-center text-sm font-semibold">{quantity}</span>
                  <button type="button" onClick={() => setQuantity((current) => current + 1)} className="rounded-full p-3 transition hover:bg-velmora-pearl" aria-label="Increase quantity">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button type="button" onClick={() => addToCart(product, quantity, selectedVariant)} className="flex-1 rounded-full bg-velmora-bronze px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-pearl transition hover:bg-velmora-espresso">
                  Add to Cart
                </button>
              </div>

              <div className="mt-10 border-t border-velmora-sand">
                <AccordionItem title="Description" defaultOpen>
                  <p>{product.details}</p>
                </AccordionItem>
                <AccordionItem title="Materials & Care">
                  <p>{product.care}</p>
                </AccordionItem>
                <AccordionItem title="Shipping & Returns">
                  <p>{product.shipping}</p>
                </AccordionItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20 sm:py-24 lg:py-28">
        <div>
          <p className="eyebrow">Related pieces</p>
          <h2 className="mt-3 font-display text-4xl text-velmora-espresso sm:text-5xl">You may also like</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </section>
    </div>
  )
}

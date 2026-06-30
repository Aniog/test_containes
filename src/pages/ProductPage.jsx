import { Minus, Plus, Star } from 'lucide-react'
import { useState } from 'react'
import ProductCard from '@/components/commerce/ProductCard'
import { formatPrice, products } from '@/data/products'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'/%3E'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-taupe/30">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-luxury text-velmora-espresso"
      >
        {title}
        <span className="text-lg text-velmora-burnished">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="pb-5 text-sm leading-7 text-velmora-espresso/72">{children}</div>}
    </div>
  )
}

export default function ProductPage({ product, onAddToCart, onViewProduct, onNavigate }) {
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('primary')
  const galleryImageId = activeImage === 'primary' ? product.imageId : product.hoverImageId
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4)

  const addToCart = () => {
    onAddToCart(product, quantity, variant)
  }

  return (
    <main className="bg-velmora-ivory pt-24 text-velmora-espresso md:pt-28">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:grid-cols-[1.08fr_0.92fr] md:px-10 md:py-16">
        <div className="grid gap-4 md:grid-cols-[86px_1fr]">
          <div className="order-2 flex gap-3 md:order-1 md:flex-col">
            {[
              { key: 'primary', label: 'Primary', imageId: product.imageId },
              { key: 'detail', label: 'Detail', imageId: product.hoverImageId },
            ].map((image) => (
              <button
                key={image.key}
                type="button"
                onClick={() => setActiveImage(image.key)}
                className={`overflow-hidden border bg-velmora-pearl transition ${activeImage === image.key ? 'border-velmora-gold' : 'border-velmora-taupe/30'}`}
                aria-label={`Show ${image.label} image`}
              >
                <img
                  alt={`${product.name} ${image.label}`}
                  className="aspect-square w-20 object-cover md:w-full"
                  data-strk-img-id={`detail-thumb-${image.key}-${image.imageId}`}
                  data-strk-img={`[detail-title-${product.id}] [detail-desc-${product.id}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="250"
                  src={placeholder}
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden bg-velmora-pearl shadow-editorial md:order-2">
            <img
              alt={product.name}
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id={`detail-main-${activeImage}-${galleryImageId}`}
              data-strk-img={`[detail-desc-${product.id}] [detail-title-${product.id}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src={placeholder}
            />
          </div>
        </div>

        <div className="md:pl-6">
          <button
            type="button"
            onClick={() => onNavigate('shop')}
            className="mb-5 text-xs font-bold uppercase tracking-luxury text-velmora-burnished transition hover:text-velmora-espresso"
          >
            Shop / {product.category}
          </button>
          <h1 id={`detail-title-${product.id}`} className="font-serif text-4xl uppercase leading-tight tracking-luxury text-velmora-espresso md:text-5xl">
            {product.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <p className="text-2xl font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-espresso/70">
              <span className="flex text-velmora-gold" aria-label={`${product.rating} star rating`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </span>
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </div>
          </div>
          <p id={`detail-desc-${product.id}`} className="mt-6 max-w-xl text-base leading-8 text-velmora-espresso/76">
            {product.description}
          </p>

          <div className="mt-8 border-y border-velmora-taupe/30 py-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-burnished">Tone</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setVariant(tone)}
                  className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-luxury transition ${
                    variant === tone
                      ? 'border-velmora-gold bg-velmora-gold text-velmora-espresso'
                      : 'border-velmora-taupe/50 text-velmora-espresso hover:border-velmora-gold'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4">
              <p className="text-xs font-bold uppercase tracking-luxury text-velmora-burnished">Quantity</p>
              <div className="inline-flex items-center border border-velmora-taupe/40 bg-velmora-pearl">
                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center font-semibold">{quantity}</span>
                <button type="button" onClick={() => setQuantity(quantity + 1)} className="p-3" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={addToCart}
            className="mt-6 w-full bg-velmora-espresso px-8 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-pearl transition duration-300 hover:bg-velmora-gold hover:text-velmora-espresso"
          >
            Add to Cart
          </button>
          <p className="mt-3 text-center text-xs uppercase tracking-[0.16em] text-velmora-espresso/58">
            Free worldwide shipping · Gift-ready packaging
          </p>

          <div className="mt-8">
            <Accordion title="Description" defaultOpen>
              {product.details}
            </Accordion>
            <Accordion title="Materials & Care">
              {product.care}
            </Accordion>
            <Accordion title="Shipping & Returns">
              Free worldwide shipping on every Velmora order. If your piece is not quite right, return it within 30 days in unworn condition.
            </Accordion>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-taupe/30 px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-luxury text-velmora-burnished">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-4xl">You may also like</h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onAddToCart={onAddToCart}
                onViewProduct={onViewProduct}
                compact
                imageContext={`related-${product.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

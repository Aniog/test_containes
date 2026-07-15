import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { getProductBySlug, products } from '@/data/store.js'
import { ProductCard } from '@/components/products/ProductCard.jsx'
import { JewelryArtwork } from '@/components/products/JewelryArtwork.jsx'
import { PrimaryButton, SectionHeading } from '@/components/layout/Shell.jsx'
import { useCart } from '@/context/CartContext.jsx'

const AccordionItem = ({ title, content, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="rounded-[1.5rem] border border-line/80 bg-card px-5 py-4 shadow-card">
      <button type="button" onClick={() => setOpen((current) => !current)} className="flex w-full items-center justify-between gap-4 text-left">
        <span className="text-xs uppercase tracking-[0.3em] text-ink/70">{title}</span>
        <ChevronDown className={['h-4 w-4 text-ink/60 transition duration-300', open ? 'rotate-180' : 'rotate-0'].join(' ')} />
      </button>
      {open ? <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/72">{content}</p> : null}
    </div>
  )
}

export default function Product() {
  const { slug } = useParams()
  const { addToCart } = useCart()
  const product = getProductBySlug(slug)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    setSelectedVariant(product?.variants[0] ?? 'Gold Tone')
    setQuantity(1)
    setActiveImage(0)
  }, [product])

  if (!product) {
    return (
      <div className="px-5 pb-16 pt-32 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-line/80 bg-card p-12 text-center shadow-card">
          <h1 className="font-display text-4xl text-ink">Product not found</h1>
          <p className="mt-4 text-ink/70">The piece you are looking for is no longer in this collection.</p>
          <PrimaryButton as={Link} to="/shop" className="mt-8">Return to Shop</PrimaryButton>
        </div>
      </div>
    )
  }

  const activeAsset = product.images[activeImage]
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <div className="px-5 pb-16 pt-28 md:px-8 md:pt-32 lg:px-12 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border border-line/80 bg-card shadow-card">
              <div className="aspect-[4/5]">
                <JewelryArtwork productId={product.id} image={activeAsset} className="h-full w-full" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={[
                    'overflow-hidden rounded-[1.25rem] border bg-card shadow-card transition duration-300',
                    activeImage === index ? 'border-champagne' : 'border-line/80 hover:border-ink/20',
                  ].join(' ')}
                >
                  <div className="aspect-[4/5]">
                    <JewelryArtwork productId={product.id} image={image} className="h-full w-full" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-xs uppercase tracking-[0.34em] text-ink/58">{product.category}</p>
            <h1 className="mt-4 font-display text-4xl uppercase tracking-[0.22em] text-ink md:text-5xl">{product.name}</h1>
            <div className="mt-5 flex items-center gap-4">
              <p className="text-lg tracking-[0.18em] text-ink">${product.price}</p>
              <div className="flex items-center gap-2 text-sm text-ink/66">
                <div className="flex items-center gap-1 text-champagne-deep">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={`${product.id}-rating-${index}`} className="h-4 w-4 fill-current" />)}
                </div>
                <span>{product.rating} · {product.reviews} reviews</span>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink/72">{product.longDescription}</p>

            <div className="mt-8 border-t border-line/80 pt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-ink/58">Tone</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={[
                      'rounded-full border px-5 py-3 text-xs uppercase tracking-[0.25em] transition duration-300',
                      selectedVariant === variant ? 'border-champagne bg-champagne text-ink' : 'border-line bg-porcelain text-ink/72 hover:border-ink/20 hover:text-ink',
                    ].join(' ')}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-[160px_1fr]">
              <div className="flex items-center justify-between rounded-full border border-line bg-card px-4 py-3">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((current) => Math.max(1, current - 1))}><Minus className="h-4 w-4 text-ink" /></button>
                <span className="text-sm uppercase tracking-[0.28em] text-ink">{quantity}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((current) => current + 1)}><Plus className="h-4 w-4 text-ink" /></button>
              </div>
              <PrimaryButton className="w-full" onClick={() => addToCart(product, selectedVariant, quantity)}>Add to Cart</PrimaryButton>
            </div>

            <div className="mt-8 space-y-4 border-t border-line/80 pt-8">
              <AccordionItem title="Description" content={product.description} defaultOpen />
              <AccordionItem title="Materials & Care" content={`${product.material}. ${product.care}`} />
              <AccordionItem title="Shipping & Returns" content={product.shipping} />
            </div>
          </div>
        </div>

        <section className="mt-20 md:mt-24">
          <SectionHeading
            eyebrow="You may also like"
            title="More pieces in the Velmora mood"
            description="Continue the stack with complementary silhouettes and gifting-ready options."
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} onQuickAdd={(nextItem) => addToCart(nextItem, 'Gold Tone', 1)} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

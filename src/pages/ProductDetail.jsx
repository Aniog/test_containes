import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Truck, RotateCcw } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import ProductCard, { StarRating } from '@/components/product/ProductCard.jsx'
import { ImageRoot } from '@/components/Img.jsx'
import { resolveStrkImg } from '@/lib/strkImg.js'
import { useCart } from '@/context/CartContext.jsx'
import { fetchProductBySlug, fetchProducts } from '@/api/products.js'
import { formatPrice, cn } from '@/lib/utils'
import { CATEGORY_LABELS } from '@/data/products.js'
import { PRODUCT_IMAGE_MAP } from '@/data/productImages.js'

export default function ProductDetail() {
  const { slug } = useParams()
  const { addItem } = useCart()
  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState(0)
  const [variant, setVariant] = useState('gold')
  const [qty, setQty] = useState(1)

  useEffect(() => {
    setLoading(true)
    setActiveImage(0)
    setQty(1)
    window.scrollTo(0, 0)
    Promise.all([fetchProductBySlug(slug), fetchProducts()]).then(([p, all]) => {
      setProduct(p)
      setVariant(p?.variants?.[0] ?? 'gold')
      setRelated(all.filter((x) => x.slug !== slug).slice(0, 4))
      setLoading(false)
    })
  }, [slug])

  const gallery = useMemo(() => {
    if (!product) return []
    const img = PRODUCT_IMAGE_MAP[product.slug]
    const ids = img
      ? [img.mainId, img.wornId, img.detailId, img.styledId]
      : [`product-${product.slug}-main`]
    const alts = [product.name, `${product.name} worn`, `${product.name} detail`, `${product.name} styled`]
    return ids.map((imgId, i) => ({
      imgId,
      alt: alts[i] ?? product.name,
      thumb: resolveStrkImg(imgId, 200),
      full: resolveStrkImg(imgId, 1000),
    }))
  }, [product])

  const handleAdd = () => {
    addItem(product, variant, qty)
    toast.success(`${product.name} added to your bag`)
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream pt-20">
        <p className="font-serif text-xl italic text-stone">Loading…</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-cream pt-20">
        <p className="font-serif text-2xl text-ink">This piece has sold out</p>
        <Button asChild variant="outline">
          <Link to="/shop">Back to the collection</Link>
        </Button>
      </div>
    )
  }

  return (
    <ImageRoot deps={[slug, product?.id]} className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 md:px-8 md:pt-32">
        {/* Breadcrumb */}
        <nav className="text-[11px] uppercase tracking-[0.2em] text-stone">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-4 md:flex-row">
            <div className="flex gap-3 md:flex-col">
              {gallery.map((img, i) => (
                <button
                  key={img.imgId}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    'h-16 w-16 shrink-0 overflow-hidden border transition-all md:h-20 md:w-20',
                    activeImage === i ? 'border-gold' : 'border-line opacity-60 hover:opacity-100'
                  )}
                >
                  <img
                    src={img.thumb}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 overflow-hidden bg-sand">
              <img
                src={gallery[activeImage].full}
                alt={gallery[activeImage].alt}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-bronze">
              {CATEGORY_LABELS[product.category] ?? product.category}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold uppercase leading-tight tracking-[0.1em] text-ink md:text-5xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} />
              <span className="text-sm text-stone">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 font-serif text-3xl font-medium text-ink">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 leading-relaxed text-stone">{product.description}</p>

            {/* Variant selector */}
            {product.variants?.length > 0 && (
              <div className="mt-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-ink">
                  Tone — <span className="text-stone">{variant}</span>
                </p>
                <div className="mt-3 flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={cn(
                        'border px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-all',
                        variant === v
                          ? 'border-gold bg-gold/10 text-ink'
                          : 'border-line text-stone hover:border-bronze hover:text-ink'
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add */}
            <div className="mt-8 flex gap-3">
              <div className="flex items-center border border-line">
                <button
                  className="px-4 py-3 text-ink hover:bg-sand"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium text-ink">{qty}</span>
                <button
                  className="px-4 py-3 text-ink hover:bg-sand"
                  onClick={() => setQty((q) => Math.min(99, q + 1))}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button className="h-auto flex-1" size="lg" onClick={handleAdd}>
                Add to Cart — {formatPrice(product.price * qty)}
              </Button>
            </div>

            <div className="mt-6 space-y-2.5 border-t border-line pt-6">
              <p className="flex items-center gap-2.5 text-sm text-stone">
                <Truck className="h-4 w-4 text-bronze" /> Free worldwide shipping over $50
              </p>
              <p className="flex items-center gap-2.5 text-sm text-stone">
                <RotateCcw className="h-4 w-4 text-bronze" /> 30-day returns, no questions asked
              </p>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="mt-8 border-t border-line">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                  {product.description} Every Velmora piece arrives in our
                  signature gift box with a care card and polishing cloth.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger>Materials &amp; Care</AccordionTrigger>
                <AccordionContent>{product.materials}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping &amp; Returns</AccordionTrigger>
                <AccordionContent>
                  Orders ship within 1–2 business days. Free worldwide shipping
                  on orders over $50 (otherwise $6.95). Not in love? Return
                  within 30 days for a full refund — no questions asked.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related */}
        <section className="mt-24 border-t border-line pt-16 md:mt-32">
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-bronze">
              Complete the Look
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium text-ink">
              You May Also Like
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </section>
      </div>
    </ImageRoot>
  )
}

import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, ChevronRight, Star, Truck, ShieldCheck, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { ProductCard } from '@/components/ProductCard'
import { StarRating } from '@/components/StarRating'
import { useCart } from '@/hooks/useCart'
import { products } from '@/data/products'
import { productTitleId, productDescId, PLACEHOLDER_SVG } from '@/lib/images'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export const ProductDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = useMemo(() => products.find((p) => p.id === slug), [slug])
  const [tone, setTone] = useState(product?.tone?.[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const { addItem } = useCart()
  const pageRef = useRef(null)

  useEffect(() => {
    if (!product) return
    setTone(product.tone?.[0] || 'gold')
    setQuantity(1)
    setActiveImage(0)
  }, [product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl mb-4">Product Not Found</h1>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    addItem(product, { tone, quantity })
  }

  return (
    <main ref={pageRef} className="pt-20 md:pt-24 pb-16 md:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6 uppercase tracking-brand">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-foreground">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-4">
            <div className="relative aspect-[4/5] bg-muted rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`product-detail-${product.id}-${activeImage}`}
                data-strk-img={`[${productDescId(product)}] [${productTitleId(product)}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src={PLACEHOLDER_SVG}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground hover:bg-primary uppercase text-[10px] tracking-brand">
                  {product.badge}
                </Badge>
              )}
            </div>
            <div className="grid grid-cols-5 gap-3">
              {[...Array(product.images)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-square bg-muted rounded-sm overflow-hidden border ${
                    activeImage === i ? 'border-foreground' : 'border-border'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-thumb-${product.id}-${i}`}
                    data-strk-img={`[${productTitleId(product)}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src={PLACEHOLDER_SVG}
                    alt={`${product.name} view ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="md:py-6 lg:py-10">
            <p className="text-xs uppercase tracking-brand text-muted-foreground mb-2">
              {product.category}
            </p>
            <h1
              id={productTitleId(product)}
              className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-brand"
            >
              {product.name}
            </h1>
            <p id={productDescId(product)} className="sr-only">{product.description}</p>
            <div className="flex items-center gap-3 mt-4 mb-6">
              <StarRating rating={product.rating} size={16} />
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-heading text-3xl mb-6">${product.price}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {product.tone.length > 1 && (
              <div className="mb-6">
                <p className="text-xs uppercase tracking-brand text-muted-foreground mb-3">Tone</p>
                <div className="flex gap-3">
                  {product.tone.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTone(t)}
                      className={`px-5 py-2 text-xs uppercase tracking-brand border rounded-sm transition-colors ${
                        tone === t
                          ? 'border-foreground bg-foreground text-background'
                          : 'border-border hover:border-foreground'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <p className="text-xs uppercase tracking-brand text-muted-foreground mb-3">Quantity</p>
              <div className="flex items-center border border-border rounded-sm w-fit">
                <button
                  className="px-4 py-2.5 hover:bg-muted"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-5 text-sm min-w-[3rem] text-center">{quantity}</span>
                <button
                  className="px-4 py-2.5 hover:bg-muted"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <Button
              onClick={handleAdd}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-brand text-xs py-6 rounded-sm"
            >
              Add to Cart — ${product.price * quantity}
            </Button>

            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <Truck size={18} className="text-primary" />
                <span className="text-[10px] uppercase tracking-brand text-muted-foreground">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RotateCcw size={18} className="text-primary" />
                <span className="text-[10px] uppercase tracking-brand text-muted-foreground">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck size={18} className="text-primary" />
                <span className="text-[10px] uppercase tracking-brand text-muted-foreground">Hypoallergenic</span>
              </div>
            </div>

            <Separator className="my-8" />

            <Accordion type="single" collapsible defaultValue="description" className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger className="text-xs uppercase tracking-brand hover:no-underline">
                  Description
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {product.description}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger className="text-xs uppercase tracking-brand hover:no-underline">
                  Materials & Care
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {product.materialsCare.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-xs uppercase tracking-brand hover:no-underline">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Free worldwide shipping on all orders over $50. Orders ship within 1–2 business days.
                  Returns accepted within 30 days of delivery in original condition.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <Separator className="my-16 md:my-24" />

        <section>
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

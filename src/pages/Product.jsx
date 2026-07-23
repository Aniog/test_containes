import { useState, useMemo, useEffect, useRef } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Minus, Plus, Star, Check } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { products } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { ProductCard } from "@/components/layout/ProductCard"
import { StarRating } from "@/components/layout/StarRating"
import { toast } from "sonner"

export default function Product() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()

  const product = useMemo(
    () => products.find((p) => p.slug === slug),
    [slug]
  )

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState("gold")
  const [added, setAdded] = useState(false)

  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [slug, selectedImage])

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-32 text-center lg:px-8">
        <h1 className="font-serif text-3xl uppercase tracking-[0.15em] text-velmora-charcoal">
          Product Not Found
        </h1>
        <p className="mt-4 text-velmora-warm-gray">
          The piece you're looking for no longer exists.
        </p>
        <Button asChild className="mt-8">
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    )
  }

  const titleId = product.titleId
  const descId = product.descId
  const images = [
    { imgId: `pdp-main-${product.id}-0`, width: 900 },
    { imgId: `pdp-main-${product.id}-1`, width: 900 },
    { imgId: `pdp-main-${product.id}-2`, width: 900 },
    { imgId: `pdp-main-${product.id}-3`, width: 900 },
  ]

  const related = useMemo(
    () => products.filter((p) => p.id !== product.id).slice(0, 4),
    [product]
  )

  const handleAdd = () => {
    addItem(product, quantity, variant)
    setAdded(true)
    toast.success(`${product.name} added to cart`)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div ref={containerRef} className="bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden bg-velmora-ivory">
              <div
                data-strk-bg-id={images[selectedImage].imgId}
                data-strk-bg={`[${descId}] [${titleId}]`}
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="900"
                role="img"
                aria-label={product.name}
                className="absolute inset-0 bg-cover bg-center"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square overflow-hidden bg-velmora-ivory ${
                    selectedImage === idx
                      ? "ring-2 ring-velmora-gold"
                      : "ring-1 ring-velmora-border"
                  }`}
                >
                  <div
                    data-strk-bg-id={image.imgId}
                    data-strk-bg={`[${descId}] [${titleId}]`}
                    data-strk-bg-ratio="1x1"
                    data-strk-bg-width="300"
                    role="img"
                    aria-label={`${product.name} view ${idx + 1}`}
                    className="absolute inset-0 bg-cover bg-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col lg:pt-10">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-gold">
              {product.category}
            </p>
            <h1
              id={titleId}
              className="mt-3 font-serif text-3xl uppercase tracking-[0.15em] text-velmora-charcoal md:text-4xl"
            >
              {product.name}
            </h1>
            <p id={descId} className="sr-only">
              {product.description}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} size={16} />
              <span className="text-sm text-velmora-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-6 font-serif text-3xl text-velmora-charcoal">
              ${product.price}
            </p>

            <p className="mt-6 font-sans leading-relaxed text-velmora-warm-gray">
              {product.description}
            </p>

            <div className="mt-8">
              <span className="font-sans text-xs uppercase tracking-[0.15em] text-velmora-charcoal">
                Metal Tone
              </span>
              <div className="mt-3 flex gap-3">
                {["gold", "silver"].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setVariant(tone)}
                    className={`h-11 rounded-full border px-6 font-sans text-xs uppercase tracking-[0.15em] transition-all ${
                      variant === tone
                        ? "border-velmora-charcoal bg-velmora-charcoal text-velmora-cream"
                        : "border-velmora-border bg-transparent text-velmora-charcoal hover:border-velmora-charcoal"
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="font-sans text-xs uppercase tracking-[0.15em] text-velmora-charcoal">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-velmora-border bg-velmora-ivory">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-velmora-charcoal hover:bg-velmora-cream"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-sm text-velmora-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-velmora-charcoal hover:bg-velmora-cream"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button
              onClick={handleAdd}
              className="mt-8 h-12 w-full"
              disabled={added}
            >
              {added ? (
                <>
                  <Check className="h-4 w-4" /> Added to Cart
                </>
              ) : (
                "Add to Cart"
              )}
            </Button>

            <div className="mt-6 flex items-center gap-2 text-sm text-velmora-warm-gray">
              <Check className="h-4 w-4 text-velmora-gold" />
              Free shipping on orders over $50
            </div>

            <Accordion type="single" collapsible className="mt-10">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>{product.description}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger>Materials & Care</AccordionTrigger>
                <AccordionContent>{product.materialsCare}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>{product.shippingReturns}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <section className="border-t border-velmora-border bg-velmora-cream py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-10 text-center font-serif text-2xl uppercase tracking-[0.12em] text-velmora-charcoal">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 lg:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

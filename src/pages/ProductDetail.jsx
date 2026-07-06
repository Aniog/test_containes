import { useEffect, useRef, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Minus, Plus, ChevronLeft } from "lucide-react"
import { getProductById, getRelatedProducts, products } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { ImageTag } from "@/components/ImageTag"
import { Price } from "@/components/Price"
import { ProductName } from "@/components/ProductName"
import { Stars } from "@/components/Stars"
import { ProductCard } from "@/components/product/ProductCard"
import { useCart } from "@/context/CartContext"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [variant, setVariant] = useState(product?.variants?.[0] || "gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!product) {
      navigate("/shop", { replace: true })
    }
  }, [product, navigate])

  useEffect(() => {
    setVariant(product?.variants?.[0] || "gold")
    setQuantity(1)
    setActiveImage(0)
  }, [product?.id])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [product?.id, activeImage])

  if (!product) return null

  const related = getRelatedProducts(product.id)

  const handleAdd = () => {
    addItem(product, variant, quantity)
  }

  return (
    <div ref={containerRef} className="bg-cream pt-16">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:px-8">
        <Link
          to="/shop"
          className="mb-6 inline-flex items-center gap-1 font-sans text-xs font-medium uppercase tracking-extra-wide text-taupe hover:text-espresso md:mb-8"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-linen">
              <ImageTag
                id={`pd-${product.id}-main`}
                query={`[pd-${product.id}-name]`}
                ratio="4x5"
                width={900}
                alt={product.name}
                aspectClass="absolute inset-0 h-full w-full"
              />
              {product.badge && (
                <Badge className="absolute left-4 top-4">{product.badge}</Badge>
              )}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-square overflow-hidden bg-linen ring-1 transition-all ${
                    activeImage === i ? "ring-espresso" : "ring-transparent hover:ring-sand"
                  }`}
                >
                  <ImageTag
                    id={`pd-${product.id}-thumb-${i}`}
                    query={`[pd-${product.id}-name]`}
                    ratio="1x1"
                    width={200}
                    alt={`${product.name} view ${i + 1}`}
                    aspectClass="absolute inset-0 h-full w-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-start lg:py-8">
            <p className="font-sans text-xs font-medium uppercase tracking-extra-wide text-gold">
              {product.category}
            </p>
            <ProductName
              id={`pd-${product.id}-name`}
              as="h1"
              className="mt-3 text-2xl md:text-3xl"
            >
              {product.name}
            </ProductName>

            <div className="mt-4 flex items-center gap-3">
              <Stars rating={product.rating} />
              <span className="text-sm text-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <Price amount={product.price} className="mt-5 text-2xl font-normal" />

            <p className="mt-6 font-sans leading-relaxed text-taupe">
              {product.description}
            </p>

            {product.variants.length > 1 && (
              <div className="mt-7">
                <span className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-espresso">
                  Tone
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={`px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-extra-wide transition-all ${
                        variant === v
                          ? "bg-espresso text-white"
                          : "border border-sand text-espresso hover:border-espresso"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-7">
              <span className="font-sans text-xs font-semibold uppercase tracking-extra-wide text-espresso">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-sand bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-taupe hover:text-espresso"
                  aria-label="Decrease"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-taupe hover:text-espresso"
                  aria-label="Increase"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button onClick={handleAdd} className="mt-8 h-12 w-full">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </Button>

            <Separator className="my-10" />

            <Accordion type="single" defaultOpen="description">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>{product.description}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger>Materials & Care</AccordionTrigger>
                <AccordionContent>
                  <p className="font-medium text-espresso">{product.materials}</p>
                  <p className="mt-2">{product.care}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>{product.shipping}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="mb-8 text-center font-serif text-2xl font-normal text-espresso md:text-3xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

import React, { useState, useRef, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { products } from "@/data/products"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { StarRating } from "@/components/product/star-rating"
import { ProductCard } from "@/components/product/product-card"
import { Minus, Plus, ChevronLeft, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const ProductDetailPage = () => {
  const { productId } = useParams()
  const product = products.find((p) => p.id === productId)
  const { addToCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState("gold")
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const galleryRef = useRef(null)

  useEffect(() => {
    if (galleryRef.current) {
      return ImageHelper.loadImages(strkImgConfig, galleryRef.current)
    }
  }, [productId])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Button asChild className="mt-6">
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)
  const titleId = `pdp-title-${product.id}`

  const handleAddToCart = () => {
    addToCart(product, { variant, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="bg-cream pb-16 pt-20 md:pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1440px] px-6 py-8 md:px-10 md:py-12 lg:px-16">
        <Link
          to="/shop"
          className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-muted hover:text-gold md:mb-10"
        >
          <ChevronLeft className="h-4 w-4" /> Back to Shop
        </Link>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div ref={galleryRef} className="flex flex-col-reverse gap-4 md:flex-row">
            <div className="flex flex-row gap-3 overflow-x-auto md:flex-col md:overflow-visible">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    "relative h-20 w-16 flex-shrink-0 overflow-hidden border transition-colors md:h-24 md:w-20",
                    selectedImage === idx ? "border-gold" : "border-hairline hover:border-gold"
                  )}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[${titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="relative aspect-[3/4] flex-1 overflow-hidden bg-surface">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[${titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              {product.category}
            </p>
            <h1
              id={titleId}
              className="mt-2 font-serif text-3xl uppercase tracking-[0.14em] md:text-4xl lg:text-5xl"
            >
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} count={product.reviews} />
            </div>
            <p className="mt-5 font-serif text-2xl text-ink md:text-3xl">${product.price}</p>
            <p className="mt-6 leading-relaxed text-muted">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-ink">Metal Tone</p>
              <div className="flex gap-3">
                {["gold", "silver"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    data-selected={variant === v}
                    className={cn(
                      "rounded-full border px-6 py-2.5 text-xs font-medium uppercase tracking-[0.1em] transition-colors",
                      variant === v
                        ? "border-gold bg-gold-light text-ink"
                        : "border-hairline text-muted hover:border-gold hover:text-ink"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-ink">Quantity</p>
              <div className="inline-flex items-center border border-hairline bg-surface">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2.5 text-muted hover:text-ink"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2.5 text-muted hover:text-ink"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <Button
                size="full"
                onClick={handleAddToCart}
                className={cn(
                  "flex-1 transition-all duration-300",
                  added && "bg-gold-dark"
                )}
              >
                {added ? "Added to Bag" : "Add to Cart"}
              </Button>
              <button className="flex h-12 w-12 items-center justify-center border border-hairline bg-surface text-ink transition-colors hover:border-gold hover:text-gold">
                <Heart className="h-5 w-5" />
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion type="single" defaultValue="description">
                <AccordionItem value="description">
                  <AccordionTrigger value="description">Description</AccordionTrigger>
                  <AccordionContent value="description">
                    {product.description}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="materials">
                  <AccordionTrigger value="materials">Materials & Care</AccordionTrigger>
                  <AccordionContent value="materials">
                    <strong className="text-ink">Materials:</strong> {product.materials}
                    <br /><br />
                    <strong className="text-ink">Care:</strong> {product.care}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger value="shipping">Shipping & Returns</AccordionTrigger>
                  <AccordionContent value="shipping">
                    Free worldwide shipping on all orders over $75. Orders are processed within 1–2 business days. We offer 30-day hassle-free returns on unworn pieces in original packaging.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="mx-auto max-w-[1440px] px-6 pt-16 md:px-10 md:pt-24 lg:px-16">
        <h2 className="mb-8 font-serif text-2xl font-medium tracking-tight md:mb-12 md:text-3xl">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductDetailPage

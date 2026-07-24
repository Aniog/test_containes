import React, { useState, useMemo, useEffect, useRef } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import {
  Star,
  Minus,
  Plus,
  Truck,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { products, getProductBySlug } from "@/data/products"
import { useCart } from "@/context/CartContext"

function RelatedProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const titleId = `related-title-${product.id}`

  return (
    <article
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
          <img
            data-strk-img-id={`${product.id}-related-img-1`}
            data-strk-img={`[${titleId}] [related-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 0 : 1 }}
          />
          <img
            data-strk-img-id={`${product.id}-related-img-2`}
            data-strk-img={`[${titleId}] [related-title] on model`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} on model`}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 1 : 0 }}
          />
        </div>
      </Link>

      <div className="relative h-0">
        <button
          onClick={(e) => {
            e.preventDefault()
            addItem(product, 1, "gold")
          }}
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100 hover:bg-accent hover:text-white"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-3 text-center">
        <div className="flex items-center justify-center gap-1 mb-1">
          <Star className="h-3 w-3 fill-accent text-accent" />
          <span className="text-xs text-muted-foreground">{product.rating}</span>
        </div>
        <Link to={`/products/${product.slug}`}>
          <h3
            id={titleId}
            className="font-serif text-sm uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm font-medium text-primary">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </article>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const product = useMemo(() => getProductBySlug(slug), [slug])
  const related = useMemo(
    () => products.filter((p) => p.id !== product?.id).slice(0, 3),
    [product]
  )

  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState("gold")
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Button asChild>
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    )
  }

  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug])

  return (
    <div ref={containerRef}>
      <main className="bg-background pt-20 md:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-accent">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary capitalize">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted mb-4">
                <img
                  data-strk-img-id={`${product.id}-detail-0`}
                  data-strk-img="[product-name-detail] [product-category-detail]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    selectedImage === 0 ? "opacity-100" : "opacity-0"
                  }`}
                />
                <img
                  data-strk-img-id={`${product.id}-detail-1`}
                  data-strk-img="[product-name-detail] [product-category-detail] worn on model"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} worn on model`}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    selectedImage === 1 ? "opacity-100" : "opacity-0"
                  }`}
                />
                <img
                  data-strk-img-id={`${product.id}-detail-2`}
                  data-strk-img="[product-name-detail] [product-category-detail] detail shot"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail`}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    selectedImage === 2 ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedImage(0)}
                  className={`relative aspect-square w-20 md:w-24 overflow-hidden rounded-sm bg-muted border-2 transition-colors ${
                    selectedImage === 0
                      ? "border-accent"
                      : "border-transparent hover:border-hairline"
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.id}-detail-0`}
                    data-strk-img="[product-name-detail] [product-category-detail]"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view 1`}
                    className="h-full w-full object-cover"
                  />
                </button>
                <button
                  onClick={() => setSelectedImage(1)}
                  className={`relative aspect-square w-20 md:w-24 overflow-hidden rounded-sm bg-muted border-2 transition-colors ${
                    selectedImage === 1
                      ? "border-accent"
                      : "border-transparent hover:border-hairline"
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.id}-detail-1`}
                    data-strk-img="[product-name-detail] [product-category-detail] worn on model"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view 2`}
                    className="h-full w-full object-cover"
                  />
                </button>
                <button
                  onClick={() => setSelectedImage(2)}
                  className={`relative aspect-square w-20 md:w-24 overflow-hidden rounded-sm bg-muted border-2 transition-colors ${
                    selectedImage === 2
                      ? "border-accent"
                      : "border-transparent hover:border-hairline"
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.id}-detail-2`}
                    data-strk-img="[product-name-detail] [product-category-detail] detail shot"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view 3`}
                    className="h-full w-full object-cover"
                  />
                </button>
              </div>
            </div>

            {/* Product info */}
            <div className="lg:py-8">
              <p
                id="product-category-detail"
                className="text-xs uppercase tracking-[0.25em] text-accent mb-3"
              >
                {product.category}
              </p>
              <h1
                id="product-name-detail"
                className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.15em] text-primary mb-4"
              >
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-accent text-accent"
                          : "text-hairline"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="font-serif text-2xl md:text-3xl text-primary mb-6">
                ${product.price.toFixed(2)}
              </p>

              <p className="text-base leading-relaxed text-secondary mb-8">
                {product.description}
              </p>

              {/* Variant selector */}
              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.15em] text-primary mb-3 block">
                  Metal Tone
                </span>
                <div className="flex gap-3">
                  {["gold", "silver"].map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setVariant(tone)}
                      className={`h-11 px-6 rounded-full text-sm font-medium border transition-colors ${
                        variant === tone
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-hairline bg-surface text-primary hover:border-primary"
                      }`}
                    >
                      {tone.charAt(0).toUpperCase() + tone.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.15em] text-primary mb-3 block">
                  Quantity
                </span>
                <div className="inline-flex items-center border border-hairline rounded-sm">
                  <button
                    className="px-4 py-3 hover:bg-muted transition-colors"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 text-sm font-medium min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    className="px-4 py-3 hover:bg-muted transition-colors"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full h-14 text-sm uppercase tracking-[0.15em] mb-4"
                onClick={() => addItem(product, quantity, variant)}
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </Button>

              {/* Trust mini bar */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-hairline mt-6">
                <div className="flex flex-col items-center text-center gap-2">
                  <Truck className="h-5 w-5 text-accent" />
                  <span className="text-xs text-muted-foreground">
                    Free Shipping
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <RotateCcw className="h-5 w-5 text-accent" />
                  <span className="text-xs text-muted-foreground">
                    30-Day Returns
                  </span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                  <span className="text-xs text-muted-foreground">
                    2-Year Warranty
                  </span>
                </div>
              </div>

              {/* Accordions */}
              <Accordion defaultValue="description" className="mt-8">
                <AccordionItem value="description">
                  <AccordionTrigger value="description">
                    Description
                  </AccordionTrigger>
                  <AccordionContent value="description">
                    {product.description}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="materials">
                  <AccordionTrigger value="materials">
                    Materials & Care
                  </AccordionTrigger>
                  <AccordionContent value="materials">
                    {product.materials}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger value="shipping">
                    Shipping & Returns
                  </AccordionTrigger>
                  <AccordionContent value="shipping">
                    We offer free worldwide shipping on all orders over $50.
                    Orders are processed within 1–2 business days. Returns are
                    accepted within 30 days of delivery in original, unworn
                    condition.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-20 md:mt-28">
              <h2
                id="related-title"
                className="font-serif text-2xl md:text-3xl text-primary mb-10 text-center"
              >
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6">
                {related.map((p) => (
                  <RelatedProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  )
}

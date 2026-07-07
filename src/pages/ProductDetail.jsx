import * as React from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Minus, Plus, ChevronLeft, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StarRating } from "@/components/ui/star-rating"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { useCart } from "@/lib/cartContext"
import { getProductById, PRODUCTS, formatPrice } from "@/data/products"
import { useImageLoader } from "@/hooks/useImageLoader"

function RelatedProductCard({ product }) {
  const [hovered, setHovered] = React.useState(false)
  const { addItem } = useCart()

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="relative block overflow-hidden bg-velmora-stone">
        <div className="aspect-[3/4] w-full">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            data-strk-img-id={product.imageId}
            data-strk-img={`[${product.titleId}] [${product.descId}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            data-strk-img-id={product.hoverImageId}
            data-strk-img={`[${product.titleId}] gold jewelry detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className={`
              absolute inset-0 h-full w-full object-cover transition-opacity duration-500
              ${hovered ? "opacity-100" : "opacity-0"}
            `}
          />
        </div>

        <div
          className={`
            absolute bottom-0 left-0 right-0 translate-y-full bg-velmora-white/95 p-3 backdrop-blur-sm
            transition-transform duration-300 group-hover:translate-y-0
          `}
        >
          <Button
            size="full"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product, product.variants[0])
            }}
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </Link>

      <div className="mt-4 text-center">
        <Link to={`/products/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-xs font-medium uppercase tracking-[0.2em] text-velmora-espresso transition-colors hover:text-velmora-gold"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">
          {product.description}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating rating={Math.round(product.rating)} size={12} />
          <span className="text-[10px] text-velmora-muted">({product.reviewCount})</span>
        </div>
        <p className="mt-2 font-sans text-sm font-medium text-velmora-espresso">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  )
}

export default function ProductDetail() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = getProductById(productId)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = React.useState(product?.variants[0] || "gold")
  const [quantity, setQuantity] = React.useState(1)
  const [activeImage, setActiveImage] = React.useState(0)

  const containerRef = useImageLoader([productId, selectedVariant, activeImage])

  if (!product) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Button asChild className="mt-6">
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    )
  }

  const related = PRODUCTS.filter((p) => p.id !== product.id)
  const galleryIds = [
    product.imageId,
    product.hoverImageId,
    `${product.imageId}-detail`,
  ]

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity)
    setQuantity(1)
  }

  return (
    <div ref={containerRef} className="bg-velmora-cream pb-16 pt-20 md:pb-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.12em] text-velmora-muted transition-colors hover:text-velmora-gold"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-4 md:flex-row">
            <div className="flex flex-row gap-3 md:flex-col md:gap-4">
              {galleryIds.map((id, idx) => (
                <button
                  key={`${id}-${idx}`}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={`h-16 w-16 overflow-hidden border bg-velmora-stone md:h-20 md:w-20 ${
                    activeImage === idx
                      ? "border-velmora-gold"
                      : "border-velmora-border"
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    data-strk-img-id={`${id}-thumb-${idx}`}
                    data-strk-img={`[${product.titleId}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="relative flex-1 overflow-hidden bg-velmora-stone">
              <div className="aspect-[4/5] w-full">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  data-strk-img-id={galleryIds[activeImage]}
                  data-strk-img={`[${product.titleId}] [${product.descId}] gold jewelry`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1
              id={product.titleId}
              className="font-serif text-2xl font-medium uppercase tracking-[0.15em] text-velmora-espresso md:text-3xl"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.description}
            </p>

            <div className="mt-3 flex items-center gap-3">
              <p className="font-sans text-xl font-medium text-velmora-espresso">
                {formatPrice(product.price)}
              </p>
              <span className="text-velmora-muted">·</span>
              <div className="flex items-center gap-1">
                <StarRating rating={Math.round(product.rating)} size={14} />
                <span className="text-xs text-velmora-muted">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-velmora-espresso-light">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <span className="font-sans text-xs uppercase tracking-[0.15em] text-velmora-muted">
                Tone
              </span>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`h-11 min-w-[5.5rem] rounded-full border px-5 font-sans text-xs uppercase tracking-[0.12em] transition-all ${
                      selectedVariant === variant
                        ? "border-velmora-espresso bg-velmora-espresso text-white"
                        : "border-velmora-border text-velmora-espresso hover:border-velmora-gold"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="font-sans text-xs uppercase tracking-[0.15em] text-velmora-muted">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-velmora-border bg-velmora-white">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-velmora-espresso hover:text-velmora-gold"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-[3rem] text-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-velmora-espresso hover:text-velmora-gold"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-8">
              <Button size="full" onClick={handleAdd}>
                Add to Cart — {formatPrice(product.price * quantity)}
              </Button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion type="single" defaultValue="description">
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
                    <ul className="mt-3 list-disc pl-5">
                      <li>Store in a dry pouch when not worn</li>
                      <li>Avoid perfumes, lotions, and household cleaners</li>
                      <li>Clean gently with a soft cloth</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger value="shipping">
                    Shipping & Returns
                  </AccordionTrigger>
                  <AccordionContent value="shipping">
                    Free worldwide shipping on orders over $50. Orders ship
                    within 1–2 business days. We offer 30-day hassle-free
                    returns on unworn pieces in original packaging.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 border-t border-velmora-border pt-16">
          <h2 className="mb-10 text-center font-serif text-2xl font-medium md:text-3xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <RelatedProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

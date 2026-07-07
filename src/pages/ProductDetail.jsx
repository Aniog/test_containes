import { useEffect, useRef, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { getProductById, getRelatedProducts, products } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import StarRating from "@/components/StarRating"
import ProductCard from "@/components/ProductCard"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion"

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

const variants = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
]

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const related = product ? getRelatedProducts(product) : []
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState("gold")
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    if (!product) return
    setSelectedVariant("gold")
    setQuantity(1)
    setSelectedImage(0)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [product?.id])

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl uppercase tracking-widest text-ink">
          Product Not Found
        </h1>
        <p className="mt-4 text-stone">The piece you are looking for is no longer available.</p>
        <Button asChild className="mt-8">
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  const titleId = `product-detail-title-${product.id}`
  const descId = `product-detail-desc-${product.id}`
  const galleryIds = [
    `product-detail-main-${product.id}`,
    `product-detail-alt1-${product.id}`,
    `product-detail-alt2-${product.id}`,
    `product-detail-alt3-${product.id}`,
  ]

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  return (
    <div ref={containerRef} className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-8 pt-24 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 text-xs font-sans uppercase tracking-widest text-stone hover:text-ink"
        >
          ← Back
        </button>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col-reverse gap-4 lg:flex-row">
            <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
              {galleryIds.map((imgId, index) => (
                <button
                  key={imgId}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`
                    relative h-20 w-20 flex-shrink-0 overflow-hidden border transition-colors
                    ${selectedImage === index ? "border-gold" : "border-gold-muted hover:border-gold-light"}
                  `}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src={placeholder}
                    alt={`${product.name} view ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-parchment">
              <img
                data-strk-img-id={`product-detail-feature-${product.id}`}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src={placeholder}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h1
              id={titleId}
              className="font-serif text-3xl font-light uppercase tracking-widest text-ink sm:text-4xl lg:text-5xl"
            >
              {product.name}
            </h1>
            <p id={descId} className="mt-2 text-sm text-stone">
              {product.tagline}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <p className="mt-5 font-serif text-2xl text-ink">${product.price}</p>

            <p className="mt-6 leading-relaxed text-ink/90">{product.description}</p>

            <div className="mt-8">
              <span className="text-xs font-sans font-semibold uppercase tracking-widest text-ink">
                Tone
              </span>
              <div className="mt-3 flex gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`
                      rounded-full border px-6 py-2.5 text-xs font-sans font-medium uppercase tracking-widest transition-all
                      ${
                        selectedVariant === variant.id
                          ? "border-ink bg-ink text-cream"
                          : "border-gold-muted bg-transparent text-ink hover:border-gold"
                      }
                    `}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="text-xs font-sans font-semibold uppercase tracking-widest text-ink">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-gold-muted">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2.5 text-ink hover:bg-parchment"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-sans text-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2.5 text-ink hover:bg-parchment"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <Button onClick={handleAddToCart} size="lg" className="mt-8 w-full">
              Add to Cart — ${product.price * quantity}
            </Button>

            <div className="mt-10">
              <Accordion type="multiple" defaultValue={["description"]} className="w-full">
                <AccordionItem value="description">
                  <AccordionTrigger>Description</AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-relaxed text-stone">{product.description}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="materials">
                  <AccordionTrigger>Materials & Care</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-1.5 pl-4 text-stone">
                      {product.materialsCare.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-1.5 pl-4 text-stone">
                      {product.shippingReturns.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-24 border-t border-gold-muted pt-16">
            <h2 className="mb-10 font-serif text-2xl font-light uppercase tracking-widest text-ink sm:text-3xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
              {related.map((relatedProduct, index) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

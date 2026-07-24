import { useState, useEffect, useRef } from "react"
import { useParams, Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Stars } from "@/components/product/Stars"
import { ProductCard } from "@/components/product/ProductCard"
import { useCart } from "@/context/CartContext"
import { getProductById, getRelatedProducts } from "@/data/products"
import { Minus, Plus, ChevronLeft } from "lucide-react"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const related = getRelatedProducts(product)
  const { addToCart } = useCart()

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants[0] || "gold"
  )
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  const containerRef = useRef(null)

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0])
      setQuantity(1)
      setActiveImage(0)
    }
  }, [product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  if (!product) {
    return (
      <section className="px-4 py-32 text-center md:px-8">
        <p className="font-serif text-3xl text-velmora-espresso">
          Product not found.
        </p>
        <Button asChild className="mt-6" variant="outline">
          <Link to="/shop">Return to Shop</Link>
        </Button>
      </section>
    )
  }

  return (
    <section ref={containerRef} className="bg-velmora-cream px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/shop"
          className="mb-8 inline-flex items-center gap-1 font-sans text-xs uppercase tracking-label text-velmora-mocha hover:text-velmora-gold"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col gap-4 md:flex-row-reverse">
            <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-velmora-sand">
              <img
                data-strk-img-id={`product-${product.id}-main`}
                data-strk-img={`[product-${product.id}-desc] [product-${product.id}-name] ${selectedVariant} jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="h-full w-full object-cover"
              />
              <span id={`product-${product.id}-desc`} className="sr-only">
                {product.description}
              </span>
              <span id={`product-${product.id}-name`} className="sr-only">
                {product.name}
              </span>
            </div>
            <div className="flex flex-row gap-3 md:flex-col">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={`relative h-20 w-20 flex-shrink-0 overflow-hidden bg-velmora-sand md:h-24 md:w-24 ${
                    activeImage === idx
                      ? "ring-1 ring-velmora-gold"
                      : "ring-1 ring-transparent"
                  }`}
                >
                  <img
                    data-strk-img-id={`product-${product.id}-thumb-${idx}`}
                    data-strk-img={`[product-${product.id}-desc] [product-${product.id}-name] ${selectedVariant} jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <p className="font-sans text-xs uppercase tracking-widest text-velmora-gold">
              {product.category}
            </p>
            <h1 className="mt-3 font-serif text-4xl uppercase tracking-label text-velmora-espresso md:text-5xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <Stars rating={product.rating} />
              <span className="text-sm text-velmora-taupe">
                {product.reviewCount} reviews
              </span>
            </div>

            <p className="mt-6 font-sans text-2xl font-light text-velmora-espresso">
              ${product.price}
            </p>

            <p className="mt-6 leading-relaxed text-velmora-mocha">
              {product.description}
            </p>

            <Separator className="my-8" />

            {/* Variant selector */}
            <div>
              <p className="font-sans text-xs uppercase tracking-label text-velmora-espresso">
                Tone
              </p>
              <div className="mt-3 flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full px-5 py-2 text-xs uppercase tracking-label transition-colors ${
                      selectedVariant === variant
                        ? "bg-velmora-espresso text-velmora-cream"
                        : "border border-velmora-espresso/20 text-velmora-espresso hover:border-velmora-gold"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="font-sans text-xs uppercase tracking-label text-velmora-espresso">
                Quantity
              </p>
              <div className="mt-3 inline-flex items-center border border-velmora-espresso/10 bg-white">
                <button
                  type="button"
                  className="px-3 py-2 text-velmora-mocha hover:bg-velmora-sand"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  type="button"
                  className="px-3 py-2 text-velmora-mocha hover:bg-velmora-sand"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button
              className="mt-8 h-12 w-full uppercase tracking-label"
              variant="accent"
              onClick={() => addToCart(product, selectedVariant, quantity)}
            >
              Add to Cart — ${product.price * quantity}
            </Button>

            <Accordion type="single" defaultValue="description" className="mt-10">
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
                  <strong>Materials:</strong> {product.materials}
                  <br />
                  <br />
                  <strong>Care:</strong> {product.care}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger value="shipping">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent value="shipping">
                  Free worldwide shipping on orders over $50. Orders ship within
                  1–2 business days. We offer 30-day hassle-free returns on
                  unworn pieces in original packaging.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="mb-10 text-center font-serif text-3xl text-velmora-espresso md:text-4xl">
              You May Also Like
            </h2>
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

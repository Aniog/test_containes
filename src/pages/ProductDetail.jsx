import { useState, useMemo } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { ChevronLeft, Minus, Plus, Star, Truck, RotateCcw, ShieldCheck } from "lucide-react"
import { getProductById, getRelatedProducts, products } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { StockImage } from "@/components/StockImage"
import { StarRating } from "@/components/StarRating"
import { ProductCard } from "@/components/ProductCard"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addToCart } = useCart()

  const [selectedTone, setSelectedTone] = useState(product?.tone?.[0] || "Gold")
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const related = useMemo(() => (product ? getRelatedProducts(product) : []), [product])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-3xl text-ink">Product Not Found</h1>
        <p className="mt-2 text-taupe">We couldn't find that piece.</p>
        <Button className="mt-6" onClick={() => navigate("/shop")}>
          Back to Shop
        </Button>
      </div>
    )
  }

  const images = product.images[selectedTone] || product.images[product.tone[0]] || []

  const handleAddToCart = () => {
    addToCart(product, { tone: selectedTone, quantity })
    toast.success(`${product.name} added to cart`)
  }

  return (
    <div className="bg-paper pb-16 pt-20 md:pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-wide text-taupe hover:text-ink"
        >
          <ChevronLeft size={14} />
          Back
        </button>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-sand">
              <StockImage
                id={`product-detail-${product.id}-main`}
                query={`[product-detail-${product.id}-name]`}
                ratio="4x5"
                width={900}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "aspect-square overflow-hidden bg-sand transition-all",
                    selectedImage === index ? "ring-1 ring-ink" : "opacity-70 hover:opacity-100"
                  )}
                >
                  <StockImage
                    id={`product-detail-${product.id}-thumb-${index}`}
                    query={`[product-detail-${product.id}-name]`}
                    ratio="1x1"
                    width={300}
                    alt={`${product.name} view ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col lg:py-8">
            <p className="font-sans text-xs font-medium uppercase tracking-wide text-champagne">
              {product.category}
            </p>
            <h1
              id={`product-detail-${product.id}-name`}
              className="mt-3 font-serif text-3xl font-light uppercase tracking-ultra text-ink md:text-4xl"
            >
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} count={product.reviews} />
            </div>

            <p className="mt-5 font-sans text-2xl font-light text-ink">${product.price}</p>

            <p className="mt-6 font-sans text-sm leading-relaxed text-taupe">
              {product.description}
            </p>

            {/* Tone Selector */}
            {product.tone.length > 1 && (
              <div className="mt-8">
                <p className="font-sans text-xs font-medium uppercase tracking-wide text-ink">
                  Tone
                </p>
                <div className="mt-3 flex gap-3">
                  {product.tone.map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={cn(
                        "rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-wide transition-all",
                        selectedTone === tone
                          ? "border-ink bg-ink text-white"
                          : "border-divider bg-white text-ink hover:border-ink"
                      )}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <p className="font-sans text-xs font-medium uppercase tracking-wide text-ink">
                Quantity
              </p>
              <div className="mt-3 inline-flex items-center border border-divider bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-linen"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-linen"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <Button onClick={handleAddToCart} className="mt-8 w-full py-4">
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </Button>

            <div className="mt-6 grid grid-cols-3 gap-2 text-center">
              <div className="flex flex-col items-center gap-2 py-3">
                <Truck size={18} className="text-champagne" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-wide text-taupe">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-2 py-3">
                <RotateCcw size={18} className="text-champagne" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-wide text-taupe">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center gap-2 py-3">
                <ShieldCheck size={18} className="text-champagne" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-wide text-taupe">2-Year Warranty</span>
              </div>
            </div>

            <Accordion type="single" collapsible className="mt-10">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>{product.details}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="care">
                <AccordionTrigger>Materials & Care</AccordionTrigger>
                <AccordionContent>{product.care}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>{product.shipping}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20 border-t border-divider pt-14">
            <h2 className="text-center font-serif text-2xl font-light text-ink md:text-4xl">
              You May Also Like
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

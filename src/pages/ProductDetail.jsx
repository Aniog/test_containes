import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Minus, Plus, ChevronLeft } from "lucide-react"
import { getProductById, getRelatedProducts, formatPrice } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { StarRating } from "@/components/ui/StarRating"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { ProductCard } from "@/components/shop/ProductCard"

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState(product?.tone[0] || "gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0])
      setQuantity(1)
      setActiveImage(0)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [product])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-3xl text-velmora-charcoal">Product not found</h1>
        <Button asChild className="mt-6">
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    )
  }

  const related = getRelatedProducts(product.id)

  return (
    <main className="bg-velmora-cream pb-20 pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-velmora-taupe hover:text-velmora-accent"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="aspect-[4/5] w-full overflow-hidden bg-velmora-sand">
              <div className="h-full w-full bg-gradient-to-br from-velmora-sand to-velmora-stone/50" />
            </div>
            <div className="grid grid-cols-5 gap-3">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square overflow-hidden bg-velmora-stone/30 ${
                    activeImage === idx ? "ring-1 ring-velmora-accent" : "opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:py-8">
            <StarRating rating={product.rating} count={product.reviewCount} />
            <h1 className="mt-4 font-serif text-3xl uppercase tracking-widest text-velmora-charcoal sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 font-serif text-2xl text-velmora-charcoal">{formatPrice(product.price)}</p>
            <p className="mt-6 leading-relaxed text-velmora-charcoal/80">{product.description}</p>

            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-velmora-charcoal">Tone</span>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`h-11 rounded-full border px-6 text-xs font-medium uppercase tracking-widest transition-colors ${
                      selectedTone === tone
                        ? "border-velmora-charcoal bg-velmora-charcoal text-white"
                        : "border-velmora-stone text-velmora-charcoal hover:border-velmora-charcoal"
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-velmora-charcoal">Quantity</span>
              <div className="mt-3 inline-flex items-center border border-velmora-stone">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-velmora-stone/20"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-velmora-stone/20"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button
              onClick={() => addItem(product, selectedTone, quantity)}
              className="mt-8 h-12 w-full text-xs font-semibold uppercase tracking-widest"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </Button>

            <Separator className="my-10" />

            <Accordion type="single" collapsible defaultValue="description" className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>{product.description}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger>Materials & Care</AccordionTrigger>
                <AccordionContent>
                  <p className="font-medium">Materials</p>
                  <p className="mt-1">{product.materials}</p>
                  <p className="mt-4 font-medium">Care</p>
                  <p className="mt-1">{product.care}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>
                  Free worldwide shipping on all orders over $75. Orders are processed within 1-2 business days.
                  We offer 30-day returns on unworn items in original packaging.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <section className="mt-20 lg:mt-28">
          <h2 className="text-center font-serif text-3xl text-velmora-charcoal sm:text-4xl">You May Also Like</h2>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} showQuickAdd={false} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

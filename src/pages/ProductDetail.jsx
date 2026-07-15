import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { products } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import ProductCard from "@/components/ProductCard"
import { Star, Minus, Plus, ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const { addItem } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState("gold")
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#8A7E72]">Product not found</p>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div className="pt-20 sm:pt-24 pb-16 bg-[#F8F5F2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/shop"
            className="inline-flex items-center text-xs uppercase tracking-[0.15em] text-[#8A7E72] hover:text-[#1C1C1C] transition-colors"
          >
            <ChevronLeft className="w-3 h-3 mr-1" />
            Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[4/5] bg-[#E8E0D8] overflow-hidden rounded-sm mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-[#8A7E72] uppercase tracking-widest text-center px-4">
                  {product.displayName} — Image {selectedImage + 1}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative w-20 h-20 bg-[#E8E0D8] overflow-hidden rounded-sm transition-all ${
                    selectedImage === i ? "ring-2 ring-[#C9A96E]" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] text-[#8A7E72] uppercase tracking-wider">
                      {i + 1}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#1C1C1C] uppercase tracking-[0.1em] mb-2">
                {product.name}
              </h1>
              <p className="text-xl font-medium text-[#1C1C1C]">${product.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-[#C9A96E] text-[#C9A96E]"
                        : "fill-[#E2D9CF] text-[#E2D9CF]"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#8A7E72]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-[#5C534A] leading-relaxed text-sm sm:text-base">
              {product.description}
            </p>

            {/* Variant selector */}
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#1C1C1C] font-medium mb-3">
                Metal Tone
              </p>
              <div className="flex gap-3">
                {["gold", "silver"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-[0.1em] font-medium rounded-full border transition-all ${
                      variant === v
                        ? "border-[#1C1C1C] bg-[#1C1C1C] text-white"
                        : "border-[#E2D9CF] text-[#5C534A] hover:border-[#1C1C1C]"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#1C1C1C] font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-[#E2D9CF] rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-[#E2D9CF]/30 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-medium min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-[#E2D9CF]/30 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <Button
              onClick={() => addItem(product, quantity, variant)}
              className="w-full bg-[#C9A96E] hover:bg-[#b8975e] text-white uppercase tracking-[0.15em] text-xs font-medium h-14 rounded-none"
            >
              Add to Cart — ${product.price * quantity}
            </Button>

            {/* Trust mini */}
            <div className="flex items-center justify-center gap-6 py-2 text-[11px] text-[#8A7E72] uppercase tracking-wider">
              <span>Free Shipping</span>
              <span className="w-1 h-1 rounded-full bg-[#E2D9CF]" />
              <span>30-Day Returns</span>
              <span className="w-1 h-1 rounded-full bg-[#E2D9CF]" />
              <span>Gift Wrap</span>
            </div>

            {/* Accordions */}
            <div className="pt-4">
              <Accordion defaultValue="description">
                <AccordionItem value="description">
                  <AccordionTrigger>Description</AccordionTrigger>
                  <AccordionContent>{product.description}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="materials">
                  <AccordionTrigger>Materials & Care</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                    <p><strong>Care:</strong> {product.care}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      We offer free worldwide shipping on all orders over $50. Orders are typically 
                      dispatched within 1-2 business days and delivered within 5-10 business days 
                      depending on your location.
                    </p>
                    <p>
                      Not completely satisfied? Return any item within 30 days of delivery for a 
                      full refund or exchange. Items must be unworn and in original packaging.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 sm:mt-28">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8A7E72] mb-3 font-medium">
                You May Also Like
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1C1C]">
                Complete the Look
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} showBadge={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

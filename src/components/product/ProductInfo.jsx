import { useState } from "react"
import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { StarRating } from "@/components/ui/StarRating"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

export function ProductInfo({ product }) {
  const { addItem } = useCart()
  const [tone, setTone] = useState(product.tone[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="flex flex-col">
      <p className="text-xs uppercase tracking-[0.22em] text-primary">
        {product.category}
      </p>
      <h1 className="mt-2 font-serif text-3xl uppercase tracking-[0.16em] text-foreground sm:text-4xl">
        {product.name}
      </h1>

      <div className="mt-3 flex items-center gap-3">
        <StarRating rating={product.rating} count={product.reviewCount} />
      </div>

      <p className="mt-5 text-2xl font-light text-foreground">
        ${product.price}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        {product.description}
      </p>

      <div className="mt-8">
        <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Metal Tone
        </span>
        <div className="mt-3 flex gap-3">
          {product.tone.map((t) => (
            <button
              key={t}
              onClick={() => setTone(t)}
              className={cn(
                "rounded-full border px-5 py-2 text-xs uppercase tracking-[0.14em] transition-colors",
                tone === t
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-transparent text-foreground hover:border-primary/60",
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Quantity
        </span>
        <div className="mt-3 inline-flex items-center rounded-md border border-border">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="p-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-10 text-center text-sm">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="p-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <Button
        onClick={() => addItem(product, { tone, quantity })}
        className="mt-8 h-12 w-full text-sm uppercase tracking-[0.16em]"
      >
        Add to Cart — ${product.price * quantity}
      </Button>

      <div className="mt-10">
        <Accordion type="single" collapsible defaultValue="description">
          <AccordionItem value="description">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>
              <ul className="list-inside list-disc space-y-1">
                {product.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="care">
            <AccordionTrigger>Materials & Care</AccordionTrigger>
            <AccordionContent>
              <ul className="list-inside list-disc space-y-1">
                {product.care.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="shipping">
            <AccordionTrigger>Shipping & Returns</AccordionTrigger>
            <AccordionContent>
              <ul className="list-inside list-disc space-y-1">
                {product.shipping.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

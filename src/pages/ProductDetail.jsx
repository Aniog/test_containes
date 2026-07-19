import { useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ChevronDown, Minus, Plus, Star } from "lucide-react"
import ProductCard from "@/components/product/ProductCard.jsx"
import ProductImage from "@/components/product/ProductImage.jsx"
import { Button } from "@/components/ui/Buttons.jsx"
import { useCart } from "@/context/CartContext.jsx"
import { getProductById, products } from "@/data/products.js"
import { cn } from "@/lib/utils"

const variants = ["Gold", "Silver Tone"]
const accordionItems = [
  { title: "Description", content: "A refined demi-fine silhouette designed to layer beautifully, catch warm light, and feel effortless from day to evening." },
  { title: "Materials & Care", content: "Finished with premium plating and hypoallergenic details. Avoid water, fragrance, and lotion; store in the provided pouch after wear." },
  { title: "Shipping & Returns", content: "Enjoy free worldwide shipping and 30-day returns on unworn pieces in original packaging." },
]

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState("Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState("primary")
  const [openAccordion, setOpenAccordion] = useState("Description")

  const related = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  const gallery = [
    { key: "primary", imageId: `${product.imgId}-detail`, query: `[${product.descId}] [${product.titleId}]` },
    { key: "worn", imageId: `${product.id}-worn-detail-k24f8b`, query: `[${product.titleId}] worn on model warm gold jewelry editorial` },
    { key: "gift", imageId: `${product.id}-gift-detail-r81c5e`, query: `[${product.titleId}] jewelry gift box velvet warm gold detail` },
  ]

  return (
    <main className="bg-velmora-cream pb-20 pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Link to="/shop" className="focus-ring mb-8 inline-block border-b border-velmora-gold pb-1 text-xs font-bold uppercase tracking-luxe text-velmora-clay hover:text-velmora-gold">
          Back to Shop
        </Link>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="grid gap-4 sm:grid-cols-[88px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col sm:overflow-visible">
              {gallery.map((image) => (
                <button
                  key={image.key}
                  type="button"
                  onClick={() => setActiveImage(image.key)}
                  className={cn(
                    "focus-ring h-24 w-20 flex-shrink-0 overflow-hidden border bg-velmora-linen transition",
                    activeImage === image.key ? "border-velmora-gold" : "border-velmora-hairline hover:border-velmora-gold",
                  )}
                  aria-label={`View ${image.key} image`}
                >
                  <ProductImage product={product} imageId={`${image.imageId}-thumb`} query={image.query} ratio="3x4" width="250" />
                </button>
              ))}
            </div>
            <div className="relative order-1 aspect-[4/5] overflow-hidden bg-velmora-linen shadow-soft sm:order-2">
              {gallery.map((image) => (
                <div
                  key={image.key}
                  className={cn(
                    "absolute inset-0 transition duration-500",
                    activeImage === image.key ? "opacity-100" : "pointer-events-none opacity-0",
                  )}
                >
                  <ProductImage product={product} imageId={image.imageId} query={image.query} ratio="3x4" width="1000" />
                </div>
              ))}
            </div>
          </div>

          <section className="text-velmora-ink lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-widerLuxe text-velmora-gold">{product.category}</p>
            <h1 id={product.titleId} className="mt-3 font-serif text-5xl font-semibold uppercase leading-[0.98] tracking-luxe text-velmora-ink sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="font-serif text-4xl font-semibold text-velmora-ink">${product.price}</p>
              <div className="flex items-center gap-2 text-sm text-velmora-clay">
                <span className="flex text-velmora-gold" aria-label={`${product.rating} stars`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                <span>{product.rating} · {product.reviews} reviews</span>
              </div>
            </div>
            <p id={product.descId} className="mt-6 max-w-xl text-base leading-8 text-velmora-clay">
              {product.shortDescription}
            </p>

            <div className="mt-8 border-y border-velmora-hairline py-7">
              <p className="text-xs font-bold uppercase tracking-luxe text-velmora-clay">Tone</p>
              <div className="mt-4 flex gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      "focus-ring rounded-full border px-5 py-2.5 text-sm font-semibold transition",
                      selectedVariant === variant
                        ? "border-velmora-gold bg-velmora-gold text-velmora-ink"
                        : "border-velmora-hairline bg-transparent text-velmora-ink hover:border-velmora-gold",
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-4">
                <p className="text-xs font-bold uppercase tracking-luxe text-velmora-clay">Quantity</p>
                <div className="flex items-center rounded-full border border-velmora-hairline text-velmora-ink">
                  <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="focus-ring p-3 hover:text-velmora-gold" aria-label="Decrease quantity">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-10 text-center text-sm font-bold text-velmora-ink">{quantity}</span>
                  <button type="button" onClick={() => setQuantity(quantity + 1)} className="focus-ring p-3 hover:text-velmora-gold" aria-label="Increase quantity">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <Button type="button" className="mt-7 w-full" onClick={() => addItem({ ...product, selectedVariant }, quantity)}>
              Add to Cart · ${product.price * quantity}
            </Button>

            <div className="mt-8 border-t border-velmora-hairline">
              {accordionItems.map((item) => (
                <div key={item.title} className="border-b border-velmora-hairline">
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(openAccordion === item.title ? "" : item.title)}
                    className="focus-ring flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-luxe text-velmora-ink"
                  >
                    {item.title}
                    <ChevronDown className={cn("h-4 w-4 transition", openAccordion === item.title && "rotate-180")} />
                  </button>
                  <div className={cn("grid transition-all duration-300", openAccordion === item.title ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}> 
                    <div className="overflow-hidden">
                      <p className="pb-5 text-sm leading-7 text-velmora-clay">
                        {item.title === "Description" ? product.description : item.title === "Materials & Care" ? product.care : item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-20 border-t border-velmora-hairline pt-14">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-widerLuxe text-velmora-gold">Complete the Moment</p>
              <h2 className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-ink">You May Also Like</h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} onAdd={addItem} compact />
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

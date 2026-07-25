import { useEffect, useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ChevronDown, Heart, Minus, Plus, RefreshCcw, ShieldCheck, Truck } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import { Eyebrow, RatingStars, Reveal } from "@/components/ui"
import { useCart } from "@/context/CartContext"
import { formatPrice, getProductById, products, PLACEHOLDER_IMG } from "@/data/products"
import { cn } from "@/lib/utils"
import { useStrkImages } from "@/lib/use-strk-images"

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-hairline">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-noir">{title}</span>
        <ChevronDown
          className={cn("h-4 w-4 text-muted transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-luxe",
          open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-sm font-light leading-relaxed text-muted">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default function ProductPage() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [activeImage, setActiveImage] = useState(0)
  const [variant, setVariant] = useState("Gold")
  const [quantity, setQuantity] = useState(1)
  const [liked, setLiked] = useState(false)
  const strkRef = useStrkImages([product?.id])

  useEffect(() => {
    setActiveImage(0)
    setVariant("Gold")
    setQuantity(1)
  }, [id])

  const related = useMemo(
    () => products.filter((p) => p.id !== id && p.category === product?.category).concat(
      products.filter((p) => p.id !== id && p.category !== product?.category)
    ).slice(0, 4),
    [id, product]
  )

  if (!product) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 pt-20 text-center">
        <p className="font-serif text-3xl text-noir">This piece has sold out</p>
        <Link to="/shop" className="text-[11px] font-medium uppercase tracking-[0.25em] text-gold-deep hover:text-noir">
          Return to the collection
        </Link>
      </div>
    )
  }

  const active = product.images[activeImage]

  return (
    <div ref={strkRef} className="bg-ivory pb-24 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <nav className="mb-8 text-[10px] uppercase tracking-[0.2em] text-muted">
          <Link to="/" className="transition-colors hover:text-noir">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="transition-colors hover:text-noir">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-noir">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[4/3] overflow-hidden bg-cream">
              {product.images.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={`[${product.taglineId}] [${product.titleId}] elegant gold jewelry product photography, warm dark background, macro detail`}
                  data-strk-img-ratio={img.ratio}
                  data-strk-img-width="1000"
                  src={PLACEHOLDER_IMG}
                  alt={img.alt}
                  draggable={false}
                  aria-hidden={i !== activeImage}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-luxe",
                    i === activeImage ? "opacity-100" : "opacity-0"
                  )}
                />
              ))}
              {product.badge && (
                <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.2em] text-noir backdrop-blur-sm">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1} of ${product.name}`}
                  className={cn(
                    "aspect-[4/3] overflow-hidden bg-cream transition-all duration-300",
                    i === activeImage
                      ? "outline outline-1 outline-offset-2 outline-gold"
                      : "opacity-60 hover:opacity-100"
                  )}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={`[${product.taglineId}] [${product.titleId}] gold jewelry macro detail ${i + 1}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="300"
                    src={PLACEHOLDER_IMG}
                    alt=""
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:py-4">
            <Eyebrow>{product.category}</Eyebrow>
            <h1
              id={product.titleId}
              className="mt-3 font-serif text-3xl font-medium uppercase tracking-[0.12em] text-noir md:text-4xl"
            >
              {product.name}
            </h1>
            <p id={product.taglineId} className="mt-2 font-serif text-lg font-light italic text-muted">
              {product.tagline}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <RatingStars rating={product.rating} />
              <span className="text-xs text-muted">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 font-serif text-3xl text-noir">{formatPrice(product.price)}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted">
              or 4 interest-free payments of {formatPrice(product.price / 4)}
            </p>

            <p className="mt-6 text-[15px] font-light leading-relaxed text-muted">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-noir">
                Finish — <span className="text-muted">{variant}</span>
              </p>
              <div className="mt-3 flex gap-3">
                {["Gold", "Silver"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      "rounded-full border px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300",
                      variant === v
                        ? "border-noir bg-noir text-ivory"
                        : "border-hairline bg-transparent text-muted hover:border-noir hover:text-noir"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-stretch gap-3">
              <div className="flex items-center border border-hairline">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="px-4 py-3 text-muted transition-colors hover:text-noir"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-8 text-center text-sm font-medium text-noir">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="px-4 py-3 text-muted transition-colors hover:text-noir"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
              <button
                onClick={() => setLiked((v) => !v)}
                aria-label="Add to wishlist"
                className={cn(
                  "flex items-center justify-center border px-4 transition-colors",
                  liked
                    ? "border-gold bg-gold/10 text-gold-deep"
                    : "border-hairline text-muted hover:border-noir hover:text-noir"
                )}
              >
                <Heart className={cn("h-4 w-4", liked && "fill-gold text-gold")} />
              </button>
            </div>

            <button
              onClick={() => addItem(product, variant, quantity)}
              className="mt-4 w-full bg-gold py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-noir transition-colors duration-300 hover:bg-gold-deep hover:text-ivory"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            <div className="mt-6 grid grid-cols-3 gap-2 border-y border-hairline py-5">
              {[
                { icon: Truck, label: "Free shipping" },
                { icon: RefreshCcw, label: "30-day returns" },
                { icon: ShieldCheck, label: "2-year warranty" },
              ].map((perk) => (
                <div key={perk.label} className="flex flex-col items-center gap-2 text-center">
                  <perk.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  <span className="text-[9px] uppercase tracking-[0.18em] text-muted">{perk.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-2">
              <Accordion title="Description" defaultOpen>
                {product.description} Designed in our atelier and finished by hand, each piece
                arrives in the signature Velmora linen pouch.
              </Accordion>
              <Accordion title="Materials & Care">
                <span className="block">{product.materials}</span>
                <span className="mt-2 block">{product.care}</span>
              </Accordion>
              <Accordion title="Shipping & Returns">
                Complimentary tracked worldwide shipping on every order (3–7 business days).
                Not the one? Return or exchange within 30 days — no questions, no fees.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-24 md:mt-32">
          <Reveal className="text-center">
            <Eyebrow>Complete the look</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-light text-noir md:text-4xl">
              You may also <em className="italic text-gold-deep">like</em>
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

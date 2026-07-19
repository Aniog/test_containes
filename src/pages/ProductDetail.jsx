import { useEffect, useRef, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Minus, Plus, ShoppingBag, Truck, RotateCcw, ShieldCheck, ArrowLeft } from "lucide-react"
import { Container, Section } from "@/components/ui/Section"
import StarRating from "@/components/ui/StarRating"
import ProductGallery from "@/components/product/ProductGallery"
import Accordion from "@/components/product/Accordion"
import ProductCard from "@/components/product/ProductCard"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { cn, formatPrice } from "@/lib/utils"

const TONE_LABELS = {
  gold: { label: "18K Gold", swatch: "linear-gradient(135deg,#d9c19a 0%,#b89460 50%,#8e6f44 100%)" },
  silver: { label: "Sterling Silver", swatch: "linear-gradient(135deg,#e9e0d1 0%,#cdc4b6 50%,#9a9286 100%)" },
}

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem, openCart } = useCart()
  const [tone, setTone] = useState(product?.tones?.[0] || "gold")
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setTone(product?.tones?.[0] || "gold")
    setQuantity(1)
  }, [product?.id])

  const ref = useRef(null)
  useEffect(() => {
    const target = ref.current
    if (!target) return undefined
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, target)
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      ImageHelper.disconnect(target)
    }
  }, [product?.id])

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <p className="eyebrow text-gold-deep mb-3">Not Found</p>
        <h1 className="font-serif text-3xl mb-4">This piece has wandered off.</h1>
        <Link to="/shop" className="btn-primary">
          Browse the collection
        </Link>
      </div>
    )
  }

  const onAdd = () => {
    addItem(product, { tone, quantity })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1800)
  }

  const onBuyNow = () => {
    addItem(product, { tone, quantity })
    openCart()
  }

  const related = getRelatedProducts(product, 4)

  const accordionItems = [
    {
      label: "Description",
      content: (
        <div className="space-y-4 text-sm md:text-base text-ink/85 leading-relaxed">
          <p>{product.description}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-2">
            {product.details.map((d) => (
              <li key={d} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 w-1 h-1 rounded-full bg-gold-deep flex-shrink-0"
                />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      label: "Materials & Care",
      content: (
        <div className="space-y-4 text-sm md:text-base text-ink/85 leading-relaxed">
          <p>{product.materials}</p>
          <div>
            <p className="eyebrow mb-3">How to care for it</p>
            <ul className="space-y-2">
              {product.care.map((line) => (
                <li key={line} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 w-1 h-1 rounded-full bg-gold-deep flex-shrink-0"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: "Shipping & Returns",
      content: (
        <div className="space-y-5 text-sm md:text-base text-ink/85 leading-relaxed">
          <p>{product.shipping}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <Promise
              icon={Truck}
              label="Free Shipping"
              detail="On orders over $75"
            />
            <Promise
              icon={RotateCcw}
              label="30-Day Returns"
              detail="On unworn pieces"
            />
            <Promise
              icon={ShieldCheck}
              label="Hypoallergenic"
              detail="Safe for sensitive skin"
            />
          </div>
        </div>
      ),
    },
  ]

  return (
    <div ref={ref} className="page-fade">
      {/* Breadcrumb */}
      <div className="pt-24 md:pt-32 pb-2">
        <Container>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-eyebrow text-taupe hover:text-ink transition-colors"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back
          </button>
        </Container>
      </div>

      {/* Main product */}
      <Section background="paper" spacing="md" className="!pt-4">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Gallery */}
            <div className="lg:col-span-7">
              <ProductGallery product={product} />
            </div>

            {/* Info */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow text-gold-deep mb-4">{product.eyebrow}</p>
              <h1
                id={`${product.id}-detail-title`}
                className="product-name text-2xl md:text-3xl text-ink"
              >
                {product.name}
              </h1>
              <p
                id={`${product.id}-detail-desc`}
                className="mt-3 text-sm md:text-base text-taupe leading-relaxed"
              >
                {product.shortDescription}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <StarRating value={product.rating} showValue />
                <span className="text-xs text-taupe">
                  ({product.reviewCount} reviews)
                </span>
              </div>

              <p
                className="mt-6 font-serif text-3xl md:text-4xl text-ink"
                aria-label={`Price ${formatPrice(product.price)}`}
              >
                {formatPrice(product.price)}
              </p>

              <div className="my-7 hairline" />

              {/* Variants */}
              {product.tones?.length > 1 || product.tones?.[0] ? (
                <div className="mb-7">
                  <div className="flex items-center justify-between mb-3">
                    <p className="eyebrow">Finish</p>
                    <p className="text-xs text-taupe">
                      {TONE_LABELS[tone]?.label}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.tones.map((t) => {
                      const swatch = TONE_LABELS[t]
                      const isActive = t === tone
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTone(t)}
                          aria-pressed={isActive}
                          className={cn(
                            "inline-flex items-center gap-2.5 pl-2 pr-4 py-2 border transition-colors",
                            isActive
                              ? "border-ink text-ink"
                              : "border-mist text-ink/70 hover:border-ink/50",
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className="w-5 h-5 rounded-full border border-mist"
                            style={{ background: swatch.swatch }}
                          />
                          <span className="text-[11px] uppercase tracking-eyebrow font-medium">
                            {swatch.label}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ) : null}

              {/* Quantity + CTA */}
              <div className="mb-3">
                <p className="eyebrow mb-3">Quantity</p>
                <div className="inline-flex items-center border border-mist">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-11 h-11 inline-flex items-center justify-center hover:text-gold-deep"
                  >
                    <Minus size={14} strokeWidth={1.5} />
                  </button>
                  <span className="w-10 text-center font-serif text-base">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-11 h-11 inline-flex items-center justify-center hover:text-gold-deep"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={onAdd}
                className={cn(
                  "btn-primary w-full mt-5 transition-colors",
                  added && "bg-success text-paper border-success hover:bg-success",
                )}
              >
                {added ? "Added to Bag" : "Add to Bag"}
                <ShoppingBag size={14} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={onBuyNow}
                className="btn-outline w-full mt-3"
              >
                Buy Now
              </button>

              <ul className="mt-7 space-y-3 text-xs text-taupe">
                <li className="flex items-center gap-3">
                  <Truck size={14} strokeWidth={1.5} className="text-gold-deep" />
                  Free worldwide shipping on orders over $75
                </li>
                <li className="flex items-center gap-3">
                  <RotateCcw size={14} strokeWidth={1.5} className="text-gold-deep" />
                  30-day returns on unworn pieces
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck size={14} strokeWidth={1.5} className="text-gold-deep" />
                  Hypoallergenic and nickel-free
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Accordions */}
      <Section background="paper" spacing="md" className="!pt-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-7">
              <Accordion items={accordionItems} defaultOpen={0} />
            </div>
            <div className="hidden lg:block lg:col-span-5" />
          </div>
        </Container>
      </Section>

      {/* Related */}
      {related.length > 0 ? (
        <Section background="paper-warm" spacing="lg">
          <Container>
            <div className="flex items-end justify-between mb-10 md:mb-14">
              <div>
                <p className="eyebrow text-gold-deep mb-3">You May Also Love</p>
                <h2 className="editorial-heading text-3xl md:text-4xl text-ink">
                  Pair it
                  <span className="italic font-light"> with</span>.
                </h2>
              </div>
              <Link
                to="/shop"
                className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-eyebrow text-ink hover:text-gold-deep"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}
    </div>
  )
}

function Promise({ icon: Icon, label, detail }) {
  return (
    <div className="flex items-start gap-3">
      <Icon
        size={16}
        strokeWidth={1.5}
        className="text-gold-deep flex-shrink-0 mt-0.5"
      />
      <div>
        <p className="text-xs uppercase tracking-eyebrow text-ink font-medium">
          {label}
        </p>
        <p className="text-xs text-taupe mt-0.5">{detail}</p>
      </div>
    </div>
  )
}

import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Heart, Minus, Plus, Truck, RotateCcw, ShieldCheck, ChevronRight } from "lucide-react"
import { toast } from "sonner"
import Nav from "@/components/Nav"
import ProductCard from "@/components/ProductCard"
import StockImage from "@/components/StockImage"
import Rating from "@/components/Rating"
import Accordion from "@/components/Accordion"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"

const variants = [
  { id: "gold", label: "18K Gold" },
  { id: "silver", label: "Sterling Silver" },
]

function ProductGallery({ product }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const main = product.images[activeIdx] || product.images[0]

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
      {/* Thumbnails (desktop) */}
      <div className="hidden sm:flex flex-col gap-3 flex-shrink-0 w-20">
        {product.images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`View image ${idx + 1}`}
            onClick={() => setActiveIdx(idx)}
            className={cn(
              "relative aspect-[4/5] overflow-hidden bg-ivory-200 border transition-colors",
              activeIdx === idx
                ? "border-espresso-800"
                : "border-transparent hover:border-taupe-300"
            )}
          >
            <StockImage
              id={`thumb-${product.id}-${idx}`}
              query={img.query}
              ratio={img.ratio}
              width="240"
              alt={img.alt}
              className="absolute inset-0"
              imgClassName="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 relative aspect-[4/5] overflow-hidden bg-ivory-200">
        <StockImage
          id={`main-${product.id}-${activeIdx}`}
          query={main.query}
          ratio={main.ratio}
          width="1200"
          alt={main.alt}
          eager
          className="absolute inset-0"
          imgClassName="w-full h-full object-cover"
        />
        {/* Mobile swipe dots */}
        <div className="sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {product.images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Image ${idx + 1}`}
              onClick={() => setActiveIdx(idx)}
              className={cn(
                "h-1 rounded-full transition-all",
                activeIdx === idx ? "w-6 bg-espresso-800" : "w-2 bg-taupe-300"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [variant, setVariant] = useState("gold")
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id])

  if (!product) {
    return (
      <>
        <Nav forceSolid />
        <main className="bg-ivory-100 pt-32 pb-32 text-center">
          <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">
            <h1 className="font-serif text-4xl text-espresso-800 mb-3">Piece not found</h1>
            <p className="text-taupe-500 mb-8">It may have sold out. Try our bestsellers.</p>
            <button onClick={() => navigate("/shop")} className="btn-primary">
              Shop all
            </button>
          </div>
        </main>
      </>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product.id, variant, quantity)
    toast.success(`${product.name} added to bag`)
  }

  const accordions = [
    {
      title: "Description",
      content: <p>{product.description}</p>,
    },
    {
      title: "Materials & Care",
      content: (
        <ul className="list-disc pl-4 space-y-1.5 marker:text-taupe-400">
          {product.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Shipping & Returns",
      content: (
        <ul className="list-disc pl-4 space-y-1.5 marker:text-taupe-400">
          {product.shipping.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      ),
    },
  ]

  return (
    <>
      <Nav forceSolid />
      <main className="bg-ivory-100 pt-20 sm:pt-24">
        {/* Breadcrumb */}
        <div className="border-b border-line">
          <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12 py-4">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-taupe-500"
            >
              <Link to="/" className="hover:text-espresso-800 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
              <Link to="/shop" className="hover:text-espresso-800 transition-colors">Shop</Link>
              <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
              <span className="text-espresso-800 truncate max-w-[200px]">
                {product.name}
              </span>
            </nav>
          </div>
        </div>

        {/* Product */}
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <ProductGallery product={product} />
            </div>

            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <div className="lg:sticky lg:top-28">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {product.isNew && (
                      <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium text-gold-500 mb-3">
                        New arrival
                      </span>
                    )}
                    <h1 className="font-serif text-espresso-800 text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.05] tracking-tight">
                      {product.name}
                    </h1>
                    <p className="mt-2 font-serif italic text-taupe-500 text-lg">
                      {product.subtitle}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Save to wishlist"
                    className="p-2 -mr-2 text-taupe-400 hover:text-gold-500 transition-colors flex-shrink-0"
                  >
                    <Heart className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                </div>

                <div className="mt-5 flex items-center gap-4">
                  <Rating
                    value={product.rating}
                    count={product.reviewCount}
                    size="sm"
                  />
                  <span className="text-[11px] text-taupe-500">
                    · {product.reviewCount} reviews
                  </span>
                </div>

                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-2xl font-medium text-espresso-800 tabular-nums">
                    {formatPrice(product.price)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-base text-taupe-400 line-through tabular-nums">
                      {formatPrice(product.oldPrice)}
                    </span>
                  )}
                </div>

                <p className="mt-7 text-sm sm:text-[15px] text-taupe-600 leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Variant selector */}
                <div className="mt-9">
                  <div className="flex items-center justify-between mb-3">
                    <p className="product-name text-[0.7rem]">Finish</p>
                    <p className="text-[11px] text-taupe-500">
                      {variants.find((v) => v.id === variant)?.label}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {variants.map((v) => {
                      const selected = variant === v.id
                      return (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setVariant(v.id)}
                          className={cn(
                            "px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-medium border transition-all",
                            selected
                              ? "bg-espresso-800 text-ivory border-espresso-800"
                              : "bg-transparent text-espresso-800 border-line hover:border-espresso-800"
                          )}
                        >
                          {v.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Quantity + Add to cart */}
                <div className="mt-8 flex items-stretch gap-3">
                  <div className="flex items-center border border-line">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-11 h-12 grid place-items-center text-espresso-800 hover:bg-ivory-200 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </button>
                    <span className="w-10 text-center text-sm tabular-nums">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-11 h-12 grid place-items-center text-espresso-800 hover:bg-ivory-200 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={handleAdd}
                    className="btn-primary flex-1"
                  >
                    Add to Bag · {formatPrice(product.price * quantity)}
                  </button>
                </div>

                {/* Trust strip */}
                <ul className="mt-8 grid grid-cols-3 gap-2 sm:gap-3 border-t border-line pt-6">
                  <li className="flex flex-col items-center text-center gap-1.5">
                    <Truck className="w-4 h-4 text-gold-500" strokeWidth={1.5} />
                    <span className="text-[10px] tracking-[0.18em] uppercase text-taupe-500">
                      Free Shipping
                    </span>
                  </li>
                  <li className="flex flex-col items-center text-center gap-1.5">
                    <RotateCcw className="w-4 h-4 text-gold-500" strokeWidth={1.5} />
                    <span className="text-[10px] tracking-[0.18em] uppercase text-taupe-500">
                      30-Day Returns
                    </span>
                  </li>
                  <li className="flex flex-col items-center text-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-gold-500" strokeWidth={1.5} />
                    <span className="text-[10px] tracking-[0.18em] uppercase text-taupe-500">
                      Hypoallergenic
                    </span>
                  </li>
                </ul>

                {/* Accordions */}
                <div className="mt-10">
                  <Accordion items={accordions} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="border-t border-line bg-ivory-200/40 py-20 sm:py-24">
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">
              <div className="text-center mb-12">
                <p className="eyebrow mb-3">Pairs well with</p>
                <h2 className="font-serif text-3xl sm:text-4xl text-espresso-800">
                  You may also love
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-12">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}

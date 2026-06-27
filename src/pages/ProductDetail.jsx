import { useEffect, useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ChevronLeft, Heart, Share2, ShoppingBag, Truck } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { ProductImage } from "@/components/ui/ProductImage"
import { Button } from "@/components/ui/Button"
import { StarRating } from "@/components/ui/StarRating"
import { Accordion } from "@/components/ui/Accordion"
import { QuantitySelector } from "@/components/ui/QuantitySelector"
import { ProductCard } from "@/components/shop/ProductCard"
import { useCart } from "@/context/CartContext"
import { useImageLoader } from "@/hooks/useImageLoader"
import { cn } from "@/lib/utils"

export default function ProductDetail() {
  const { productId } = useParams()
  const product = useMemo(() => getProductById(productId), [productId])
  const related = useMemo(() => getRelatedProducts(productId, 4), [productId])
  const { addItem } = useCart()
  const containerRef = useImageLoader()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedTone, setSelectedTone] = useState(product?.toneOptions[0] || "Gold")
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedImage(0)
    setQuantity(1)
    setSelectedTone(product?.toneOptions[0] || "Gold")
  }, [productId, product])

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-ivory pt-24 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Product Not Found</h1>
        <Link to="/shop" className="mt-4 text-xs uppercase tracking-[0.16em] text-gold underline-offset-4 hover:underline">
          Back to Shop
        </Link>
      </div>
    )
  }

  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.details.materials} ${product.details.care}` },
    { title: "Shipping & Returns", content: product.details.shipping },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-20 md:px-8 md:pt-28">
        <Link
          to="/shop"
          className="mb-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-warm-gray transition-colors hover:text-charcoal"
        >
          <ChevronLeft size={14} /> Back to Shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-4 md:flex-row">
            <div className="flex gap-3 overflow-x-auto md:flex-col md:overflow-visible">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "relative h-20 w-20 flex-shrink-0 overflow-hidden border bg-cream transition-all md:h-24 md:w-24",
                    selectedImage === index
                      ? "border-charcoal"
                      : "border-border hover:border-border-dark"
                  )}
                  aria-label={`View image ${index + 1}`}
                >
                  <ProductImage
                    product={product}
                    ratio="1x1"
                    width={200}
                    variant="card"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-cream">
              <ProductImage
                product={product}
                ratio="4x5"
                width={900}
                variant="gallery"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-warm-gray">{product.reviewCount} reviews</span>
            </div>

            <h1
              id={`${product.id}-title`}
              className="font-serif text-3xl uppercase tracking-[0.14em] text-charcoal md:text-4xl"
            >
              {product.name}
            </h1>
            <p className="mt-3 font-sans text-2xl font-light text-charcoal">${product.price}</p>

            <p className="mt-6 leading-relaxed text-warm-gray">{product.description}</p>

            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">Tone</span>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.toneOptions.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "h-11 rounded-full border px-6 text-xs font-medium uppercase tracking-wider transition-all",
                      selectedTone === tone
                        ? "border-charcoal bg-charcoal text-ivory"
                        : "border-border bg-transparent text-charcoal hover:border-charcoal"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">Quantity</span>
              <div className="mt-3">
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                fullWidth
                size="lg"
                variant="primary"
                onClick={() => addItem(product, quantity, selectedTone)}
                className="gap-2"
              >
                <ShoppingBag size={16} />
                Add to Cart — ${product.price * quantity}
              </Button>
              <Button size="lg" variant="outline" aria-label="Add to wishlist">
                <Heart size={18} />
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-warm-gray">
              <Truck size={14} className="text-gold" />
              Free worldwide shipping on orders over $50
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>

            <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
              <button
                type="button"
                className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-warm-gray transition-colors hover:text-charcoal"
              >
                <Share2 size={14} /> Share
              </button>
            </div>
          </div>
        </div>

        {/* Related */}
        <section className="mt-20 border-t border-border pt-16">
          <h2 className="mb-8 text-center font-serif text-2xl text-charcoal md:text-3xl">You May Also Like</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {related.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

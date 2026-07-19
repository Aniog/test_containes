import React, { useEffect, useMemo, useRef, useState } from "react"
import { ImageHelper } from "@strikingly/sdk"
import { Link, useParams } from "react-router-dom"
import { Minus, Plus, Star } from "lucide-react"
import AccordionItem from "@/components/product/AccordionItem"
import ProductCard from "@/components/common/ProductCard"
import Button from "@/components/ui/Button"
import { formatPrice, products } from "@/data/products"
import { getStrkImageUrl } from "@/lib/strkImage"
import strkImgConfig from "@/strk-img-config.json"

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [selectedImage, setSelectedImage] = useState("main")
  const [tone, setTone] = useState("Gold")
  const [quantity, setQuantity] = useState(1)
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [product.id, selectedImage])

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  const gallery = [
    {
      id: "main",
      label: "Studio",
      imgId: product.imageId,
      query: `[${product.descId}] [${product.titleId}]`,
    },
    {
      id: "worn",
      label: "Worn",
      imgId: product.hoverImageId,
      query: `[${product.titleId}] [${product.descId}]`,
    },
    {
      id: "gift",
      label: "Detail",
      imgId: product.imageId,
      query: `[${product.descId}] [${product.titleId}]`,
    },
  ]
  const activeImage = gallery.find((image) => image.id === selectedImage) || gallery[0]

  const handleAdd = () => {
    onAddToCart(product, quantity)
  }

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="px-5 py-10 sm:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 md:grid-cols-[92px_1fr]">
            <div className="order-2 flex gap-3 md:order-1 md:flex-col">
              {gallery.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImage(image.id)}
                  className={`aspect-square flex-1 overflow-hidden rounded-2xl border bg-velmora-pearl transition md:flex-none ${selectedImage === image.id ? "border-velmora-champagne" : "border-velmora-espresso/10"}`}
                  aria-label={`View ${image.label} image`}
                >
                  <img
                    alt={`${product.name} ${image.label}`}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`${image.imgId}-thumb`}
                    data-strk-img={image.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="180"
                    src={getStrkImageUrl(`${image.imgId}-thumb`)}
                  />
                </button>
              ))}
            </div>
            <div className="order-1 overflow-hidden rounded-[2rem] bg-velmora-pearl shadow-soft md:order-2">
              <img
                alt={product.name}
                className="aspect-[4/5] h-full w-full object-cover"
                data-strk-img-id={activeImage.imgId}
                data-strk-img={activeImage.query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src={getStrkImageUrl(activeImage.imgId)}
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-velmora-espresso/10 bg-velmora-porcelain p-6 text-velmora-espresso shadow-soft md:p-9">
            <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-clay transition hover:text-velmora-espresso">
              {product.category}
            </Link>
            <h1 id={product.titleId} className="mt-4 font-serif text-4xl font-semibold uppercase leading-tight tracking-[0.18em] text-velmora-espresso md:text-5xl">
              {product.name}
            </h1>
            <p id={product.descId} className="mt-5 text-base leading-8 text-velmora-taupe">
              {product.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 border-y border-velmora-espresso/10 py-5">
              <p className="font-serif text-4xl font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-2 text-sm text-velmora-taupe">
                <span className="flex text-velmora-champagne" aria-label={`${product.rating} star rating`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className={`h-4 w-4 ${index < Math.round(product.rating) ? "fill-current" : ""}`} />
                  ))}
                </span>
                <span>{product.rating} · {product.reviews} reviews</span>
              </div>
            </div>

            <div className="mt-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-clay">Tone</p>
              <div className="flex gap-3">
                {["Gold", "Silver"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${tone === option ? "border-velmora-espresso bg-velmora-espresso text-velmora-ivory" : "border-velmora-espresso/15 bg-velmora-ivory text-velmora-espresso hover:border-velmora-champagne"}`}
                  >
                    {option} Tone
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-clay">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-velmora-espresso/15 bg-velmora-ivory text-velmora-espresso">
                <button type="button" className="p-3" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center font-semibold">{quantity}</span>
                <button type="button" className="p-3" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button type="button" variant="accent" className="mt-8 w-full" onClick={handleAdd}>
              Add to Cart
            </Button>

            <div className="mt-7">
              <AccordionItem title="Description" defaultOpen>
                {product.longDescription}
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                {product.care}
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                {product.shipping}
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-velmora-clay">You may also like</p>
              <h2 className="font-serif text-4xl font-medium text-velmora-espresso md:text-5xl">Complete the glow</h2>
            </div>
            <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso underline decoration-velmora-champagne underline-offset-4 md:block">
              View all
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

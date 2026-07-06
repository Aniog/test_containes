import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { products } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageTag } from "@/components/ImageTag"
import { Price } from "@/components/Price"
import { ProductName } from "@/components/ProductName"
import { Stars } from "@/components/Stars"
import { useCart } from "@/context/CartContext"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-linen">
        <div className="relative aspect-[3/4]">
          <ImageTag
            id={`bestseller-${product.id}-img`}
            query={`[product-${product.id}-name]`}
            ratio="3x4"
            width={600}
            alt={product.name}
            aspectClass="absolute inset-0 h-full w-full"
            className={`transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}
          />
          <ImageTag
            id={`bestseller-${product.id}-alt`}
            query={`[product-${product.id}-name]`}
            ratio="3x4"
            width={600}
            alt={product.name}
            aspectClass="absolute inset-0 h-full w-full"
            className={`transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
          />
          {product.badge && (
            <Badge className="absolute left-3 top-3">{product.badge}</Badge>
          )}
        </div>
      </Link>

      <button
        onClick={() => addItem(product, product.variants[0], 1)}
        className="absolute bottom-3 left-3 right-3 flex translate-y-2 items-center justify-center gap-2 bg-white py-3 text-xs font-medium uppercase tracking-extra-wide text-espresso opacity-0 shadow-sm transition-all duration-300 hover:bg-espresso hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
        aria-label={`Add ${product.name} to cart`}
      >
        <ShoppingBag className="h-4 w-4" />
        Add to Cart
      </button>

      <div className="mt-4 text-center">
        <ProductName id={`product-${product.id}-name`}>{product.name}</ProductName>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <Stars rating={product.rating} />
          <span className="text-xs text-taupe">({product.reviewCount})</span>
        </div>
        <Price amount={product.price} className="mt-1.5 inline-block" />
      </div>
    </div>
  )
}

export function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-cream px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="font-sans text-xs font-medium uppercase tracking-extra-wide text-gold">
            Curated Favorites
          </p>
          <h2 className="mt-3 font-serif text-3xl font-normal text-espresso md:text-4xl">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link to="/shop">View All</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

import * as React from "react"
import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StarRating } from "@/components/ui/star-rating"
import { useCart } from "@/lib/cartContext"
import { PRODUCTS, formatPrice } from "@/data/products"

function ProductCard({ product }) {
  const [hovered, setHovered] = React.useState(false)
  const { addItem } = useCart()

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="relative block overflow-hidden bg-velmora-stone">
        <div className="aspect-[3/4] w-full">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            data-strk-img-id={product.imageId}
            data-strk-img={`[${product.titleId}] [${product.descId}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover secondary image placeholder */}
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            data-strk-img-id={product.hoverImageId}
            data-strk-img={`[${product.titleId}] gold jewelry detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className={`
              absolute inset-0 h-full w-full object-cover transition-opacity duration-500
              ${hovered ? "opacity-100" : "opacity-0"}
            `}
          />
        </div>

        {/* Quick add */}
        <div
          className={`
            absolute bottom-0 left-0 right-0 translate-y-full bg-velmora-white/95 p-3 backdrop-blur-sm
            transition-transform duration-300 group-hover:translate-y-0
          `}
        >
          <Button
            size="full"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product, product.variants[0])
            }}
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </Link>

      <div className="mt-4 text-center">
        <Link to={`/products/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-xs font-medium uppercase tracking-[0.2em] text-velmora-espresso transition-colors hover:text-velmora-gold"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">
          {product.description}
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating rating={Math.round(product.rating)} size={12} />
          <span className="text-[10px] text-velmora-muted">({product.reviewCount})</span>
        </div>
        <p className="mt-2 font-sans text-sm font-medium text-velmora-espresso">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  )
}

export default function Bestsellers() {
  const bestsellers = PRODUCTS.filter((p) => p.bestseller)

  return (
    <section className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-gold">
            Curated for You
          </span>
          <h2 className="mt-3 font-serif text-3xl font-medium md:text-4xl">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="secondary" asChild>
            <Link to="/shop">View All</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

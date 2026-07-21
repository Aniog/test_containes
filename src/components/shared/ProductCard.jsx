import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import StockImage from "@/components/shared/StockImage"
import RatingStars from "@/components/shared/RatingStars"

const ProductCard = ({ product, onAddToCart, compact = false }) => {
  const titleId = `product-${product.id}-name`
  const typeId = `product-${product.id}-type`
  const priceId = `product-${product.id}-price`
  const primaryVisualId = `product-${product.id}-primary-visual`
  const secondaryVisualId = `product-${product.id}-secondary-visual`

  return (
    <article className="group flex h-full flex-col">
      <div className="relative overflow-hidden rounded-3xl bg-champagne/40 shadow-soft">
        <Link to={`/product/${product.slug}`} className="block aspect-[4/5] overflow-hidden">
          <StockImage
            imageId={`${product.id}-primary-image`}
            query={`[${primaryVisualId}] [${typeId}] [${titleId}]`}
            ratio="3x4"
            width="900"
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <StockImage
            imageId={`${product.id}-secondary-image`}
            query={`[${secondaryVisualId}] [${typeId}] [${titleId}] [${priceId}]`}
            ratio="3x4"
            width="900"
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>

        <button
          type="button"
          onClick={() => onAddToCart(product, { tone: product.tones[0], quantity: 1 })}
          className="absolute bottom-4 left-4 right-4 rounded-full bg-velvet px-5 py-3 text-sm font-medium text-ivory opacity-100 shadow-card transition hover:bg-rosewood md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          Quick Add to Cart
        </button>
      </div>

      <div className="flex flex-1 flex-col justify-between px-1 pb-1 pt-5">
        <div>
          <p id={typeId} className="text-xs uppercase tracking-[0.28em] text-gold">
            {product.category}
          </p>
          <Link to={`/product/${product.slug}`}>
            <h3
              id={titleId}
              className="mt-3 font-serif text-xl uppercase tracking-luxe text-velvet transition group-hover:text-rosewood"
            >
              {product.name}
            </h3>
          </Link>
          <p className="mt-3 text-sm leading-6 text-velvet/72">{product.shortDescription}</p>
        </div>

        <div className="mt-5 space-y-4">
          {!compact ? <RatingStars rating={product.rating} reviews={product.reviews} /> : null}
          <div className="flex items-center justify-between gap-4 border-t border-velvet/10 pt-4">
            <div>
              <p id={primaryVisualId} className="sr-only">
                {product.imageHints.primary}
              </p>
              <p id={secondaryVisualId} className="sr-only">
                {product.imageHints.secondary}
              </p>
              <p id={priceId} className="text-sm text-velvet/60">
                {product.material}
              </p>
              <p className="mt-1 text-lg font-medium text-velvet">${product.price}</p>
            </div>
            <Link
              to={`/product/${product.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-velvet transition hover:text-rosewood"
            >
              View <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard

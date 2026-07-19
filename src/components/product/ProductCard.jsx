import { Link } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import Stars from "@/components/ui/Stars"

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden bg-cream aspect-[4/5]">
        <Link to={`/product/${product.id}`}>
          <img
            src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1 1%27/%3E"
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1 1%27/%3E"
            alt={product.name}
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.descId}] ${product.name} worn on model detail`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </Link>

        {/* Quick add to cart */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <button
            onClick={() => addItem(product, product.toneOptions[0], 1)}
            className="w-full bg-espresso/90 text-ivory text-[11px] uppercase tracking-[0.25em] py-4 hover:bg-espresso transition-colors duration-300 backdrop-blur-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-taupe mb-1.5">
          {product.type}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-lg uppercase tracking-[0.14em] text-espresso hover:text-gold transition-colors duration-300"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Stars rating={product.rating} size={12} />
          <span className="text-[11px] text-taupe">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-cocoa">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}

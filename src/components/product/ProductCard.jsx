import { Link } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import { Stars } from "@/components/ui/Stars"
import { formatPrice, resolveStrkImgUrl } from "@/lib/utils"

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden bg-sand aspect-[3x4]">
        <Link to={`/product/${product.id}`}>
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={resolveStrkImgUrl(product.imgId)}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            data-strk-img-id={product.imgIdAlt}
            data-strk-img={`[${product.descId}] ${product.subtitle} ${product.name} worn detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={resolveStrkImgUrl(product.imgIdAlt)}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </Link>
        <button
          onClick={() => addItem(product, { tone: product.tones[0] })}
          className="absolute bottom-0 inset-x-0 bg-espresso text-ivory text-[11px] uppercase tracking-[0.18em] py-3.5 translate-y-full group-hover:translate-y-0 transition-transform duration-400 hover:bg-gold"
        >
          Add to Cart
        </button>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-lg uppercase tracking-[0.12em] hover:text-gold transition-colors duration-300"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">
          {product.subtitle}
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Stars rating={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviews})</span>
        </div>
        <p className="font-serif text-lg mt-2">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}

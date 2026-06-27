import { useState } from "react"
import { Link } from "react-router-dom"
import { Star } from "lucide-react"
import { useCart } from "@/context/CartContext"

export default function ProductCard({ product }) {
  const [imgSrc, setImgSrc] = useState(product.image)
  const { addItem } = useCart()

  return (
    <div className="group bg-card border border-border/50 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[4/5] overflow-hidden relative">
          <img
            src={imgSrc}
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-500"
            onMouseEnter={() => setImgSrc(product.imageHover)}
            onMouseLeave={() => setImgSrc(product.image)}
          />
        </div>
      </Link>

      <div className="p-4 md:p-5">
        <Link to={`/product/${product.id}`}>
          <p className="font-serif text-xs md:text-sm uppercase tracking-[0.1em] font-semibold truncate">
            {product.name}
          </p>
        </Link>

        <div className="flex items-center gap-1 mt-1.5">
          <Star className="w-3 h-3 fill-gold-light text-gold-light" />
          <span className="text-[11px] text-muted-light">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <span className="text-sm font-medium">${product.price}</span>
          <button
            onClick={(e) => {
              e.preventDefault()
              addItem(product)
            }}
            className="text-[10px] uppercase tracking-[0.12em] font-medium text-gold border border-gold px-3 py-1.5 hover:bg-gold hover:text-white transition-colors opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
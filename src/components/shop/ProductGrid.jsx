import { Link } from "react-router-dom"
import { products } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { ShoppingBag } from "lucide-react"

export default function ProductGrid({ items }) {
  const { addItem } = useCart()

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {items.map((product) => (
        <div key={product.id} className="product-card group">
          <Link to={`/product/${product.id}`} className="block relative overflow-hidden rounded-lg bg-brand-warm">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-64 md:h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  addItem(product, product.variants[0])
                }}
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-brand-ink backdrop-blur hover:bg-white"
              >
                <ShoppingBag className="h-3.5 w-3.5" />
                Add to Cart
              </button>
            </div>
          </Link>
          <div className="mt-3">
            <p className="text-xs text-brand-subtle uppercase tracking-wider">{product.category}</p>
            <Link to={`/product/${product.id}`} className="block mt-1 font-serif text-base md:text-lg uppercase tracking-wide text-brand-ink hover:text-brand-accent">
              {product.name}
            </Link>
            <p className="mt-1 text-sm font-medium text-brand-ink">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

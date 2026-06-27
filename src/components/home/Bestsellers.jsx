import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag, Star } from "lucide-react"
import { products } from "@/data/products"
import { useCart } from "@/context/CartContext"

export default function Bestsellers() {
  const { addItem } = useCart()
  const bestsellers = products.filter((p) => p.isBestseller)

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-muted mb-3">Curated for You</p>
          <h2 className="text-3xl md:text-4xl text-charcoal font-semibold" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>
            Bestsellers
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} addItem={addItem} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-charcoal text-charcoal uppercase tracking-[0.2em] text-sm px-10 py-3.5 hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, addItem }) {
  const [imgError, setImgError] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, "18K Gold", 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] bg-hairline/30 overflow-hidden mb-3">
        <img
          src={imgError ? product.images[0] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
        {/* Second image overlay on hover */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            aria-hidden="true"
          />
        )}
        {/* Quick add button */}
        <button
          onClick={handleAdd}
          className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-charcoal p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 shadow-md hover:bg-white"
          aria-label={`Quick add ${product.name}`}
        >
          <ShoppingBag size={16} />
        </button>
      </div>
      <h3 className="text-product-name text-xs md:text-sm text-charcoal mb-1">{product.name}</h3>
      <div className="flex items-center gap-1 mb-1">
        <Star size={10} className="text-star fill-star" />
        <span className="text-xs text-muted">{product.rating}</span>
      </div>
      <p className="text-sm text-charcoal font-medium">${product.price}</p>
    </Link>
  )
}
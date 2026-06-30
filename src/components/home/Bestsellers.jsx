import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag, Star } from "lucide-react"
import { PRODUCTS } from "../../data/products"
import { useCart } from "../../context/CartContext"

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block aspect-[3/4] bg-brand-warm overflow-hidden relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            addItem(product, product.variants[0])
          }}
          className="absolute bottom-3 right-3 bg-brand-white/90 backdrop-blur-sm text-brand-dark p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-gold hover:text-brand-white shadow-md"
          aria-label={`Quick add ${product.name}`}
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </Link>

      {/* Info */}
      <div className="mt-3 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-brand-dark hover:text-brand-gold transition-colors duration-200">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
          <span className="text-xs font-sans text-brand-stone">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <p className="font-sans text-sm font-medium text-brand-dark mt-1">
          ${product.price}
        </p>
      </div>
    </div>
  )
}

export default function Bestsellers() {
  const bestsellers = PRODUCTS.slice(0, 5)

  return (
    <section className="py-16 lg:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-brand-gold text-xs font-sans uppercase tracking-[0.2em] mb-3">
            Editor's Pick
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark font-light tracking-[0.05em]">
            Bestsellers
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border-2 border-brand-dark text-brand-dark font-sans text-sm uppercase tracking-[0.15em] px-8 py-3 hover:bg-brand-dark hover:text-brand-white transition-all duration-300"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  )
}
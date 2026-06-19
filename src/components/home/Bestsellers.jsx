import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import products from '@/data/products'

export default function Bestsellers() {
  const { addItem } = useCart()

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-[11px] tracking-[0.12em] uppercase text-[#C69C6D] mb-3">
            Editor's Pick
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D2A24]">
            Bestsellers
          </h2>
          <div className="w-16 h-[1px] bg-[#C69C6D] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addItem} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-[#2D2A24] text-[#2D2A24] px-8 py-3 font-sans text-sm tracking-[0.08em] uppercase hover:bg-[#2D2A24] hover:text-[#F8F4EE] transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: product.variants[0],
    })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[#F0E9DF] overflow-hidden mb-3">
        <img
          src={hovered && product.hoverImage ? product.hoverImage : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#C69C6D] text-white font-sans text-[9px] tracking-[0.08em] uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAdd}
          className="absolute bottom-0 left-0 right-0 bg-[#2D2A24] text-[#F8F4EE] py-3 font-sans text-[10px] tracking-[0.08em] uppercase flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>

      <div className="px-0.5">
        <h3 className="font-serif text-xs md:text-sm font-semibold text-[#2D2A24] uppercase tracking-[0.1em] truncate">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mt-1">
          <Star size={11} className="text-[#C69C6D] fill-[#C69C6D]" />
          <span className="font-sans text-[10px] text-[#8C867C]">{product.rating}</span>
        </div>
        <p className="font-sans text-sm font-medium text-[#2D2A24] mt-1">
          ${product.price}
        </p>
      </div>
    </Link>
  )
}
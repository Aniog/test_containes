import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/lib/data'
import { useCart as useCartContext } from '@/context/CartContext'

const ProductCard = ({ product }) => {
  const { addItem } = useCartContext()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-[#2A2520]">
          <img
            data-strk-img-id={`bestseller-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className={`absolute bottom-0 left-0 right-0 bg-[#1A1714]/80 backdrop-blur-sm py-3 flex items-center justify-center transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C9A96E] hover:text-[#E0C992] transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <h3 id={product.titleId} className="text-sm text-[#F5F0E8] uppercase tracking-[0.15em] font-sans">{product.name}</h3>
        <p id={product.descId} className="text-xs text-[#8A8279] mt-0.5 line-clamp-1">{product.description}</p>
        <p className="text-sm text-[#C9A96E] mt-1 font-sans">${product.price}</p>
      </div>
    </div>
  )
}

const Bestsellers = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl text-[#F5F0E8] tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Bestsellers</h2>
          <div className="w-12 h-px bg-[#C9A96E] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/shop" className="inline-block border border-[#C9A96E] text-[#C9A96E] px-8 py-3 text-sm uppercase tracking-[0.15em] hover:bg-[#C9A96E] hover:text-[#1A1714] transition-all duration-300">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers

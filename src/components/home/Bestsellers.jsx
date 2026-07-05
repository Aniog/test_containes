import { useState } from 'react'
import { ShoppingBag, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-sans">Curated for You</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-50">Bestsellers</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold uppercase tracking-[0.2em] text-xs px-10 py-4 hover:bg-gold hover:text-velvet transition-all duration-300 rounded-sm"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem, openCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    openCart()
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-velvet-600 rounded-sm overflow-hidden mb-4">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
        />

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={handleAddToCart}
            className="w-full bg-velvet/90 backdrop-blur-sm text-velvet-50 text-xs uppercase tracking-wider py-3 rounded-sm flex items-center justify-center gap-2 hover:bg-gold hover:text-velvet transition-all duration-300"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>

        {/* Badge */}
        {product.price >= 80 && (
          <div className="absolute top-3 left-3 bg-gold/90 text-velvet text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm font-medium">
            Best Value
          </div>
        )}
      </div>

      <div className="flex items-start gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={cn('w-3 h-3', i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-velvet-400/40')} />
        ))}
      </div>

      <h3 className="font-serif text-xs uppercase tracking-widest text-velvet-50/90 group-hover:text-gold transition-colors">
        {product.name}
      </h3>
      <p className="text-gold text-sm mt-1.5 font-sans">${product.price}</p>
    </Link>
  )
}
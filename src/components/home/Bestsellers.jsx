import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { products } from '@/data/products'
import { productImages } from '@/data/images'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

export default function Bestsellers() {
  const { addItem } = useCart()
  const bestsellers = products.slice(0, 5)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">Bestsellers</h2>
          <p className="text-muted text-sm">Our most loved pieces, chosen by you.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} addItem={addItem} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, addItem }) {
  const images = productImages[product.id] || []

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] bg-background-alt overflow-hidden mb-3">
          <img
            src={images[0] || ''}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            src={images[1] || images[0] || ''}
            alt={`${product.name} detail`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.preventDefault()
                addItem(product, product.variants[0])
              }}
              className="w-full bg-foreground/90 backdrop-blur-sm text-white py-2.5 flex items-center justify-center gap-2 text-xs tracking-[0.1em] uppercase hover:bg-foreground transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <Link to={`/product/${product.id}`}>
        <h3 className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-foreground font-medium mb-1 truncate">
          {product.name}
        </h3>
      </Link>
      <div className="flex items-center gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${i < Math.round(product.rating) ? 'fill-accent text-accent' : 'text-border'}`}
          />
        ))}
        <span className="text-[10px] text-muted ml-1">({product.reviews})</span>
      </div>
      <p className="text-sm font-medium text-foreground">{formatPrice(product.price)}</p>
    </div>
  )
}

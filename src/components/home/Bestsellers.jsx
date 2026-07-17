import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchProducts } from '@/api/products'
import { useCart } from '@/api/cart'
import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

export default function Bestsellers() {
  const [products, setProducts] = useState([])
  const { addItem } = useCart()

  useEffect(() => {
    fetchProducts().then(({ data }) => {
      setProducts(data.filter(p => p.data.bestseller).slice(0, 5))
    })
  }, [])

  return (
    <section className="py-32 px-6 md:px-12 bg-background">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="text-[11px] uppercase tracking-[0.3em] opacity-60 mb-4 block">Selection</span>
          <h2 className="text-4xl font-serif">Bestsellers</h2>
        </div>
        <Link to="/shop" className="text-[11px] uppercase tracking-[0.2em] underline underline-offset-8 decoration-border hover:decoration-foreground transition-all">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {products.map((product, idx) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-4">
              <Link to={`/product/${product.id}`}>
                <img
                  data-strk-img-id={`best-${product.id}`}
                  data-strk-img={`[product-${product.id}-title] jewelry gold`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={product.data.name}
                />
              </Link>
              <button 
                onClick={() => addItem(product)}
                className="absolute bottom-0 left-0 right-0 bg-background/90 text-[10px] uppercase tracking-[0.2em] font-semibold py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Quick Add
              </button>
            </div>
            <Link to={`/product/${product.id}`} className="block">
              <h3 id={`product-${product.id}-title`} className="text-[11px] uppercase tracking-widest font-medium mb-1 truncate">
                {product.data.name}
              </h3>
              <p className="font-serif text-lg opacity-80">${product.data.price}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartStore } from '@/lib/store'
import { Plus, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

export const seedProducts = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    price: 42,
    category: "Earrings",
    description: "Gold ear cuff with crystal accent.",
    imgId: "prod-vivid-aura",
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    price: 68,
    category: "Necklaces",
    description: "Multicolor floral crystal necklace.",
    imgId: "prod-majestic-flora",
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    price: 38,
    category: "Earrings",
    description: "Chunky gold dome huggie earrings.",
    imgId: "prod-golden-sphere",
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    price: 54,
    category: "Earrings",
    description: "Textured gold filigree drop earrings.",
    imgId: "prod-amber-lace",
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    price: 95,
    category: "Sets",
    description: "Gift-boxed earring + necklace set.",
    imgId: "prod-royal-heirloom",
  }
]

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-[#F5F5F3]">
        <img
          data-strk-img-id={`${product.imgId}-main`}
          data-strk-img={`[prod-title-${product.id}] gold jewelry portrait elegant`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110",
            isHovered ? "opacity-0" : "opacity-100"
          )}
        />
        <img
          data-strk-img-id={`${product.imgId}-hover`}
          data-strk-img={`[prod-title-${product.id}] gold jewelry lifestyle close-up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} alternate view`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110",
            isHovered ? "opacity-100 scale-105" : "opacity-0"
          )}
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-base/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <button 
              onClick={(e) => {
                e.preventDefault()
                addToCart(product)
              }}
              className="w-full bg-white text-base py-4 text-[10px] uppercase tracking-widest font-medium hover:bg-base hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Plus className="w-3 h-3" />
              <span>Quick Add</span>
            </button>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-6 text-center space-y-2">
        <h3 id={`prod-title-${product.id}`} className="text-xs uppercase tracking-widest font-serif font-semibold">
          {product.name}
        </h3>
        <p className="text-xs text-base/40 tracking-widest uppercase">${product.price}</p>
      </div>
    </div>
  )
}

// Utility class since I can't import cn if not in lib
const cn = (...classes) => classes.filter(Boolean).join(' ')

const Bestsellers = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif">The Bestsellers</h2>
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-40">Essentials for your permanent rotation</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 lg:gap-x-8">
          {seedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/shop" 
            className="text-xs uppercase tracking-[0.3em] font-medium border-b border-base/20 pb-2 hover:border-base transition-all duration-300"
          >
            Explore All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers

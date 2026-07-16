import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from './ProductCard'
import useScrollReveal from '@/hooks/useScrollReveal'

export default function Bestsellers() {
  const sectionRef = useScrollReveal([])

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="section-subtitle" data-reveal>Curated for You</p>
            <h2 className="section-title mt-2" data-reveal>Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-midnight-700 hover:text-midnight-950 font-sans transition-colors group"
          >
            View All
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, i) => (
            <div key={product.id} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
              <ProductCard product={product} priority={i < 2} />
            </div>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/shop"
            className="btn-outline inline-flex items-center gap-2"
          >
            View All Products
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
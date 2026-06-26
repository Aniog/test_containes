import { ArrowRight } from 'lucide-react'

export default function ProductCard({ product, image }) {
  return (
    <article className="group bg-am-surface border border-white/10 rounded-2xl overflow-hidden hover:border-am-gold/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-[4/3] bg-am-bg overflow-hidden">
        {image}
      </div>
      <div className="p-6 md:p-8">
        <h3
          id={product.titleId}
          className="text-xl md:text-2xl font-bold text-am-text mb-2"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="text-am-muted text-sm md:text-base mb-5 leading-relaxed">
          {product.description}
        </p>
        <ul className="space-y-2 mb-6">
          {product.specs.map((spec) => (
            <li
              key={spec}
              className="flex items-center text-sm text-am-text/90"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-am-gold mr-3" />
              {spec}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center text-sm font-semibold text-am-gold hover:text-am-gold-hover"
        >
          Request details
          <ArrowRight className="ml-1 w-4 h-4" />
        </a>
      </div>
    </article>
  )
}

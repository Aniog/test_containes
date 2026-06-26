import { ArrowRight } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <article className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          alt={product.title}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [products-heading]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <h3 id={product.titleId} className="text-xl font-bold text-slate-900 mb-2">
          {product.title}
        </h3>
        <p id={product.descId} className="text-slate-600 leading-relaxed mb-5 flex-1">
          {product.description}
        </p>

        <ul className="space-y-2 mb-6">
          {product.specs.map((spec, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              {spec}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition"
        >
          Inquire now
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </article>
  )
}

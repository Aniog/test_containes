import { ChevronRight } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <article className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          alt={product.title}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [products-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 id={product.titleId} className="text-lg font-bold text-text-primary mb-2">
          {product.title}
        </h3>
        <p id={product.descId} className="text-sm text-text-secondary leading-relaxed mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand bg-brand/10 px-3 py-1 rounded-full">
            {product.category}
          </span>
          <button className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark transition-colors">
            Details
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

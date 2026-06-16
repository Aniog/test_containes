import { ArrowRight, CheckCircle2 } from 'lucide-react'

const ProductCard = ({ product }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10">
    <div className="relative h-56 overflow-hidden bg-slate-900">
      <img
        alt={product.title}
        className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
        data-strk-img-id={product.imageId}
        data-strk-img={`[${product.descId}] [${product.titleId}] [products-title]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="700"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      <span className="absolute left-5 top-5 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-widest text-slate-950">
        {product.badge}
      </span>
    </div>
    <div className="flex flex-1 flex-col p-6">
      <h3 id={product.titleId} className="text-2xl font-bold tracking-tight text-slate-950">
        {product.title}
      </h3>
      <p id={product.descId} className="mt-3 leading-7 text-slate-600">
        {product.description}
      </p>
      <ul className="mt-6 space-y-3 text-sm font-medium text-slate-700">
        {product.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-amber-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-950 transition hover:text-amber-700"
      >
        Request details
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  </article>
)

export default ProductCard

import { Check, Ruler, Weight, Zap, Settings } from 'lucide-react'

export default function ProductCard({ product, reverse = false }) {
  return (
    <div id={product.id} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      {/* Image */}
      <div className={`order-1 ${reverse ? 'lg:order-2' : ''}`}>
        <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden shadow-lg">
          <img
            data-strk-img-id={product.imageId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className={`order-2 ${reverse ? 'lg:order-1' : ''}`}>
        <span className="text-sm font-medium text-amber-600 mb-2 block">{product.subtitle}</span>
        <h2 id={product.titleId} className="text-3xl font-bold text-slate-900 mb-4">{product.name}</h2>
        <p id={product.descId} className="text-slate-600 leading-relaxed mb-6">{product.description}</p>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <Ruler className="w-5 h-5 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500">Max Thickness</p>
              <p className="font-semibold text-slate-900">{product.specs.maxThickness}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <Settings className="w-5 h-5 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500">Max Length</p>
              <p className="font-semibold text-slate-900">{product.specs.maxLength}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <Zap className="w-5 h-5 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500">Power</p>
              <p className="font-semibold text-slate-900">{product.specs.power}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
            <Weight className="w-5 h-5 text-slate-400" />
            <div>
              <p className="text-xs text-slate-500">Weight</p>
              <p className="font-semibold text-slate-900">{product.specs.weight}</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-slate-700">
              <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
        >
          Request Quote
        </a>
      </div>
    </div>
  )
}

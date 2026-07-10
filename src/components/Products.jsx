import { ArrowRight, Check } from 'lucide-react'

const products = [
  {
    id: 'df-2500',
    name: 'Double Folding Machine DF-2500',
    subtitle: 'Flagship Model',
    description: 'Our premium double folding machine delivers exceptional precision for high-volume sheet metal fabrication. Ideal for industrial manufacturing environments.',
    specs: ['2500mm working length', '6mm mild steel capacity', 'CNC controlled back gauge', 'Quick-change tooling system'],
    imageQuery: 'double folding machine industrial CNC sheet metal fabrication',
    featured: true,
  },
  {
    id: 'df-1500',
    name: 'Double Folder DF-1500',
    subtitle: 'Mid-Range Workhorse',
    description: 'Versatile double folder designed for workshops requiring reliable performance with a compact footprint.',
    specs: ['1500mm working length', '4mm mild steel capacity', 'Manual or CNC options', 'Energy-efficient hydraulics'],
    imageQuery: 'double folder sheet metal workshop machine compact',
    featured: false,
  },
  {
    id: 'smf-3000',
    name: 'Sheet Metal Folder SMF-3000',
    subtitle: 'Heavy Duty',
    description: 'Built for demanding applications, this sheet metal folder handles wide panels with ease and exceptional repeatability.',
    specs: ['3000mm working length', '8mm mild steel capacity', 'Automatic angle correction', 'Heavy-duty frame construction'],
    imageQuery: 'sheet metal folder heavy duty industrial wide panel bending',
    featured: false,
  },
  {
    id: 'mf-1200',
    name: 'Metal Folder MF-1200',
    subtitle: 'Compact Series',
    description: 'Perfect entry-level metal folder machine for small to medium workshops. Easy to operate with minimal training.',
    specs: ['1200mm working length', '3mm mild steel capacity', 'Manual operation', 'Foot pedal control'],
    imageQuery: 'metal folder machine compact workshop entry level',
    featured: false,
  },
  {
    id: 'mfm-2000',
    name: 'Metal Folding Machine MFM-2000',
    subtitle: 'Professional Series',
    description: 'Advanced metal folding machine with integrated CNC control for precise, repeatable bends in production environments.',
    specs: ['2000mm working length', '5mm mild steel capacity', 'Full CNC control', 'Automatic crowning'],
    imageQuery: 'metal folding machine CNC professional production precision',
    featured: false,
  },
]

const Products = () => {
  const featured = products.find(p => p.featured)
  const otherProducts = products.filter(p => !p.featured)

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent-600 font-semibold text-sm tracking-widest uppercase">Our Range</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 mt-3">
            Complete Product Line
          </h2>
          <p className="text-brand-500 text-lg mt-4 max-w-2xl mx-auto">
            From compact metal folders to industrial-grade double folding machines, 
            we have the right solution for every fabrication need.
          </p>
        </div>

        {/* Featured Product */}
        {featured && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-brand-50 to-steel-50 rounded-2xl overflow-hidden border border-brand-100">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <img
                    data-strk-img-id={`product-${featured.id}-img-x4k2m9`}
                    data-strk-img={`[product-${featured.id}-name] [product-${featured.id}-desc]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={featured.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                    Featured
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-accent-600 font-medium text-sm">{featured.subtitle}</span>
                  <h3 id={`product-${featured.id}-name`} className="text-2xl lg:text-3xl font-bold text-brand-900 mt-2">
                    {featured.name}
                  </h3>
                  <p id={`product-${featured.id}-desc`} className="text-brand-600 mt-4 leading-relaxed">
                    {featured.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {featured.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-3 text-brand-700">
                        <div className="w-5 h-5 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-accent-600" />
                        </div>
                        <span className="text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-brand-900 hover:bg-brand-800 text-white px-6 py-3 rounded-lg font-semibold text-sm mt-8 transition-all self-start hover:shadow-lg"
                  >
                    Request Specifications
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-brand-100 hover:border-brand-200 overflow-hidden hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  data-strk-img-id={`product-${product.id}-img-r3j7n5`}
                  data-strk-img={`[product-${product.id}-name] [product-${product.id}-desc]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <span className="text-accent-600 text-xs font-semibold tracking-wider uppercase">{product.subtitle}</span>
                <h3 id={`product-${product.id}-name`} className="text-lg font-bold text-brand-900 mt-1.5 leading-snug">
                  {product.name}
                </h3>
                <p id={`product-${product.id}-desc`} className="text-brand-500 text-sm mt-2 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-4 pt-4 border-t border-brand-50">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-accent-600 hover:text-accent-700 font-semibold text-sm transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

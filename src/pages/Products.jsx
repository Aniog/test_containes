import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products, categories } from '@/data/products'
import { ChevronRight, Search, ArrowRight, Check } from 'lucide-react'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Page Header */}
      <section className="bg-brand-950 pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-brand-400 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Products</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Machine Range
          </h1>
          <p className="text-brand-300 text-lg max-w-2xl">
            Explore our complete lineup of double folding machines, sheet metal folders, and metal folding solutions designed for every production need.
          </p>
        </div>
      </section>

      {/* Filters + Products */}
      <section className="py-12 md:py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-brand-900 text-white shadow-md'
                      : 'bg-white text-steel-600 border border-steel-200 hover:border-brand-300 hover:text-brand-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-steel-400" />
              <input
                type="text"
                placeholder="Search machines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-steel-200 text-brand-900 text-sm placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
              />
            </div>
          </div>

          {/* Products Count */}
          <p className="text-steel-500 text-sm mb-6">
            Showing {filtered.length} {filtered.length === 1 ? 'machine' : 'machines'}
          </p>

          {/* Product Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-steel-200 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-900/5"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="lg:w-2/5 aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-brand-100 to-steel-100 relative overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-14 h-14 rounded-full bg-brand-200/50 flex items-center justify-center mx-auto mb-2">
                            <span className="text-brand-600 text-lg font-bold">AM</span>
                          </div>
                          <span className="text-brand-500 text-xs font-medium">{product.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 lg:p-8 flex flex-col">
                      <div className="text-xs text-accent font-semibold tracking-wider uppercase mb-2">
                        {product.category}
                      </div>
                      <h3 className="text-xl font-semibold text-brand-900 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-steel-500 leading-relaxed mb-5">
                        {product.description}
                      </p>

                      {/* Key Specs */}
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        <div className="bg-steel-50 rounded-lg p-3">
                          <span className="text-xs text-steel-400 uppercase tracking-wider">Length</span>
                          <p className="text-sm font-semibold text-brand-800 mt-0.5">{product.specs.workingLength}</p>
                        </div>
                        <div className="bg-steel-50 rounded-lg p-3">
                          <span className="text-xs text-steel-400 uppercase tracking-wider">Capacity</span>
                          <p className="text-sm font-semibold text-brand-800 mt-0.5">{product.specs.maxThickness}</p>
                        </div>
                        <div className="bg-steel-50 rounded-lg p-3">
                          <span className="text-xs text-steel-400 uppercase tracking-wider">Angle</span>
                          <p className="text-sm font-semibold text-brand-800 mt-0.5">{product.specs.foldingAngle}</p>
                        </div>
                        <div className="bg-steel-50 rounded-lg p-3">
                          <span className="text-xs text-steel-400 uppercase tracking-wider">Power</span>
                          <p className="text-sm font-semibold text-brand-800 mt-0.5">{product.specs.power}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-5">
                        <h4 className="text-xs font-semibold text-steel-500 uppercase tracking-wider mb-2">Key Features</h4>
                        <ul className="space-y-1.5">
                          {product.features.slice(0, 3).map((feat, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-steel-600">
                              <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:text-accent-dark transition-colors"
                        >
                          Request Details
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-steel-400 text-lg">No machines found matching your criteria.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchTerm('') }}
                className="mt-4 text-accent font-medium hover:text-accent-dark transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

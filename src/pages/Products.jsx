import React from 'react'
import { Link } from 'react-router-dom'
import { Hammer, ArrowUpRight } from 'lucide-react'

const Products = () => {
  const products = [
    {
      id: 'df-100',
      name: 'Double Folder DF-100',
      category: 'Double Folding Machine',
      specs: ['Up to 6mm thickness', 'Dual-side synchronized folding', '4000mm max length'],
      tag: 'Bestseller'
    },
    {
      id: 'smf-4x4',
      name: 'Artitect SM-Folder 4x4',
      category: 'Sheet Metal Folder',
      specs: ['High-speed automation', '0-180 degree folding range', 'Safety laser sensors'],
      tag: 'New'
    },
    {
      id: 'm-series-v',
      name: 'Industrial M-Series V6',
      category: 'Metal Folder Machine',
      specs: ['Heavy-duty construction', 'Deep-box folding capability', 'Smart CNC control'],
      tag: 'High Performance'
    },
    {
      id: 'compact-f',
      name: 'Compact-Folder C-80',
      category: 'Metal Folding Machine',
      specs: ['Space-saving design', 'Easy setup & operation', 'Energy efficient'],
      tag: 'Compact'
    }
  ]

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 uppercase tracking-tighter">Product Catalog</h1>
          <p className="text-slate-600 font-light max-w-2xl">
            Reliable and high-performance metal folding machines for every industrial scale. Explore our technical specifications below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col sm:flex-row group hover:shadow-2xl transition-all duration-700">
              <div className="w-full sm:w-2/5 relative h-64 sm:h-auto overflow-hidden">
                <img 
                  data-strk-img-id={`prod-img-${product.id}`}
                  data-strk-img={`[prod-title-${product.id}] [prod-cat-${product.id}] metal folding machine`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {product.tag}
                </div>
              </div>
              <div className="w-full sm:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <span id={`prod-cat-${product.id}`} className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">{product.category}</span>
                  <h2 id={`prod-title-${product.id}`} className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-slate-700 transition-colors uppercase tracking-tight">{product.name}</h2>
                  <ul className="space-y-3 mb-8">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
                  Technical Data <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Request */}
        <div className="mt-24 p-12 bg-white rounded-3xl border-2 border-dashed border-slate-200 text-center">
          <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Hammer className="h-8 w-8 text-slate-900" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Need a Custom Configuration?</h2>
          <p className="text-slate-500 font-light mb-8 max-w-xl mx-auto">
            We specialize in designing machines tailored to your unique sheet metal fabrication requirements. Contact our engineering team for a custom quote.
          </p>
          <Link to="/#contact" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all">
            Consult our Engineers
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Products

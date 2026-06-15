import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const products = [
  {
    id: 'double-folder',
    name: 'ProFold Double Folder',
    category: 'Double Folding Machine',
    description: 'The flagship of our line. Featuring dual-hinge technology for simultaneous top and bottom folding without sheet flipping.',
    features: ['Up to 4mm Steel Capacity', '100% Automatic Calibration', 'High-Speed Servo Drives']
  },
  {
    id: 'sheet-folder-xl',
    name: 'Atlas Sheet Metal Folder',
    category: 'Sheet Metal Folding Machine',
    description: 'Designed for heavy-duty industrial applications. Extremely rigid frame for maximum accuracy over long spans.',
    features: ['6-Meter Work Length', 'Touchscreen CNC Control', 'Multi-Zone Pneumatic Clamping']
  },
  {
    id: 'compact-folder',
    name: 'Artitect Compact',
    category: 'Metal Folder Machine',
    description: 'Precision folding in a space-saving design. Ideal for architectural trim and custom fabrication shops.',
    features: ['Small Footprint', 'Precision Ground Blades', 'Easy One-Man Operation']
  },
  {
    id: 'metal-folder-series',
    name: 'S-Series Metal Folding Machine',
    category: 'Metal Folding Machine',
    description: 'Versatile and user-friendly, the S-Series offers the best balance of price and performance for mid-sized workshops.',
    features: ['Versatile Tooling Options', 'Energy Efficient Motors', 'Quick Change Blade System']
  }
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-gray-50 min-h-screen">
      {/* Product Hero */}
      <section className="bg-[#1a1a1a] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-hero-title" className="text-4xl md:text-6xl font-bold mb-6 italic">Precision Portfolio</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light tracking-wide uppercase">
            Our range of high-performance folding solutions engineered for modern manufacturing.
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
              >
                {/* Image Placeholder */}
                <div className="w-full md:w-1/2 relative group overflow-hidden bg-white shadow-2xl">
                  <img
                    alt={product.name}
                    data-strk-img-id={`product-img-${product.id}`}
                    data-strk-img={`[prod-${product.id}-cat] [prod-${product.id}-name] metal machinery industrial`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <span id={`prod-${product.id}-cat`} className="text-[#d4af37] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                    {product.category}
                  </span>
                  <h2 id={`prod-${product.id}-name`} className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1a1a]">
                    {product.name}
                  </h2>
                  <p id={`prod-${product.id}-desc`} className="text-gray-600 text-lg mb-8 leading-relaxed font-light">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3 text-gray-700 font-medium tracking-wide text-sm uppercase">
                        <CheckCircle2 className="h-5 w-5 text-[#d4af37]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="flex items-center space-x-2 text-[#1a1a1a] font-bold uppercase tracking-[0.2em] group border-b-2 border-[#d4af37] pb-2 text-sm hover:text-[#d4af37] transition-all">
                    <span>Technical Specifications</span>
                    <ArrowRight className="h-4 w-4 group-hover:ml-2 transition-all" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center italic">
          <p className="text-2xl md:text-3xl text-[#1a1a1a] font-light leading-relaxed">
            "Artitect Machinery's commitment to precision has transformed our production line efficiency by over 40%."
          </p>
          <div className="mt-8 flex flex-col items-center">
            <div className="w-12 h-1 bg-[#d4af37] mb-4" />
            <span className="font-bold tracking-widest uppercase text-sm">Industrial Manufacturing Journal</span>
          </div>
        </div>
      </section>
    </div>
  )
}

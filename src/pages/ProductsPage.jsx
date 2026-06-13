import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'Our flagship double folding machine delivers unmatched precision for complex metal profiles. Featuring dual-action folding heads and programmable controls, this machine handles high-volume production with consistent accuracy.',
    features: [
      'Dual-action folding heads for complex profiles',
      'Programmable CNC controls',
      'High-speed operation up to 20 bends/min',
      'Heavy-duty steel frame construction',
      'Automatic angle compensation',
    ],
    specs: {
      maxThickness: '6mm',
      maxLength: '3200mm',
      power: '15kW',
      weight: '4500kg',
    },
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Compact yet powerful, the double folder is designed for workshops that need versatility without sacrificing floor space. Perfect for medium-scale production runs with quick changeover between jobs.',
    features: [
      'Space-efficient compact design',
      'Quick-change tooling system',
      'Manual and semi-auto modes',
      'Precision back gauge system',
      'Easy maintenance access',
    ],
    specs: {
      maxThickness: '4mm',
      maxLength: '2500mm',
      power: '7.5kW',
      weight: '2800kg',
    },
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Engineered specifically for sheet metal applications, this folder delivers clean, precise bends across a wide range of materials including steel, aluminum, and stainless steel.',
    features: [
      'Optimized for sheet metal work',
      'Multi-material compatibility',
      'Digital angle display',
      'Adjustable clamping pressure',
      'Safety interlock system',
    ],
    specs: {
      maxThickness: '3mm',
      maxLength: '3000mm',
      power: '5.5kW',
      weight: '1800kg',
    },
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'The heavy-duty sheet metal folding machine combines power and precision for demanding industrial applications. Built for continuous operation in manufacturing environments.',
    features: [
      'Industrial-grade construction',
      'Continuous duty cycle',
      'Advanced hydraulic system',
      'Touchscreen control panel',
      'Remote diagnostics capable',
    ],
    specs: {
      maxThickness: '8mm',
      maxLength: '4000mm',
      power: '22kW',
      weight: '6200kg',
    },
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'A versatile all-rounder, the metal folder handles a wide variety of metal types and thicknesses. Ideal for job shops and fabrication centers that process diverse materials.',
    features: [
      'Multi-purpose folding capability',
      'Wide material compatibility',
      'Adjustable bending speed',
      'Ergonomic operator controls',
      'Integrated material support',
    ],
    specs: {
      maxThickness: '5mm',
      maxLength: '2500mm',
      power: '11kW',
      weight: '3200kg',
    },
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'The metal folder machine offers exceptional value for growing businesses. Combining reliability with modern features, it delivers professional results at an accessible price point.',
    features: [
      'Cost-effective solution',
      'Modern control interface',
      'Reliable mechanical design',
      'Low maintenance requirements',
      'Comprehensive warranty',
    ],
    specs: {
      maxThickness: '4mm',
      maxLength: '2000mm',
      power: '7.5kW',
      weight: '2200kg',
    },
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Our premium metal folding machine represents the pinnacle of folding technology. With advanced automation and precision engineering, it sets the standard for industrial metal forming.',
    features: [
      'Fully automated operation',
      'Laser angle measurement',
      'Self-calibrating system',
      'Production data logging',
      'Industry 4.0 ready',
    ],
    specs: {
      maxThickness: '10mm',
      maxLength: '4000mm',
      power: '30kW',
      weight: '8500kg',
    },
  },
]

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Our <span className="text-amber-500">Products</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Explore our complete range of metal folding machines, engineered for precision, 
              durability, and peak performance in any industrial setting.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } lg:flex`}
              >
                {/* Image Placeholder */}
                <div className="lg:w-2/5 bg-slate-100 flex items-center justify-center min-h-[280px]">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-500 uppercase tracking-wider">{product.title}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-6 lg:p-10">
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                    {product.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specs */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                      Specifications
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <span className="text-xs text-slate-500 block">Max Thickness</span>
                        <span className="text-lg font-semibold text-slate-900">{product.specs.maxThickness}</span>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <span className="text-xs text-slate-500 block">Max Length</span>
                        <span className="text-lg font-semibold text-slate-900">{product.specs.maxLength}</span>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <span className="text-xs text-slate-500 block">Power</span>
                        <span className="text-lg font-semibold text-slate-900">{product.specs.power}</span>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <span className="text-xs text-slate-500 block">Weight</span>
                        <span className="text-lg font-semibold text-slate-900">{product.specs.weight}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Need Help Choosing the Right Machine?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Our technical team can help you select the perfect folding machine for your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl"
          >
            Contact Our Experts
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

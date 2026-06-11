import { useEffect, useRef } from 'react'
import { ArrowRight, Check, Ruler, Weight, Zap, Settings } from 'lucide-react'
import ProductCard from '../components/products/ProductCard.jsx'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    subtitle: 'AM-DF Series',
    description: 'Our flagship double folding machine delivers exceptional precision for complex sheet metal operations. The dual-action folding mechanism ensures consistent, accurate bends across a wide range of materials and thicknesses.',
    imageId: 'product-double-folding-machine-main-x1y2z3',
    titleId: 'product-double-folding-machine-title',
    descId: 'product-double-folding-machine-desc',
    specs: {
      maxThickness: '4mm',
      maxLength: '3200mm',
      power: '7.5 kW',
      weight: '2800 kg',
    },
    features: [
      'Dual-action folding mechanism',
      'CNC-controlled precision',
      'Quick-change tooling system',
      'Digital angle display',
      'Heavy-duty steel frame',
      'Safety interlock system',
    ],
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    subtitle: 'AM-DF Compact Series',
    description: 'A compact yet powerful double folder designed for workshops with space constraints. Delivers the same precision folding quality in a smaller footprint, perfect for small to medium fabrication shops.',
    imageId: 'product-double-folder-main-a4b5c6',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
    specs: {
      maxThickness: '3mm',
      maxLength: '2000mm',
      power: '5.5 kW',
      weight: '1800 kg',
    },
    features: [
      'Compact footprint design',
      'Manual and auto modes',
      'Adjustable folding speed',
      'Precision back gauge',
      'Ergonomic controls',
      'Low maintenance design',
    ],
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    subtitle: 'AM-SMF Series',
    description: 'Versatile sheet metal folder engineered for high-volume production environments. Handles a wide range of sheet metal types including steel, aluminum, and stainless steel with consistent quality.',
    imageId: 'product-sheet-metal-folder-main-d7e8f9',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
    specs: {
      maxThickness: '6mm',
      maxLength: '4000mm',
      power: '11 kW',
      weight: '3500 kg',
    },
    features: [
      'Multi-material compatibility',
      'Hydraulic clamping system',
      'Programmable bend sequences',
      'Automatic angle compensation',
      'Touch screen interface',
      'Remote diagnostics capable',
    ],
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    subtitle: 'AM-SFM Pro Series',
    description: 'Professional-grade sheet metal folding machine built for demanding industrial applications. Features advanced control systems and robust construction for years of reliable service.',
    imageId: 'product-sheet-metal-folding-machine-main-g1h2i3',
    titleId: 'product-sheet-metal-folding-machine-title',
    descId: 'product-sheet-metal-folding-machine-desc',
    specs: {
      maxThickness: '8mm',
      maxLength: '6000mm',
      power: '15 kW',
      weight: '5200 kg',
    },
    features: [
      'Industrial-grade construction',
      'Advanced CNC controls',
      'Multi-axis folding capability',
      'Automatic tool recognition',
      'Production counting system',
      'Integrated safety systems',
    ],
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    subtitle: 'AM-MF Series',
    description: 'Reliable metal folder designed for everyday fabrication tasks. Simple operation combined with robust engineering makes this an ideal choice for general metalworking applications.',
    imageId: 'product-metal-folder-main-j4k5l6',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
    specs: {
      maxThickness: '3mm',
      maxLength: '2500mm',
      power: '4 kW',
      weight: '1500 kg',
    },
    features: [
      'Simple operation',
      'Manual folding beam',
      'Adjustable clamping pressure',
      'Solid cast iron base',
      'Easy blade replacement',
      'Affordable maintenance',
    ],
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    subtitle: 'AM-MFM Series',
    description: 'Advanced metal folder machine combining traditional folding principles with modern automation. Ideal for shops looking to increase productivity without sacrificing quality.',
    imageId: 'product-metal-folder-machine-main-m7n8o9',
    titleId: 'product-metal-folder-machine-title',
    descId: 'product-metal-folder-machine-desc',
    specs: {
      maxThickness: '5mm',
      maxLength: '3000mm',
      power: '9 kW',
      weight: '2600 kg',
    },
    features: [
      'Semi-automatic operation',
      'Programmable memory',
      'Foot pedal control option',
      'Precision ground tables',
      'Quick-setup guides',
      'Built-in work lighting',
    ],
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    subtitle: 'AM-MFM Heavy Series',
    description: 'Heavy-duty metal folding machine engineered for the most demanding fabrication challenges. Built with premium components and backed by our comprehensive warranty.',
    imageId: 'product-metal-folding-machine-main-p1q2r3',
    titleId: 'product-metal-folding-machine-title',
    descId: 'product-metal-folding-machine-desc',
    specs: {
      maxThickness: '10mm',
      maxLength: '4000mm',
      power: '18.5 kW',
      weight: '6800 kg',
    },
    features: [
      'Maximum folding capacity',
      'Full CNC automation',
      'Self-diagnostic system',
      'Premium hydraulic components',
      'Reinforced frame design',
      'Extended warranty included',
    ],
  },
]

export default function Products() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Product Range
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover our comprehensive lineup of metal folding machines, each engineered for precision, 
            durability, and ease of use.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our technical team can help you select the right machine for your specific application and budget.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Contact Our Experts
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  )
}

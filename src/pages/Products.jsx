import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Factory, Ruler, Gauge, Wrench } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'High-Capacity Automated Folding',
    description:
      'Our flagship double folding machine delivers unmatched productivity for high-volume sheet metal fabrication. With dual-beam folding technology and CNC control, it handles complex folding sequences with speed and precision. Ideal for HVAC, automotive, and appliance manufacturing.',
    specs: [
      'Max Folding Length: 3200mm',
      'Max Sheet Thickness: 4mm (mild steel)',
      'Folding Angle Range: 0° - 135°',
      'CNC Multi-Axis Control',
      'Automatic Tool Change System',
      'Production Speed: Up to 12 folds/min',
    ],
    features: [
      'Dual-beam folding for complex geometries',
      'Automatic sheet thickness detection',
      'Programmable backgauge with servo drive',
      'Touchscreen HMI with recipe storage',
      'CE certified safety system',
    ],
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile Precision Folding',
    description:
      'A versatile sheet metal folding machine designed for job shops and medium production environments. Programmable angle control and automatic backgauge ensure consistent results across diverse part geometries. Perfect for custom fabrication and batch production.',
    specs: [
      'Max Folding Length: 2500mm',
      'Max Sheet Thickness: 3mm (mild steel)',
      'Folding Angle Range: 0° - 135°',
      'Auto Backgauge Positioning',
      'Manual & Programmable Modes',
      'Production Speed: Up to 8 folds/min',
    ],
    features: [
      'Programmable angle control system',
      'Quick-change tooling system',
      'Foot pedal and dual-hand control',
      'Integrated part support arms',
      'Compact footprint for shop floors',
    ],
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    tagline: 'Heavy-Duty Industrial Folding',
    description:
      'Built for the toughest industrial applications, this metal folder machine handles thick gauge materials with ease. The robust welded frame and hydraulic clamping system deliver consistent, high-force folding for structural and heavy fabrication work.',
    specs: [
      'Max Folding Length: 4000mm',
      'Max Sheet Thickness: 6mm (mild steel)',
      'Folding Angle Range: 0° - 135°',
      'Hydraulic Clamping System',
      'Heavy-Duty Welded Frame',
      'Production Speed: Up to 6 folds/min',
    ],
    features: [
      'Hydraulic beam clamping for uniform pressure',
      'Reinforced folding beam with hardened tooling',
      'Digital angle readout with 0.1° resolution',
      'Overload protection system',
      'Modular design for custom configurations',
    ],
  },
  {
    id: 'cnc-folding-center',
    name: 'CNC Folding Center',
    tagline: 'Fully Automated Production Cell',
    description:
      'The ultimate in automated sheet metal folding. This CNC folding center combines robotic material handling with precision folding for lights-out manufacturing capability. Designed for high-mix, high-volume production environments.',
    specs: [
      'Max Folding Length: 3200mm',
      'Max Sheet Thickness: 4mm (mild steel)',
      'Folding Angle Range: 0° - 135°',
      '6-Axis Robot Integration',
      'Automatic Sheet Loading/Unloading',
      'Production Speed: Up to 15 folds/min',
    ],
    features: [
      'Fully automated production cell',
      'Robot-assisted material handling',
      'Real-time quality monitoring',
      'Industry 4.0 connectivity',
      'Remote diagnostics and support',
    ],
  },
]

export default function Products() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
            Our Products
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Sheet Metal Folding Machines
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            From compact manual folders to fully automated CNC folding centers, we have the right machine for your production needs.
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <span className="text-amber-600 font-semibold text-xs uppercase tracking-wider">
                  {product.tagline}
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4">
                  {product.name}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-1.5">
                      <Ruler className="w-4 h-4 text-amber-500" />
                      Specifications
                    </h4>
                    <ul className="space-y-1.5">
                      {product.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle className="w-3 h-3 text-amber-500 shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-1.5">
                      <Wrench className="w-4 h-4 text-amber-500" />
                      Key Features
                    </h4>
                    <ul className="space-y-1.5">
                      {product.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle className="w-3 h-3 text-amber-500 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <div className="bg-slate-100 rounded-2xl aspect-[4/3] flex items-center justify-center border border-slate-200">
                  <div className="text-center">
                    <Factory className="w-20 h-20 text-slate-300 mx-auto mb-3" />
                    <span className="text-sm text-slate-400 font-medium">{product.name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Not Sure Which Machine Is Right for You?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Our engineering team can help you select the perfect folding machine based on your material, production volume, and part geometry.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
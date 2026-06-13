import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, ChevronUp, Check, Ruler, Gauge, Settings } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    shortDesc: 'High-precision double folding for complex sheet metal profiles with automated angle control.',
    fullDesc: 'Our flagship Double Folding Machine delivers exceptional precision for complex sheet metal profiles. Featuring automated angle control, digital readouts, and heavy-duty construction, this machine handles demanding production environments with ease. Ideal for HVAC, roofing, and architectural metalwork applications.',
    specs: [
      'Max sheet thickness: 3.0mm',
      'Working length: 2000mm - 4000mm',
      'Bending angle: 0-135 degrees',
      'Digital angle display',
      'Hydraulic clamping system',
    ],
    features: ['Automated angle control', 'Heavy-duty frame', 'Quick-change tooling', 'Safety interlocks'],
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    shortDesc: 'Compact and efficient double folder for rapid production of double-seam joints.',
    fullDesc: 'The Double Folder is designed for rapid production of double-seam joints in sheet metal work. Its compact footprint makes it ideal for smaller workshops while maintaining the precision and reliability ARTITECT is known for. Perfect for standing seam roofing, ductwork, and decorative metalwork.',
    specs: [
      'Max sheet thickness: 1.5mm',
      'Working length: 1500mm - 3000mm',
      'Seam types: Single & double lock',
      'Manual or pneumatic operation',
      'Portable design available',
    ],
    features: ['Quick setup', 'Multiple seam profiles', 'Ergonomic handles', 'Lightweight construction'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    shortDesc: 'Versatile sheet metal folder capable of handling various thicknesses and material types.',
    fullDesc: 'Our versatile Sheet Metal Folder handles a wide range of materials including steel, aluminum, stainless steel, and copper. With adjustable bending beams and precision-ground tooling, it delivers consistent results across different material types and thicknesses.',
    specs: [
      'Max sheet thickness: 4.0mm (steel)',
      'Working length: 1000mm - 6000mm',
      'Material compatibility: Steel, Aluminum, SS, Copper',
      'Adjustable bending beam',
      'Precision-ground tooling',
    ],
    features: ['Multi-material capability', 'Adjustable beam pressure', 'Wear-resistant surfaces', 'Easy maintenance'],
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    shortDesc: 'Industrial-grade folding machine for high-volume sheet metal production.',
    fullDesc: 'Built for high-volume production environments, our Sheet Metal Folding Machine combines speed with precision. CNC-controlled operations ensure repeatable accuracy, while the robust construction handles continuous operation in demanding industrial settings.',
    specs: [
      'Max sheet thickness: 6.0mm',
      'Working length: 2000mm - 8000mm',
      'CNC control system',
      'Programmable bend sequences',
      'Automatic back gauge',
    ],
    features: ['CNC precision', 'High-speed operation', 'Programmable memory', 'Production counter'],
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    shortDesc: 'Reliable metal folder for general-purpose bending and forming operations.',
    fullDesc: 'The Metal Folder is our general-purpose solution for everyday bending and forming tasks. Simple to operate yet built to last, it serves as the workhorse of any metal fabrication shop. Suitable for both prototype work and production runs.',
    specs: [
      'Max sheet thickness: 2.5mm',
      'Working length: 1500mm - 3500mm',
      'Manual or foot-pedal operation',
      'Graduated angle scale',
      'Quick-release clamping',
    ],
    features: ['Simple operation', 'Durable construction', 'Angle graduation marks', 'Quick-release system'],
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    shortDesc: 'Advanced metal folder with enhanced features for professional fabricators.',
    fullDesc: 'The Metal Folder Machine bridges the gap between manual folders and full CNC systems. Enhanced features include power-assisted clamping, digital angle readout, and optional CNC upgrades. Perfect for growing fabrication shops looking to increase productivity.',
    specs: [
      'Max sheet thickness: 3.5mm',
      'Working length: 2000mm - 4000mm',
      'Power-assisted clamping',
      'Digital angle readout',
      'CNC upgrade ready',
    ],
    features: ['Power clamping', 'Digital display', 'Upgrade path', 'Professional grade'],
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    shortDesc: 'Heavy-duty metal folding machine for industrial-scale fabrication.',
    fullDesc: 'Our heavy-duty Metal Folding Machine is engineered for industrial-scale fabrication. With maximum rigidity, precision-ground components, and advanced control systems, it handles the most demanding bending applications with consistent accuracy and reliability.',
    specs: [
      'Max sheet thickness: 8.0mm',
      'Working length: 3000mm - 10000mm',
      'Hydraulic drive system',
      'Advanced control panel',
      'Laser angle measurement',
    ],
    features: ['Maximum rigidity', 'Hydraulic power', 'Laser measurement', 'Industrial duty cycle'],
  },
]

function ProductCard({ product, isExpanded, onToggle }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div
      id={product.id}
      ref={containerRef}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 scroll-mt-24"
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="aspect-[4/3] md:aspect-auto bg-gray-100">
          <img
            alt={product.title}
            className="w-full h-full object-cover"
            data-strk-img-id={`product-page-${product.id}-img`}
            data-strk-img={`[${product.id}-page-desc] [${product.id}-page-title] [products-page-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="p-6 lg:p-8">
          <h3 id={`${product.id}-page-title`} className="text-2xl font-bold text-[#1e3a5f]">
            {product.title}
          </h3>
          <p id={`${product.id}-page-desc`} className="mt-3 text-[#6b7280] leading-relaxed">
            {product.fullDesc}
          </p>

          <button
            onClick={onToggle}
            className="mt-4 inline-flex items-center gap-1 text-[#c87941] font-medium text-sm hover:gap-2 transition-all"
          >
            {isExpanded ? 'Show Less' : 'View Specifications'}
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {isExpanded && (
            <div className="mt-6 space-y-6 animate-fadeIn">
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-[#1e3a5f] mb-3">
                  <Ruler className="w-4 h-4 text-[#c87941]" />
                  Technical Specifications
                </h4>
                <ul className="space-y-2">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2 text-sm text-[#374151]">
                      <Check className="w-4 h-4 text-[#c87941] mt-0.5 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-[#1e3a5f] mb-3">
                  <Settings className="w-4 h-4 text-[#c87941]" />
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-gray-200">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c87941] text-white rounded-lg text-sm font-semibold hover:bg-[#a05d2e] transition-colors"
            >
              Request Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const [expandedProduct, setExpandedProduct] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-[#0f1f33] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#e8956a] font-semibold text-sm uppercase tracking-wider">Our Products</span>
            <h1 id="products-page-title" className="mt-3 text-3xl lg:text-5xl font-bold text-white">
              Precision Folding Machinery
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Explore our complete range of sheet metal folding machines, engineered for accuracy, 
              durability, and peak performance in industrial environments.
            </p>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-16 lg:py-24 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isExpanded={expandedProduct === product.id}
                onToggle={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            Need a Custom Solution?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Our engineering team can design and build custom folding machines tailored to your specific requirements.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-[#c87941] text-white rounded-lg font-semibold hover:bg-[#a05d2e] transition-colors"
          >
            Contact Our Engineers
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

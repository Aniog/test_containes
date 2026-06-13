import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Ruler, Zap, Layers, Gauge } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const allProducts = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'Our flagship double folding machine delivers unmatched precision for complex metal forming operations. Featuring dual-action folding heads and computer-controlled angle settings, this machine handles everything from simple bends to intricate multi-fold patterns.',
    features: ['Dual-action folding heads', 'Computer-controlled angles', 'Handles up to 3mm thickness', 'Digital angle display', 'Quick-change tooling system'],
    specs: { maxThickness: '3mm', maxWidth: '2500mm', foldingAngle: '0-135°', power: '5.5 kW' },
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'The double folder is designed for high-volume production environments where speed and accuracy are paramount. Its innovative dual-folding mechanism allows simultaneous operations, cutting production time in half while maintaining exceptional quality.',
    features: ['Simultaneous dual folding', 'High-speed operation', 'Automatic material feed', 'Programmable presets', 'Heavy-duty construction'],
    specs: { maxThickness: '2.5mm', maxWidth: '2000mm', foldingAngle: '0-180°', power: '4 kW' },
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Professional-grade sheet metal folding equipment engineered for precision work on a wide range of materials. From thin gauge sheets to heavy plate, this folder delivers consistent, repeatable results every time.',
    features: ['Wide material compatibility', 'Precision back gauge', 'Manual and auto modes', 'Adjustable clamping pressure', 'Ergonomic operation'],
    specs: { maxThickness: '4mm', maxWidth: '3200mm', foldingAngle: '0-135°', power: '7.5 kW' },
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'A versatile sheet metal folding machine that combines power, precision, and ease of use. Ideal for fabrication shops, HVAC manufacturers, and custom metalwork operations requiring consistent quality output.',
    features: ['CNC control system', 'Touch screen interface', 'Automatic crowning', 'Multi-step programming', 'Safety light curtains'],
    specs: { maxThickness: '3.5mm', maxWidth: '2500mm', foldingAngle: '0-135°', power: '6 kW' },
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Compact yet powerful, the metal folder is perfect for smaller workshops and specialized applications. Despite its smaller footprint, it delivers the same ARTITECT quality and precision you expect from our full-size machines.',
    features: ['Compact design', 'Portable option available', 'Easy setup', 'Low maintenance', 'Precision ground bed'],
    specs: { maxThickness: '2mm', maxWidth: '1500mm', foldingAngle: '0-135°', power: '3 kW' },
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'The metal folder machine represents the perfect balance of capability and value. Built for daily industrial use, it features robust construction and intuitive controls that operators love.',
    features: ['Industrial-grade build', 'Intuitive controls', 'Quick setup', 'Versatile tooling', 'Low operating cost'],
    specs: { maxThickness: '3mm', maxWidth: '2000mm', foldingAngle: '0-135°', power: '5 kW' },
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Our heavy-duty metal folding machine is engineered for the most demanding applications. With superior rigidity and advanced control systems, it handles thick materials and complex geometries with ease.',
    features: ['Heavy-duty frame', 'Advanced hydraulics', 'Multi-axis control', 'Real-time monitoring', 'Extended warranty'],
    specs: { maxThickness: '6mm', maxWidth: '4000mm', foldingAngle: '0-180°', power: '11 kW' },
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 text-sm font-semibold rounded-full mb-6">
            Our Product Range
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Metal Folding <span className="text-amber-500">Machinery</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore our comprehensive range of precision-engineered metal folding equipment, 
            designed to meet the demands of modern manufacturing.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {allProducts.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <div className={`aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    alt={product.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`product-page-${product.id}-img`}
                    data-strk-img={`[${product.id}-page-desc] [${product.id}-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 id={`${product.id}-page-title`} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {product.title}
                  </h2>
                  <p id={`${product.id}-page-desc`} className="text-slate-600 text-lg leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Specs */}
                  <div className="bg-slate-50 rounded-xl p-6 mb-8">
                    <h4 className="font-semibold text-slate-900 mb-4">Technical Specifications</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-slate-500">Max Thickness</span>
                        <p className="font-semibold text-slate-900">{product.specs.maxThickness}</p>
                      </div>
                      <div>
                        <span className="text-sm text-slate-500">Max Width</span>
                        <p className="font-semibold text-slate-900">{product.specs.maxWidth}</p>
                      </div>
                      <div>
                        <span className="text-sm text-slate-500">Folding Angle</span>
                        <p className="font-semibold text-slate-900">{product.specs.foldingAngle}</p>
                      </div>
                      <div>
                        <span className="text-sm text-slate-500">Power</span>
                        <p className="font-semibold text-slate-900">{product.specs.power}</p>
                      </div>
                    </div>
                  </div>

                  <Link to="/contact" className="btn-primary">
                    Request Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Need Help Choosing the Right Machine?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our technical experts are ready to help you select the perfect metal folding 
            solution for your specific requirements.
          </p>
          <Link to="/contact" className="btn-primary text-lg">
            Contact Our Team
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

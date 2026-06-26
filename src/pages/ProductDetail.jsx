import { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Check, Download, Phone } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = {
  'double-folding-machine': {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    category: 'Premium Series',
    description: 'Our flagship double folding machine represents the pinnacle of sheet metal folding technology. Engineered with precision and built for durability, this machine delivers exceptional performance for complex folding operations. The dual-folding capability allows for increased productivity and reduced cycle times.',
    features: [
      'Dual-folding capability for complex geometries',
      'Precision up to 0.1mm for exact specifications',
      'Automatic thickness adjustment for material versatility',
      'Digital control panel with intuitive interface',
      'Heavy-duty frame construction for stability',
      'Energy-efficient motor system',
      'Safety compliance with international standards',
      'Remote monitoring and diagnostics',
    ],
    specs: {
      'Max Thickness': '6mm',
      'Folding Length': '3200mm',
      'Power': '15kW',
      'Weight': '8500kg',
      'Dimensions': '4500 x 1800 x 2200mm',
      'Folding Angle': '0-135°',
      'Control System': 'CNC Touch Screen',
      'Warranty': '3 Years',
    },
    image: 'double folding machine precision industrial',
  },
  'double-folder': {
    id: 'double-folder',
    name: 'Double Folder',
    category: 'Professional Series',
    description: 'The Double Folder is designed for high-volume production environments where reliability and consistency are paramount. Its robust construction and advanced features make it the ideal choice for professional workshops and manufacturing facilities.',
    features: [
      'Heavy-duty construction for continuous operation',
      'Quick-change tooling system for flexibility',
      'Safety laser guard for operator protection',
      'Programmable settings for repeat operations',
      'Precision-ground folding beam',
      'Hydraulic clamping system',
      'Digital display with job memory',
      'Low maintenance design',
    ],
    specs: {
      'Max Thickness': '4mm',
      'Folding Length': '2500mm',
      'Power': '11kW',
      'Weight': '6200kg',
      'Dimensions': '3800 x 1600 x 2000mm',
      'Folding Angle': '0-150°',
      'Control System': 'Digital Programmable',
      'Warranty': '2 Years',
    },
    image: 'double folder professional sheet metal',
  },
  'sheet-metal-folder': {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    category: 'Standard Series',
    description: 'The Sheet Metal Folder offers the perfect balance of performance and value. Suitable for a wide range of applications, from prototyping to production, this machine delivers reliable results with minimal operator training required.',
    features: [
      'Universal application for various industries',
      'Easy operation with minimal training',
      'Low maintenance requirements',
      'Competitive pricing for budget-conscious buyers',
      'Durable components for long service life',
      'Adjustable back gauge for precision',
      'Manual or pneumatic clamping options',
      'Compact footprint for space efficiency',
    ],
    specs: {
      'Max Thickness': '3mm',
      'Folding Length': '2000mm',
      'Power': '7.5kW',
      'Weight': '4200kg',
      'Dimensions': '3200 x 1400 x 1800mm',
      'Folding Angle': '0-140°',
      'Control System': 'Manual/Digital Hybrid',
      'Warranty': '2 Years',
    },
    image: 'sheet metal folder standard machine',
  },
  'sheet-metal-folding-machine': {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    category: 'Industrial Series',
    description: 'Built for the most demanding production environments, our Industrial Series Sheet Metal Folding Machine combines brute strength with precision control. This machine is the workhorse of large-scale manufacturing operations.',
    features: [
      'Industrial-grade durability for 24/7 operation',
      'Advanced CNC control system',
      'Automatic crowning system for uniform pressure',
      'Remote diagnostics capability',
      'High-speed operation for maximum productivity',
      'Reinforced stress-relieved frame',
      'Multi-language interface for global operations',
      'Integration ready for Industry 4.0',
    ],
    specs: {
      'Max Thickness': '8mm',
      'Folding Length': '4000mm',
      'Power': '22kW',
      'Weight': '12000kg',
      'Dimensions': '5500 x 2200 x 2500mm',
      'Folding Angle': '0-160°',
      'Control System': 'Full CNC with CAD/CAM',
      'Warranty': '5 Years',
    },
    image: 'sheet metal folding machine industrial grade',
  },
  'metal-folder': {
    id: 'metal-folder',
    name: 'Metal Folder',
    category: 'Compact Series',
    description: 'The Compact Series Metal Folder is the perfect solution for workshops and smaller production facilities where space is at a premium. Despite its compact size, it delivers professional-quality folding results.',
    features: [
      'Space-efficient design for small workshops',
      'Easy installation with minimal setup',
      'Manual or pneumatic operation options',
      'Portable capability for job site flexibility',
      'Affordable entry point for professional folding',
      'Simple controls for quick operator training',
      'Durable construction in compact package',
      'Optional stand and accessories available',
    ],
    specs: {
      'Max Thickness': '2.5mm',
      'Folding Length': '1500mm',
      'Power': '5.5kW',
      'Weight': '2800kg',
      'Dimensions': '2400 x 1200 x 1500mm',
      'Folding Angle': '0-130°',
      'Control System': 'Manual with Digital Readout',
      'Warranty': '1 Year',
    },
    image: 'metal folder compact workshop machine',
  },
  'metal-folder-machine': {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    category: 'Advanced Series',
    description: 'The Advanced Series Metal Folder Machine represents the future of sheet metal fabrication. With intelligent automation features and IoT connectivity, this machine is designed for modern smart manufacturing environments.',
    features: [
      'Smart automation for reduced labor costs',
      'IoT connectivity for real-time monitoring',
      'Predictive maintenance alerts',
      'Energy-efficient operation',
      'Cloud-based job storage and recall',
      'AI-assisted setup optimization',
      'Remote software updates',
      'Integration with MES and ERP systems',
    ],
    specs: {
      'Max Thickness': '5mm',
      'Folding Length': '3000mm',
      'Power': '18kW',
      'Weight': '9500kg',
      'Dimensions': '4800 x 2000 x 2300mm',
      'Folding Angle': '0-155°',
      'Control System': 'Smart CNC with AI',
      'Warranty': '4 Years',
    },
    image: 'metal folder machine smart automated',
  },
  'metal-folding-machine': {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    category: 'Heavy-Duty Series',
    description: 'When the job demands maximum power and capability, our Heavy-Duty Series Metal Folding Machine delivers. Built to handle the toughest materials and most demanding production schedules, this machine is the choice of industry leaders.',
    features: [
      'Heavy-duty capacity for thick materials',
      'Reinforced frame for maximum rigidity',
      'Hydraulic clamping system for secure holding',
      'Multi-language interface for global teams',
      'High-tonnage folding capacity',
      'Advanced safety systems',
      'Customizable configurations available',
      'Dedicated technical support team',
    ],
    specs: {
      'Max Thickness': '10mm',
      'Folding Length': '5000mm',
      'Power': '30kW',
      'Weight': '18000kg',
      'Dimensions': '6500 x 2500 x 2800mm',
      'Folding Angle': '0-170°',
      'Control System': 'Industrial CNC',
      'Warranty': '5 Years',
    },
    image: 'metal folding machine heavy duty industrial',
  },
}

export default function ProductDetail() {
  const { id } = useParams()
  const containerRef = useRef(null)
  const product = products[id]

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [id])

  if (!product) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Product Not Found</h1>
        <Link to="/products" className="text-blue-600 hover:text-blue-700">
          Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div ref={containerRef}>
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-blue-600">Products</Link>
            <span>/</span>
            <span className="text-slate-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden">
              <img
                data-strk-img-id={`detail-${product.id}`}
                data-strk-img={product.image}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-slate-900 mb-6">{product.name}</h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Request Quote
                </Link>
                <button className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-900 hover:text-white transition inline-flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Brochure
                </button>
              </div>

              {/* Quick Specs */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Quick Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-sm text-slate-600">{key}</p>
                      <p className="font-semibold text-slate-900">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-6 rounded-xl">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-slate-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Full Specifications</h2>
          <div className="bg-slate-50 rounded-2xl overflow-hidden">
            <table className="w-full">
              <tbody>
                {Object.entries(product.specs).map(([key, value], idx) => (
                  <tr key={key} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-8 py-4 font-medium text-slate-900 border-b border-slate-100">
                      {key}
                    </td>
                    <td className="px-8 py-4 text-slate-600 border-b border-slate-100">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in the {product.name}?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact our sales team for pricing, availability, and customization options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              Contact Sales Team
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
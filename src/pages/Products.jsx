import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const products = [
    {
      id: 'double-folding-machine',
      name: 'Double Folding Machine',
      category: 'Premium Series',
      description: 'Our flagship double folding machine delivers exceptional precision and efficiency for complex sheet metal work. Features dual-folding capability for increased productivity.',
      features: ['Dual-folding capability', 'Precision up to 0.1mm', 'Automatic thickness adjustment', 'Digital control panel'],
      image: 'double folding machine precision sheet metal',
      specs: {
        'Max Thickness': '6mm',
        'Folding Length': '3200mm',
        'Power': '15kW',
        'Weight': '8500kg',
      },
    },
    {
      id: 'double-folder',
      name: 'Double Folder',
      category: 'Professional Series',
      description: 'Versatile double folder designed for high-volume production environments. Robust construction ensures consistent performance day after day.',
      features: ['Heavy-duty construction', 'Quick-change tooling', 'Safety laser guard', 'Programmable settings'],
      image: 'double folder sheet metal machine',
      specs: {
        'Max Thickness': '4mm',
        'Folding Length': '2500mm',
        'Power': '11kW',
        'Weight': '6200kg',
      },
    },
    {
      id: 'sheet-metal-folder',
      name: 'Sheet Metal Folder',
      category: 'Standard Series',
      description: 'Reliable and precise sheet metal folder suitable for a wide range of applications. Perfect balance of performance and value.',
      features: ['Universal application', 'Easy operation', 'Low maintenance', 'Competitive pricing'],
      image: 'sheet metal folder bending machine',
      specs: {
        'Max Thickness': '3mm',
        'Folding Length': '2000mm',
        'Power': '7.5kW',
        'Weight': '4200kg',
      },
    },
    {
      id: 'sheet-metal-folding-machine',
      name: 'Sheet Metal Folding Machine',
      category: 'Industrial Series',
      description: 'Industrial-grade folding machine built for the most demanding production environments. Maximum durability and precision.',
      features: ['Industrial-grade durability', 'CNC control system', 'Automatic crowning', 'Remote diagnostics'],
      image: 'sheet metal folding machine industrial',
      specs: {
        'Max Thickness': '8mm',
        'Folding Length': '4000mm',
        'Power': '22kW',
        'Weight': '12000kg',
      },
    },
    {
      id: 'metal-folder',
      name: 'Metal Folder',
      category: 'Compact Series',
      description: 'Space-efficient metal folder ideal for workshops and smaller production facilities. Delivers professional results in a compact footprint.',
      features: ['Compact design', 'Easy installation', 'Manual or pneumatic options', 'Portable capability'],
      image: 'metal folder compact machine',
      specs: {
        'Max Thickness': '2.5mm',
        'Folding Length': '1500mm',
        'Power': '5.5kW',
        'Weight': '2800kg',
      },
    },
    {
      id: 'metal-folder-machine',
      name: 'Metal Folder Machine',
      category: 'Advanced Series',
      description: 'Advanced metal folder machine with intelligent automation features. Optimized for modern smart manufacturing environments.',
      features: ['Smart automation', 'IoT connectivity', 'Predictive maintenance', 'Energy efficient'],
      image: 'metal folder machine automated',
      specs: {
        'Max Thickness': '5mm',
        'Folding Length': '3000mm',
        'Power': '18kW',
        'Weight': '9500kg',
      },
    },
    {
      id: 'metal-folding-machine',
      name: 'Metal Folding Machine',
      category: 'Heavy-Duty Series',
      description: 'Heavy-duty metal folding machine for large-scale industrial applications. Built to handle the toughest materials with ease.',
      features: ['Heavy-duty capacity', 'Reinforced frame', 'Hydraulic clamping', 'Multi-language interface'],
      image: 'metal folding machine heavy duty',
      specs: {
        'Max Thickness': '10mm',
        'Folding Length': '5000mm',
        'Power': '30kW',
        'Weight': '18000kg',
      },
    },
  ]

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-slate-300">
            Precision-engineered folding machines for every application
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden group"
              >
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={`product-list-${product.id}`}
                    data-strk-img={product.image}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">{product.description}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-900 mb-3">Key Features</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-sm font-semibold text-slate-900 mb-3">Specifications</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-slate-600">{key}</span>
                          <span className="font-medium text-slate-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/products/${product.id}`}
                    className="mt-6 w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition inline-flex items-center justify-center gap-2 group"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
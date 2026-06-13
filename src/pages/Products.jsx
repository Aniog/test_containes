import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Ruler, Gauge, Shield, Settings, Zap } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    shortDesc: 'High-capacity precision folding with dual-action mechanics.',
    description: 'The Double Folding Machine is our flagship model, engineered for high-volume production environments. It features dual-action folding arms that work in perfect synchronization, delivering consistent bends with tolerance within ±0.1mm. The robust frame and servo-driven controls ensure reliable operation for years.',
    specs: { capacity: '12mm mild steel', length: '3,000mm', power: '15kW', speed: '12 strokes/min' },
    imgId: 'prod-detail-img-1',
    titleId: 'prod-detail-title-1',
    descId: 'prod-detail-desc-1',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    shortDesc: 'Compact dual-folder unit ideal for medium-scale operations.',
    description: 'The Double Folder offers the same dual-folding precision in a more compact footprint. Perfect for medium-scale workshops and production lines where space is at a premium. Features quick-change tooling and intuitive touchscreen controls.',
    specs: { capacity: '8mm mild steel', length: '2,000mm', power: '7.5kW', speed: '10 strokes/min' },
    imgId: 'prod-detail-img-2',
    titleId: 'prod-detail-title-2',
    descId: 'prod-detail-desc-2',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    shortDesc: 'Versatile folder designed for precision bends.',
    description: 'Our Sheet Metal Folder is the go-to choice for fabrication shops requiring versatility. Capable of handling a wide range of materials and thicknesses, this machine offers excellent precision with simple, user-friendly controls.',
    specs: { capacity: '6mm mild steel', length: '2,500mm', power: '5.5kW', speed: '14 strokes/min' },
    imgId: 'prod-detail-img-3',
    titleId: 'prod-detail-title-3',
    descId: 'prod-detail-desc-3',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    shortDesc: 'Industrial-grade folding automation with programmable controls.',
    description: 'The Sheet Metal Folding Machine brings full automation to your production line. With programmable memory for up to 500 bending sequences and CNC positioning accuracy, this machine eliminates setup time and delivers repeatable results.',
    specs: { capacity: '10mm mild steel', length: '3,200mm', power: '18.5kW', speed: '15 strokes/min' },
    imgId: 'prod-detail-img-4',
    titleId: 'prod-detail-title-4',
    descId: 'prod-detail-desc-4',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    shortDesc: 'Robust manual and CNC options for all metal folding.',
    description: 'The Metal Folder is designed for versatility across materials. From aluminum to stainless steel, this folder handles it all with precision. Available in manual and CNC configurations to match your workflow and budget.',
    specs: { capacity: '4mm stainless steel', length: '2,000mm', power: '3kW', speed: '8 strokes/min' },
    imgId: 'prod-detail-img-5',
    titleId: 'prod-detail-title-5',
    descId: 'prod-detail-desc-5',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    shortDesc: 'Automated metal folder with servo-driven precision.',
    description: 'The Metal Folder Machine combines industrial automation with user-friendly operation. Servo-driven precision back gauge and laser angle measurement ensure every fold meets exact specifications. Built-in safety interlocks protect operators.',
    specs: { capacity: '5mm mild steel', length: '2,500mm', power: '7.5kW', speed: '16 strokes/min' },
    imgId: 'prod-detail-img-6',
    titleId: 'prod-detail-title-6',
    descId: 'prod-detail-desc-6',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    shortDesc: 'Flagship folding system delivering unmatched accuracy.',
    description: 'Our Metal Folding Machine is the pinnacle of folding technology. Featuring hydraulic crowning compensation, automatic tool changers, and Industry 4.0 connectivity, this system is built for manufacturers who demand the absolute best in speed, accuracy, and automation.',
    specs: { capacity: '16mm mild steel', length: '4,000mm', power: '30kW', speed: '20 strokes/min' },
    imgId: 'prod-detail-img-7',
    titleId: 'prod-detail-title-7',
    descId: 'prod-detail-desc-7',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            Our Catalog
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Premium Machinery
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Explore our complete range of folding machines, each engineered for precision, reliability, and industrial performance.
          </p>
        </div>
      </section>

      {/* Products List */}
      <section className="py-12 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                idx % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Image */}
              <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden group">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-amber-500 text-xs font-semibold tracking-wider uppercase">
                    Product {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2
                  id={product.titleId}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
                >
                  {product.title}
                </h2>
                <p
                  id={product.descId}
                  className="text-slate-400 text-base md:text-lg leading-relaxed mb-6"
                >
                  {product.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Capacity</div>
                    <div className="text-white text-sm font-medium flex items-center gap-1.5">
                      <Ruler className="w-3.5 h-3.5 text-amber-500" />
                      {product.specs.capacity}
                    </div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Length</div>
                    <div className="text-white text-sm font-medium flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-amber-500" />
                      {product.specs.length}
                    </div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Power</div>
                    <div className="text-white text-sm font-medium flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      {product.specs.power}
                    </div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Speed</div>
                    <div className="text-white text-sm font-medium flex items-center gap-1.5">
                      <Settings className="w-3.5 h-3.5 text-amber-500" />
                      {product.specs.speed}
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-500 transition-colors text-sm"
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'df-2000',
    title: 'DF-2000 Double Folding Machine',
    description: 'Our flagship double folder designed for high-volume production. Features dual-action folding capability with programmable angle control and automatic material handling.',
    specs: ['Folding length: 2000mm', 'Max thickness: 2.0mm steel', 'Folding speed: 20 bends/min', 'Digital angle display'],
    titleId: 'product-df-2000-title',
    descId: 'product-df-2000-desc',
    imgId: 'product-img-df-2000-x1y2z3',
  },
  {
    id: 'df-3000',
    title: 'DF-3000 Double Folder Pro',
    description: 'Extended-length double folding machine for large panel work. Ideal for roofing, cladding, and architectural metalwork with servo-driven backgauge.',
    specs: ['Folding length: 3000mm', 'Max thickness: 1.5mm steel', 'CNC backgauge', 'Hydraulic clamping'],
    titleId: 'product-df-3000-title',
    descId: 'product-df-3000-desc',
    imgId: 'product-img-df-3000-a4b5c6',
  },
  {
    id: 'smf-1500',
    title: 'SMF-1500 Sheet Metal Folder',
    description: 'Compact sheet metal folding machine perfect for workshops and fabrication shops. Quick setup with manual or motorized backgauge options.',
    specs: ['Folding length: 1500mm', 'Max thickness: 2.5mm steel', 'Manual backgauge', 'Segmented upper beam'],
    titleId: 'product-smf-1500-title',
    descId: 'product-smf-1500-desc',
    imgId: 'product-img-smf-1500-d7e8f9',
  },
  {
    id: 'smf-2500',
    title: 'SMF-2500 Sheet Metal Folding Machine',
    description: 'Mid-range sheet metal folder with motorized adjustments and digital readout. Versatile machine for diverse fabrication requirements.',
    specs: ['Folding length: 2500mm', 'Max thickness: 2.0mm steel', 'Motorized backgauge', 'Quick-change tooling'],
    titleId: 'product-smf-2500-title',
    descId: 'product-smf-2500-desc',
    imgId: 'product-img-smf-2500-g1h2i3',
  },
  {
    id: 'mf-4000',
    title: 'MF-4000 Heavy-Duty Metal Folder',
    description: 'Industrial-grade metal folding machine for heavy plate work. Robust construction with hydraulic operation for demanding production environments.',
    specs: ['Folding length: 4000mm', 'Max thickness: 3.0mm steel', 'Hydraulic operation', 'PLC control system'],
    titleId: 'product-mf-4000-title',
    descId: 'product-mf-4000-desc',
    imgId: 'product-img-mf-4000-j4k5l6',
  },
  {
    id: 'mf-cnc',
    title: 'MF-CNC Metal Folding Machine',
    description: 'Fully automated CNC metal folder with touchscreen programming. Maximum productivity with stored programs and automatic tool selection.',
    specs: ['Folding length: 3200mm', 'Max thickness: 2.5mm steel', 'CNC touchscreen', 'Auto tool change'],
    titleId: 'product-mf-cnc-title',
    descId: 'product-mf-cnc-desc',
    imgId: 'product-img-mf-cnc-m7n8o9',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Our Product Range
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            From compact workshop folders to heavy-duty industrial machines, we have the right solution for your metal fabrication needs.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden">
                    <img
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <h2 id={product.titleId} className="text-2xl lg:text-3xl font-bold text-navy-900 tracking-tight mb-3">
                    {product.title}
                  </h2>
                  <p id={product.descId} className="text-slate-600 leading-relaxed mb-5">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-navy-900 font-semibold rounded-lg px-5 py-2.5 text-sm transition-colors"
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

      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 tracking-tight mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mb-8">
            We can engineer bespoke folding machines tailored to your specific production requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-lg px-6 py-3.5 transition-colors"
          >
            Discuss Your Requirements
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products

import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const productList = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    subtitle: 'DFM-3000 Series',
    description: 'Our premium double folding machine performs simultaneous bends on both edges of sheet metal. Ideal for panel production, cabinet manufacturing, and automotive bodywork.',
    specs: [
      'Max fold length: 3,200 mm',
      'Material thickness: 0.5 – 3.0 mm (mild steel)',
      'Fold angle range: 0° – 135°',
      'CNC back gauge with 0.01 mm resolution',
      'Automatic tool changer',
      'Footprint: 4.8m × 2.1m',
    ],
    imgId: 'dfm-3000-8a3b1c',
    titleId: 'dfm-title',
    descId: 'dfm-desc',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    subtitle: 'DF-2000 Series',
    description: 'A compact yet powerful double folder designed for mid-volume workshops. Offers the same bidirectional folding capability in a space-efficient footprint.',
    specs: [
      'Max fold length: 2,500 mm',
      'Material thickness: 0.4 – 2.5 mm (mild steel)',
      'Fold angle range: 0° – 130°',
      'Semi-automatic back gauge',
      'Quick-change clamping system',
      'Footprint: 3.6m × 1.8m',
    ],
    imgId: 'df-2000-9b4c2d',
    titleId: 'df-title',
    descId: 'df-desc',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    subtitle: 'SMF-1500 Series',
    description: 'A versatile single-edge sheet metal folder suitable for roofing, HVAC ductwork, flashings, and general light fabrication. Reliable and easy to operate.',
    specs: [
      'Max fold length: 2,000 mm',
      'Material thickness: 0.3 – 2.0 mm (mild steel)',
      'Fold angle range: 0° – 180°',
      'Manual back gauge',
      'Segmented clamping beam',
      'Footprint: 3.2m × 1.5m',
    ],
    imgId: 'smf-1500-1c5d3e',
    titleId: 'smf-title',
    descId: 'smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    subtitle: 'SMF-PRO Series',
    description: 'Professional-grade sheet metal folding machine with advanced automation. Designed for high-precision aerospace, electronics, and architectural metalwork.',
    specs: [
      'Max fold length: 4,000 mm',
      'Material thickness: 0.5 – 4.0 mm (mild steel)',
      'Fold angle range: 0° – 150°',
      'Full CNC with 3D simulation',
      'Servo-electric drive system',
      'Footprint: 5.5m × 2.4m',
    ],
    imgId: 'smf-pro-2d6e4f',
    titleId: 'smfpro-title',
    descId: 'smfpro-desc',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    subtitle: 'MF-1000 Series',
    description: 'An entry-level metal folder that delivers professional results. Perfect for small workshops, vocational schools, and on-site fabrication needs.',
    specs: [
      'Max fold length: 1,500 mm',
      'Material thickness: 0.3 – 1.5 mm (mild steel)',
      'Fold angle range: 0° – 135°',
      'Manual operation',
      'Lightweight portable design',
      'Footprint: 2.0m × 1.2m',
    ],
    imgId: 'mf-1000-3e7f5g',
    titleId: 'mf-title',
    descId: 'mf-desc',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    subtitle: 'MFM-HEAVY Series',
    description: 'Heavy-duty metal folder machine built for continuous industrial use. Handles thick plates and high-tensile materials with ease.',
    specs: [
      'Max fold length: 3,000 mm',
      'Material thickness: 1.0 – 6.0 mm (mild steel)',
      'Fold angle range: 0° – 120°',
      'Hydraulic clamping system',
      'Reinforced frame construction',
      'Footprint: 5.0m × 2.6m',
    ],
    imgId: 'mfm-heavy-4f8g6h',
    titleId: 'mfm-title',
    descId: 'mfm-desc',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    subtitle: 'MFM-ELITE Series',
    description: 'The ultimate metal folding machine for demanding production lines. Combines speed, precision, and smart automation for maximum throughput.',
    specs: [
      'Max fold length: 4,500 mm',
      'Material thickness: 0.5 – 5.0 mm (mild steel)',
      'Fold angle range: 0° – 160°',
      'AI-assisted bend sequencing',
      'Integrated quality control sensors',
      'Footprint: 6.0m × 2.8m',
    ],
    imgId: 'mfm-elite-5g9h7i',
    titleId: 'mfm-elite-title',
    descId: 'mfm-elite-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Our Range
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Sheet Metal Folding Machines
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            From compact workshop folders to fully automated industrial systems, find the perfect machine for your production needs.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 md:gap-24">
            {productList.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-10 lg:gap-16 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                    <img
                      alt={product.name}
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="hidden" id={product.titleId}>{product.name}</div>
                  <div className="hidden" id={product.descId}>{product.subtitle} industrial sheet metal machinery</div>
                </div>

                <div className="lg:w-1/2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {product.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-2 mb-4">
                    {product.name}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-3">
                      Technical Specifications
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {product.specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-2 text-sm text-text-secondary">
                          <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent-dark transition-colors duration-200"
                  >
                    Request Specifications
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need help choosing the right machine?
          </h2>
          <p className="text-gray-400 mb-8">
            Our engineering team is ready to help you select the perfect folding solution for your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-primary bg-accent rounded-lg hover:bg-accent-dark transition-colors duration-200"
          >
            Speak with an Engineer
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
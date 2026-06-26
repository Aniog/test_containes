import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'Model DF-6000',
    desc: 'Our flagship automatic double folding machine delivers high-speed precision for sheet metal fabrication. Designed for continuous production environments with programmable fold sequences and automatic material handling.',
    specs: ['Max Thickness: 6mm Steel', 'Folding Length: 3200mm', 'CNC Controlled', 'Automatic Tool Change', 'Touchscreen Interface'],
    imgId: 'prod-dfm-full-a1b2c3',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    subtitle: 'Model DF-4000',
    desc: 'A compact yet powerful double folder ideal for mid-size workshops. Combines robust construction with user-friendly controls for efficient daily operation.',
    specs: ['Max Thickness: 4mm Steel', 'Folding Length: 2500mm', 'Semi-Automatic', 'Quick Setup', 'Digital Readout'],
    imgId: 'prod-df-full-d4e5f6',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'Model SMF-3000',
    desc: 'Versatile sheet metal folding machine with precision clamping and adjustable bend angles. Perfect for custom fabrication and prototyping work.',
    specs: ['Max Thickness: 3mm', 'Folding Length: 2000mm', 'Manual & Programmable', 'Segmented Tooling', 'Angle Control ±0.5°'],
    imgId: 'prod-smf-full-g7h8i9',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'Model SMF-5000 Pro',
    desc: 'Professional-grade sheet metal folding machine built for high-volume production. Features advanced automation and industry-leading accuracy.',
    specs: ['Max Thickness: 5mm', 'Folding Length: 3000mm', 'Full CNC', 'Laser Alignment', 'Production Tracking'],
    imgId: 'prod-smfm-full-j0k1l2',
    titleId: 'prod-smfm-title',
    descId: 'prod-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    subtitle: 'Model MF-2000',
    desc: 'The perfect entry-level metal folder for small shops and educational facilities. Simple operation without compromising on build quality.',
    specs: ['Max Thickness: 2mm', 'Folding Length: 1500mm', 'Manual Operation', 'Counterbalance Design', 'Safety Guards'],
    imgId: 'prod-mf-full-m3n4o5',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    subtitle: 'Model MFM-3500',
    desc: 'Mid-range metal folder machine offering the perfect balance of affordability and capability. Hydraulic clamping for consistent, effortless folding.',
    specs: ['Max Thickness: 4mm', 'Folding Length: 2500mm', 'Hydraulic Clamping', 'Pedestal Mount', 'Tooling Kit Included'],
    imgId: 'prod-mfm-full-p6q7r8',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    subtitle: 'Model MFM-7000 Industrial',
    desc: 'Our most powerful metal folding machine. Engineered for heavy industrial use with reinforced frame, high-torque drive system, and advanced safety features.',
    specs: ['Max Thickness: 8mm Steel', 'Folding Length: 4000mm', 'Industrial CNC', 'Heavy-Duty Frame', 'Remote Diagnostics'],
    imgId: 'prod-mfm7-full-s9t0u1',
    titleId: 'prod-mfm7-title',
    descId: 'prod-mfm7-desc',
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
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Our Product Line
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Metal Folding Machinery
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            From compact manual folders to fully automated CNC systems, we have the right machine for your fabrication needs.
          </p>
        </div>
      </section>

      {/* Products List */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-surface rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="lg:col-span-2 aspect-[4/3] lg:aspect-auto bg-gray-100 overflow-hidden">
                    <img
                      alt={product.title}
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    <span className="text-gold text-sm font-semibold uppercase tracking-wider mb-1">
                      {product.subtitle}
                    </span>
                    <h2
                      id={product.titleId}
                      className="text-2xl md:text-3xl font-bold text-navy mb-3"
                    >
                      {product.title}
                    </h2>
                    <p
                      id={product.descId}
                      className="text-muted leading-relaxed mb-6"
                    >
                      {product.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                      {product.specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-2 text-sm text-navy">
                          <Check className="w-4 h-4 text-gold shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex self-start px-6 py-2.5 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy/90 transition-colors"
                    >
                      Inquire About This Model
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

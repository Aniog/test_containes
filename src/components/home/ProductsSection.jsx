import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    desc: 'High-speed dual-axis folding for complex sheet metal components. Ideal for large-scale production environments demanding precision and repeatability.',
    imgId: 'product-double-folding-mach-a4c8e2',
    titleId: 'product-title-double-folding',
    descId: 'product-desc-double-folding',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    desc: 'Versatile double-sided folding for efficient box and pan forming. Designed for quick changeovers and consistent bend quality across runs.',
    imgId: 'product-double-folder-b5d9f3',
    titleId: 'product-title-double-folder',
    descId: 'product-desc-double-folder',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    desc: 'Heavy-duty sheet metal folding with programmable back gauges and precision clamping for clean, accurate bends every cycle.',
    imgId: 'product-sheet-folder-c6e0g4',
    titleId: 'product-title-sheet-folder',
    descId: 'product-desc-sheet-folder',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    desc: 'CNC-controlled folding for thin-to-medium gauge sheet metal. Perfect for architectural panels, enclosures, and custom fabrications.',
    imgId: 'product-sheet-folding-d7f1h5',
    titleId: 'product-title-sheet-folding',
    descId: 'product-desc-sheet-folding',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    desc: 'Robust manual and hydraulic metal folders for workshop environments. Built for durability with simplified controls for everyday use.',
    imgId: 'product-metal-folder-e8g2i6',
    titleId: 'product-title-metal-folder',
    descId: 'product-desc-metal-folder',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    desc: 'Automated metal folder with servo-electric drives for energy-efficient, high-tolerance bending in moderate to high-volume production.',
    imgId: 'product-metal-folder-mach-f9h3j7',
    titleId: 'product-title-metal-folder-mach',
    descId: 'product-desc-metal-folder-mach',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    desc: 'Our flagship metal folding machine featuring multi-axis control, intuitive HMI, and tooling flexibility for the widest range of bending applications.',
    imgId: 'product-metal-folding-g0i4k8',
    titleId: 'product-title-metal-folding',
    descId: 'product-desc-metal-folding',
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="py-20 md:py-28 bg-brand-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-sm font-semibold text-brand-accent uppercase tracking-widest mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mb-6">
            Complete Range of Folding Solutions
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            From compact workshop folders to industrial-grade double folding systems,
            we engineer machinery that delivers precision, reliability, and productivity.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-brand-cream">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="text-xl font-semibold text-brand-navy mb-3"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-brand-muted text-sm leading-relaxed mb-4"
                >
                  {product.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-brand-accent-light transition-colors"
                >
                  Inquire Now
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
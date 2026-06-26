import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-performance double folding machine designed for precision bending of sheet metal with dual-sided operation capability.',
    features: ['Dual-sided operation', 'CNC control', 'Auto thickness detection'],
    imgId: 'prod-dfm-b2c4d6',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double folder for efficient metal sheet folding, ideal for high-volume production environments.',
    features: ['High-speed folding', 'Quick tool change', 'Low maintenance'],
    imgId: 'prod-df-e3f5a7',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Precision sheet metal folder with advanced clamping technology for clean, accurate bends every time.',
    features: ['Precision clamping', 'Variable bend angles', 'Digital readout'],
    imgId: 'prod-smf-g4h6i8',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Full-featured sheet metal folding machine with automated back gauge and programmable bending sequences.',
    features: ['Automated back gauge', 'Programmable sequences', 'Touch screen panel'],
    imgId: 'prod-smfm-j5k7l9',
    titleId: 'prod-smfm-title',
    descId: 'prod-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Robust metal folder built for heavy-duty industrial applications with exceptional bending accuracy.',
    features: ['Heavy-duty frame', 'High bending force', 'Energy efficient'],
    imgId: 'prod-mf-m6n8o0',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Complete metal folder machine solution with integrated safety systems and user-friendly operation interface.',
    features: ['Safety interlocks', 'Easy operation', 'Compact design'],
    imgId: 'prod-mfm-p7q9r1',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Advanced metal folding machine with servo-driven technology for unmatched precision and repeatability.',
    features: ['Servo-driven', 'High repeatability', 'IoT ready'],
    imgId: 'prod-mfm2-s8t0u2',
    titleId: 'prod-mfm2-title',
    descId: 'prod-mfm2-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-dark mt-2 tracking-tight">
            Metal Folding Solutions
          </h2>
          <p className="text-neutral-mid mt-4 max-w-2xl mx-auto">
            From double folding machines to precision metal folders, our product line covers every need in sheet metal fabrication.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-52 overflow-hidden bg-neutral-light">
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
              <div className="p-6">
                <h3 id={product.titleId} className="text-lg font-bold text-neutral-dark mb-2">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-neutral-mid text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-neutral-mid">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-primary-light transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

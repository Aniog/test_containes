import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Check } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'Precision double folding for sheet metal',
    desc: 'Our flagship double folder delivers unmatched accuracy for complex sheet metal folding operations. Ideal for high-volume production environments.',
    features: ['Dual folding capability', 'CNC precision control', 'Heavy-duty steel frame', 'Up to 3mm sheet capacity'],
    imgId: 'prod-double-folding-a1b2c3',
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'Versatile folding for all sheet metal work',
    desc: 'A robust and reliable sheet metal folding machine designed for workshops of all sizes. Combines power with intuitive operation.',
    features: ['Adjustable folding angle', 'Quick-change tooling', 'Compact footprint', 'Low maintenance design'],
    imgId: 'prod-sheet-folder-d4e5f6',
    titleId: 'prod-sheet-folder-title',
    descId: 'prod-sheet-folder-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    subtitle: 'Heavy-duty industrial metal folding',
    desc: 'Built for the toughest jobs, this metal folding machine handles thick gauge materials with ease while maintaining precise fold quality.',
    features: ['High clamping force', 'Segmented tooling', 'Digital angle readout', 'Safety light curtain'],
    imgId: 'prod-metal-folder-g7h8i9',
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy mb-4">
            Our Machines
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Every ARTITECT machine is crafted with precision engineering and built to deliver
            consistent, reliable performance for decades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-warm-white rounded-lg overflow-hidden border border-border-subtle hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
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
              <div className="p-6 md:p-8">
                <p className="text-gold text-sm font-semibold tracking-wide uppercase mb-2">
                  {product.subtitle}
                </p>
                <h3
                  id={product.titleId}
                  className="text-xl font-serif font-bold text-navy mb-3"
                >
                  {product.title}
                </h3>
                <p id={product.descId} className="text-text-secondary mb-5 leading-relaxed">
                  {product.desc}
                </p>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
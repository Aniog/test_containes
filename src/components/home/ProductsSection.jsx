import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Check } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    desc: 'Heavy-duty industrial double folding for sheet metal up to 6mm thickness.',
    imgId: 'product-dfm-a1b2c3',
    features: ['CNC controlled', '6mm capacity', 'Auto-feed system'],
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    desc: 'Compact double folder ideal for medium-scale workshops and precision work.',
    imgId: 'product-df-d4e5f6',
    features: ['Precision folding', '4mm capacity', 'Manual/electric hybrid'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    desc: 'Versatile sheet metal folding machine for clean, accurate bends every time.',
    imgId: 'product-smf-g7h8i9',
    features: ['Quick-clamp beam', '3mm capacity', 'Adjustable angle stop'],
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    desc: 'Full-size industrial sheet metal folding with programmable bending sequences.',
    imgId: 'product-smfm-j0k1l2',
    features: ['Programmable logic', '8mm capacity', 'HD hydraulic drive'],
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    desc: 'Robust metal folder designed for high-volume production environments.',
    imgId: 'product-mf-m3n4o5',
    features: ['Continuous operation', '5mm capacity', 'Foot pedal control'],
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    desc: 'Advanced metal folder machine with digital controls for repeatable accuracy.',
    imgId: 'product-mfm-p6q7r8',
    features: ['Touchscreen HMI', '6mm capacity', 'Memory for 200 programs'],
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    desc: 'Our flagship metal folding solution for the most demanding industrial applications.',
    imgId: 'product-mfm2-s9t0u1',
    features: ['Servo-electric drive', '10mm capacity', 'Automatic tool changer'],
  },
]

const titleId = (product) => `product-${product.id}-title`
const descId = (product) => `product-${product.id}-desc`

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Precision Folding Machinery
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            From compact workshop folders to full-scale industrial folding lines, every machine is built for precision and reliability.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              {/* Product image */}
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${descId(product)}] [${titleId(product)}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 id={titleId(product)} className="text-lg font-semibold text-slate-900">
                  {product.title}
                </h3>
                <p id={descId(product)} className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {product.desc}
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-2 flex-1">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center justify-center w-full px-5 py-2.5 text-sm font-semibold text-slate-700 border border-slate-200 rounded-lg hover:border-amber-500 hover:text-amber-600 transition-colors"
                >
                  Inquire Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

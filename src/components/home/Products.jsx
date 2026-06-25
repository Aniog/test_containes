import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'Our flagship double folding machine delivers precise, repeatable folds on sheet metal up to 3mm thick. Ideal for high-volume production environments.',
    specs: ['Up to 3mm capacity', 'CNC controlled', '±0.1mm accuracy'],
    imgId: 'product-dfm-4a8b1c',
    titleId: 'product-double-folding-machine-title',
    descId: 'product-double-folding-machine-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folder designed for workshops and fabrication shops. Handles a wide range of materials with quick setup and minimal downtime.',
    specs: ['Multi-material support', 'Quick tool change', 'Compact footprint'],
    imgId: 'product-smf-5c9d2e',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Heavy-duty metal folding machine built for demanding industrial applications. Features automated back-gauge and programmable bend sequences.',
    specs: ['Heavy-duty frame', 'Automated back-gauge', 'Programmable sequences'],
    imgId: 'product-mfm-6e0f3g',
    titleId: 'product-metal-folding-machine-title',
    descId: 'product-metal-folding-machine-desc',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="py-20 lg:py-28 bg-surface" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Our Machines
          </p>
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
            Precision Folding Solutions
          </h2>
          <p id="products-section-subtitle" className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to full-scale industrial systems, our machines are engineered for accuracy and built to last.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 id={product.titleId} className="text-xl font-bold text-text-primary mb-3">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-text-secondary text-sm leading-relaxed mb-5">
                  {product.description}
                </p>
                <ul className="list-none p-0 m-0 space-y-2 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-light transition-colors no-underline"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

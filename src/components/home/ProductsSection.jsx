import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding',
    title: 'Double Folding Machine',
    description: 'High-performance double folder designed for complex bends and precision sheet metal work. Ideal for HVAC, roofing, and architectural applications.',
    specs: ['Up to 3mm steel capacity', 'Dual folding beams', 'CNC programmable'],
    imgId: 'prod-double-fold-3k8m',
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folding machine engineered for accuracy and repeatability. Perfect for production environments requiring consistent quality.',
    specs: ['Servo-driven backgauge', 'Quick tool change', 'Touch-screen control'],
    imgId: 'prod-sheet-folder-9p2n',
    titleId: 'prod-sheet-folder-title',
    descId: 'prod-sheet-folder-desc',
  },
  {
    id: 'metal-folder-pro',
    title: 'Metal Folder Pro Series',
    description: 'Our flagship metal folding machine combining power and precision. Built for heavy-duty industrial applications with unmatched durability.',
    specs: ['Heavy-gauge capability', 'Automated clamping', 'Multi-axis bending'],
    imgId: 'prod-metal-pro-5w7q',
    titleId: 'prod-metal-pro-title',
    descId: 'prod-metal-pro-desc',
  },
]

const ProductsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="py-20 md:py-28 bg-surface-alt" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="text-copper font-medium text-sm tracking-widest uppercase mb-3">
            Our Machines
          </p>
          <h2 id="products-section-title" className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Precision Folding Solutions
          </h2>
          <p id="products-section-subtitle" className="text-text-medium text-lg max-w-2xl mx-auto">
            From double folders to heavy-duty metal folding machines, our range covers 
            every sheet metal fabrication need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-surface rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-alt">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 id={product.titleId} className="font-[var(--font-heading)] text-xl font-bold text-text-dark mb-3">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-text-medium text-sm leading-relaxed mb-4 flex-1">
                  {product.description}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="text-text-light text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-copper hover:text-copper-dark font-medium text-sm transition-colors no-underline"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection

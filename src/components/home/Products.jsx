import { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'Model DF-3200',
    description: 'Our flagship double folding machine delivers precision bends on both sides in a single pass. Ideal for high-volume production environments demanding consistent quality.',
    features: ['Dual-axis folding system', 'CNC programmable controls', 'Up to 6mm steel capacity', 'Automatic angle correction'],
    imgRatio: '4x3',
    imgWidth: 800,
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    subtitle: 'Model DF-2400',
    description: 'The compact double folder is designed for workshops where space is at a premium without compromising on folding capability or precision.',
    features: ['Compact footprint design', 'Manual & hydraulic modes', 'Up to 4mm steel capacity', 'Quick-change tooling system'],
    imgRatio: '4x3',
    imgWidth: 800,
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'Model SF-4000',
    description: 'A versatile sheet metal folding machine built for general-purpose metalworking. Handles a wide range of materials and thicknesses with ease.',
    features: ['Wide material compatibility', 'Extended bed length options', 'Up to 8mm steel capacity', 'Heavy-duty construction'],
    imgRatio: '4x3',
    imgWidth: 800,
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    subtitle: 'Model MF-5000',
    description: 'Our industrial-grade metal folding machine is built for the most demanding production floors. Maximum power, maximum precision, maximum throughput.',
    features: ['Industrial-grade motor', 'Full CNC integration', 'Up to 12mm steel capacity', 'Automated material handling'],
    imgRatio: '4x3',
    imgWidth: 800,
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="products" ref={containerRef} className="section-padding bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-500 text-sm font-semibold tracking-[0.25em] uppercase block mb-4">
            Our Product Line
          </span>
          <h2 className="text-headline md:text-5xl text-charcoal-950 mb-5 text-balance">
            Precision Metal Folding Solutions
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-steel-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to full-scale industrial machines, every ARTITECT machine is engineered for reliability and precision.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-steel-50 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-xl ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={product.title}
                  data-strk-img-id={`product-img-${product.id}`}
                  data-strk-img={`[${product.id}-desc] [${product.id}-title] [products-section-title]`}
                  data-strk-img-ratio={product.imgRatio}
                  data-strk-img-width={String(product.imgWidth)}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-brand-500 text-white text-xs font-semibold tracking-wider uppercase rounded-sm">
                    {product.subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3
                  id={`${product.id}-title`}
                  className="text-title text-charcoal-950 mb-2"
                >
                  {product.title}
                </h3>
                <p
                  id={`${product.id}-desc`}
                  className="text-steel-500 text-sm leading-relaxed mb-5"
                >
                  {product.description}
                </p>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-charcoal-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo('#contact')}
                  className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-sm tracking-wide uppercase transition-colors cursor-pointer bg-transparent border-none"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Hidden section title for image references */}
        <span id="products-section-title" className="sr-only">
          Precision Metal Folding Solutions
        </span>
      </div>
    </section>
  )
}

export default Products

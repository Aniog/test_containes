import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-performance dual-axis folding system for complex sheet metal profiles with precision bending up to 6mm thickness.',
    imgId: 'prod-dfm-b3k9m2',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double folder designed for continuous production with rapid tool changeover and automated back gauge.',
    imgId: 'prod-df-x7n4p1',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Precision sheet metal folder with CNC control for consistent, repeatable bends across a wide range of materials.',
    imgId: 'prod-smf-q2w8r5',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Full-featured folding machine with multi-axis back gauge and intelligent angle correction for complex parts.',
    imgId: 'prod-smfm-t5y3u9',
    titleId: 'prod-smfm-title',
    descId: 'prod-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Compact metal folder ideal for workshops and small production runs, delivering professional-grade results.',
    imgId: 'prod-mf-a1b6c4',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Heavy-duty metal folder machine built for industrial-scale production with minimal maintenance requirements.',
    imgId: 'prod-mfm-d8e2f7',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Advanced metal folding machine with servo-driven beam and real-time monitoring for maximum throughput.',
    imgId: 'prod-mfm2-g3h9j6',
    titleId: 'prod-mfm2-title',
    descId: 'prod-mfm2-desc',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">
            Our Product Line
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Precision Folding Solutions
          </h2>
          <div className="mt-4 w-16 h-1 bg-brand-gold mx-auto" />
          <p className="mt-6 text-brand-muted text-lg max-w-2xl mx-auto">
            From compact workshop folders to industrial-scale folding systems, we offer a comprehensive range of metal folding machines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white border border-brand-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-1 bg-brand-gold" />
              <div className="relative overflow-hidden">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3
                  id={product.titleId}
                  className="text-lg font-bold text-brand-dark group-hover:text-brand-steel transition-colors"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="mt-3 text-brand-muted text-sm leading-relaxed"
                >
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-brand-gold hover:text-brand-gold-dark text-sm font-semibold transition-colors"
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

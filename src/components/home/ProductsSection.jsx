import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'Heavy-duty dual-beam design for complex, multi-stage sheet metal bending with consistent accuracy.',
    imgId: 'product-double-folding-c1d2e3',
    titleId: 'product-double-folding-title',
    descId: 'product-double-folding-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Compact yet powerful folder ideal for workshops producing intricate double-fold profiles.',
    imgId: 'product-double-folder-a4b5c6',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile manual and hydraulic options for clean, precise folds in steel, aluminum, and stainless.',
    imgId: 'product-sheet-metal-folder-d7e8f9',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'CNC-ready automation that delivers repeatable folds for medium-to-high volume production.',
    imgId: 'product-sheet-metal-folding-g1h2i3',
    titleId: 'product-sheet-metal-folding-title',
    descId: 'product-sheet-metal-folding-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'A robust all-rounder for general metal fabrication, built to handle demanding daily use.',
    imgId: 'product-metal-folder-j4k5l6',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Engineered for reliability, this machine combines rigid construction with smooth operator control.',
    imgId: 'product-metal-folder-machine-m7n8o9',
    titleId: 'product-metal-folder-machine-title',
    descId: 'product-metal-folder-machine-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'High-capacity folding for thick plate and high-tensile materials without sacrificing precision.',
    imgId: 'product-metal-folding-p1q2r3',
    titleId: 'product-metal-folding-title',
    descId: 'product-metal-folding-desc',
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Machines"
          title="Machinery built for precision folding"
          description="From compact workshop folders to industrial folding lines, every ARTITECT machine is engineered for accuracy, durability, and easy operation."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-lg border border-border-soft overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-border-soft">
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
                <h3 id={product.titleId} className="text-xl font-bold text-ink mb-2">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-stone text-sm leading-relaxed mb-5">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold transition-colors"
                >
                  Request details <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button variant="secondary" size="lg" as="a" href="#contact">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  )
}

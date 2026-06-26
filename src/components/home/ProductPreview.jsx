import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const previewProducts = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    desc: 'High-speed automatic double folding for sheet metal up to 6mm thickness.',
    imgId: 'prod-dfm-1a2b3c',
    titleId: 'preview-dfm-title',
    descId: 'preview-dfm-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    desc: 'Versatile manual and CNC sheet metal folding with precision clamping.',
    imgId: 'prod-smf-4d5e6f',
    titleId: 'preview-smf-title',
    descId: 'preview-smf-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    desc: 'Heavy-duty industrial metal folding for large-scale fabrication shops.',
    imgId: 'prod-mfm-7g8h9i',
    titleId: 'preview-mfm-title',
    descId: 'preview-mfm-desc',
  },
]

export default function ProductPreview() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Featured Products
            </h2>
            <p className="text-muted max-w-xl">
              Explore our most popular metal folding solutions trusted by fabricators worldwide.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-gold font-medium hover:text-gold/80 transition-colors mt-4 md:mt-0"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewProducts.map((product) => (
            <Link
              key={product.id}
              to="/products"
              className="bg-surface rounded-xl overflow-hidden border border-border hover:shadow-lg hover:border-gold/40 transition-all group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
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
                <h3
                  id={product.titleId}
                  className="text-lg font-semibold text-navy mb-2"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-muted text-sm leading-relaxed"
                >
                  {product.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

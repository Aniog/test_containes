import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { SectionLabel } from '@/components/ui/SectionLabel'
import ProductCard from './ProductCard'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    shortName: 'Double Folder',
    description:
      'Heavy-duty double folding machine for clean, repeatable bends in sheet metal. Ideal for HVAC, roofing, and general fabrication.',
    specs: ['Max length: 3,200 mm', 'Thickness: up to 2.5 mm', 'CNC backgauge ready'],
    imgId: 'product-double-folding-machine',
    titleId: 'product-title-double-folding-machine',
    descId: 'product-desc-double-folding-machine',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    shortName: 'Compact Double Folder',
    description:
      'A compact double folder engineered for smaller workshops that refuse to compromise on accuracy or build quality.',
    specs: ['Max length: 2,000 mm', 'Thickness: up to 1.6 mm', 'Quick-change tooling'],
    imgId: 'product-double-folder',
    titleId: 'product-title-double-folder',
    descId: 'product-desc-double-folder',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    shortName: 'Sheet Folder',
    description:
      'Versatile sheet metal folder with ergonomic controls and robust framing for high-volume production environments.',
    specs: ['Max length: 2,500 mm', 'Thickness: up to 2.0 mm', 'Foot pedal control'],
    imgId: 'product-sheet-metal-folder',
    titleId: 'product-title-sheet-metal-folder',
    descId: 'product-desc-sheet-metal-folder',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    shortName: 'Folding Machine',
    description:
      'Precision sheet metal folding machine designed for complex profiles and continuous industrial operation.',
    specs: ['Max length: 4,000 mm', 'Thickness: up to 3.0 mm', 'Programmable angles'],
    imgId: 'product-sheet-metal-folding-machine',
    titleId: 'product-title-sheet-metal-folding-machine',
    descId: 'product-desc-sheet-metal-folding-machine',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    shortName: 'Manual Metal Folder',
    description:
      'Reliable manual metal folder offering intuitive operation and consistent results for custom fabrication shops.',
    specs: ['Max length: 1,250 mm', 'Thickness: up to 1.2 mm', 'Benchtop design'],
    imgId: 'product-metal-folder',
    titleId: 'product-title-metal-folder',
    descId: 'product-desc-metal-folder',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    shortName: 'Industrial Folder',
    description:
      'Industrial metal folder machine built for demanding production lines with minimal setup and maximum uptime.',
    specs: ['Max length: 3,000 mm', 'Thickness: up to 2.5 mm', 'Hydraulic clamping'],
    imgId: 'product-metal-folder-machine',
    titleId: 'product-title-metal-folder-machine',
    descId: 'product-desc-metal-folder-machine',
  },
]

export default function ProductGrid() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="products"
      ref={containerRef}
      className="py-20 md:py-28 lg:py-36 bg-am-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="max-w-3xl mb-14 md:mb-20">
          <SectionLabel>Our Machines</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-am-text mb-5">
            Precision Folding Equipment
          </h2>
          <p className="text-base md:text-lg text-am-muted leading-relaxed">
            From compact manual folders to high-capacity CNC folding machines,
            every ARTITECT unit is built for accuracy, repeatability, and years
            of dependable service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              image={
                <img
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

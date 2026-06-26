import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Check, ArrowRight } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description:
      'Heavy-duty dual-beam folder built for high-volume production lines and complex bends.',
    specs: ['Bending length up to 4,000 mm', 'CNC backgauge control', 'Hydraulic crowning'],
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description:
      'Compact double-folder design that delivers two precise folds in a single pass.',
    specs: ['Single-pass double fold', 'Quick tool changeover', 'Energy-efficient drive'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description:
      'Versatile manual and CNC sheet metal folders for workshops of every size.',
    specs: ['Finger pan tooling', 'Box & pan folding', 'Gauge capacity 1.6–4 mm'],
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description:
      'Automated folding machines engineered for consistent, repeatable sheet metal forming.',
    specs: ['Servo-electric option', 'Touchscreen control', 'Automatic angle correction'],
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description:
      'Reliable metal folders that balance industrial power with simple, safe operation.',
    specs: ['Robust steel frame', 'Foot pedal control', 'Safety light curtains'],
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description:
      'Professional metal folder machine with precision blades and low maintenance design.',
    specs: ['Hardened folding blades', 'Depth gauge stops', 'Integrated support arms'],
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description:
      'High-performance metal folding machine for steel, aluminum, and stainless profiles.',
    specs: ['Multi-axis backgauge', 'Tonnage up to 300 T', 'Industry 4.0 ready'],
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="products"
      ref={containerRef}
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#c69c3f]">
            Our Product Line
          </p>
          <h2 id="products-title" className="mt-3 text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl">
            Folding Machines Built for Performance
          </h2>
          <p id="products-subtitle" className="mt-4 text-lg text-[#6b7280]">
            From compact workshop folders to industrial CNC folding lines, every
            machine is precision-built for long-term reliability.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const titleId = `product-title-${product.id}`
            const descId = `product-desc-${product.id}`

            return (
              <article
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#f8f9fa]">
                  <img
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-strk-img-id={`product-img-${product.id}`}
                    data-strk-img={`[${descId}] [${titleId}] [products-title] [products-subtitle]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3
                    id={titleId}
                    className="text-xl font-bold text-[#1a1a1a]"
                  >
                    {product.title}
                  </h3>
                  <p id={descId} className="mt-2 flex-1 text-[#6b7280]">
                    {product.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-2 text-sm text-[#6b7280]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c69c3f]" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#c69c3f] transition-colors hover:text-[#b08a35]"
                  >
                    Inquire now <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

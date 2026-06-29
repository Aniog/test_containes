import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Gauge, Layers, Settings } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const allProducts = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine DF-3000',
    tagline: 'Heavy-duty double folding for high-volume production',
    description:
      'The DF-3000 is our flagship double folding machine, engineered for continuous operation in demanding manufacturing environments. It delivers precise, repeatable double folds on sheet metal up to 3mm thick.',
    specs: [
      'Max sheet width: 3000mm',
      'Max thickness: 3mm (mild steel)',
      'Folding angle: 0° – 135°',
      'CNC-controlled back gauge',
      'Hydraulic clamping system',
    ],
    imgId: 'product-df3000-img',
    titleId: 'prod-df3000-title',
    descId: 'prod-df3000-desc',
  },
  {
    id: 'double-folder',
    name: 'Double Folder DF-2000',
    tagline: 'Compact double folder for mid-size workshops',
    description:
      'The DF-2000 brings double folding capability to smaller shops. With a compact footprint and user-friendly digital controls, it offers professional-grade folding without the space requirements of larger machines.',
    specs: [
      'Max sheet width: 2000mm',
      'Max thickness: 2mm (mild steel)',
      'Folding angle: 0° – 135°',
      'Digital angle readout',
      'Manual clamping with quick-release',
    ],
    imgId: 'product-df2000-img',
    titleId: 'prod-df2000-title',
    descId: 'prod-df2000-desc',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder SMF-2500',
    tagline: 'Versatile sheet metal folding for custom fabrication',
    description:
      'The SMF-2500 is our most versatile sheet metal folding machine. Designed for custom fabrication shops, it handles a wide variety of materials and fold configurations with ease — from simple bends to complex profiles.',
    specs: [
      'Max sheet width: 2500mm',
      'Max thickness: 2.5mm (mild steel)',
      'Folding angle: 0° – 180°',
      'Segmented clamping beam',
      'Adjustable folding beam speed',
    ],
    imgId: 'product-smf2500-img',
    titleId: 'prod-smf2500-title',
    descId: 'prod-smf2500-desc',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder MF-1500',
    tagline: 'Entry-level metal folder with professional results',
    description:
      'The MF-1500 is the perfect entry point into professional metal folding. Affordable, reliable, and easy to operate, it delivers consistent results for small to medium fabrication tasks.',
    specs: [
      'Max sheet width: 1500mm',
      'Max thickness: 1.5mm (mild steel)',
      'Folding angle: 0° – 135°',
      'Manual back gauge',
      'Counterbalanced folding beam',
    ],
    imgId: 'product-mf1500-img',
    titleId: 'prod-mf1500-title',
    descId: 'prod-mf1500-desc',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine MFM-4000',
    tagline: 'Industrial-grade folding for the largest sheets',
    description:
      'The MFM-4000 is built for the biggest jobs. With a massive 4000mm working width and robust construction, it handles large-scale sheet metal folding with uncompromising precision and power.',
    specs: [
      'Max sheet width: 4000mm',
      'Max thickness: 4mm (mild steel)',
      'Folding angle: 0° – 135°',
      'Servo-driven back gauge',
      'Heavy-duty hydraulic system',
    ],
    imgId: 'product-mfm4000-img',
    titleId: 'prod-mfm4000-title',
    descId: 'prod-mfm4000-desc',
  },
]

const specIcons = {
  'Max sheet width': Layers,
  'Max thickness': Gauge,
  'Folding angle': Settings,
}

function getSpecIcon(label) {
  for (const key of Object.keys(specIcons)) {
    if (label.startsWith(key)) return specIcons[key]
  }
  return Check
}

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Our Machines
          </span>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold text-warm-white tracking-tight">
            Precision Sheet Metal
            <br />
            Folding Equipment
          </h1>
          <p className="mt-4 text-lg text-text-on-dark/70 max-w-2xl mx-auto">
            Explore our complete range of double folding machines, metal folders,
            and sheet metal folding equipment — each engineered for reliability
            and ease of use.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {allProducts.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-200 shadow-sm">
                    <img
                      alt={product.name}
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <span className="text-gold text-sm font-semibold uppercase tracking-widest">
                    {product.tagline}
                  </span>
                  <h2 id={product.titleId} className="mt-2 text-2xl md:text-3xl font-bold text-navy tracking-tight">
                    {product.name}
                  </h2>
                  <p id={product.descId} className="mt-4 text-text-secondary leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {product.specs.map((spec) => {
                      const Icon = getSpecIcon(spec)
                      return (
                        <li key={spec} className="flex items-center gap-3 text-sm text-text-secondary">
                          <Icon className="w-4 h-4 text-gold flex-shrink-0" />
                          {spec}
                        </li>
                      )
                    })}
                  </ul>

                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-navy text-warm-white hover:bg-navy/90 transition-colors"
                  >
                    Request a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
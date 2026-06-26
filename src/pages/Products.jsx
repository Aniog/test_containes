import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'a7',
    eyebrow: 'Flagship · Double Folder',
    title: 'A-7 Double Folding Machine',
    description:
      'Twin-beam architecture for advanced profiles and complex panels. The A-7 is our most refined double folder, designed for fabricators producing architectural cladding, façade panels and high-precision components.',
    features: [
      'Working length up to 4.0 m',
      'Capacity up to 1.5 mm mild steel',
      'CNC back-gauge with 0.05 mm accuracy',
      '15" multi-touch operator console',
    ],
    imgId: 'product-a7-detail-7d2c1f',
    titleId: 'product-a7-title',
    descId: 'product-a7-desc',
  },
  {
    id: 's5',
    eyebrow: 'Workhorse · Sheet Metal Folder',
    title: 'S-5 Sheet Metal Folder',
    description:
      'A daily-driver sheet metal folding machine for general fabrication shops. The S-5 balances cost and capability with a refined back-gauge and an honest, mechanical feel.',
    features: [
      'Working length up to 3.2 m',
      'Capacity up to 1.2 mm mild steel',
      'Powered back-gauge with manual override',
      'Segmented upper beam, quick-change',
    ],
    imgId: 'product-s5-detail-c1f9a4',
    titleId: 'product-s5-title',
    descId: 'product-s5-desc',
  },
  {
    id: 'c3',
    eyebrow: 'Compact · Metal Folder',
    title: 'C-3 Compact Metal Folder',
    description:
      'A studio-scale metal folder built for designers, prototyping shops and architectural detailers. Compact footprint, precise hinge, and an analog control feel that operators love.',
    features: [
      'Working length up to 2.0 m',
      'Capacity up to 1.0 mm mild steel',
      'Mechanical back-gauge, fine adjust',
      'Bench or floor-standing configuration',
    ],
    imgId: 'product-c3-detail-9a4e2b',
    titleId: 'product-c3-title',
    descId: 'product-c3-desc',
  },
  {
    id: 'h9',
    eyebrow: 'Heavy Duty · Double Folder',
    title: 'H-9 Heavy Double Folder',
    description:
      'Built for thicker stock and continuous-shift operation. The H-9 inherits the A-7 geometry but adds reinforced beams and an upgraded hydraulic clamping system.',
    features: [
      'Working length up to 4.0 m',
      'Capacity up to 2.5 mm mild steel',
      'Hydraulic clamping, programmable',
      'Stress-relieved frame, two-shift duty',
    ],
    imgId: 'product-h9-detail-5e1b8c',
    titleId: 'product-h9-title',
    descId: 'product-h9-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <span className="text-xs uppercase tracking-[0.28em] text-amber-700 font-medium">
            Product Range
          </span>
          <h1 className="mt-5 font-serif text-4xl md:text-6xl text-stone-900 leading-[1.05] tracking-tight max-w-3xl">
            Four folders. One philosophy of precision.
          </h1>
          <p className="mt-6 text-base md:text-lg text-stone-600 leading-relaxed max-w-2xl">
            Every ARTITECT folding machine is built around the same priorities:
            a clean fold, a confident operator, and a frame that holds its
            geometry for decades. Choose the configuration that fits your shop.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 flex flex-col gap-20 md:gap-28">
          {products.map((p, index) => {
            const isReversed = index % 2 === 1
            return (
              <article
                key={p.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div
                  className={
                    'lg:col-span-7 ' +
                    (isReversed ? 'lg:order-2' : 'lg:order-1')
                  }
                >
                  <div className="aspect-[4/3] overflow-hidden border border-stone-200 bg-stone-100">
                    <img
                      alt={p.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={p.imgId}
                      data-strk-img={`[${p.descId}] [${p.titleId}] industrial sheet metal folder`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="1100"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>

                <div
                  className={
                    'lg:col-span-5 ' +
                    (isReversed ? 'lg:order-1' : 'lg:order-2')
                  }
                >
                  <span className="text-xs uppercase tracking-[0.28em] text-amber-700 font-medium">
                    {p.eyebrow}
                  </span>
                  <h2
                    id={p.titleId}
                    className="mt-5 font-serif text-3xl md:text-4xl text-stone-900 leading-tight tracking-tight"
                  >
                    {p.title}
                  </h2>
                  <p
                    id={p.descId}
                    className="mt-5 text-base text-stone-600 leading-relaxed"
                  >
                    {p.description}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {p.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-stone-700">
                        <Check className="w-4 h-4 mt-0.5 text-amber-700 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-10 inline-flex items-center gap-2 border border-stone-900 text-stone-900 px-6 py-3 text-xs tracking-[0.22em] uppercase font-medium hover:bg-stone-900 hover:text-stone-50 transition-colors"
                  >
                    Request specification
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h3 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight leading-tight">
                Not sure which folder fits your shop?
              </h3>
              <p className="mt-4 text-stone-600 max-w-2xl leading-relaxed">
                Send us your typical material sizes, finishes and volumes. Our
                engineers will respond with a recommended configuration within
                two working days.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-7 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-amber-800 transition-colors"
              >
                Talk to an engineer
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

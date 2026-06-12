import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Eyebrow from '@/components/Eyebrow'

const products = [
  {
    id: 'a-series',
    number: '01',
    name: 'A-Series Double Folding Machine',
    descId: 'home-product-a-series-desc',
    titleId: 'home-product-a-series-title',
    imgId: 'home-product-a-series-img-7c2',
    description:
      'Twin upper and lower folding beams allow the A-Series to bend in both directions without flipping the workpiece — the choice of architectural fabricators.',
  },
  {
    id: 'm-series',
    number: '02',
    name: 'M-Series Sheet Metal Folder',
    descId: 'home-product-m-series-desc',
    titleId: 'home-product-m-series-title',
    imgId: 'home-product-m-series-img-9d4',
    description:
      'A workshop staple. Manual sheet metal folder built around a heavy cast frame — known for repeatability across decades of use.',
  },
  {
    id: 'cnc-series',
    number: '03',
    name: 'CNC Metal Folding Machine',
    descId: 'home-product-cnc-series-desc',
    titleId: 'home-product-cnc-series-title',
    imgId: 'home-product-cnc-series-img-2e1',
    description:
      'Servo-driven control with a tactile interface. Programmable folds, repeatable to 0.1mm, with the elegance of a manual lever.',
  },
]

const HomeProducts = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-bone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <Eyebrow className="mb-6">The Range</Eyebrow>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
              Three machines.
              <br />
              <span className="italic text-brass">One philosophy.</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-ink border-b border-ink pb-1 hover:text-brass hover:border-brass transition-colors w-fit"
          >
            View All Products
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-mist">
          {products.map((p) => (
            <article key={p.id} className="bg-bone p-8 md:p-10 group">
              <div className="aspect-[4/3] mb-8 overflow-hidden bg-mist">
                <img
                  alt={p.name}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}] sheet metal folding machine`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="font-serif text-brass text-2xl mb-3">{p.number}</div>
              <h3
                id={p.titleId}
                className="font-serif font-medium text-2xl text-ink mb-4 leading-tight"
              >
                {p.name}
              </h3>
              <p id={p.descId} className="text-steel text-sm leading-relaxed mb-6">
                {p.description}
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-ink hover:text-brass transition-colors"
              >
                Learn More
                <ArrowUpRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeProducts

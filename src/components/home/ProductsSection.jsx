import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  { title: 'Electronics & Components', desc: 'PCBs, cables, chargers, smart devices, consumer electronics.', imgId: 'prod-electronics' },
  { title: 'Machinery & Industrial', desc: 'Manufacturing equipment, tooling, spare parts, automation systems.', imgId: 'prod-machinery' },
  { title: 'Textiles & Apparel', desc: 'Fabrics, garments, bags, footwear, home textiles.', imgId: 'prod-textiles' },
  { title: 'Home & Furniture', desc: 'Furniture, kitchenware, lighting, decor, bathroom fixtures.', imgId: 'prod-home' },
  { title: 'Packaging Materials', desc: 'Boxes, bags, bottles, labels, custom printed packaging.', imgId: 'prod-packaging' },
  { title: 'Auto Parts & Accessories', desc: 'Replacement parts, accessories, EV components, car care.', imgId: 'prod-autoparts' },
]

export default function ProductsSection() {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      return ImageHelper.loadImages(strkImgConfig, ref.current)
    }
  }, [])

  return (
    <section ref={ref} className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Products We Source</h2>
            <p className="mt-3 max-w-xl text-slate-500">
              We have experience sourcing across dozens of product categories. Here are some of the most common.
            </p>
          </div>
          <Link to="/products" className="inline-flex items-center gap-1 text-sm font-medium text-navy-950 hover:underline">
            View all categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden bg-slate-100">
                <img
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[prod-desc-${p.imgId}] [prod-title-${p.imgId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 id={`prod-title-${p.imgId}`} className="mb-1 text-base font-semibold">{p.title}</h3>
                <p id={`prod-desc-${p.imgId}`} className="text-sm text-slate-500">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

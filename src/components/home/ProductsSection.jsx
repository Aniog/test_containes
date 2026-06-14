import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Boxes, Shirt, Cpu, Sofa, Package, Factory as FactoryIcon } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    icon: Boxes,
    title: 'Consumer Products',
    sub: 'Household, lifestyle, pet, stationery',
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    sub: 'Knitwear, workwear, home textiles, OEM fabrics',
  },
  {
    icon: Cpu,
    title: 'Electronics & Components',
    sub: 'Consumer electronics, PCBs, batteries, accessories',
  },
  {
    icon: Sofa,
    title: 'Furniture & Home',
    sub: 'Indoor & outdoor furniture, kitchen, decor',
  },
  {
    icon: Package,
    title: 'Packaging & Print',
    sub: 'Boxes, bags, labels, custom printing',
  },
  {
    icon: FactoryIcon,
    title: 'Industrial & Hardware',
    sub: 'Machinery parts, tooling, fasteners, OEM metal',
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-y bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="eyebrow">Products We Source</div>
            <h2
              id="products-headline"
              className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy"
            >
              Across consumer, industrial, and OEM categories
            </h2>
            <p id="products-sub" className="mt-3 text-ink-soft">
              We have vetted factories in the major manufacturing clusters in
              Guangdong, Zhejiang, Jiangsu, Shandong, and Fujian. Below are some
              of the categories we handle every week.
            </p>
          </div>
          <Link to="/products" className="btn-secondary self-start md:self-auto">
            All categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, idx) => {
            const Icon = p.icon
            return (
              <Link
                to={`/products?cat=${idx}`}
                key={p.title}
                className="group rounded-2xl border border-hairline bg-white overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="aspect-[16/10] relative">
                  <div
                    className="w-full h-full"
                    data-strk-bg-id={`product-bg-${idx}-${p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Math.random().toString(36).slice(2, 7)}`}
                    data-strk-bg="[products-headline] [products-sub]"
                    data-strk-bg-ratio="16x10"
                    data-strk-bg-width="600"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="icon-tile">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-navy">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-ink-soft">{p.sub}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-primary-hover">
                    See factories <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

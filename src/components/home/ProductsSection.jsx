import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    title: 'Electronics & Components',
    desc: 'PCBA, consumer electronics, cables, adapters, and smart devices from Shenzhen and Dongguan hubs.',
  },
  {
    title: 'Home & Kitchen',
    desc: 'Cookware, small appliances, storage solutions, and home accessories from Zhejiang and Guangdong.',
  },
  {
    title: 'Industrial & Hardware',
    desc: 'Machinery parts, tools, fasteners, and custom metal fabrication from industrial clusters.',
  },
  {
    title: 'Textiles & Apparel',
    desc: 'Fabrics, garments, bags, and accessories from Jiangsu, Zhejiang, and Guangdong provinces.',
  },
  {
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, gift packaging, and printed materials at competitive MOQs.',
  },
  {
    title: 'Outdoor & Sporting Goods',
    desc: 'Camping gear, fitness equipment, and sports accessories with quality certification support.',
  },
]

export default function ProductsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Products We Source
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            What We Can Source for You
          </h2>
          <p className="mt-4 text-slate-500">
            We source across a wide range of product categories from China's major manufacturing regions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.title}
              className="group overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/products" className="btn-secondary gap-2">
            View All Categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

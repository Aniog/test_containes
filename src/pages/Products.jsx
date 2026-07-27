import { Link } from 'react-router-dom'
import { ArrowRight, Factory, FileCheck, TrendingUp } from 'lucide-react'

const categories = [
  {
    title: 'Electronics & Components',
    desc: 'PCBA, consumer electronics, cables, adapters, smart home devices, power banks, and electronic components.',
    regions: 'Shenzhen, Dongguan, Guangzhou',
  },
  {
    title: 'Home & Kitchen',
    desc: 'Cookware, small appliances, storage containers, kitchen gadgets, and home organization products.',
    regions: 'Zhejiang, Guangdong, Jiangsu',
  },
  {
    title: 'Industrial & Hardware',
    desc: 'Machinery parts, hand tools, fasteners, bearings, valves, and custom metal fabrication.',
    regions: 'Zhejiang, Jiangsu, Hebei',
  },
  {
    title: 'Textiles & Apparel',
    desc: 'Fabrics, garments, bags, shoes, accessories, and home textiles with customization support.',
    regions: 'Guangdong, Zhejiang, Jiangsu',
  },
  {
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, gift packaging, retail display packaging, and printed materials.',
    regions: 'Zhejiang, Guangdong, Fujian',
  },
  {
    title: 'Outdoor & Sporting Goods',
    desc: 'Camping gear, fitness equipment, sports accessories, bicycles, and recreational products.',
    regions: 'Zhejiang, Fujian, Guangdong',
  },
  {
    title: 'Beauty & Personal Care',
    desc: 'Skincare tools, cosmetics packaging, hair accessories, and personal grooming products.',
    regions: 'Guangdong, Zhejiang',
  },
  {
    title: 'Toys & Baby Products',
    desc: 'Educational toys, plush toys, baby care items, and children\'s accessories with safety certification support.',
    regions: 'Guangdong, Zhejiang',
  },
]

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary">
        <div className="container-main py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-300">Products We Source</span>
            <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
              What We Can Source for You
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              We source across a wide range of categories from China's major manufacturing regions. If you do not see your product listed, contact us — we probably source it already.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((c) => (
              <div
                key={c.title}
                className="group flex flex-col overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                    {c.desc}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
                    <Factory className="h-3.5 w-3.5" />
                    {c.regions}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we handle different products */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">How We Handle Different Product Types</h2>
            <p className="mt-4 text-slate-500">
              Different products require different expertise. Our team has specialists for each major category.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <FileCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Compliance & Certifications</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                We help ensure your products meet target market regulations — CE, FCC, RoHS, FDA, and more. We coordinate third-party lab testing when needed.
              </p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Factory className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Custom Manufacturing</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Need a custom design or OEM production? We work with factories that support mold development, custom materials, and private labeling.
              </p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Scaling Production</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Starting small and planning to scale? We select factories with capacity to grow with you, avoiding the need to switch suppliers later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent">
        <div className="container-main py-16 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Do Not See Your Product Category?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-100">
            We source much more than what is listed here. Send us your product details and we will tell you exactly how we can help.
          </p>
          <div className="mt-6">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-slate-100">
              Request a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

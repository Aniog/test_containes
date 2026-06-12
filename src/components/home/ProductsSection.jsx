import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics',
    desc: 'Audio, lighting, small appliances, accessories — Shenzhen and Pearl River Delta.',
    descId: 'home-product-consumer-electronics-desc',
    titleId: 'home-product-consumer-electronics-title',
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    desc: 'Cookware, tableware, organizers, small home goods — Yiwu, Ningbo, Chaozhou.',
    descId: 'home-product-home-kitchen-desc',
    titleId: 'home-product-home-kitchen-title',
  },
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    desc: 'Knitwear, woven garments, accessories, bags — Guangzhou, Shantou, Hangzhou.',
    descId: 'home-product-apparel-textiles-desc',
    titleId: 'home-product-apparel-textiles-title',
  },
  {
    id: 'promotional-gifts',
    title: 'Promotional & Gifts',
    desc: 'Branded merchandise, drinkware, stationery, event giveaways — Yiwu hub.',
    descId: 'home-product-promotional-gifts-desc',
    titleId: 'home-product-promotional-gifts-title',
  },
  {
    id: 'industrial-hardware',
    title: 'Industrial & Hardware',
    desc: 'Tools, fasteners, fittings, OEM metal &amp; plastic parts — Ningbo, Foshan.',
    descId: 'home-product-industrial-hardware-desc',
    titleId: 'home-product-industrial-hardware-title',
  },
  {
    id: 'beauty-personal-care',
    title: 'Beauty & Personal Care',
    desc: 'Brushes, accessories, packaging, OEM formulations — Guangdong region.',
    descId: 'home-product-beauty-personal-care-desc',
    titleId: 'home-product-beauty-personal-care-title',
  },
  {
    id: 'outdoor-sports',
    title: 'Outdoor & Sports',
    desc: 'Camping, fitness, cycling, travel gear — Quanzhou, Yongkang, Ningbo.',
    descId: 'home-product-outdoor-sports-desc',
    titleId: 'home-product-outdoor-sports-title',
  },
  {
    id: 'packaging',
    title: 'Packaging',
    desc: 'Custom boxes, bags, displays, eco-friendly packaging — Shenzhen, Dongguan.',
    descId: 'home-product-packaging-desc',
    titleId: 'home-product-packaging-title',
  },
]

export default function ProductsSection() {
  return (
    <section className="bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] font-semibold text-brand-blue">
              Products we source
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand-navy">
              Categories where we have on-the-ground experience
            </h2>
            <p className="mt-4 text-base text-brand-muted leading-relaxed">
              Our network covers the main manufacturing clusters in China.
              Don&apos;t see your product? We can still help — most categories share the same sourcing principles.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-navy"
          >
            See full list
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <article
              key={p.id}
              className="group rounded-xl border border-brand-border bg-white overflow-hidden hover:shadow-md transition"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500"
                  data-strk-img-id={`home-product-${p.id}-img`}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-4">
                <h3 id={p.titleId} className="text-sm md:text-base font-semibold text-brand-navy">
                  {p.title}
                </h3>
                <p id={p.descId} className="mt-1.5 text-xs md:text-sm text-brand-muted leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import PageHeader from '../components/PageHeader'
import CTASection from '../components/CTASection'

const categories = [
  {
    id: 'consumer-electronics',
    title: 'Consumer Electronics',
    desc: 'Bluetooth audio, lighting, smart home accessories, chargers, cables and small appliances. Strong supplier base in Shenzhen and the Pearl River Delta.',
    items: ['Bluetooth speakers', 'LED lighting', 'Power banks', 'Cables & adapters', 'Smart home accessories'],
    region: 'Shenzhen · Dongguan · Huizhou',
    titleId: 'products-page-consumer-electronics-title',
    descId: 'products-page-consumer-electronics-desc',
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    desc: 'Cookware, tableware, storage, organizers, small home goods. Mature clusters in Yiwu, Ningbo and Chaozhou.',
    items: ['Cookware sets', 'Tableware', 'Storage & organizers', 'Cleaning tools', 'Decor'],
    region: 'Yiwu · Ningbo · Chaozhou',
    titleId: 'products-page-home-kitchen-title',
    descId: 'products-page-home-kitchen-desc',
  },
  {
    id: 'apparel-textiles',
    title: 'Apparel & Textiles',
    desc: 'Knitwear, woven garments, accessories and bags. Suitable for private label brands and distributors.',
    items: ['Knitwear', 'Woven shirts & pants', 'T-shirts & basics', 'Accessories', 'Bags & luggage'],
    region: 'Guangzhou · Shantou · Hangzhou',
    titleId: 'products-page-apparel-textiles-title',
    descId: 'products-page-apparel-textiles-desc',
  },
  {
    id: 'promotional-gifts',
    title: 'Promotional & Gifts',
    desc: 'Branded merchandise for corporates, agencies and event distributors. Yiwu is the global hub for this category.',
    items: ['Drinkware', 'Stationery', 'Tech gifts', 'Event giveaways', 'Custom packaging'],
    region: 'Yiwu · Ningbo',
    titleId: 'products-page-promotional-gifts-title',
    descId: 'products-page-promotional-gifts-desc',
  },
  {
    id: 'industrial-hardware',
    title: 'Industrial & Hardware',
    desc: 'Tools, fasteners, pneumatic & hydraulic fittings, OEM metal and plastic parts. Strong machining clusters across Zhejiang.',
    items: ['Hand tools', 'Power tool accessories', 'Fasteners & fittings', 'OEM metal parts', 'OEM plastic parts'],
    region: 'Ningbo · Yongkang · Foshan',
    titleId: 'products-page-industrial-hardware-title',
    descId: 'products-page-industrial-hardware-desc',
  },
  {
    id: 'beauty-personal-care',
    title: 'Beauty & Personal Care',
    desc: 'Brushes, accessories, cosmetic packaging and OEM formulations. Compliance and certifications carefully managed.',
    items: ['Makeup brushes', 'Hair tools', 'Cosmetic packaging', 'Skincare OEM', 'Personal care devices'],
    region: 'Guangzhou · Yiwu',
    titleId: 'products-page-beauty-personal-care-title',
    descId: 'products-page-beauty-personal-care-desc',
  },
  {
    id: 'outdoor-sports',
    title: 'Outdoor & Sports',
    desc: 'Camping, fitness, cycling and travel gear. Quanzhou and Yongkang have deep manufacturing capacity in this segment.',
    items: ['Camping gear', 'Cycling accessories', 'Fitness equipment', 'Travel gear', 'Pet outdoor'],
    region: 'Quanzhou · Yongkang · Ningbo',
    titleId: 'products-page-outdoor-sports-title',
    descId: 'products-page-outdoor-sports-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging',
    desc: 'Custom boxes, bags, displays, shipping cartons, retail-ready and eco-friendly packaging.',
    items: ['Custom boxes', 'Mailer bags', 'Retail displays', 'Shipping cartons', 'Eco packaging'],
    region: 'Shenzhen · Dongguan',
    titleId: 'products-page-packaging-title',
    descId: 'products-page-packaging-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture',
    desc: 'Office and home furniture, lighting and decor. Suitable for hospitality and B2B distribution buyers.',
    items: ['Office chairs', 'Sofas & couches', 'Storage furniture', 'Lighting', 'Decor pieces'],
    region: 'Foshan · Dongguan · Hangzhou',
    titleId: 'products-page-furniture-title',
    descId: 'products-page-furniture-desc',
  },
]

export default function Products() {
  return (
    <>
      <PageHeader
        eyebrow="Products we source"
        title="Categories where we have on-the-ground experience"
        subtitle="Our network covers the main manufacturing clusters in China. If your category isn't listed, ask — most categories share the same sourcing principles."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <article
                key={c.id}
                className="group rounded-xl border border-brand-border bg-white overflow-hidden flex flex-col hover:shadow-md transition"
              >
                <div className="aspect-[3/2] bg-slate-100 overflow-hidden">
                  <img
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500"
                    data-strk-img-id={`products-page-${c.id}-img`}
                    data-strk-img={`[${c.descId}] [${c.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs uppercase tracking-wider font-semibold text-brand-blue">
                    {c.region}
                  </p>
                  <h2 id={c.titleId} className="mt-2 text-lg font-semibold text-brand-navy">
                    {c.title}
                  </h2>
                  <p id={c.descId} className="mt-2 text-sm text-brand-muted leading-relaxed">
                    {c.desc}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.items.map((it) => (
                      <li
                        key={it}
                        className="text-xs text-brand-navy bg-brand-surface border border-brand-border rounded-full px-3 py-1"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

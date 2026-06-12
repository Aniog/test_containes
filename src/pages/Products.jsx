import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'

const categories = [
  {
    id: 'electronics',
    name: 'Consumer Electronics',
    desc: 'Wearables, audio, accessories, IoT devices and small appliances. We work with factories holding CE, FCC, RoHS and PSE certifications.',
    items: ['Bluetooth speakers', 'Power banks & chargers', 'Smart accessories', 'Wearables', 'Small home appliances'],
    cluster: 'Shenzhen, Dongguan, Ningbo',
  },
  {
    id: 'home-kitchen',
    name: 'Home & Kitchen',
    desc: 'Cookware, storage, table-top, decor and small kitchen appliances. Compliant with LFGB, FDA and EU food-contact standards.',
    items: ['Stainless cookware', 'Bakeware', 'Storage & organization', 'Decor & textiles', 'Small kitchen appliances'],
    cluster: 'Yongkang, Yiwu, Foshan',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    desc: 'Knit and woven garments, accessories and home textiles. OEM and private label, GOTS and OEKO-TEX where required.',
    items: ['T-shirts & polos', 'Knitwear', 'Outerwear', 'Underwear & socks', 'Bedding & towels'],
    cluster: 'Guangzhou, Hangzhou, Nantong',
  },
  {
    id: 'furniture',
    name: 'Furniture',
    desc: 'Office, home and outdoor furniture, including OEM and ODM. We coordinate fumigation and FCL loading plans.',
    items: ['Office chairs', 'Sofas & seating', 'Storage furniture', 'Outdoor furniture', 'Wood and metal lines'],
    cluster: 'Foshan, Dongguan, Linyi',
  },
  {
    id: 'industrial',
    name: 'Industrial & Hardware',
    desc: 'Tools, fasteners, fittings, and industrial components. Material certificates, third-party tests on request.',
    items: ['Hand tools', 'Power tools', 'Fasteners & fittings', 'Hose & couplings', 'Mechanical parts'],
    cluster: 'Yongkang, Ningbo, Qingdao',
  },
  {
    id: 'outdoor',
    name: 'Outdoor & Sports',
    desc: 'Camping, fitness, cycling and water sports gear. We support field testing and certifications such as EN, ASTM.',
    items: ['Camping gear', 'Bikes & accessories', 'Fitness equipment', 'Hydration & coolers', 'Water sports'],
    cluster: 'Ningbo, Xiamen, Tianjin',
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    desc: 'Tools, packaging, accessories and ODM products. Compatible with GMP, ISO 22716 partners.',
    items: ['Hair tools', 'Brushes & sponges', 'Cosmetic packaging', 'Skincare devices', 'Personal care accessories'],
    cluster: 'Yiwu, Guangzhou, Shenzhen',
  },
  {
    id: 'toys',
    name: 'Toys & Baby',
    desc: 'CE, EN71, ASTM, CPC-compliant toys and baby products. We coordinate independent lab testing.',
    items: ['Plush toys', 'Plastic toys', 'Educational toys', 'Strollers & carriers', 'Feeding accessories'],
    cluster: 'Shantou, Yiwu, Ningbo',
  },
  {
    id: 'auto',
    name: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto parts and car accessories. We support material reports and dimensional inspection.',
    items: ['Lighting', 'Interior accessories', 'Cleaning & care', 'Replacement parts', 'EV accessories'],
    cluster: 'Guangzhou, Ningbo, Wenzhou',
  },
]

const notWeFocus = [
  'Food, beverage, and agricultural products',
  'Pharmaceuticals and medical devices',
  'Hazardous chemicals and dangerous goods',
]

export default function Products() {
  const containerRef = useRef(null)
  useEffect(() => {
    let cleanup
    ;(async () => {
      try {
        const sdk = await import('@strikingly/sdk')
        const cfg = await import('../strk-img-config.json')
        if (sdk?.ImageHelper?.loadImages && containerRef.current) {
          cleanup = sdk.ImageHelper.loadImages(cfg.default || cfg, containerRef.current)
        }
      } catch (e) { /* ignore */ }
    })()
    return () => { if (typeof cleanup === 'function') cleanup() }
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Products We Source"
        title="B2B import categories we know in depth"
        description="We focus on categories where we have strong, vetted supplier networks and recurring buyers. If your category is here, you can expect faster shortlisting and better pricing."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <article
                key={c.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md hover:border-brand-blue transition flex flex-col"
              >
                <img
                  alt={c.name}
                  className="w-full aspect-[3/2] object-cover"
                  data-strk-img-id={`prod-detail-${c.id}-2c`}
                  data-strk-img={`[prod-detail-${c.id}-desc] [prod-detail-${c.id}-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 id={`prod-detail-${c.id}-title`} className="text-lg font-semibold text-slate-900 mb-2">
                    {c.name}
                  </h3>
                  <p id={`prod-detail-${c.id}-desc`} className="text-sm text-slate-600 leading-relaxed mb-4">
                    {c.desc}
                  </p>
                  <ul className="space-y-1.5 text-sm text-slate-700 mb-4">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-3 border-t border-slate-100 text-xs text-slate-500">
                    Main clusters: <span className="text-slate-700 font-medium">{c.cluster}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Categories we do not handle
            </h3>
            <p className="text-slate-600 mb-4">
              To stay focused and offer real expertise, we currently do not source the following:
            </p>
            <ul className="space-y-2 text-slate-700">
              {notWeFocus.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-slate-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-500">
              If your product is borderline, get in touch and we will tell you
              honestly whether we are the right partner.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Don&apos;t see your category?
          </h2>
          <p className="mt-4 text-slate-600">
            Send us a short brief. If we are not a fit, we will tell you and
            often suggest a more specialized partner.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentDark text-white px-7 py-3 rounded-md font-semibold transition"
          >
            Send your brief <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

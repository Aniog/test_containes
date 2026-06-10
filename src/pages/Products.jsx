import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import PageHero from '../components/site/PageHero'
import CTASection from '../components/site/CTASection'

const productGroups = [
  {
    id: 'home-kitchen',
    name: 'Home & Kitchen',
    desc: 'Cookware, kitchen tools, small appliances, household goods, storage and organization.',
    examples: ['Stainless cookware', 'Silicone kitchenware', 'Small appliances', 'Storage containers'],
    region: 'Guangdong, Zhejiang',
  },
  {
    id: 'electronics',
    name: 'Consumer Electronics',
    desc: 'Mobile accessories, audio products, smart home devices, IoT products and OEM electronics.',
    examples: ['Bluetooth audio', 'Power banks & cables', 'Smart home', 'Wearables'],
    region: 'Shenzhen, Dongguan',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    desc: 'Knitwear, woven garments, sportswear, accessories, home textiles and fabrics.',
    examples: ['T-shirts & polos', 'Activewear', 'Accessories', 'Home textiles'],
    region: 'Guangzhou, Hangzhou',
  },
  {
    id: 'furniture',
    name: 'Furniture',
    desc: 'Indoor, outdoor, hospitality and contract furniture in wood, metal and rattan.',
    examples: ['Office chairs', 'Outdoor sets', 'Flat-pack', 'Hospitality FF&E'],
    region: 'Foshan, Guangzhou',
  },
  {
    id: 'industrial',
    name: 'Industrial & Hardware',
    desc: 'Tools, fasteners, components, fittings, electrical hardware and metal parts.',
    examples: ['Hand tools', 'Fasteners', 'Castings', 'Electrical fittings'],
    region: 'Hebei, Shandong',
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    desc: 'Custom cosmetic packaging, beauty tools, accessories and OEM personal-care products.',
    examples: ['Bottles & jars', 'Makeup brushes', 'Beauty tools', 'OEM skincare'],
    region: 'Guangzhou, Yiwu',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    desc: 'Fitness, cycling, camping, watersports and outdoor lifestyle products.',
    examples: ['Yoga & fitness', 'Camping gear', 'Cycling accessories', 'Outdoor lighting'],
    region: 'Zhejiang, Fujian',
  },
  {
    id: 'toys',
    name: 'Toys & Baby',
    desc: 'Toys, baby and children products with full safety/certification support.',
    examples: ['Plush & plastic toys', 'Educational toys', 'Strollers', 'Baby accessories'],
    region: 'Guangdong, Shantou',
  },
  {
    id: 'auto',
    name: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto accessories, in-car electronics and motorcycle parts.',
    examples: ['Car interior', 'Lighting', 'Tools', 'Motorcycle parts'],
    region: 'Zhejiang, Guangdong',
  },
  {
    id: 'packaging',
    name: 'Packaging',
    desc: 'Custom-printed packaging, retail boxes, pouches, labels and shipping materials.',
    examples: ['Folding cartons', 'Pouches & bags', 'Labels & stickers', 'Shipping materials'],
    region: 'Guangdong, Shanghai',
  },
  {
    id: 'pet',
    name: 'Pet & Lifestyle',
    desc: 'Pet accessories, lifestyle gifts, stationery and seasonal items.',
    examples: ['Pet feeders & toys', 'Stationery', 'Seasonal goods', 'Gift sets'],
    region: 'Yiwu, Ningbo',
  },
  {
    id: 'lighting',
    name: 'Lighting & Décor',
    desc: 'Indoor lighting, smart lighting, home décor and seasonal display items.',
    examples: ['LED lighting', 'Smart bulbs', 'Décor accents', 'Display fixtures'],
    region: 'Zhongshan, Foshan',
  },
]

const limits = [
  'Restricted goods (firearms, controlled chemicals, narcotics).',
  'Counterfeit or trademark-infringing products.',
  'Highly regulated medical devices unless you provide proper certifications.',
  'Live animals or perishable food without adequate cold-chain capability.',
]

export default function Products() {
  const containerRef = useRef(null)
  useEffect(() => {
    let cancelled = false; let cleanup = null
    ;(async () => {
      try {
        const mod = await import('@strikingly/sdk')
        if (cancelled) return
        const cfg = (await import('../strk-img-config.json')).default || {}
        if (mod?.ImageHelper?.loadImages && containerRef.current) cleanup = mod.ImageHelper.loadImages(cfg, containerRef.current)
      } catch {}
    })()
    return () => { cancelled = true; if (typeof cleanup === 'function') cleanup() }
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Products We Source"
        title="Categories we source from China every week"
        description="From small accessories to full container loads of furniture — these are the categories where our team has direct factory relationships and active inspection coverage."
      >
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">
          Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productGroups.map((p) => (
              <article key={p.id} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[3/2] overflow-hidden bg-slate-100">
                  <img
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-strk-img-id={`prod-cat-${p.id}-img`}
                    data-strk-img={`[prod-cat-${p.id}-name] [prod-cat-${p.id}-desc] china manufacturing factory`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`prod-cat-${p.id}-name`} className="text-lg font-semibold text-slate-900">{p.name}</h3>
                  <p id={`prod-cat-${p.id}-desc`} className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.examples.map((ex) => (
                      <li key={ex} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">{ex}</li>
                    ))}
                  </ul>
                  <p className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                    <MapPin className="h-3 w-3" /> Main region: {p.region}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-red-600">Don&rsquo;t see your product?</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                We can probably still source it
              </h2>
              <p className="mt-4 text-base text-slate-600">
                If your product is made in China, we can help. The list above shows our most active categories — but we regularly take on new products outside this list. Send us your specs and we&rsquo;ll let you know quickly whether we&rsquo;re the right fit.
              </p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">
                Send your product details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8">
              <h3 className="text-base font-semibold text-slate-900">Products we don&rsquo;t source</h3>
              <p className="mt-2 text-sm text-slate-600">For legal and ethical reasons we don&rsquo;t handle the following:</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {limits.map((l) => (
                  <li key={l} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

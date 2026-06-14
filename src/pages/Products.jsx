import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Boxes,
  Shirt,
  Cpu,
  Sofa,
  Package,
  Factory,
  ArrowRight,
  MapPin,
  CheckCircle2,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/PageHero'
import InquiryForm from '@/components/InquiryForm'

const categories = [
  {
    id: 'consumer',
    name: 'Consumer Products',
    sub: 'Household, lifestyle, pet, stationery, kitchenware',
    icon: Boxes,
    clusters: 'Yongkang, Yiwu, Guangzhou',
    examples: [
      'Stainless steel cookware',
      'Storage containers and organizers',
      'Pet bowls, leashes, carriers',
      'Stationery, office supplies, gifts',
    ],
  },
  {
    id: 'industrial',
    name: 'Industrial & Hardware',
    sub: 'Machinery parts, tooling, fasteners, OEM metal',
    icon: Factory,
    clusters: 'Shenzhen, Dongguan, Ningbo',
    examples: [
      'CNC machined parts and assemblies',
      'Injection molded components',
      'Fasteners, brackets, and stamped parts',
      'Power tool accessories and consumables',
    ],
  },
  {
    id: 'electronics',
    name: 'Electronics & Components',
    sub: 'Consumer electronics, PCBs, batteries, accessories',
    icon: Cpu,
    clusters: 'Shenzhen, Dongguan, Suzhou',
    examples: [
      'Consumer electronics (audio, smart home)',
      'PCBs and electronic assemblies',
      'Batteries, chargers, power banks',
      'Cables, connectors, accessories',
    ],
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    sub: 'Knitwear, workwear, home textiles, OEM fabrics',
    icon: Shirt,
    clusters: 'Guangzhou, Haining, Nantong',
    examples: [
      'Knitwear, woven tops, pants, dresses',
      'Workwear and uniforms',
      'Home textiles: towels, bedding, curtains',
      'OEM fabrics: cotton, polyester, blends',
    ],
  },
  {
    id: 'home',
    name: 'Furniture & Home',
    sub: 'Indoor & outdoor furniture, kitchen, decor',
    icon: Sofa,
    clusters: 'Foshan, Zhongshan, Hangzhou',
    examples: [
      'Indoor furniture: chairs, tables, sofas',
      'Outdoor and patio furniture',
      'Lighting, decor, mirrors',
      'Kitchen cabinets and bathroom vanities',
    ],
  },
  {
    id: 'packaging',
    name: 'Packaging & Print',
    sub: 'Boxes, bags, labels, custom printing',
    icon: Package,
    clusters: 'Shenzhen, Dongguan, Wenzhou',
    examples: [
      'Custom boxes: rigid, folding, mailers',
      'Paper bags, pouches, and wraps',
      'Labels, stickers, and shrink sleeves',
      'Custom printing and finishing',
    ],
  },
]

export default function Products() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Products We Source"
        headline="Six categories we handle every week, across China's main manufacturing clusters"
        subline="We focus on the categories and regions where we have the strongest factory network and the deepest quality control experience. If you don't see your product below, ask — we probably have a vetted factory for it."
        ctaLabel="Ask about your product"
        ctaTo="/contact"
        bgQuery="[page-hero-headline] [page-hero-subline]"
      />

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {categories.map((c, idx) => {
              const Icon = c.icon
              return (
                <div
                  key={c.id}
                  id={c.id}
                  className="rounded-2xl border border-hairline bg-white overflow-hidden shadow-card hover:shadow-card-hover transition-shadow flex flex-col scroll-mt-24"
                >
                  <div className="aspect-[16/9] relative">
                    <div
                      className="w-full h-full"
                      data-strk-bg-id={`cat-bg-${c.id}-${Math.random().toString(36).slice(2, 7)}`}
                      data-strk-bg="[page-hero-headline] [page-hero-subline]"
                      data-strk-bg-ratio="16x9"
                      data-strk-bg-width="900"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3">
                      <div className="icon-tile">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-bold text-brand-navy">{c.name}</h2>
                    </div>
                    <p className="mt-3 text-sm text-ink-soft leading-relaxed">{c.sub}</p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-ink">
                      <MapPin className="w-3.5 h-3.5 text-muted-ink" />
                      <span className="text-muted-ink">Main clusters:</span>
                      <span className="font-semibold text-ink">{c.clusters}</span>
                    </div>
                    <div className="mt-5 pt-5 border-t border-hairline">
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-ink">
                        Common products in this category
                      </div>
                      <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-ink">
                        {c.examples.map((e) => (
                          <li key={e} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-status-success flex-shrink-0" />
                            <span>{e}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow">Don\'t see your category?</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy">
                We probably still have a factory for it
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                The list above covers our highest-volume categories, but our
                network includes thousands of factories across China. If your
                product isn\'t listed, send a short brief and we will tell you
                honestly whether we can help — and what it would cost.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink">
                {[
                  'Replies within 1 business day',
                  'No commitment to send a brief',
                  'Honest answer if we are not the right fit',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="mt-7 btn-secondary inline-flex">
                See all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm sourcePage="products" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

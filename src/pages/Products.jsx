import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Cpu, Shirt, Home, Sparkles, Package, Wrench, Tent, Car, ArrowRight, Check } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import Section, { SectionHeader } from '@/components/shared/Section'
import InquiryForm from '@/components/shared/InquiryForm'
import { PRODUCT_CATEGORIES } from '@/content/site'

const ICONS = {
  'consumer-electronics': Cpu,
  apparel: Shirt,
  'home-goods': Home,
  beauty: Sparkles,
  packaging: Package,
  industrial: Wrench,
  'sports-outdoor': Tent,
  'auto-parts': Car,
}

const CATEGORY_IMAGES = {
  'consumer-electronics': 'consumer electronics factory production line',
  apparel: 'apparel and textile factory cutting and sewing',
  'home-goods': 'home and kitchen goods on a retail shelf',
  beauty: 'beauty and cosmetics packaging line',
  packaging: 'custom retail packaging boxes and mailer bags',
  industrial: 'CNC machining and metal parts on a workbench',
  'sports-outdoor': 'outdoor and sports equipment display',
  'auto-parts': 'automotive parts and accessories',
}

const Hero = () => {
  const ref = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), [])
  return (
    <section ref={ref} className="bg-white border-b border-slate-200">
      <div className="container-content py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="kicker">Products we source</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight">
            Categories we cover, with vetted factories in each
          </h1>
          <p className="mt-5 text-lg md:text-xl text-primary-600 leading-relaxed">
            These are the eight product categories we work in most often. For each one, we have a network of pre-screened factories with on-site audits updated every 24 months.
          </p>
        </div>
      </div>
    </section>
  )
}

const ProductDetail = () => {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref} className="space-y-6">
      {PRODUCT_CATEGORIES.map((p, idx) => {
        const Icon = ICONS[p.id] || Package
        const reverse = idx % 2 === 1
        return (
          <div
            key={p.id}
            id={p.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center bg-white border border-slate-200 rounded-xl overflow-hidden`}
          >
            <div className={`lg:col-span-5 ${reverse ? 'lg:order-2' : ''}`}>
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  data-strk-img-id={`prod-${p.id}-img-4e${idx}`}
                  data-strk-img={`[prod-${p.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={CATEGORY_IMAGES[p.id]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className={`lg:col-span-7 p-6 md:p-8 ${reverse ? 'lg:order-1' : ''}`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-primary-50 text-primary">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 id={`prod-${p.id}-title`} className="text-xl md:text-2xl font-semibold text-primary">
                  {p.title}
                </h3>
              </div>
              <p className="text-base md:text-lg text-primary-600 leading-relaxed mb-5">
                {p.desc}
              </p>
              <div className="mb-5">
                <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">Common items</p>
                <div className="flex flex-wrap gap-2">
                  {p.examples.map((e) => (
                    <span key={e} className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-primary-700 text-xs font-medium">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-primary-700">
                {[
                  'Pre-screened factory network',
                  'Sample consolidation across suppliers',
                  'AQL inspection capability in category',
                  'Compliance documentation support',
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const Products = () => (
  <>
    <Hero />

    <Section>
      <ProductDetail />
    </Section>

    <Section soft>
      <SectionHeader
        kicker="Don\'t see your category?"
        title="We likely have suppliers outside this list"
        description="The list above covers 80% of what we source. For anything else — pet products, stationery, lighting, hardware, toys — we will use the same process: search, shortlist, verify, and report."
      />
      <div className="text-center">
        <Link to="/contact" className="btn-primary">
          Ask us about your category
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>

    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5">
          <p className="kicker">Start a project</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            Tell us what you want to source.
          </h2>
          <p className="mt-4 md:mt-5 text-base md:text-lg text-primary-600 leading-relaxed">
            We will reply within one business day with candidate factories, sample pricing, and a fee structure for your project.
          </p>
        </div>
        <div className="lg:col-span-7">
          <InquiryForm sourcePage="products" />
        </div>
      </div>
    </Section>
  </>
)

export default Products

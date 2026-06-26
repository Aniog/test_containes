import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import Button from '@/components/shared/Button'
import ServiceIcon from '@/components/shared/ServiceIcon'
import StockImage from '@/components/shared/StockImage'
import InquiryForm from '@/components/shared/InquiryForm'
import { services } from '@/data/content'

const detailBlocks = [
  {
    id: 'qc',
    title: 'Independent quality inspections',
    description:
      'Inspections are scheduled when they make the most sense for your order. We follow AQL sampling standards, document defects with photos, and provide clear severity classifications so you can decide whether to ship, rework, or hold.',
    points: [
      'Pre-production check for raw materials and components',
      'During-production inspection at 20-40% completion',
      'Pre-shipment inspection on finished goods',
      'Reports delivered within 24 hours with photos',
    ],
    image: {
      imgId: 'services-qc-img-9c4a72',
      query: '[services-detail-qc-title]',
    },
  },
  {
    id: 'shipping',
    title: 'Shipping and export documentation',
    description:
      'We coordinate freight forwarding and handle the paperwork required for international export. You choose the mode — sea, air, or rail — and the incoterm that fits your business.',
    points: [
      'Sea (FCL and LCL), air, and China-Europe rail options',
      'Commercial invoice, packing list, and certificate of origin',
      'Customs declarations and HS code guidance',
      'Door-to-door, port-to-port, or warehouse delivery',
    ],
    image: {
      imgId: 'services-shipping-img-5b8e2d',
      query: '[services-detail-shipping-title]',
    },
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Sourcing services for overseas B2B buyers"
        description="Six core services that cover the full journey from supplier search to delivery at your warehouse. Pick the ones you need."
        image={{
          imgId: 'services-hero-bg-7d2e9c',
          query: '[services-hero-title]',
        }}
      />

      <section className="py-20 md:py-24 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((s) => (
              <article
                key={s.id}
                className="bg-white border border-brand-line rounded-xl p-6 md:p-7 hover:shadow-md hover:border-brand-ink/30 transition-all"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-brand-mist text-brand-ink">
                  <ServiceIcon name={s.icon} className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-lg md:text-xl font-semibold text-brand-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-brand-muted leading-relaxed">
                  {s.summary}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-brand-text/85"
                    >
                      <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brand-mist">
        <div className="container-page space-y-16 md:space-y-24">
          {detailBlocks.map((block, idx) => (
            <div
              key={block.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <StockImage
                  imgId={block.image.imgId}
                  query={block.image.query}
                  ratio="4x3"
                  width={900}
                  alt=""
                  className="w-full"
                />
              </div>
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2
                  id={`services-detail-${block.id}-title`}
                  className="text-2xl md:text-3xl font-bold text-brand-ink leading-tight"
                >
                  {block.title}
                </h2>
                <p className="mt-4 text-base md:text-lg text-brand-muted leading-relaxed">
                  {block.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {block.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-sm md:text-base text-brand-text/85"
                    >
                      <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold shrink-0">
                        ✓
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Start a Project"
                title="Tell us what you need to source"
                description="A sourcing manager will review your inquiry and reply within one business day with the next step."
              />
              <ul className="mt-8 space-y-3 text-sm md:text-base text-brand-text/85">
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                  <span>No commitment required to request a quote</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                  <span>NDA available on request</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                  <span>All communication in English</span>
                </li>
              </ul>
              <Link
                to="/case-studies"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent-2"
              >
                See buyer case studies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm source="services" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
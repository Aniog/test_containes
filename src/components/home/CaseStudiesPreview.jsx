import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

const cases = [
  {
    id: 'kitchenware-us',
    tag: 'Home & Kitchen · United States',
    title: 'US kitchenware brand cut defect rate from 6% to under 1%',
    result: '6% → 0.8% defect rate',
    summary:
      'After two bad shipments ordered through a B2B platform, we audited three factories, re-selected the supplier, and inspected every shipment for 18 months.',
    imgId: 'case-kitchenware-1f58d3',
  },
  {
    id: 'audio-eu',
    tag: 'Consumer Electronics · Germany',
    title: 'German electronics importer launched a private-label audio line in 14 weeks',
    result: '14 weeks brief → delivery',
    summary:
      'From supplier shortlist and samples to CE documentation, pre-shipment inspection, and consolidated sea freight to Hamburg.',
    imgId: 'case-audio-8c31e6',
  },
  {
    id: 'furniture-au',
    tag: 'Furniture · Australia',
    title: 'Australian retailer consolidated 4 suppliers into one reliable supply chain',
    result: '28% landed-cost saving',
    summary:
      'We renegotiated with verified manufacturers, combined QC across orders, and merged cargo into shared containers to Sydney.',
    imgId: 'case-furniture-6b90a2',
  },
]

const testimonials = [
  {
    quote:
      'The inspection reports are so detailed that our team in Texas can approve shipments without flying to China. That alone pays for the service.',
    name: 'Operations Director',
    company: 'US kitchenware brand',
  },
  {
    quote:
      'They told us to walk away from a factory we had already paid a deposit to — and they were right. That honesty is why we still work together.',
    name: 'Founder',
    company: 'German electronics importer',
  },
]

const CaseStudiesPreview = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real projects, measurable outcomes"
          description="A few examples of how we help importers reduce risk, improve quality, and lower landed costs."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {cases.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[16/9] overflow-hidden bg-paper">
                <img
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[case-${item.id}-tag] [case-${item.id}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p id={`case-${item.id}-tag`} className="text-sm font-medium text-brand-600">
                  {item.tag}
                </p>
                <h3 id={`case-${item.id}-title`} className="mt-2 text-lg font-semibold leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-body">{item.summary}</p>
                <p className="mt-4 inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                  {item.result}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.company}
              className="rounded-xl border border-line bg-paper p-6 md:p-8"
            >
              <Quote className="h-6 w-6 text-brand-600" />
              <blockquote className="mt-4 text-base leading-relaxed text-ink md:text-lg">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-slate-500">
                <span className="font-semibold text-ink">{t.name}</span> · {t.company}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-base font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            Read all case studies <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesPreview

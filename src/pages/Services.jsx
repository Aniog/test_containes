import { ClipboardCheck, Factory, PackageCheck, SearchCheck, Ship } from 'lucide-react'
import Container from '../components/site/Container.jsx'
import SectionHeader from '../components/site/SectionHeader.jsx'
import InquiryForm from '../components/site/InquiryForm.jsx'

const services = [
  ['Supplier sourcing', SearchCheck, 'Supplier search, comparison, RFQ coordination, communication review, and shortlist preparation.'],
  ['Factory verification', Factory, 'Business information checks, production capability review, document requests, and factory visit coordination when needed.'],
  ['Quality inspection', ClipboardCheck, 'Pre-production, during-production, final random inspection, packaging checks, and photo-based inspection summaries.'],
  ['Production follow-up', PackageCheck, 'Sample tracking, production milestone updates, packaging confirmation, labeling checks, and corrective action follow-up.'],
  ['Shipping coordination', Ship, 'Carton data, shipping marks, export document coordination, forwarder communication, and shipment handover support.'],
]

const Services = () => (
  <>
    <section className="bg-brand-navy py-20 text-white md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-sky">Services</p>
            <h1 id="services-page-title" className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              China sourcing services for overseas purchasing teams
            </h1>
            <p id="services-page-desc" className="mt-5 text-lg leading-8 text-slate-200">
              SSourcing China supports supplier discovery, verification, quality control, production follow-up, and shipping coordination with a practical buyer-side process.
            </p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white p-3 shadow-2xl shadow-black/20">
            <img
              alt="China factory quality control and sourcing service team"
              className="h-80 w-full rounded-2xl object-cover"
              data-strk-img-id="services-factory-team-img-d2a584"
              data-strk-img="[services-page-desc] [services-page-title]"
              data-strk-img-ratio="3x2"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
      </Container>
    </section>

    <section className="bg-white py-16 text-slate-900 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="What we do"
          title="Service coverage that follows the real sourcing workflow"
          description="Each service can be used independently or combined into an end-to-end sourcing project depending on your product risk, supplier experience, and order stage."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, Icon, text]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
              <Icon className="h-8 w-8 text-brand-blue" />
              <h2 className="mt-5 text-xl font-semibold text-brand-navy">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>

    <section className="bg-slate-50 py-16 text-slate-900 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Best fit"
            title="When to use a China sourcing agent"
            description="Our support is most useful when supplier information is incomplete, product details are technical, or you need independent China-side follow-up before making purchasing decisions."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {['New supplier search', 'Factory identity concerns', 'Custom product development', 'Sample or quality issues', 'Bulk order inspection', 'Export shipment coordination'].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold text-brand-navy shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>

    <section className="bg-brand-sky py-16 text-slate-900 md:py-24">
      <Container>
        <InquiryForm compact />
      </Container>
    </section>
  </>
)

export default Services

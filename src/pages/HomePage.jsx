import { ArrowRight, BadgeCheck, Boxes, ClipboardCheck, Factory, FileSearch, Globe2, PackageCheck, SearchCheck, ShieldCheck, Ship, Truck } from 'lucide-react'
import Container from '../components/site/Container.jsx'
import SectionHeader from '../components/site/SectionHeader.jsx'
import InquiryForm from '../components/site/InquiryForm.jsx'

const services = [
  ['Supplier sourcing', SearchCheck, 'Shortlist manufacturers that match your product, order volume, certifications, and export market expectations.'],
  ['Factory verification', Factory, 'Check business scope, production capability, basic compliance documents, and whether the supplier is suitable for your project.'],
  ['Quality inspection', ClipboardCheck, 'Arrange pre-production, during-production, and final random inspections with clear reports and practical corrective actions.'],
  ['Production follow-up', PackageCheck, 'Track samples, production progress, packaging, labeling, and shipment readiness before goods leave the factory.'],
  ['Shipping coordination', Ship, 'Coordinate export documents, freight information, carton data, delivery timing, and supplier-forwarder communication.'],
]

const processSteps = [
  ['01', 'Requirement review', 'Clarify product specs, quantity, quality expectations, certifications, target market, and delivery needs.'],
  ['02', 'Supplier search and screening', 'Identify relevant suppliers and compare capability, communication, pricing structure, and project fit.'],
  ['03', 'Samples and negotiation', 'Manage sample requests, supplier questions, revisions, buyer feedback, and practical commercial terms.'],
  ['04', 'Production and QC', 'Follow production milestones and arrange inspections based on your order risk and quality priorities.'],
  ['05', 'Shipping handover', 'Coordinate packing details, documents, forwarder communication, and shipment status until handover.'],
]

const productGroups = [
  ['Consumer goods', 'Homeware, gifts, pet products, travel goods, stationery, and private label retail products.'],
  ['Packaging and print', 'Custom boxes, labels, bags, displays, manuals, inserts, and e-commerce packaging.'],
  ['Electronics and accessories', 'Chargers, cables, smart accessories, small devices, components, and related packaging.'],
  ['Industrial supplies', 'Hardware, tools, metal parts, plastic parts, fixtures, and production consumables.'],
  ['Textiles and apparel', 'Garments, bags, uniforms, fabrics, trims, and promotional textile products.'],
  ['Machinery and parts', 'Light machinery, spare parts, equipment accessories, tooling, and custom components.'],
]

const problems = [
  'Unclear supplier identity or trading company confusion',
  'Different quality standards between buyer and factory',
  'Weak English communication and slow follow-up',
  'Samples approved but bulk goods produced differently',
  'Last-minute packaging, labeling, or document issues',
  'Shipment coordination gaps between supplier and forwarder',
]

const trustPoints = [
  ['Local China execution', 'On-the-ground supplier communication, document checking, sample follow-up, and factory visit coordination.'],
  ['Practical reporting', 'Clear summaries, inspection findings, photo evidence, and action points that help buyers make decisions.'],
  ['Buyer-side focus', 'Support for overseas buyers who need less guesswork and more structured supplier discussions.'],
  ['Process transparency', 'Updates at sourcing, sample, production, inspection, and shipment stages.'],
]

const caseStudies = [
  {
    title: 'Private label packaging project',
    sector: 'E-commerce packaging',
    result: 'Shortlisted factories, clarified material specs, and coordinated samples before bulk order negotiation.',
    imgId: 'case-packaging-qc-91f2b7',
    titleId: 'case-packaging-title',
    descId: 'case-packaging-desc',
  },
  {
    title: 'Electrical accessory supplier check',
    sector: 'Consumer electronics accessories',
    result: 'Reviewed export experience, sample consistency, basic certificates, and factory communication before buyer selection.',
    imgId: 'case-electronics-factory-44c8a1',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    title: 'Final inspection before shipment',
    sector: 'Home goods order',
    result: 'Identified packaging defects and labeling mismatches early enough for supplier correction before container loading.',
    imgId: 'case-shipping-inspection-73de20',
    titleId: 'case-shipping-title',
    descId: 'case-shipping-desc',
  },
]

const faqs = [
  ['Do you work with small and mid-sized buyers?', 'Yes. We support overseas buyers with clear product requirements and realistic order quantities. If the project is not suitable for factory sourcing, we explain the limitations.'],
  ['Can you verify whether a supplier is a real factory?', 'We can check available business information, request documents, review production capability, and arrange factory visits when needed. Verification should be combined with samples and QC.'],
  ['Do you handle quality inspections?', 'Yes. We coordinate inspections based on product type and order stage, including photo reports, defect notes, measurements, packaging checks, and follow-up actions.'],
  ['Can you arrange shipping?', 'We coordinate shipping information and communication with suppliers or freight forwarders. Freight booking can be managed with your forwarder or a suitable logistics partner.'],
]

const scrollToInquiry = () => {
  document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const Home = () => (
  <>
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="hero-factory-qc-bg-19b4e2"
        data-strk-bg="[hero-subtitle] [hero-title] [hero-kicker]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40" />
      <Container className="relative py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p id="hero-kicker" className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-brand-sky ring-1 ring-white/20">
              China-based sourcing support for overseas buyers
            </p>
            <h1 id="hero-title" className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 md:text-xl">
              SSourcing China helps international buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical China-side support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={scrollToInquiry} className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-brand-navy">
                Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
              </button>
              <a href="/services" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-navy">
                View services
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {['Supplier screening', 'QC coordination', 'Shipping follow-up'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-semibold text-white backdrop-blur">
                  <BadgeCheck className="mb-2 h-5 w-5 text-brand-amber" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white p-6 text-brand-navy shadow-2xl shadow-black/30">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">Sourcing control desk</p>
            <div className="mt-6 space-y-4">
              {[
                ['Supplier shortlist', 'Factory type, export experience, MOQ, and response quality'],
                ['Verification notes', 'Business scope, documents, capability, and practical risks'],
                ['QC follow-up', 'Samples, production status, inspection findings, and corrective actions'],
                ['Shipping handover', 'Packing list, carton data, marks, documents, and forwarder timing'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-900">
                  <p className="font-semibold text-brand-navy">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-brand-sky p-4 text-sm font-medium leading-6 text-slate-700">
              Built for overseas buyers who need practical China-side sourcing, inspection, production, and shipping coordination.
            </div>
          </div>
        </div>
      </Container>
    </section>

    <section id="services" className="bg-white py-16 text-slate-900 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Services"
          title="China sourcing support from supplier search to shipment handover"
          description="Use SSourcing China as your local coordination partner when you need more visibility, better supplier communication, and practical quality controls before goods leave China."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, Icon, text]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-brand-navy">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>

    <section id="process" className="bg-slate-50 py-16 text-slate-900 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Sourcing process"
              title="A structured process for better sourcing decisions"
              description="Each step is designed to reduce avoidable sourcing risk while keeping your project moving forward with clear next actions."
            />
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img
                alt="Factory production line and quality control process in China"
                className="h-72 w-full object-cover"
                data-strk-img-id="process-factory-line-img-82ad31"
                data-strk-img="[process-image-caption] [process-title-text]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <p id="process-image-caption" className="p-5 text-sm leading-6 text-slate-600">
                Practical factory communication, sample tracking, production follow-up, inspection, and shipping coordination.
              </p>
              <span id="process-title-text" className="sr-only">Structured China sourcing process</span>
            </div>
          </div>
          <div className="space-y-4">
            {processSteps.map(([number, title, text]) => (
              <article key={number} className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-sm sm:grid-cols-[4rem_1fr]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-lg font-semibold text-white">
                  {number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>

    <section id="products" className="bg-white py-16 text-slate-900 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Products we source"
          title="Broad sourcing coverage with category-specific checks"
          description="We focus on matching the right supplier type to your product, order size, quality level, and export destination rather than sending generic supplier lists."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productGroups.map(([title, text], index) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-900">
              <Boxes className="h-7 w-7 text-brand-blue" />
              <h3 className="mt-4 text-lg font-semibold text-brand-navy">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Category {String(index + 1).padStart(2, '0')}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>

    <section id="problems" className="bg-brand-navy py-16 text-white md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-sky">Problems we solve</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Reduce common sourcing gaps before they become expensive problems
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200 md:text-lg">
              International purchasing often fails because key details are assumed, not checked. SSourcing China keeps the process practical and documented.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {problems.map((problem) => (
              <div key={problem} className="flex gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-medium leading-6 text-white">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-amber" />
                {problem}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>

    <section id="trust" className="bg-slate-50 py-16 text-slate-900 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Trust points"
          title="Clear communication, documented checks, and China-side coordination"
          description="We do not promise shortcuts. We help buyers make better decisions through structured information, supplier visibility, and practical follow-up."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
              <Globe2 className="h-7 w-7 text-brand-blue" />
              <h3 className="mt-4 text-lg font-semibold text-brand-navy">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>

    <section id="case-studies" className="bg-white py-16 text-slate-900 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Case studies"
          title="Examples of practical sourcing support"
          description="Representative project situations showing how structured sourcing, verification, QC, and logistics coordination support overseas buyers."
          align="center"
        />
        <span id="case-studies-heading" className="sr-only">SSourcing China sourcing case studies factory inspection shipping quality control</span>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-sm">
              <img
                alt={study.title}
                className="h-56 w-full object-cover"
                data-strk-img-id={study.imgId}
                data-strk-img={`[${study.descId}] [${study.titleId}] [case-studies-heading]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <p className="text-sm font-semibold text-brand-blue">{study.sector}</p>
                <h3 id={study.titleId} className="mt-2 text-xl font-semibold text-brand-navy">{study.title}</h3>
                <p id={study.descId} className="mt-3 text-sm leading-6 text-slate-600">{study.result}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>

    <section id="faq" className="bg-slate-50 py-16 text-slate-900 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions from overseas buyers"
            description="Straight answers about how our sourcing agent service works and where it can help reduce uncertainty."
          />
          <div className="space-y-4">
            {faqs.map(([question, answer], index) => (
              <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-sm" open={index === 0}>
                <summary className="cursor-pointer text-base font-semibold text-brand-navy marker:text-brand-blue">
                  {question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>

    <section id="inquiry" className="bg-brand-sky py-16 text-slate-900 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">Start a sourcing inquiry</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">
              Tell us what you need to source from China
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Send product details, quantity, target market, and any current supplier concerns. We will review the information and suggest the most relevant next steps.
            </p>
            <div className="mt-8 space-y-4 rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
              <div className="flex gap-3">
                <FileSearch className="mt-1 h-5 w-5 shrink-0 text-brand-blue" />
                <p className="text-sm leading-6 text-slate-600">Useful attachments can include product photos, spec sheets, target prices, packaging references, or supplier quotations.</p>
              </div>
              <div className="flex gap-3">
                <Truck className="mt-1 h-5 w-5 shrink-0 text-brand-blue" />
                <p className="text-sm leading-6 text-slate-600">If shipping is part of the project, include destination country, preferred Incoterms, and timing requirements.</p>
              </div>
            </div>
          </div>
          <InquiryForm />
        </div>
      </Container>
    </section>
  </>
)

export default Home

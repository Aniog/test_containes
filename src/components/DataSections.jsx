import { CheckCircle2, ClipboardCheck, Factory, PackageSearch, Search, Ship, ShieldCheck, Truck, Wrench } from 'lucide-react'
import SectionShell from './SectionShell.jsx'

export const services = [
  { title: 'Supplier Sourcing', icon: Search, desc: 'Shortlist suitable manufacturers based on product requirements, capacity, export experience, and communication quality.' },
  { title: 'Factory Verification', icon: Factory, desc: 'Check business licenses, factory profile, production capability, and whether the supplier matches your expectations.' },
  { title: 'Quality Inspection', icon: ClipboardCheck, desc: 'Coordinate pre-production checks, during-production inspections, and final random inspections with practical reporting.' },
  { title: 'Production Follow-up', icon: Wrench, desc: 'Track milestones, samples, packaging, labeling, and key production issues before shipment.' },
  { title: 'Shipping Coordination', icon: Ship, desc: 'Support shipment planning, carton details, export documents, and coordination with freight partners.' },
  { title: 'Sourcing Project Management', icon: ShieldCheck, desc: 'Manage the supplier search, quote comparison, sample follow-up, inspection, and shipment communication in one workflow.' },
]

export const processSteps = [
  ['01', 'Requirement review', 'We clarify specifications, target market, quantity, packaging, compliance needs, and timeline.'],
  ['02', 'Supplier search', 'We identify and compare potential suppliers, then filter by fit, responsiveness, and production capability.'],
  ['03', 'Verification and quotation', 'We check supplier background, request structured quotations, and help compare practical options.'],
  ['04', 'Samples and production', 'We follow sample changes, purchase order details, packaging, production schedule, and key risks.'],
  ['05', 'Inspection and shipment', 'We coordinate quality checks, shipment readiness, documents, and handover to your freight route.'],
]

export const products = [
  'Consumer electronics and accessories',
  'Packaging and promotional products',
  'Home, kitchen, and lifestyle goods',
  'Furniture, fixtures, and decor',
  'Apparel, textiles, and bags',
  'Industrial parts and hardware',
  'Pet, outdoor, and sports products',
  'Custom OEM and private label items',
]

export const cases = [
  { title: 'Private label packaging project', result: 'Compared suppliers, refined sample requirements, and coordinated final inspection before export.', detail: 'A North American buyer needed practical supplier screening for custom packaging with strict branding details.' },
  { title: 'Factory verification before deposit', result: 'Reviewed factory credentials and production setup before the buyer placed a larger order.', detail: 'An EU importer wanted confidence that the supplier could produce at the required quality level.' },
  { title: 'Production follow-up for mixed goods', result: 'Tracked timelines, packaging changes, carton data, and shipment coordination across several suppliers.', detail: 'A distributor needed one China-side contact to reduce communication gaps and missed details.' },
]

export const faqs = [
  ['Do you only work with large orders?', 'No. We review each project based on product complexity, supplier availability, and whether our support can create clear value.'],
  ['Can you help if we already have a supplier?', 'Yes. We can support factory verification, quality inspection, production follow-up, or shipment coordination with existing suppliers.'],
  ['Do you guarantee the lowest price?', 'No. We focus on reliable supplier matching, practical price comparison, quality control, and reducing sourcing risk.'],
  ['What information should I send?', 'Product specifications, target quantity, destination market, packaging needs, target timeline, and any supplier issues you have faced.'],
]

export function ServicesGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map(({ title, icon: Icon, desc }) => (
        <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Icon className="h-6 w-6" /></div>
          <h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-650 text-slate-700">{desc}</p>
        </article>
      ))}
    </div>
  )
}

export function ProcessTimeline() {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {processSteps.map(([number, title, desc]) => (
        <article key={number} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
          <span className="text-sm font-black text-blue-700">{number}</span>
          <h3 className="mt-4 text-lg font-black text-slate-950">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">{desc}</p>
        </article>
      ))}
    </div>
  )
}

export function ProductsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-sm">
          <PackageSearch className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
          <span className="font-bold leading-6 text-slate-900">{product}</span>
        </div>
      ))}
    </div>
  )
}

export function TrustPoints() {
  const points = ['China-side supplier communication', 'Practical verification before decisions', 'Clear inspection and production updates', 'Export and shipping coordination support']
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {points.map((point) => (
        <div key={point} className="rounded-2xl bg-slate-950 p-5 text-white">
          <CheckCircle2 className="h-6 w-6 text-cyan-300" />
          <p className="mt-4 text-sm font-bold leading-6 text-white">{point}</p>
        </div>
      ))}
    </div>
  )
}

export function ProblemsSolved() {
  const problems = [
    ['Unclear supplier reliability', 'We help screen suppliers and verify key business and production information.'],
    ['Poor communication and slow follow-up', 'We keep sourcing details structured and help clarify requirements with factories.'],
    ['Quality issues found too late', 'We coordinate inspection points before products leave the factory.'],
    ['Shipping and document confusion', 'We help align carton data, readiness, and export coordination with your logistics plan.'],
  ]
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {problems.map(([title, desc]) => (
        <article key={title} className="rounded-2xl border border-cyan-100 bg-cyan-50 p-6 text-slate-950">
          <Truck className="h-6 w-6 text-cyan-700" />
          <h3 className="mt-4 text-xl font-black text-slate-950">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700">{desc}</p>
        </article>
      ))}
    </div>
  )
}

export function CaseStudyCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {cases.map((item) => (
        <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
          <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-700">{item.detail}</p>
          <div className="mt-5 rounded-xl bg-blue-50 p-4 text-sm font-semibold leading-6 text-blue-900">{item.result}</div>
        </article>
      ))}
    </div>
  )
}

export function FAQList() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {faqs.map(([question, answer]) => (
        <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm" open={question === faqs[0][0]}>
          <summary className="cursor-pointer list-none text-lg font-black text-slate-950">{question}</summary>
          <p className="mt-4 text-sm leading-7 text-slate-700">{answer}</p>
        </details>
      ))}
    </div>
  )
}

export function ReusableSectionSet({ type }) {
  if (type === 'services') {
    return <SectionShell eyebrow="Services" title="China sourcing support from supplier search to shipment"><ServicesGrid /></SectionShell>
  }
  return null
}

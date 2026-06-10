import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, Tag,
  FileSearch, Boxes, MessageSquare, FileText, ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/site/PageHero'
import CTASection from '../components/site/CTASection'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify manufacturer-direct suppliers in China that match your specs, MOQ, target price and certification needs. You get a clear shortlist with pricing comparison.',
    bullets: ['Specs-based supplier search', 'Manufacturer vs trader screening', '3–5 supplier shortlists with quotes', 'Capability and capacity check'],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site visits and audits before you commit. We confirm the supplier really is a factory and document their capability, equipment and conditions.',
    bullets: ['Business license verification', 'On-site factory visit', 'Photo and video walkthrough', 'Capability audit report'],
  },
  {
    icon: FileSearch,
    title: 'Sample Management',
    desc: 'We collect samples from multiple suppliers, consolidate them and ship to you. Sample feedback is communicated clearly and in writing.',
    bullets: ['Multi-supplier sample requests', 'Consolidated international shipping', 'Sample comparison sheet', 'Iteration management'],
  },
  {
    icon: MessageSquare,
    title: 'Price Negotiation',
    desc: 'Manufacturer-direct negotiation on FOB price, MOQ, payment terms and lead time. We negotiate using local market knowledge and benchmark data.',
    bullets: ['FOB / EXW / CIF price negotiation', 'MOQ flexibility', 'Tooling and mold cost negotiation', 'Payment terms (T/T, L/C)'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'AQL-based inspections by our QC engineers in China. Reports include photos, measurements, defect categorization and pass/fail recommendation.',
    bullets: ['Pre-production inspection (PPI)', 'During-production inspection (DUPRO)', 'Pre-shipment inspection (PSI)', 'AQL 2.5 / 4.0 sampling'],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Weekly production updates, materials confirmation and milestone tracking. We flag delay risks early so you can plan your launch.',
    bullets: ['Weekly progress reports', 'Material and component verification', 'Lead-time risk flagging', 'Direct factory communication'],
  },
  {
    icon: Tag,
    title: 'Private Label / OEM',
    desc: 'Custom packaging, logo printing, color matching and full OEM development. We handle artwork, dielines and pre-press approvals.',
    bullets: ['Custom packaging design support', 'Logo printing and color matching', 'Tooling and mold management', 'Certification (CE, FCC, RoHS) support'],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'Consolidation, sea/air freight booking, customs documentation and door-to-door delivery to your warehouse. Multi-supplier consolidation included.',
    bullets: ['LCL / FCL sea freight', 'Air and express freight', 'Multi-supplier consolidation', 'Customs documentation'],
  },
]

const fees = [
  { title: 'Service-fee model', desc: 'A clear monthly or per-project fee — best for ongoing buyers running multiple SKUs and POs.' },
  { title: 'Percentage-of-order', desc: 'A transparent percentage of FOB order value — best for one-off projects or when piloting a new supplier.' },
  { title: 'Per-service pricing', desc: 'Pay per inspection, factory audit or shipment — best when you only need a single service.' },
]

export default function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Sourcing services for global buyers, end-to-end"
        description="From the first supplier search to door-step delivery, we cover every step of buying from China. Pick the services you need or hand the whole project to us."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">
            Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            See how we work
          </Link>
        </div>
      </PageHero>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map(({ icon: Icon, title, desc, bullets }) => (
              <article key={title} className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-900 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{desc}</p>
                <ul className="mt-5 grid gap-2 text-sm text-slate-700">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fee structure */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-red-600">How we charge</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Transparent, flexible pricing</h2>
            <p className="mt-4 text-base text-slate-600">
              We agree on the fee model in writing before any work starts. We never take hidden commissions from suppliers.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {fees.map((f) => (
              <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <FileText className="h-6 w-6 text-red-600" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-red-600">Sourcing clusters</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">We cover the major manufacturing regions in China</h2>
              <p className="mt-4 text-base text-slate-600">
                Our QC engineers and project managers work across the main export clusters, so factory visits and inspections happen quickly.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-center gap-2"><Boxes className="h-4 w-4 text-red-600" /> Guangdong (electronics, hardware)</li>
                <li className="flex items-center gap-2"><Boxes className="h-4 w-4 text-red-600" /> Zhejiang (small goods, Yiwu)</li>
                <li className="flex items-center gap-2"><Boxes className="h-4 w-4 text-red-600" /> Jiangsu (textiles, machinery)</li>
                <li className="flex items-center gap-2"><Boxes className="h-4 w-4 text-red-600" /> Fujian (footwear, apparel)</li>
                <li className="flex items-center gap-2"><Boxes className="h-4 w-4 text-red-600" /> Shandong (industrial, food packaging)</li>
                <li className="flex items-center gap-2"><Boxes className="h-4 w-4 text-red-600" /> Hebei / Tianjin (steel, fasteners)</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <img
                alt="World map highlighting trade between China and global buyers"
                className="aspect-[4/3] w-full object-cover"
                data-strk-img-id="services-map-3a8c12"
                data-strk-img="china manufacturing regions map global trade shipping"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

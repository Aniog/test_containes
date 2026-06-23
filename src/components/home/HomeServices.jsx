import { Link } from 'react-router-dom'
import {
  Search,
  ShieldCheck,
  PackageCheck,
  Handshake,
  Factory,
  ClipboardCheck,
  Ship,
  Tag,
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const SERVICES = [
  {
    icon: Search,
    title: 'Supplier Search',
    desc: 'We identify multiple qualified suppliers per requirement, compare quotes, and shortlist factories that match your category, MOQ and price target.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site visit, business license check, capacity review, and a clear audit report with photos so you know exactly who you are buying from.',
  },
  {
    icon: PackageCheck,
    title: 'Sample Management',
    desc: 'We collect, consolidate and ship samples to you. We also document spec changes between rounds so nothing is lost in translation.',
  },
  {
    icon: Handshake,
    title: 'Price Negotiation',
    desc: 'Local-language negotiation on unit price, MOQ, payment terms, tooling fees and lead time — backed by real factory benchmarks.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Weekly progress reports, photo updates and risk flags during production so issues are caught before they become delays.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'During-production (DUPRO) and pre-shipment inspection (PSI) using AQL 2.5 / 4.0 standards. You receive a full report before payment release.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'Booking, consolidation, customs documents, FOB / CIF / DDP. Sea, air, rail and express options with transparent freight quotes.',
  },
  {
    icon: Tag,
    title: 'Private Label & OEM',
    desc: 'Packaging design coordination, barcode and labeling compliance, and OEM/ODM project management for your brand.',
  },
]

export default function HomeServices() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Everything you need to import from China — handled by one team"
          description="From the first supplier shortlist to the container leaving the port, we manage the whole chain so you can focus on selling."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl border border-line p-6 shadow-sm hover:shadow-md hover:border-accent/40 transition"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-surface-2 text-accent group-hover:bg-accent group-hover:text-white transition">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-brand text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            View detailed service descriptions →
          </Link>
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import {
  Search, ShieldCheck, PackageCheck, Handshake, Factory, ClipboardCheck, Ship, Tag, ArrowRight, Check,
} from 'lucide-react'
import PageHero from '@/components/PageHero'
import InquiryForm from '@/components/InquiryForm'

const SERVICES = [
  {
    icon: Search,
    title: 'Supplier Search',
    bullets: [
      'Category mapping across China’s manufacturing clusters',
      '3–5 vetted supplier shortlist per project',
      'Normalized quotation comparison',
      'Capacity, certifications and export-history check',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    bullets: [
      'On-site visit by our local team',
      'Business license, factory address and capacity verification',
      'Workshop, equipment and worker review',
      'Structured audit report with photos and findings',
    ],
  },
  {
    icon: PackageCheck,
    title: 'Sample Management',
    bullets: [
      'Sample request coordination across multiple suppliers',
      'Sample consolidation and bulk shipment to your office',
      'Spec change tracking between sample rounds',
      'Pre-production sample (PPS) approval workflow',
    ],
  },
  {
    icon: Handshake,
    title: 'Price & Terms Negotiation',
    bullets: [
      'Local-language negotiation by experienced buyers',
      'Unit price, MOQ, packaging and tooling fees',
      'Payment terms (T/T, L/C, deposit/balance)',
      'Lead time commitments and penalty clauses',
    ],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    bullets: [
      'Weekly written progress reports',
      'On-site visits during critical milestones',
      'Risk flagging: materials, capacity, holidays',
      'Change order management and documentation',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection (QC)',
    bullets: [
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection (PSI) at AQL 2.5 / 4.0',
      'Function and safety testing where applicable',
      'PDF report with 100+ photos before payment release',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    bullets: [
      'Sea, air, rail and express options',
      'EXW / FOB / CIF / DDP support',
      'Multi-supplier consolidation in one container',
      'Customs documents, HS codes and origin certificates',
    ],
  },
  {
    icon: Tag,
    title: 'Private Label & OEM',
    bullets: [
      'Logo, packaging and barcode coordination',
      'Compliance labeling for EU / US / AU / GCC markets',
      'Tooling, mold ownership and IP protection',
      'OEM/ODM project management end-to-end',
    ],
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A full-stack sourcing service — from first quote to delivered container"
        description="Pick the services you need or hand the entire chain to one team. Every engagement starts with a clear scope and written deliverables."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl border border-line p-6 sm:p-8 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-semibold text-brand text-xl">{s.title}</h2>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-ink-soft">
                      <Check className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                      <span className="text-[15px] leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-brand text-white rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold leading-snug">Not sure which services you need?</h3>
              <p className="mt-2 text-white/80 max-w-2xl">Send us your product brief — we'll recommend the right scope and a transparent fee structure within one business day.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold shrink-0"
            >
              Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <InquiryForm />
    </>
  )
}

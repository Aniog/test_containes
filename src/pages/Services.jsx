import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Section, SectionHeader } from '../components/Section'
import Process from '../components/home/Process'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  PackageCheck,
  Ship,
  Boxes,
  FileText,
  Truck,
  Tag,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description:
      'We identify and shortlist qualified Chinese suppliers that match your product specs, MOQ, lead time, and budget.',
    details: [
      'Sourcing from 800+ vetted factories plus targeted outreach',
      'Apples-to-apples quotation comparison',
      'MOQ negotiation and trial order strategy',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Supplier Verification',
    description:
      'Before you commit, we confirm the supplier is a real manufacturer with the capacity and certifications you need.',
    details: [
      'Business license and tax registration checks',
      'On-site factory visit and capacity review',
      'Risk and reputation screening',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Factory Audits',
    description:
      'Full factory audits covering production capability, quality systems and working conditions.',
    details: [
      'Quality system audit (ISO style)',
      'Social compliance audit (BSCI / SMETA style)',
      'Photographic and video evidence with written report',
    ],
  },
  {
    icon: FileText,
    title: 'Sample Management',
    description:
      'We collect, inspect, and ship samples to you, manage rounds of revisions, and lock down a golden sample for production.',
    details: [
      'Sample consolidation from multiple suppliers',
      'Sample comparison and recommendation',
      'Golden sample sealed for the production line',
    ],
  },
  {
    icon: PackageCheck,
    title: 'Quality Inspection',
    description:
      'In-line and pre-shipment inspections following ANSI/ASQ Z1.4 (AQL) sampling, performed by qualified QC engineers.',
    details: [
      'Pre-production inspection (PPI)',
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI) with photo / video report',
    ],
  },
  {
    icon: Boxes,
    title: 'Production Follow-up',
    description:
      'We track production progress so deadlines stay realistic and surprises are reported early, not at the end.',
    details: [
      'Weekly progress reports in English',
      'Issue escalation and resolution',
      'Schedule adjustments before they become delays',
    ],
  },
  {
    icon: Tag,
    title: 'Private Label / OEM',
    description:
      'From product customization to packaging design, we manage OEM projects end to end.',
    details: [
      'Custom product specifications and tooling',
      'Logo, packaging and insert printing',
      'Tooling ownership protection',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    description:
      'Booking sea, air, rail, or express shipments with customs documentation handled correctly.',
    details: [
      'Door-to-door and FBA direct shipping',
      'Multi-supplier consolidation at our warehouse',
      'Customs documents and HS code support',
    ],
  },
  {
    icon: Truck,
    title: 'Amazon FBA Prep',
    description:
      'We prep cartons to Amazon FBA standards and deliver directly to your designated FBA warehouse.',
    details: [
      'FNSKU labeling and polybagging',
      'Carton labeling and weight limits',
      'Ship to US, EU, UK, JP and more',
    ],
  },
]

export default function Services_Page() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Sourcing services built around B2B buyers"
        description="A complete toolkit for sourcing reliably from China — supplier search, verification, quality control, production follow-up, and shipping."
      />

      <Section className="bg-white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.description}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                {s.details.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Process />

      <Section className="bg-slate-50">
        <div className="rounded-2xl bg-slate-900 text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to start a sourcing project?</h2>
            <p className="mt-3 text-slate-300">
              Send us your requirements. We will respond within 1 business day with a sourcing plan.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </Section>
    </>
  )
}

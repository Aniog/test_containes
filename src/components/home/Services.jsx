import React from 'react'
import { Section, SectionHeader } from '../Section'
import { Link } from 'react-router-dom'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  PackageCheck,
  Ship,
  Boxes,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description:
      'We identify and shortlist qualified Chinese suppliers that match your product specs, MOQ, and price targets.',
  },
  {
    icon: ShieldCheck,
    title: 'Supplier Verification',
    description:
      'Business license checks, factory background, capacity review, and on-site visits before you commit.',
  },
  {
    icon: ClipboardCheck,
    title: 'Factory Audit',
    description:
      'Full social and quality audits at the factory, including production lines, equipment, and management.',
  },
  {
    icon: PackageCheck,
    title: 'Quality Inspection',
    description:
      'Pre-production, during-production (DPI) and pre-shipment (PSI) inspections following AQL standards.',
  },
  {
    icon: Boxes,
    title: 'Production Follow-up',
    description:
      'We track production progress, manage samples, and report weekly so your timeline stays on track.',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    description:
      'Booking, consolidation, customs, sea, air and express delivery from China to your destination.',
  },
]

export default function Services() {
  return (
    <Section id="services" className="bg-slate-50">
      <SectionHeader
        eyebrow="What We Do"
        title="End-to-end sourcing services from China"
        description="From finding the right supplier to delivering your goods, we cover every step so you can buy from China with confidence."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-blue-700">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          See full service details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}

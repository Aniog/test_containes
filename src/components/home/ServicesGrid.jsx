import { Link } from 'react-router-dom'
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  PackageCheck,
  ArrowRight,
} from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

const services = [
  {
    icon: Search,
    title: 'Supplier sourcing',
    desc: 'We identify, shortlist and compare suppliers based on your specs, target price, MOQ and certifications.',
  },
  {
    icon: ShieldCheck,
    title: 'Factory verification',
    desc: 'Background checks, business license review and on-site factory audits to confirm real capacity.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality inspection',
    desc: 'AQL-based inspections — pre-production, during production and pre-shipment — with photo reports.',
  },
  {
    icon: Factory,
    title: 'Production follow-up',
    desc: 'We track production timelines on the ground, flag delays early and keep you updated every week.',
  },
  {
    icon: PackageCheck,
    title: 'Private label & OEM',
    desc: 'Packaging design, branding, labeling and OEM coordination, including compliance for your market.',
  },
  {
    icon: Ship,
    title: 'Shipping & logistics',
    desc: 'Consolidation, freight forwarding, customs clearance and door-to-door delivery by sea, air or rail.',
  },
]

export default function ServicesGrid() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeading
          eyebrow="What we do"
          title="End-to-end sourcing services from China"
          description="One partner for the full sourcing lifecycle — from finding the right supplier to delivering your order at the destination."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition"
            >
              <span className="flex w-12 h-12 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                <Icon className="w-6 h-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-blue-700 font-semibold hover:text-blue-800"
          >
            See all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

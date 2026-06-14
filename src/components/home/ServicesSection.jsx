import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Factory,
  ShieldCheck,
  Search,
  ClipboardCheck,
  PackageCheck,
  Truck,
  Layers,
  ArrowRight,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    id: 'supplier-search',
    icon: Search,
    title: 'Supplier Sourcing',
    summary:
      'Shortlist 3–5 pre-vetted factories that match your specs, quantity, and budget.',
    bullets: ['Domain-matched factories', 'Verified business licenses', 'Past export references'],
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    summary:
      'On-site audits covering production lines, equipment, capacity, and workforce.',
    bullets: ['On-site audit reports', 'Capacity & lead-time checks', 'Compliance documentation'],
  },
  {
    id: 'sampling',
    icon: Layers,
    title: 'Sampling & Prototyping',
    summary:
      'Coordinate gold samples, pre-production samples, and revisions before mass production.',
    bullets: ['Gold sample approval', 'Lab testing arranged', 'Sample cost negotiation'],
  },
  {
    id: 'quality-inspection',
    icon: ShieldCheck,
    title: 'Quality Inspection',
    summary:
      'DPI, during-production, and pre-shipment inspections against your AQL standards.',
    bullets: ['AQL-based inspections', 'Photo & video reports', 'Corrective action follow-up'],
  },
  {
    id: 'production-follow-up',
    icon: ClipboardCheck,
    title: 'Production Follow-up',
    summary:
      'Weekly progress updates with photos so you always know where your order stands.',
    bullets: ['Weekly photo updates', 'Milestone tracking', 'Delay & risk escalation'],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    summary:
      'Consolidate, export, and ship FOB, CIF, or DDP — sea, air, or rail — to your door.',
    bullets: ['Sea / air / rail freight', 'Customs documentation', 'Door-to-door options'],
  },
]

export default function ServicesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-y bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="eyebrow">What we do</div>
            <h2 id="services-headline" className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy">
              Full-service China sourcing, end to end
            </h2>
            <p
              id="services-sub"
              className="mt-4 text-ink-soft leading-relaxed"
            >
              From the first supplier shortlist to the final container landing at
              your warehouse, we run the process in your timezone and report in
              clear English. Pick the services you need — or hand the project to
              us end to end.
            </p>
            <div className="mt-6 hidden lg:block">
              <div className="rounded-2xl overflow-hidden border border-hairline aspect-[4/3]">
                <div
                  className="w-full h-full"
                  data-strk-bg-id="services-bg-inspect-b9d4a1"
                  data-strk-bg="[services-headline] [services-sub]"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="900"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {services.map((s) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.id}
                    className="rounded-2xl border border-hairline bg-white p-6 shadow-card hover:shadow-card-hover transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="icon-tile">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-brand-navy">{s.title}</h3>
                        <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
                          {s.summary}
                        </p>
                        <ul className="mt-3 space-y-1.5 text-sm text-ink">
                          {s.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <PackageCheck className="w-4 h-4 mt-0.5 text-status-success flex-shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="btn-primary">
                See all services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Request a tailored scope
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

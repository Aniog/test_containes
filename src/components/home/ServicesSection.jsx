import { useRef, useEffect } from 'react'
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, Package } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Search',
    desc: 'We identify and shortlist suppliers that match your product specifications, quality standards, and target pricing.',
    imgId: 'svc-supplier-search',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site audits to confirm factory legitimacy, production capacity, certifications, and working conditions.',
    imgId: 'svc-factory-verify',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-shipment, during-production, and pre-production inspections with detailed reports and photo evidence.',
    imgId: 'svc-qc-inspect',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'Weekly progress reports, sample approvals, and milestone tracking to keep your orders on schedule.',
    imgId: 'svc-production',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'Freight forwarding, customs documentation, and logistics management from factory to your warehouse.',
    imgId: 'svc-shipping',
  },
  {
    icon: Package,
    title: 'Custom Packaging',
    desc: 'Design and sourcing of branded packaging, labeling, and inserts to strengthen your brand presence.',
    imgId: 'svc-packaging',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      return ImageHelper.loadImages(strkImgConfig, ref.current)
    }
  }, [])

  return (
    <section ref={ref} className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 id="services-title" className="text-3xl font-bold tracking-tight sm:text-4xl">
            End-to-End Sourcing Services
          </h2>
          <p id="services-subtitle" className="mx-auto mt-3 max-w-2xl text-slate-500">
            From supplier identification to doorstep delivery, we handle every step of the sourcing process.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-video w-full overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={s.imgId}
                    data-strk-img={`[svc-desc-${s.imgId}] [svc-title-${s.imgId}] [services-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                      <Icon className="h-5 w-5 text-navy-950" />
                    </div>
                    <h3 id={`svc-title-${s.imgId}`} className="text-lg font-semibold">
                      {s.title}
                    </h3>
                  </div>
                  <p id={`svc-desc-${s.imgId}`} className="text-sm text-slate-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

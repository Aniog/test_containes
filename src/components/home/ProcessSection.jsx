import { useEffect, useRef } from 'react'
import { MessageSquare, Search, FileCheck, Factory, Eye, Ship, Handshake } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    desc: 'Share your product requirements, target price, and expected volume. We review every detail before we start.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Research',
    desc: 'We map the market, filter out unqualified factories, and shortlist 3-5 suppliers that match your criteria.',
  },
  {
    step: '03',
    icon: FileCheck,
    title: 'Factory Verification',
    desc: 'On-site audits, license validation, and production capability checks to confirm legitimacy and capacity.',
  },
  {
    step: '04',
    icon: Factory,
    title: 'Sample & Negotiation',
    desc: 'We manage sample production, review specifications, and negotiate pricing and terms on your behalf.',
  },
  {
    step: '05',
    icon: Eye,
    title: 'Production & QC',
    desc: 'Weekly follow-ups, milestone inspections, and pre-shipment checks to ensure quality and on-time delivery.',
  },
  {
    step: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'Freight coordination, customs documentation, and logistics tracking until goods reach your warehouse.',
  },
  {
    step: '07',
    icon: Handshake,
    title: 'Ongoing Support',
    desc: 'We stay available for reorders, supplier relationship management, and continuous improvement.',
  },
]

export default function ProcessSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-padding bg-surface">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            How It Works
          </span>
          <h2 id="section-title-process" className="mt-3 text-3xl font-bold md:text-4xl">
            Our 7-Step Sourcing Process
          </h2>
          <p id="section-subtitle-process" className="mt-4 text-slate-500">
            A transparent, proven process designed to reduce risk and deliver consistent results.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative rounded-lg border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <span className="absolute right-4 top-4 text-3xl font-extrabold text-slate-100">
                {s.step}
              </span>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

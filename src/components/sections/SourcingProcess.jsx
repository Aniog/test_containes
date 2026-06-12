import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const STEPS = [
  {
    id: 'brief',
    n: '01',
    title: 'Share your brief',
    desc: 'Send us product details, target price, quantity, certifications and any reference samples or drawings.',
  },
  {
    id: 'shortlist',
    n: '02',
    title: 'Supplier shortlist',
    desc: 'We propose 3–5 vetted manufacturers with quotes, MOQs, lead times and capability profiles.',
  },
  {
    id: 'audit',
    n: '03',
    title: 'Factory audit',
    desc: 'On-site visit to confirm the factory is real, validate equipment, capacity and quality controls.',
  },
  {
    id: 'samples',
    n: '04',
    title: 'Samples & approval',
    desc: 'Coordinate samples, revisions and customer approvals — including photos and video reviews.',
  },
  {
    id: 'production',
    n: '05',
    title: 'Production follow-up',
    desc: 'Weekly progress reports, line photos and DUPRO inspections to catch issues early.',
  },
  {
    id: 'inspection',
    n: '06',
    title: 'Pre-shipment inspection',
    desc: 'AQL-based final inspection with a detailed report. Goods only ship after you approve.',
  },
  {
    id: 'shipping',
    n: '07',
    title: 'Shipping & customs',
    desc: 'Consolidation, export docs, freight booking and customs clearance to your destination.',
  },
]

export default function SourcingProcess({ kicker = 'How it works', title = 'Our 7-step sourcing process' }) {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">{kicker}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
            <p id="process-subtitle" className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              A transparent, repeatable workflow used for every order. You always know what stage your
              order is at, who's responsible, and what's coming next.
            </p>

            <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
              <img
                alt="Quality control inspector checking finished goods on a Chinese factory production line"
                data-strk-img-id="process-qc-inspector-9b4f1d"
                data-strk-img="[process-subtitle] quality inspector clipboard factory production line"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <ol className="lg:col-span-7 space-y-4">
            {STEPS.map((s) => (
              <li
                key={s.id}
                className="flex items-start gap-5 rounded-xl border border-slate-200 bg-white p-5 md:p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-base font-bold text-white">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 md:text-base">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '@/components/SectionHeader'

const STEPS = [
  {
    n: '01',
    title: 'Brief & requirements',
    desc: 'Tell us your product, target price, MOQ, certifications and timeline. We confirm scope and sign an NDA when needed.',
    imgId: 'process-step-brief-1a2b3c',
  },
  {
    n: '02',
    title: 'Supplier search & shortlist',
    desc: 'We screen multiple Chinese factories, compare quotations, and present a shortlist with capacity, certifications and benchmarks.',
    imgId: 'process-step-search-2b3c4d',
  },
  {
    n: '03',
    title: 'Factory verification',
    desc: 'On-site audit: license, workshop, equipment, real production capacity and existing export references. You receive a structured report.',
    imgId: 'process-step-audit-3c4d5e',
  },
  {
    n: '04',
    title: 'Samples & negotiation',
    desc: 'We coordinate samples across factories, consolidate them to you, and negotiate price, MOQ, tooling and payment terms in Chinese.',
    imgId: 'process-step-samples-4d5e6f',
  },
  {
    n: '05',
    title: 'Production follow-up',
    desc: 'Weekly status updates, photos and on-site visits during production. Risks are flagged early so launches stay on schedule.',
    imgId: 'process-step-production-5e6f7a',
  },
  {
    n: '06',
    title: 'Quality inspection (QC)',
    desc: 'DUPRO during production and PSI before shipment, against AQL standards. Full PDF report before final payment is released.',
    imgId: 'process-step-qc-6f7a8b',
  },
  {
    n: '07',
    title: 'Shipping & delivery',
    desc: 'Booking, consolidation, customs, sea / air / rail / express. We track until cargo arrives at your warehouse or 3PL.',
    imgId: 'process-step-shipping-7a8b9c',
  },
]

export default function HomeProcess() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sourcing Process"
          title="A clear 7-step process — no black boxes"
          description="Each step has a deliverable and a sign-off. You always know what stage your project is in and what comes next."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="bg-white rounded-2xl border border-line overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
            >
              <div className="aspect-[4/3] bg-surface-2 overflow-hidden">
                <img
                  alt={s.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={s.imgId}
                  data-strk-img={`[process-${s.n}-title] sourcing process step factory china`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-xs font-bold tracking-wider text-accent">STEP {s.n}</div>
                <h3 id={`process-${s.n}-title`} className="mt-1 font-semibold text-brand text-lg">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-brand text-white hover:bg-brand-2 px-5 py-3 rounded-lg font-semibold transition"
          >
            Read the full process
          </Link>
        </div>
      </div>
    </section>
  )
}

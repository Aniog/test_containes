import { useEffect, useRef } from 'react'
import PageHeader from '@/components/shared/PageHeader'
import CTASection from '@/components/shared/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  MessageSquare,
  Search,
  ShieldCheck,
  Factory,
  ClipboardCheck,
  Ship,
  CheckCircle2,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Sourcing brief & kickoff',
    duration: '1–2 business days',
    desc:
      'You share the product specs, target price, quantity and any references. We confirm the scope, ask the right questions and propose a service plan with a fixed fee.',
    bullets: [
      'Free initial review of your brief',
      'Service plan with clear deliverables',
      'Fixed fee, no hidden commissions',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier shortlist & quotes',
    duration: '5–10 business days',
    desc:
      'We screen 10–20 candidates, talk to factories in Mandarin, then deliver a clear shortlist of 3–5 verified suppliers with a side-by-side comparison.',
    bullets: [
      'Supplier profile and capacity check',
      'Itemized quotes, MOQ and lead times',
      'Sample request and consolidation',
    ],
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory verification',
    duration: '2–3 business days',
    desc:
      'Before you commit, we visit the chosen factory in person. Photos, video, and a written audit confirm real production capacity and quality systems.',
    bullets: [
      'Business license and tax record check',
      'Production line walkthrough',
      'Workforce and quality system review',
    ],
  },
  {
    number: '04',
    icon: Factory,
    title: 'Order placement & production',
    duration: '3–8 weeks',
    desc:
      'We coordinate the contract, deposit, materials and production schedule. Weekly status updates keep your team informed without you chasing the factory.',
    bullets: [
      'Sales contract and PI review',
      'Weekly production status reports',
      'Early escalation on delays or issues',
    ],
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Quality inspection',
    duration: '1–2 days per inspection',
    desc:
      'AQL-based inspections at the stages that matter. You get a full photo and video report before the balance payment is released.',
    bullets: [
      'During production check (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Detailed report with measurements and defect log',
    ],
  },
  {
    number: '06',
    icon: Ship,
    title: 'Shipping & delivery',
    duration: '2–5 weeks',
    desc:
      'Consolidation, freight booking, customs documents and door-to-door delivery to your warehouse, distributor or Amazon FBA destination.',
    bullets: [
      'Sea, air or rail freight',
      'Complete export documents',
      'Door-to-door including Amazon FBA',
    ],
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="How it works"
        title="A clear sourcing process, from brief to delivery"
        description="Most issues with overseas sourcing come from unclear processes. Ours is documented, predictable and visible — so you always know what is happening with your order."
      />

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <ol className="space-y-10">
            {steps.map((s, idx) => (
              <li key={s.number} className="relative pl-16 md:pl-24">
                <div className="absolute left-0 top-0 flex flex-col items-center">
                  <span className="flex w-12 h-12 md:w-16 md:h-16 items-center justify-center rounded-full bg-blue-700 text-white font-bold text-sm md:text-base">
                    {s.number}
                  </span>
                  {idx < steps.length - 1 && (
                    <span className="w-px flex-1 bg-slate-200 mt-2" style={{ minHeight: 80 }} />
                  )}
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex w-10 h-10 items-center justify-center rounded-md bg-blue-50 text-blue-700 shrink-0">
                      <s.icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-900">{s.title}</h2>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                        Typical duration: {s.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed">{s.desc}</p>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="Want to see this process applied to your product?"
        description="Send us your sourcing brief. We'll send back a realistic timeline and indicative quote within 1 business day."
      />
    </div>
  )
}

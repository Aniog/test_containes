import PageHero from '../components/sections/PageHero'
import CtaBanner from '../components/sections/CtaBanner'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    n: '01',
    title: 'Requirements briefing',
    timeline: 'Day 1–2',
    desc: 'You share product specs, target price, quantity, certifications and timeline. We confirm scope, sign an NDA if needed, and quote a clear service fee.',
    output: 'Project brief + service quote',
    imgId: 'process-step1-7711a2',
  },
  {
    n: '02',
    title: 'Supplier research & shortlist',
    timeline: 'Week 1–2',
    desc: 'We search our verified network, online B2B platforms and offline contacts. We screen for business license, capability, certifications and minimum order quantity.',
    output: 'Shortlist of 3–5 suppliers with comparison',
    imgId: 'process-step2-44c1ab',
  },
  {
    n: '03',
    title: 'Samples & price negotiation',
    timeline: 'Week 2–5',
    desc: 'We request samples, evaluate them with you, then negotiate price, MOQ and payment terms in Chinese. We document specs and approvals in writing.',
    output: 'Approved sample + agreed terms',
    imgId: 'process-step3-9dfa01',
  },
  {
    n: '04',
    title: 'Factory verification',
    timeline: 'Week 3–5',
    desc: 'We visit the factory in person before any deposit is paid, verify business license, scope and production capacity. Optional full audit on request.',
    output: 'On-site audit report',
    imgId: 'process-step4-12bee4',
  },
  {
    n: '05',
    title: 'Order placement & production',
    timeline: 'Week 4–12',
    desc: 'We place the PO with payment milestones, follow production on the ground, and send weekly status updates with photos and metrics.',
    output: 'Weekly production reports',
    imgId: 'process-step5-aa9201',
  },
  {
    n: '06',
    title: 'Quality inspection',
    timeline: 'Before shipment',
    desc: 'We perform AQL-based inspections at the factory, including DUPRO and pre-shipment inspections. You sign off before goods leave China.',
    output: 'PSI/DUPRO inspection report',
    imgId: 'process-step6-5512cd',
  },
  {
    n: '07',
    title: 'Shipping & customs',
    timeline: 'Before/after PSI',
    desc: 'We compare freight forwarder quotes, book the shipment, handle export customs and consolidation if needed. We can quote FOB, CIF or DDP.',
    output: 'BL/AWB and shipping documents',
    imgId: 'process-step7-8a2fff',
  },
  {
    n: '08',
    title: 'Delivery & after-sales',
    timeline: 'After arrival',
    desc: 'We track until arrival, assist with any claims or after-sales issues, and follow up for repeat orders so the relationship gets stronger over time.',
    output: 'Final closing report',
    imgId: 'process-step8-77ccda',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A clear, repeatable sourcing process"
        description="Every project follows the same 8 steps, with written reports and approvals between stages. No surprises, no hidden steps."
        bgQuery="China port shipping containers logistics"
        bgId="how-it-works-bg-9a1cb2"
      />

      <section ref={ref} className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <ol className="space-y-10">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className={`grid gap-8 lg:grid-cols-12 lg:items-center ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="lg:col-span-5">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                    <div className="aspect-[4/3]">
                      <img
                        alt={s.title}
                        data-strk-img-id={s.imgId}
                        data-strk-img={`[step-${s.n}-title] sourcing factory inspection`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm font-semibold text-red-600">Step {s.n}</span>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                      {s.timeline}
                    </span>
                  </div>
                  <h3
                    id={`step-${s.n}-title`}
                    className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl"
                  >
                    {s.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                    {s.desc}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                    <span className="text-xs uppercase tracking-wider text-slate-500">Output:</span>
                    <span>{s.output}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
